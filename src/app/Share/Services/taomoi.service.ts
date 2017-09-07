import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class TaomoiService {

constructor(private http: Http) { }
create(form: FormGroup) {
    const body = new URLSearchParams();
    console.log(form.value);

    // tslint:disable-next-line:prefer-const
    let data = JSON.parse(form.value);
    body.set('Ten', data.TenBenh);
    body.set('ThongTin', data.ThongTin);

    return this.http.post(`http://api.truongkhoa.com/api/CSDLYT/Benh_Create`, data).map((response: Response) => response.json());
}
}
