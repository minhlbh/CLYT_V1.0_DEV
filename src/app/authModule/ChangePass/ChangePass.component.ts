import {SettingService} from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ChangePass',
    templateUrl: './ChangePass.component.html',
    styleUrls: ['./ChangePass.component.css']
})
export class ChangePassComponent implements OnInit {

    elements: any;
    constructor(
        private settingService: SettingService,
    ) {
        this.elements = this.settingService.getConfig();
    }

    ngOnInit() {
    }

}
