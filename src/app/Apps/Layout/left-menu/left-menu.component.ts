import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Renderer } from '@angular/core';
import { SettingService } from '../../../Share/Services/setting.service';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})
export class LeftMenuComponent implements OnInit {
    menuElements: any;
    isToggled = false;
    constructor(
        private settingService: SettingService,
    ) { console.log(this.isToggled); }

    ngOnInit() {
        this.menuElements = this.settingService.getMenu();

    }
}
