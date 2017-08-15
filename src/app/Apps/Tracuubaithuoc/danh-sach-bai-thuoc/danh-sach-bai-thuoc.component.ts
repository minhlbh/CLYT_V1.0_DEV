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
    [x: string]: any;
    menu: any;
    iconText: any;
    name: any;
    elements: any;
    idea: any;
    urlIdea: any;
    idIdea: any;
    TongSoLuong: number;

    DsBaiThuoc: Baithuoc[];
    startBaithuoc: number;
    endBaithuoc: number;
    TongSoLuongBaiThuoc: number;

    DsViThuoc: Baithuoc[];
    startVithuoc: number;
    endVithuoc: number;
    TongSoLuongViThuoc: number;

    DsChePhamThuoc: Baithuoc[];
    startChephamthuoc: number;
    endChephamthuoc: number;
    TongSoLuongChePhamThuoc: number;

    DsDuocThien: Baithuoc[];
    startDuocthien: number;
    endDuocthien: number;
    TongSoLuongDuocThien: number;

    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl('');

    public id: any;
    public url: any;

    public loading = false;
    public scrollLoading = false;
    public empty = false;
    public page = 1;
    public isSearch = false;
    public loadMore = false;


    constructor(

        private baithuocService: BaithuocService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private settingService: SettingService
    ) {
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe((event) => {
                this.doSearchBaiThuoc(event);
                this.doSearchViThuoc(event);
                this.doSearchChePhamThuoc(event);
                this.doSearchDuocThien(event);

                // this.clickThuoc(null);
            });

    }

    ngOnInit() {


        // Hàm lấy dữ liệu bài thuốc
        this.baithuocService.getBaithuoc(1).subscribe(data => {

            this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
            this.TongSoLuongBaiThuoc = data.DsBaiThuoc.TongSoLuong;
            this.startBaithuoc = 0;
            this.endBaithuoc = 50;
        });

        this.baithuocService.getVithuoc(1).subscribe(data => {

            this.DsViThuoc = data.DsViThuoc.DsViThuoc;
            this.TongSoLuongViThuoc = data.DsViThuoc.TongSoLuong;
            this.startVithuoc = 0;
            this.endVithuoc = 50;
        });

        this.baithuocService.getChephamthuoc(1).subscribe(data => {

            this.DsChePhamThuoc = data.DsChePhamThuoc.DsChePhamThuoc;
            this.TongSoLuongChePhamThuoc = data.DsChePhamThuoc.TongSoLuong;
            this.startChephamthuoc = 0;
            this.endChephamthuoc = 50;
        });

        this.baithuocService.getDuocthien(1).subscribe(data => {

            this.DsDuocThien = data.DsDuocThien.DsDuocThien;
            this.TongSoLuongDuocThien = data.DsDuocThien.TongSoLuong;
            this.startDuocthien = 0;
            this.endDuocthien = 50;
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
    doSearchBaiThuoc(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;

            this.baithuocService.getBaithuoc(1).subscribe(data => {
                this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
                this.TongSoLuongBaiThuoc = data.TongSoLuong;
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
                    this.TongSoLuongBaiThuoc = data.DsBaiThuoc.TongSoLuong;
                    this.startBaithuoc = 0;
                    this.endBaithuoc = data.TongSoLuong;
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

    onScrollBaiThuoc() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuongBaiThuoc / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getBaithuoc(this.page).subscribe(data => {
                for (let i = 0; i < data.DsBaiThuoc.DsBaiThuoc.length; i++) {
                    this.DsBaiThuoc.push(data.DsBaiThuoc.DsBaiThuoc[i]);

                }
                this.endBaithuoc = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endBaiThuoc === this.DsBaiThuoc.length) {
            this.scrollLoading = false;
        }



    }
    doSearchViThuoc(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;

            this.baithuocService.getVithuoc(1).subscribe(data => {
                this.DsViThuoc = data.DsViThuoc.DsViThuoc;
                this.TongSoLuongViThuoc = data.TongSoLuong;
                this.startVithuoc = (this.page - 1) * 50;
                this.endVithuoc = this.page * 50;

            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);

            console.log(this.isSearch);

            setTimeout(() => {
                this.baithuocService.getSearchVithuoc(text).subscribe(data => {
                    this.DsViThuoc = data.DsViThuoc.DsViThuoc;
                    this.TongSoLuongViThuoc = data.DsViThuoc.TongSoLuong;
                    this.startVithuoc = 0;
                    this.endVithuoc = data.TongSoLuong;
                    if (this.DsViThuoc.length === 0 && this.TongSoLuongViThuoc === 0) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                    this.loading = false;

                });
            }, 1500);
        }
    }

    onScrollViThuoc() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuongViThuoc / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getVithuoc(this.page).subscribe(data => {
                for (let i = 0; i < data.DsViThuoc.DsThuocViThuoc.length; i++) {
                    this.DsViThuoc.push(data.DsViThuoc.DsViThuoc[i]);

                }
                this.endVithuoc = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endVithuoc === this.DsViThuoc.length) {
            this.scrollLoading = false;
        }
        console.log(this.scrollLoading);


    }
    doSearchChePhamThuoc(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;

            this.baithuocService.getChephamthuoc(1).subscribe(data => {
                this.DsChePhamThuoc = data.DsChePhamThuoc.DsChePhamThuoc;
                this.TongSoLuongChePhamThuoc = data.TongSoLuong;
                this.startChephamthuoc = (this.page - 1) * 50;
                this.endChephamthuoc = this.page * 50;

            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);

            setTimeout(() => {
                this.baithuocService.getSearchChephamthuoc(text).subscribe(data => {
                    this.DsChePhamThuoc = data.DsChePhamThuoc.DsChePhamThuoc;
                    this.TongSoLuongChePhamThuoc = data.DsChePhamThuoc.TongSoLuong;
                    this.startChephamthuoc = 0;
                    this.endChephamthuoc = data.TongSoLuong;
                    if (this.DsChePhamThuoc.length === 0 && this.TongSoLuongChePhamThuoc === 0) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                    this.loading = false;

                });
            }, 1500);
        }
    }

    onScrollChePhamThuoc() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuongChePhamThuoc / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getChephamthuoc(this.page).subscribe(data => {
                for (let i = 0; i < data.DsChePhamThuoc.DsChePhamThuoc.length; i++) {
                    this.DsChePhamThuoc.push(data.DsChePhamThuoc.DsChePhamThuoc[i]);

                }
                this.endChephamthuoc = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endChephamthuoc === this.DsChePhamThuoc.length) {
            this.scrollLoading = false;
        }


    }


    doSearchDuocThien(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;

            this.baithuocService.getDuocthien(1).subscribe(data => {
                this.DsDuocThien = data.DsDuocThien.DsDuocThien;
                this.TongSoLuongDuocThien = data.TongSoLuong;
                this.startDuocthien = (this.page - 1) * 50;
                this.endDuocthien = this.page * 50;

            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);

            setTimeout(() => {
                this.baithuocService.getSearchDuocthien(text).subscribe(data => {
                    this.DsDuocThien = data.DsDuocThien.DsDuocThien;
                    this.TongSoLuongDuocThien = data.DsDuocThien.TongSoLuong;
                    this.startDuocthien = 0;
                    this.endDuocthien = data.TongSoLuong;
                    if (this.DsDuocThien.length === 0 && this.TongSoLuongDuocThien === 0) {
                        this.empty = true;
                    } else {
                        this.empty = false;
                    }
                    this.loading = false;

                });
            }, 1500);
        }
    }

    onScrollDuocThien() {
        this.scrollLoading = true;

        if (this.isSearch || this.page > this.TongSoLuongDuocThien / 50) {
            return;
        } else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getDuocthien(this.page).subscribe(data => {
                for (let i = 0; i < data.DsDuocthien.DsDuocThien.length; i++) {
                    this.DsDuocThien.push(data.DsDuocthien.DsDuocThien[i]);

                }
                this.endDuocthien = this.page * 50;
                this.loadMore = false;
                this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;

                // }

            });



        }
        if (this.endDuocthien === this.DsDuocThien.length) {
            this.scrollLoading = false;
        }



    }



}
