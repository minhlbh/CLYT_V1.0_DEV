import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../../Share/Services/setting.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-danh-sach-thuoc',
    templateUrl: './danh-sach-thuoc.component.html',
    styleUrls: ['./danh-sach-thuoc.component.css']
})
export class DanhSachThuocComponent implements OnInit {

    constructor(
        private router: Router,
        private settingService: SettingService
    ) { }

    ngOnInit() {
    }

}
