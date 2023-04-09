import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalButtonComponent } from './universal-button/universal-button.component';
import { PartnerComponent } from './partner/partner.component';



@NgModule({
  declarations: [
    UniversalButtonComponent,
    PartnerComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        UniversalButtonComponent,
        PartnerComponent
    ]
})
export class SharedModule { }
