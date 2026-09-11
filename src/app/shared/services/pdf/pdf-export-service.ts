
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfExportService {

  imprimirHtmlAislado(htmlContent: string): void {

    const iframe = document.createElement('iframe');

    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.visibility = 'hidden';

    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;

    if (!doc) {
      document.body.removeChild(iframe);
      return;
    }

    // =========================================================
    // COPIAR LOS ESTILOS DE LA APLICACIÓN
    // =========================================================

    const styleTags = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((node) => node.outerHTML)
      .join('\n');


    // =========================================================
    // CONVERTIR LAS RUTAS DE IMÁGENES A RUTAS ABSOLUTAS
    // =========================================================

    const parser = new DOMParser();

    const tempDoc = parser.parseFromString(
      `<div>${htmlContent}</div>`,
      'text/html'
    );

    const imagenesTemp = Array.from(
      tempDoc.querySelectorAll('img')
    );

    imagenesTemp.forEach((img) => {

      const src = img.getAttribute('src');

      if (!src) return;

      try {

        const urlAbsoluta = new URL(
          src,
          document.baseURI
        ).href;

        img.setAttribute(
          'src',
          urlAbsoluta
        );

      } catch (error) {

        console.warn(
          'No se pudo convertir la ruta de imagen:',
          src
        );

      }

    });

    const htmlFinal =
      tempDoc.body.firstElementChild?.innerHTML ?? '';


    // =========================================================
    // CREAR DOCUMENTO DEL IFRAME
    // =========================================================

    doc.open();

    doc.write(`
      <!DOCTYPE html>

      <html lang="es">

        <head>

          <meta charset="utf-8">

          <base href="${document.baseURI}">

          ${styleTags}

          <style>

            @page {
              size: A4 portrait;
              margin: 0;
            }

            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background-color: #ffffff;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            body {
              width: 210mm;
            }

            .page-a4 {
              width: 210mm;
              height: 297mm;
              page-break-after: always;
              break-after: page;
              position: relative;
              overflow: hidden;
              background: #ffffff;
            }

            .page-a4:last-child {
              page-break-after: auto;
              break-after: auto;
            }

            img {
              max-width: 100%;
            }

          </style>

        </head>

        <body>

          ${htmlFinal}

        </body>

      </html>
    `);

    doc.close();


    // =========================================================
    // OBTENER VENTANA DEL IFRAME
    // =========================================================

    const win = iframe.contentWindow;

    if (!win) {
      document.body.removeChild(iframe);
      return;
    }


    // =========================================================
    // ESPERAR A QUE CARGUEN LOS ESTILOS
    // =========================================================

    const esperarEstilos = (): Promise<void> => {

      const hojasEstilo = Array.from(
        doc.querySelectorAll<HTMLLinkElement>(
          'link[rel="stylesheet"]'
        )
      );

      if (hojasEstilo.length === 0) {
        return Promise.resolve();
      }

      return Promise.all(

        hojasEstilo.map((hoja) => {

          return new Promise<void>((resolve) => {

            if (hoja.sheet) {
              resolve();
              return;
            }

            hoja.onload = () => resolve();

            hoja.onerror = () => resolve();

            setTimeout(() => {
              resolve();
            }, 5000);

          });

        })

      ).then(() => undefined);

    };


    // =========================================================
    // ESPERAR A QUE CARGUEN LAS IMÁGENES
    // =========================================================

    const esperarImagenes = (): Promise<void> => {

      const imagenes = Array.from(
        doc.images
      );

      if (imagenes.length === 0) {
        return Promise.resolve();
      }

      return Promise.all(

        imagenes.map((img) => {

          return new Promise<void>((resolve) => {

            // La imagen ya cargó correctamente
            if (
              img.complete &&
              img.naturalWidth > 0
            ) {
              resolve();
              return;
            }

            const finalizar = () => {
              resolve();
            };

            img.addEventListener(
              'load',
              finalizar,
              { once: true }
            );

            img.addEventListener(
              'error',
              finalizar,
              { once: true }
            );

            // Evitar que una imagen bloquee
            // todo el proceso indefinidamente
            setTimeout(() => {
              resolve();
            }, 10000);

          });

        })

      ).then(() => undefined);

    };


    // =========================================================
    // ESPERAR A QUE CARGUEN LAS FUENTES
    // =========================================================

    const esperarFuentes = async (): Promise<void> => {

      if ('fonts' in doc) {

        try {

          await doc.fonts.ready;

        } catch {

        }

      }

    };


    // =========================================================
    // ESPERAR TODO ANTES DE IMPRIMIR
    // =========================================================

    Promise.all([
      esperarEstilos(),
      esperarImagenes(),
      esperarFuentes()
    ])
      .then(() => {

        // Dar tiempo adicional al navegador
        // para terminar de renderizar el contenido

        setTimeout(() => {

          win.focus();

          win.print();


          // =====================================================
          // ELIMINAR IFRAME DESPUÉS DE IMPRIMIR
          // =====================================================

          setTimeout(() => {

            if (iframe.parentNode) {
              iframe.parentNode.removeChild(iframe);
            }

          }, 2000);

        }, 500);

      });

  }

}

