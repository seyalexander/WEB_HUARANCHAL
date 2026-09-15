import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-historia-huaranchal-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './historia-huaranchal-inicio.html',
  styleUrl: './historia-huaranchal-inicio.css',
})
export class HistoriaHuaranchalInicio {
  // Resumen histórico unificado
  resumenHistoria = {
    subtitulo: 'Historia & Legado',
    titulo: 'El Origen de Huaranchal',
    parrafo1: 'Huaranchal, vocablo que mezcla la palabra quechua huara (pantalón corto) y el español chal, especie de manto que se lleva encima de los hombros.',
    parrafo2: `Huaranchal empezó a poblarse con pequeñas viviendas de paja, viviendo sus primeros habitantes de forma muy rústica.
    Más adelante se fueron mejorando las condiciones de vida y modificando las construcciones a habitaciones construidas de adobe, pero los recursos económicos no eran suficientes; 
    con el pasar de los años la población fue creciendo más, dando lugar a que Huaranchal fuera elevado a la categoría de Distrito y transferido jurisdiccionalmente a la provincia
    de Otuzco. Se hizo el registro como distrito el 17 de diciembre de 1866, al mismo tiempo se establecieron sus límites de demarcación, por el Norte con la ex Hacienda Chuquizongo, 
    por el Oeste con el Distrito de Lucma, por el Sur con la Playa (Rio Alto Chicama) y río Canastero que delimita en el sector Lajón en el Huayo`,
    parrafo3: `Huaranchal es un distrito centenario, y en el plano educativo cuenta con una escuela primaria desde el año 1911. por donde han pasado estudiantes que ahora son destacados profecionalmente. 
    La demanda educativa hizo posible la creacion de un colegio secundario en el año 1976`
  };

  // Datos destacados rápidos
  datosDestacados = [
    { etiqueta: 'Ubicación', valor: 'Provincia de Otuzco, La Libertad' },
    { etiqueta: 'Identidad', valor: 'Tradición Agrícola y Arte Textil' },
    { etiqueta: 'Patrimonio', valor: 'Aguas Termales y Costumbres Vivas' }
  ];
}
