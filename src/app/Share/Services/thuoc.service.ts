import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ThuocService {

    constructor(private http: Http) { }
    private thuocUrl = `${environment.apiUrl}/CSDLYT/Thuoc_List`;
    getThuoc(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.thuocUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}

export class Thuoc {

    constructor(
        public id: number,
        public Name: string,
        public Hang: string,
        public Nuoc: string,
        public DongGoi: string,
        public HoatChat: string,
        public DuongDung: string,
        public HamLuong: string,



    ) { }

}
