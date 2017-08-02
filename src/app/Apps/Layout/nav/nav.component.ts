import { SettingService } from '../../../Share/Services/setting.service';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})
export class NavComponent implements OnInit {
<<<<<<< HEAD
    public settings: any;
=======
    public menuElements: string;
>>>>>>> e3606888e97e65ec2c8f76628fbe006795fb90e5
    constructor(private settingService: SettingService) {
        this.settings = this.settingService.getConfig();
    }
    ngOnInit() {
    }

}
