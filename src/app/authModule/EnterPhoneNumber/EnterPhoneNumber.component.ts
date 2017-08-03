import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-enterphonenumber',
    templateUrl: './EnterPhoneNumber.component.html',
    styleUrls: ['./EnterPhoneNumber.component.css']
})
export class EnterPhoneNumberComponent implements OnInit {
    phone: FormControl = new FormControl();
    constructor() { }

    ngOnInit() {
    }

}
