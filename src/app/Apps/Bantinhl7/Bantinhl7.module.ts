import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bantinhl7Component } from './Bantinhl7.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../Share/Components/share.module';


const routing: Routes = [
    { path: '', component: Bantinhl7Component },

];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
    imports: [
        CommonModule,
        Routing,
        ShareModule
    ],
    declarations: [Bantinhl7Component]
})

export class Bantinhl7Module { }
