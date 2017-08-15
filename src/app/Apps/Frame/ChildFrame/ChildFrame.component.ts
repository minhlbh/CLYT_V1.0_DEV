import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-childframe',
    templateUrl: './ChildFrame.component.html',
    styleUrls: ['./ChildFrame.component.css']
})
export class ChildFrameComponent implements OnInit {
    @Input('Prop') Prop;
    constructor() { }

    ngOnInit() {
    }
    onLoadFrame() {
        console.log('load frame');
    }
}
