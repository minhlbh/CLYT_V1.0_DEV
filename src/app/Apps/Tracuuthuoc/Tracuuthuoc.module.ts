import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracuuthuocComponent } from './Tracuuthuoc.component';
import { DanhSachThuocComponent } from './danh-sach-thuoc/danh-sach-thuoc.component';
import {RouterModule, Routes} from '@angular/router';
import { WindowComponent } from '../../Share/Components/window/window.component';






const routing: Routes = [
    { path: '', component: TracuuthuocComponent },
    { path: ':id', component: TracuuthuocComponent },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        Routing
    ],
    declarations: [TracuuthuocComponent,
        DanhSachThuocComponent,
        WindowComponent
    ]
})
export class TracuuthuocModule {

}
