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
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    // Copiamos los estilos cargados en la aplicación principal directamente al iframe
    const styleTags = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map((node) => node.outerHTML)
      .join('\n');

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          ${styleTags}
          <style>
            @page { size: A4 portrait; margin: 0; }
            *, *::before, *::after { box-sizing: border-box; }
            html, body { margin: 0; padding: 0; background-color: #ffffff; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .page-a4 { width: 210mm; height: 297mm; page-break-after: always; break-after: page; position: relative; overflow: hidden; background: #ffffff; }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `);
    doc.close();

    // Esperar a que las imágenes del iframe carguen completamente antes de imprimir
    const win = iframe.contentWindow;
    if (!win) return;

    const imagenes = Array.from(doc.images);
    const promesasImagenes = imagenes.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Avanzar aun si una imagen falla
      });
    });

    Promise.all(promesasImagenes).then(() => {
      setTimeout(() => {
        win.focus();
        win.print();
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 1000);
      }, 250);
    });
  }
}