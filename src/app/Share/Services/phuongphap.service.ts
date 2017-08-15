import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PhuongphapService {
    constructor(private http: Http) { }
    private phuongphapUrl = `${environment.apiUrl}/CSDLYT/PhuongPhap_List`;
    getPhuongphap(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.phuongphapUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchPhuongphap(key: String) {
        const searchUrl = `${this.phuongphapUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

}

export interface Phuongphap {
    id: number;
    Name: string;
    TrangThai: string;
}
