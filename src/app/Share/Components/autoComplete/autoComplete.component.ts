import { FormControl, NgControl, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Injectable, Input, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { AutoCompleteService } from '../../Services/autoComplete.service';
import { Benh } from '../../Services/benh.service';
import { element } from 'protractor';
import { Observable } from 'rxjs/Rx';



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
    @Input() term;
    @Output() ReturnData = new EventEmitter();

    public isSearch = false;
    private _matches: Array<any> = [];
    private _active: any;
    public empty = false;
    public loading = false;
    public elementRef;
    public NameList: Array<any> = [];
    ReturnDataList: any;
    TongSoLuong: number;
    endBenh: number;

    constructor(
        private AutoCompleteService: AutoCompleteService,
        myElement: ElementRef
    ) {
        this.elementRef = myElement;

    }

    ngOnInit() { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnChanges() {
        console.log(this.term);
        this.doSearchAuto(this.term);
        this.setActive(this.NameList[0]);
        this.hide();
    }

    // catch keyboard event
    @HostListener('keyup', ['$event'])
    onChange(e: KeyboardEvent) {
        console.log(e.keyCode);

        // esc
        if (e.keyCode === 27) {
            this.hide();
        }

        // up
        if (e.keyCode === 38) {
            this.prevActiveMatch();
        }

        // down
        if (e.keyCode === 40) {
            this.nextActiveMatch();
            return;
        }

    }

    private isActive(value: any): boolean {
        return this._active === value;
    }

    private setActive(value: any) {
        this._active = value;
    }

    private hide() {
        this.NameList = [];
    }

    public prevActiveMatch() {
        const index = this.NameList.indexOf(this._active);
        this._active = this.NameList[index - 1 < 0 ? this.NameList.length - 1 : index - 1];
    }

    public nextActiveMatch() {
        const index = this.NameList.indexOf(this._active);
        this._active = this.NameList[index + 1 > this.NameList.length - 1 ? 0 : index + 1];
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
                this.setActive(this.NameList[0]);
            });
            // return search results
        } else {
            this.isSearch = true;
            this.loading = true;
            this.AutoCompleteService.autoComplete(text, this.apiUrl).subscribe(data => {
                if (data === []) {
                    this.NameList.push('Không có kết quả');
                } else {
                    this.ReturnDataList = data;
                    this.ReturnDataList.forEach(element => {
                        this.NameList.push(element.Name);
                    });
                    this.setActive(this.NameList[0]);
                }
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
        this._active = item;
        this.NameList = [];
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

