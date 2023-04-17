import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPageModule } from './about-page/about-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageModule } from './contact-page/contact-page.module';
import { EngineeringPageComponent } from './engineering-page/engineering-page.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { HealthcarePageComponent } from './healthcare-page/healthcare-page.component';
import { MainPageModule } from './main-page/main-page.module';
import { PartnersPageModule } from './partners-page/partners-page.module';
import { PharmacologyPageModule } from "./pharmacology-page/pharmacology-page.module";
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HealthcarePageComponent,
    EngineeringPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    MainPageModule,
    AboutPageModule,
    PartnersPageModule,
    ContactPageModule,
    PharmacologyPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
