import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class TaomoiService {

constructor(private http: Http) { }
create(form: FormGroup) {
    const body = new URLSearchParams();
    body.set('Ten', form.controls['TenBenh'].value);
    body.set('ThongTin', form.controls['ThongTin'].value);

    return this.http.post(`http://api.truongkhoa.com/api/CSDLYT/Benh_Create`, body).map((response: Response) => response.json());
}
}
