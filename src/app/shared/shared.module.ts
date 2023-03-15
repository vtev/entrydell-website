import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversalButtonComponent } from './universal-button/universal-button.component';



@NgModule({
  declarations: [
    UniversalButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UniversalButtonComponent
  ]
})
export class SharedModule { }
