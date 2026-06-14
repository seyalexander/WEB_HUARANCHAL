import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Drawer, DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Drawer, DrawerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('huaranchal-web');

  visible4: boolean = false;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.visible4 = !this.visible4;
  }
}
