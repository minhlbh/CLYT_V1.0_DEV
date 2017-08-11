import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaithuocComponent } from './baithuoc.component';
import { DanhSachBaiThuocComponent } from './danh-sach-bai-thuoc/danh-sach-bai-thuoc.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaithuocComponent,
    DanhSachBaiThuocComponent
]
})
export class BaithuocModule { }
