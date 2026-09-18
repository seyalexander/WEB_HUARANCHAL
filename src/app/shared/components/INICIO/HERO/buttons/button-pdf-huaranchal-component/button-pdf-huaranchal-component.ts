import { Component, inject } from '@angular/core';
import { PdfExportService } from '../../../../../services/pdf/pdf-export-service';

import { inicioHero } from '../../../../../data/Inicio/Inicio-Hero.data';
import { InicioQueConoceras } from '../../../../../data/Inicio/Inicio-QueConoceras.interface';
import { experienciasInicio } from '../../../../../data/Inicio/Inicio-QueConoceras.data';
import { InicioArtesania, InicioHotspotArtesania } from '../../../../../data/Inicio/Inicio-Artesanias.interface';
import { ambientesArtesania, hotspotsArtesania } from '../../../../../data/Inicio/Inicio-Artesania.data';
import { InicioHistoriaHuaranchal } from '../../../../../data/Inicio/Inicio-Historia.data';
import { InicioPanoramicaHuaranchal } from '../../../../../data/Inicio/Inicio-Panoramica.data';


@Component({
  selector: 'app-button-pdf-huaranchal-component',
  imports: [],
  templateUrl: './button-pdf-huaranchal-component.html',
  styleUrl: './button-pdf-huaranchal-component.css',
})
export class ButtonPdfHuaranchalComponent {

  private pdfService = inject(PdfExportService);

  DataPortada = inicioHero;

  experiencias: InicioQueConoceras[] = experienciasInicio;

  DataArtesania: InicioArtesania[] = ambientesArtesania;

  HotspotsArtesania: InicioHotspotArtesania[] = hotspotsArtesania;

  DataHistoria = InicioHistoriaHuaranchal;

  DataPanoramica = InicioPanoramicaHuaranchal;

  descargarPdf(): void {

    const htmlPdf = `

      ${this.generarPortada()}

      ${this.generarQueConoceras()}

      ${this.generarArtesania()}

      ${this.generarHistoria()}

      ${this.generarPanoramica()}

      

    `;

    this.pdfService.imprimirHtmlAislado(htmlPdf);
  }


  private generarPortada(): string {
    return `
      
      <!-- =====================================================
           PORTADA
      ====================================================== -->

      <div class="page-a4 relative w-[210mm] h-[297mm] overflow-hidden bg-[#2F5D34] text-white">

        <!-- IMAGEN -->

        <img
          src="${this.DataPortada.imagen}"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- OVERLAY -->

        <div
          class="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,35,22,0.94)_0%,rgba(20,35,22,0.82)_38%,rgba(20,35,22,0.40)_72%,rgba(20,35,22,0.20)_100%)]">
        </div>

        <!-- BARRA LATERAL -->

        <div
          class="absolute top-0 right-0 w-[10mm] h-full bg-[#F28C28]">
        </div>

        <!-- DETALLE SUPERIOR -->

        <div
          class="absolute top-[18mm] left-[18mm] flex items-center gap-3">

          <div
            class="w-[22mm] h-[1.5mm] bg-[#F28C28]">
          </div>

          <span
            class="text-[8pt] font-bold tracking-[3px] text-[#F6C445] uppercase">
            ${this.DataPortada.titulo}
          </span>

        </div>

        <!-- CONTENIDO -->

        <div
          class="absolute left-[18mm] top-[62mm] w-[130mm]">

          <span
            class="block text-[9pt] font-bold tracking-[3px] text-[#F6C445] uppercase mb-[5mm]">
            ${this.DataPortada.etiqueta}
          </span>

          <div
            class="w-[28mm] h-[1.5mm] bg-[#F28C28] mb-[7mm]">
          </div>

          <h1
            class="m-0 text-[44pt] leading-[0.9] font-black tracking-tight text-white uppercase">
            ${this.DataPortada.titulo}
          </h1>

          <h2
            class="m-0 mt-[6mm] text-[19pt] leading-tight font-bold text-[#F6C445]">
            ${this.DataPortada.subtitulo}
          </h2>

          <p
            class="m-0 mt-[9mm] w-[112mm] text-[11pt] leading-[1.55] text-slate-100">
            ${this.DataPortada.descripcion}
          </p>

          <div
            class="w-[70mm] h-[0.4mm] bg-white/40 mt-[15mm]">
          </div>

          <p
            class="m-0 mt-[5mm] text-[9pt] leading-relaxed font-semibold text-white">
            ${this.DataPortada.frase}
          </p>

        </div>

        <!-- DECORACIÓN -->

        <div
          class="absolute left-[18mm] bottom-[35mm] flex items-end gap-2">

          <div
            class="w-[3mm] h-[3mm] rounded-full bg-[#F6C445]">
          </div>

          <div
            class="w-[3mm] h-[3mm] rounded-full bg-[#F28C28]">
          </div>

          <div
            class="w-[3mm] h-[3mm] rounded-full bg-[#A4C639]">
          </div>

        </div>

        <!-- FOOTER -->

        <div
          class="absolute left-[18mm] right-[18mm] bottom-[15mm] flex items-center justify-between text-[8pt] font-bold tracking-[1.5px] text-white/85">

          <span>
            ALTO CHICAMA
          </span>

          <span>
            ${this.DataPortada.ubicacion}
          </span>

        </div>

        <!-- NÚMERO -->

        <div
          class="absolute right-[13mm] bottom-[8mm] text-[6.5pt] font-semibold text-white/60">

          01

        </div>

      </div>
    `;
  }


