import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SettingService } from '../../../Share/Services/setting.service';
import { ThuviensachService } from '../../../Share/Services/thuviensach.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-danh-sach-thu-vien',
  templateUrl: './danh-sach-thu-vien.component.html',
  styleUrls: ['./danh-sach-thu-vien.component.css']
})
export class DanhSachThuVienComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
