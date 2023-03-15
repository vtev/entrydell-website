import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { TopBannerComponent } from './top-banner/top-banner.component';



@NgModule({
  declarations: [
    MainPageComponent,
    TopBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
