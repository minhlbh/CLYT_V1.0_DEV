import {AuthService} from 'angular2-social-login';
import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../Share/Services/setting.service';
import { FormControl } from '@angular/forms';
import { UserService } from '../../Share/Services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './Register.component.html',
    styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
    error: string = null;
    name: FormControl = new FormControl();
    phone: FormControl = new FormControl();
    email: FormControl = new FormControl();
    password: FormControl = new FormControl();

    elements: any;
    public user;
    sub: any;
    socialLogin: boolean;

    constructor(
        private settingService: SettingService,
        private router: Router,
        private _auth: AuthService,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
    }

    ngOnInit() {
    }

    // login social network
    signIn(provider) {
        this.sub = this._auth.login(provider).subscribe(
            (data) => {
                console.log(data);
                this.user = data;
                if (this.user !== null) {
                    this.socialLogin = true;
                    this.router.navigate(['auth/phone']);
                } else {
                    this.socialLogin = false;
                }
            }
        );
    }

    registerSubmit() {
        this.userService.register(this.name.value, this.email.value, this.phone.value, this.password.value).subscribe(
            (data) => {
                console.log(data);

                this.router.navigate(['auth/verify', data.Id, data.Phone, data.Code]);
            },
            err => {
                const errOb = JSON.parse(err.text());
                console.log('error:', errOb.error_description);
                this.error = errOb.error_description;
            }
        );
    }
}
