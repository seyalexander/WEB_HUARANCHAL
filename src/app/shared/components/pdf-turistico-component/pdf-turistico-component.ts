import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface DatosLugarPdf {
  hero: { imagen: string; titulo_1: string; titulo_2: string; descripcion: string };
  historia: { lugar: string; descripcion: string; titulo: string; historia: { p: string }[]; significado: string; ubicacion: string };
  souvenirs: { imagen: string; titulo: string; descripcion: string; tipo: string }[];
  galeria?: { foto: string }[];
}

@Component({
  selector: 'app-pdf-turistico-component',
  imports: [CommonModule],
  templateUrl: './pdf-turistico-component.html',
  styleUrl: './pdf-turistico-component.css',
})
export class PdfTuristicoComponent {

  @Input({ required: true }) data!: DatosLugarPdf;

}
