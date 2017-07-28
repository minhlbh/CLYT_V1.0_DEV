import { SettingService } from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';
import { BenhService } from '../../Share/Services/benh.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Tracuubenh',
    templateUrl: './Tracuubenh.component.html',
    styleUrls: ['./Tracuubenh.component.css']
})
export class TracuubenhComponent implements OnInit {
    menu: any;
    iconText: any;
    name: any;
    showChiTiet = false;
    ChiTietBenh: any;
    detailBenhId = 0;
    constructor(
        private settingService: SettingService,
        private benhService: BenhService
    ) { }

    ngOnInit() {
    }

    idBenh(id: number) {
        this.detailBenhId = id;
        if (id == null) {
            this.showChiTiet = false;
        }else {
            this.showChiTiet = true;
        }
    }

}
