import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';

@Component({
    selector: 'app-phuongphapdieutri',
    templateUrl: './phuongphapdieutri.component.html',
    styleUrls: ['./phuongphapdieutri.component.css']
})
export class PhuongphapdieutriComponent implements OnInit {


    constructor(
        private settingService: SettingService,
        private router: Router,
        private activatedroute: ActivatedRoute) { }


    ngOnInit() {
    }

}
