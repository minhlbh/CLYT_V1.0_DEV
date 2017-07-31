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
    public settings: any;
    constructor(private settingService: SettingService) {
        this.settings = this.settingService.getConfig();
    }
    ngOnInit() {
    }

}
