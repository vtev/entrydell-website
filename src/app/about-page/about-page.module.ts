import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import {ButtonComponent} from "./button/button.component";
import { ButtonsModuleComponent } from './buttons-module/buttons-module.component';
import { AboutCompanyComponent } from './about-company/about-company.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ButtonComponent,
    ButtonsModuleComponent,
    AboutCompanyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
