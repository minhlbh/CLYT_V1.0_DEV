import { BenhService } from '../../../Share/Services/benh.service';
import { Benh } from '../../../Share/Services/benh.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { SettingService } from '../../../Share/Services/setting.service';
import { Router } from '@angular/router';

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
    constructor(
        private benhService: BenhService,
        private router: Router,
        private settingService: SettingService
    ) {
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe((event) => {
                this.doSearch(event);
                // this.clickBenh(null);
            });
    }

    ngOnInit() {
        this.benhService.getBenh(1).subscribe(data => {
            this.DsBenh = data.DsBenh;
            this.TongSoLuong = data.TongSoLuong;
            this.startBenh = 0;
            this.endBenh = 50;
        });
        this.menu = this.settingService.getMenu();
        this.iconText = this.menu[0].items[0].IconText;
        this.name = this.menu[0].items[0].Ten;
        this.url = 'apps';
        this.idea = true ;
        this.urlIdea = 'tracuubenh';
    }
    // search bệnh
    doSearch(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.benhService.getBenh(1).subscribe(data => {
                this.DsBenh = data.DsBenh;
                this.TongSoLuong = data.TongSoLuong;
                this.startBenh = (this.page - 1) * 50;
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
                    this.startBenh = 0;
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
    // navigate to chi-tiet-benh url with id
    clickBenh(id) {
        this.router.navigate(['tracuubenh/', id]);
    }

    // load more onscroll
    onScroll() {
        this.scrollLoading = true;
        console.log(this.scrollLoading);
        if (this.isSearch || this.page > this.TongSoLuong / 50) {
            return;
        } else {
            this.loadMore = true;
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
}

