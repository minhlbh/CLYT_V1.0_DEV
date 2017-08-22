import { UserService } from '../Share/Services/user.service';
import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';
import { Router } from '@angular/router';
declare var $: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    menus: any;
    config: any;
    searchKey: any;
    searchState = false;
    state = 'show';
    auth: any;
    constructor(
        private settingService: SettingService,
        private userService: UserService,
        private router: Router,
        private renderer: Renderer
    ) {

    }

    ngOnInit() {
        this.settingService.getFirstConfig().subscribe(() => {
            this.menus = this.settingService.getMenu();
            this.config = this.settingService.getConfig();
        });
        this.auth = this.userService.getAuth();
    }

    showMore(i) {
        console.log($('.grid').getHeight());
        // this.menus.forEach(block => {
        //     block.full = false;
        // });
        // this.menus[i].full = true;
        // this.state = 'show';
        // console.log(this.renderer.selectRootElement('.grid')) ;
    }
    showLess(i) {
        this.menus[i].full = false;
    }

    goToApp(item) {
        if (item.LinkIFrame) {
            this.router.navigate(['/apps/f', item.url]);
        } else if (item.TrangThaiHoatDong !== 0) {
            this.router.navigate(['/apps', item.url]);
        }

    }

}
