import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioArtesania, InicioHotspotArtesania } from '../../../../shared/data/Inicio/Inicio-Artesanias.interface';
import { ambientesArtesania, hotspotsArtesania } from '../../../../shared/data/Inicio/Inicio-Artesania.data';

@Component({
  selector: 'app-artesania-viewer',
  imports: [CommonModule],
  templateUrl: './artesania-viewer.html',
  styleUrl: './artesania-viewer.css',
})
export class ArtesaniaViewer {

  ambienteSeleccionado: string = 'living';

  hotspotActivo: InicioHotspotArtesania | null = null;

  /** Punto que se resalta al pasar el cursor por la lista */
  hotspotResaltado: number | null = null;

  ocultarHotspots: boolean = false;

  ambientes: InicioArtesania[] = ambientesArtesania;

  hotspots: InicioHotspotArtesania[] = hotspotsArtesania;


  get imagenDeFondoActual(): string {
    return this.ambienteActual?.imagenFondo ?? '';
  }

  get ambienteActual(): InicioArtesania | undefined {
    return this.ambientes.find(a => a.id === this.ambienteSeleccionado);
  }

  /** Posición (0-based) del objeto activo, o -1 si no hay ninguno */
  get indiceActivo(): number {
    return this.hotspotActivo
      ? this.hotspots.findIndex(h => h.id === this.hotspotActivo!.id)
      : -1;
  }


  seleccionarAmbiente(id: string): void {
    this.ambienteSeleccionado = id;
    this.hotspotActivo = null;
  }

  toggleHotspot(hotspot: InicioHotspotArtesania): void {
    // Si los detalles estaban ocultos, al elegir un objeto se vuelven a mostrar
    this.ocultarHotspots = false;

    this.hotspotActivo =
      this.hotspotActivo?.id === hotspot.id ? null : hotspot;
  }

  /** Recorre los objetos en orden: delta = 1 (siguiente) o -1 (anterior) */
  navegar(delta: number): void {
    const total = this.hotspots.length;
    const i = this.indiceActivo;

    const siguiente = i === -1
      ? (delta > 0 ? 0 : total - 1)
      : (i + delta + total) % total;

    this.hotspotActivo = this.hotspots[siguiente];
  }

  resaltar(id: number | null): void {
    this.hotspotResaltado = id;
  }

  toggleVisibilidadHotspots(): void {
    this.ocultarHotspots = !this.ocultarHotspots;

    if (this.ocultarHotspots) {
      this.hotspotActivo = null;
    }
  }
}