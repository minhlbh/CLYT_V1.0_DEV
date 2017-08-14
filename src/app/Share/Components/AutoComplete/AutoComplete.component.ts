import { Component, OnInit, Input } from '@angular/core';
import { CompleterData, CompleterService } from 'ng2-completer';
import { AutoCompleteService } from '../../Services/autoComplete.service';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './AutoComplete.component.html',
    styleUrls: ['./AutoComplete.component.css']
})
export class AutoCompleteComponent implements OnInit {
    @Input() ApiString;
    protected searchKey: string;
    protected dataService: CompleterData;
    protected searchData: any;
    constructor(
        private completerService: CompleterService,
        private autocompleteService: AutoCompleteService
    ) {
        this.searchData = this.autocompleteService.autoComplete(this.searchKey, this.ApiString);
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }

    ngOnInit() {
    }

}
