import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacologyPageComponent } from './pharmacology-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PharmacologyPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PharmacologyPageComponent
  ]
})
export class PharmacologyPageModule { }
