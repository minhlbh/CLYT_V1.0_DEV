import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { SettingService } from '../../../Share/Services/setting.service';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})
export class LeftMenuComponent implements OnInit {
    menuElements: any;
    constructor(private settingService: SettingService) { }

    ngOnInit() {
        this.menuElements = this.settingService.getMenu();
    }

}
