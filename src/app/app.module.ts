import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveModule } from 'ng2-responsive';

// Services
import { SettingService } from './Share/Services/setting.service';

import { AppComponent } from './app.component';


const routes: Routes = [
    { path: '', loadChildren: './Home/home.module#HomeModule' },
    { path: 'auth', loadChildren: './authModule/Auth.module#AuthModule' },
    { path: 'policies', loadChildren: './Policy/policy.module#PolicyModule' },
    { path: 'apps', loadChildren: './Apps/apps.module#AppsModule' }
];

const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true });


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        Routing,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        ResponsiveModule
    ],
    providers: [
        SettingService,
        Title
    ],
    bootstrap: ([AppComponent])
})

export class AppModule { }

