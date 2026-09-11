import { Component, EventEmitter, Input, input, Output } from '@angular/core';

import { RouterLink } from "@angular/router";
import { lugarTuristico } from '../../../../shared/data/lugaresTuristicos/LugarTuristico.interface';

@Component({
  selector: 'app-tarjeta-lugar-turistico',
  imports: [RouterLink],
  templateUrl: './tarjeta-lugar-turistico.html',
  styleUrl: './tarjeta-lugar-turistico.css',
})
export class TarjetaLugarTuristico {
  @Input() items: lugarTuristico[] = [];

  @Output() hover = new EventEmitter<void>();
  @Output() leave = new EventEmitter<void>();

  showTraveler = false;

  onHoverCard() {
    this.showTraveler = true;
  }

  onLeaveCard() {
    this.showTraveler = false;
  }
}
