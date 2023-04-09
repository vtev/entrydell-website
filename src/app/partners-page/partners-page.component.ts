import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners-page.component.html',
  styleUrls: ['./partners-page.component.css']
})
export class PartnersPageComponent {
  logos: { logoUrl: string, partnersUrl: string }[] = [
    { logoUrl: '/assets/partners/draeger.webp', partnersUrl: 'https://www.draeger.com/ru_ru/Home'},
    { logoUrl: '/assets/partners/karl-storz.webp', partnersUrl: 'https://www.karlstorz.com/by/ru/index.htm?target='}
  ];
}
