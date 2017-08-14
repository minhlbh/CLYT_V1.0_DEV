import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-bantinhl7',
    templateUrl: './Bantinhl7.component.html',
    styleUrls: ['./Bantinhl7.component.css']
})
export class Bantinhl7Component implements OnInit {

    constructor() {
        window.addEventListener('message', (e) => {
            this.receiveMessage(e);
        }, false);
    }

    ngOnInit() {

    }

    receiveMessage(event: any) {
        // console.log(JSON.parse(event.data));
    }

    frameClick() {
        console.log('frClick');
    }
}
