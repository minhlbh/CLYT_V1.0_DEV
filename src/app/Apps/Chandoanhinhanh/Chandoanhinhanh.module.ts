import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChandoanhinhanhComponent } from './Chandoanhinhanh.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../Share/Components/share.module';


const routing: Routes = [
    { path: '', component: ChandoanhinhanhComponent },

];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        Routing,
        ShareModule
    ],
    declarations: [ChandoanhinhanhComponent]
})
export class ChandoanhinhanhModule { }
