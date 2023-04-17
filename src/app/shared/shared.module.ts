import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner/partner.component';



@NgModule({
  declarations: [
    PartnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PartnerComponent
  ]
})
export class SharedModule { }
