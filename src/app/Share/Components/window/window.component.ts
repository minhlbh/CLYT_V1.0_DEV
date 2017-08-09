import { SettingService } from '../../Services/setting.service';
import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'app-window',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})
export class WindowComponent implements OnInit {
    @Input() name;
    @Input() icon;
    @Input() url;
    @Input() idea;
    @Input() urlIdea;
    @Input() idIdea;
    private route: string;
    menuElements: any;
    constructor(
        private router: Router,
        private location: Location,
        private settingService: SettingService,
        private r: ActivatedRoute
    ) {
        this.menuElements = this.settingService.getConfig();
    }

    ngOnInit() {
    }

    back() {
        console.log(this.url);
        this.router.navigate([this.url]);
    }
}
