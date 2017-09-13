import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { group } from '@angular/animations';
import { TaomoiService } from '../../../Share/Services/taomoi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { element } from 'protractor';

@Component({
    selector: 'app-taomoi',
    templateUrl: './Taomoi.component.html',
    styleUrls: ['./Taomoi.component.css']
})
export class TaomoiComponent implements OnInit {
    form = new FormGroup({
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
        private http: Http,
        private fb: FormBuilder
    ) { }
    ngOnInit() {
        this.name = 'Tạo mới bệnh';
        this.icon = '../../../../assets/images/plus-black-symbol.svg';
        this.url = 'apps/tracuubenh';
        this.form = this.fb.group({
            TenBenh: ['', [Validators.required, Validators.minLength(2)]],
            ThongTin: ['', Validators.required]
        });
    }

    setValue(event: string) {
        this.form.controls['ThongTin'].setValue(event);
    }

    create() {
        const _imgArr = localStorage.getItem('textEditor.imgData') ? localStorage.getItem('textEditor.imgData') : null;
        console.log(_imgArr);
        const imgArr = JSON.parse(_imgArr);
        const thong_tin = this.form.controls['ThongTin'].value;
        let imgDeleted = [];
        imgArr.forEach(element => {
            if (thong_tin.indexOf(element) === -1) {
                imgDeleted = [...imgDeleted, element];
                console.log('xoa', imgDeleted);
            }
        });
        if (imgDeleted.length > 0) {

            this.http.post('http://api.truongkhoa.com/api/DD/DeleteImg', imgDeleted).subscribe(
            rs => {
                rs.json();
            },
            err => {
                    console.log(err);
            });
        }
        this.taomoiService.create(this.form).subscribe(data => {
            console.log(data);
            this.taomoiService.loadChiTietBenhMongo(data).subscribe(rs => {
                console.log(rs);
            });
        });
    }

    back() {
        this.router.navigate(['apps/tracuubenh']);
    }
}
