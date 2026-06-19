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
  audio = new Audio('assets/audio/audio_intro.mp3');

  constructor(private router: Router) {}

  ngOnInit() {

    this.audio.volume = 0;
    this.audio.play().catch(() => {});

    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 0.4) {
        vol += 0.05;
        this.audio.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 150);

    setTimeout(() => {

      let outVol = this.audio.volume;
      const fadeOut = setInterval(() => {
        if (outVol > 0.05) {
          outVol -= 0.05;
          this.audio.volume = outVol;
        } else {
          clearInterval(fadeOut);
          this.audio.pause();
        }
      }, 80);

      this.exiting = true;

      setTimeout(() => {
        this.router.navigateByUrl('/Inicio');
      }, 900);

    }, 4000);
  }
}
