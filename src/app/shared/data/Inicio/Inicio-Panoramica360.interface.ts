export type DireccionSector =
    | 'arriba-izquierda'
    | 'arriba'
    | 'arriba-derecha'
    | 'izquierda'
    | 'centro'
    | 'derecha'
    | 'abajo-izquierda'
    | 'abajo'
    | 'abajo-derecha';


export interface InicioPanoramica360 {
    imagenFondo: string;
    etiqueta: string;
    titulo: string;
    descripcion: string;
    descripcionViewer: string;
    imagenes: ImagenPanoramica360[];
    mapaDirecciones: Record<DireccionSector, number>;
}


export interface ImagenPanoramica360 {
    id: number;
    imagen: string;
    sector: DireccionSector;
    titulo: string;
    descripcion: string;
}