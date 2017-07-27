import { SettingService } from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';
import { BenhService } from '../../Share/Services/benh.service';

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
    constructor(
        private settingService: SettingService,
        private benhService: BenhService
    ) { }

    ngOnInit() {
        this.menu = this.settingService.getMenu();
        this.iconText = this.menu[0].items[0].IconText;
        this.name = this.menu[0].items[0].Ten;

    }

    // clickBenh(id: number) {
    //     if (id == null) {
    //         this.showChiTiet = false;
    //     }
    //     if (id != null) {
    //         this.showChiTiet = true;
    //         if (this.ChiTietBenh == null || this.ChiTietBenh.id != id) {
    //             this.benhService.getChiTietBenh(id.toString()).subscribe(data => {
    //                 this.ChiTietBenh = data;
    //             });
    //         }
    //     }
    // }

}
