import { Component } from '@angular/core';
import { FooterLugaresTuristicos } from "../../../../shared/components/footer-lugares-turisticos/footer-lugares-turisticos";

export type TabLugar =
  | 'galeria'
  | 'historia'
  | 'souvenirs'
  | 'ubicacion';

@Component({
  selector: 'app-banios-termanles-page',
  imports: [FooterLugaresTuristicos],
  templateUrl: './banios-termanles-page.html',
  styleUrl: './banios-termanles-page.css',
})
export class BaniosTermanlesPage {

  tabSeleccionado: TabLugar = 'galeria';

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
    imagen: 'assets/LUGARES/BANIOS_TERMALES/TERMALES_01.jpeg',
    titulo_1: 'Baños',
    titulo_2: 'Termales',
    descripcion: `
      Uno de los paisajes naturales más impresionantes
      de Huaranchal, rodeado de vegetación,
      senderos ecológicos y vistas espectaculares.
    `
  }

  galeria = [
    {
      foto: 'assets/LUGARES/PAKCHA/PACKCHA_01.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/PAKCHA/PAKCHA_06.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/PAKCHA/PAKCHA_07.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/PAKCHA/PAKCHA_04.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/PAKCHA/PAKCHA_05.jpeg',
      ultimo: false
    },
    {
      foto: 'assets/LUGARES/PAKCHA/PAKCHA_03.jpeg',
      ultimo: true
    },
  ]

  historia = {
    imagen: 'assets/LUGARES/PAKCHA/PAKCHA_08.jpeg',
    lugar: 'Catarata Pakcha',
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

}
