import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ResponsiveModule } from 'ng2-responsive';


// components
import { LayoutComponent } from './Layout/Layout.component';
import { NavComponent } from './Layout/nav/nav.component';
import { LeftMenuComponent } from './Layout/left-menu/left-menu.component';
import { EmptyComponent } from '../Share/Components/empty/empty.component';

// service
import { SettingService } from '../Share/Services/setting.service';
// import { WindowComponent } from '../Share/Components/window/window.component';
import { ShareModule } from '../Share/Components/share.module';


const routing: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' },
            { path: 'baithuocvithuoc', loadChildren: './Tracuubaithuoc/Tracuubaithuoc.module#TracuubaithuocModule' },
            { path: 'chandoanhinhanh', loadChildren: './Chandoanhinhanh/Chandoanhinhanh.module#ChandoanhinhanhModule' },
            { path: 'tracuuthuoc', loadChildren: './Tracuuthuoc/Tracuuthuoc.module#TracuuthuocModule' },
            { path: 'bantinhl7', loadChildren: './Bantinhl7/Bantinhl7.module#Bantinhl7Module' },
            { path: 'nghiencuuyhoc', loadChildren: './NghiencuuYhoc/NghiencuuYhoc.module#NghiencuuYhocModule' },

            { path: '**', component: EmptyComponent },
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
        ShareModule
    ],
    declarations: [
        LayoutComponent,
        NavComponent,
        EmptyComponent,
        LeftMenuComponent,
    ],
    providers: [
        SettingService
    ]
})
export class AppsModule { }
