import { Component, OnInit, Input } from '@angular/core';
import { BenhService } from '../../../Share/Services/benh.service';

@Component({
    selector: 'app-chi-tiet-benh',
    templateUrl: './chi-tiet-benh.component.html',
    styleUrls: ['./chi-tiet-benh.component.css']
})
export class ChiTietBenhComponent implements OnInit {
    @Input() set idBenh(idBenh: number) {
        this.show(idBenh);
    }

    loading = true;
    ChiTietBenh: any;
    constructor(private benhService: BenhService) { }

    ngOnInit(){
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
