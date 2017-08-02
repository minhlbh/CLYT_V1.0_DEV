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
import { SignInComponent } from './Dangnhap+Dangky/SignIn/SignIn.component';
import { SignOutComponent } from './Dangnhap+Dangky/SignOut/SignOut.component';
import { RegisterComponent } from './Dangnhap+Dangky/Register/Register.component';
import { VerifyComponent } from './Dangnhap+Dangky/Verify/Verify.component';
import { ForgotPasswordComponent } from './Dangnhap+Dangky/ForgotPassword/ForgotPassword.component';


// service
import { SettingService } from '../Share/Services/setting.service';


const routing: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' },

            { path: '**', component: EmptyComponent }
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
        FlexLayoutModule
    ],
    declarations: [
        LayoutComponent,
        NavComponent,
        EmptyComponent,
        LeftMenuComponent,
        SignOutComponent,
        SignInComponent,
        RegisterComponent,
        VerifyComponent,
        ForgotPasswordComponent
    ],
    providers: [
        SettingService
    ]
})
export class AppsModule { }
