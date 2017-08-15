import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { Routes, RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { ResponsiveModule } from 'ng2-responsive';

// components
import { NghiencuuYhocComponent } from './NghiencuuYhoc.component';
import { DanhSachNghienCuuComponent } from './danh-sach-nghien-cuu/danh-sach-nghien-cuu.component';

// services
import { NghiencuuService } from '../../Share/Services/nghiencuu.service';
import { ShareModule } from '../../Share/Components/share.module';

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
