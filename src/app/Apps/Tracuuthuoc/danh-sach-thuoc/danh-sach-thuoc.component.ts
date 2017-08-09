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
        this.iconText = this.menu[0].items[1].IconText;
        this.name = this.menu[0].items[1].Ten;
        this.idIdea = this.menu[0].items[1].Id;
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuuthuoc';


    }

}
