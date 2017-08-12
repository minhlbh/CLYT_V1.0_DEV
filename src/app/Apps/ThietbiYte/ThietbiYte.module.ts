import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { ThietbiYteComponent } from './ThietbiYte.component';
import { DanhSachThietBiYTeComponent } from './danh-sach-thiet-bi-y-te/danh-sach-thiet-bi-y-te.component';

// services
import { ThietbiyteService } from '../../Share/Services/thietbiyte.service';
import { ShareModule } from '../../Share/Components/share.module';
import { HttpModule } from '@angular/http';


const routing: Routes = [
    { path: '', component: ThietbiYteComponent },

];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        Routing,
        HttpModule,
        ShareModule
    ],
    declarations: [ThietbiYteComponent,
        DanhSachThietBiYTeComponent
    ],
    providers: [
        ThietbiyteService
    ]

})
export class ThietbiYteModule { }
