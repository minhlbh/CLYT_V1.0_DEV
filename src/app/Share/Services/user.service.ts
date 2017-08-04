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

    // register
    register(name, email, phone, password) {
        // tslint:disable-next-line:prefer-const
        let body = new URLSearchParams();
        body.set('HoVaTen', name);
        body.set('Email', email);
        body.set('Phone', phone);
        body.set('Password', password);

        return this.http.post(`${this.baseUrl}Account/Register`, body).map((response: Response) => response.json());
    }

    // verify
    verifyCode(code, phone, idUser) {
        // tslint:disable-next-line:prefer-const
        let body = new URLSearchParams();
        body.set('Code', code);
        body.set('PhoneNumber', phone);
        return this.http.post(`${this.baseUrl}Account/XacNhanPhone?IdU=` + idUser, body).map((response: Response) => response.json());
    }

    // forgot pass
    forgotPassword(phone) {
        // tslint:disable-next-line:prefer-const
        let body = new URLSearchParams();
        body.set('Phone', phone);
        return this.http.post(`${this.baseUrl}Account/ForgotPassword`, body).map((response: Response) => response.json());
    }

    // change pass
    changePass(newPass, code, phone, idU) {
        // tslint:disable-next-line:prefer-const
        let body = new URLSearchParams();
        body.set('PhoneNumber', phone);
        body.set('Code', code);
        body.set('Password', newPass);
        return this.http.post(`${this.baseUrl}Account/ForgotPassword?IdU=` + idU, body).map((response: Response) => response.json());
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


    // get & set user for social login


}
