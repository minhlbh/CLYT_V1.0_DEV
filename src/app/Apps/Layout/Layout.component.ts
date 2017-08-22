import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.css']
})
export class LayoutComponent implements OnInit {
    loadding = true;
    LinkIFrame = 'http://admincloud.truongkhoa.com/Home/Dashboard';
  constructor() { }

  ngOnInit() {
  }


}
