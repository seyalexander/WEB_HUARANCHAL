export interface Caserio {
    id: number;
    nombre: string;
    altitud: string;          // texto para mostrar: '2,140 msnm'
    altitudM: number;         // número para el gráfico: 2140
    destacado: string;
    distanciaCentro: string;  // texto para mostrar: '12 km'
    km: number;               // número para el gráfico: 12
}