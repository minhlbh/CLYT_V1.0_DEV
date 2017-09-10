import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Output } from '@angular/core';
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
        this.form.valueChanges.subscribe(data => {
            {
                console.log(data);

            }
        });
    }

    log(event: string) {
        console.log(event);
        // this.form.setValue({ 'TenBenh': this.form.controls['TenBenh'].value , 'ThongTin': event});
        this.form.controls['ThongTin'].setValue(event);
    }

    create() {
        console.log(this.form.value);
        this.taomoiService.create(this.form).subscribe(data => {
            console.log(data);
        });
    }

    back() {
        this.router.navigate(['apps/tracuubenh']);
    }
}
