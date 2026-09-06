import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lugar-turistico-historia',
  imports: [],
  templateUrl: './lugar-turistico-historia.html',
  styleUrl: './lugar-turistico-historia.css',
})
export class LugarTuristicoHistoria {
  @Input() historia: any;
  @Output() descargarPdf = new EventEmitter<void>();
}
