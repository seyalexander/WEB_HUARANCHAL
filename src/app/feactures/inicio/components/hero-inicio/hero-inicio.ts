import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { WeatherData, WeatherService } from '../../../../shared/services/ApiClima/weather-service';
import { ButtonPdfHuaranchalComponent } from '../../../../shared/components/INICIO/HERO/buttons/button-pdf-huaranchal-component/button-pdf-huaranchal-component';
import { inicioHero } from '../../../../shared/data/Inicio/Inicio-Hero.data';



@Component({
  selector: 'app-hero-inicio',
  standalone: true,
  imports: [RouterLink, CommonModule, ButtonPdfHuaranchalComponent],
  templateUrl: './hero-inicio.html',
  styleUrl: './hero-inicio.css',
})
export class HeroInicio implements OnInit {
  private weatherService = inject(WeatherService);

  // Expón el objeto a la plantilla HTML
  readonly heroData = inicioHero;

  clima: WeatherData | null = null;
  cargandoClima: boolean = true;
  errorClima: boolean = false;

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
}