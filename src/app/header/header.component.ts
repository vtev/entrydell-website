import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pages: { title: string, url: string, fragment?: string }[] = [
    { title: 'Main', url: '/main' },
    { title: 'About', url: '/about' },
    { title: 'Activities', url: '/main', fragment: 'directions-block-main-page' },
    { title: 'Our Partners', url: '/partners' },
    { title: 'Contact Us', url: '/contact' }
  ];
}
