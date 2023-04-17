import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  animations: [
    trigger('selection', [
      state('inactive', style({
        backgroundColor: 'grey',
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
      transition('inactive => active', [
        animate('0.5s ease-out')
      ]),
      transition('inactive <=> hover', [
        animate('0.2s ease-out')
      ])
    ])
  ]
})
export class ButtonComponent implements OnInit {
  @Input() title: string = '';
  @Input() url: string = '';
  @Input() fragment?: string;
  state: string = 'inactive';

  constructor(private router: Router) { }

  public toggleHover = (): void => {
    if (this.state !== 'active') {
      this.state = 'hover';
    }
  };

  public removeHover = (): void => {
    if (this.state !== 'active') {
      this.state = 'inactive';
    }
  };

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe(() => {
      if (this.router.url === this.url && this.title !== 'Directions') {
        this.state = 'active';
      } else {
        this.state = 'inactive';
      }
    });
  }
}
