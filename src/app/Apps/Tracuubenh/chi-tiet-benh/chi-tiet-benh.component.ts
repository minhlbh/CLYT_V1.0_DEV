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
    loading = true;
    ChiTietBenh: any;
    url: string;
    name: any;
    constructor(
        private benhService: BenhService,
        private router: Router,
        private metadataService: MetadataService,
        private titleService: Title,
    ) {
    }
    ngOnInit() {
        this.url = 'apps/tracuubenh'; // (this.router.url).substring(0, (this.router.url).lastIndexOf('/'));
    }

    show(id) {
        this.loading = true;
        if (this.ChiTietBenh == null || this.ChiTietBenh.id !== id) {
            this.benhService.getChiTietBenh(id).subscribe(data => {
                this.ChiTietBenh = data;
                this.loading = false;
                this.metadataService.setTitle('Cloud Y Tế - ' + data.TenBenh);
                this.metadataService.setTag('description', data.TomTat);

            });
        }
    }
}
