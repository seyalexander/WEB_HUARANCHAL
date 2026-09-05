import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { WeatherData, WeatherService } from '../../../../shared/services/ApiClima/weather-service';



@Component({
  selector: 'app-hero-inicio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero-inicio.html',
  styleUrl: './hero-inicio.css',
})
export class HeroInicio implements OnInit {
  private weatherService = inject(WeatherService);

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

  // Helper para formatear la descripción con la primera letra mayúscula
  capitalizar(texto: string): string {
    return texto ? texto.charAt(0).toUpperCase() + texto.slice(1) : '';
  }
}