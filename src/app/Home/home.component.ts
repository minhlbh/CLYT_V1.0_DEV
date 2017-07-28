import { Component, OnInit } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';

declare var HomeObject: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    menus = [];
    constructor(
        private settingService: SettingService
    ) {

    }

    ngOnInit() {
        // HomeObject.init();
        this.menus = this.settingService.getMenu();
        console.log(this.menus);
        setTimeout(() => {
            HomeObject.init();
        }, 1000);
    }

}
