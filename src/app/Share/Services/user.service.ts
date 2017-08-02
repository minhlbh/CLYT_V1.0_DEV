import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response } from '@angular/http';

@Injectable()
export class UserService {
    authToken: String = null;
    tokenType: string = null;
    private baseUrl = `${environment.apiUrl}`;

    constructor(private http: Http) { }

    // login
    login(username, password) {
        // tslint:disable-next-line:prefer-const
        let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', 'password');
        return this.http.post(`http://api.truongkhoa.com/token`, body).map((response: Response) => response.json());
    }

    // get & set token/localToken
    setTokenType(token_type: string) {
        this.tokenType = token_type;
        localStorage.setItem('token_type', token_type);
    }
    setAuthToken(token: string) {
        this.authToken = token;
        localStorage.setItem('token', token);
    }
    getLocalToken() {
        return localStorage.getItem('token') ? localStorage.getItem('token') : null;
    }

    getLocalTokenType() {
        return localStorage.getItem('token_type') ? localStorage.getItem('token_type') : null;
    }

    setAuth(data) {
        localStorage.setItem('auth', JSON.stringify(data));
    }

    getAuth() {
        return JSON.parse(localStorage.getItem('auth'));
    }

    refreshToken() {
        return localStorage.setItem('auth', null);
    }

}
