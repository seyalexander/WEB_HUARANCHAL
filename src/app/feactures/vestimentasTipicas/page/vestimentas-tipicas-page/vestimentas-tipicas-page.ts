import { Component } from '@angular/core';
import { FooterLugaresTuristicos } from "../../../../shared/components/footer-lugares-turisticos/footer-lugares-turisticos";

@Component({
  selector: 'app-vestimentas-tipicas-page',
  imports: [FooterLugaresTuristicos],
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
        'Prenda utilizada para protegerse del sol y las condiciones climáticas de la sierra.'
    },
    {
      nombre: 'Poncho',
      descripcion:
        'Elaborado tradicionalmente en lana. Brinda abrigo y forma parte de la identidad cultural.'
    },
    {
      nombre: 'Camisa',
      descripcion:
        'Prenda de uso diario utilizada durante las labores agrícolas y festividades.'
    },
    {
      nombre: 'Pantalón',
      descripcion:
        'Generalmente confeccionado para facilitar el trabajo en el campo.'
    }
  ];

  prendasMujer = [
    {
      nombre: 'Sombrero',
      descripcion:
        'Complemento tradicional utilizado en actividades cotidianas y festividades.'
    },
    {
      nombre: 'Manta',
      descripcion:
        'Tejida artesanalmente y utilizada para protegerse del frío o transportar objetos.'
    },
    {
      nombre: 'Pollera',
      descripcion:
        'Falda tradicional de gran importancia dentro de la vestimenta femenina andina.'
    },
    {
      nombre: 'Tejidos',
      descripcion:
        'Accesorios elaborados con técnicas heredadas por generaciones.'
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
