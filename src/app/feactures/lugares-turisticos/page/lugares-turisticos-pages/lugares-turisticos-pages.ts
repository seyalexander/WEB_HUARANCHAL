import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TarjetaLugarTuristico } from "../../components/tarjeta-lugar-turistico/tarjeta-lugar-turistico";

export interface lugarTuristico {
  imagen: string,
  titleH3: string,
  titleH1: string,
  descripcion: string,
  routerLink: string
}

@Component({
  selector: 'app-lugares-turisticos-pages',
  imports: [RouterLink, TarjetaLugarTuristico],
  templateUrl: './lugares-turisticos-pages.html',
  styleUrl: './lugares-turisticos-pages.css',
})
export class LugaresTuristicosPages implements OnInit {
  urlGlobal: string = "assets"

  items:lugarTuristico[] = [
    {
      imagen: `${this.urlGlobal}/CATARATA-IMG.jpeg`,
      titleH3: "Catarata",
      titleH1: "Pakcha",
      descripcion: "Una impresionante caída de agua rodeada de vegetación y senderos naturales.",
      routerLink: "/CatarataPakcha"
    },
    {
      imagen: `${this.urlGlobal}/LUGARES/BANIOS_TERMALES/TERMALES_01.jpeg`,
      titleH3: "Baños",
      titleH1: "Termales",
      descripcion: "Espacios ideales para relajarse y disfrutar de aguas naturales.",
      routerLink: "/BaniosTermales"
    }
  ]

  ngOnInit() {
    this.items;
  }


}
