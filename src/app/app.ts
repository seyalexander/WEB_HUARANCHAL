import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { MenuMobile } from "./shared/components/menu-mobile/menu-mobile";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Drawer, DrawerModule, MenuMobile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('huaranchal-web');

  //  visible4 = false;

  // toggleMenu() {
  //   this.visible4 = !this.visible4;
  // }

  // closeMenu() {
  //   this.visible4 = false;
  // }

  visible4: boolean = false;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.visible4 = !this.visible4;
  }



}
