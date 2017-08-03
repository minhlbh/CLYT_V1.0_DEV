import { AuthService } from 'angular2-social-login';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Share/Services/user.service';
import { SettingService } from '../../Share/Services/setting.service';
import { element } from 'protractor';

@Component({
    selector: 'app-signin',
    templateUrl: './SignIn.component.html',
    styleUrls: ['./SignIn.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {


    error: string = null;
    username: FormControl = new FormControl();
    password: FormControl = new FormControl();
    elements: any;
    public user;
    sub: any;

    constructor(
        private router: Router,
        private settingService: SettingService,
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
            }
        );
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
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
