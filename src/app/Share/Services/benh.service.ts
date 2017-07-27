import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {environment} from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BenhService {

constructor(private http: Http) { }
    private benhUrl = `${environment.apiUrl}benh?soluongmoitrang=50`;
    getBenh(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.benhUrl}&Trang=${page}`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getSearchBenh(key: String) {
        const searchUrl = `${this.benhUrl}&SearchTerm=${key}`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

    getChiTietBenh(id: string): Observable<any> {
        const chiTietBenhUrl = `${environment.apiUrl}benh/${id}`;
        // ...using get request
        return this.http.get(chiTietBenhUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

export class Benh {

    constructor(
        public id: number,
        public Name: string,

    ) { }

}
