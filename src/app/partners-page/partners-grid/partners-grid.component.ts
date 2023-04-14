import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-grid',
  templateUrl: './partners-grid.component.html',
  styleUrls: ['./partners-grid.component.css']
})
export class PartnersGridComponent {
  logos: { logoUrl: string, partnersUrl: string }[] = [
    { logoUrl: '/assets/partners/draeger.webp', partnersUrl: 'https://www.draeger.com/'},
    { logoUrl: '/assets/partners/karl-storz.webp', partnersUrl: 'https://www.karlstorz.com/'},
    { logoUrl: '/assets/partners/renosem.webp', partnersUrl: 'http://renosem.com'},
    { logoUrl: '/assets/partners/miele.webp', partnersUrl: 'https://www.miele.de/'},
    { logoUrl: '/assets/partners/bmt.webp', partnersUrl: 'https://www.bmt.cz/'},
    { logoUrl: '/assets/partners/zeiss.webp', partnersUrl: 'https://www.zeiss.com/meditec/us/home.html'},
    { logoUrl: '/assets/partners/fujifilm.webp', partnersUrl: 'https://global.fujifilm.com/en/'},
    { logoUrl: '/assets/partners/at-os.webp', partnersUrl: 'https://www.at-os.com/en/'},
    { logoUrl: '/assets/partners/radiometer.webp', partnersUrl: 'https://www.radiometer.com/'},
    { logoUrl: '/assets/partners/baxter.webp', partnersUrl: 'https://www.baxter.com/'},
    { logoUrl: '/assets/partners/gambro.webp', partnersUrl: 'https://www.baxter.com/'},
    { logoUrl: '/assets/partners/samsung_medison.webp', partnersUrl: 'http://www.samsungmedison.com/'},
    { logoUrl: '/assets/partners/merivaara.webp', partnersUrl: 'https://www.merivaara.com/'},
    { logoUrl: '/assets/partners/weger.webp', partnersUrl: 'https://www.weger.it/en.html'},
    { logoUrl: '/assets/partners/siemens.webp', partnersUrl: 'https://www.siemens.com/global/en.html'},
    { logoUrl: '/assets/partners/pms.webp', partnersUrl: 'https://pmsmedikal.com/home/'},
    { logoUrl: '/assets/partners/steris.webp', partnersUrl: 'https://www.steris.com/'},
    { logoUrl: '/assets/partners/flakt-group.webp', partnersUrl: 'https://www.flaktgroup.com/'},
    { logoUrl: '/assets/partners/erbe.webp', partnersUrl: 'https://www.erbe-med.com/de-en/global-home/'},
    { logoUrl: '/assets/partners/dornier_medtech.webp', partnersUrl: 'https://www.dornier.com/'},
    { logoUrl: '/assets/partners/embitron.webp', partnersUrl: 'https://www.embitron.cz/'},
    { logoUrl: '/assets/partners/padana.webp', partnersUrl: 'http://www.padanacleanroom.it/'},
    { logoUrl: '/assets/partners/medipia.webp', partnersUrl: 'http://www.endoclean-medipia.com/'},
    { logoUrl: '/assets/partners/steriline.webp', partnersUrl: 'https://www.steriline.it/en/home/'}
  ];
}
