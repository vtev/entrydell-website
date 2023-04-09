import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersPageComponent } from './partners-page.component';
import {SharedModule} from "../shared/shared.module";
import { PartnersGridComponent } from './partners-grid/partners-grid.component';



@NgModule({
  declarations: [
    PartnersPageComponent,
    PartnersGridComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PartnersPageComponent
  ]
})
export class PartnersPageModule { }
