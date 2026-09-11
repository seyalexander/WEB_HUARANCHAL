import { lugarTuristico } from "./LugarTuristico.interface";

export const LUGARES_TURISTICOS: lugarTuristico[] = [
  {
    id: 1,
    imagen: `assets/LUGARES/PAKCHA/catarata_pakcha-paul.jpeg`,
    titleH3: "Catarata",
    titleH1: "Pakcha",
    descripcion: "Una impresionante caída de agua rodeada de vegetación y senderos naturales.",
    routerLink: "/CatarataPakcha",
    fraseTurista: "¡Wow! Este lugar sí que me deja sin palabras...",
    estadoTurista: 'sorprendido'
  },
  {
    id: 2,
    imagen: `assets/LUGARES/BANIOS_TERMALES/TERMALES_01.jpeg`,
    titleH3: "Baños",
    titleH1: "Termales",
    descripcion: "Espacios ideales para relajarse y disfrutar de aguas naturales.",
    routerLink: "/BaniosTermales",
    fraseTurista: "Esto sí es vida... relax total 😌",
    estadoTurista: 'relajado'
  },
  {
    id: 3,
    imagen: `assets/LUGARES/CHILLIN/Chillin.jpeg`,
    titleH3: "Mirador",
    titleH1: "Chillin",
    descripcion: "Espacios ideales para relajarse y disfrutar de aguas naturales.",
    routerLink: "/Chillin",
    fraseTurista: "Desde aquí todo el valle se ve increíble...",
    estadoTurista: 'feliz'
  }
]