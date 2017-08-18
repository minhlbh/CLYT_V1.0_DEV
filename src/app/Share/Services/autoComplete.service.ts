import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AutoCompleteService {

    constructor(
        private http: Http
    ) { }
    private baseUrl = `${environment.apiUrl}`;
    autoComplete(key: String, apiUrl: string) {
        const autoCompleteUrl = `${this.baseUrl}${apiUrl}?Trang=1&searchTerm=${key}&soluongmoitrang=15`;
        return this.http.get(autoCompleteUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}
