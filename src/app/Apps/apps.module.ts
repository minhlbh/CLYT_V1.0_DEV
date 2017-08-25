import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgControl } from '@angular/forms';
import { ResponsiveModule } from 'ng2-responsive';
import { ShareButtonsModule } from 'ngx-sharebuttons';

import { ChildFrameComponent } from './Frame/ChildFrame/ChildFrame.component';
import { ChiTietBenhComponent } from './Tracuubenh/chi-tiet-benh/chi-tiet-benh.component';
import { BenhService } from '../Share/Services/benh.service';

// components
import { LayoutComponent } from './Layout/Layout.component';
import { NavComponent } from './Layout/nav/nav.component';
import { LeftMenuComponent } from './Layout/left-menu/left-menu.component';
import { EmptyComponent } from '../Share/Components/empty/empty.component';

// service
import { SettingService } from '../Share/Services/setting.service';
import { ShareModule, } from '../Share/Components/share.module';

const routing: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' },
            { path: 'chuyenkhoa', loadChildren: './Chuyenkhoa/Chuyenkhoa.module#ChuyenkhoaModule' },
            { path: 'baithuocvithuoc', loadChildren: './Tracuubaithuoc/Tracuubaithuoc.module#TracuubaithuocModule' },
            { path: 'chandoanhinhanh', loadChildren: './Chandoanhinhanh/Chandoanhinhanh.module#ChandoanhinhanhModule' },
            { path: 'hoichantructuyen', loadChildren: './Hoichantructuyen/Hoichantructuyen.module#HoichantructuyenModule' },
            { path: 'tracuuthuoc', loadChildren: './Tracuuthuoc/Tracuuthuoc.module#TracuuthuocModule' },
            { path: 'bantinhl7', loadChildren: './Bantinhl7/Bantinhl7.module#Bantinhl7Module' },
            { path: 'nghiencuuyhoc', loadChildren: './NghiencuuYhoc/NghiencuuYhoc.module#NghiencuuYhocModule' },
            { path: 'tracuuthietbiyte', loadChildren: './ThietbiYte/ThietbiYte.module#ThietbiYteModule' },
            { path: 'f/:route', loadChildren: './Frame/Frame.module#FrameModule' },
            { path: 'phuongphapdieutri', loadChildren: './Phuongphapdieutri/phuongphapdieutri.module#PhuongphapdieutriModule' },
            { path: 'thuvientailieu', loadChildren: './Thuviensach/Thuviensach.module#ThuviensachModule' },
            // { path: '**', loadChildren: './Dashboard/Dashboard.module#DashboardModule' },
        ],
    },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        ResponsiveModule,
        Routing,
        FormsModule,
        FlexLayoutModule,
        ShareModule,
<<<<<<< HEAD
=======
        ShareButtonsModule.forRoot()
>>>>>>> master

    ],
    declarations: [
        LayoutComponent,
        NavComponent,
        EmptyComponent,
        LeftMenuComponent,
<<<<<<< HEAD
=======
        // ChildFrameComponent
>>>>>>> master

    ],
    providers: [
        SettingService,
<<<<<<< HEAD

=======
        BenhService
    ],
    entryComponents: [
        ChildFrameComponent,
        ChiTietBenhComponent
>>>>>>> master
    ]
})
export class AppsModule { }
