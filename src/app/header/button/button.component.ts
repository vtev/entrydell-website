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
export class ButtonComponent implements OnInit {
  @Input() title: string = "";
  isActive: boolean = false;

  constructor(private eventService: EventService) { }

  public toggleActive = () => {
    this.eventService.activePage$.next(this.title);
  }

  ngOnInit(): void {
    this.eventService.activePage$.subscribe(title => {
      if (title === this.title) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });
  }
}
