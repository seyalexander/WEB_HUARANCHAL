// HERO
export interface heroLugarTuristico {
    imagen: string,
    titulo_1: string,
    titulo_2: string,
    descripcion: string
}

// GALERIA
export interface galeriaLugarTuristico {
    foto: string,
    titulo: string,
    categoria: string,
    favorita: boolean,
    ubicacion?: string
}

// HISTORIA
export interface parrafoHistoriaLugarTuristico {
    p: string
}

export interface historiaLugarTuristico {
    imagen: string,
    lugar: string,
    descripcion: string,
    titulo: string,
    historia: parrafoHistoriaLugarTuristico[],
    significado: string,
    ubicacion: string
}


// SOUVENIRS
export interface souvenirLugarTuristico {
    imagen: string,
    titulo: string,
    descripcion: string,
    lugar: string,
    turistico: string,
    tipo: string
}


// ITEM LUGAR TURÍSTICO
export interface itemLugarTuristico {
    hero: heroLugarTuristico,
    galeria: galeriaLugarTuristico[],
    historia: historiaLugarTuristico,
    souvenirs: souvenirLugarTuristico[]
}

// CABECERA LUGAR TURÍSTICO
export interface lugarTuristico {
  id: number,  
  imagen: string,
  titleH3: string,
  titleH1: string,
  descripcion: string,
  routerLink: string,
  fraseTurista?: string, 
  estadoTurista?:string,
  lugar: itemLugarTuristico
}


