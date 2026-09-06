import { Component, inject } from '@angular/core';
import { FooterLugaresTuristicos } from "../../../../shared/components/footer-lugares-turisticos/footer-lugares-turisticos";
import { GalleriaModule } from 'primeng/galleria';
import { DatosLugarPdf, PdfTuristicoComponent } from '../../../../shared/components/pdf-turistico-component/pdf-turistico-component';
import { Button } from "primeng/button";
import { PdfExportService } from '../../../../shared/services/pdf/pdf-export-service';
import { LugarTuristicoHistoria } from "../../../../shared/components/llugares-turisticos/lugar-turistico-historia/lugar-turistico-historia";
import { LugarTuristicoGaleria } from "../../../../shared/components/llugares-turisticos/lugar-turistico-galeria/lugar-turistico-galeria";
import { Location } from '@angular/common';

export type TabLugar =
  | 'galeria'
  | 'historia'
  | 'souvenirs'
  | 'ubicacion';

 interface FotoGaleria {
  foto: string;
  titulo?: string;
  categoria?: string;
  favorita?: boolean;
  ubicacion?: string;
}

@Component({
  selector: 'app-chillin-page',
  imports: [
    FooterLugaresTuristicos,
    GalleriaModule,
    PdfTuristicoComponent,
    Button,
    LugarTuristicoHistoria,
    LugarTuristicoGaleria
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


  categoriaSeleccionada: string = 'todas';

  galeria: FotoGaleria[] = [
    { foto: 'assets/LUGARES/CHILLIN/chillin-03.jpeg', titulo: 'Vista Principal', categoria: 'exteriores', favorita: true, ubicacion: 'Chillín, Perú' },
    { foto: 'assets/LUGARES/CHILLIN/chillin-02.jpeg', titulo: 'Zona Lounge', categoria: 'interiores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-06.jpeg', titulo: 'Atardecer', categoria: 'paisajes', favorita: true, ubicacion: 'Mirador' },
    { foto: 'assets/LUGARES/CHILLIN/chillin-05.jpeg', titulo: 'Área Común', categoria: 'interiores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-04.jpeg', titulo: 'Jardín Central', categoria: 'exteriores', favorita: true },
    { foto: 'assets/LUGARES/CHILLIN/chillin-07.jpeg', titulo: 'Piscina', categoria: 'exteriores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-08.jpeg', titulo: 'Noche en Chillín', categoria: 'paisajes', favorita: true },
    { foto: 'assets/LUGARES/CHILLIN/chillin-09.jpeg', titulo: 'Comedor', categoria: 'interiores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-10.jpeg', titulo: 'Sendero', categoria: 'paisajes', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-11.jpeg', titulo: 'Terraza', categoria: 'exteriores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-12.jpeg', titulo: 'Habitación Matrimonial', categoria: 'interiores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-13.jpeg', titulo: 'Vista Panorámica', categoria: 'paisajes', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-14.jpeg', titulo: 'Vista Principal', categoria: 'exteriores', favorita: true, ubicacion: 'Chillín, Perú' },
    { foto: 'assets/LUGARES/CHILLIN/chillin-15.jpeg', titulo: 'Zona Lounge', categoria: 'interiores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-16.jpeg', titulo: 'Atardecer', categoria: 'paisajes', favorita: true, ubicacion: 'Mirador' },
    { foto: 'assets/LUGARES/CHILLIN/chillin-17.jpeg', titulo: 'Área Común', categoria: 'interiores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-18.jpeg', titulo: 'Jardín Central', categoria: 'exteriores', favorita: true },
    { foto: 'assets/LUGARES/CHILLIN/chillin-19.jpeg', titulo: 'Piscina', categoria: 'exteriores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-20.jpeg', titulo: 'Noche en Chillín', categoria: 'paisajes', favorita: true },
    { foto: 'assets/LUGARES/CHILLIN/chillin-21.jpeg', titulo: 'Comedor', categoria: 'interiores', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-22.jpeg', titulo: 'Sendero', categoria: 'paisajes', favorita: false },
    { foto: 'assets/LUGARES/CHILLIN/chillin-23.jpeg', titulo: 'Terraza', categoria: 'exteriores', favorita: false }
  ];

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

  historia = {
    imagen: 'assets/LUGARES/CHILLIN/chillin-07.jpeg',
    lugar: 'Mirador el Chillin',
    descripcion: 'Uno de los paisajes más impresionantes de Huaranchal, rodeado de vegetación, senderos naturales y vistas únicas del Valle Alto Chicama.',
    titulo: 'Un símbolo natural de Huaranchal',
    historia: [
      {
        p: `
      El Cerro Chillín es un importante lugar turístico del distrito de Huaranchal, 
      ubicado al oeste de la capital distrital. Su nombre tiene origen en una planta 
      conocida por los pobladores como "chillín", cuyo nombre proviene del quechua. 
      Esta planta crecía abundantemente en la zona y era aprovechada tradicionalmente 
      por los habitantes para elaborar lazos y sogas utilizados para amarrar a sus animales.
    `
      },
      {
        p: `
      Estas sogas tenían una particularidad: eran utilizadas principalmente durante 
      la época en que no había lluvias. Cuando llegaba la temporada de precipitaciones, 
      las sogas se mojaban y terminaban deteriorándose, por lo que su uso estaba condicionado 
      a las características del clima de la zona. Esta práctica forma parte de los conocimientos 
      y costumbres tradicionales que se han transmitido entre los pobladores de Huaranchal.
    `
      },
      {
        p: `
      Con el paso de los años, el Cerro Chillín también se ha convertido en un lugar 
      de encuentro y celebración para la comunidad. Durante los meses de abril y mayo, 
      numerosas personas visitan este lugar con motivo de la celebración del Día del Trabajador, 
      una festividad que se mantiene como una tradición de muchos años y que está acompañada 
      por la devoción a la Santísima Cruz del Chillín.
    `
      },
      {
        p: `
      Además de su importancia cultural y tradicional, el Cerro Chillín destaca por sus 
      impresionantes paisajes. Desde sus alturas se puede apreciar una hermosa vista del 
      distrito de Huaranchal, así como de sus caseríos aledaños y de algunas localidades 
      pertenecientes a otros distritos. Esta ubicación privilegiada convierte al Chillín 
      en uno de los miradores naturales más representativos de la zona.
    `
      },
      {
        p: `
      La experiencia de visitar el Cerro Chillín comienza desde el recorrido hacia el 
      recientemente inaugurado mirador. El acceso permite disfrutar progresivamente del 
      paisaje y descubrir nuevos espacios naturales. Desde este punto, el recorrido continúa 
      ascendiendo hasta llegar al propio cerro, donde la belleza del entorno y la tranquilidad 
      del lugar hacen que la experiencia sea aún más especial.
    `
      },
      {
        p: `
      Cada primero de mayo, el Cerro Chillín cobra especial importancia con la celebración 
      del Día del Trabajador. Los pobladores suelen subir desde la madrugada o incluso desde 
      la noche anterior para acampar en el lugar y participar de las actividades tradicionales. 
      De manera similar, el caserío El Jacinto, ubicado en el camino hacia el cerro, también 
      celebra su propia fiesta patronal durante estas fechas.
    `
      },
      {
        p: `
      Durante estas celebraciones se realiza el tradicional evento denominado "Florecer", 
      en el que los habitantes se reúnen al amanecer para disfrutar de la música, compartir 
      en comunidad y contemplar las espectaculares vistas desde las alturas. Esta celebración 
      representa una muestra de la identidad, las costumbres y la devoción de los pobladores 
      hacia este importante lugar.
    `
      },
      {
        p: `
      El Cerro Chillín reúne naturaleza, tradición, historia y cultura en un mismo espacio. 
      Su origen ligado a las costumbres de los pobladores, sus celebraciones tradicionales 
      y sus impresionantes paisajes lo convierten en un lugar representativo de Huaranchal. 
      Visitarlo permite conocer no solo la belleza natural del distrito, sino también parte 
      de las tradiciones que forman parte de su identidad.
    `
      }
    ],
    significado: `Mirador El Chillin.`,
    ubicacion: `
      Distrito de Huaranchal,
      provincia de Otuzco,
      región La Libertad.`
  }

  souvenirs = [
    {
      imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_1.png',
      titulo: 'Imán de Refrigerador',
      descripcion: 'Lleva contigo un recuerdo de la Catarata Pakcha y de los paisajes naturales de Huaranchal.',

      lugar: 'Huaranchal',
      turistico: 'Pakcha',
      tipo: 'Recuerdo'
    },
    {
      imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_3.png',
      titulo: 'Llavero Cruz del Chillin',
      descripcion: 'Lleva contigo un recuerdo de la Cruz del Chillin, uno de los lugares representativos de Huaranchal, como símbolo de fe, tradición y conexión con este hermoso destino.',

      lugar: 'Huaranchal',
      turistico: 'Chillin',
      tipo: 'Recuerdo'
    },
    {
      imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_4.png',
      titulo: 'Adorno decorativo de madera',
      descripcion: 'Lleva a casa un recuerdo del Chillin con este adorno de madera, inspirado en sus hermosos paisajes y pensado para decorar cualquier espacio con un toque especial de Huaranchal.',

      lugar: 'Huaranchal',
      turistico: 'Chillin',
      tipo: 'Recuerdo'
    },
    {
      imagen: 'assets/LUGARES/CHILLIN/SOUVENIRS/SOUVENIR_CHILLIN_5.png',
      titulo: 'Señal decorativa de madera',
      descripcion: 'Lleva contigo un recuerdo del Chillin con esta decoración de madera, formada por pequeñas señalizaciones con frases representativas que evocan sus paisajes, tradición y encanto natural.',

      lugar: 'Huaranchal',
      turistico: 'Chillin',
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
      <div class="px-[15mm] -mt-[20mm] relative z-20">
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

}
