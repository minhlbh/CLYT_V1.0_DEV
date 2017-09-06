import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';
import { TaomoiService } from '../../../Share/Services/taomoi.service';


@Component({
    selector: 'app-taomoi',
    templateUrl: './Taomoi.component.html',
    styleUrls: ['./Taomoi.component.css']
})
export class TaomoiComponent implements OnInit {
    public form = new FormGroup({
        Sql_Id: new FormControl(),
        Ten: new FormControl(),
        TomTat: new FormControl(),
        ThongTin: new FormControl(),
        TenBenh: new FormControl(),
    });
    fb: FormBuilder;
    public icon: any;

    constructor(
        private taomoiService: TaomoiService
    ) {}
    ngOnInit() {
    }
    create() {
        this.form.controls['Sql_Id'].setValue('49200');
        this.form.controls['TomTat'].setValue('rat nguy hiem');
        console.log(this.form.value);
        this.taomoiService.create(this.form).subscribe(data => {
            console.log(data);
        });
    }
}
