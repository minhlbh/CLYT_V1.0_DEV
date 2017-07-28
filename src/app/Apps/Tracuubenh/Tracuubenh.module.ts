// module
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Routes, RouterModule } from '@angular/router';

// components
import { TracuubenhComponent } from './Tracuubenh.component';
import { DanhSachBenhComponent } from './danh-sach-benh/danh-sach-benh.component';
import { ChiTietBenhComponent } from './chi-tiet-benh/chi-tiet-benh.component';
import { ForumBarComponent } from './forum-bar/forum-bar.component';
import { WindowComponent } from '../../Share/Components/window/window.component';
import { LoadDuLieuImgComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-img/load-du-lieu-img.component';
import { LoadDuLieuTextComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-text/load-du-lieu-text.component';
import { LoadDuLieuLinkComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-link/load-du-lieu-link.component';
import { LoadDuLieuYoutubeComponent } from '../Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-youtube/load-du-lieu-youtube.component';

// services
import { BenhService } from '../../Share/Services/benh.service';


const routing: Routes = [
    { path: '', component: TracuubenhComponent }
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        InfiniteScrollModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        Routing
    ],
    declarations: [
        TracuubenhComponent,
        DanhSachBenhComponent,
        ChiTietBenhComponent,
        WindowComponent,
        LoadDuLieuImgComponent,
        LoadDuLieuTextComponent,
        LoadDuLieuLinkComponent,
        LoadDuLieuYoutubeComponent,
        ForumBarComponent
    ],
    providers: [
        BenhService
    ]
})
export class TracuubenhModule { }
