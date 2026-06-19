import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drawer } from "primeng/drawer";

@Component({
  selector: 'app-menu-mobile',
  imports: [Drawer],
  templateUrl: './menu-mobile.html',
  styleUrl: './menu-mobile.css',
})
export class MenuMobile {

   @Input() visible4 = false;

  @Output() close = new EventEmitter<void>();

  cerrar() {
    this.close.emit();
  }
}
