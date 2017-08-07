import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { TermOfServicesComponent } from './term-of-services/term-of-services.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routing: Routes = [
    { path: 'terms', component: TermOfServicesComponent },
    { path: 'privacy', component: PrivacyComponent },
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [
    PolicyComponent,
    TermOfServicesComponent,
    PrivacyComponent
]
})
export class PolicyModule { }
