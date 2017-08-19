import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule, FormControlDirective, FormGroupDirective, NgControl, ReactiveFormsModule } from '@angular/forms';

import { WindowComponent } from './window/window.component';

import { SafePipe } from '../../Share/Pipes/safe.pipe';
import { ChiTietBenhComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/chi-tiet-benh.component';
import { LoadDuLieuImgComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-img/load-du-lieu-img.component';
import { LoadDuLieuLinkComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-link/load-du-lieu-link.component';
import { LoadDuLieuTextComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-text/load-du-lieu-text.component';
// tslint:disable-next-line:max-line-length
import { LoadDuLieuYoutubeComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-youtube/load-du-lieu-youtube.component';
import { ForumBarComponent } from '../../Apps/Tracuubenh/forum-bar/forum-bar.component';
import { FacebookService } from 'ngx-facebook';
import { FacebookModule } from 'ngx-facebook';
import { SettingService } from '../Services/setting.service';

import { AutoCompleteComponent } from './autoComplete/autoComplete.component';
import { AutoCompleteService } from '../Services/autoComplete.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Ng2CompleterModule,
        FacebookModule.forRoot(),
        ReactiveFormsModule,


    ],
    declarations: [
        WindowComponent,
        SafePipe,
        ChiTietBenhComponent,
        LoadDuLieuImgComponent,
        LoadDuLieuLinkComponent,
        LoadDuLieuTextComponent,
        LoadDuLieuYoutubeComponent,
        ForumBarComponent,
        AutoCompleteComponent,
    ],
    exports: [
        WindowComponent,
        SafePipe,
        AutoCompleteComponent,
        ChiTietBenhComponent,
        LoadDuLieuImgComponent,
        LoadDuLieuLinkComponent,
        LoadDuLieuTextComponent,
        LoadDuLieuYoutubeComponent,
        ForumBarComponent,
    ],
    providers: [
        SettingService,
        AutoCompleteService,
    ]

})
export class ShareModule { }
