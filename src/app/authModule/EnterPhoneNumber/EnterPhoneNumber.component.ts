import {UserService} from '../../Share/Services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SettingService} from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-enterphonenumber',
    templateUrl: './EnterPhoneNumber.component.html',
    styleUrls: ['./EnterPhoneNumber.component.css']
})
export class EnterPhoneNumberComponent implements OnInit {
    phone: FormControl = new FormControl();
    elements: any;
    constructor(
        private settingService: SettingService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
     }

    ngOnInit() {
    }

}
