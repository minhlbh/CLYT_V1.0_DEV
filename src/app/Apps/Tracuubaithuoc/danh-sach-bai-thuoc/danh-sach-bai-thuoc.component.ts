import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SettingService } from '../../../Share/Services/setting.service';
import { BaithuocService } from '../../../Share/Services/baithuoc.service';
import { Baithuoc } from '../../../Share/Services/baithuoc.service';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
    selector: 'app-danh-sach-bai-thuoc',
    templateUrl: './danh-sach-bai-thuoc.component.html',
    styleUrls: ['./danh-sach-bai-thuoc.component.css']
})
export class DanhSachBaiThuocComponent implements OnInit {
    menu: any;
    iconText: any;
    name: any;
    elements: any;
    idea: any;
    urlIdea: any;
    idIdea: any;

    DsBaiThuoc: Baithuoc[];
    startBaithuoc: number;
    endBaithuoc: number;
    TongSoLuongBaiThuoc: number;
    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl('');
    DsViThuoc: Baithuoc[];


    DsChePhamThuoc: Baithuoc[];


    DsDuocThien: Baithuoc[];


    TongSoLuongViThuoc: number;
    TongSoLuongDuocThien: number;
    TongSoLuongChePhamThuoc: number;

    public id: any;
    public empty = false;
    public page = 1;
    public url: any;
    public isSearch = false;
    public loading = false;

    constructor(

        private baithuocService: BaithuocService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private settingService: SettingService
    ) {

    }

    ngOnInit() {


        // Hàm lấy dữ liệu bài thuốc
        this.baithuocService.getBaithuoc(1).subscribe(data => {

            this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
            this.TongSoLuongBaiThuoc = data.TongSoLuongBaiThuoc;
            this.startBaithuoc = 0;
            this.endBaithuoc = 50;


            this.DsViThuoc = data.DsViThuoc.DsViThuoc;
            this.TongSoLuongViThuoc = data.DsViThuoc.TongSoLuong;

            this.DsChePhamThuoc = data.DsChePhamThuoc.DsChePhamThuoc;
            this.TongSoLuongChePhamThuoc = data.DsChePhamThuoc.TongSoLuong;

            this.DsDuocThien = data.DsDuocThien.DsDuocThien;
            this.TongSoLuongDuocThien = data.DsDuocThien.TongSoLuong;

        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'baithuocvithuoc') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'baithuocvithuoc';

    }
    doSearch(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.baithuocService.getBaithuoc(1).subscribe(data => {
                this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
                this.TongSoLuongBaiThuoc = data.TongSoLuongBaiThuoc;
                this.startBaithuoc = (this.page - 1) * 50;
                this.endBaithuoc = this.page * 50;
            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(() => {
                this.baithuocService.getSearchBaithuoc(text).subscribe(data => {
                    this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
                    this.TongSoLuongBaiThuoc = data.TongSoLuongBaiThuoc;
                    this.startBaithuoc = 0;
                    this.endBaithuoc = data.TongSoLuongBaiThuoc;
                    if (this.DsBaiThuoc.length === 0 && this.TongSoLuongBaiThuoc === 0) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                    this.loading = false;
                });
            }, 1500);
        }
    }
}
