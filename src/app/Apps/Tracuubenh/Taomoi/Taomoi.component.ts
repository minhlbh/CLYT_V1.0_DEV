import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
    selector: 'app-taomoi',
    templateUrl: './Taomoi.component.html',
    styleUrls: ['./Taomoi.component.css']
})
export class TaomoiComponent implements OnInit {

    public form = new FormGroup({
        Sql_Id: new FormControl(),
        TenBenh: new FormControl(),
        TomTat: new FormControl(),
        ThongTin: new FormControl()
    });
    fb: FormBuilder;
    constructor() {
    }

    ngOnInit() {
    }

    create() {
       console.log(this.form.value);
    }

}
