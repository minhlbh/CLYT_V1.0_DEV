import { Component, OnInit, AfterViewInit, ViewChild , ElementRef, TemplateRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';

@Component({
    selector: 'app-frame',
    templateUrl: './Frame.component.html',
    styleUrls: ['./Frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit {
    @ViewChild('iframe') iframe: ElementRef;
    winInfo: any;
    url: string;
    screens: any;

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
    ngAfterViewInit() {
        console.log('frame');
        const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
        if (typeof doc.addEventListener !== 'undefined') {
            doc.addEventListener('click', this.iframeClickHandler, false);
        } else if (typeof doc.attachEvent !== 'undefined') {
            doc.attachEvent('onclick', this.iframeClickHandler);
        }
        console.log(doc);

    }

    iframeClickHandler() {
        alert('Iframe clicked');
    }


    receiveMessage(event: any) {
        if (event.origin === 'http://api.truongkhoa.com') {
            console.log(event);
            // console.log(JSON.parse(event.data));
        }
    }
}
