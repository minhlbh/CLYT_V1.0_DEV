import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracuuthuocComponent } from './Tracuuthuoc.component';
import { DanhSachThuocComponent } from './danh-sach-thuoc/danh-sach-thuoc.component';
import { Routes } from '@angular/router';
import { WindowComponent } from '../../Share/Components/window/window.component';






const routing: Routes = [
    { path: '', component: TracuuthuocComponent },
    { path: ':id', component: TracuuthuocComponent },
];


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TracuuthuocComponent,
        DanhSachThuocComponent,
        WindowComponent
    ]
})
export class TracuuthuocModule {

}
