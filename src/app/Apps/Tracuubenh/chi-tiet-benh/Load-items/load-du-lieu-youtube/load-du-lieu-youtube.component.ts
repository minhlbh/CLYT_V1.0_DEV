import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
@Component({
    selector: 'app-load-du-lieu-youtube',
    templateUrl: './load-du-lieu-youtube.component.html',
    styleUrls: ['./load-du-lieu-youtube.component.css']
})
export class LoadDuLieuYoutubeComponent implements OnInit {
    @Input() dulieuYoutube: string;
    @Input() dulieuYoutubeTieuDe: string;

    url: SafeResourceUrl;
    constructor(public sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.dulieuYoutube = this.dulieuYoutube.replace('youtu.be', 'www.youtube.com/embed');
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.dulieuYoutube);
    }

}
