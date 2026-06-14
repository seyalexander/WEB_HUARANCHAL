import { Component } from '@angular/core';
import { FooterInicioComponents } from "../../components/footer-inicio-components/footer-inicio-components";
import { CTAInicioComponents } from "../../components/cta-inicio-components/cta-inicio-components";
import { ProductosEmblematicosInicioComponents } from "../../components/productos-emblematicos-inicio-components/productos-emblematicos-inicio-components";
import { QueConocerasInicioComponents } from "../../components/que-conoceras-inicio-components/que-conoceras-inicio-components";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-page',
  imports: [FooterInicioComponents, CTAInicioComponents, ProductosEmblematicosInicioComponents, QueConocerasInicioComponents, RouterLink],
  templateUrl: './inicio-page.html',
  styleUrl: './inicio-page.css',
})
export class InicioPage {}
