import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2CompleterModule } from 'ng2-completer';
import { FormsModule } from '@angular/forms';

import { WindowComponent } from './window/window.component';
import { AutoCompleteComponent } from './AutoComplete/AutoComplete.component';

import { SafePipe } from '../../Share/Pipes/safe.pipe';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Ng2CompleterModule
    ],
    declarations: [
        WindowComponent,
        SafePipe,
        AutoCompleteComponent
    ],
    exports: [
        WindowComponent,
        AutoCompleteComponent,
        SafePipe
    ]
})
export class ShareModule { }
