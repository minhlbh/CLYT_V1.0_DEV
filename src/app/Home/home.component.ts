import { UserService } from '../Share/Services/user.service';
import { Component, OnInit, Renderer, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SettingService } from '../Share/Services/setting.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
declare var $: any;


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {

    menus: any;
    config: any;
    searchKey: any;
    searchState = false;
    state = 'show';
    auth: any;
    styled = false;
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
            // setTimeout(function () {
            //     this.showMore(0);
            // }, 300);
        });
        this.auth = this.userService.getAuth();

    }

    ngAfterViewChecked() {
        // console.log()
        // this.showMore(1);
        // if(const e = $('.grid'))
        try {
            const e = $('.grid');
            for (let i = 0; i < e.length; i++) {
                // if (e[i].clientHeight > 435) {
                    // e[i].clientWidth = 800;
                // }
                console.log(e[i].clientHeight);
            }
            this.styled = true;
        } catch (e) {

        }

    }

    showMore(a) {
        const e = $('.grid');
        for (let i = 0; i < e.length; i++) {
            if (e[i].clientHeight > 435) {
                // e[i].clientWidth = 800;
            }
            console.log(e[i].clientHeight);
        }

        // for
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
