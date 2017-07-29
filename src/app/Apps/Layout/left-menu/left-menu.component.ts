import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Renderer, Output, EventEmitter } from '@angular/core';
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
    @Output() toggled = new EventEmitter<boolean>();

    menuElements: any;
    isToggled = false;
    constructor(
        private settingService: SettingService,
    ) { }

    ngOnInit() {
        this.menuElements = this.settingService.getMenu();

    }

    toggledLeft() {
        this.isToggled = !this.isToggled;
        this.toggled.emit(this.isToggled);
        console.log(this.isToggled);
    }
}
