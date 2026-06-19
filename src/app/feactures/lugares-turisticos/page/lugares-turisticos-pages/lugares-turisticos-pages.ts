import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TarjetaLugarTuristico } from "../../components/tarjeta-lugar-turistico/tarjeta-lugar-turistico";

export interface lugarTuristico {
  imagen: string,
  titleH3: string,
  titleH1: string,
  descripcion: string,
  routerLink: string,
  fraseTurista?: string, 
  estadoTurista?:string
}

@Component({
  selector: 'app-lugares-turisticos-pages',
  imports: [RouterLink, TarjetaLugarTuristico],
  templateUrl: './lugares-turisticos-pages.html',
  styleUrl: './lugares-turisticos-pages.css',
})
export class LugaresTuristicosPages implements OnInit {

  showTraveler = false;

  urlGlobal: string = "assets"
  carouselDirection: 'left' | 'right' | null = null;
  estadoTurista?: 'feliz' | 'sorprendido' | 'relajado';
  isAnimating = false;

  items: lugarTuristico[] = [
  {
    imagen: `${this.urlGlobal}/CATARATA-IMG.jpeg`,
    titleH3: "Catarata",
    titleH1: "Pakcha",
    descripcion: "Una impresionante caída de agua rodeada de vegetación y senderos naturales.",
    routerLink: "/CatarataPakcha",
    fraseTurista: "¡Wow! Este lugar sí que me deja sin palabras...",
    estadoTurista: 'sorprendido'
  },
  {
    imagen: `${this.urlGlobal}/LUGARES/BANIOS_TERMALES/TERMALES_01.jpeg`,
    titleH3: "Baños",
    titleH1: "Termales",
    descripcion: "Espacios ideales para relajarse y disfrutar de aguas naturales.",
    routerLink: "/BaniosTermales",
    fraseTurista: "Esto sí es vida... relax total 😌",
    estadoTurista: 'relajado'
  },
  {
    imagen: `${this.urlGlobal}/LUGARES/BANIOS_TERMALES/TERMALES_01.jpeg`,
    titleH3: "Mirador",
    titleH1: "Chillin",
    descripcion: "Espacios ideales para relajarse y disfrutar de aguas naturales.",
    routerLink: "/BaniosTermales",
    fraseTurista: "Desde aquí todo el valle se ve increíble...",
    estadoTurista: 'feliz'
  }
]

  ngOnInit() {
    this.items;
  }

 activeIndex = 0;

get activeItem(): lugarTuristico {
  return this.items[this.activeIndex];
}

nextPlace(): void {
  this.activeIndex =
    (this.activeIndex + 1) % this.items.length;
}

prevPlace(): void {
  this.activeIndex =
    (this.activeIndex - 1 + this.items.length) %
    this.items.length;
}

selectPlace(index: number): void {
  this.activeIndex = index;
}

getVisibleCards() {
  const result = [];

  for (let i = -2; i <= 2; i++) {

    const index =
      (this.activeIndex + i + this.items.length) %
      this.items.length;

    result.push({
      item: this.items[index],
      position: i
    });

  }

  return result;
}

}
