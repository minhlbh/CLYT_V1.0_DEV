import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ResponsiveModule } from 'ng2-responsive';


// components
import { LayoutComponent } from './Layout/Layout.component';
import { NavComponent } from './Layout/nav/nav.component';
import { LeftMenuComponent } from './Layout/left-menu/left-menu.component';

// service
import { SettingService } from '../Share/Services/setting.service';


const routing: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' }
        ]
    }
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        ResponsiveModule,
        Routing,
        FormsModule,
        FlexLayoutModule
    ],
    declarations: [
        LayoutComponent,
        NavComponent,
        LeftMenuComponent
    ],
    providers: [
        SettingService
    ]
})
export class AppsModule { }
