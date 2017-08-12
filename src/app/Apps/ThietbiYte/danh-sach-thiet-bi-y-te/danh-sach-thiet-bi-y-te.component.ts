import { Component, OnInit } from '@angular/core';
import { ThietbiYte, ThietbiyteService } from '../../../Share/Services/thietbiyte.service';
import { Router } from '@angular/router';
import { SettingService } from '../../../Share/Services/setting.service';

@Component({
  selector: 'app-danh-sach-thiet-bi-y-te',
  templateUrl: './danh-sach-thiet-bi-y-te.component.html',
  styleUrls: ['./danh-sach-thiet-bi-y-te.component.css']
})
export class DanhSachThietBiYTeComponent implements OnInit {

  urlIdea: string;
    idea: boolean;
    url: string;
    idIdea: any;
    menu: any;
    name: any;
    iconText: any;
    DsThietbi: ThietbiYte[];
    TongSoThietBi: any;
    constructor(
        private thietbiyteService: ThietbiyteService,
        private router: Router,
        private settingService: SettingService
    ) { }

    ngOnInit() {
                // Hàm lấy dữ liệu bài thuốc
        this.thietbiyteService.getThietbi(1).subscribe(data => {
            this.DsThietbi = data.DsThietBiYTe.DsThietBiYTe;
            this.TongSoThietBi = data.DsThietBiYTe.TongSoLuong;

        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'tracuuthietbiyte') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuuthietbiyte';
    }

}
