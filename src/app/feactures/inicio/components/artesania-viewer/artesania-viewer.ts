import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ambiente {
  id: string;
  nombre: string;
  imagenFondo: string;
  estiloText: string;
}

interface Hotspot {
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
  titulo: string;
  descripcion: string;
}
interface Ambiente {
  id: string;
  nombre: string;
  imagenFondo: string;
  estiloText: string;
}

interface Hotspot {
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-artesania-viewer',
  imports: [CommonModule],
  templateUrl: './artesania-viewer.html',
  styleUrl: './artesania-viewer.css',
})
export class ArtesaniaViewer {
  // Estado general
  ambienteSeleccionado: string = 'living';
  hotspotActivo: Hotspot | null = null;
  vistaDetalle: boolean = false;

  // Ambientes de prueba para decoración de interiores
  ambientes: Ambiente[] = [
    {
      id: 'living',
      nombre: 'Sala Minimalista',
      imagenFondo: 'assets/INICIO/PRODUCTOS/ARTESANIAS/MOCKUP_ARTESANIA_01.jpg',
      estiloText: 'Luz cálida y textura de pared clara'
    },
    {
      id: 'estudio',
      nombre: 'Oficina / Galería',
      imagenFondo: 'assets/INICIO/PRODUCTOS/ARTESANIAS/MOCKUP_ARTESANIA_02.jpg',
      estiloText: 'Ambiente sobrio de madera y piedra'
    },
    {
      id: 'marco',
      nombre: 'Enmarcado de Lujo',
      imagenFondo: 'assets/INICIO/PRODUCTOS/ARTESANIAS/MOCKUP_ARTESANIA_03.jpg',
      estiloText: 'Cuadro flotante con vidrio de protección'
    }
  ];

  // Puntos clave de la artesanía
  hotspots: Hotspot[] = [
    {
      x: 50,
      y: 10,
      titulo: 'Marco en Madera Tallada',
      descripcion: 'Elemento decorativo elaborado en madera y trabajado con tallado artesanal. Se utiliza para representar y conservar motivos, nombres o símbolos relacionados con la identidad y tradición de Huaranchal.'
    },

    {
      x: 35,
      y: 42,
      titulo: 'Llanques',
      descripcion: 'Calzado tradicional elaborado artesanalmente, utilizado para caminar y trabajar en el campo. Su diseño sencillo y resistente forma parte de las costumbres y la vestimenta tradicional de Huaranchal.'
    },

    {
      x: 35,
      y: 60,
      titulo: 'Rueca y Hilado Artesanal',
      descripcion: 'Herramientas utilizadas para transformar la fibra en hilo mediante el hilado manual. Esta práctica artesanal permite preparar materiales que posteriormente pueden emplearse en tejidos y otras labores tradicionales.'
    },

    {
      x: 50,
      y: 48,
      titulo: 'Checo',
      descripcion: 'Recipiente tradicional elaborado a partir del fruto seco del checo. Se utiliza como utensilio para transportar, guardar o servir productos y forma parte de los objetos empleados tradicionalmente en las labores cotidianas.'
    },

    {
      x: 50,
      y: 88,
      titulo: 'Alforja',
      descripcion: 'Bolsa tradicional utilizada para transportar productos y alimentos durante las labores del campo. Se coloca sobre el cuerpo o sobre animales de carga y resulta especialmente útil para recolectar y trasladar frutas de la zona.'
    },

    {
      x: 25,
      y: 88,
      titulo: 'Palana',
      descripcion: 'Herramienta agrícola utilizada para remover y trabajar la tierra durante las labores del campo. Su uso está relacionado con la preparación del terreno, la siembra y otras actividades agrícolas de Huaranchal.'
    },

    {
      x: 54,
      y: 78,
      titulo: 'Lampilla',
      descripcion: 'Herramienta manual utilizada principalmente en las labores agrícolas para trabajar y remover la tierra. Su tamaño permite realizar trabajos más precisos en cultivos y terrenos donde se requiere mayor cuidado.'
    },

    {
      x: 70,
      y: 78,
      titulo: 'Gancho para fruta',
      descripcion: 'Herramienta utilizada para alcanzar y recolectar frutas que se encuentran en las partes altas de los árboles. Su uso facilita la cosecha sin necesidad de subir al árbol y forma parte de las prácticas tradicionales de recolección.'
    },

    {
      x: 68,
      y: 45,
      titulo: 'Sombrero',
      descripcion: 'Accesorio tradicional utilizado para protegerse del sol durante las labores del campo y las actividades cotidianas. El sombrero forma parte de la vestimenta característica de Huaranchal y representa una expresión de su identidad cultural.'
    },

    {
      x: 35,
      y: 70,
      titulo: 'Arado',
      descripcion: 'Herramienta utilizada para preparar y remover la tierra antes de la siembra. Tradicionalmente se emplea en las labores agrícolas para abrir surcos y acondicionar el terreno para los cultivos.'
    }
  ];

  // Getter para obtener la imagen de fondo actual
  get imagenDeFondoActual(): string {
    const ambienteActual = this.ambientes.find(env => env.id === this.ambienteSeleccionado);
    return ambienteActual ? ambienteActual.imagenFondo : '';
  }

  seleccionarAmbiente(id: string) {
    this.ambienteSeleccionado = id;
  }

  toggleHotspot(hotspot: Hotspot) {
    this.hotspotActivo = this.hotspotActivo === hotspot ? null : hotspot;
  }
}
