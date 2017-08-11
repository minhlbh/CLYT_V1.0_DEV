import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../Share/Components/share.module';
import { HttpModule } from '@angular/http';

// components
import { NghiencuuYhocComponent } from './NghiencuuYhoc.component';
import { DanhSachNghienCuuComponent } from './danh-sach-nghien-cuu/danh-sach-nghien-cuu.component';

// services
import { NghiencuuService } from '../../Share/Services/nghiencuu.service';


const routing: Routes = [
    { path: '', component: NghiencuuYhocComponent },

];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        Routing,
        HttpModule,
        ShareModule
    ],
    declarations: [
        NghiencuuYhocComponent,
        DanhSachNghienCuuComponent
    ],
    providers: [
        NghiencuuService
    ]
})
export class NghiencuuYhocModule { }