  private generarQueConoceras(): string {

    return `

      <!-- =====================================================
           QUÉ CONOCERÁS
      ====================================================== -->

      <div class="page-a4 relative w-[210mm] h-[297mm] overflow-hidden bg-[#FAFAF7] text-slate-800">


        <!-- =================================================
             FONDO
        ================================================== -->

        <div
          class="absolute -top-[45mm] -right-[45mm] w-[110mm] h-[110mm] rounded-full bg-[#A4C639]/10 blur-3xl">
        </div>

        <div
          class="absolute -bottom-[45mm] -left-[45mm] w-[110mm] h-[110mm] rounded-full bg-[#F28C28]/10 blur-3xl">
        </div>


        <!-- =================================================
             CABECERA
        ================================================== -->

        <div
          class="relative px-[18mm] pt-[18mm]">

          <div
            class="flex items-center gap-3">

            <div
              class="w-[16mm] h-[1.2mm] bg-[#F28C28]">
            </div>

            <span
              class="text-[8pt] font-bold tracking-[3px] uppercase text-[#2F5D34]">

              Experiencias únicas

            </span>

          </div>


          <h2
            class="m-0 mt-[7mm] text-[29pt] leading-[1] font-black tracking-tight text-slate-800">

            ¿Qué encontrarás en

            <span class="text-[#2F5D34]">
              Huaranchal?
            </span>

          </h2>


          <p
            class="m-0 mt-[6mm] w-[150mm] text-[10pt] leading-[1.6] text-slate-600">

            Naturaleza, aventura, relajación y gastronomía se
            encuentran en un destino lleno de paisajes y
            experiencias por descubrir.

          </p>

        </div>


        <!-- =================================================
             EXPERIENCIAS
        ================================================== -->

        <div
          class="relative mt-[13mm] px-[18mm]">


          <!-- LÍNEA CENTRAL -->

          <div
            class="absolute left-[35mm] right-[35mm] top-[35mm] h-[0.5mm] bg-linear-to-r from-[#4F8A3F]/20 via-[#F28C28]/70 to-[#A4C639]/30">
          </div>


          <div
            class="grid grid-cols-2 gap-x-[12mm] gap-y-[17mm]">

            ${this.experiencias.map((experiencia, index) => `

              <article
                class="relative">


                <!-- NÚMERO -->

                <div
                  class="absolute -left-[2mm] -top-[5mm] text-[28pt] leading-none font-black text-[#2F5D34]/10">

                  ${experiencia.numero}

                </div>


                <!-- IMAGEN -->

                <div
                  class="relative mx-auto w-[58mm] h-[58mm]">


                  <!-- ANILLO -->

                  <div
                    class="absolute -inset-[3mm] rounded-full border border-[#2F5D34]/15">
                  </div>


                  <!-- FOTO -->

                  <div
                    class="relative w-full h-full overflow-hidden rounded-full border-[4px] border-white shadow-xl">

                    <img
                      src="${experiencia.imagen}"
                      alt="${experiencia.nombre}"
                      class="w-full h-full object-cover"
                    />


                    <!-- DEGRADADO -->

                    <div
                      class="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent">
                    </div>


                    <!-- ETIQUETA -->

                    <div
                      class="absolute left-0 right-0 bottom-[6mm] px-[5mm]">

                      <span
                        class="text-[6.5pt] font-bold tracking-[1.5px] uppercase text-[#F6C445]">

                        ${experiencia.etiqueta}

                      </span>

                    </div>

                  </div>


                  <!-- PUNTO -->

                  <div
                    class="absolute -right-[2mm] top-[8mm] w-[5mm] h-[5mm] rounded-full border-[1.5mm] border-[#FAFAF7] bg-[#F28C28]">
                  </div>

                </div>


                <!-- TEXTO -->

                <div
                  class="mt-[7mm] text-center">

                  <h3
                    class="m-0 text-[16pt] leading-tight font-black text-slate-800">

                    ${experiencia.nombre}

                  </h3>


                  <p
                    class="m-0 mt-[3mm] text-[8pt] leading-[1.6] text-slate-600">

                    ${experiencia.descripcion}

                  </p>

                </div>

              </article>

            `).join('')}

          </div>

        </div>


        <!-- =================================================
             FRASE FINAL
        ================================================== -->

        <div
          class="absolute left-[18mm] right-[18mm] bottom-[18mm]">

          <div
            class="h-px w-full bg-[#2F5D34]/10">
          </div>

          <div
            class="flex items-center justify-between mt-[5mm]">

            <span
              class="text-[7pt] font-bold tracking-[2px] uppercase text-slate-400">

              Raíces de Huaranchal

            </span>

            <span
              class="text-[7pt] font-bold tracking-[2px] uppercase text-[#F28C28]">

              02

            </span>

          </div>

        </div>


      </div>

    `;
  }


