import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import {ButtonComponent} from "./button/button.component";



@NgModule({
  declarations: [
    AboutPageComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
