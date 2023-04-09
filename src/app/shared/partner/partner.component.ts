import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {
  @Input() logoUrl : string = '';
  @Input() partnersUrl : string = '';
}
