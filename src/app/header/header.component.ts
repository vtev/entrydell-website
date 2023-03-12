import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pages: { title: string, url: string }[] = [
    { title: 'Main', url: '/main' },
    { title: 'About', url: '/about' },
    { title: 'Directions', url: '/directions' },
    { title: 'Our Partners', url: '/partners' },
    { title: 'Contact Us', url: '/contact' }
  ];
}
