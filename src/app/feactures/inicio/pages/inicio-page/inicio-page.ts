import { Component, HostListener } from '@angular/core';
import { FooterInicioComponents } from "../../components/footer-inicio-components/footer-inicio-components";
import { CTAInicioComponents } from "../../components/cta-inicio-components/cta-inicio-components";
import { ProductosEmblematicosInicioComponents } from "../../components/productos-emblematicos-inicio-components/productos-emblematicos-inicio-components";
import { QueConocerasInicioComponents } from "../../components/que-conoceras-inicio-components/que-conoceras-inicio-components";
import { RouterLink } from "@angular/router";
import { PanoramicaComponents } from "../../components/panoramica-components/panoramica-components";

@Component({
  selector: 'app-inicio-page',
  imports: [FooterInicioComponents, CTAInicioComponents, ProductosEmblematicosInicioComponents, QueConocerasInicioComponents, RouterLink, PanoramicaComponents],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
})
export class InicioPage {
  showScrollTop = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToAnimes() {
    const section = document.getElementById('animes');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  crollToDescripcion() {
    const section = document.getElementById('descripcionAnime');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  // ANIMACION CUNADO PASEN EL MOUSE POR ENCIMA DEL HERO

  cursorX = 0;
  cursorY = 0;
  mouseX = 0;
  mouseY = 0;

  mostrarBrillo = false;

  onMouseMove(event: MouseEvent): void {

    // Cursor real
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;

    const hero = event.currentTarget as HTMLElement;
    const rect = hero.getBoundingClientRect();

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
}
