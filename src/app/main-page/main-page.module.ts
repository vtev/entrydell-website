import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { DirectionComponent } from './direction/direction.component';



@NgModule({
  declarations: [
    MainPageComponent,
    TopBannerComponent,
    DirectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
