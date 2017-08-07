import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-load-du-lieu-link',
  templateUrl: './load-du-lieu-link.component.html',
  styleUrls: ['./load-du-lieu-link.component.css']
})
export class LoadDuLieuLinkComponent implements OnInit {
  @Input() dulieuLink: string;
    @Input() dulieuLinkTieuDe: string;
  constructor() { }

  ngOnInit() {
  }

}
