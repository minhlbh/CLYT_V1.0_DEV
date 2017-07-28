import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-chi-tiet-benh',
    templateUrl: './chi-tiet-benh.component.html',
    styleUrls: ['./chi-tiet-benh.component.css']
})
export class ChiTietBenhComponent implements OnInit {
    @Input() chiTietBenh: any;
    constructor() { }

    ngOnInit() {
    }

}
