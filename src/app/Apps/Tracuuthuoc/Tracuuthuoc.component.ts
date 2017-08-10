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

    constructor(
        private settingService: SettingService,
        private router: Router,
        private activatedroute: ActivatedRoute) { }

    ngOnInit() {
    }

}
