import {CompleterData, CompleterService} from 'ng2-completer';
import { Component, OnInit } from '@angular/core';
import { AutoCompleteService } from '../../Services/autoComplete.service';


@Component({
    selector: 'app-autocomplete',
    templateUrl: './autoComplete.component.html',
    styleUrls: ['./autoComplete.component.css']
})
export class AutoCompleteComponent implements OnInit {
    searchData: any;
    protected dataService: CompleterData;

    constructor(private completerService: CompleterService) {
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }

    ngOnInit() {


        }

        }

