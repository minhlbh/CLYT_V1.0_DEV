import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BaithuocService {
    constructor(private http: Http) { }
    private thuocUrl = `${environment.apiUrl}/CSDLYT/DongY_BaiThuoc_List`;
    getBaithuoc(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.thuocUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


}

export class Baithuoc {

    constructor(
        public id: number,
        public Name: string,


    ) {

    }

}
