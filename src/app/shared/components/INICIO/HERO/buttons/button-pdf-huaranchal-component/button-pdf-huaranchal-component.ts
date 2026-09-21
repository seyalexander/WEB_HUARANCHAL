import { Component, inject } from '@angular/core';
import { PdfExportService } from '../../../../../services/pdf/pdf-export-service';

import { inicioHero } from '../../../../../data/Inicio/Inicio-Hero.data';
import { InicioQueConoceras } from '../../../../../data/Inicio/Inicio-QueConoceras.interface';
import { experienciasInicio } from '../../../../../data/Inicio/Inicio-QueConoceras.data';
import { InicioArtesania, InicioHotspotArtesania } from '../../../../../data/Inicio/Inicio-Artesanias.interface';
import { ambientesArtesania, hotspotsArtesania } from '../../../../../data/Inicio/Inicio-Artesania.data';
import { InicioHistoriaHuaranchal } from '../../../../../data/Inicio/Inicio-Historia.data';
import { InicioPanoramicaHuaranchal } from '../../../../../data/Inicio/Inicio-Panoramica.data';
import { productosEmblematicosHuaranchal } from '../../../../../data/Inicio/Inicio-ProdicyosEmblematicos.data';
import { InicioPanoramica360Huaranchal } from '../../../../../data/Inicio/Inicio-Panoramica360.data';
import { caseriosHuaranchal } from '../../../../../data/Inicio/Inicio-Caserios.data';
import { galeriaLugarTuristico, historiaLugarTuristico, lugarTuristico, parrafoHistoriaLugarTuristico, souvenirLugarTuristico } from '../../../../../data/lugaresTuristicos/LugarTuristico.interface';
import { LUGARES_TURISTICOS } from '../../../../../data/lugaresTuristicos/LugarTuristico.data';


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

  DataProductos = productosEmblematicosHuaranchal;

  DataPanoramica360 = InicioPanoramica360Huaranchal;

  descargarPdf(): void {

    const htmlPdf = `

      ${this.generarPortada()}

      ${this.generarQueConoceras()}

      ${this.generarArtesania()}

      ${this.generarHistoria()}

      ${this.generarPanoramica()}

      ${this.generarProductos()}

      ${this.generarPanoramica360()}

      ${this.generarCaserios()}

      ${this.generarLugares()}

      ${this.generarCierre()}
      
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

  private obtenerSvgExperiencia(tipo: string, color: string): string {
    const atributos = `
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="${color}"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
    `;

    switch (tipo) {

      case 'naturaleza':
        return `
                <svg ${atributos}>
                    <path d="M3 20h18" />
                    <path d="m5 20 5-9 4 5 2-3 3 7" />
                    <path d="M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                </svg>
            `;

      case 'cataratas':
        return `
                <svg ${atributos}>
                    <path d="M2 9a10 10 0 1 0 20 0" />
                    <path d="M12 19a10 10 0 0 1 10-10" />
                    <path d="M2 9a10 10 0 0 1 10 10" />
                    <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
                    <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99-7.5" />
                </svg>
            `;

      case 'termales':
        return `
                <svg ${atributos}>
                    <path d="M8 3c0 2 2 2 2 4s-2 2-2 4" />
                    <path d="M14 3c0 2 2 2 2 4s-2 2-2 4" />
                    <path d="M4 13h16" />
                    <path d="M5 17h14" />
                    <path d="M7 21h10" />
                </svg>
            `;

      case 'gastronomia':
        return `
                <svg ${atributos}>
                    <path d="M3 2v7a4 4 0 0 0 4 4h1" />
                    <path d="M7 2v11" />
                    <path d="M11 2v7a4 4 0 0 1-4 4" />
                    <path d="M7 13v9" />
                    <path d="M17 2v20" />
                    <path d="M17 2c2 0 4 2 4 5v3h-4" />
                </svg>
            `;

      default:
        return '';
    }
  }

  private generarQueConoceras(): string {

    return `

      <!-- =====================================================
           QUÉ CONOCERÁS
      ====================================================== -->

      <div class="page-a4 relative w-[210mm] h-[297mm] overflow-hidden bg-[#FAFAF7] text-slate-800">


        <!-- =================================================
             DECORACIÓN SUTIL
        ================================================== -->

        <div
          class="absolute top-[-45mm] right-[-45mm] w-[100mm] h-[100mm] rounded-full bg-[#A4C639]/8 blur-3xl">
        </div>

        <div
          class="absolute bottom-[-45mm] left-[-45mm] w-[100mm] h-[100mm] rounded-full bg-[#F28C28]/8 blur-3xl">
        </div>


        <!-- =================================================
             CABECERA
        ================================================== -->

        <div class="relative px-[18mm] pt-[18mm]">

          <div class="flex items-center gap-3">

            <div
              class="w-[14mm] h-[1mm] bg-[#F28C28]">
            </div>

            <span
              class="text-[8pt] font-bold tracking-[3px] uppercase text-[#2F5D34]">

              Experiencias únicas

            </span>

          </div>


          <h2
            class="m-0 mt-[6mm] text-[29pt] leading-[1.05] font-black tracking-tight text-slate-800">

            ¿Qué encontrarás en

            <span class="text-[#2F5D34]">
              Huaranchal?
            </span>

          </h2>


          <p
            class="m-0 mt-[5mm] w-[145mm] text-[10pt] leading-[1.6] text-slate-600">

            Naturaleza, aventura, relajación y gastronomía
            forman parte de las experiencias que podrás
            descubrir en nuestro territorio.

          </p>

        </div>


        <!-- =================================================
             EXPERIENCIAS
        ================================================== -->

        <div class="relative mt-[12mm] px-[18mm]">


          <div class="grid grid-cols-2 gap-x-[12mm] gap-y-[12mm]">


            ${this.experiencias.map((experiencia) => {

      const svg = this.obtenerSvgExperiencia(
        experiencia.svg,
        experiencia.color
      );

      return `

                <!-- =================================================
                     EXPERIENCIA
                ================================================== -->

                <article
                  class="relative min-h-[72mm] overflow-hidden border border-[#2F5D34]/10 bg-white/50 px-[8mm] py-[7mm]">


                  <!-- NÚMERO -->

                  <div
                    class="absolute right-[6mm] top-[5mm] text-[22pt] leading-none font-black"
                    style="color: ${experiencia.color}20;">

                    ${experiencia.numero}

                  </div>


                  <!-- SVG -->

                  <div
                    class="flex h-[24mm] w-[24mm] items-center justify-center">

                    ${svg}

                  </div>


                  <!-- ACENTO -->

                  <div class="mt-[5mm] flex items-center gap-3">

                    <div
                      class="h-[1mm] w-[12mm]"
                      style="background:${experiencia.color};">
                    </div>

                    <div
                      class="h-px flex-1 bg-[#2F5D34]/10">
                    </div>

                  </div>


                  <!-- TÍTULO -->

                  <h3
                    class="m-0 mt-[4mm] text-[15pt] leading-tight font-black text-slate-800">

                    ${experiencia.nombre}

                  </h3>


                  <!-- ETIQUETA -->

                  <p
                    class="m-0 mt-[2mm] text-[6.5pt] font-bold uppercase tracking-[1.5px]"
                    style="color:${experiencia.color};">

                    ${experiencia.etiqueta}

                  </p>


                  <!-- DESCRIPCIÓN -->

                  <p
                    class="m-0 mt-[3mm] text-[8pt] leading-[1.55] text-slate-600">

                    ${experiencia.descripcion}

                  </p>


                </article>

                `;

    }).join('')}


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

          <div class="mt-5 flex items-start gap-4 border-l-2 border-[#F6C445] pl-4">

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

        <div class="absolute inset-0 bg-linear-to-r from-[#0b0f0d] via-[#0b0f0d]/90 to-[#2F5D34]/60"></div>

        <div class="absolute -right-20 -top-20 h-65 w-65 rounded-full bg-[#F6C445]/10 blur-[70px]"></div>


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


        <div class="absolute bottom-0 left-0 h-0.75 w-full bg-[#F6C445]"></div>

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


              <div class="absolute inset-x-0 bottom-0 h-[35mm] bg-linear-to-t from-black/70 to-transparent"></div>


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

        <div class="mt-[12mm] border-l-2 border-[#F6C445] pl-5">

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
              class="absolute right-[-20mm] top-[-25mm] h-[80mm] w-[80mm] rounded-full border-[12mm] border-white/5"
            ></div>

            <div
              class="absolute bottom-[-20mm] left-[45%] h-[50mm] w-[50mm] rounded-full bg-[#F6C445]/10 blur-2xl"
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
                class="absolute right-[-12mm] top-[-12mm] h-[35mm] w-[35mm] rounded-full border-[5mm] border-white/5"
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
                class="max-w-[130mm] text-[6px] italic leading-normal text-[#626962]"
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
                class="max-w-[130mm] text-[6px] italic leading-normal text-[#626962]"
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

  private generarProductos(): string {

    const productosPorPagina = 2;

    const paginas: string[] = [];

    for (
      let inicio = 0;
      inicio < this.DataProductos.length;
      inicio += productosPorPagina
    ) {

      const productosPagina =
        this.DataProductos.slice(
          inicio,
          inicio + productosPorPagina
        );

      const tarjetas = productosPagina
        .map((producto, index) => {

          const numeroProducto =
            inicio + index + 1;

          return `
                    <article class="relative bg-white rounded-[6mm] border border-[#DDD9CB] overflow-hidden">

                        <div class="flex h-[92mm]">

                            <!-- IMAGEN DEL PRODUCTO -->

                            <div class="relative w-[55mm] shrink-0 bg-[#F1EFE7] overflow-hidden">

                                <img
                                    src="${producto.imagen}"
                                    alt="${producto.nombre}"
                                    class="absolute inset-0 w-full h-full object-cover"
                                >

                                <div class="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent"></div>

                                <div class="absolute bottom-[5mm] left-[5mm]">

                                    <span class="inline-flex px-[3mm] py-[1.5mm] rounded-full bg-[#2F5D34] text-white text-[8pt] font-bold">
                                        Producto ${String(numeroProducto).padStart(2, '0')}
                                    </span>

                                </div>

                            </div>


                            <!-- INFORMACIÓN -->

                            <div class="flex-1 p-[7mm] flex flex-col">

                                <div>

                                    <div class="text-[8pt] uppercase tracking-[0.2em] text-[#F28C28] font-bold">
                                        Producto emblemático
                                    </div>

                                    <h3 class="mt-[2mm] text-[23pt] font-black text-[#2F5D34] leading-none">
                                        ${producto.nombre}
                                    </h3>

                                    <div class="mt-[3mm] w-[14mm] h-[1.2mm] bg-[#F6C445] rounded-full"></div>

                                    <p class="mt-[4mm] text-[9.5pt] leading-5 text-gray-600">
                                        ${producto.descripcionExtendida}
                                    </p>

                                </div>


                                <!-- PERSONAJE -->

                                <div class="mt-auto pt-[4mm] border-t border-[#E5E1D7]">

                                    <div class="flex items-center gap-[4mm]">

                                        <div class="w-[28mm] h-[28mm] shrink-0 bg-[#F7F5EE] rounded-full overflow-hidden flex items-end justify-center">

                                            <img
                                                src="${producto.personaje}"
                                                alt="Personaje de ${producto.nombre}"
                                                class="w-full h-full object-contain"
                                            >

                                        </div>

                                        <div>

                                            <div class="text-[8pt] uppercase tracking-[0.15em] text-[#2F5D34] font-bold">
                                                Personaje
                                            </div>

                                            <p class="mt-[1.5mm] text-[8.5pt] leading-4 text-gray-600">
                                                ${producto.descripcionPersonaje}
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </article>
                `;

        })
        .join('');


      const esPrimeraPagina = inicio === 0;

      paginas.push(`
            <section class="page-a4 bg-[#F3F1E9]">

                <div class="px-[16mm] pt-[14mm]">

                    ${esPrimeraPagina
          ? `
                            <div class="text-center mb-[9mm]">

                                <div class="inline-block px-[5mm] py-[2mm] rounded-full bg-[#F28C28]/10 border border-[#F28C28]/20 text-[#F28C28] text-[9pt] font-bold uppercase tracking-[0.15em]">
                                    Productos Emblemáticos
                                </div>

                                <h2 class="mt-[4mm] text-[30pt] font-black text-[#2F5D34] leading-none">
                                    Sabores de Huaranchal
                                </h2>

                                <p class="mt-[3mm] text-[10.5pt] leading-6 text-gray-600 max-w-[165mm] mx-auto">
                                    Descubre los productos agrícolas que representan
                                    la identidad, tradición y riqueza natural de Huaranchal.
                                </p>

                            </div>
                        `
          : `
                            <div class="mb-[8mm]">

                                <div class="text-[8pt] uppercase tracking-[0.2em] text-[#F28C28] font-bold">
                                    Productos Emblemáticos
                                </div>

                                <h2 class="mt-[2mm] text-[24pt] font-black text-[#2F5D34] leading-none">
                                    Sabores de Huaranchal
                                </h2>

                                <div class="mt-[3mm] w-[14mm] h-[1.2mm] bg-[#F6C445] rounded-full"></div>

                            </div>
                        `
        }


                    <div class="space-y-[7mm]">

                        ${tarjetas}

                    </div>


                    <div class="mt-[8mm] pt-[4mm] border-t border-[#D8D5C8] flex justify-between items-center">

                        <p class="text-[8pt] uppercase tracking-[0.18em] text-gray-500">
                            Raíces de Huaranchal
                        </p>

                        <p class="text-[8pt] text-gray-500">
                            ${inicio + 1}–${inicio + productosPagina.length}
                            de ${this.DataProductos.length}
                        </p>

                    </div>

                </div>

            </section>
        `);
    }

    return paginas.join('');
  }

  private generarPanoramica360(): string {

    const imagenes =
      this.DataPanoramica360.imagenes;

    if (!imagenes.length) {
      return '';
    }

    const imagenCentral =
      imagenes.find(
        imagen => imagen.sector === 'centro'
      ) ?? imagenes[0];

    const imagenesSecundarias =
      imagenes.filter(
        imagen => imagen.id !== imagenCentral.id
      );

    const imagenesPorPagina = 4;

    const paginas: string[] = [];

    /*
     * ============================================================
     * PÁGINA 1
     * PRESENTACIÓN DE LA PANORÁMICA
     * ============================================================
     */

    paginas.push(`
        <section class="page-a4 bg-[#F3F1E9]">

            <div class="relative w-full h-[108mm] overflow-hidden">

                <img
                    src="${imagenCentral.imagen}"
                    alt="${imagenCentral.titulo}"
                    class="w-full h-full object-cover"
                >

                <div class="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent"></div>

                <div class="absolute bottom-0 left-0 right-0 p-[14mm] text-white">

                    <div class="text-[9pt] uppercase tracking-[0.25em] text-[#F6C445] font-bold mb-[3mm]">
                        ${this.DataPanoramica360.etiqueta}
                    </div>

                    <h2 class="text-[31pt] font-black leading-none">
                        ${this.DataPanoramica360.titulo}
                    </h2>

                    <p class="mt-[4mm] text-[10pt] text-white/80">
                        ${imagenCentral.titulo}
                    </p>

                </div>

            </div>


            <div class="px-[16mm] py-[11mm]">

                <div class="flex items-center gap-[3mm] mb-[5mm]">

                    <div class="w-[12mm] h-[1.2mm] bg-[#F6C445] rounded-full"></div>

                    <span class="text-[8pt] uppercase tracking-[0.2em] text-[#2F5D34] font-bold">
                        Recorrido visual
                    </span>

                </div>


                <h3 class="text-[18pt] font-black text-[#2F5D34]">
                    ${imagenCentral.titulo}
                </h3>


                <p class="mt-[4mm] text-[10.5pt] leading-6 text-gray-600">
                    ${this.DataPanoramica360.descripcion}
                </p>


                <p class="mt-[4mm] text-[9.5pt] leading-5 text-gray-500">
                    ${this.DataPanoramica360.descripcionViewer}
                </p>


                <div class="mt-[8mm] pt-[5mm] border-t border-[#D8D5C8]">

                    <div class="flex justify-between items-center">

                        <span class="text-[8pt] uppercase tracking-[0.18em] text-gray-500">
                            Huaranchal · La Libertad
                        </span>

                        <span class="text-[8pt] text-gray-500">
                            ${imagenes.length} vistas panorámicas
                        </span>

                    </div>

                </div>

            </div>

        </section>
    `);


    /*
     * ============================================================
     * PÁGINAS DE GALERÍA
     * 4 TARJETAS POR PÁGINA
     * 2 COLUMNAS × 2 FILAS
     * ============================================================
     */

    for (
      let inicio = 0;
      inicio < imagenesSecundarias.length;
      inicio += imagenesPorPagina
    ) {

      const grupo =
        imagenesSecundarias.slice(
          inicio,
          inicio + imagenesPorPagina
        );


      const tarjetas =
        grupo.map((imagen, index) => {

          const numero =
            inicio + index + 2;


          return `
                    <article class="bg-white rounded-[5mm] overflow-hidden border border-[#DDD9CB] h-[108mm]">

                        <div class="relative h-[55mm] bg-[#EDEAE0] overflow-hidden">

                            <img
                                src="${imagen.imagen}"
                                alt="${imagen.titulo}"
                                class="w-full h-full object-cover"
                            >

                            <div class="absolute top-[3mm] left-[3mm]">

                                <span class="inline-flex px-[3mm] py-[1.5mm] rounded-full bg-black/65 text-white text-[7pt] font-bold">
                                    ${String(numero).padStart(2, '0')}
                                </span>

                            </div>

                        </div>


                        <div class="p-[4mm]">

                            <div class="text-[7pt] uppercase tracking-[0.16em] text-[#F28C28] font-bold">
                                ${imagen.sector}
                            </div>


                            <h3 class="mt-[1.5mm] text-[12pt] font-black text-[#2F5D34] leading-tight">
                                ${imagen.titulo}
                            </h3>


                            <p class="mt-[2.5mm] text-[8pt] leading-4 text-gray-600">
                                ${imagen.descripcion}
                            </p>

                        </div>

                    </article>
                `;

        }).join('');


      paginas.push(`
            <section class="page-a4 bg-[#F3F1E9]">

                <div class="px-[14mm] pt-[12mm]">

                    <div class="mb-[7mm]">

                        <div class="text-[8pt] uppercase tracking-[0.2em] text-[#F28C28] font-bold">
                            Recorrido panorámico
                        </div>


                        <h2 class="mt-[2mm] text-[24pt] font-black text-[#2F5D34] leading-none">
                            Vistas de Huaranchal
                        </h2>


                        <div class="mt-[3mm] w-[14mm] h-[1.2mm] bg-[#F6C445] rounded-full"></div>

                    </div>


                    <div class="grid grid-cols-2 gap-[6mm]">

                        ${tarjetas}

                    </div>


                    <div class="mt-[7mm] pt-[4mm] border-t border-[#D8D5C8] flex justify-between items-center">

                        <span class="text-[7.5pt] uppercase tracking-[0.15em] text-gray-500">
                            Raíces de Huaranchal
                        </span>


                        <span class="text-[7.5pt] text-gray-500">
                            ${inicio + 2}–${inicio + grupo.length + 1}
                            de ${imagenes.length}
                        </span>

                    </div>

                </div>

            </section>
        `);
    }


    return paginas.join('');
  }

  private generarCaserios(): string {

    const caserios = caseriosHuaranchal;

    const caseriosPorPagina = 6;

    const paginas: string[] = [];


    /*
     * ============================================================
     * PÁGINAS DE CASERÍOS
     * 6 CASERÍOS POR PÁGINA
     * 2 COLUMNAS × 3 FILAS
     * ============================================================
     */

    for (
      let inicio = 0;
      inicio < caserios.length;
      inicio += caseriosPorPagina
    ) {

      const grupo =
        caserios.slice(
          inicio,
          inicio + caseriosPorPagina
        );


      const esPrimeraPagina =
        inicio === 0;


      const tarjetas =
        grupo.map(caserio => {

          const numero =
            String(caserio.id)
              .padStart(2, '0');


          return `
                    <article class="bg-white rounded-[4mm] border border-[#DDE1DC] overflow-hidden h-[63mm]">

                        <div class="p-[5mm] h-full flex flex-col">

                            <div class="flex items-start justify-between">

                                <div class="w-[11mm] h-[11mm] rounded-[3mm] bg-[#2F5D34] text-white flex items-center justify-center font-mono font-bold text-[8pt]">
                                    ${numero}
                                </div>


                                <div class="text-right">

                                    <div class="text-[7pt] uppercase tracking-[0.15em] text-gray-400 font-bold">
                                        Altitud
                                    </div>

                                    <div class="mt-[1mm] text-[8pt] font-mono font-bold text-[#2F5D34]">
                                        ${caserio.altitud}
                                    </div>

                                </div>

                            </div>


                            <div class="mt-[5mm]">

                                <div class="text-[7pt] uppercase tracking-[0.16em] text-[#F28C28] font-bold">
                                    Caserío
                                </div>


                                <h3 class="mt-[1.5mm] text-[15pt] font-black text-slate-900 leading-tight">
                                    ${caserio.nombre}
                                </h3>

                            </div>


                            <div class="mt-[4mm] bg-[#F5F7F3] rounded-[3mm] border border-[#E4E8E1] p-[3.5mm]">

                                <div class="text-[6.5pt] uppercase tracking-[0.14em] text-gray-400 font-bold">
                                    Aspecto destacado
                                </div>

                                <p class="mt-[1.5mm] text-[8pt] leading-4 text-gray-600">
                                    ${caserio.destacado}
                                </p>

                            </div>


                            <div class="mt-auto pt-[3.5mm] border-t border-[#E5E7E3] flex items-center justify-between">

                                <span class="text-[6.5pt] uppercase tracking-[0.12em] text-gray-400 font-bold">
                                    Distancia al centro
                                </span>

                                <span class="text-[8pt] font-mono font-bold text-[#2F5D34]">
                                    ${caserio.distanciaCentro ?? 'No disponible'}
                                </span>

                            </div>

                        </div>

                    </article>
                `;

        }).join('');


      paginas.push(`
            <section class="page-a4 bg-[#F3F1E9]">

                <div class="px-[14mm] pt-[13mm]">

                    ${esPrimeraPagina
          ? `
                                <div class="mb-[8mm]">

                                    <div class="text-[8pt] uppercase tracking-[0.22em] text-[#2F5D34] font-bold">
                                        Territorio · Huaranchal
                                    </div>


                                    <h2 class="mt-[2mm] text-[29pt] font-black text-slate-900 leading-none uppercase">
                                        Caseríos de
                                        <span class="text-[#2F5D34]">
                                            Huaranchal
                                        </span>
                                    </h2>


                                    <p class="mt-[3mm] max-w-[165mm] text-[10pt] leading-5 text-gray-600">
                                        Conoce la distribución territorial de los
                                        poblados y caseríos que forman parte del
                                        distrito de Huaranchal.
                                    </p>


                                    <div class="mt-[4mm] flex items-center gap-[3mm]">

                                        <div class="w-[14mm] h-[1.2mm] bg-[#F6C445] rounded-full"></div>

                                        <span class="text-[7pt] uppercase tracking-[0.16em] text-gray-500">
                                            ${caserios.length} sectores registrados
                                        </span>

                                    </div>

                                </div>
                            `
          : `
                                <div class="mb-[7mm]">

                                    <div class="text-[7pt] uppercase tracking-[0.2em] text-[#F28C28] font-bold">
                                        Territorio de Huaranchal
                                    </div>


                                    <h2 class="mt-[2mm] text-[23pt] font-black text-[#2F5D34] leading-none">
                                        Caseríos de Huaranchal
                                    </h2>


                                    <div class="mt-[3mm] w-[13mm] h-[1.1mm] bg-[#F6C445] rounded-full"></div>

                                </div>
                            `
        }


                    <div class="grid grid-cols-2 gap-[5mm]">

                        ${tarjetas}

                    </div>


                    <div class="mt-[6mm] pt-[4mm] border-t border-[#D8D5C8] flex justify-between items-center">

                        <span class="text-[7pt] uppercase tracking-[0.15em] text-gray-500">
                            Raíces de Huaranchal
                        </span>


                        <span class="text-[7pt] text-gray-500">
                            ${inicio + 1}–${inicio + grupo.length}
                            de ${caserios.length}
                        </span>

                    </div>

                </div>

            </section>
        `);

    }


    return paginas.join('');
  }

  private generarLugares(): string {

    return LUGARES_TURISTICOS
      .map((lugar: lugarTuristico, indice: number) => {

        return `
        ${this.generarPortadaLugar(lugar, indice)}
        ${this.generarGaleriaLugar(lugar, indice)}
        ${this.generarHistoriaLugar(lugar, indice)}
        ${this.generarSouvenirsLugar(lugar, indice)}
      `;

      })
      .join('');
  }

  private generarPortadaLugar(
    lugar: lugarTuristico,
    indice: number
  ): string {

    const hero = lugar.lugar.hero;
    const historia = lugar.lugar.historia;

    return `
    <div class="page-a4">

      <div class="h-[62mm] bg-slate-900 text-white p-[10mm_15mm_8mm_15mm] relative">

        <div class="absolute top-0 right-0 w-[8mm] h-full bg-emerald-600"></div>

        <span class="text-[8.5pt] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
          Guía Turística Oficial
        </span>

        <h1 class="text-[22pt] font-extrabold uppercase tracking-tight leading-none text-white my-0">
          ${hero.titulo_1} ${hero.titulo_2}
        </h1>

        <p class="text-[10pt] text-emerald-400 font-semibold uppercase tracking-wider mt-1 mb-0">
          ${historia.ubicacion}
        </p>

        <p class="text-[8.5pt] text-slate-300 mt-2 leading-relaxed max-w-[140mm]">
          ${hero.descripcion}
        </p>

      </div>


      <div class="px-[15mm] mt-[-20mm] relative z-20">

        <img
          src="${hero.imagen}"
          class="w-full h-[80mm] object-cover rounded-xl shadow-md border-2 border-white"
        />

      </div>


      <div class="p-[4mm_15mm_15mm_15mm] relative z-10">

        <div class="mb-1.5">

          <span class="text-[7.5pt] font-bold text-emerald-600 uppercase tracking-widest block mb-0.5">
            HISTORIA Y ORIGEN
          </span>

          <h2 class="text-[12pt] font-bold text-slate-900 leading-tight m-0">
            ${historia.titulo}
          </h2>

        </div>


        <div class="columns-2 gap-5 text-[9pt] text-slate-600 leading-snug">

          ${historia.historia
        .map(item => `
              <p class="m-0 mb-1.5 text-justify">
                ${item.p}
              </p>
            `)
        .join('')}

        </div>

      </div>


      <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt] z-20">

        <span class="text-slate-300">
          Descubre Huaranchal • Turismo Sostenible
        </span>

        <span class="text-emerald-400 font-semibold">
          Lugar ${indice + 1}
        </span>

      </div>

    </div>
  `;
  }

  private generarGaleriaLugar(
    lugar: lugarTuristico,
    indice: number
  ): string {

    const galeria: galeriaLugarTuristico[] = lugar.lugar.galeria ?? [];

    if (galeria.length === 0) {
      return '';
    }

    // Máximo 4 imágenes referenciales.
    // Primero se toman las favoritas y luego se completan
    // con las demás imágenes hasta llegar a 4.
    const fotosSeleccionadas = [
      ...galeria.filter(foto => foto.favorita),
      ...galeria.filter(foto => !foto.favorita)
    ].slice(0, 4);


    const tarjetas = fotosSeleccionadas
      .map((foto: galeriaLugarTuristico) => `
      <div class="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">

        <img
          src="${foto.foto}"
          class="w-full h-[62mm] object-cover"
        />

        <div class="p-3">

          <span class="text-[7pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            ${foto.categoria}
          </span>

          <h3 class="text-[10pt] font-bold text-slate-900 m-0 leading-tight">
            ${foto.titulo}
          </h3>

          ${foto.ubicacion
          ? `
                <p class="text-[7.5pt] text-slate-500 mt-1.5 m-0 leading-tight">
                  ${foto.ubicacion}
                </p>
              `
          : ''
        }

        </div>

      </div>
    `)
      .join('');


    return `
    <div class="page-a4">

      <div class="p-[15mm] h-full">

        <!-- ENCABEZADO -->

        <div class="border-b-2 border-emerald-100 pb-2.5 mb-4">

          <span class="text-[7.5pt] font-bold text-emerald-600 uppercase tracking-widest block mb-0.5">
            GALERÍA DEL DESTINO
          </span>

          <h2 class="text-[17pt] font-extrabold text-slate-900 m-0 leading-tight">
            ${lugar.lugar.hero.titulo_1}
            ${lugar.lugar.hero.titulo_2}
          </h2>

          <p class="text-[8pt] text-slate-500 m-0 mt-1">
            Imágenes referenciales de este lugar turístico de Huaranchal.
          </p>

        </div>


        <!-- GALERÍA -->

        <div class="grid grid-cols-2 gap-4">

          ${tarjetas}

        </div>

      </div>


      <!-- FOOTER -->

      <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt]">

        <span class="text-slate-300">
          Descubre Huaranchal • Turismo Sostenible
        </span>

        <span class="text-emerald-400 font-semibold">
          Galería • Lugar ${indice + 1}
        </span>

      </div>

    </div>
  `;
  }

  private generarHistoriaLugar(
    lugar: lugarTuristico,
    indice: number
  ): string {

    const historia: historiaLugarTuristico = lugar.lugar.historia;

    if (!historia) {
      return '';
    }

    const parrafos = historia.historia ?? [];

    if (parrafos.length === 0) {
      return '';
    }

    const paginas: string[] = [];

    /*
     * Primera página:
     * Imagen + información introductoria + primeros párrafos.
     */
    const primerBloque = parrafos.slice(0, 3);

    const contenidoPrimeraPagina = primerBloque
      .map(parrafo => `
      <p class="m-0 mb-2.5 text-justify">
        ${parrafo.p}
      </p>
    `)
      .join('');

    paginas.push(`
    <div class="page-a4">

      <div class="p-[15mm] h-full">

        <!-- ENCABEZADO -->

        <div class="border-b-2 border-emerald-100 pb-2.5 mb-4">

          <span class="text-[7.5pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            HISTORIA Y ORIGEN
          </span>

          <h2 class="text-[17pt] font-extrabold text-slate-900 m-0 leading-tight">
            ${historia.titulo}
          </h2>

          <p class="text-[8.5pt] text-slate-500 m-0 mt-1.5 leading-relaxed">
            ${historia.descripcion}
          </p>

        </div>


        <!-- IMAGEN -->

        <div class="mb-4">

          <img
            src="${historia.imagen}"
            class="w-full h-[65mm] object-cover rounded-xl border border-slate-200 shadow-sm"
          />

        </div>


        <!-- HISTORIA -->

        <div class="text-[9pt] text-slate-600 leading-relaxed">

          ${contenidoPrimeraPagina}

        </div>

      </div>


      <!-- FOOTER -->

      <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt]">

        <span class="text-slate-300">
          Descubre Huaranchal • Turismo Sostenible
        </span>

        <span class="text-emerald-400 font-semibold">
          Historia • Lugar ${indice + 1}
        </span>

      </div>

    </div>
  `);


    /*
     * Páginas adicionales de historia.
     *
     * Cada página contiene solamente texto,
     * permitiendo que historias extensas tengan
     * bastante espacio.
     */
    const bloquesRestantes: parrafoHistoriaLugarTuristico[][] = [];

    for (let i = 3; i < parrafos.length; i += 6) {
      bloquesRestantes.push(parrafos.slice(i, i + 6));
    }


    bloquesRestantes.forEach((bloque, paginaIndex) => {

      const contenido = bloque
        .map(parrafo => `
        <p class="m-0 mb-3 text-justify">
          ${parrafo.p}
        </p>
      `)
        .join('');


      paginas.push(`
      <div class="page-a4">

        <div class="p-[15mm] h-full">

          <!-- ENCABEZADO DE CONTINUACIÓN -->

          <div class="border-b-2 border-emerald-100 pb-2.5 mb-5">

            <span class="text-[7.5pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              HISTORIA Y ORIGEN
            </span>

            <h2 class="text-[16pt] font-extrabold text-slate-900 m-0 leading-tight">
              ${lugar.lugar.hero.titulo_1}
              ${lugar.lugar.hero.titulo_2}
            </h2>

            <p class="text-[8pt] text-slate-500 m-0 mt-1">
              Continuación de la historia del lugar.
            </p>

          </div>


          <!-- TEXTO -->

          <div class="text-[10pt] text-slate-700 leading-relaxed">

            ${contenido}

          </div>


          <!-- INFORMACIÓN CLAVE -->

          ${paginaIndex === bloquesRestantes.length - 1
          ? `
                <div class="grid grid-cols-2 gap-4 mt-6">

                  <div class="bg-emerald-50 border border-emerald-200 border-l-[5px] border-l-emerald-600 p-3.5 rounded-r-xl">

                    <span class="text-[7.5pt] font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                      SIGNIFICADO / ETIMOLOGÍA
                    </span>

                    <p class="text-[9pt] text-slate-700 m-0 leading-relaxed">
                      ${historia.significado}
                    </p>

                  </div>


                  <div class="bg-orange-50 border border-orange-200 border-l-[5px] border-l-[#F28C28] p-3.5 rounded-r-xl">

                    <span class="text-[7.5pt] font-bold text-orange-700 uppercase tracking-widest block mb-1">
                      UBICACIÓN
                    </span>

                    <p class="text-[9pt] text-slate-700 m-0 leading-relaxed">
                      ${historia.ubicacion}
                    </p>

                  </div>

                </div>
              `
          : ''
        }

        </div>


        <!-- FOOTER -->

        <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt]">

          <span class="text-slate-300">
            Descubre Huaranchal • Turismo Sostenible
          </span>

          <span class="text-emerald-400 font-semibold">
            Historia • Lugar ${indice + 1}
          </span>

        </div>

      </div>
    `);

    });


    /*
     * Si toda la historia entró en la primera página,
     * agregamos la información clave en una página
     * adicional pequeña.
     */
    if (bloquesRestantes.length === 0) {

      paginas.push(`
      <div class="page-a4">

        <div class="p-[15mm] h-full">

          <div class="border-b-2 border-emerald-100 pb-2.5 mb-5">

            <span class="text-[7.5pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              INFORMACIÓN CLAVE
            </span>

            <h2 class="text-[17pt] font-extrabold text-slate-900 m-0">
              Detalles del Lugar
            </h2>

          </div>


          <div class="grid grid-cols-2 gap-4">

            <div class="bg-emerald-50 border border-emerald-200 border-l-[5px] border-l-emerald-600 p-4 rounded-r-xl">

              <span class="text-[7.5pt] font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                SIGNIFICADO / ETIMOLOGÍA
              </span>

              <p class="text-[9pt] text-slate-700 m-0 leading-relaxed">
                ${historia.significado}
              </p>

            </div>


            <div class="bg-orange-50 border border-orange-200 border-l-[5px] border-l-[#F28C28] p-4 rounded-r-xl">

              <span class="text-[7.5pt] font-bold text-orange-700 uppercase tracking-widest block mb-1">
                UBICACIÓN
              </span>

              <p class="text-[9pt] text-slate-700 m-0 leading-relaxed">
                ${historia.ubicacion}
              </p>

            </div>

          </div>


          <div class="mt-6 bg-slate-900 text-white rounded-xl p-4">

            <span class="text-[7.5pt] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
              SOBRE EL DESTINO
            </span>

            <p class="text-[9pt] text-slate-300 m-0 leading-relaxed">
              ${lugar.descripcion}
            </p>

          </div>

        </div>


        <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt]">

          <span class="text-slate-300">
            Descubre Huaranchal • Turismo Sostenible
          </span>

          <span class="text-emerald-400 font-semibold">
            Historia • Lugar ${indice + 1}
          </span>

        </div>

      </div>
    `);
    }


    return paginas.join('');
  }

  private generarSouvenirsLugar(
    lugar: lugarTuristico,
    indice: number
  ): string {

    const souvenirs: souvenirLugarTuristico[] =
      lugar.lugar.souvenirs ?? [];

    if (souvenirs.length === 0) {
      return '';
    }

    const paginas: string[] = [];

    for (let i = 0; i < souvenirs.length; i += 4) {

      const souvenirsPagina = souvenirs.slice(i, i + 4);

      const tarjetas = souvenirsPagina
        .map((souvenir: souvenirLugarTuristico) => `
        <div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex flex-col">

          <img
            src="${souvenir.imagen}"
            class="w-full h-[57mm] object-contain rounded-md border border-slate-200 bg-white mb-2"
          />

          <div>

            <span class="text-[7pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              ${souvenir.tipo}
            </span>

            <h3 class="text-[9.5pt] font-bold text-slate-900 m-0 leading-tight">
              ${souvenir.titulo}
            </h3>

            <p class="text-[7.5pt] text-slate-600 mt-1.5 m-0 leading-tight">
              ${souvenir.descripcion}
            </p>

            <div class="mt-2 flex items-center justify-between gap-2">

              <span class="text-[7pt] text-slate-500">
                ${souvenir.lugar}
              </span>

              <span class="text-[7pt] font-bold ${souvenir.existente
            ? 'text-emerald-600'
            : 'text-orange-600'
          }">
                ${souvenir.existente
            ? 'Disponible'
            : 'Próximamente'
          }
              </span>

            </div>

          </div>

        </div>
      `)
        .join('');

      paginas.push(`
      <div class="page-a4">

        <div class="p-[15mm] h-full">

          <div class="border-b-2 border-emerald-100 pb-2 mb-4">

            <span class="text-[7.5pt] font-bold text-[#F28C28] uppercase tracking-widest block mb-0.5">
              EXPERIENCIA Y RECUERDOS
            </span>

            <h2 class="text-[17pt] font-extrabold text-slate-900 m-0 leading-tight">
              Souvenirs y Productos Locales
            </h2>

            <p class="text-[8pt] text-slate-500 m-0 mt-1">
              Recuerdos inspirados en la historia, cultura y paisajes de
              ${lugar.lugar.hero.titulo_1}
              ${lugar.lugar.hero.titulo_2}.
            </p>

          </div>


          <div class="grid grid-cols-2 gap-4">

            ${tarjetas}

          </div>

        </div>


        <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt]">

          <span class="text-slate-300">
            Descubre Huaranchal • Turismo Sostenible
          </span>

          <span class="text-emerald-400 font-semibold">
            Souvenirs • Lugar ${indice + 1}
          </span>

        </div>

      </div>
    `);
    }

    return paginas.join('');
  }

  private generarCierre(): string {
    return `
    <div class="page-a4 relative overflow-hidden bg-slate-950 text-white">

      <!-- IMAGEN DE FONDO -->

      <img
        src="assets/CTA-IMG.webp"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- CAPA OSCURA -->

      <div class="absolute inset-0 bg-slate-950/70"></div>

      <!-- DEGRADADO INFERIOR -->

      <div class="absolute inset-x-0 bottom-0 h-[150mm] bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

      <!-- CONTENIDO -->

      <div class="relative z-10 h-full flex flex-col justify-between p-[15mm]">

        <!-- PARTE SUPERIOR -->

        <div class="flex justify-between items-start">

          <span class="text-[8pt] font-bold uppercase tracking-[0.25em] text-emerald-400">
            Guía turística
          </span>

          <span class="text-[8pt] text-white/70 uppercase tracking-widest">
            Raíces de Huaranchal
          </span>

        </div>

        <!-- PARTE INFERIOR -->

        <div class="max-w-[155mm]">

          <div class="w-[18mm] h-[1mm] bg-emerald-400 mb-5"></div>

          <p class="text-[9pt] font-bold uppercase tracking-[0.25em] text-emerald-400 mb-3">
            Raíces de Huaranchal
          </p>

          <h1 class="text-[30pt] font-extrabold uppercase leading-[0.9] tracking-tight text-white m-0">
            Conoce,
            <br>
            valora y comparte
            <br>
            nuestras raíces
          </h1>

          <p class="text-[11pt] text-white/80 leading-relaxed mt-5 max-w-[130mm]">
            Huaranchal es naturaleza, historia, cultura y tradición.
            Un territorio que guarda historias, paisajes y costumbres
            que merecen ser conocidas y compartidas.
          </p>

          <div class="mt-7 flex gap-3">

            <span class="text-[7.5pt] uppercase tracking-widest text-white/80">
              Naturaleza
            </span>

            <span class="text-emerald-400">
              •
            </span>

            <span class="text-[7.5pt] uppercase tracking-widest text-white/80">
              Cultura
            </span>

            <span class="text-emerald-400">
              •
            </span>

            <span class="text-[7.5pt] uppercase tracking-widest text-white/80">
              Historia
            </span>

            <span class="text-emerald-400">
              •
            </span>

            <span class="text-[7.5pt] uppercase tracking-widest text-white/80">
              Tradición
            </span>

          </div>

          <div class="mt-10 pt-4 border-t border-white/20 flex items-end justify-between">

            <div>

              <p class="text-[8pt] font-semibold text-white uppercase tracking-widest m-0">
                Huaranchal
              </p>

              <p class="text-[7.5pt] text-white/60 m-0 mt-1">
                Provincia de Otuzco · La Libertad · Perú
              </p>

            </div>

            <p class="text-[8pt] text-white/50 m-0">
              2026
            </p>

          </div>

        </div>

      </div>

    </div>
  `;
  }
}