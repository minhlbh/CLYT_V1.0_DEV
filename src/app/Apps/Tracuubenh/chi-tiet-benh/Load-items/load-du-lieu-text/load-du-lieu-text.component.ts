import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-load-du-lieu-text',
    templateUrl: './load-du-lieu-text.component.html',
    styleUrls: ['./load-du-lieu-text.component.css']
})
export class LoadDuLieuTextComponent implements OnInit {
    @Input() dulieuText: string;
    constructor() { }

    ngOnInit() {
    }

}
