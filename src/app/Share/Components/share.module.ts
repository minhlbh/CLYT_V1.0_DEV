import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window/window.component';
import { SafePipe } from '../../Share/Pipes/safe.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        WindowComponent,
        SafePipe
    ],
    exports: [
        WindowComponent,
        SafePipe
    ]
})
export class ShareModule { }
