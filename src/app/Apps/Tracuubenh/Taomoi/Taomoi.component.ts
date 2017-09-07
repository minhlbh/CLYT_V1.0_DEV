import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';
import { TaomoiService } from '../../../Share/Services/taomoi.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'app-taomoi',
    templateUrl: './Taomoi.component.html',
    styleUrls: ['./Taomoi.component.css']
})
export class TaomoiComponent implements OnInit {
    public form = new FormGroup({
        Sql_Id: new FormControl(),
        ThongTin: new FormControl(),
        TenBenh: new FormControl(),
    });
    public icon: any;
    public name: string;
    public url: any;

    constructor(
        private taomoiService: TaomoiService,
        private router: Router,
        private activedroute: ActivatedRoute,
    ) {}
    ngOnInit() {
        this.name = 'Tạo mới bệnh';
        this.icon = '../../../../assets/images/plus-black-symbol.svg';
        this.url = 'apps/tracuubenh';

    }
    create(form: FormGroup) {
        console.log(form.value);
        
        this.taomoiService.create(form).subscribe(data => {
            console.log(data);

        });
    }
    back() {
        this.router.navigate(['apps/tracuubenh']);
    }
}
