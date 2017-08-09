import { SettingService } from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';
import { BenhService } from '../../Share/Services/benh.service';
import { Router, ActivatedRoute } from '@angular/router';

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
        private router: Router,
        private benhService: BenhService,
        private activatedroute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedroute.params.subscribe(pars => {
            this.idBenh(pars['id']);
        });
    }

    idBenh(id: number) {
        if (id == null) {
            this.showChiTiet = false;
        }else {
            this.detailBenhId = id;
            this.showChiTiet = true;
        }
    }

}