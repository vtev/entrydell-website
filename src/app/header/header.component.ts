import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pageTitles: string[] = [
    'Main',
    'About',
    'Directions',
    'Our Partners',
    'Contact Us'
  ];
}
