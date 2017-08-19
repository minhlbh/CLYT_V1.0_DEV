import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './Frame.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../../Share/Components/share.module';
import { ChildFrameComponent } from './ChildFrame/ChildFrame.component';
import { ChiTietBenhComponent} from '../Tracuubenh/chi-tiet-benh/chi-tiet-benh.component';
import { BenhService } from '../../Share/Services/benh.service';
import { ForumService } from '../../Share/Services/forum.service';
import { WinframeComponent } from './winframe/winframe.component';

const routing: Routes = [
    {
        path: '',
        component: FrameComponent
    }
];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule(
    {
        imports: [
            CommonModule,
            Routing,
            ShareModule
        ],
        declarations: [
            FrameComponent,
            ChildFrameComponent,
            // ChiTietBenhComponent,
    WinframeComponent
],
        providers: [
            BenhService,
            ForumService
        ],
        entryComponents: [
            ChildFrameComponent,
            ChiTietBenhComponent
        ]
    }
)
export class FrameModule { }
