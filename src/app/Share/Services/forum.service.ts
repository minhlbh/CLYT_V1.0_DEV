import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ForumService {

constructor(private http: Http) { }
getForumBar(): Observable<any> {
        // ...using get request
        return this.http.get(`http://api.truongkhoa.com/api/Forum`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

export class BaiViet {

    constructor(
        public TieuDe: string,
        public ChuDe: string,
        public TomTat: string,
        public NguoiViet: string


    ) { }

}
