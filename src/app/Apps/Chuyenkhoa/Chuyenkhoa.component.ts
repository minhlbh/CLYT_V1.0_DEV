import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-chuyenkhoa',
    templateUrl: './Chuyenkhoa.component.html',
    styleUrls: ['./Chuyenkhoa.component.css']
})
export class ChuyenkhoaComponent implements OnInit {

    constructor(
        private router: Router,
        private activatedroute: ActivatedRoute
    ) { }

    ngOnInit() {
    }

}
