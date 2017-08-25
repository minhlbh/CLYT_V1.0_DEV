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
import { ChiTietThuocComponent } from './chi-tiet-thuoc/chi-tiet-thuoc.component';

import { TracuuthuocComponent } from './Tracuuthuoc.component';
import { DanhSachThuocComponent } from './danh-sach-thuoc/danh-sach-thuoc.component';
// import { WindowComponent } from '../../Share/Components/window/window.component';

import { ThuocService } from '../../Share/Services/thuoc.service';
import { ForumService } from '../../Share/Services/forum.service';
import { ShareModule } from '../../Share/Components/share.module';




const routing: Routes = [
    { path: '', component: TracuuthuocComponent },
    { path: 'chitiet', component: ChiTietThuocComponent },
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
        TracuuthuocComponent,
        DanhSachThuocComponent,
        // WindowComponent,
        ChiTietThuocComponent
    ],
    providers: [
        ThuocService,
    ]
})
export class TracuuthuocModule {

}
