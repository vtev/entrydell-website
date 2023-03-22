import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import {ButtonComponent} from "./button/button.component";
import { ButtonsModuleComponent } from './buttons-module/buttons-module.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ButtonComponent,
    ButtonsModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
