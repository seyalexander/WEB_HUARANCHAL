import { Component, HostListener } from '@angular/core';
import { FooterInicioComponents } from "../../components/footer-inicio-components/footer-inicio-components";
import { CTAInicioComponents } from "../../components/cta-inicio-components/cta-inicio-components";
import { ProductosEmblematicosInicioComponents } from "../../components/productos-emblematicos-inicio-components/productos-emblematicos-inicio-components";
import { QueConocerasInicioComponents } from "../../components/que-conoceras-inicio-components/que-conoceras-inicio-components";

@Component({
  selector: 'app-inicio-page',
  imports: [FooterInicioComponents, CTAInicioComponents, ProductosEmblematicosInicioComponents, QueConocerasInicioComponents],
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
}
