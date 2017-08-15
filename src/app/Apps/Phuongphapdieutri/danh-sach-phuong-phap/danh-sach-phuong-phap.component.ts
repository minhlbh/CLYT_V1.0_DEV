import { PhuongphapService } from '../../../Share/Services/phuongphap.service';
import { Phuongphap } from '../../../Share/Services/phuongphap.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { SettingService } from '../../../Share/Services/setting.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-danh-sach-phuong-phap',
    templateUrl: './danh-sach-phuong-phap.component.html',
    styleUrls: ['./danh-sach-phuong-phap.component.css']
})
export class DanhSachPhuongPhapComponent implements OnInit {
    [x: string]: any;
    menu: any;
    idea: any;
    urlIdea: any;
    idIdea: any;
    iconText: any;
    name: any;

    DsPhuongPhap: Phuongphap[];
    TongSoLuong: number;
    startPhuongphap: number;
    endPhuongphap: number;
    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl('');
    public id: any;
    public url: any;

    public loading = false;
    public scrollLoading = false;
    public empty = false;
    public loadMore = false;
    public isSearch = false;
    public page = 1;

    constructor(

        private phuongphapService: PhuongphapService,
        private router: Router,
        private settingService: SettingService,
        private activedroute: ActivatedRoute,

    ) {
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe((event) => {
                this.doSearch(event);
                // this.clickThuoc(null);
            });
    }

    ngOnInit() {
        // Hàm lấy dữ liệu
        this.phuongphapService.getPhuongphap(1).subscribe(data => {
            this.DsPhuongPhap = data.DsPhuongPhap.DsPhuongPhap;
            this.TongSoLuong = data.DsPhuongPhap.TongSoLuong;

            this.startPhuongphap = 0;
            this.endPhuongphap = 50;
        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'phuongphapdieutri') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'phuongphapdieutri';


    }
    // search phương pháp
    doSearch(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.phuongphapService.getPhuongphap(1).subscribe(data => {
                this.DsPhuongPhap = data.DsPhuongPhap.DsPhuongPhap;
                this.TongSoLuong = data.DsPhuongPhap.TongSoLuong;
                this.startPhuongphap = (this.page - 1) * 50;
                this.endPhuongphap = this.page * 50;
            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(() => {
                this.phuongphapService.getSearchPhuongphap(text).subscribe(data => {
                    this.DsPhuongPhap = data.DsPhuongPhap.DsPhuongPhap;
                    this.TongSoLuong = data.DsPhuongPhap.TongSoLuong;
                    this.startPhuongphap = 0;
                    this.endPhuongphap = data.DsPhuongPhap.TongSoLuong;
                    if (this.DsPhuongPhap.length === 0 && this.TongSoLuong === 0) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                    this.loading = false;
                });
            }, 1500);
        }
    }
    // navigate to chi-tiet-thuoc url with id
    clickPhuongPhap(id) {
        this.router.navigate(['phuongphapdieutri/', id]);

    }
    // load more onscroll
    onScroll() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuong / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.phuongphapService.getPhuongphap(this.page).subscribe(data => {
                for (let i = 0; i < data.DsPhuongPhap.DsPhuongPhap.length; i++) {
                    this.DsPhuongPhap.push(data.DsPhuongPhap.DsPhuongPhap[i]);

                }
                this.endPhuongphap = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endPhuongphap === this.DsPhuongPhap.length) {
            this.scrollLoading = false;
        }


    }


}
