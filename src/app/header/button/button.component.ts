import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  animations: [
    trigger('selection', [
      state('notActive', style({
        backgroundColor: 'green',
        height: '3px',
        width: '0%',
      })),
      state('active', style({
        backgroundColor: 'green',
        height: '3px',
        width: '100%'
      })),
      transition('notActive => active', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class ButtonComponent {
  @Input() title: string = "";
  isActive: boolean = false;

  public toggleActive = () => {
    this.isActive = !this.isActive;
  }
}
