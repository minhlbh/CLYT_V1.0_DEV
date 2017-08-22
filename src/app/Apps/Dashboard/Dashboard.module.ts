import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './Dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../Share/Components/share.module';


const routing: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        Routing,
        CommonModule,
        ShareModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule {

}
