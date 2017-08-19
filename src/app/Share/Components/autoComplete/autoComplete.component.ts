import { FormControl, NgControl, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';

import { AutoCompleteService } from '../../Services/autoComplete.service';
import { BenhService, Benh } from '../../Services/benh.service';
import { ThuocService, Thuoc } from '../../Services/thuoc.service';

import { CompleterData, CompleterService } from 'ng2-completer';
import { Subject } from 'rxjs/Subject';



@Component({
    selector: 'app-autocomplete',
    templateUrl: './autoComplete.component.html',
    styleUrls: ['./autoComplete.component.css']
})

export class AutoCompleteComponent implements OnInit {
    searchData: any;
    protected dataService: CompleterData;
    public isSearch = false;
    DsBenh: Benh[];
    TongSoLuong: number;
    public loading = false;
    searchUpdate: Subject<string> = new Subject<string>();
    searchKey = new FormControl('');
    public empty = false;
    startBenh: number;
    endBenh: number;


    constructor(
        private AutoCompleteService: AutoCompleteService,
        private benhService: BenhService,
        private completerService: CompleterService) {
        this.dataService = completerService.local(this.searchData, 'color', 'color');
        this.searchKey.valueChanges
        .debounceTime(1000)
        .subscribe((event) => {
            this.doSearchAutoBenh(event);
            // this.clickThuoc(null);p
        });
    }
@Injectable()

    ngOnInit() {
    }
    // autocomplete benh

    doSearchAutoBenh(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.benhService.getBenh(1).subscribe(data => {
                this.DsBenh = data.DsBenh.DsBenh;
                this.TongSoLuong = data.DsBenh.TongSoLuong;
                console.log(this.DsBenh);

            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(() => {
                this.benhService.getSearchBenh(text).subscribe(data => {
                    this.DsBenh = data.DsBenh.DsBenh;
                    this.TongSoLuong = data.DsBenh.TongSoLuong;
                    this.startBenh = 0;
                    this.endBenh = data.DsBenh.TongSoLuong;
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

