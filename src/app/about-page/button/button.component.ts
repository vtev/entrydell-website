import { Component, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  animations: [
    trigger('selection', [
      state('inactive', style({
        color: 'rgb(23, 44, 111)',
      })),
      state('hover', style({
        color: 'rgb(66, 154, 239)',
      })),
      transition('inactive <=> hover', [
        animate('0.2s ease-out')
      ])
    ])
  ]
})
export class ButtonComponent {
  @Input() title : string = "";
  @Input() affiliateUrl?: string;
  state : string = "inactive";

  public goToAffiliate = (): void => {
    window.open(this.affiliateUrl);
  }

  public toggleHover = (): void => {
      this.state = 'hover';
  };

  public removeHover = (): void => {
      this.state = 'inactive';
  };
}
