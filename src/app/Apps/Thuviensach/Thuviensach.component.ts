import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';

@Component({
    selector: 'app-thuviensach',
    templateUrl: './Thuviensach.component.html',
    styleUrls: ['./Thuviensach.component.css']
})
export class ThuviensachComponent implements OnInit {
    menu: any;
    iconText: any;
    name: any;


    constructor(
        private settingService: SettingService,
        private router: Router,
        private activatedroute: ActivatedRoute) {

    }

    ngOnInit() {
    }

}
