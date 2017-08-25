import { Component, OnInit, Input } from '@angular/core';
import { ThuocService } from '../../../Share/Services/thuoc.service';
import { ShareButton, ShareProvider } from 'ngx-sharebuttons';
import { Router } from '@angular/router';


@Component({
    selector: 'app-chi-tiet-thuoc',
    templateUrl: './chi-tiet-thuoc.component.html',
    styleUrls: ['./chi-tiet-thuoc.component.css']
})
export class ChiTietThuocComponent implements OnInit {
    // @Input() set tenBenh(tenBenh: string){

    // }
    gPlusButton;
    fbButton;
    loading = true;
    id: string;
    ChiTietThuoc: any;
    url: string;
    constructor(
        private thuocService: ThuocService,
        private router: Router
    ) { }

    ngOnInit() {
        // ShareButton(button name [provider], template, classes)
        this.fbButton = new ShareButton(
            ShareProvider.FACEBOOK,
            '<i class="fa fa-facebook"></i>',
            'facebook'
        );
        this.gPlusButton = new ShareButton(
            ShareProvider.GOOGLEPLUS,
            '<i class="fa fa-google-plus"></i>',
            'google'
        );
        this.url = 'apps/tracuuthuoc'; // (this.router.url).substring(0, (this.router.url).lastIndexOf('/'));
    }
}
