export interface HistoriaHuaranchal {
  subtitulo: string;
  titulo: string;
  descripcion: string;
  introduccion: string;
  acontecimientos: AcontecimientoHistoria[];
  datosDestacados: DatoDestacadoHistoria[];
}

export interface AcontecimientoHistoria {
  id: number;
  periodo: string;
  titulo: string;
  descripcion: string;
  destacado?: boolean;
}

export interface DatoDestacadoHistoria {
  id: number;
  etiqueta: string;
  valor: string;
}