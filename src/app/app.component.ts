import { Component } from '@angular/core';
import { SettingService } from './Share/Services/setting.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    elements: any;
    constructor(
        private settingService: SettingService,
        private titleService: Title
    ) {
        // this.settingService.getFirstConfig().subscribe(data => {
        //     this.settingService.setConfig(data.setting);
        //     this.settingService.setMenu(data.home);
        // });
        // this.elements = this.settingService.getConfig();

        // this.titleService.setTitle( 'Cloud Y Tế - ' + this.elements.ThuongHieu);
    }
}
