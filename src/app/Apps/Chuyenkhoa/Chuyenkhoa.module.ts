import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ChuyenkhoaComponent } from './Chuyenkhoa.component';

const routing: Routes = [
    { path: '', component: ChuyenkhoaComponent },
];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);



@NgModule({
    imports: [
        CommonModule,
        Routing
    ],
    declarations: [ChuyenkhoaComponent]
})
export class ChuyenkhoaModule { }
