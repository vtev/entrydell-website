import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-universal-button',
  templateUrl: './universal-button.component.html',
  styleUrls: ['./universal-button.component.css']
})
export class UniversalButtonComponent {
  @Input() title: string = "";
}
