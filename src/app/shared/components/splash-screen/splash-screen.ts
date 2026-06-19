import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  imports: [NgClass],
  templateUrl: './splash-screen.html',
  styleUrl: './splash-screen.css',
})
export class SplashScreen {
  exiting = false;

  constructor(private router: Router) {}

  ngOnInit() {

    // tiempo en pantalla
    setTimeout(() => {

      // activa animación de salida
      this.exiting = true;

      // espera transición antes de navegar
      setTimeout(() => {
        this.router.navigateByUrl('/Inicio');
      }, 900);

    }, 3000);
  }
}
