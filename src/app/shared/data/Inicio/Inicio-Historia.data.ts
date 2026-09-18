import { HistoriaHuaranchal } from '../../../shared/data/Inicio/Inicio-Historia.interface';

export const InicioHistoriaHuaranchal: HistoriaHuaranchal = {

  subtitulo: 'Historia & Legado',

  titulo: 'El origen de Huaranchal',

  descripcion:
    'Un recorrido por la identidad, memoria y transformación de nuestro pueblo.',

  introduccion:
    'Huaranchal guarda una historia construida a través de generaciones. Su nombre, sus primeras viviendas, su crecimiento como distrito y el desarrollo de su educación forman parte de una memoria que continúa viva en sus habitantes.',

  acontecimientos: [

    {
      id: 1,
      periodo: 'Origen',

      titulo: 'El nombre de Huaranchal',

      descripcion:
        'Huaranchal es un vocablo relacionado con la palabra quechua huara, que significa pantalón corto, y el término español chal, una especie de manto que se lleva sobre los hombros.',

      destacado: false
    },

    {
      id: 2,
      periodo: 'Primeros habitantes',

      titulo: 'Las primeras viviendas',

      descripcion:
        'Los primeros habitantes se establecieron en pequeñas viviendas construidas principalmente con paja y llevaron inicialmente una vida sencilla y rústica. Con el paso del tiempo, las condiciones de vida fueron mejorando y las construcciones comenzaron a incorporar adobe.',

      destacado: false
    },

    {
      id: 3,
      periodo: '17 de diciembre de 1866',

      titulo: 'Huaranchal se convierte en distrito',

      descripcion:
        'El crecimiento de la población y la consolidación del territorio dieron lugar a la creación del distrito de Huaranchal. El 17 de diciembre de 1866 se realizó su registro como distrito y se establecieron sus límites de demarcación.',

      destacado: true
    },

    {
      id: 4,
      periodo: '1911',

      titulo: 'Los primeros pasos de la educación',

      descripcion:
        'En el ámbito educativo, Huaranchal cuenta con una escuela primaria desde el año 1911. A través de sus aulas han pasado generaciones de estudiantes que posteriormente han destacado en diferentes ámbitos profesionales.',

      destacado: false
    },

    {
      id: 5,
      periodo: '1976',

      titulo: 'La educación secundaria',

      descripcion:
        'El crecimiento de la población y la demanda educativa hicieron posible la creación de un colegio secundario en 1976, ampliando las oportunidades educativas para las nuevas generaciones de Huaranchal.',

      destacado: false
    }

  ],

  datosDestacados: [

    {
      id: 1,
      etiqueta: 'Ubicación',
      valor: 'Provincia de Otuzco · La Libertad'
    },

    {
      id: 2,
      etiqueta: 'Distrito',
      valor: 'Creado y registrado en 1866'
    },

    {
      id: 3,
      etiqueta: 'Educación',
      valor: 'Presente desde 1911'
    }

  ]

};