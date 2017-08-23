import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-du-lieu-img',
  templateUrl: './load-du-lieu-img.component.html',
  styleUrls: ['./load-du-lieu-img.component.css']
})
export class LoadDuLieuImgComponent implements OnInit {
    @Input() dulieuImg: string;
    @Input() duLieuLinkAnh: string;
    @Input() dulieuImgTieuDe: string;
  constructor() { }

  ngOnInit() {
  }

}
