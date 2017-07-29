import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';

declare var HomeObject: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
    options: MasonryOptions = {
        transitionDuration: '0.3s'
    };
    bricks = [
        { title: 'Brick 1', col: 1, row: 2 },
        { title: 'Brick 2', col: 1, row: 1 },
        { title: 'Brick 3', col: 2, row: 2 },
        { title: 'Brick 4', col: 1, row: 1 },
        { title: 'Brick 5', col: 1, row: 1 },
        { title: 'Brick 6', col: 1, row: 1 }
    ];
    constructor() { }
=======
    menus = [];
    blockFull = false;
    constructor(
        private settingService: SettingService
    ) {

    }
>>>>>>> home

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
