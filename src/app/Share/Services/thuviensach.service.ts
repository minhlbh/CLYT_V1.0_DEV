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
    getTailieu(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.tailieuUrl}?Trang=${page}&soluongmoitrang=50`)
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

}
