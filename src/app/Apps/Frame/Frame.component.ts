import {
    Component, OnInit, AfterViewInit,
    ComponentFactory, ComponentFactoryResolver, ViewChild, ElementRef, TemplateRef,
    ViewContainerRef, Inject
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SettingService } from '../../Share/Services/setting.service';
import { ChildFrameComponent } from './ChildFrame/ChildFrame.component';
import { DOCUMENT } from '@angular/common';
import { ChiTietBenhComponent } from '../Tracuubenh/chi-tiet-benh/chi-tiet-benh.component';


@Component({
    selector: 'app-frame',
    templateUrl: './Frame.component.html',
    styleUrls: ['./Frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit {
    @ViewChild('alertContainer', { read: ViewContainerRef }) container;
    @ViewChild('scrollE') private myScrollContainer: ElementRef;

    winInfo: any;
    components = [];
    url: string;
    screens: any;

    constructor(
        private router: Router,
        private activatedroute: ActivatedRoute,
        private settingService: SettingService,
        private componentFactoryResolver: ComponentFactoryResolver,
        @Inject(DOCUMENT) private document: any
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


    }



    receiveMessage(event: any) {
        if (event.origin === 'http://api.truongkhoa.com') {
            // this.container.clear();
            // console.log(event);
            console.log(JSON.parse(event.data));
            const messData = JSON.parse(event.data);
            let componentFactory = null;
            let dyynamicComponent = null;
            // idBenh
            if (messData.LoaiLenh === 'Chi tiết bệnh') {
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChiTietBenhComponent);
                dyynamicComponent = <ChiTietBenhComponent>this.container.createComponent(componentFactory).instance;
                dyynamicComponent.idBenh = messData.IdBenh;
                if (!messData.IdBenh) {
                    dyynamicComponent.idBenh = messData.TenBenh;
                }
            } else {
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChildFrameComponent);
                dyynamicComponent = <ChildFrameComponent>this.container.createComponent(componentFactory).instance;
                dyynamicComponent.Prop = messData;
            }

            // this.container.remo;
            // this.container.createComponent(componentFactory);


            // this.components = [...this.components, dyynamicComponent];
            // this.myScrollContainer.nativeElement.scrollLeft = -10000;
            // window.document.body.scrollLeft = 1000;
            // console.log(this.myScrollContainer);
            // const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance(
            //     {
            //         document: this.document,
            //         scrollTarget: '#child',
            //         verticalScrolling: false
            //     });
            // this.pageScrollService.start(pageScrollInstance);
        }
    }

    removeComponent() {
        this.container.clear();
        // const i = 3;
        // this.container.detach(i);
        // this.components.splice(i, 1);

        // console.log(this.container);
    }
    onLoadFrame() {
        console.log('load');
    }
}
