import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ResponsiveModule } from 'ng2-responsive';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';


import { ShareModule } from '../../Share/Components/share.module';
import { ThuviensachComponent } from './Thuviensach.component';
import { DanhSachThuVienComponent } from './danh-sach-thu-vien/danh-sach-thu-vien.component';
import { ThuviensachService } from '../../Share/Services/thuviensach.service';

const routing: Routes = [
    { path: '', component: DanhSachThuVienComponent },

];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        ShareButtonsModule.forRoot(),
        Routing,
        ShareModule,
        InfiniteScrollModule
    ],
    declarations: [ThuviensachComponent,
        DanhSachThuVienComponent
    ],
        providers: [
        ThuviensachService,
    ]
})
export class ThuviensachModule { }
