import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Layout',
  templateUrl: './Layout.component.html',
  styleUrls: ['./Layout.component.css']
})
export class LayoutComponent implements OnInit {

    isToggled = false;
  constructor() { }

  ngOnInit() {
  }

  toggled(isToggled) {
    this.isToggled = isToggled;
    console.log(this.isToggled);
  }
}
