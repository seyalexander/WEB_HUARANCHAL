import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LUGARES_TURISTICOS } from '../../../../shared/data/lugaresTuristicos/LugarTuristico.data';

export interface lugarTuristico {
  imagen: string,
  titleH3: string,
  titleH1: string,
  descripcion: string,
  routerLink: string,
  fraseTurista?: string,
  estadoTurista?: string
}

@Component({
  selector: 'app-lugares-turisticos-pages',
  imports: [RouterLink],
  templateUrl: './lugares-turisticos-pages.html',
  styleUrl: './lugares-turisticos-pages.css',
})
export class LugaresTuristicosPages implements OnInit {

  showTraveler = false;

  urlGlobal: string = "assets"
  carouselDirection: 'left' | 'right' | null = null;
  estadoTurista?: 'feliz' | 'sorprendido' | 'relajado';
  isAnimating = false;

  items: lugarTuristico[] = LUGARES_TURISTICOS

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
      (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  selectPlace(index: number): void {
    this.activeIndex = index;
  }

  getVisibleCards() {
    const result = [];

    for (let i = -1; i <= 1; i++) {

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
