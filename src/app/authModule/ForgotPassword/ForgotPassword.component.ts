import { SettingService } from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../../Share/Services/user.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-forgotpassword',
    templateUrl: './ForgotPassword.component.html',
    styleUrls: ['./ForgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    elements: any;
    phone: FormControl = new FormControl();

    constructor(
        private settingService: SettingService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
    }

    ngOnInit() {
    }

    forgotPass() {
        console.log(this.phone.value);
        this.userService.forgotPassword(this.phone.value).subscribe(
            (data) => {
                console.log(data.mess);
                this.router.navigate(['auth/changePass', data.IdU, this.phone.value]);
            },
            err => {
                // tslint:disable-next-line:no-unused-expression
                this;
                // alert("so dien thoai loi")
            }
        );
    }
}
