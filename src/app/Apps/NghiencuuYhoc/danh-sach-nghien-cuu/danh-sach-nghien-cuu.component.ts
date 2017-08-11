import { Component, OnInit } from '@angular/core';
import { NghiencuuService, Nghiencuu } from '../../../Share/Services/nghiencuu.service';
import { Router } from '@angular/router';
import { SettingService } from '../../../Share/Services/setting.service';

@Component({
    selector: 'app-danh-sach-nghien-cuu',
    templateUrl: './danh-sach-nghien-cuu.component.html',
    styleUrls: ['./danh-sach-nghien-cuu.component.css']
})
export class DanhSachNghienCuuComponent implements OnInit {
    urlIdea: string;
    idea: boolean;
    url: string;
    idIdea: any;
    menu: any;
    name: any;
    iconText: any;
    DsNghienCuu: Nghiencuu[];
    TongSoNghienCuu: any;
    constructor(
        private nghiencuuService: NghiencuuService,
        private router: Router,
        private settingService: SettingService
    ) { }

    ngOnInit() {
                // Hàm lấy dữ liệu bài thuốc
        this.nghiencuuService.getNghiencuu(1).subscribe(data => {
            this.DsNghienCuu = data.DsNghienCuu.DsNghienCuu;
            this.TongSoNghienCuu = data.DsNghienCuu.TongSoLuong;

        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'nghiencuuyhoc') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'nghiencuuyhoc';
    }

}
