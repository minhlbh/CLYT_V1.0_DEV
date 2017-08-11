import { AuthService } from 'angular2-social-login';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, SocialLogin } from '../../Share/Services/user.service';
import { SettingService } from '../../Share/Services/setting.service';
import { element } from 'protractor';

@Component({
    selector: 'app-signin',
    templateUrl: './SignIn.component.html',
    styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit {

    error: string = null;
    username: FormControl = new FormControl();
    password: FormControl = new FormControl();
    elements: any;
    public user: SocialLogin;
    sub: any;

    constructor(
        private router: Router,
        private settingService: SettingService,
        private _auth: AuthService,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
        this.user = {
            token: '',
            id: '',
            email: ''
        };
    }

    ngOnInit() {
    }

    // login social network
    signIn(provider) {
        this.sub = this._auth.login(provider).subscribe(
            (data) => {
                // tslint:disable-next-line:prefer-const
                let _fbdata = JSON.parse(JSON.stringify(data));
                console.log(_fbdata);
                this.user.email = _fbdata.email;
                this.user.id = _fbdata.uid;
                this.user.token = _fbdata.token;
                this.userService.checkLoginFacebook(this.user).subscribe(
                    (dataReturn) => {
                        console.log(dataReturn.access_token);
                        this.userService.setAuthToken(dataReturn.access_token);
                        this.userService.setTokenType(dataReturn.token_type);
                        this.userService.setAuth(dataReturn);
                        this.router.navigate(['apps']);
                    },
                    err => {
                        console.log(err.json());
                        if (err.json() === 'Email chưa được dùng đăng kí tài khoản nào!') {

                            this.userService.set_UserInfoFB(this.user);
                            this.router.navigate(['apps']);
                        }
                    }
                );
            });
        // if (this.user !== null) {
        //     this.socialLogin = true;

        //     this.router.navigate(['auth/phone']);
        // } else {
        //     this.socialLogin = false;
        // }
    }

    // login function
    onLoginSubmit() {
        console.log(this.username.value, this.password.value);
        this.userService.login(this.username.value, this.password.value).subscribe(
            (data) => {
                console.log(data.access_token);
                console.log(data.token_type);
                this.userService.setAuthToken(data.access_token);
                this.userService.setTokenType(data.token_type);
                this.userService.setAuth(data);
                this.router.navigate(['']);
            },
            err => {
                const errOb = JSON.parse(err.text());
                console.log('error:', errOb.error_description);
                this.error = errOb.error_description;
            }
        );
    }

}
