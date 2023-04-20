import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-grid',
  templateUrl: './partners-grid.component.html',
  styleUrls: ['./partners-grid.component.css']
})
export class PartnersGridComponent {
  logos: { logoUrl: string, partnersUrl: string }[] = [
    { logoUrl: '/assets/partners/draeger.png', partnersUrl: 'https://www.draeger.com/'},
    { logoUrl: '/assets/partners/karl-storz.png', partnersUrl: 'https://www.karlstorz.com/'},
    { logoUrl: '/assets/partners/renosem.png', partnersUrl: 'http://renosem.com'},
    { logoUrl: '/assets/partners/miele.png', partnersUrl: 'https://www.miele.de/'},
    { logoUrl: '/assets/partners/bmt.webp', partnersUrl: 'https://www.bmt.cz/'},
    { logoUrl: '/assets/partners/zeiss.png', partnersUrl: 'https://www.zeiss.com/meditec/us/home.html'},
    { logoUrl: '/assets/partners/fujifilm.png', partnersUrl: 'https://global.fujifilm.com/en/'},
    { logoUrl: '/assets/partners/at-os.png', partnersUrl: 'https://www.at-os.com/en/'},
    { logoUrl: '/assets/partners/radiometer.png', partnersUrl: 'https://www.radiometer.com/'},
    { logoUrl: '/assets/partners/baxter.png', partnersUrl: 'https://www.baxter.com/'},
    { logoUrl: '/assets/partners/gambro.png', partnersUrl: 'https://www.baxter.com/'},
    { logoUrl: '/assets/partners/samsung_medison.png', partnersUrl: 'http://www.samsungmedison.com/'},
    { logoUrl: '/assets/partners/merivaara.webp', partnersUrl: 'https://www.merivaara.com/'},
    { logoUrl: '/assets/partners/weger.png', partnersUrl: 'https://www.weger.it/en.html'},
    { logoUrl: '/assets/partners/siemens.png', partnersUrl: 'https://www.siemens.com/global/en.html'},
    { logoUrl: '/assets/partners/pms.png', partnersUrl: 'https://pmsmedikal.com/home/'},
    { logoUrl: '/assets/partners/steris.png', partnersUrl: 'https://www.steris.com/'},
    { logoUrl: '/assets/partners/flakt-group.png', partnersUrl: 'https://www.flaktgroup.com/'},
    { logoUrl: '/assets/partners/erbe.png', partnersUrl: 'https://www.erbe-med.com/de-en/global-home/'},
    { logoUrl: '/assets/partners/dornier-medtech.webp', partnersUrl: 'https://www.dornier.com/'},
    { logoUrl: '/assets/partners/embitron.jpg', partnersUrl: 'https://www.embitron.cz/'},
    { logoUrl: '/assets/partners/padana.png', partnersUrl: 'http://www.padanacleanroom.it/'},
    { logoUrl: '/assets/partners/medipia.png', partnersUrl: 'http://www.endoclean-medipia.com/'},
    { logoUrl: '/assets/partners/steriline.webp', partnersUrl: 'https://www.steriline.it/en/home/'}
  ];
}
