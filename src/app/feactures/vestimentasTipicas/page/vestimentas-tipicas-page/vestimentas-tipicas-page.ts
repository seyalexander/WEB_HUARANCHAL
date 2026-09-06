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
      descripcion: 'Utilizada durante labores agrícolas, festividades y actividades comunales.'
    },

    mujer: {
      nombre: 'Vestimenta Femenina',
      imagen: 'assets/VESTIMENTAS/vestimenta_mujeres_01.png',
      descripcion: 'Destaca por sus tejidos, colores y accesorios elaborados artesanalmente.'
    }
  };

  personaSeleccionada = this.personas.varon;

  prendasVaron = [
    {
      nombre: 'Sombrero',
      descripcion: 'Prenda utilizada para protegerse del sol y las condiciones climáticas de la sierra.',
      imagenes: [
        //'assets/VESTIMENTAS/vestimenta_sombrero.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_01.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_02.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_03.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_04.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_05.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_06.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_07.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_08.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_09.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_10.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_11.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_12.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_13.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_14.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_15.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_16.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_17.png',
        //'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_18.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_19.png',
        'assets/VESTIMENTAS/sombrero/vestimenta_sombrero_20.png',
      ]
    },
    {
      nombre: 'Poncho',
      descripcion: 'Elaborado tradicionalmente en lana. Brinda abrigo y forma parte de la identidad cultural.',
      imagenes: [
        'assets/VESTIMENTAS/vestimenta_poncho.png'
      ]
    },
    {
      nombre: 'Camisa',
      descripcion: 'Prenda de uso diario utilizada durante las labores agrícolas y festividades.',
      imagenes: [
        'assets/VESTIMENTAS/vestimenta_camisa.png'
      ]
    },
    {
      nombre: 'Pantalón',
      descripcion: 'Generalmente confeccionado para facilitar el trabajo en el campo.',
      imagenes: [
        'assets/VESTIMENTAS/vestimenta_pantalon.png'
      ]
    }
  ];

  prendasMujer = [
    {
      nombre: 'Sombrero',
      descripcion: 'Complemento tradicional utilizado en actividades cotidianas y festividades.',
      imagenes: [
        'assets/VESTIMENTAS/vestimenta_sombrero.png'
      ]
    },
    {
      nombre: 'Rebozo',
      descripcion: 'Tejida artesanalmente y utilizada para protegerse del frío o transportar objetos.',
      imagenes: [
        'assets/VESTIMENTAS/vestimenta_rebozo.png'
      ]
    },
    {
      nombre: 'Pollera',
      descripcion: 'Falda tradicional de gran importancia dentro de la vestimenta femenina andina.',
      imagenes: [
        'assets/VESTIMENTAS/vestimenta_pollera.png'
      ]
    },
    {
      nombre: 'Tejidos',
      descripcion: 'Accesorios elaborados con técnicas heredadas por generaciones.',
      imagenes: [
        'assets/VESTIMENTAS/vestimenta_tejido.png'
      ]
    }
  ];

  prendaSeleccionada = this.prendasVaron[0];

  // Control del giro
  indiceImagen = 0;

  private rotando = false;
  private posicionAnterior = 0;
  private acumuladorMovimiento = 0;

  seleccionarPersona(tipo: 'varon' | 'mujer'): void {

    if (tipo === 'varon') {
      this.personaSeleccionada = this.personas.varon;
      this.prendaSeleccionada = this.prendasVaron[0];
    } else {
      this.personaSeleccionada = this.personas.mujer;
      this.prendaSeleccionada = this.prendasMujer[0];
    }

    // Reiniciar la vista al cambiar de persona
    this.indiceImagen = 0;
  }

  seleccionarPrenda(prenda: any): void {
    this.prendaSeleccionada = prenda;

    // Reiniciar la vista al cambiar de prenda
    this.indiceImagen = 0;
  }

  iniciarRotacion(event: MouseEvent): void {
    this.rotando = true;
    this.posicionAnterior = event.clientX;
    this.acumuladorMovimiento = 0;
  }

  rotar(event: MouseEvent): void {

    if (!this.rotando) {
      return;
    }

    const movimiento = event.clientX - this.posicionAnterior;

    this.acumuladorMovimiento += movimiento;

    if (Math.abs(this.acumuladorMovimiento) >= 10) {

      if (this.acumuladorMovimiento > 0) {
        this.siguienteImagen();
      } else {
        this.imagenAnterior();
      }

      this.acumuladorMovimiento = 0;
      this.posicionAnterior = event.clientX;
    }
  }

  terminarRotacion(): void {
    this.rotando = false;
  }

  iniciarRotacionTouch(event: TouchEvent): void {
    this.rotando = true;
    this.posicionAnterior = event.touches[0].clientX;
    this.acumuladorMovimiento = 0;
  }

  rotarTouch(event: TouchEvent): void {

    if (!this.rotando) {
      return;
    }

    const movimiento = event.touches[0].clientX - this.posicionAnterior;

    this.acumuladorMovimiento += movimiento;

    if (Math.abs(this.acumuladorMovimiento) >= 10) {

      if (this.acumuladorMovimiento > 0) {
        this.siguienteImagen();
      } else {
        this.imagenAnterior();
      }

      this.acumuladorMovimiento = 0;
      this.posicionAnterior = event.touches[0].clientX;
    }
  }

  siguienteImagen(): void {

    const cantidad = this.prendaSeleccionada.imagenes.length;

    if (cantidad <= 1) {
      return;
    }

    this.indiceImagen = (this.indiceImagen + 1) % cantidad;
  }

  imagenAnterior(): void {

    const cantidad = this.prendaSeleccionada.imagenes.length;

    if (cantidad <= 1) {
      return;
    }

    this.indiceImagen = (this.indiceImagen - 1 + cantidad) % cantidad;
  }

}