import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

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
      state('hover', style({
        backgroundColor: 'grey',
        height: '3px',
        width: '100%'
      })),
      state('active', style({
        backgroundColor: 'green',
        height: '3px',
        width: '100%'
      })),
      transition('notActive => active', [
        animate('0.5s ease-out')
      ]),
      transition('notActive <=> hover', [
        animate('0.2s ease-out')
      ])
    ])
  ]
})
export class ButtonComponent implements OnInit {
  @Input() title: string = "";
  state: string = 'notActive';

  constructor(private eventService: EventService) { }

  public toggleActive = (): void => {
    this.eventService.activePage$.next(this.title);
  };

  public toggleHover = (): void => {
    if (this.state !== 'active') {
      this.state = 'hover';
    }
  };

  public removeHover = (): void => {
    if (this.state !== 'active') {
      this.state = 'notActive';
    }
  };

  ngOnInit(): void {
    this.eventService.activePage$.subscribe(title => {
      if (title === this.title) {
        this.state = 'active';
      } else {
        this.state = 'notActive';
      }
    });
  }
}
