import { Component, OnInit, Input } from '@angular/core';
import { BenhService } from '../../../Share/Services/benh.service';
import { ShareButton, ShareProvider } from 'ngx-sharebuttons';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chi-tiet-benh',
    templateUrl: './chi-tiet-benh.component.html',
    styleUrls: ['./chi-tiet-benh.component.css']
})
export class ChiTietBenhComponent implements OnInit {
    @Input() set idBenh(idBenh: number) {
        this.show(idBenh);
    }
    gPlusButton;
    fbButton;
    loading = true;
    id: string;
    ChiTietBenh: any;
    url: string;
    constructor(
        private benhService: BenhService,
        private router: Router
    ) {}

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
        this.url = 'apps/tracuubenh'; // (this.router.url).substring(0, (this.router.url).lastIndexOf('/'));
    }

    show(id) {
        this.loading = true;
        if (this.ChiTietBenh == null || this.ChiTietBenh.id !== id) {
            this.benhService.getChiTietBenh(id.toString()).subscribe(data => {
                this.ChiTietBenh = data;
                this.loading = false;
            });
        }
    }


}