  private generarArtesania(): string {

    const imagenArtesania =
      'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTESANIAS_01.png';

    const elementosPorPagina = 6;


    /*
     * ==========================================================
     * GENERAR PÁGINAS DEL CATÁLOGO
     * ==========================================================
     */

    const paginasArtesania: string[] = [];

    for (
      let inicio = 0;
      inicio < this.HotspotsArtesania.length;
      inicio += elementosPorPagina
    ) {

      const elementosPagina =
        this.HotspotsArtesania.slice(
          inicio,
          inicio + elementosPorPagina
        );

      const numeroPagina =
        Math.floor(inicio / elementosPorPagina) + 1;


      paginasArtesania.push(`

      <!-- ================================================== -->
      <!-- PÁGINA ${numeroPagina} - CATÁLOGO ARTESANAL -->
      <!-- ================================================== -->

      <section class="page-a4 bg-[#F3F1E9] text-[#182019]">

        <!-- Fondo decorativo -->
        <div
          class="absolute inset-0 opacity-[0.035]"
          style="background-image: radial-gradient(circle at 1px 1px, #2F5D34 1px, transparent 0); background-size: 24px 24px;">
        </div>


        <div class="relative z-10 px-[18mm] py-[15mm]">


          <!-- ================================================== -->
          <!-- ENCABEZADO -->
          <!-- ================================================== -->

          <div class="flex items-end justify-between">

            <div>

              <div class="flex items-center gap-3">

                <div class="h-px w-10 bg-[#2F5D34]"></div>

                <span class="text-[8px] font-bold uppercase tracking-[3px] text-[#2F5D34]">
                  Exploración cultural
                </span>

              </div>


              <h3 class="mt-4 text-[25px] font-black leading-tight tracking-tight text-[#182019]">

                Elementos de la

                <span class="text-[#2F5D34]">
                  colección
                </span>

              </h3>

            </div>


            <!-- Contador -->
            <div class="text-right">

              <p class="text-[28px] font-black leading-none text-[#2F5D34]/15">
                ${String(
        inicio + elementosPagina.length
      ).padStart(2, '0')}
              </p>

              <p class="mt-1 text-[7px] font-bold uppercase tracking-[2px] text-[#687068]">
                ${inicio + 1}
                -
                ${inicio + elementosPagina.length}
                de
                ${this.HotspotsArtesania.length}
              </p>

            </div>

          </div>


          <!-- ================================================== -->
          <!-- DESCRIPCIÓN -->
          <!-- ================================================== -->

          <div class="mt-5 flex items-start gap-4 border-l-[2px] border-[#F6C445] pl-4">

            <p class="max-w-[145mm] text-[9px] leading-[1.8] text-[#5b635d]">

              La colección reúne herramientas, objetos y elementos
              asociados a diferentes dimensiones de la vida tradicional
              de Huaranchal. Cada pieza representa una práctica,
              una necesidad o una forma de relacionarse con el territorio.

            </p>

          </div>


          <!-- ================================================== -->
          <!-- CATÁLOGO -->
          <!-- ================================================== -->

          <div class="mt-8 grid grid-cols-2 gap-x-[7mm] gap-y-[7mm]">


            ${elementosPagina.map((hotspot, indexPagina) => {

        const indexGlobal =
          inicio + indexPagina;

        return `

                <!-- ========================================== -->
                <!-- ELEMENTO ${indexGlobal + 1} -->
                <!-- ========================================== -->

                <article
                  class="overflow-hidden rounded-[4mm] border border-[#d8d8ce] bg-[#FAFAF7] shadow-[0_2px_8px_rgba(24,32,25,0.06)]">


                  <!-- ====================================== -->
                  <!-- IMAGEN -->
                  <!-- ====================================== -->

                  <div class="relative h-[43mm] overflow-hidden bg-[#E8E6DC]">


                    <!-- Fondo interior -->
                    <div class="absolute inset-[4mm] rounded-[2mm] bg-[#F8F7F1]"></div>


                    <!-- Imagen completa -->
                    <img
                      src="${hotspot.imagen}"
                      alt="${hotspot.titulo}"
                      class="relative z-10 h-full w-full object-contain p-[5mm]">


                    <!-- Número -->
                    <div class="absolute left-[4mm] top-[4mm] z-20 flex h-6 w-6 items-center justify-center rounded-full bg-[#2F5D34] text-[7px] font-black text-white shadow-sm">

                      ${String(indexGlobal + 1).padStart(2, '0')}

                    </div>


                  </div>


                  <!-- ====================================== -->
                  <!-- INFORMACIÓN -->
                  <!-- ====================================== -->

                  <div class="px-[5mm] py-[4mm]">


                    <!-- Categoría -->
                    <div class="flex items-center gap-2">

                      <div class="h-px w-5 bg-[#F6C445]"></div>

                      <span class="text-[6px] font-bold uppercase tracking-[1.5px] text-[#2F5D34]">

                        ${hotspot.categoria}

                      </span>

                    </div>


                    <!-- Título -->
                    <h4 class="mt-2 text-[10px] font-black leading-tight text-[#182019]">

                      ${hotspot.titulo}

                    </h4>


                    <!-- Descripción -->
                    <p class="mt-2 text-[7px] leading-[1.65] text-[#626962]">

                      ${hotspot.descripcionCorta}

                    </p>


                  </div>


                </article>

              `;

      }).join('')}


          </div>


          <!-- ================================================== -->
          <!-- INDICADOR DE CONTINUACIÓN -->
          <!-- ================================================== -->

          ${inicio + elementosPagina.length < this.HotspotsArtesania.length
          ? `

              <div class="mt-[8mm] flex items-center justify-between border-t border-[#d5d6ce] pt-3">

                <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#7b827c]">
                  La colección continúa
                </span>

                <span class="text-[7px] font-bold text-[#2F5D34]">
                  Página ${numeroPagina + 1}
                </span>

              </div>

            `
          : `

              <div class="mt-[8mm] rounded-[4mm] border border-[#d7d7cc] bg-[#E8E6DC] px-5 py-4">

                <div class="flex items-start gap-4">

                  <div class="h-9 w-1 shrink-0 bg-[#F6C445]"></div>

                  <div>

                    <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#2F5D34]">
                      Memoria viva
                    </span>

                    <p class="mt-1.5 text-[9px] leading-[1.7] text-[#596159]">

                      Conservar estos objetos significa también conservar
                      las historias, conocimientos y formas de vida que
                      acompañan a las generaciones de Huaranchal.

                    </p>

                  </div>

                </div>

              </div>

            `
        }


        </div>


        <!-- ================================================== -->
        <!-- FOOTER -->
        <!-- ================================================== -->

        <div class="absolute bottom-[10mm] left-[18mm] right-[18mm] flex items-center justify-between border-t border-[#d5d6ce] pt-3">

          <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#7b827c]">

            Raíces de Huaranchal

          </span>


          <span class="text-[7px] text-[#7b827c]">

            Artesanía · ${this.HotspotsArtesania.length} elementos

          </span>

        </div>


      </section>

    `);

    }


    /*
     * ==========================================================
     * PÁGINA 1 - PRESENTACIÓN DE ARTESANÍA
     * ==========================================================
     */

    const paginaPresentacion = `

    <!-- ====================================================== -->
    <!-- PÁGINA 1 - ARTESANÍA -->
    <!-- ====================================================== -->

    <section class="page-a4 bg-[#FAFAF7] text-[#182019]">


      <!-- ================================================== -->
      <!-- ENCABEZADO -->
      <!-- ================================================== -->

      <div class="relative h-[72mm] overflow-hidden bg-[#0b0f0d]">

        <div class="absolute inset-0 bg-gradient-to-r from-[#0b0f0d] via-[#0b0f0d]/90 to-[#2F5D34]/60"></div>

        <div class="absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-[#F6C445]/10 blur-[70px]"></div>


        <div class="relative z-10 px-[18mm] pt-[14mm]">

          <div class="flex items-center gap-3">

            <div class="h-px w-10 bg-[#F6C445]"></div>

            <span class="text-[8px] font-bold uppercase tracking-[3px] text-[#F6C445]">

              Patrimonio artesanal

            </span>

          </div>


          <h2 class="mt-5 max-w-[150mm] text-[29px] font-black leading-[1.05] tracking-tight text-white">

            Objetos que cuentan

            <span class="text-[#F6C445]">
              nuestra historia
            </span>

          </h2>


          <p class="mt-4 max-w-[135mm] text-[10px] leading-[1.8] text-white/65">

            Herramientas, tejidos y objetos tradicionales forman parte
            de la memoria cotidiana de Huaranchal y conservan saberes
            transmitidos entre generaciones.

          </p>

        </div>


        <div class="absolute bottom-0 left-0 h-[3px] w-full bg-[#F6C445]"></div>

      </div>


      <!-- ================================================== -->
      <!-- CONTENIDO -->
      <!-- ================================================== -->

      <div class="px-[18mm] py-[12mm]">


        <div class="grid grid-cols-[82mm_1fr] gap-[12mm] items-start">


          <!-- ============================================== -->
          <!-- IMAGEN -->
          <!-- ============================================== -->

          <div>

            <div class="relative h-[105mm] overflow-hidden rounded-[8mm] bg-[#111713]">


              <img
                src="${imagenArtesania}"
                alt="Artesanía tradicional de Huaranchal"
                class="h-full w-full object-contain">


              <div class="absolute inset-x-0 bottom-0 h-[35mm] bg-gradient-to-t from-black/70 to-transparent"></div>


              <div class="absolute bottom-5 left-5">

                <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#F6C445]">
                  Colección
                </span>


                <p class="mt-1 text-[14px] font-black text-white">
                  Artesanía de Huaranchal
                </p>

              </div>


            </div>

          </div>


          <!-- ============================================== -->
          <!-- INFORMACIÓN -->
          <!-- ============================================== -->

          <div>


            <span class="text-[7px] font-bold uppercase tracking-[3px] text-[#2F5D34]">

              Identidad y tradición

            </span>


            <h3 class="mt-3 text-[22px] font-black leading-tight text-[#182019]">

              Una colección nacida

              <span class="text-[#2F5D34]">
                de la vida cotidiana
              </span>

            </h3>


            <p class="mt-5 text-[10px] leading-[1.9] text-[#5b635d]">

              La artesanía de Huaranchal reúne objetos vinculados
              con el trabajo agrícola, la vestimenta, el tejido,
              la recolección y las actividades cotidianas de sus
              comunidades.

            </p>


            <p class="mt-4 text-[10px] leading-[1.9] text-[#5b635d]">

              Más que objetos utilitarios, estas piezas representan
              conocimientos y prácticas que forman parte de la
              identidad cultural del territorio.

            </p>


            <!-- ============================================ -->
            <!-- FICHA -->
            <!-- ============================================ -->

            <div class="mt-7 border-t border-[#d9ddd7] pt-5">


              <div class="grid grid-cols-2 gap-x-6 gap-y-5">


                <div>

                  <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#8a918b]">
                    Procedencia
                  </span>

                  <p class="mt-1.5 text-[10px] font-bold text-[#182019]">
                    Huaranchal
                  </p>

                </div>


                <div>

                  <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#8a918b]">
                    Región
                  </span>

                  <p class="mt-1.5 text-[10px] font-bold text-[#182019]">
                    La Libertad
                  </p>

                </div>


                <div>

                  <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#8a918b]">
                    Técnica
                  </span>

                  <p class="mt-1.5 text-[10px] font-bold text-[#182019]">
                    Trabajo artesanal
                  </p>

                </div>


                <div>

                  <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#8a918b]">
                    Colección
                  </span>

                  <p class="mt-1.5 text-[10px] font-bold text-[#182019]">
                    Raíces de Huaranchal
                  </p>

                </div>


              </div>


            </div>


            <!-- ============================================ -->
            <!-- AMBIENTES -->
            <!-- ============================================ -->

            <div class="mt-8">


              <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#2F5D34]">

                Presentaciones de la colección

              </span>


              <div class="mt-3 space-y-2">


                ${this.DataArtesania.map((ambiente, index) => `

                  <div class="flex items-center gap-3 border-b border-[#e1e4df] pb-2">


                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#2F5D34] text-[7px] font-black text-white">

                      ${String(index + 1).padStart(2, '0')}

                    </span>


                    <div>

                      <p class="text-[9px] font-bold text-[#182019]">

                        ${ambiente.nombre}

                      </p>


                      <p class="text-[7px] text-[#7b827c]">

                        ${ambiente.subtitulo}

                      </p>

                    </div>


                  </div>

                `).join('')}


              </div>


            </div>


          </div>


        </div>


        <!-- ================================================ -->
        <!-- FRASE -->
        <!-- ================================================ -->

        <div class="mt-[12mm] border-l-[2px] border-[#F6C445] pl-5">

          <p class="text-[11px] italic leading-[1.8] text-[#4f5751]">

            “Cada objeto guarda una historia de quienes hicieron
            de esta tierra su hogar.”

          </p>

        </div>


      </div>


      <!-- ================================================== -->
      <!-- FOOTER -->
      <!-- ================================================== -->

      <div class="absolute bottom-[10mm] left-[18mm] right-[18mm] flex items-center justify-between border-t border-[#dfe2dd] pt-3">

        <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#8a918b]">

          Raíces de Huaranchal

        </span>


        <span class="text-[7px] text-[#8a918b]">

          Patrimonio artesanal

        </span>

      </div>


    </section>

  `;


    /*
     * ==========================================================
     * ORDEN FINAL
     * ==========================================================
     *
     * Primero la presentación.
     * Después todas las páginas necesarias del catálogo.
     *
     */

    return `
    ${paginaPresentacion}
    ${paginasArtesania.join('')}
  `;
  }

