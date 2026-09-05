import { Component, inject } from '@angular/core';
import { FooterLugaresTuristicos } from "../../../../shared/components/footer-lugares-turisticos/footer-lugares-turisticos";
import { GalleriaModule } from 'primeng/galleria';
import { DatosLugarPdf, PdfTuristicoComponent } from '../../../../shared/components/pdf-turistico-component/pdf-turistico-component';
import { Button } from "primeng/button";
import { PdfExportService } from '../../../../shared/services/pdf/pdf-export-service';

export type TabLugar =
  | 'galeria'
  | 'historia'
  | 'souvenirs'
  | 'ubicacion';


@Component({
  selector: 'app-chillin-page',
  imports: [
    FooterLugaresTuristicos,
    GalleriaModule,
    PdfTuristicoComponent,
    Button
],
  templateUrl: './chillin-page.html',
  styleUrl: './chillin-page.css',
})
export class ChillinPage {
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

  hero = {
    imagen: 'assets/LUGARES/CHILLIN/chillin-03.jpeg',
    titulo_1: 'Mirador',
    titulo_2: 'el Chillin',
    descripcion: `
      Uno de los paisajes naturales más impresionantes
      de Huaranchal, rodeado de vegetación,
      senderos ecológicos y vistas espectaculares.
    `
  }

