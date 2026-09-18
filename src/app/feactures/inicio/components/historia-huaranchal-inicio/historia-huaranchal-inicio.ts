import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HistoriaHuaranchal } from '../../../../shared/data/Inicio/Inicio-Historia.interface';
import { InicioHistoriaHuaranchal } from '../../../../shared/data/Inicio/Inicio-Historia.data';

@Component({
  selector: 'app-historia-huaranchal-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './historia-huaranchal-inicio.html',
  styleUrl: './historia-huaranchal-inicio.css',
})
export class HistoriaHuaranchalInicio {
  historia: HistoriaHuaranchal = InicioHistoriaHuaranchal;
}
