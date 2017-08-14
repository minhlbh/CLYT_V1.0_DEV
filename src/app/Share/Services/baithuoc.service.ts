import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BaithuocService {
    constructor(private http: Http) { }
    private baithuocUrl = `${environment.apiUrl}/CSDLYT/DongY_BaiThuoc_List`;
    private vithuocUrl = `${environment.apiUrl}/CSDLYT/DongY_ViThuoc_List`;
    private chephamthuocUrl = `${environment.apiUrl}/CSDLYT/DongY_ChePhamThuoc_List`;
    private duocthienUrl = `${environment.apiUrl}/CSDLYT/DongY_DuocThien_List`;
    getBaithuoc(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.baithuocUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchBaithuoc(key: String) {
        const searchUrl = `${this.baithuocUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    getVithuoc(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.vithuocUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchVithuoc(key: String) {
        const searchUrl = `${this.vithuocUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    getChephamthuoc(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.chephamthuocUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchChephamthuoc(key: String) {
        const searchUrl = `${this.chephamthuocUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
    getDuocthien(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.duocthienUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchDuocthien(key: String) {
        const searchUrl = `${this.duocthienUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
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
