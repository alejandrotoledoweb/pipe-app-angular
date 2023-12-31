import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu'
// import { MenuItem } from 'primeng/api'
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';



@NgModule({
  declarations: [],
  imports: [],
  exports: [MenuModule, MenubarModule, ButtonModule, CardModule, FieldsetModule, PanelModule, ToolbarModule]
})
export class PrimeNgModule { }
