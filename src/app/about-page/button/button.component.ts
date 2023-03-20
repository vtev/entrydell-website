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
        // height: '3px',
        // width: '0%',
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
  state : string = "inactive";

  public toggleHover = (): void => {
      this.state = 'hover';
  };

  public removeHover = (): void => {
      this.state = 'inactive';
  };
}
