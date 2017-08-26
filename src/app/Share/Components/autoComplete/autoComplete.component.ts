import { FormControl, NgControl, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Injectable, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { AutoCompleteService } from '../../Services/autoComplete.service';
import { Benh } from '../../Services/benh.service';
import { element } from 'protractor';



@Component({
    selector: 'app-autocomplete',
    templateUrl: './autoComplete.component.html',
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '(document:click)': 'handleClick($event)',
    },
    styleUrls: ['./autoComplete.component.css']
})

export class AutoCompleteComponent implements OnInit {
    @Input() apiUrl;
    @Output() ReturnData = new EventEmitter();

    public isSearch = false;
    public empty = false;
    public loading = false;
    searchKey = new FormControl('');
    public filteredList = [];
    public elementRef;
    public NameList = [];
    ReturnDataList: any;
    TongSoLuong: number;
    endBenh: number;

    constructor(
        private AutoCompleteService: AutoCompleteService,
        myElement: ElementRef
    ) {
        this.elementRef = myElement;
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe((event) => {
                this.doSearchAuto(event);
                // this.filter();
                // this.clickThuoc(null);
            });
    }

    ngOnInit() {
    }

    doSearchAuto(text: string) {
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.AutoCompleteService.autoComplete('', this.apiUrl).subscribe(data => {
                console.log(data);
                this.ReturnDataList = data;
                this.ReturnDataList.forEach(element => {
                    this.NameList.push(element.Name);
                });
            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.AutoCompleteService.autoComplete(text, this.apiUrl).subscribe(data => {
                this.ReturnDataList = data;
                this.ReturnDataList.forEach(element => {
                    this.NameList.push(element.Name);
                });

                // if (this.DsBenh.length === 0 ) {
                //     this.empty = true;
                // } else {
                //     this.empty = false;
                // }
                // this.loading = false;
            });
        }
    }

    // filter() {
    //     if (this.searchKey.value !== '') {
    //         console.log(this.NameList);
    //         this.filteredList = this.NameList.filter(function (el) {
    //             return el.toLowerCase().indexOf((this.searchKey.value).toLowerCase()) > -1;
    //         }.bind(this));
    //         console.log(this.filteredList);
    //     } else {
    //         this.filteredList = [];
    //     }
    // }

    select(item) {
        this.searchKey.setValidators = item;
        this.NameList = [];
        this.ReturnData.emit(this.ReturnDataList);
    }

    handleClick(event) {
        let clickedComponent = event.target;
        let inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.NameList = [];
        }
    }
}

