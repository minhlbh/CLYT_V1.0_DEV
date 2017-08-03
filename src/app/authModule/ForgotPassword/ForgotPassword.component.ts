import {SettingService} from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ForgotPassword',
    templateUrl: './ForgotPassword.component.html',
    styleUrls: ['./ForgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    elements: any;
    constructor(
        private settingService: SettingService,
    ) {
        this.elements = this.settingService.getConfig();
    }

    ngOnInit() {
    }

}