  private generarHistoria(): string {

    const historia = this.DataHistoria;

    const acontecimientos = historia.acontecimientos ?? [];
    const datosDestacados = historia.datosDestacados ?? [];

    /*
     * Cantidad de acontecimientos por página.
     *
     * Lo dejamos en 3 porque cada acontecimiento puede tener
     * bastante texto y queremos evitar que el contenido se corte.
     */
    const acontecimientosPorPagina = 3;

    const paginas: string[] = [];

    /*
     * Genera una tarjeta de acontecimiento.
     */
    const generarAcontecimiento = (
      acontecimiento: typeof acontecimientos[number],
      indexGlobal: number,
      esUltimo: boolean
    ): string => {

      const esDestacado = acontecimiento.destacado === true;

      return `
      <article
        class="relative grid grid-cols-[12mm_1fr] gap-[5mm] ${esUltimo ? '' : 'mb-[6mm]'
        }"
      >

        <!-- PUNTO Y LÍNEA -->

        <div class="relative flex justify-center">

          ${!esUltimo
          ? `
                <div
                  class="absolute top-[7mm] bottom-[-6mm] w-[0.4mm] bg-[#D5D7CC]"
                ></div>
              `
          : ''
        }

          <div
            class="relative z-10 flex h-[8mm] w-[8mm] items-center justify-center rounded-full border-[1.5mm] border-[#F3F1E9] ${esDestacado
          ? 'bg-[#F6C445] shadow-[0_0_0_0.4mm_#F6C445]'
          : 'bg-[#2F5D34] shadow-[0_0_0_0.4mm_#2F5D34]'
        }"
          >
          </div>

        </div>


        <!-- CONTENIDO -->

        <div
          class="rounded-[3mm] border ${esDestacado
          ? 'border-[#E4C34C] bg-[#FFF9E7]'
          : 'border-[#DCDDD5] bg-[#FAFAF7]'
        } px-[5mm] py-[4mm]"
        >

          <div
            class="flex items-start justify-between gap-[4mm]"
          >

            <div>

              <div
                class="text-[6px] font-black uppercase tracking-[1.5px] text-[#2F5D34]"
              >
                ${acontecimiento.periodo}
              </div>

              <h3
                class="mt-[1.5mm] text-[10px] font-black leading-tight text-[#182019]"
              >
                ${acontecimiento.titulo}
              </h3>

            </div>


            ${esDestacado
          ? `
                  <span
                    class="shrink-0 rounded-full bg-[#F6C445]/25 px-[2.5mm] py-[1mm] text-[5.5px] font-black uppercase tracking-[1px] text-[#725700]"
                  >
                    Momento clave
                  </span>
                `
          : ''
        }

          </div>


          <p
            class="mt-[2.5mm] text-[7px] leading-[1.55] text-[#626962]"
          >
            ${acontecimiento.descripcion}
          </p>

        </div>

      </article>
    `;
    };


    /*
     * Genera los datos destacados.
     */
    const generarDatosDestacados = (): string => {

      return datosDestacados
        .map((dato) => {

          return `
          <div
            class="rounded-[3mm] border border-[#DCDDD5] bg-[#FAFAF7] px-[4mm] py-[4mm]"
          >

            <div
              class="text-[5.5px] font-black uppercase tracking-[1.3px] text-[#A4C639]"
            >
              ${dato.etiqueta}
            </div>

            <div
              class="mt-[2mm] h-[0.4mm] w-[8mm] bg-[#F6C445]"
            ></div>

            <div
              class="mt-[2.5mm] text-[7px] font-bold leading-[1.45] text-[#303830]"
            >
              ${dato.valor}
            </div>

          </div>
        `;

        })
        .join('');
    };


    /*
     * Dividimos todos los acontecimientos en páginas.
     */
    for (
      let inicio = 0;
      inicio < acontecimientos.length;
      inicio += acontecimientosPorPagina
    ) {

      const acontecimientosPagina = acontecimientos.slice(
        inicio,
        inicio + acontecimientosPorPagina
      );

      const numeroPagina =
        Math.floor(inicio / acontecimientosPorPagina) + 1;

      const esPrimeraPagina = inicio === 0;

      const esUltimaPagina =
        inicio + acontecimientosPorPagina >= acontecimientos.length;


      /*
       * Acontecimientos de esta página.
       */
      const contenidoAcontecimientos =
        acontecimientosPagina
          .map((acontecimiento, indexPagina) => {

            const indexGlobal = inicio + indexPagina;

            return generarAcontecimiento(
              acontecimiento,
              indexGlobal,
              indexPagina === acontecimientosPagina.length - 1
            );

          })
          .join('');


      /*
       * ==========================
       * PRIMERA PÁGINA
       * ==========================
       */
      if (esPrimeraPagina) {

        paginas.push(`

        <section
          class="page-a4 bg-[#F3F1E9] text-[#182019]"
        >

          <!-- CABECERA -->

          <div
            class="relative overflow-hidden bg-[#2F5D34] px-[16mm] pb-[14mm] pt-[13mm] text-white"
          >

            <div
              class="absolute -right-[20mm] -top-[25mm] h-[80mm] w-[80mm] rounded-full border-[12mm] border-white/5"
            ></div>

            <div
              class="absolute -bottom-[20mm] left-[45%] h-[50mm] w-[50mm] rounded-full bg-[#F6C445]/10 blur-2xl"
            ></div>


            <div class="relative z-10">

              <div class="flex items-center gap-[4mm]">

                <div
                  class="h-[0.5mm] w-[10mm] bg-[#F6C445]"
                ></div>

                <span
                  class="text-[6px] font-black uppercase tracking-[2px] text-[#F6C445]"
                >
                  ${historia.subtitulo}
                </span>

              </div>


              <h2
                class="mt-[4mm] max-w-[130mm] text-[25px] font-black leading-[0.95] tracking-[-0.5px]"
              >
                ${historia.titulo}
              </h2>


              <p
                class="mt-[4mm] max-w-[125mm] text-[8px] leading-[1.6] text-white/70"
              >
                ${historia.descripcion}
              </p>

            </div>

          </div>


          <!-- INTRODUCCIÓN + 1866 -->

          <div
            class="grid grid-cols-[55mm_1fr] gap-[9mm] px-[16mm] pt-[11mm]"
          >

            <!-- AÑO -->

            <div
              class="relative overflow-hidden rounded-[4mm] bg-[#182019] px-[6mm] py-[7mm] text-white"
            >

              <div
                class="absolute -right-[12mm] -top-[12mm] h-[35mm] w-[35mm] rounded-full border-[5mm] border-white/5"
              ></div>

              <div class="relative z-10">

                <div
                  class="text-[5.5px] font-black uppercase tracking-[1.5px] text-[#F6C445]"
                >
                  Un momento fundamental
                </div>

                <div
                  class="mt-[6mm] text-[31px] font-black leading-none tracking-[-1px]"
                >
                  1866
                </div>

                <div
                  class="mt-[4mm] h-[0.5mm] w-[9mm] bg-[#F6C445]"
                ></div>

                <p
                  class="mt-[3mm] text-[6.5px] leading-[1.55] text-white/65"
                >
                  Año fundamental en la consolidación histórica de Huaranchal como distrito.
                </p>

              </div>

            </div>


            <!-- INTRODUCCIÓN -->

            <div class="self-center">

              <div
                class="text-[6px] font-black uppercase tracking-[1.5px] text-[#A4C639]"
              >
                Nuestra memoria
              </div>

              <p
                class="mt-[3mm] text-[10px] font-medium leading-[1.65] text-[#303830]"
              >
                ${historia.introduccion}
              </p>

            </div>

          </div>


          <!-- RECORRIDO -->

          <div class="px-[16mm] pt-[10mm]">

            <div
              class="mb-[5mm] flex items-center justify-between"
            >

              <div class="flex items-center gap-[4mm]">

                <div
                  class="h-[0.5mm] w-[9mm] bg-[#F6C445]"
                ></div>

                <span
                  class="text-[6px] font-black uppercase tracking-[1.5px] text-[#2F5D34]"
                >
                  Recorrido histórico
                </span>

              </div>

              <span
                class="text-[5.5px] font-bold uppercase tracking-[1px] text-[#8A9089]"
              >
                ${inicio + 1}–${inicio + acontecimientosPagina.length}
              </span>

            </div>


            ${contenidoAcontecimientos}

          </div>


          ${esUltimaPagina
            ? `
                <!-- DATOS -->

                <div
                  class="mx-[16mm] mt-[8mm] border-t border-[#D6D5CB] pt-[7mm]"
                >

                  <div
                    class="mb-[4mm] text-[6px] font-black uppercase tracking-[1.5px] text-[#2F5D34]"
                  >
                    Huaranchal en el tiempo
                  </div>

                  <div class="grid grid-cols-3 gap-[4mm]">

                    ${generarDatosDestacados()}

                  </div>

                </div>
              `
            : ''
          }


          <!-- PIE -->

          <div
            class="absolute bottom-[9mm] left-[16mm] right-[16mm] border-t border-[#D6D5CB] pt-[4mm]"
          >

            <div
              class="flex items-center justify-between gap-[10mm]"
            >

              <p
                class="max-w-[130mm] text-[6px] italic leading-[1.5] text-[#626962]"
              >
                La historia de Huaranchal permanece en sus caminos,
                sus costumbres y en la memoria de quienes mantienen
                vivas sus raíces.
              </p>

              <span
                class="shrink-0 text-[5px] font-black uppercase tracking-[1.5px] text-[#A4C639]"
              >
                Raíces de Huaranchal
              </span>

            </div>

          </div>

        </section>

      `);

      }

      /*
       * ==========================
       * PÁGINAS SIGUIENTES
       * ==========================
       */
      else {

        paginas.push(`

        <section
          class="page-a4 bg-[#F3F1E9] text-[#182019]"
        >

          <!-- ENCABEZADO DE CONTINUACIÓN -->

          <div
            class="bg-[#2F5D34] px-[16mm] py-[9mm] text-white"
          >

            <div class="flex items-center justify-between">

              <div>

                <div
                  class="flex items-center gap-[4mm]"
                >

                  <div
                    class="h-[0.5mm] w-[9mm] bg-[#F6C445]"
                  ></div>

                  <span
                    class="text-[6px] font-black uppercase tracking-[2px] text-[#F6C445]"
                  >
                    ${historia.subtitulo}
                  </span>

                </div>

                <h2
                  class="mt-[3mm] text-[16px] font-black leading-none"
                >
                  ${historia.titulo}
                </h2>

              </div>


              <div class="text-right">

                <div
                  class="text-[5px] font-bold uppercase tracking-[1.5px] text-white/50"
                >
                  Continuación
                </div>

                <div
                  class="mt-[1mm] text-[9px] font-black text-[#F6C445]"
                >
                  ${inicio + 1}–${inicio + acontecimientosPagina.length}
                </div>

              </div>

            </div>

          </div>


          <!-- CONTENIDO -->

          <div class="px-[16mm] pt-[12mm]">

            <div
              class="mb-[7mm] flex items-center gap-[4mm]"
            >

              <div
                class="h-[0.5mm] w-[9mm] bg-[#F6C445]"
              ></div>

              <span
                class="text-[6px] font-black uppercase tracking-[1.5px] text-[#2F5D34]"
              >
                Recorrido histórico
              </span>

            </div>


            ${contenidoAcontecimientos}


            ${esUltimaPagina
            ? `
                  <!-- DATOS DESTACADOS -->

                  <div
                    class="mt-[10mm] border-t border-[#D6D5CB] pt-[7mm]"
                  >

                    <div
                      class="mb-[4mm] text-[6px] font-black uppercase tracking-[1.5px] text-[#2F5D34]"
                    >
                      Huaranchal en el tiempo
                    </div>

                    <div class="grid grid-cols-3 gap-[4mm]">

                      ${generarDatosDestacados()}

                    </div>

                  </div>
                `
            : ''
          }

          </div>


          <!-- PIE -->

          <div
            class="absolute bottom-[9mm] left-[16mm] right-[16mm] border-t border-[#D6D5CB] pt-[4mm]"
          >

            <div
              class="flex items-center justify-between gap-[10mm]"
            >

              <p
                class="max-w-[130mm] text-[6px] italic leading-[1.5] text-[#626962]"
              >
                La historia de Huaranchal permanece en sus caminos,
                sus costumbres y en la memoria de quienes mantienen
                vivas sus raíces.
              </p>

              <span
                class="shrink-0 text-[5px] font-black uppercase tracking-[1.5px] text-[#A4C639]"
              >
                Raíces de Huaranchal
              </span>

            </div>

          </div>

        </section>

      `);

      }

    }


    /*
     * Si por alguna razón no existen acontecimientos,
     * generamos igualmente una página con la información básica.
     */
    if (acontecimientos.length === 0) {

      paginas.push(`

      <section
        class="page-a4 bg-[#F3F1E9] text-[#182019]"
      >

        <div
          class="bg-[#2F5D34] px-[16mm] py-[14mm] text-white"
        >

          <div
            class="text-[6px] font-black uppercase tracking-[2px] text-[#F6C445]"
          >
            ${historia.subtitulo}
          </div>

          <h2
            class="mt-[4mm] text-[25px] font-black"
          >
            ${historia.titulo}
          </h2>

        </div>


        <div class="px-[16mm] pt-[12mm]">

          <p
            class="text-[9px] leading-[1.7] text-[#626962]"
          >
            ${historia.introduccion}
          </p>

        </div>

      </section>

    `);

    }


    return paginas.join('');

  }

