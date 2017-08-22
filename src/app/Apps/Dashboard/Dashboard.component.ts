import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './Dashboard.component.html',
    styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    loadding = true;
    LinkIFrame = 'http://admincloud.truongkhoa.com/Home/Dashboard';
    constructor() {
        window.addEventListener('message', (e) => {
            this.receiveMessage(e);
        }, false);
    }

    ngOnInit() {
    }
    receiveMessage(event: any) {
        // console.log(event.origin);
        try {
            const messData = JSON.parse(event.data);
            if (messData.LoaiLenh === 'LoadFrame') {
                if (messData.TrangThai === 'EndLoad') {
                    this.loadding = false;
                }
            }
        } catch (e) { }
    }
}
