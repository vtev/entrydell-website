import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-company-history-banner',
  templateUrl: './company-history-banner.component.html',
  styleUrls: ['./company-history-banner.component.css'],
  animations: [
    trigger('selection', [
      state('inactive', style({
        backgroundColor: 'white',
        height: '0px',
        width: '100%',
      })),
      state('hover', style({
        backgroundColor: 'white',
        height: '3px',
        width: '100%'
      })),
      transition('inactive <=> hover', [
        animate('0.15s')
      ])
    ])
  ]
})
export class CompanyHistoryBannerComponent {
  state: string = 'inactive';

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
}
