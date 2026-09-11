import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LUGARES_TURISTICOS } from '../../../../shared/data/lugaresTuristicos/LugarTuristico.data';
import { galeriaLugarTuristico, historiaLugarTuristico, lugarTuristico, souvenirLugarTuristico } from '../../../../shared/data/lugaresTuristicos/LugarTuristico.interface';
import { LugarTuristicoGaleria } from '../../../../shared/components/llugares-turisticos/lugar-turistico-galeria/lugar-turistico-galeria';
import { FooterLugaresTuristicos } from '../../../../shared/components/footer-lugares-turisticos/footer-lugares-turisticos';
import { GalleriaModule } from 'primeng/galleria';
import { LugarTuristicoHistoria } from '../../../../shared/components/llugares-turisticos/lugar-turistico-historia/lugar-turistico-historia';
import { PdfExportService } from '../../../../shared/services/pdf/pdf-export-service';
import { Location } from '@angular/common';

export type TabLugar =
  | 'galeria'
  | 'historia'
  | 'souvenirs'
  | 'ubicacion';

@Component({
  selector: 'app-item-lugar-turistico',
  imports: [FooterLugaresTuristicos,
    GalleriaModule,
    LugarTuristicoHistoria,
    LugarTuristicoGaleria],
  templateUrl: './item-lugar-turistico.html',
  styleUrl: './item-lugar-turistico.css',
})
export class ItemLugarTuristico {
  private readonly route = inject(ActivatedRoute);

  lugar?: lugarTuristico;
  hero: any;
  galeria: galeriaLugarTuristico[] = [];
  historia: historiaLugarTuristico = {} as historiaLugarTuristico;
  souvenirs: souvenirLugarTuristico[] = []

   private pdfService = inject(PdfExportService);

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('routerLink');

    this.lugar = LUGARES_TURISTICOS.find(
      lugar => lugar.routerLink === `/lugares/${slug}`
    );


