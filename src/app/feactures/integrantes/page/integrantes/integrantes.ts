import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface TeamMember {
  id: number;
  name: string;
  apellido: string;
  role: string;
  description: string;
  image: string;
  imageHover: string;
}

@Component({
  selector: 'app-integrantes',
  imports: [CommonModule],
  templateUrl: './integrantes.html',
  styleUrl: './integrantes.css',
})
export class Integrantes {

  members: TeamMember[] = [
    {
      id: 1,
      name: 'Steven Adriano',
      apellido: 'Seclen Yupanqui',
      role: 'Estudiante',
      description: '4° Grado - Sección "A"',
      image: 'assets/INTEGRANTES/Adriano_01.jpeg',
      imageHover: 'assets/INTEGRANTES/Adriano_hover.png'
    },
    {
      id: 2,
      name: 'Gumer Misael',
      apellido: 'Carazas Mendoza',
      role: 'Estudiante',
      description: '4° Grado - Sección "A"',
      image: 'assets/INTEGRANTES/Misa_01.jpeg',
      imageHover: 'assets/INTEGRANTES/Misa_01.jpeg'
    },
    {
      id: 3,
      name: 'Moisés',
      apellido: 'Moreno Mercedes',
      role: 'Estudiante',
      description: '4° Grado - Sección "A"',
      image: 'https://i.pravatar.cc/150?img=3',
      imageHover: 'https://i.pravatar.cc/150?img=13'
    },
    {
      id: 4,
      name: 'Marco',
      apellido: 'López Mercedes',
      role: 'Estudiante',
      description: '4° Grado - Sección "A"',
      image: 'https://i.pravatar.cc/150?img=4',
      imageHover: 'https://i.pravatar.cc/150?img=14'
    },
    {
      id: 5,
      name: 'Andres',
      apellido: 'Yupanqui Vidal ',
      role: 'Estudiante',
      description: '4° Grado - Sección "A"',
      image: 'https://i.pravatar.cc/150?img=5',
      imageHover: 'https://i.pravatar.cc/150?img=15'
    },
  ];

  activeId: number = 1;

  setActive(id: number) {
    this.activeId = id;
  }

  get activeMember(): TeamMember {
    return this.members.find(m => m.id === this.activeId)!;
  }

  get others(): TeamMember[] {
    return this.members.filter(m => m.id !== this.activeId);
  }

  get othersMobile(): TeamMember[] {
    return this.members.filter(m => m.id );
  }

  //  DISTRIBUCIÓN EN ARCO (ordenado y estable)
  getFanPosition(index: number, total: number) {

    const spacing = 130;
    const startX = -(spacing * (total - 1)) / 2;

    const progress = total === 1 ? 0 : index / (total - 1);

    // arco suave inferior
    // const angle = (progress - 0.5) * Math.PI;
    const angle = (progress - 0.5) * 0;
    const radius = 110;

    const x = startX + index * spacing;
    const y = Math.abs(Math.sin(angle)) * radius;

    return {
      left: '50%',
      top: '72%',
      transform: `
        translate(-50%, -50%)
        translate(${x}px, ${y}px)
      `,
      zIndex: index
    };
  }

  // ANIMACION CUNADO PASEN EL MOUSE POR ENCIMA DEL HERO

  cursorX = 0;
  cursorY = 0;
  mouseX = 0;
  mouseY = 0;

  mostrarBrillo = false;

  brilloColor: string = 'rgba(246, 196, 69, 0.200)';
  brilloSize = 100;

  onMouseMove(event: MouseEvent): void {

    // Cursor real
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;

    const hero = event.currentTarget as HTMLElement;
    const rect = hero.getBoundingClientRect();

    // Parallax
    this.mouseX =
      (event.clientX / window.innerWidth - 0.5) * 15;

    this.mouseY =
      (event.clientY / window.innerHeight - 0.5) * 15;

    this.mostrarBrillo = true;
  }

  setBrillo(color: string, size = 300) {
  this.brilloColor = color;
  this.brilloSize = size;
}

  resetBrillo() {
    this.brilloColor = 'rgba(246, 196, 69, 0.200)';
  }

  onMouseLeave(): void {

    this.mostrarBrillo = false;
  }
}