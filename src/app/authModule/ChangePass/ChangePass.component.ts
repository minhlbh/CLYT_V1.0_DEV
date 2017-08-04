import { UserService } from '../../Share/Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-changepass',
    templateUrl: './ChangePass.component.html',
    styleUrls: ['./ChangePass.component.css']
})
export class ChangePassComponent implements OnInit {

    elements: any;
    verifyCode: FormControl = new FormControl();
    newPassword: FormControl = new FormControl();
    confirmPassword: FormControl = new FormControl();
    IdU: string = null;
    phone: string = null;
    error: any;
    success: any;
    constructor(
        private settingService: SettingService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
    }

    ngOnInit() {
        this.activedroute.params.subscribe(pars => {
            console.log(pars['IdU']);
            this.IdU = pars['IdU'];
            this.phone = pars['phone'];
        });
    }
    changePassword() {
        if (this.newPassword.value !== this.confirmPassword.value) {
            this.error = 'Mật khẩu không phù hợp!';
        } else {
            this.userService.changePass(this.newPassword.value, this.verifyCode.value, this.phone, this.IdU).subscribe(
                (data) => {
                    console.log(data);

                    if (data.Mes === 'Thiếp lập mật khẩu mới thành công!') {
                        this.success = true;
                        // this.router.navigate(['auth/signIn']);
                    }
                });
        }
    }
}
