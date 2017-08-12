import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ThietbiyteService {
    constructor(private http: Http) { }
    private baseUrl = `${environment.apiUrl}/CSDLYT/ThietBiYTe_List`;
    getThietbi(page): Observable<any> {
        // ...using get request
        return this.http.get(`${this.baseUrl}?Trang=${page}&soluongmoitrang=50`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


}

export interface ThietbiYte {
    id: number;
    name: string;
}
