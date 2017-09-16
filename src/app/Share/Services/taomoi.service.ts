import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TaomoiService {

    constructor(private http: Http) { }

    create(form: FormGroup) {
        const body = new URLSearchParams();
        body.set('Ten', form.controls['TenBenh'].value);
        body.set('ThongTin', form.controls['ThongTin'].value);

        return this.http.post(`http://api.truongkhoa.com/api/CSDLYT/Benh_Create`, body).map((response: Response) => response.json());
    }

    loadChiTietBenhMongo(id: string) {
        return this.http.get(`http://api.truongkhoa.com/api/DD/ChiTietBenhMongo?id=${id}`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    editBenh(form: FormGroup) {
        const body = new URLSearchParams();
        body.set('id', form.controls['id'].value);
        body.set('Ten', form.controls['TenBenh'].value);
        body.set('ThongTin', form.controls['ThongTin'].value);

        return this.http.post(`http://api.truongkhoa.com/api/DD/EditBenh`, body).map((response: Response) => response.json());
    }
}
