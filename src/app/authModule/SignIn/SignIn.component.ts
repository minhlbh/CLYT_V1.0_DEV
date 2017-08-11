import { AuthService } from 'angular2-social-login';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, SocialData } from '../../Share/Services/user.service';
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
    public user: SocialData;
    sub: any;

    constructor(
        private router: Router,
        private settingService: SettingService,
        private _auth: AuthService,
        private zone: NgZone,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
        this.user = {
            token: '',
            id: '',
            email: '',
            phone: '',
            isFacebook: true
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
                // this.user = {
                //     email: _fbdata.email,
                //     id: _fbdata.id,
                //     token: _fbdata.token,
                //     phone: '',
                //     isFacebook: true
                // };
                this.user.email = _fbdata.email;
                this.user.id = _fbdata.uid;
                this.user.token = _fbdata.token;
                this.userService.checkLoginFacebook(this.user).subscribe(
                    (dataReturn) => {
                        console.log(dataReturn.access_token);
                        this.userService.setAuthToken(dataReturn.access_token);
                        this.userService.setTokenType(dataReturn.token_type);
                        this.userService.setAuth(dataReturn);
                        this.zone.run(() => this.router.navigate(['']));
                    },
                    err => {
                        console.log(err.json());
                        if (err.json() === 'Email chưa được dùng đăng kí tài khoản nào!') {
                            alert('Email chưa được dùng đăng kí tài khoản nào!');
                            this.userService.set_UserInfoFB(this.user);
                            this.zone.run(() => this.router.navigate(['/auth/phone']));
                        }
                        if (err.json() === 'Tài khoản đã được đăng ký trước đây bằng địa chỉ email này, bạn có muốn đặt lại mật khẩu????') {
                            alert('Tài khoản đã được đăng ký trước đây bằng địa chỉ email này, bạn có muốn đặt lại mật khẩu????');
                            this.userService.set_UserInfoFB(this.user);
                            this.zone.run(() => this.router.navigate(['/auth/forgotPass']));
                        }
                    }
                );
            });
    }

    // login function
    onLoginSubmit() {
        this.userService.login(this.username.value, this.password.value).subscribe(
            (data) => {
                this.userService.setAuthToken(data.access_token);
                this.userService.setTokenType(data.token_type);
                this.userService.setAuth(data);
                this.router.navigate(['']);
            },
            err => {
                const errOb = JSON.parse(err.text());
                this.error = errOb.error_description;
            }
        );
    }

}
