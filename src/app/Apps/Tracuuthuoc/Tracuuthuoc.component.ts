import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Tracuuthuoc',
    templateUrl: './Tracuuthuoc.component.html',
    styleUrls: ['./Tracuuthuoc.component.css']
})
export class TracuuthuocComponent implements OnInit {
    menu: any;
    iconText: any;
    name: any;
    showChiTiet = false;
    ChiTietThuoc: any;
    detailThuocId = 0;
    constructor(
        private settingService: SettingService,
        private router: Router,
        private activatedroute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedroute.params.subscribe(pars => {
            this.idThuoc(pars['id']);
        });
    }
    idThuoc(id: number) {
        if (id == null) {
            this.showChiTiet = false;
        }else {
            this.detailThuocId = id;
            this.showChiTiet = true;
        }
    }
}
