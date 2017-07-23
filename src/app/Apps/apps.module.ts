import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Layout/Layout.component';

const routing: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' }]
  }
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [
    LayoutComponent
  ]
})
export class AppsModule { }