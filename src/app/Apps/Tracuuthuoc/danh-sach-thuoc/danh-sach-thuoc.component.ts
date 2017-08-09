import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../Share/Services/setting.service';
import { Router } from '@angular/router';
import { WindowComponent } from '../../../Share/Components/window/window.component';


@Component({
    selector: 'app-danh-sach-thuoc',
    templateUrl: './danh-sach-thuoc.component.html',
    styleUrls: ['./danh-sach-thuoc.component.css']
})
export class DanhSachThuocComponent implements OnInit {
    menu: any;
    idea: any;
    urlIdea: any;
    idIdea: any;
    iconText: any;
    name: any;
    public url: any;

    constructor(
        private router: Router,
        private settingService: SettingService
    ) { }

    ngOnInit() {
        this.idea = true;
        this.urlIdea = 'tracuuthuoc';
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'tracuuthuoc') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuuthuoc';


    }

}
