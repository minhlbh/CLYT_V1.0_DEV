import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TracuuthuocComponent } from './Tracuuthuoc.component';
import { DanhSachThuocComponent } from './danh-sach-thuoc/danh-sach-thuoc.component';
// import { WindowComponent } from '../../Share/Components/window/window.component';
import { ShareModule } from '../../Share/Components/share.module';
import { ThuocService } from '../../Share/Services/thuoc.service';







const routing: Routes = [
    { path: '', component: TracuuthuocComponent },
    { path: ':id', component: TracuuthuocComponent },
];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        ShareModule,
        HttpModule,
        Routing,

    ],
    declarations: [TracuuthuocComponent,
        DanhSachThuocComponent,
        // WindowComponent
    ],
    providers: [
        ThuocService,
    ]
})
export class TracuuthuocModule {

}
