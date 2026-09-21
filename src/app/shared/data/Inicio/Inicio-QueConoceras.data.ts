import { InicioQueConoceras } from "./Inicio-QueConoceras.interface";

export const experienciasInicio: InicioQueConoceras[] = [
    {
        id: 1,
        numero: '01',
        nombre: 'Naturaleza',
        etiqueta: 'Paisajes vivos',
        descripcion: 'Montañas, caminos y paisajes verdes que muestran la riqueza natural del territorio.',
        imagen: 'assets/NATURALEZA-IMG.jpeg',
        routerLink: '/Lugares',
        color: '#4F8A3F',
        animacion: 'slide-in-from-l-20',
        posicion: 'izquierda',
        svg: 'naturaleza'
    },
    {
        id: 2,
        numero: '02',
        nombre: 'Cataratas',
        etiqueta: 'Agua y aventura',
        descripcion: 'Cascadas escondidas entre la vegetación, donde el agua se convierte en parte del paisaje.',
        imagen: 'assets/CATARATA-IMG.jpeg',
        routerLink: '/Lugares',
        color: '#2F5D34',
        animacion: 'slide-in-from-t-20',
        posicion: 'centro',
        svg: 'cataratas'
    },
    {
        id: 3,
        numero: '03',
        nombre: 'Aguas termales',
        etiqueta: 'Descanso natural',
        descripcion: 'Espacios donde el paisaje y las aguas naturales invitan a detenerse y disfrutar.',
        imagen: 'assets/TERMALES-IMG.jpeg',
        routerLink: '/Lugares',
        color: '#F28C28',
        animacion: 'slide-in-from-b-20',
        posicion: 'centro',
        svg: 'termales'
    },
    {
        id: 4,
        numero: '04',
        nombre: 'Gastronomía',
        etiqueta: 'Sabores de nuestra tierra',
        descripcion: 'Productos y sabores nacidos de los cultivos que forman parte de la identidad local.',
        imagen: 'assets/PLATOS-IMG.jpg',
        routerLink: '/Agricultura',
        color: '#A4C639',
        animacion: 'slide-in-from-r-20',
        posicion: 'derecha',
        svg: 'gastronomia'
    }
];