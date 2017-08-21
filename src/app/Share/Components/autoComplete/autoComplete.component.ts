import { FormControl, NgControl, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Injectable, Input } from '@angular/core';

import { AutoCompleteService } from '../../Services/autoComplete.service';
import { CompleterData, CompleterService } from 'ng2-completer';
import { Subject } from 'rxjs/Subject';
import { Benh } from '../../Services/benh.service';



@Component({
    selector: 'app-autocomplete',
    templateUrl: './autoComplete.component.html',
    styleUrls: ['./autoComplete.component.css']
})

export class AutoCompleteComponent implements OnInit {
    @Input() apiUrl;

    protected dataService: CompleterData;
    protected dataSource;
    public isSearch = false;
    public empty = false;
    public loading = false;

    DsBenh: Benh[];
    searchKey = new FormControl('');
    searchUpdate: Subject<string> = new Subject<string>();
    searchData: any;
    TongSoLuong: number;
    startBenh: number;
    endBenh: number;


    constructor(
        private AutoCompleteService: AutoCompleteService,
        private completerService: CompleterService) {
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe((event) => {
                this.doSearchAuto(event);
                console.log(this.doSearchAuto(event));

            });


    }

    ngOnInit() {
    }

    doSearchAuto(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.AutoCompleteService.autoComplete('', this.apiUrl);
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            this.AutoCompleteService.autoComplete(text, this.apiUrl).subscribe(data => {
                this.DsBenh = data.DsBenh;
                console.log(this.DsBenh);
                this.TongSoLuong = data.TongSoLuong;
                this.endBenh = data.TongSoLuong;
                this.dataService = this.completerService.local(this.DsBenh, 'Name', 'Name');
                console.log(this.dataService);
                if (this.DsBenh.length === 0 && this.TongSoLuong === 0) {
                    this.empty = true;
                } else {
                    this.empty = false;
                }
                this.loading = false;
            });
        }
        const returnData = JSON.stringify(this.dataService);
        return returnData;
    }
}

