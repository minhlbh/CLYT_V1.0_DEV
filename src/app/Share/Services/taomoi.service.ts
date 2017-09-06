import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class TaomoiService {

constructor(private http: Http) { }
create(form: FormGroup) {
    let body = new URLSearchParams();
    // tslint:disable-next-line:prefer-const
    let data = JSON.parse(form.value);
    console.log(form.value);
    body.set('Ten', data.TenBenh);
    body.set('Sql_Id', data.Sql_Id);
    body.set('ThongTin', data.ThongTin);
    body.set('TomTat', data.TomTat);


    return this.http.post(`http://api.truongkhoa.com/api/CSDLYT/Benh_Create`, data).map((response: Response) => response.json());
}
}
