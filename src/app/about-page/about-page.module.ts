import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import {ButtonComponent} from "./button/button.component";
import { AboutCompanyComponent } from './about-company/about-company.component';
import { OfficesAndCompaniesComponent } from './offices-and-companies/offices-and-companies';



@NgModule({
  declarations: [
    AboutPageComponent,
    ButtonComponent,
    OfficesAndCompaniesComponent,
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
