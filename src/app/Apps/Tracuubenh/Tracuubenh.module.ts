import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TracuubenhComponent } from './Tracuubenh.component';


const routing: Routes = [
  { path: '', component: TracuubenhComponent }
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [TracuubenhComponent]
})
export class TracuubenhModule { }