  private generarPanoramica(): string {

    return `
    <section class="page-a4 bg-[#F3F1E9]">

      <div class="relative w-full h-[115mm] overflow-hidden">

        <img
          src="${this.DataPanoramica.imagen}"
          alt="${this.DataPanoramica.alt}"
          class="w-full h-full object-cover"
        >

        <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

        <div class="absolute bottom-0 left-0 right-0 p-[12mm] text-white">

          <div class="text-[10pt] uppercase tracking-[0.25em] text-[#F6C445] font-semibold mb-3">
            ${this.DataPanoramica.etiqueta}
          </div>

          <h2 class="text-[34pt] leading-none font-black tracking-tight">
            ${this.DataPanoramica.titulo}
          </h2>

        </div>

      </div>

      <div class="px-[16mm] py-[12mm]">

        <div class="flex items-center gap-3 mb-6">

          <div class="w-10 h-1 bg-[#F6C445]"></div>

          <span class="text-[10pt] uppercase tracking-[0.2em] text-[#2F5D34] font-bold">
            ${this.DataPanoramica.ubicacion}
          </span>

        </div>

        <h3 class="text-[18pt] font-bold text-[#2F5D34] mb-4">
          ${this.DataPanoramica.subtitulo}
        </h3>

        <p class="text-[12pt] leading-7 text-gray-700 max-w-[175mm]">
          ${this.DataPanoramica.descripcion}
        </p>

        <div class="mt-10 border-t border-gray-300 pt-6">

          <p class="text-[9pt] uppercase tracking-[0.18em] text-gray-500">
            Raíces de Huaranchal
          </p>

          <p class="mt-2 text-[10pt] text-gray-600">
            Conoce, valora y comparte nuestras raíces.
          </p>

        </div>

      </div>

    </section>
  `;
  }


}