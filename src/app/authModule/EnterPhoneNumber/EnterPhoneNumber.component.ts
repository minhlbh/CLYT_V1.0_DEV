import { UserService, SocialData } from '../../Share/Services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SettingService} from '../../Share/Services/setting.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-enterphonenumber',
    templateUrl: './EnterPhoneNumber.component.html',
    styleUrls: ['./EnterPhoneNumber.component.css']
})
export class EnterPhoneNumberComponent implements OnInit {
    phone: FormControl = new FormControl();
    _regInfo: SocialData;
    elements: any;
    constructor(
        private settingService: SettingService,
        private router: Router,
        private activedroute: ActivatedRoute,
        private userService: UserService
    ) {
        this.elements = this.settingService.getConfig();
        this._regInfo = {
            phone: '',
            id: '',
            email: '',
            token: '',
            isFacebook: true
        };
     }

    ngOnInit() {
    }

    SocialAddPhone() {
        // tslint:disable-next-line:prefer-const
        let _local = JSON.parse(this.userService.get_UserInfoFB());
        console.log(_local);
        this._regInfo = {
            email: _local.email,
            id: _local.id,
            token: _local.token,
            phone: this.phone.value,
            isFacebook: true
        };
        this.userService.SocialRegister(this._regInfo).subscribe(
            (data) => {
                console.log(data);
                console.log(data.Id);
                console.log(data.Code);
                console.log(data.Phone);
                this.router.navigate(['auth/verify', data.Id, data.Phone, data.Code]);
            }
        );
    }

}
