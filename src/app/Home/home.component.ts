import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';

declare var HomeObject: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    menus: any;
    config: any;
    blockFull = false;
    searchState = false;
    constructor(
        private settingService: SettingService
    ) {
         this.settingService.itemValue.subscribe((data) => {
            console.log('abc', data);
        });
    }

    ngOnInit() {

        this.settingService.getFirstConfig().subscribe(() => {
            this.menus = this.settingService.getMenu();
            this.config = this.settingService.getConfig();
            console.log(this.menus);
            setTimeout(() => {
                HomeObject.byWidth('all');
                // this.showMore();
            }, 0);
        });

    }
    showMore(id) {
        this.menus[0].items = [...this.menus[0].items, ...this.menus[0].items];
        setTimeout(() => {
            HomeObject.byHeight(id);
        }, 0);
    }

    // ngAfterViewInit() {
    //     HomeObject.init();
    // }

}
