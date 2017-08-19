import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SettingService } from '../../../Share/Services/setting.service';

@Component({
    selector: 'app-winframe',
    templateUrl: './winframe.component.html',
    styleUrls: ['./winframe.component.css']
})
export class WinframeComponent implements OnInit {

    @Input() name;
    @Input() width;
    @Input() manhinh;
    // @Output() closeWin = new EventEmitter();
    menuElements: any;

    constructor(

        private settingService: SettingService,
    ) {
        this.menuElements = this.settingService.getConfig();
    }

    ngOnInit() {
    }

    back() {
        // console.log(this.name);
        // this.router.navigate([this.url]);
        // this.closeWin.emit(this.manhinh);
        window.postMessage(
            JSON.stringify(
                {
                    LoaiLenh: 'CloseFrame',
                    ManHinh: this.manhinh
                }), '*');
    }

}
