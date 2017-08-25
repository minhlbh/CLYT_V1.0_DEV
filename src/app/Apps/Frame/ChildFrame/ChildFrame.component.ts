import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-childframe',
    templateUrl: './ChildFrame.component.html',
    styleUrls: ['./ChildFrame.component.css']
})
export class ChildFrameComponent implements OnInit {
    @Input('Prop') Prop;
    loadding = true;

    constructor() {
        window.addEventListener('message', (e) => {
            this.receiveMessage(e);
        }, false);
    }

    ngOnInit() {
        this.loadding = true;
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
