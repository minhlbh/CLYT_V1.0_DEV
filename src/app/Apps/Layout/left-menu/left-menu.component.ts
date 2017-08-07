import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Renderer, Output, EventEmitter } from '@angular/core';
import { SettingService } from '../../../Share/Services/setting.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})
export class LeftMenuComponent implements OnInit {
    // @Output() toggled = new EventEmitter<boolean>();

    menuElements: any;
    isToggled = false;
    constructor(
        private settingService: SettingService,
        private router: Router
    ) { 
        this.menuElements = this.settingService.getMenu();
    }

    ngOnInit() {
    }

    toggledLeft() {
        this.isToggled = !this.isToggled;
        // this.toggled.emit(this.isToggled);
    }

    // navigation(url: string) {
    //     console.log(url);
    //     this.router.navigate(['/apps', url]);
    // }
}
