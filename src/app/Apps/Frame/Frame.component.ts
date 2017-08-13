import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';

@Component({
    selector: 'app-frame',
    templateUrl: './Frame.component.html',
    styleUrls: ['./Frame.component.css']
})
export class FrameComponent implements OnInit {

    winInfo: any;
    // frameUrl: string;
    // frameWidth: any;
    url: string;
    constructor(
        private router: Router,
        private activatedroute: ActivatedRoute,
        private settingService: SettingService,
    ) {
        this.activatedroute.params.subscribe(pars => {
            this.url = pars['route'];
            const menus = this.settingService.getMenu();
            menus.forEach(m => {
                m.items.forEach(e => {
                    if (e.url === this.url) {
                        this.winInfo = e;
                        console.log(this.winInfo);
                        // this.frameUrl = e.LinkIFrame;
                        // this.frameWidth = e.DoRong;
                    }
                });
            });
        });
        window.addEventListener('message', (e) => {
            this.receiveMessage(e);
        }, false);
    }

    ngOnInit() {
    }

    receiveMessage(event: any) {
        if (event.origin === 'http://api.truongkhoa.com') {
            console.log(event);
            // console.log(JSON.parse(event.data));
        }
    }
}
