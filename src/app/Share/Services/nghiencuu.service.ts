import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class NghiencuuService {
    constructor(private http: Http) { }
    private nghiencuuUrl = `${environment.apiUrl}/CSDLYT/NghienCuu_List`;
    getNghiencuu(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.nghiencuuUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchNghiencuu(key: String) {
        const searchUrl = `${this.nghiencuuUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }



}

export interface Nghiencuu {
    id: number;
    Name: string;
    ChuNhiem: string;
    DonVi: string;
}
