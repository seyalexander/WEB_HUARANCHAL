import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HistoriaHuaranchal } from '../../../../shared/data/Inicio/Inicio-Historia.interface';
import { InicioHistoriaHuaranchal } from '../../../../shared/data/Inicio/Inicio-Historia.data';

@Component({
  selector: 'app-historia-huaranchal-inicio',
  imports: [CommonModule, RouterLink, AnimateOnScrollModule],
  templateUrl: './historia-huaranchal-inicio.html',
  styleUrl: './historia-huaranchal-inicio.css',
})
export class HistoriaHuaranchalInicio {
  historia: HistoriaHuaranchal = InicioHistoriaHuaranchal;

  /** Hito principal (el marcado como destacado en los datos) */
  get hitoPrincipal() {
    return this.historia.acontecimientos.find(a => a.destacado);
  }

  /** Extrae el año de textos como '17 de diciembre de 1866' o '1911' */
  anio(periodo: string): string {
    return periodo.match(/\d{4}/)?.[0] ?? '';
  }
}