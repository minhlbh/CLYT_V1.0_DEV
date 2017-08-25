// module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookService } from 'ngx-facebook';
import { FacebookModule } from 'ngx-facebook';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// component
import { WindowComponent } from './window/window.component';
import { ChiTietBenhComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/chi-tiet-benh.component';
import { LoadDuLieuImgComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-img/load-du-lieu-img.component';
import { LoadDuLieuLinkComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-link/load-du-lieu-link.component';
import { LoadDuLieuTextComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-text/load-du-lieu-text.component';
// tslint:disable-next-line:max-line-length
import { LoadDuLieuYoutubeComponent } from '../../Apps/Tracuubenh/chi-tiet-benh/Load-items/load-du-lieu-youtube/load-du-lieu-youtube.component';
import { ForumBarComponent } from '../../Apps/Tracuubenh/forum-bar/forum-bar.component';
import { WinframeComponent } from '../../Apps/Frame/winframe/winframe.component';
import { ChildFrameComponent } from '../../Apps/Frame/ChildFrame/ChildFrame.component';
import { AutoCompleteComponent } from './autoComplete/autoComplete.component';

// pipe and services
import { SafePipe } from '../../Share/Pipes/safe.pipe';
import { SettingService } from '../Services/setting.service';
import { AutoCompleteService } from '../Services/autoComplete.service';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        Ng2CompleterModule,
        FacebookModule.forRoot(),
        ShareButtonsModule,
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
        WinframeComponent,
        ChildFrameComponent,
        AutoCompleteComponent
    ],
    exports: [
        WindowComponent,
        SafePipe,
        ChiTietBenhComponent,
        LoadDuLieuImgComponent,
        LoadDuLieuLinkComponent,
        LoadDuLieuTextComponent,
        LoadDuLieuYoutubeComponent,
        ForumBarComponent,
        AutoCompleteComponent,
        WinframeComponent,
        ChildFrameComponent
    ],
    providers: [
        AutoCompleteService,
        SettingService
    ]
})
export class ShareModule { }
