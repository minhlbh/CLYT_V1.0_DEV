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
    idea: any;
    urlIdea: any;

    constructor(
        private router: Router,
        private settingService: SettingService
    ) { }

    ngOnInit() {
        this.idea = true;
        this.urlIdea = 'tracuuthuoc';


    }

}
