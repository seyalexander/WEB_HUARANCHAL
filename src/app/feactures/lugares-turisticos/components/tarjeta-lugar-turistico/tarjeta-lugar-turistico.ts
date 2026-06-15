import { Component, Input, input } from '@angular/core';
import { lugarTuristico } from '../../page/lugares-turisticos-pages/lugares-turisticos-pages';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-tarjeta-lugar-turistico',
  imports: [RouterLink],
  templateUrl: './tarjeta-lugar-turistico.html',
  styleUrl: './tarjeta-lugar-turistico.css',
})
export class TarjetaLugarTuristico {
  @Input() items: lugarTuristico[] = [];
}
