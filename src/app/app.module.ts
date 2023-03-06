import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutPageModule } from './about-page/about-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageModule } from './contact-page/contact-page.module';
import { DirectionsPageModule } from './directions-page/directions-page.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { MainPageModule } from './main-page/main-page.module';
import { PartnersPageModule } from './partners-page/partners-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
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
    DirectionsPageModule,
    ContactPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
