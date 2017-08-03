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
    ConfirmPassword: FormControl = new FormControl();
    elements: any;
    constructor(
        private settingService: SettingService,
        private router: Router,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
    }

    ngOnInit() {
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
