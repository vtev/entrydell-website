import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { DirectionComponent } from './direction/direction.component';
import {RouterModule} from "@angular/router";
import { CompanyHistoryBannerComponent } from './company-history-banner/company-history-banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetToKnowUsComponent } from './get-to-know-us/get-to-know-us.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    MainPageComponent,
    TopBannerComponent,
    DirectionComponent,
    CompanyHistoryBannerComponent,
    GetToKnowUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
