import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SettingService } from '../../../Share/Services/setting.service';
import { ThuviensachService, Thuviensach } from '../../../Share/Services/thuviensach.service';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'app-danh-sach-thu-vien',
    templateUrl: './danh-sach-thu-vien.component.html',
    styleUrls: ['./danh-sach-thu-vien.component.css']
})
export class DanhSachThuVienComponent implements OnInit {
    [x: string]: any;
    menu: any;
    iconText: any;
    name: any;
    elements: any;
    idea: any;
    urlIdea: any;
    idIdea: any;
    TongSoLuong: number;

    DsSach: Thuviensach[];
    startSach: number;
    endSach: number;
    TongSoLuongSach: number;

    DsTaiLieu: Thuviensach[];
    startTaiLieu: number;
    endTaiLieu: number;
    TongSoLuongTaiLieu: number;

    DsGhiChep: Thuviensach[];
    startGhiChep: number;
    endGhiChep: number;
    TongSoLuongGhiChep: number;

    public id: any;
    public url: any;

    public loading = false;
    public scrollLoading = false;
    public empty = false;
    public page = 1;
    public isSearch = false;
    public loadMore = false;

    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl('');

    constructor(

        private thuviensachService: ThuviensachService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private settingService: SettingService
    ) {
        // this.searchKey.valueChanges
        //     .debounceTime(1000)
        //     .subscribe((event) => {
        //         this.doSearchBaiThuoc(event);


        //         // this.clickThuoc(null);
        //     });

    }

    ngOnInit() {


        // Hàm lấy dữ liệu bài thuốc
        this.thuviensachService.getSach(1).subscribe(data => {

            this.DsSach = data.DsSach.DsSach;
            this.TongSoLuongSach = data.DsSach.TongSoLuong;
            this.startSach = 0;
            this.endSach = 50;
        });

        this.thuviensachService.getTailieu(1).subscribe(data => {

            this.DsTaiLieu = data.DsTaiLieu.DsTaiLieu;
            this.TongSoLuongTaiLieu = data.DsTaiLieu.TongSoLuong;
            this.startTaiLieu = 0;
            this.endTaiLieu = 50;
        });

        this.thuviensachService.getGhichep(1).subscribe(data => {

            this.DsGhiChep = data.DsGhiChep.DsGhiChep;
            this.TongSoLuongGhiChep = data.DsGhiChep.TongSoLuong;
            this.startGhiChep = 0;
            this.endGhiChep = 50;
        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'thuvientailieu') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'thuvientailieu';

    }
    onScrollSach() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuongSach / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.thuviensachService.getSach(this.page).subscribe(data => {
                for (let i = 0; i < data.DsSach.DsSach.length; i++) {
                    this.DsSach.push(data.DsSach.DsSach[i]);

                }
                this.endSach = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endSach === this.DsSach.length) {
            this.scrollLoading = false;
        }



    }
        onScrollTaiLieu() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuongTaiLieu / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.thuviensachService.getTailieu(this.page).subscribe(data => {
                for (let i = 0; i < data.DsTaiLieu.DsTaiLieu.length; i++) {
                    this.DsTaiLieu.push(data.DsTaiLieu.DsTaiLieu[i]);

                }
                this.endTaiLieu = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endTaiLieu === this.DsTaiLieu.length) {
            this.scrollLoading = false;
        }



    }
        onScrollGhiChep() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuongGhiChep / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.thuviensachService.getGhichep(this.page).subscribe(data => {
                for (let i = 0; i < data.DsGhiChep.DsGhiChep.length; i++) {
                    this.DsGhiChep.push(data.DsGhiChep.DsGhiChep[i]);

                }
                this.endGhiChep = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endGhiChep === this.DsGhiChep.length) {
            this.scrollLoading = false;
        }



    }
}
