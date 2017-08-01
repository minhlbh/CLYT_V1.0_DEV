import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';
import { query, stagger, animate, style, transition, trigger } from '@angular/animations';


declare var HomeObject: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('pageAnimation', [
            transition(':enter', [
                query('.item', style({ transform: 'translateX(150px)', opacity: 0 })),

                // query(
                //     '.item', animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                // ),
                query('.item', [
                    stagger(200, [
                        animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                    ])
                ])
            ]),
        ])
    ]
})
export class HomeComponent implements OnInit {
    public runAnimation = false;
    menus: any;
    config: any;
    searchKey: any;
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
            this.runAnimation = true;
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