  galeria = [
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-03.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-02.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-06.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-05.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-04.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-07.jpeg',
      ultimo: true
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-08.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-09.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-10.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-11.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-12.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-13.jpeg',
      ultimo: true
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-14.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-15.jpeg',
      ultimo: true
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-16.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-17.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-18.jpeg',
      ultimo: true
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-19.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-20.jpeg',
      ultimo: true
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-21.jpeg',
      ultimo: true
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-22.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/CHILLIN/chillin-23.jpeg',
      ultimo: true
    },
  ]

  historia = {
    imagen: 'assets/LUGARES/CHILLIN/chillin-07.jpeg',
    lugar: 'Mirador el Chillin',
    descripcion: 'Uno de los paisajes más impresionantes de Huaranchal, rodeado de vegetación, senderos naturales y vistas únicas del Valle Alto Chicama.',
    titulo: 'Un símbolo natural de Huaranchal',
    historia: [
      {
        p: `
          La Catarata Pakcha es uno de los atractivos naturales
          más representativos del distrito de Huaranchal,
          ubicado en la provincia de Otuzco, región La Libertad.
        `
      },
      {
        p: `
          Rodeada por la exuberante vegetación del Valle Alto Chicama,
          esta caída de agua ha sido durante generaciones un lugar
          especial para los pobladores locales y visitantes.
        
        `
      },
      {
        p: `
          Su nombre proviene de la palabra quechua "Pakcha",
          utilizada en los Andes para referirse a una cascada
          o caída natural de agua.
        `
      }
    ],
    significado:`Pakcha significa cascada o caída de agua en lengua quechua.`,
    ubicacion: `
      Distrito de Huaranchal,
      provincia de Otuzco,
      región La Libertad.`
  }

  souvenirs = [
    {
      imagen: 'assets/LUGARES/PAKCHA/souvenir_pakcha_01.png',
      titulo: 'Imán de Refrigerador',
      descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',
      
      lugar: 'Huaranchal',
      turistico: 'Pakcha',
      tipo: 'Recuerdo'
    },
    {
      imagen: 'assets/LUGARES/PAKCHA/souvenir_pakcha_01.png',
      titulo: 'Taza decorativa',
      descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',
      
      lugar: 'Huaranchal',
      turistico: 'Pakcha',
      tipo: 'Recuerdo'
    }
  ]

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

  private pdfService = inject(PdfExportService);

  descargarPdf(): void {
    const párrafosHistoria = this.historia.historia.map(item => `<p class="m-0">${item.p}</p>`).join('');
    
    const tarjetasSouvenirs = this.souvenirs.map(s => `
      <div class="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col justify-between">
        <img src="${s.imagen}" class="w-full h-[38mm] object-cover rounded-md mb-2 border border-slate-200" />
        <div>
          <span class="text-[7pt] font-bold text-emerald-600 uppercase block">${s.tipo}</span>
          <h3 class="text-[9.5pt] font-bold text-slate-900 m-0">${s.titulo}</h3>
          <p class="text-[8pt] text-slate-600 mt-1 m-0 leading-tight">${s.descripcion}</p>
        </div>
      </div>
    `).join('');

    const fotosGaleria = this.galeria.slice(0, 4).map(g => `
      <img src="${g.foto}" class="w-full h-[22mm] object-cover rounded-md border border-slate-700" />
    `).join('');

    const htmlPdf = `
      <!-- HOJA 1 -->
      <div class="page-a4">
        <div class="h-[75mm] bg-slate-900 text-white p-[12mm_15mm_10mm_15mm] relative">
          <div class="absolute top-0 right-0 w-[8mm] h-full bg-emerald-600"></div>
          <span class="text-[9pt] font-bold text-emerald-400 uppercase tracking-widest block mb-1">Guía Turística Oficial</span>
          <h1 class="text-[24pt] font-extrabold uppercase tracking-tight leading-none text-white my-0">${this.hero.titulo_1} ${this.hero.titulo_2}</h1>
          <p class="text-[11pt] text-emerald-400 font-semibold uppercase tracking-wider mt-1 mb-0">${this.historia.ubicacion}</p>
          <p class="text-[9pt] text-slate-300 mt-2.5 leading-relaxed max-w-[140mm]">${this.hero.descripcion}</p>
        </div>

        <div class="px-[15mm] -mt-[18mm] relative z-20">
          <img src="${this.hero.imagen}" class="w-full h-[90mm] object-cover rounded-xl shadow-md border-2 border-white" />
        </div>

        <div class="p-[8mm_15mm_15mm_15mm] grid grid-cols-12 gap-6 relative z-10">
          <div class="col-span-7 pr-2">
            <span class="text-[8pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">HISTORIA Y ORIGEN</span>
            <h2 class="text-[12pt] font-bold text-slate-900 mb-2 leading-tight">${this.historia.titulo}</h2>
            <div class="space-y-2 text-[8.5pt] text-slate-600 leading-normal text-justify">${párrafosHistoria}</div>
          </div>

          <div class="col-span-5 pl-4 border-l border-slate-200">
            <span class="text-[8pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">INFORMACIÓN CLAVE</span>
            <h2 class="text-[12pt] font-bold text-slate-900 mb-3 leading-tight">Detalles del Lugar</h2>
            
            <div class="mb-3 bg-emerald-50 border-l-4 border-emerald-600 p-2.5 rounded-r-md">
              <span class="font-bold text-[8.5pt] text-emerald-800 block">Ubicación</span>
              <span class="text-[8pt] text-slate-700 block">${this.historia.ubicacion}</span>
            </div>

            <div class="mb-3 bg-slate-50 border-l-4 border-slate-800 p-2.5 rounded-r-md">
              <span class="font-bold text-[8.5pt] text-slate-900 block">Significado / Etimología</span>
              <span class="text-[8pt] text-slate-700 block">${this.historia.significado}</span>
            </div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt] z-20">
          <span class="text-slate-300">Descubre Huaranchal • Turismo Sostenible</span>
          <span class="text-emerald-400 font-semibold">Página 1 de 2</span>
        </div>
      </div>

      <!-- HOJA 2 -->
      <div class="page-a4">
        <div class="p-[15mm] h-full">
          <div class="border-b border-slate-200 pb-4 mb-6">
            <span class="text-[8pt] font-bold text-emerald-600 uppercase tracking-widest block mb-1">EXPERIENCIA Y RECUERDOS</span>
            <h2 class="text-[16pt] font-extrabold text-slate-900 m-0">Souvenirs y Productos Locales</h2>
            <p class="text-[8.5pt] text-slate-500 m-0 mt-1">Lleva contigo los mejores recuerdos elaborados por artesanos de la zona.</p>
          </div>

          <div class="grid grid-cols-2 gap-4">${tarjetasSouvenirs}</div>

          <div class="mt-6 bg-slate-900 text-white rounded-xl p-4">
            <span class="text-[8pt] font-bold text-emerald-400 uppercase tracking-widest block mb-2">GALERÍA VISUAL</span>
            <div class="grid grid-cols-4 gap-2">${fotosGaleria}</div>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 h-[16mm] bg-slate-900 text-white px-[15mm] flex items-center justify-between text-[8.5pt] z-20">
          <span class="text-slate-300">Descubre Huaranchal • Turismo Sostenible</span>
          <span class="text-emerald-400 font-semibold">Página 2 de 2</span>
        </div>
      </div>
    `;

    this.pdfService.imprimirHtmlAislado(htmlPdf);
  }


}
