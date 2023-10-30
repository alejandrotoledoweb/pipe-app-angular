import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  menuItems?: MenuItem[];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular', icon: 'pi pi-desktop pi-plus', items: [
          { label: "Textos y Fechas", icon: "pi pi-align-left" },
          { label: "Números", icon: "pi pi-dollar" },
          { label: "No comunes", icon: "pi pi-globe" },
        ]
      },
      {
        label: 'Pipes Personalizados ', icon: 'pi pi-fw pi-download', items: [
          { label: "Personalizado 1", icon: "pi pi-align-left" }]
      }
    ]
  }


}
