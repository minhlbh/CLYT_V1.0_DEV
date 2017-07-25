import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { LayoutComponent } from './Layout/Layout.component';
import { NavComponent } from './Layout/nav/nav.component';
import { LeftMenuComponent } from './Layout/left-menu/left-menu.component';


const routing: Routes = [
  {
    path: '',component: LayoutComponent,
    children: [
      { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' }
    ]
  }
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  imports: [
    CommonModule,
    Routing,
    FlexLayoutModule
  ],
  declarations: [
    LayoutComponent,
    NavComponent,
    LeftMenuComponent
  ]
})
export class AppsModule { }