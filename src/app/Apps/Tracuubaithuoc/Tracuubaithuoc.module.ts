import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ResponsiveModule } from 'ng2-responsive';


import { TracuubaithuocComponent } from './Tracuubaithuoc.component';
import { ShareModule } from '../../Share/Components/share.module';
import { BaithuocService } from '../../Share/Services/baithuoc.service';
import { DanhSachBaiThuocComponent } from './danh-sach-bai-thuoc/danh-sach-bai-thuoc.component';


const routing: Routes = [
    { path: '', component: TracuubaithuocComponent },
    { path: ':id', component: DanhSachBaiThuocComponent },
];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ShareButtonsModule.forRoot(),
        Routing,
        ShareModule
    ],
    declarations: [
        TracuubaithuocComponent
    ],
    providers: [
        BaithuocService,
    ]

})
export class TracuubaithuocModule { }
