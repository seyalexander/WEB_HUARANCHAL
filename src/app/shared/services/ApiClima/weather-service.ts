import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
    main: string;
  }>;
  wind: {
    speed: number;
  };
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private http = inject(HttpClient);
  private apiKey = "90ff75445da784413f06d4fca9504c83"; //environment.openWeatherApiKey;
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  // Coordenadas aproximadas de Huaranchal, La Libertad, Perú (-7.6833, -78.45)
  getClimaHuaranchal(lat: number = -7.6833, lon: number = -78.45): Observable<WeatherData> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=es`;
    return this.http.get<WeatherData>(url);
  }
}