    if (this.lugar) {
      this.hero = this.lugar.lugar.hero;
      this.galeria = this.lugar.lugar.galeria
      this.historia = this.lugar.lugar.historia
      this.souvenirs = this.lugar.lugar.souvenirs
    }
  }

  tabSeleccionado: TabLugar = 'galeria';
  mostrarTodas = false;

  tabs = [
    {
      id: 'galeria',
      icono: 'camera',
      nombre: 'Galería'
    },
    {
      id: 'historia',
      icono: 'historia',
      nombre: 'Historia'
    },
    {
      id: 'souvenirs',
      icono: 'souvenir',
      nombre: 'Souvenirs'
    },
    {
      id: 'ubicacion',
      icono: 'localizacion',
      nombre: 'Cómo llegar'
    }
  ];

  categoriaSeleccionada: string = 'todas';

  // Getter para obtener solo las favoritas
  get fotosFavoritas() {
    return this.galeria.filter(item => item.favorita);
  }

  // Getter para filtrar según la categoría activa
  get galeriaFiltrada() {
    if (this.categoriaSeleccionada === 'todas') return this.galeria;
    return this.galeria.filter(item => item.categoria === this.categoriaSeleccionada);
  }

  filtrar(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  mostrarGaleriaCompleta(): void {
    this.mostrarTodas = true;
  }

  ocultarGaleria(): void {
    this.mostrarTodas = false;
  }

  // =========================================================
  // GALLERIA PRIME NG
  // =========================================================
  mostrarGalleria = false;

  imagenSeleccionada = 0;

  abrirImagen(index: number): void {
    this.imagenSeleccionada = index;
    this.mostrarGalleria = true;
  }


  cambiarImagen(index: number): void {

    this.imagenSeleccionada = index;

  }


  cerrarGalleria(): void {

    this.mostrarGalleria = false;

  }


  // GENERACIÓN PDF
  // =========================================================

  descargarPdf(): void {
    // Párrafos de la historia con espaciado óptimo
    const párrafosHistoria = this.historia.historia
      .map(item => `<p class="m-0 mb-1.5 text-justify">${item.p}</p>`)
      .join('');

    const tarjetasSouvenirs = this.souvenirs.map(s => `
    <div class="bg-slate-50 border border-slate-200 rounded-lg p-2.5 flex flex-col justify-between">
      <img src="${s.imagen}" class="w-full h-[32mm] object-cover rounded-md mb-1.5 border border-slate-200" />
      <div>
        <span class="text-[7pt] font-bold text-emerald-600 uppercase block">${s.tipo}</span>
        <h3 class="text-[9pt] font-bold text-slate-900 m-0 leading-tight">${s.titulo}</h3>
        <p class="text-[7.5pt] text-slate-600 mt-1 m-0 leading-tight">${s.descripcion}</p>
      </div>
    </div>
  `).join('');

    // Mezcla aleatoria de la galería (selecciona 4 fotos al azar)
    const fotosGaleria = [...this.galeria]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map(g => `
      <img src="${g.foto}" class="w-full h-[20mm] object-cover rounded-md border border-slate-700" />
    `).join('');

    const htmlPdf = `
    <!-- HOJA 1 -->
    <div class="page-a4">

      <!-- Encabezado Hero reducido de 72mm a 62mm -->
      <div class="h-[62mm] bg-slate-900 text-white p-[10mm_15mm_8mm_15mm] relative">
        <div class="absolute top-0 right-0 w-[8mm] h-full bg-emerald-600"></div>

        <span class="text-[8.5pt] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
          Guía Turística Oficial
        </span>

        <h1 class="text-[22pt] font-extrabold uppercase tracking-tight leading-none text-white my-0">
          ${this.hero.titulo_1} ${this.hero.titulo_2}
        </h1>

        <p class="text-[10pt] text-emerald-400 font-semibold uppercase tracking-wider mt-1 mb-0">
          ${this.historia.ubicacion}
        </p>

        <p class="text-[8.5pt] text-slate-300 mt-2 leading-relaxed max-w-[140mm]">
          ${this.hero.descripcion}
        </p>
      </div>

      <!-- Imagen Hero reducida a 58mm y desplazada más arriba (-mt-[20mm]) -->
      <div class="px-[15mm] mt-[-20mm] relative z-20">
        <img src="${this.hero.imagen}"
             class="w-full h-[80mm] object-cover rounded-xl shadow-md border-2 border-white" />
      </div>

      <!-- Sección Historia con padding reducido (pt-4) -->
      <div class="p-[4mm_15mm_15mm_15mm] relative z-10">

        <div class="mb-1.5">
          <span class="text-[7.5pt] font-bold text-emerald-600 uppercase tracking-widest block mb-0.5">
            HISTORIA Y ORIGEN
          </span>

          <h2 class="text-[12pt] font-bold text-slate-900 leading-tight m-0">
            ${this.historia.titulo}
          </h2>
        </div>

        <!-- Columnas con tamaño de letra de 7.5pt -->
        <div class="columns-2 gap-5 text-[9pt] text-slate-600 leading-snug">
          ${párrafosHistoria}
        </div>

      </div>

      <!-- Footer Hoja 1 -->
      <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt] z-20">
        <span class="text-slate-300">Descubre Huaranchal • Turismo Sostenible</span>
        <span class="text-emerald-400 font-semibold">Página 1 de 2</span>
      </div>

    </div>


    <!-- HOJA 2 -->
    <div class="page-a4">

      <div class="p-[15mm] h-full">

        <!-- INFORMACIÓN CLAVE -->
        <div class="mb-5 rounded-xl overflow-hidden border border-emerald-200 shadow-sm">

          <!-- Cabecera colorida -->
          <div class="bg-emerald-700 px-4 py-2.5 text-white">
            <span class="text-[8pt] font-bold text-emerald-100 uppercase tracking-widest block mb-0.5">
              INFORMACIÓN CLAVE
            </span>

            <h2 class="text-[11.5pt] font-bold text-white m-0 leading-tight">
              Detalles del Lugar
            </h2>
          </div>

          <!-- Contenido -->
          <div class="bg-emerald-50 p-3.5">

            <div class="grid grid-cols-2 gap-3.5">

              <!-- Ubicación -->
              <div class="bg-white border border-emerald-200 border-l-[5px] border-l-emerald-600 p-2.5 rounded-r-lg shadow-sm">

                <div class="flex items-center gap-2 mb-1">
                  <div class="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span class="text-[8pt] font-bold text-emerald-700">⌖</span>
                  </div>

                  <span class="font-bold text-[8pt] text-emerald-800">
                    Ubicación
                  </span>
                </div>

                <span class="text-[7.5pt] text-slate-700 block leading-normal">
                  ${this.historia.ubicacion}
                </span>

              </div>


              <!-- Significado -->
              <div class="bg-white border border-orange-200 border-l-[5px] border-l-[#F28C28] p-2.5 rounded-r-lg shadow-sm">

                <div class="flex items-center gap-2 mb-1">
                  <div class="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                    <span class="text-[8pt] font-bold text-[#D97706]">✦</span>
                  </div>

                  <span class="font-bold text-[8pt] text-[#B45309]">
                    Significado / Etimología
                  </span>
                </div>

                <span class="text-[7.5pt] text-slate-700 block leading-normal">
                  ${this.historia.significado}
                </span>

              </div>

            </div>

          </div>

        </div>


        <!-- Título Souvenirs -->
        <div class="border-b-2 border-emerald-100 pb-2 mb-3.5">

          <span class="text-[7.5pt] font-bold text-[#F28C28] uppercase tracking-widest block mb-0.5">
            EXPERIENCIA Y RECUERDOS
          </span>

          <h2 class="text-[13pt] font-extrabold text-slate-900 m-0">
            Souvenirs y Productos Locales
          </h2>

          <p class="text-[7.5pt] text-slate-500 m-0 mt-0.5">
            Llévate contigo los mejores recuerdos inspirados en la historia, cultura y paisajes de Huaranchal.
          </p>

        </div>


        <!-- Tarjetas de Souvenirs -->
        <div class="grid grid-cols-2 gap-3.5">
          ${tarjetasSouvenirs}
        </div>


        <!-- Galería Visual -->
        <div class="mt-3.5 bg-slate-900 text-white rounded-xl p-3 border border-slate-800">

          <span class="text-[7.5pt] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
            GALERÍA VISUAL
          </span>

          <div class="grid grid-cols-4 gap-2">
            ${fotosGaleria}
          </div>

        </div>

      </div>


      <!-- Footer Hoja 2 -->
      <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt] z-20">
        <span class="text-slate-300">Descubre Huaranchal • Turismo Sostenible</span>
        <span class="text-emerald-400 font-semibold">Página 2 de 2</span>
      </div>

    </div>
  `;

    this.pdfService.imprimirHtmlAislado(htmlPdf);
  }

  private location = inject(Location)

  volverInicio() {
    this.location.back();
  }

  // Lectura historia

  leyendo = false;
  pausado = false;

  private synth = window.speechSynthesis;
  private textoHistoria: string[] = [];
  private indiceParrafo = 0;

  leerHistoria(): void {

    // Si está pausado, continuar desde donde quedó
    if (this.pausado) {
      this.continuarHistoria();
      return;
    }

    // Si está leyendo, pausar
    if (this.leyendo) {
      this.pausarHistoria();
      return;
    }

    // Iniciar lectura desde el principio
    this.synth.cancel();

    this.textoHistoria = this.historia.historia
      .map(parrafo => parrafo.p.trim())
      .filter(parrafo => parrafo.length > 0);

    if (this.textoHistoria.length === 0) {
      return;
    }

    this.indiceParrafo = 0;
    this.leyendo = true;
    this.pausado = false;

    this.leerParrafo();
  }

  private leerParrafo(): void {

    if (!this.leyendo || this.indiceParrafo >= this.textoHistoria.length) {
      this.detenerHistoria();
      return;
    }

    const texto = this.textoHistoria[this.indiceParrafo];

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = 'es-PE';
    voz.rate = 0.9;
    voz.pitch = 1;
    voz.volume = 1;

    voz.onend = () => {

      if (!this.leyendo || this.pausado) {
        return;
      }

      this.indiceParrafo++;

      this.leerParrafo();
    };

    voz.onerror = () => {
      this.leyendo = false;
      this.pausado = false;
    };

    this.synth.speak(voz);
  }

  pausarHistoria(): void {

    if (this.synth.speaking && !this.synth.paused) {
      this.synth.pause();
      this.pausado = true;
    }

  }

  continuarHistoria(): void {

    if (this.synth.paused) {
      this.synth.resume();
      this.pausado = false;
    }

  }

  detenerHistoria(): void {

    this.synth.cancel();

    this.leyendo = false;
    this.pausado = false;
    this.indiceParrafo = 0;

  }

}
