import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Renderer } from '@angular/core';
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
    isToggled = false;
    constructor(
        private settingService: SettingService,
        private renderer: Renderer
    ) { }

    ngOnInit() {
        this.menuElements = this.settingService.getMenu();
    }

    setWidth(el, width) {
    this.renderer.setElementStyle(el, 'width', width + 'px');
  }
}
