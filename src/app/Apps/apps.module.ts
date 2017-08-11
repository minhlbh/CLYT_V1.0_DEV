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
import { BaithuocComponent } from './Baithuoc/Baithuoc.component';


const routing: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' },

            { path: 'tracuuthuoc', loadChildren: './Tracuuthuoc/Tracuuthuoc.module#TracuuthuocModule' },
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
        // WindowComponent
        BaithuocComponent,
    ],
    providers: [
        SettingService
    ]
})
export class AppsModule { }
