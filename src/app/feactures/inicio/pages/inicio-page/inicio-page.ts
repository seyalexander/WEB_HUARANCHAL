import { Component, HostListener, OnDestroy } from '@angular/core';
import { FooterInicioComponents } from "../../components/footer-inicio-components/footer-inicio-components";
import { CTAInicioComponents } from "../../components/cta-inicio-components/cta-inicio-components";
import { ProductosEmblematicosInicioComponents } from "../../components/productos-emblematicos-inicio-components/productos-emblematicos-inicio-components";
import { QueConocerasInicioComponents } from "../../components/que-conoceras-inicio-components/que-conoceras-inicio-components";
import { RouterLink } from "@angular/router";
import { PanoramicaComponents } from "../../components/panoramica-components/panoramica-components";
import { HeroInicio } from "../../components/hero-inicio/hero-inicio";
import { Subscription } from 'rxjs';
import { MusicaService } from '../../../../shared/services/musica-service';

@Component({
  selector: 'app-inicio-page',
  imports: [
    FooterInicioComponents,
    CTAInicioComponents,
    ProductosEmblematicosInicioComponents,
    QueConocerasInicioComponents,
    RouterLink,
    PanoramicaComponents,
    HeroInicio
  ],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
})
export class InicioPage implements OnDestroy {

  // ======================================================
  // SCROLL TOP
  // ======================================================

  showScrollTop = false;

  @HostListener('window:scroll', [])
  onScroll() {

    this.showScrollTop =
      window.scrollY > 300;

  }


  scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }


  scrollToAnimes() {

    const section =
      document.getElementById('animes');

    section?.scrollIntoView({
      behavior: 'smooth'
    });

  }


  crollToDescripcion() {

    const section =
      document.getElementById('descripcionAnime');

    section?.scrollIntoView({
      behavior: 'smooth'
    });

  }


  // ======================================================
  // ANIMACIÓN CUANDO PASEN EL MOUSE POR ENCIMA DEL HERO
  // ======================================================

  cursorX = 0;
  cursorY = 0;

  mouseX = 0;
  mouseY = 0;

  mostrarBrillo = false;


  onMouseMove(event: MouseEvent): void {

    // Cursor real
    this.cursorX =
      event.clientX;

    this.cursorY =
      event.clientY;


    // Parallax
    this.mouseX =
      (event.clientX / window.innerWidth - 0.5) * 15;

    this.mouseY =
      (event.clientY / window.innerHeight - 0.5) * 15;

    this.mostrarBrillo = true;

  }


  onMouseLeave(): void {

    this.mostrarBrillo = false;

  }



// ======================================================
// MÚSICA
// ======================================================

mostrarReproductor = false;
musicaReproduciendo = false;

private musicaSubscription?: Subscription;

constructor(
  private musicaService: MusicaService
) {

  this.musicaSubscription =
    this.musicaService.reproduciendo$
      .subscribe(reproduciendo => {

        this.musicaReproduciendo =
          reproduciendo;

      });
}

abrirReproductor(): void {
  this.mostrarReproductor = true;
}

cerrarReproductor(): void {
  this.mostrarReproductor = false;
}

alternarMusica(): void {
  this.musicaService.alternar();
}

ngOnDestroy(): void {
  this.musicaSubscription?.unsubscribe();
}

}