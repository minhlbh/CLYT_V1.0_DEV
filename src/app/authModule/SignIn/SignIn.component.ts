import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookService, LoginResponse, InitParams } from 'ngx-facebook';
import { UserService } from '../../Share/Services/user.service';
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

    constructor(
        private router: Router,
        private settingService: SettingService,
        private fb: FacebookService,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
        // tslint:disable-next-line:prefer-const
        let initParams: InitParams = {
            appId: '1234566778',
            xfbml: true,
            version: 'v2.8'
        };

        fb.init(initParams);
    }

    ngOnInit() {
    }

    // fb login
    loginWithFacebook(): void {
        this.fb.login()
            .then((response: LoginResponse) => console.log(response))
            .catch((error: any) => console.error(error));

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
