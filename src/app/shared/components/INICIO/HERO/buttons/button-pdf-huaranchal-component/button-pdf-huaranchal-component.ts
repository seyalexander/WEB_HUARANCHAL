import { Component, inject } from '@angular/core';
import { PdfExportService } from '../../../../../services/pdf/pdf-export-service';

import { inicioHero } from '../../../../../data/Inicio/Inicio-Hero.data';
import { InicioQueConoceras } from '../../../../../data/Inicio/Inicio-QueConoceras.interface';
import { experienciasInicio } from '../../../../../data/Inicio/Inicio-QueConoceras.data';
import { InicioArtesania, InicioHotspotArtesania } from '../../../../../data/Inicio/Inicio-Artesanias.interface';
import { ambientesArtesania, hotspotsArtesania } from '../../../../../data/Inicio/Inicio-Artesania.data';


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


  descargarPdf(): void {

    const htmlPdf = `

      ${this.generarPortada()}

      ${this.generarQueConoceras()}

      ${this.generarArtesania()}

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

  return `

    <!-- ====================================================== -->
    <!-- PÁGINA 1 - ARTESANÍA -->
    <!-- ====================================================== -->

    <section class="page-a4 bg-[#FAFAF7] text-[#182019]">

      <!-- Encabezado -->
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


      <!-- Contenido principal -->
      <div class="px-[18mm] py-[12mm]">

        <div class="grid grid-cols-[82mm_1fr] gap-[12mm] items-start">

          <!-- Imagen -->
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


          <!-- Información -->
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


            <!-- Ficha -->
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


            <!-- Ambientes -->
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


        <!-- Frase -->
        <div class="mt-[12mm] border-l-[2px] border-[#F6C445] pl-5">

          <p class="text-[11px] italic leading-[1.8] text-[#4f5751]">
            “Cada objeto guarda una historia de quienes hicieron
            de esta tierra su hogar.”
          </p>

        </div>

      </div>


      <!-- Footer -->
      <div class="absolute bottom-[10mm] left-[18mm] right-[18mm] flex items-center justify-between border-t border-[#dfe2dd] pt-3">

        <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#8a918b]">
          Raíces de Huaranchal
        </span>

        <span class="text-[7px] text-[#8a918b]">
          Patrimonio artesanal
        </span>

      </div>

    </section>


    <!-- ====================================================== -->
    <!-- PÁGINA 2 - ELEMENTOS ARTESANALES -->
    <!-- ====================================================== -->

    <section class="page-a4 bg-[#0b0f0d] text-white">

      <div class="px-[18mm] py-[15mm]">

        <div class="flex items-end justify-between">

          <div>

            <div class="flex items-center gap-3">

              <div class="h-px w-10 bg-[#F6C445]"></div>

              <span class="text-[8px] font-bold uppercase tracking-[3px] text-[#F6C445]">
                Exploración cultural
              </span>

            </div>

            <h3 class="mt-4 text-[25px] font-black tracking-tight">
              Elementos de la
              <span class="text-[#F6C445]">
                colección
              </span>
            </h3>

          </div>

          <div class="text-right">

            <p class="text-[28px] font-black leading-none text-white/10">
              ${String(this.HotspotsArtesania.length).padStart(2, '0')}
            </p>

            <p class="mt-1 text-[7px] font-bold uppercase tracking-[2px] text-white/40">
              piezas documentadas
            </p>

          </div>

        </div>


        <p class="mt-5 max-w-[145mm] text-[9px] leading-[1.8] text-white/50">
          La colección reúne herramientas, objetos y elementos
          asociados a diferentes dimensiones de la vida tradicional
          de Huaranchal.
        </p>


        <!-- Grid de hotspots -->
        <div class="mt-10 grid grid-cols-2 gap-x-[10mm] gap-y-[7mm]">

          ${this.HotspotsArtesania.map((hotspot, index) => `

            <article class="relative min-h-[37mm] border-t border-white/10 pt-4">

              <div class="flex gap-4">

                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6C445] text-[9px] font-black text-[#0b0f0d]">
                  ${String(index + 1).padStart(2, '0')}
                </div>

                <div class="min-w-0">

                  <span class="text-[7px] font-bold uppercase tracking-[1.5px] text-[#F6C445]">
                    ${hotspot.categoria}
                  </span>

                  <h4 class="mt-1.5 text-[11px] font-black leading-tight text-white">
                    ${hotspot.titulo}
                  </h4>

                  <p class="mt-2 text-[7.5px] leading-[1.7] text-white/50">
                    ${hotspot.descripcion}
                  </p>

                </div>

              </div>

            </article>

          `).join('')}

        </div>


        <!-- Cierre -->
        <div class="mt-[12mm] rounded-[6mm] border border-white/10 bg-white/[0.03] p-6">

          <div class="flex items-start gap-5">

            <div class="h-10 w-1 shrink-0 bg-[#F6C445]"></div>

            <div>

              <span class="text-[7px] font-bold uppercase tracking-[2px] text-[#F6C445]">
                Memoria viva
              </span>

              <p class="mt-2 text-[11px] leading-[1.8] text-white/70">
                Conservar estos objetos significa también conservar
                las historias, conocimientos y formas de vida que
                acompañan a las generaciones de Huaranchal.
              </p>

            </div>

          </div>

        </div>

      </div>


      <!-- Footer -->
      <div class="absolute bottom-[10mm] left-[18mm] right-[18mm] flex items-center justify-between border-t border-white/10 pt-3">

        <span class="text-[7px] font-bold uppercase tracking-[2px] text-white/35">
          Raíces de Huaranchal
        </span>

        <span class="text-[7px] text-white/35">
          Artesanía · ${this.HotspotsArtesania.length} elementos
        </span>

      </div>

    </section>

  `;
}

}