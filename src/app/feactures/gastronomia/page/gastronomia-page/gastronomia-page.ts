import { Component } from '@angular/core';

interface PlatoGastronomico {
  id: number;
  nombre: string;
  slug: string;
  categoria: string;

  imagen: string;
  modelo: string;

  descripcionCorta: string;
  descripcion: string;

  ingredientes: string[];

  ocasion: string;
  frase: string;
}

@Component({
  selector: 'app-gastronomia-page',
  standalone: true,
  imports: [],
  templateUrl: './gastronomia-page.html',
  styleUrl: './gastronomia-page.css',
})
export class GastronomiaPage {

  categorias: string[] = [
    'Todo',
    'Sopas',
    'Guisos',
    'Tradicionales',
    'Bebidas',
    'Postres'
  ];

  categoriaSeleccionada = 'Todo';

  comidas: PlatoGastronomico[] = [

    {
      id: 1,
      nombre: 'Shambar',
      slug: 'shambar',
      categoria: 'Sopas',

      imagen: 'assets/GASTRONOMIA/shambar_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_shambar_01.png',

      descripcionCorta:
        'Una sopa tradicional preparada con trigo y menestras.',

      descripcion:
        'Plato tradicional de gran presencia en la cocina norteña, preparado con trigo, menestras, carnes y hierbas aromáticas.',

      ingredientes: [
        'Trigo',
        'Menestras',
        'Carne de cerdo',
        'Hierbas aromáticas'
      ],

      ocasion:
        'Domingos y reuniones familiares',

      frase:
        'Un sabor que reúne a la familia alrededor de la mesa.'
    },

    {
      id: 2,
      nombre: 'Cuy Frito',
      slug: 'cuy-frito',
      categoria: 'Tradicionales',

      imagen: 'assets/GASTRONOMIA/cuy_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_cuy_01.png',

      descripcionCorta:
        'Cuy crocante acompañado de papas y productos de la tierra.',

      descripcion:
        'Preparación tradicional en la que el cuy es sazonado y frito hasta obtener una textura crocante, acompañado de papas y otros complementos.',

      ingredientes: [
        'Cuy',
        'Papas',
        'Hierbas',
        'Especias'
      ],

      ocasion:
        'Fiestas y celebraciones',

      frase:
        'Un plato de celebración con raíces andinas.'
    },

    {
      id: 3,
      nombre: 'Cabrito',
      slug: 'cabrito',
      categoria: 'Guisos',

      imagen: 'assets/GASTRONOMIA/cabrito_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_cabrito_01.png',

      descripcionCorta:
        'Cabrito cocinado lentamente con especias y tradición.',

      descripcion:
        'Preparación tradicional de la cocina norteña en la que la carne de cabrito se cocina lentamente junto con hierbas y especias.',

      ingredientes: [
        'Carne de cabrito',
        'Hierbas',
        'Especias',
        'Acompañamientos locales'
      ],

      ocasion:
        'Reuniones familiares',

      frase:
        'Cocina lenta, sabores intensos y tradición.'
    },

    {
      id: 4,
      nombre: 'Humitas',
      slug: 'humitas',
      categoria: 'Tradicionales',

      imagen: 'assets/GASTRONOMIA/humitas_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_humitas_01.png',

      descripcionCorta:
        'Masa de maíz preparada y cocida dentro de sus propias pancas.',

      descripcion:
        'Preparación elaborada a base de maíz, envuelta cuidadosamente en pancas y cocida hasta obtener su característica textura.',

      ingredientes: [
        'Maíz',
        'Pancas de maíz',
        'Queso',
        'Hierbas'
      ],

      ocasion:
        'Desayunos y reuniones familiares',

      frase:
        'El maíz convertido en memoria y tradición.'
    },

    // =========================================================
    // AGREGA AQUÍ NUEVOS PLATOS
    // =========================================================

    /*
    {
      id: 5,
      nombre: 'Nombre del plato',
      slug: 'nombre-del-plato',
      categoria: 'Guisos',

      imagen: 'assets/GASTRONOMIA/plato_01.png',
      modelo: 'assets/GASTRONOMIA/Gastronomia_modelo_plato_01.png',

      descripcionCorta:
        'Descripción corta del plato.',

      descripcion:
        'Descripción completa del plato y su importancia dentro de la gastronomía local.',

      ingredientes: [
        'Ingrediente 1',
        'Ingrediente 2',
        'Ingrediente 3'
      ],

      ocasion:
        'Ocasión o momento en que suele prepararse.',

      frase:
        'Una frase que represente la tradición del plato.'
    },
    */

  ];

  comidasFiltradas: PlatoGastronomico[] = this.comidas;

  platoSeleccionado: PlatoGastronomico = this.comidas[0];

  showModelo = false;

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;

    if (categoria === 'Todo') {
      this.comidasFiltradas = this.comidas;
    } else {
      this.comidasFiltradas = this.comidas.filter(
        plato => plato.categoria === categoria
      );
    }

    if (!this.comidasFiltradas.includes(this.platoSeleccionado)) {
      this.platoSeleccionado = this.comidasFiltradas[0] ?? this.comidas[0];
    }

    this.showModelo = false;
  }

  seleccionarPlato(plato: PlatoGastronomico): void {
    this.platoSeleccionado = plato;
    this.showModelo = true;
  }

  onLeaveCard(): void {
    this.showModelo = false;
  }

  esCategoriaSeleccionada(categoria: string): boolean {
    return this.categoriaSeleccionada === categoria;
  }
}

