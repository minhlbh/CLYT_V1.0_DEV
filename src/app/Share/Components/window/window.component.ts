import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'app-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
    @Input() name;
    @Input() icon;
    @Input() url;
    private route: string;
    constructor(
        private router: Router,
        private location: Location,
        private r: ActivatedRoute
    ) {}

    ngOnInit() {
    }

    back() {
        console.log(this.url);
        this.router.navigate([this.url]);
    }
}
