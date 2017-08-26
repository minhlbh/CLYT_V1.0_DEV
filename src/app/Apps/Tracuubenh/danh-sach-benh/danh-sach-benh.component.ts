import { BenhService } from '../../../Share/Services/benh.service';
import { Benh } from '../../../Share/Services/benh.service';
import { SettingService } from '../../../Share/Services/setting.service';

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


import { ActivatedRoute, Router } from '@angular/router';
import { AutoCompleteComponent } from '../../../Share/Components/autoComplete/autoComplete.component';
import { AutoCompleteService } from '../../../Share/Services/autoComplete.service';

@Component({
    selector: 'app-danh-sach-benh',
    templateUrl: './danh-sach-benh.component.html',
    styleUrls: ['./danh-sach-benh.component.css']
})
export class DanhSachBenhComponent implements OnInit {
    menu: any;
    iconText: any;
    name: any;
    elements: any;
    idea: any;
    urlIdea: any;
    apiUrl: any;
    idIdea: any;
    autoComplete: any;
    // lấy từ benh.service
    DsBenh: Benh[];
    TongSoLuong: number;
    startBenh: number;
    endBenh: number;
    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl('');
    public id: any;
    public loading = false;
    public scrollLoading = false;
    public empty = false;
    public showChiTiet = false;
    public loadMore = false;
    public isSearch = false;
    public page = 1;
    public url: any;
    public loadingGif = false;
    term: any;
    constructor(
        // nhớ khai báo service
        private benhService: BenhService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private settingService: SettingService,
        private AutoCompleteService: AutoCompleteService,
        private titleService: Title
    ) {
        this.searchKey.valueChanges
        .debounceTime(1000)
        .subscribe((event) => {
            this.term = this.searchKey.value;
            console.log(this.term);
            this.doSearch(event);
        });
    }

    ngOnInit() {
        // Hàm lấy dữ liệu bệnh
        this.benhService.getBenh(1).subscribe(data => {
            this.DsBenh = data.DsBenh;
            this.TongSoLuong = data.TongSoLuong;
            this.endBenh = 50;
        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'tracuubenh') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuubenh';
        this.apiUrl = 'Benh_Search';

    }
    // navigate to chi-tiet-benh url with id
    clickBenh(id) {
        this.router.navigate(['tracuubenh/', id]);
    }

    // load more onscroll
    onScroll() {
        this.scrollLoading = true;
        this.loadingGif = false;
        if (this.isSearch || this.page > this.TongSoLuong / 50) {
            return;
        } else {
            this.loadMore = true;
            this.loadingGif = true;
            this.page++;
            this.benhService.getBenh(this.page).subscribe(data => {
                for (let i = 0; i < data.DsBenh.length; i++) {
                    this.DsBenh.push(data.DsBenh[i]);

                }
                this.endBenh = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                if (this.endBenh > this.DsBenh.length) {
                    this.endBenh = this.DsBenh.length;
                }
            });
        }
        if (this.endBenh === this.DsBenh.length) {
            this.scrollLoading = false;
        }
    }

    // get autocomplete bệnh
    getAutoComplete(data) {
        console.log(data);
        this.DsBenh = data;
    }

    // do search bệnh
    doSearch(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.benhService.getBenh(1).subscribe(data => {
                this.DsBenh = data.DsBenh;
                this.TongSoLuong = data.TongSoLuong;
                this.endBenh = this.page * 50;
            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(() => {
                this.benhService.getSearchBenh(text).subscribe(data => {
                    this.DsBenh = data.DsBenh;
                    this.TongSoLuong = data.TongSoLuong;
                    this.endBenh = data.TongSoLuong;
                    if (this.DsBenh.length === 0 && this.TongSoLuong === 0) {
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

