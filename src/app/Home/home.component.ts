import { Component, OnInit } from '@angular/core';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    options: MasonryOptions = {
        transitionDuration: '0.3s'
    };
    bricks = [
        { title: 'Brick 1', col: 1, row: 2 },
        { title: 'Brick 2', col: 1, row: 1 },
        { title: 'Brick 3', col: 2, row: 2 },
        { title: 'Brick 4', col: 1, row: 1 },
        { title: 'Brick 5', col: 1, row: 1 },
        { title: 'Brick 6', col: 1, row: 1 }
    ];
    constructor() { }

    ngOnInit() {
    }

}
