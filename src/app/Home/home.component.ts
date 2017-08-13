import { UserService } from '../Share/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';
import { group, state, query, stagger, animate, style, transition, trigger } from '@angular/animations';
// [routerLink]="['/apps', item?.url]"
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public runAnimation = false;
    menus: any;
    config: any;
    searchKey: any;
    searchState = false;
    state = 'show';
    auth: any;
    constructor(
        private settingService: SettingService,
        private userService: UserService,
        private router: Router
    ) {
        // this.settingService.itemValue.subscribe((data) => {
        //     console.log('abc', data);
        // });
    }

    ngOnInit() {
        this.settingService.getFirstConfig().subscribe(() => {
            this.menus = this.settingService.getMenu();
            this.config = this.settingService.getConfig();
            // console.log(this.menus)

        });
        this.auth = this.userService.getAuth();
    }

    showMore(i) {
        this.menus.forEach(block => {
            block.full = false;
        });
        // this.menus[i].items = [...this.menus[i].items, ...this.menus[i].items];
        this.menus[i].full = true;
        this.state = 'show';
    }
    showLess(i) {
        this.menus[i].full = false;
    }

    getRandomInt(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min) * 0.01;
    }

    goToApp(item) {
        // this.ro
        if (item.LinkIFrame) {
            // console.log('frame');
            this.router.navigate(['/apps/f', item.url]);
        }else if (item.TrangThaiHoatDong !== 0) {
            this.router.navigate(['/apps', item.url]);
        }

    }

}
