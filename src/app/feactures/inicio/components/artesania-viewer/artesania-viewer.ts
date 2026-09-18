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

    ocultarHotspots: boolean = false;

    ambientes: InicioArtesania[] = ambientesArtesania;

    hotspots: InicioHotspotArtesania[] = hotspotsArtesania;


    get imagenDeFondoActual(): string {

        const ambienteActual = this.ambientes.find(
            ambiente => ambiente.id === this.ambienteSeleccionado
        );

        return ambienteActual?.imagenFondo ?? '';
    }


    get ambienteActual(): InicioArtesania | undefined {

        return this.ambientes.find(
            ambiente => ambiente.id === this.ambienteSeleccionado
        );
    }


    seleccionarAmbiente(id: string): void {

        this.ambienteSeleccionado = id;

        this.hotspotActivo = null;
    }


    toggleHotspot(hotspot: InicioHotspotArtesania): void {

        this.hotspotActivo =
            this.hotspotActivo?.id === hotspot.id
                ? null
                : hotspot;
    }


    toggleVisibilidadHotspots(): void {

        this.ocultarHotspots = !this.ocultarHotspots;

        if (this.ocultarHotspots) {
            this.hotspotActivo = null;
        }
    }
}