import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {Fancybox} from "@fancyapps/ui";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

Fancybox.bind("[data-fancybox]", {
    // Images : {
    //   zoomOpacity : 'auto',
    // }
    // animated : false,
});

