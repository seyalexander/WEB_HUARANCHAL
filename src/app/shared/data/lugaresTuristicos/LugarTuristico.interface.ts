export interface lugarTuristico {
  id: number,  
  imagen: string,
  titleH3: string,
  titleH1: string,
  descripcion: string,
  routerLink: string,
  fraseTurista?: string, 
  estadoTurista?:string
}