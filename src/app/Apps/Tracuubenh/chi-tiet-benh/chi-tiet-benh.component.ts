import { Component, OnInit, Input } from '@angular/core';
import { BenhService } from '../../../Share/Services/benh.service';
import { ShareButton, ShareProvider } from 'ngx-sharebuttons';

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
    ChiTietBenh: any;
    constructor(private benhService: BenhService) { }

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
    }

    show(id) {
        this.loading = true;
        if (this.ChiTietBenh == null || this.ChiTietBenh.id !== id) {
            this.benhService.getChiTietBenh(id.toString()).subscribe(data => {
                this.ChiTietBenh = data;
                console.log(this.loading);
                this.loading = false;
            });
        }
    }


}
