import { ThuocService } from '../../../Share/Services/thuoc.service';
import { Thuoc } from '../../../Share/Services/thuoc.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { SettingService } from '../../../Share/Services/setting.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-danh-sach-thuoc',
    templateUrl: './danh-sach-thuoc.component.html',
    styleUrls: ['./danh-sach-thuoc.component.css']
})
export class DanhSachThuocComponent implements OnInit {
    [x: string]: any;
    menu: any;
    idea: any;
    urlIdea: any;
    idIdea: any;
    iconText: any;
    name: any;

    DsThuoc: Thuoc[];
    TongSoLuong: number;
    startThuoc: number;
    endThuoc: number;
    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl('');
    public id: any;
    public url: any;

    public loading = false;
    public scrollLoading = false;
    public empty = false;
    public showChiTiet = false;
    public loadMore = false;
    public isSearch = false;
    public page = 1;



    constructor(
        private thuocService: ThuocService,
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
        // Hàm lấy dữ liệu thuốc
        this.thuocService.getThuoc(1).subscribe(data => {
            this.DsThuoc = data.DsThuoc.DsThuoc;
            this.TongSoLuong = data.DsThuoc.TongSoLuong;

            this.startThuoc = 0;
            this.endThuoc = 50;
        });
        this.menu = this.settingService.getMenu();
        for (let i = 0; i < this.menu.length; i++) {
            for (let x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'tracuuthuoc') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuuthuoc';


    }
    // search thuốc
    doSearch(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.thuocService.getThuoc(1).subscribe(data => {
                this.DsThuoc = data.DsThuoc.DsThuoc;
                this.TongSoLuong = data.DsThuoc.TongSoLuong;
                this.startThuoc = (this.page - 1) * 50;
                this.endThuoc = this.page * 50;
            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(() => {
                this.thuocService.getSearchThuoc(text).subscribe(data => {
                    console.log(data);
                    this.DsThuoc = data.DsThuoc.DsThuoc;
                    this.TongSoLuong = data.DsThuoc.TongSoLuong;
                    this.startThuoc = 0;
                    this.endThuoc = data.DsThuoc.TongSoLuong;
                    if (this.DsThuoc.length === 0 && this.TongSoLuong === 0) {
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
    clickThuoc(id) {
        this.router.navigate(['tracuuthuoc/', id]);

    }
    // load more onscroll
    onScroll() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuong / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.thuocService.getThuoc(this.page).subscribe(data => {
                for (let i = 0; i < data.DsThuoc.DsThuoc.length; i++) {
                    this.DsThuoc.push(data.DsThuoc.DsThuoc[i]);

                }
                this.endThuoc = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endThuoc === this.DsThuoc.length) {
            this.scrollLoading = false;
        }
        console.log(this.scrollLoading);

    }


}

