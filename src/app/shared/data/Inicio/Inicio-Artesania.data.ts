import { InicioArtesania, InicioHotspotArtesania } from "./Inicio-Artesanias.interface";

export const ambientesArtesania: InicioArtesania[] = [
    {
        id: 'living',
        nombre: 'Sala',
        subtitulo: 'Ambiente cálido',
        imagenFondo: 'assets/INICIO/PRODUCTOS/ARTESANIAS/MOCKUP_ARTESANIA_01.jpg'
    },
    {
        id: 'estudio',
        nombre: 'Galería',
        subtitulo: 'Espacio contemporáneo',
        imagenFondo: 'assets/INICIO/PRODUCTOS/ARTESANIAS/MOCKUP_ARTESANIA_02.jpg'
    },
    {
        id: 'marco',
        nombre: 'Colección',
        subtitulo: 'Presentación de autor',
        imagenFondo: 'assets/INICIO/PRODUCTOS/ARTESANIAS/MOCKUP_ARTESANIA_03.jpg'
    }
];


export const hotspotsArtesania: InicioHotspotArtesania[] = [

    {
        id: 1,
        x: 50,
        y: 10,
        titulo: 'Marco en Madera Tallada',
        categoria: 'Tallado artesanal',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/Marco.png',
        descripcionCorta:
            'Pieza decorativa trabajada manualmente en madera, donde el tallado conserva motivos y símbolos vinculados con la identidad local.',
        descripcion:
            'Elemento decorativo elaborado en madera y trabajado mediante tallado artesanal. Puede representar nombres, símbolos y motivos vinculados con la identidad cultural de Huaranchal.'
    },

    {
        id: 2,
        x: 35,
        y: 42,
        titulo: 'Llanques',
        categoria: 'Vestimenta tradicional',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/Llanques.png',
        descripcionCorta:
            'Calzado tradicional de uso cotidiano y rural, elaborado artesanalmente por su resistencia y practicidad.',
        descripcion:
            'Calzado tradicional elaborado artesanalmente y utilizado para caminar y realizar labores en el campo. Su diseño sencillo y resistente forma parte de las costumbres locales.'
    },

    {
        id: 3,
        x: 35,
        y: 60,
        titulo: 'Rueca y Hilado',
        categoria: 'Trabajo textil',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/RUECA_HILADO.jpg',
        descripcionCorta:
            'Herramientas relacionadas con el hilado manual de fibras, una práctica que permite preparar materiales para la elaboración de tejidos.',
        descripcion:
            'Herramientas utilizadas para transformar la fibra en hilo mediante el hilado manual, una práctica vinculada con la elaboración tradicional de tejidos.'
    },

    {
        id: 4,
        x: 50,
        y: 48,
        titulo: 'Checo',
        categoria: 'Objeto tradicional',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/Checo.png',
        descripcionCorta:
            'Recipiente tradicional elaborado a partir del fruto seco del checo y utilizado en distintas actividades de la vida cotidiana.',
        descripcion:
            'Recipiente elaborado a partir del fruto seco del checo. Tradicionalmente puede utilizarse para guardar, transportar o servir productos.'
    },

    {
        id: 5,
        x: 50,
        y: 88,
        titulo: 'Alforja',
        categoria: 'Vida rural',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/Alforja.png',
        descripcionCorta:
            'Bolsa utilizada para transportar productos y alimentos durante las labores del campo y las jornadas de recolección.',
        descripcion:
            'Bolsa tradicional utilizada para transportar productos y alimentos durante las labores del campo, especialmente durante la recolección y traslado de frutas.'
    },

    {
        id: 6,
        x: 25,
        y: 88,
        titulo: 'Palana',
        categoria: 'Herramienta agrícola',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/Palana.png',
        descripcionCorta:
            'Herramienta agrícola utilizada para remover y trabajar la tierra durante la preparación de los terrenos y la siembra.',
        descripcion:
            'Herramienta utilizada para remover y trabajar la tierra durante distintas labores agrícolas, como la preparación del terreno y la siembra.'
    },

    {
        id: 7,
        x: 56,
        y: 80,
        titulo: 'Lampilla',
        categoria: 'Herramienta agrícola',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/DETALLES/LAMPILLA.jpg',
        descripcionCorta:
            'Herramienta manual empleada para trabajar la tierra con mayor precisión en determinadas labores agrícolas.',
        descripcion:
            'Herramienta manual empleada principalmente para trabajar y remover la tierra en espacios donde se requiere mayor precisión durante las labores agrícolas.'
    },

    {
        id: 8,
        x: 70,
        y: 78,
        titulo: 'Gancho para fruta',
        categoria: 'Cosecha tradicional',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/GanchoFruta.png',
        descripcionCorta:
            'Herramienta utilizada para alcanzar y recolectar frutas ubicadas en las partes altas de los árboles durante la cosecha.',
        descripcion:
            'Herramienta utilizada para alcanzar y recolectar frutas ubicadas en las partes altas de los árboles, facilitando la cosecha sin necesidad de subir al árbol.'
    },

    {
        id: 9,
        x: 68,
        y: 45,
        titulo: 'Sombrero',
        categoria: 'Vestimenta tradicional',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/SOMBRERO.jpg',
        descripcionCorta:
            'Accesorio tradicional utilizado como protección frente al sol y como parte de la vestimenta cotidiana del campo.',
        descripcion:
            'Accesorio utilizado para protegerse del sol durante las labores del campo y las actividades cotidianas. Forma parte de la vestimenta tradicional de Huaranchal.'
    },

    {
        id: 10,
        x: 35,
        y: 73,
        titulo: 'Arado',
        categoria: 'Herramienta agrícola',
        imagen: 'assets/INICIO/PRODUCTOS/ARTESANIAS/ARTICULOS/Arado.png',
        descripcionCorta:
            'Herramienta tradicional utilizada para preparar la tierra, abrir surcos y acondicionar el terreno antes de la siembra.',
        descripcion:
            'Herramienta utilizada tradicionalmente para preparar y remover la tierra antes de la siembra, permitiendo abrir surcos y acondicionar el terreno.'
    }

];

