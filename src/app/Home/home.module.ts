import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResponsiveModule } from 'ng2-responsive';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home.component';

import { SettingService } from '../Share/Services/setting.service';
import { UserService } from '../Share/Services/user.service';

import { HomeFilterPipe } from '../Share/Pipes/homeFilter.pipe';

// Định nghĩa router riêng cho module này
const routing: Routes = [
    { path: '', component: HomeComponent }
];

// forChild -> Router này sẽ được load như một router con
const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Routing,
        FlexLayoutModule,
        ResponsiveModule
    ],
    providers: [
        SettingService,
        UserService
    ],
    declarations: [
        HomeFilterPipe,
        HomeComponent
]
})
export class HomeModule { }
