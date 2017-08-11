import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Baithuoc } from '../../../Share/Services/baithuoc.service';
import { BaithuocService } from '../../../Share/Services/baithuoc.service';
import { SettingService } from '../../../Share/Services/setting.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
    selector: 'app-danh-sach-bai-thuoc',
    templateUrl: './danh-sach-bai-thuoc.component.html',
    styleUrls: ['./danh-sach-bai-thuoc.component.css']
})
export class DanhSachBaiThuocComponent implements OnInit {

    constructor(
                private thuocService: BaithuocService,
        private router: Router,
        private settingService: SettingService,
        private activedroute: ActivatedRoute,
    ) { }

    ngOnInit() {
    }

}
