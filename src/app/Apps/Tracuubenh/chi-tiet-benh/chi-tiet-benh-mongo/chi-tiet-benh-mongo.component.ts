import { Component, OnInit, Input } from '@angular/core';
import { BenhService } from '../../../../Share/Services/benh.service';
import { Router } from '@angular/router';
import { MetadataService } from 'ng2-metadata';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chi-tiet-benh-mongo',
  templateUrl: './chi-tiet-benh-mongo.component.html',
  styleUrls: ['./chi-tiet-benh-mongo.component.css']
})
export class ChiTietBenhMongoComponent implements OnInit {

    @Input()
    set idBenh(idBenh: any) {
        this.show(idBenh);
    }
    loading = true;
    ChiTietBenh: any;
    url: string;
    name: any;
    id: any;
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
            this.benhService.getChiTietBenhMongo(id).subscribe(data => {
                this.ChiTietBenh = data;
                this.id = data._id;
                console.log(data);
                this.loading = false;
                this.metadataService.setTitle('Cloud Y Tế - ' + data.TenBenh);
                // this.metadataService.setTag('description', data.TomTat);

            });
        }
    }

    edit() {
        this.router.navigate([`apps/tracuubenh/${this.id}/chinhsua`]);
    }
}
