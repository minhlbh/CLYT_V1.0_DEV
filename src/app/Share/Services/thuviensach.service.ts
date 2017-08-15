import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ThuviensachService {

    constructor(private http: Http) { }
    private sachUrl = `${environment.apiUrl}/CSDLYT/Sach_List`;
    private tailieuUrl = `${environment.apiUrl}/CSDLYT/TaiLieu_List`;
    private ghichepUrl = `${environment.apiUrl}/CSDLYT/GhiChep_List`;

    getSach(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.sachUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchSach(key: String) {
        const searchUrl = `${this.sachUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


    }


    getTailieu(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.tailieuUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchTailieu(key: String) {
        const searchUrl = `${this.tailieuUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


    getGhichep(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.ghichepUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getSearchGhichep(key: String) {
        const searchUrl = `${this.ghichepUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(searchUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
export class Thuviensach {

    constructor(
        public id: number,
        public Name: string,
        public DanhGia: number,
        public Anh: string,
        public LinkDownload: string,
        public TomTat: string,
        public NhaXuatBan: string,
        public ChungLoai: string,
        public NguoiGhiChep: string,
        public IdNguoiGhiChep: string,
        public AvatarNguoiGhiChep: string,
        public NguoiChiaSe: string,
        public IdNguoiChiaSe: string,
        public AvatarNguoiChiaSe: string,


    ) { }

}
