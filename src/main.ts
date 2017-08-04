import { enableProdMode, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { SettingService } from './app/Share/Services/setting.service';


// class MainInit implements OnInit {
//     elements: any;
//     constructor(
//         private settingService: SettingService,
//     ) {
//         this.elements = this.settingService.getConfig();
//         console.log(this.elements.ThuongHieu);
//     }
//     ngOnInit() {
//     }
// }

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
