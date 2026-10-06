import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { WeatherData, WeatherService } from '../../../../shared/services/ApiClima/weather-service';
import { ButtonPdfHuaranchalComponent } from '../../../../shared/components/INICIO/HERO/buttons/button-pdf-huaranchal-component/button-pdf-huaranchal-component';
import { inicioHero } from '../../../../shared/data/Inicio/Inicio-Hero.data';
import { caseriosHuaranchal } from '../../../../shared/data/Inicio/Inicio-Caserios.data';
import { experienciasInicio } from '../../../../shared/data/Inicio/Inicio-QueConoceras.data';

@Component({
  selector: 'app-hero-inicio',
  standalone: true,
  imports: [RouterLink, CommonModule, ButtonPdfHuaranchalComponent],
  templateUrl: './hero-inicio.html',
  styleUrl: './hero-inicio.css',
})
export class HeroInicio implements OnInit {
  private weatherService = inject(WeatherService);

  readonly heroData = inicioHero;

  clima: WeatherData | null = null;
  cargandoClima = true;
  errorClima = false;

  /** Cifras calculadas desde los datos reales del proyecto */
  readonly estadisticas = this.calcularEstadisticas();

  private readonly iconos = {
    sol: [
      'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
      'M12 2v2', 'M12 20v2', 'M2 12h2', 'M20 12h2',
      'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41',
      'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41',
    ],
    nube: ['M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z'],
    lluvia: [
      'M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2',
      'M16 14v6', 'M8 14v6', 'M12 16v6',
    ],
  };

  ngOnInit(): void {
    this.obtenerClima();
  }

  obtenerClima(): void {
    this.weatherService.getClimaHuaranchal().subscribe({
      next: (data) => {
        this.clima = data;
        this.cargandoClima = false;
      },
      error: (err) => {
        console.error('Error al obtener el clima:', err);
        this.errorClima = true;
        this.cargandoClima = false;
      }
    });
  }

  capitalizar(texto: string): string {
    return texto ? texto.charAt(0).toUpperCase() + texto.slice(1) : '';
  }

  /** Icono según el estado del clima */
  get iconoClima(): string[] {
    const estado = this.clima?.weather?.[0]?.main?.toLowerCase() ?? '';

    if (estado.includes('clear')) return this.iconos.sol;
    if (['rain', 'drizzle', 'thunderstorm'].some(e => estado.includes(e))) return this.iconos.lluvia;
    return this.iconos.nube;
  }

  /** OpenWeather (units=metric) entrega m/s. Si tu servicio ya convierte a km/h, quita el * 3.6 */
  get vientoKmh(): number {
    return (this.clima?.wind?.speed ?? 0) * 3.6;
  }

  private calcularEstadisticas() {
    const alturas = caseriosHuaranchal.map(c => c.altitudM);
    const formato = (n: number) => n.toLocaleString('en-US');

    return [
      { valor: String(caseriosHuaranchal.length), etiqueta: 'Caseríos' },
      { valor: `${formato(Math.min(...alturas))}–${formato(Math.max(...alturas))}`, etiqueta: 'Altitud (msnm)' },
      { valor: String(experienciasInicio.length), etiqueta: 'Experiencias' },
    ];
  }
}