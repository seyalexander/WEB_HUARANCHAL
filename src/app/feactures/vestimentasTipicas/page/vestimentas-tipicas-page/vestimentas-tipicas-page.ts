import { Component } from '@angular/core';
import { FooterLugaresTuristicos } from "../../../../shared/components/footer-lugares-turisticos/footer-lugares-turisticos";
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-vestimentas-tipicas-page',
  imports: [FooterLugaresTuristicos, NgClass, CommonModule],
  templateUrl: './vestimentas-tipicas-page.html',
  styleUrl: './vestimentas-tipicas-page.css',
})
export class VestimentasTipicasPage {
  personas = {
    varon: {
      nombre: 'Vestimenta Masculina',
      imagen: 'assets/VESTIMENTA/varon.png',
      descripcion:
        'Utilizada durante labores agrícolas, festividades y actividades comunales.'
    },

    mujer: {
      nombre: 'Vestimenta Femenina',
      imagen: 'assets/VESTIMENTAS/vestimenta_mujeres_01.png',
      descripcion:
        'Destaca por sus tejidos, colores y accesorios elaborados artesanalmente.'
    }
  };

  personaSeleccionada = this.personas.varon;

  prendasVaron = [
    {
      nombre: 'Sombrero',
      descripcion:
        'Prenda utilizada para protegerse del sol y las condiciones climáticas de la sierra.',
        imagen: 'assets/VESTIMENTAS/vestimenta_sombrero.png'
    },
    {
      nombre: 'Poncho',
      descripcion:
        'Elaborado tradicionalmente en lana. Brinda abrigo y forma parte de la identidad cultural.',
        imagen: 'assets/VESTIMENTAS/vestimenta_poncho.png'
    },
    {
      nombre: 'Camisa',
      descripcion:
        'Prenda de uso diario utilizada durante las labores agrícolas y festividades.',
        imagen: 'assets/VESTIMENTAS/vestimenta_camisa.png'
    },
    {
      nombre: 'Pantalón',
      descripcion:
        'Generalmente confeccionado para facilitar el trabajo en el campo.',
        imagen: 'assets/VESTIMENTAS/vestimenta_pantalon.png'
    }
  ];

  prendasMujer = [
    {
      nombre: 'Sombrero',
      descripcion:
        'Complemento tradicional utilizado en actividades cotidianas y festividades.',
        imagen: 'assets/VESTIMENTAS/vestimenta_sombrero.png'
    },
    {
      nombre: 'Rebozo',
      descripcion:
        'Tejida artesanalmente y utilizada para protegerse del frío o transportar objetos.',
        imagen: 'assets/VESTIMENTAS/vestimenta_rebozo.png'
    },
    {
      nombre: 'Pollera',
      descripcion:
        'Falda tradicional de gran importancia dentro de la vestimenta femenina andina.',
        imagen: 'assets/VESTIMENTAS/vestimenta_pollera.png'
    },
    {
      nombre: 'Tejidos',
      descripcion:
        'Accesorios elaborados con técnicas heredadas por generaciones.',
        imagen: 'assets/VESTIMENTAS/vestimenta_tejido.png'
    }
  ];

  prendaSeleccionada = this.prendasVaron[0];

  seleccionarPersona(tipo: 'varon' | 'mujer') {

    if (tipo === 'varon') {
      this.personaSeleccionada = this.personas.varon;
      this.prendaSeleccionada = this.prendasVaron[0];
    } else {
      this.personaSeleccionada = this.personas.mujer;
      this.prendaSeleccionada = this.prendasMujer[0];
    }

  }

  seleccionarPrenda(prenda: any) {
    this.prendaSeleccionada = prenda;
  }

  
}
