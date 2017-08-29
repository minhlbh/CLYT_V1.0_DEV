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
    public menuElements: any;
    public gioithieu = false;
    constructor(private settingService: SettingService) {
        this.menuElements = this.settingService.getConfig();
    }

    ngOnInit() {
    }

    closeGioiThieu() {
        this.gioithieu = false;
    }
    tollogeGioiThieu() {
        console.log(this.gioithieu);

        this.gioithieu = !this.gioithieu;
    }
}
