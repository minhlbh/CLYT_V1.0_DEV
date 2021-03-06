// module
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Routes, RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ResponsiveModule } from 'ng2-responsive';
import { FacebookModule } from 'ngx-facebook';
import { ShareModule } from '../../Share/Components/share.module';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

// components
import { TracuubenhComponent } from './Tracuubenh.component';
import { BaoCaoComponent } from './bao-cao/bao-cao.component';
import { DanhSachBenhComponent } from './danh-sach-benh/danh-sach-benh.component';
import { ChiTietBenhComponent } from './chi-tiet-benh/chi-tiet-benh.component';
import { ChiTietBenhMongoComponent } from './chi-tiet-benh/chi-tiet-benh-mongo/chi-tiet-benh-mongo.component';
import { ForumBarComponent } from './forum-bar/forum-bar.component';
import { TaomoiComponent } from './Taomoi/Taomoi.component';
import { ChinhsuaComponent } from './chinh-sua/chinhsua.component';
import { LoadDuLieuImgComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-img/load-du-lieu-img.component';
import { LoadDuLieuTextComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-text/load-du-lieu-text.component';
import { LoadDuLieuLinkComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-link/load-du-lieu-link.component';
import { LoadDuLieuYoutubeComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-youtube/load-du-lieu-youtube.component';

// services
import { BenhService } from '../../Share/Services/benh.service';
import { ForumService } from '../../Share/Services/forum.service';
import { TaomoiService } from '../../Share/Services/taomoi.service';




const routing: Routes = [
    { path: '', component: TracuubenhComponent },
    { path: 'taomoi', component: TracuubenhComponent },
    { path: ':id', component: TracuubenhComponent },
    { path: ':id/baocao', component: BaoCaoComponent },
    { path: ':id/chinhsua', component: ChinhsuaComponent },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        InfiniteScrollModule,
        FormsModule,
        ReactiveFormsModule,
        ResponsiveModule,
        HttpModule,
        FacebookModule.forRoot(),
        ShareButtonsModule.forRoot(),
        Routing,
        ShareModule,
        NguiAutoCompleteModule
    ],
    declarations: [
        TracuubenhComponent,
        DanhSachBenhComponent,
        TaomoiComponent,
        ChinhsuaComponent,
        ChiTietBenhMongoComponent,
        // ChiTietBenhComponent,
        // WindowComponent,
        // LoadDuLieuImgComponent,
        // LoadDuLieuTextComponent,
        // LoadDuLieuLinkComponent,
        // LoadDuLieuYoutubeComponent,
        // ForumBarComponent,
        BaoCaoComponent
    ],
    providers: [
        BenhService,
        ForumService,
        TaomoiService
    ]
})
export class TracuubenhModule { }
