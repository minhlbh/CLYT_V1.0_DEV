import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuviensachComponent } from './Thuviensach.component';
import { DanhSachThuVienComponent } from './danh-sach-thu-vien/danh-sach-thu-vien.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ThuviensachComponent,
    DanhSachThuVienComponent
]
})
export class ThuviensachModule { }