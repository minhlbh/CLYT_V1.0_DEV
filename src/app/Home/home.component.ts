import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';

declare var HomeObject: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    menus = [];
    blockFull = false;
    constructor(
        private settingService: SettingService
    ) {

    }

    ngOnInit() {
        // HomeObject.init();

        this.menus = this.settingService.getMenu();
        console.log(this.menus);
        setTimeout(() => {
            HomeObject.byWidth();
        }, 0);
    }
    showMore() {
        this.menus[0].items = [...this.menus[0].items, ...this.menus[0].items];
        setTimeout(() => {
            HomeObject.byHeight('49500');
        }, 0);
    }
    // ngAfterViewInit() {
    //     HomeObject.init();
    // }

}
