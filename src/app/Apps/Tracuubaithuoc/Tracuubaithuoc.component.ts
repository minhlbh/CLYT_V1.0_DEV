import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';

@Component({
    selector: 'app-tracuubaithuoc',
    templateUrl: './Tracuubaithuoc.component.html',
    styleUrls: ['./Tracuubaithuoc.component.css']
})
export class TracuubaithuocComponent implements OnInit {
        menu: any;
        iconText: any;
        name: any;

    constructor(
        private settingService: SettingService,
        private router: Router,
        private activatedroute: ActivatedRoute) { }



ngOnInit() {
}

}
