import { SettingService } from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';

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
    constructor(private settingService: SettingService) { }

    ngOnInit() {
        this.menu = this.settingService.getMenu();
        this.iconText = this.menu[0].items[0].IconText;
        this.name = this.menu[0].items[0].Ten;
        console.log(this.name);
        console.log(this.iconText);

    }

}
