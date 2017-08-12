import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoichantructuyenComponent } from './Hoichantructuyen.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../Share/Components/share.module';


const routing: Routes = [
    { path: '', component: HoichantructuyenComponent },

];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  imports: [
    CommonModule,
    Routing,
    ShareModule
  ],
  declarations: [HoichantructuyenComponent]
})
export class HoichantructuyenModule { }
