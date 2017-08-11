import { UserService } from '../../Share/Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-verify',
    templateUrl: './Verify.component.html',
    styleUrls: ['./Verify.component.css']
})
export class VerifyComponent implements OnInit {
    error: string = null;
    IdU: string = null;
    Phone: string = null;
    verifyCode: FormControl = new FormControl();
    elements: any;
    constructor(
        private router: Router,
        private activedroute: ActivatedRoute,
        private userService: UserService,
        private zone: NgZone,
        private settingService: SettingService,
    ) {
        this.elements = this.settingService.getConfig();
    }

    ngOnInit() {
        this.activedroute.params.subscribe(pars => {
            this.IdU = pars['IdU'];
            this.Phone = pars['phone'];
        });
    }

    verification() {
        // tslint:disable-next-line:prefer-const
        let _local = JSON.parse(this.userService.get_UserInfoFB());
        this.userService.verifyCode(this.verifyCode.value, this.Phone, this.IdU).subscribe(
            (data) => {
                console.log(data);
                this.error = data;
                if (data === 'Xác nhận Phone thành công') {
                    if (_local.isFacebook) {
                        this.userService.checkLoginFacebook(_local).subscribe(
                            (dataReturn) => {
                                console.log(dataReturn.access_token);
                                this.userService.setAuthToken(dataReturn.access_token);
                                this.userService.setTokenType(dataReturn.token_type);
                                this.userService.setAuth(dataReturn);
                                this.zone.run(() => this.router.navigate(['']));
                            });
                    } else {
                        this.router.navigate(['auth/signIn']);
                    }
                }
            });
    }
}
