import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private audio: HTMLAudioElement;

  private reproduciendoSubject =
    new BehaviorSubject<boolean>(false);

  reproduciendo$ =
    this.reproduciendoSubject.asObservable();


  constructor() {

    this.audio = new Audio(
      'assets/audio/Huaranchal.mp3'
    );

    // La música se repite continuamente
    this.audio.loop = true;

    // Volumen inicial
    this.audio.volume = 0.5;

    // Cuando la música termina
    this.audio.addEventListener('play', () => {
      this.reproduciendoSubject.next(true);
    });

    this.audio.addEventListener('pause', () => {
      this.reproduciendoSubject.next(false);
    });

    this.audio.addEventListener('ended', () => {
      this.reproduciendoSubject.next(false);
    });
  }


  reproducir(): void {

    this.audio
      .play()
      .then(() => {

        this.reproduciendoSubject.next(true);

      })
      .catch(error => {

        console.error(
          'No se pudo reproducir la música:',
          error
        );

      });
  }


  pausar(): void {

    this.audio.pause();

    this.reproduciendoSubject.next(false);
  }


  alternar(): void {

    if (this.audio.paused) {

      this.reproducir();

    } else {

      this.pausar();

    }
  }


  cambiarVolumen(valor: number): void {

    this.audio.volume = Math.max(
      0,
      Math.min(1, valor)
    );

  }


  obtenerVolumen(): number {

    return this.audio.volume;

  }


  estaReproduciendo(): boolean {

    return !this.audio.paused;

  }
}
