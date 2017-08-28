import { Component, OnInit, Input } from '@angular/core';
import { BenhService, Benh } from '../../../Share/Services/benh.service';
import { ShareButton, ShareProvider, ShareButtonsModule } from 'ngx-sharebuttons';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MetadataService } from 'ng2-metadata';

@Component({
    selector: 'app-chi-tiet-benh',
    templateUrl: './chi-tiet-benh.component.html',
    styleUrls: ['./chi-tiet-benh.component.css']
})
export class ChiTietBenhComponent implements OnInit {
    @Input()
    set idBenh(idBenh: any) {
        this.show(idBenh);
    }
    // @Input() set tenBenh(tenBenh: string){
    // }
    gPlusButton: any;
    fbButton: any;
    loading = true;
    id: string;
    ChiTietBenh: any;
    url: string;
    name: any;
    link: any;
    title: any;
    description: any;
    constructor(
        private benhService: BenhService,
        private router: Router,
        private metadataService: MetadataService,
        private titleService: Title,
    ) {
    }
    ngOnInit() {
        // this.fbButton = new ShareButton(
        //     ShareProvider.FACEBOOK,
        //     '<i class="fa fa-facebook"></i>',
        //     'facebook'
        // );
        // this.gPlusButton = new ShareButton(
        //     ShareProvider.GOOGLEPLUS,
        //     '<i class="fa fa-google-plus"></i>',
        //     'google'
        // );
        this.url = 'apps/tracuubenh'; // (this.router.url).substring(0, (this.router.url).lastIndexOf('/'));

    }

    show(id) {
        this.loading = true;
        if (this.ChiTietBenh == null || this.ChiTietBenh.id !== id) {
            this.benhService.getChiTietBenh(id).subscribe(data => {
                this.ChiTietBenh = data;
                this.name = data.TenBenh;
                this.description = data.TomTat;
                this.titleService.setTitle('Cloud Y Tế - ' + this.name);
                this.loading = false;
                this.metadataService.setTitle('Cloud Y Tế - ' + this.name);
                this.metadataService.setTag('og:title ', this.name);
                this.metadataService.setTag('og:description ', this.description);
            });
        }
    }
}
