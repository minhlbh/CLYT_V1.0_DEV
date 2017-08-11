import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';

@Component({

    selector: 'app-baithuoc',
    templateUrl: './baithuoc.component.html',
    styleUrls: ['./baithuoc.component.css']
})
export class BaithuocComponent implements OnInit {

    constructor(
        private settingService: SettingService,
        private router: Router,
        private activatedroute: ActivatedRoute) { }

    ngOnInit() {
    }


}
