import { NghiencuuService } from '../../../Share/Services/nghiencuu.service';
import { Nghiencuu } from '../../../Share/Services/nghiencuu.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { SettingService } from '../../../Share/Services/setting.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-danh-sach-nghien-cuu',
    templateUrl: './danh-sach-nghien-cuu.component.html',
    styleUrls: ['./danh-sach-nghien-cuu.component.css']
})
export class DanhSachNghienCuuComponent implements OnInit {
    [x: string]: any;
    menu: any;
    idea: any;
    urlIdea: any;
    idIdea: any;
    iconText: any;
    name: any;

    DsNghienCuu: Nghiencuu[];
    TongSoNghienCuu: any;
    startNghiencuu: number;
    endNghiencuu: number;
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
        private nghiencuuService: NghiencuuService,
        private router: Router,
        private settingService: SettingService,
        private activedroute: ActivatedRoute,
    ) {
        // this.searchKey.valueChanges
        //     .debounceTime(1000)
        //     .subscribe((event) => {
        //         this.doSearch(event);
        //         // this.clickThuoc(null);
        //     });
    }

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
    // doSearch(text: string) {
    //     // no keyword catched => return all
    //     if (text === '') {
    //         this.isSearch = false;
    //         this.nghiencuuService.getNghiencuu(1).subscribe(data => {
    //             this.DsNghienCuu = data.DsNghienCuu.DsNghienCuu;
    //             this.TongSoLuong = data.DsNghienCuu.TongSoLuong;
    //             this.startNghiencuu = (this.page - 1) * 50;
    //             this.endNghiencuu = this.page * 50;
    //         });
    //         // return search results
    //     } else {
    //         this.isSearch = true;
    //         this.loading = true;
    //         this.searchUpdate.next(text);
    //         setTimeout(() => {
    //             this.nghiencuuService.getSearchNghiencuu(text).subscribe(data => {
    //                 this.DsNghienCuu = data.DsNghienCuu.DsNghienCuu;
    //                 this.TongSoLuong = data.DsNghienCuu.TongSoLuong;
    //                 this.startNghiencuu = 0;
    //                 this.endNghiencuu = data.DsNghienCuu.TongSoLuong;
    //                 if (this.DsNghienCuu.length === 0 && this.TongSoLuong === 0) {
    //                     this.empty = true;
    //                 } else {
    //                     this.empty = false;
    //                 }
    //                 this.loading = false;
    //             });
    //         }, 1500);
    //     }
    // }
    // // navigate to chi-tiet-nghien-cuu url with id
    // clickNghiencuu(id) {
    //     this.router.navigate(['nghiencuuyhoc/', id]);

    // }
    // // load more onscroll
    // onScroll() {
    //     this.scrollLoading = true;

    //     if (this.isSearch || this.page > this.TongSoLuong / 50) {
    //         return;
    //     } else {
    //         this.loadMore = true;
    //         this.page++;
    //         this.nghiencuuService.getNghiencuu(this.page).subscribe(data => {
    //             for (let i = 0; i < data.DsNghienCuu.DsNghienCuu.length; i++) {
    //                 this.DsNghienCuu.push(data.DsNghienCuu.DsNghienCuu[i]);

    //             }
    //             this.endThuoc = this.page * 50;
    //             this.loadMore = false;
    //             this.loading = false;
    //             // if (this.endThuoc > this.DsThuoc.length) {
    //             //     this.endThuoc = this.DsThuoc.length;

    //             // }

    //         });



    //     }
    //     if (this.endNghiencuu === this.DsNghienCuu.length) {
    //         this.scrollLoading = false;
    //     }

    // }
}
