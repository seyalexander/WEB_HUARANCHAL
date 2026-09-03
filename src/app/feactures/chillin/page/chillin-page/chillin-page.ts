import { Component } from '@angular/core';
import { FooterLugaresTuristicos } from "../../../../shared/components/footer-lugares-turisticos/footer-lugares-turisticos";
import { GalleriaModule } from 'primeng/galleria';

export type TabLugar =
  | 'galeria'
  | 'historia'
  | 'souvenirs'
  | 'ubicacion';


@Component({
  selector: 'app-chillin-page',
  imports: [
    FooterLugaresTuristicos,
    GalleriaModule
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
}
