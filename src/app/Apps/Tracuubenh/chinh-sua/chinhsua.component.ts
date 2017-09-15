import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TaomoiService } from '../../../Share/Services/taomoi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'app-chinhsua',
    templateUrl: './chinhsua.component.html',
    styleUrls: ['./chinhsua.component.css']
})
export class ChinhsuaComponent implements OnInit {

    form = new FormGroup({
        ThongTin: new FormControl(),
        TenBenh: new FormControl(),
    });
    public ThongTin: string;
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
        this.name = 'Chỉnh sửa bệnh';
        // this.icon = '../../../../assets/images/plus-black-symbol.svg';
        this.url = 'apps/tracuubenh';
        this.form = this.fb.group({
            id: ['', Validators.required],
            TenBenh: ['', [Validators.required, Validators.minLength(2)]],
            ThongTin: ['', Validators.required]
        });
        this.activedroute.params.subscribe(pars => {
            const id =  pars['id'];
            this.form.controls['id'].setValue(pars['id']);
            this.taomoiService.loadChiTietBenhMongo(id).subscribe(data => {
                this.form.patchValue({
                    TenBenh: data.TenBenh,
                    ThongTin: data.ChiTiet
                });
                this.ThongTin = data.ChiTiet;
            });
        });
    }

    setValue(event: string) {
        this.form.controls['ThongTin'].setValue(event);
    }

    edit() {
        const _imgArr = localStorage.getItem('textEditor.imgData') ? localStorage.getItem('textEditor.imgData') : null;
        if (_imgArr) {
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
        }
        console.log(this.form.value);

        this.taomoiService.editBenh(this.form).subscribe(data => {
            console.log(data);
            this.taomoiService.loadChiTietBenhMongo(data).subscribe(rs => {
                console.log(rs._id);
                this.router.navigate([`apps/tracuubenh/${rs._id}`]);
            });
        });
    }

    back() {
        this.router.navigate(['apps/tracuubenh']);
    }

}
