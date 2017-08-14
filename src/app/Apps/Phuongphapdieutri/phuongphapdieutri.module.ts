// import module
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Routes, RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ResponsiveModule } from 'ng2-responsive';

// import component

import { PhuongphapdieutriComponent } from './phuongphapdieutri.component';
import { DanhSachPhuongPhapComponent } from './danh-sach-phuong-phap/danh-sach-phuong-phap.component';
// import { WindowComponent } from '../../Share/Components/window/window.component';

import { PhuongphapService } from '../../Share/Services/phuongphap.service';
import { ForumService } from '../../Share/Services/forum.service';
import { ShareModule } from '../../Share/Components/share.module';

const routing: Routes = [
    { path: '', component: PhuongphapdieutriComponent },
    { path: ':id', component: PhuongphapdieutriComponent },
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
        ShareButtonsModule.forRoot(),
        Routing,
        ShareModule
    ],
    declarations: [
        PhuongphapdieutriComponent,
        DanhSachPhuongPhapComponent
    ],
        providers: [
        PhuongphapService,
    ]
})
export class PhuongphapdieutriModule { }
