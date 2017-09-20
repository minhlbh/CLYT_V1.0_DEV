import {
    Component, OnInit, AfterViewInit,
    ComponentFactory, ComponentFactoryResolver, ViewChild, ElementRef, TemplateRef,
    ViewContainerRef, Inject
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChiTietBenhComponent } from '../Tracuubenh/chi-tiet-benh/chi-tiet-benh.component';
import { ChildFrameComponent } from '../Frame/ChildFrame/ChildFrame.component';

@Component({
    selector: 'app-layout',
    templateUrl: './Layout.component.html',
    styleUrls: ['./Layout.component.css']
})
export class LayoutComponent implements OnInit {
    loadding = true;
    LinkIFrame = 'http://admincloud.truongkhoa.com/Home/Dashboard';
    @ViewChild('alertContainer', { read: ViewContainerRef }) container;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private router: Router,
        private activatedroute: ActivatedRoute
    ) {
        window.addEventListener('message', (e) => {
            this.receiveMessage(e);
        }, false);
    }

    ngOnInit() {
        this.activatedroute.params.subscribe(pars => {
            if (this.router.url.includes('/apps/share') && pars['key']) {
                this.LinkIFrame = `http://admincloud.truongkhoa.com/Home/Dashboard?share=${pars['key']}`;
            }
            if (this.router.url.includes('/apps/data') && pars['key']) {
                this.LinkIFrame = `http://admincloud.truongkhoa.com/Home/Dashboard?data=${pars['key']}`;
            }
        });
    }


    receiveMessage(event: any) {
        try {
            const messData = JSON.parse(event.data);
            if (messData.LoaiLenh === 'CloseFrame') {
                this.removeComponent(messData.ManHinh);
            }
        } catch (e) {

        }

        if (event.origin === 'http://api.truongkhoa.com' || event.origin === 'http://admincloud.truongkhoa.com') {

            const messData = JSON.parse(event.data);
            let componentFactory = null;
            let dyynamicComponent = null;

            // idBenh
            if (messData.LoaiLenh === 'LoadFrame') {
                if (messData.TrangThai === 'EndLoad') {
                    this.loadding = false;
                }
            } else if (messData.LoaiLenh === 'Chi tiết bệnh') {
                this.removeComponent(messData.ManHinh);
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChiTietBenhComponent);
                dyynamicComponent = <ChiTietBenhComponent>this.container.createComponent(componentFactory).instance;
                dyynamicComponent.idBenh = messData.IdBenh;
                if (!messData.IdBenh) {
                    dyynamicComponent.idBenh = messData.TenBenh;
                }
            } else {
                this.removeComponent(messData.ManHinh);
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

    removeComponent(i: number) {
        if (i === 1) {
            this.container.clear();
        } else {
            for (i; i <= this.container.length; i++) {
                this.container.detach(i);
            }
        }

    }
}
