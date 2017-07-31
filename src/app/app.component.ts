import { Component } from '@angular/core';
import { SettingService } from './Share/Services/setting.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private settingService: SettingService
    ) {
        this.settingService.getFirstConfig().subscribe(data => {
            this.settingService.setConfig(data.setting);
            this.settingService.setMenu(data.home);
        });
    }
}
