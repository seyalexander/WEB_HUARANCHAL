import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

 interface FotoGaleria {
  foto: string;
  titulo?: string;
  categoria?: string;
  favorita?: boolean;
  ubicacion?: string;
}

@Component({
  selector: 'app-lugar-turistico-galeria',
  imports: [GalleriaModule, CommonModule, ReactiveFormsModule],
  templateUrl: './lugar-turistico-galeria.html',
  styleUrl: './lugar-turistico-galeria.css',
})
export class LugarTuristicoGaleria {
  @Input() hero: any;
  @Output() filtrarOutput = new EventEmitter<string>();

  filtrar(categoria: string): void {
    this.filtrarOutput.emit(categoria);
  }

  @Input() categoriaSeleccionada: string = '';
  @Input() galeria: FotoGaleria[] = []
  @Input() mostrarTodas: boolean = false;
  @Input() galeriaFiltrada: FotoGaleria[] = [];

  @Output() abrirImagenOutput = new EventEmitter<number>();
  abrirImagen(index: number): void {
    this.abrirImagenOutput.emit(index);
  }

  @Output() mostrarGaleriaCompletaOutput = new EventEmitter();
  mostrarGaleriaCompleta(): void {
    this.mostrarGaleriaCompletaOutput.emit();
  }

  @Output() ocultarGaleriaOutput = new EventEmitter();
  ocultarGaleria(): void {
    this.ocultarGaleriaOutput.emit();
  }

  @Input() fotosFavoritas: FotoGaleria[] = [];

  
}
