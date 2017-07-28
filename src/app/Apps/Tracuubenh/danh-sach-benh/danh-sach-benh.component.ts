import { BenhService } from '../../../Share/Services/benh.service';
import { Benh } from '../../../Share/Services/benh.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { FormControl } from '@angular/forms';
import { SettingService } from '../../../Share/Services/setting.service';


@Component({
    selector: 'app-danh-sach-benh',
    templateUrl: './danh-sach-benh.component.html',
    styleUrls: ['./danh-sach-benh.component.css']
})
export class DanhSachBenhComponent implements OnInit {

    @Output() showBenh = new EventEmitter<number>();

    menu: any;
    iconText: any;
    name: any;
    elements: any;

    DsBenh: Benh[];
    TongSoLuong: number;
    startBenh: number;
    endBenh: number;
    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl();
    public id: any;
    public loading = false;
    public empty = false;
    public showChiTiet = false;
    public loadMore = false;
    public isSearch = false;
    public page = 1;
    constructor(
        private benhService: BenhService,
        private settingService: SettingService
    ) {
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe((event) => {
                this.doSearch(event);
                console.log(event);
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
    }

    doSearch(text: string) {
        if (text === '') {
            this.isSearch = false;
            this.benhService.getBenh(1).subscribe(data => {
                this.DsBenh = data.DsBenh;
                this.TongSoLuong = data.TongSoLuong;
                this.startBenh = (this.page - 1) * 50;
                this.endBenh = this.page * 50;
            });
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

     clickBenh(id: number) {
        this.showBenh.emit(id);
    }

    onScroll() {
        if (this.isSearch || this.page > this.TongSoLuong / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.benhService.getBenh(this.page).subscribe(data => {
                for (let i = 0; i < data.DsBenh.length; i++) {
                    this.DsBenh.push(data.DsBenh[i]);
                }
                this.startBenh = (this.page - 1) * 50;
                this.endBenh = this.page * 50;
                this.loadMore = false;
            });
        }
    }
}
