import { InicioPanoramica360 } from "./Inicio-Panoramica360.interface";

export const InicioPanoramica360Huaranchal: InicioPanoramica360 = {

    imagenFondo:
        'assets/INICIO/fondoPanoramica360.jpg',

    etiqueta:
        'Vista Aérea Interactiva',

    titulo:
        'Explora Huaranchal en 360°',

    descripcion:
        'Descubre la geografía de Huaranchal desde diferentes ángulos y recorre visualmente los paisajes que forman parte de nuestro territorio.',

    descripcionViewer:
        'Toca cualquier sector de la imagen o utiliza la brújula para recorrer las diferentes vistas panorámicas.',


    imagenes: [

        {
            id: 1,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto1.jpg',
            sector:
                'arriba-izquierda',
            titulo:
                'Vista superior izquierda',
            descripcion:
                'Perspectiva panorámica del paisaje de Huaranchal desde el sector superior izquierdo.'
        },

        {
            id: 2,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto2.jpg',
            sector:
                'abajo',
            titulo:
                'Vista inferior',
            descripcion:
                'Vista del paisaje correspondiente al sector inferior de la panorámica.'
        },

        {
            id: 3,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto3.jpg',
            sector:
                'abajo-izquierda',
            titulo:
                'Vista inferior izquierda',
            descripcion:
                'Perspectiva del territorio ubicada hacia el sector inferior izquierdo.'
        },

        {
            id: 4,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto4.jpg',
            sector:
                'izquierda',
            titulo:
                'Vista izquierda',
            descripcion:
                'Paisaje observado desde el sector izquierdo de la panorámica.'
        },

        {
            id: 5,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto5.jpg',
            sector:
                'centro',
            titulo:
                'Vista central',
            descripcion:
                'Vista principal utilizada como referencia para recorrer la panorámica de Huaranchal.'
        },

        {
            id: 6,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto6.jpg',
            sector:
                'derecha',
            titulo:
                'Vista derecha',
            descripcion:
                'Perspectiva del paisaje correspondiente al sector derecho.'
        },

        {
            id: 7,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto7.jpg',
            sector:
                'arriba-derecha',
            titulo:
                'Vista superior derecha',
            descripcion:
                'Perspectiva panorámica ubicada hacia el sector superior derecho.'
        },

        {
            id: 8,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto8.jpg',
            sector:
                'abajo-derecha',
            titulo:
                'Vista inferior derecha',
            descripcion:
                'Perspectiva del paisaje correspondiente al sector inferior derecho.'
        },

        {
            id: 9,
            imagen:
                'assets/INICIO/PANORAMICA_360/foto1.jpg',
            sector:
                'arriba',
            titulo:
                'Vista superior',
            descripcion:
                'Perspectiva del paisaje ubicada hacia el sector superior de la panorámica.'
        }

    ],


    mapaDirecciones: {

        'arriba-izquierda': 0,

        'arriba': 8,

        'arriba-derecha': 6,

        'izquierda': 3,

        'centro': 4,

        'derecha': 5,

        'abajo-izquierda': 2,

        'abajo': 1,

        'abajo-derecha': 7

    }

};