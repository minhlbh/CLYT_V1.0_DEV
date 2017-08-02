import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveModule } from 'ng2-responsive';

// Services
import { SettingService } from './Share/Services/setting.service';

import { AppComponent } from './app.component';

// Pipes
import { SafeHtmlPipe } from './Share/Pipes/safeHtml.pipe';
import { SafeStylePipe } from './Share/Pipes/safeStyle.pipe';

const routes: Routes = [
    { path: '', loadChildren: './Home/home.module#HomeModule' },
    { path: 'auth', loadChildren: './authModule/Auth.module#AuthModule' },
    { path: 'apps', loadChildren: './Apps/apps.module#AppsModule' }
];

const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true });


@NgModule({
    declarations: [
        AppComponent,
        SafeHtmlPipe,
        SafeStylePipe
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
        SettingService
    ],
    bootstrap: ([AppComponent])
})

export class AppModule { }

