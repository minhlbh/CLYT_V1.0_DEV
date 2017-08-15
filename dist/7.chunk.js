webpackJsonp([7],{

/***/ "../../../../../src/app/Apps/Thuviensach/Thuviensach.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Thuviensach/Thuviensach.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\nThu vien sach hoat dong!\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Thuviensach/Thuviensach.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThuviensachComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThuviensachComponent = (function () {
    function ThuviensachComponent(settingService, router, activatedroute) {
        this.settingService = settingService;
        this.router = router;
        this.activatedroute = activatedroute;
    }
    ThuviensachComponent.prototype.ngOnInit = function () {
    };
    return ThuviensachComponent;
}());
ThuviensachComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thuviensach',
        template: __webpack_require__("../../../../../src/app/Apps/Thuviensach/Thuviensach.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Thuviensach/Thuviensach.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object])
], ThuviensachComponent);

var _a, _b, _c;
//# sourceMappingURL=Thuviensach.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Thuviensach/Thuviensach.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll__ = __webpack_require__("../../../../angular2-infinite-scroll/angular2-infinite-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Thuviensach_component__ = __webpack_require__("../../../../../src/app/Apps/Thuviensach/Thuviensach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__danh_sach_thu_vien_danh_sach_thu_vien_component__ = __webpack_require__("../../../../../src/app/Apps/Thuviensach/danh-sach-thu-vien/danh-sach-thu-vien.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Share_Services_thuviensach_service__ = __webpack_require__("../../../../../src/app/Share/Services/thuviensach.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuviensachModule", function() { return ThuviensachModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__danh_sach_thu_vien_danh_sach_thu_vien_component__["a" /* DanhSachThuVienComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(routing);
var ThuviensachModule = (function () {
    function ThuviensachModule() {
    }
    return ThuviensachModule;
}());
ThuviensachModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            Routing,
            __WEBPACK_IMPORTED_MODULE_7__Share_Components_share_module__["a" /* ShareModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll__["InfiniteScrollModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__Thuviensach_component__["a" /* ThuviensachComponent */],
            __WEBPACK_IMPORTED_MODULE_9__danh_sach_thu_vien_danh_sach_thu_vien_component__["a" /* DanhSachThuVienComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__Share_Services_thuviensach_service__["a" /* ThuviensachService */],
        ]
    })
], ThuviensachModule);

//# sourceMappingURL=Thuviensach.module.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Thuviensach/danh-sach-thu-vien/danh-sach-thu-vien.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window-thuvien-wr {\r\n    width: 420x;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n.col {\r\n    width: 420px;\r\n    padding:64px 20px 25px 20px;\r\n    height: 100%;\r\n    position: relative;\r\n    float: left;\r\n    overflow: hidden;\r\n    border-right:1px solid #ccc;\r\n}\r\n\r\n.col:last-child {\r\n    border: none;\r\n}\r\n\r\n.col:nth-child(2) {\r\n    width: 199px;\r\n}\r\n\r\n.search-box-top {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 20px 0 20px ;\r\n    width: 100%;\r\n    background: #fff;\r\n    z-index: 100;\r\n}\r\n\r\n\r\n\r\n.search-box-top .text-light {\r\n    margin-top: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.search-box-top hr {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.text-light {\r\n    font-weight: 600;\r\n}\r\n\r\n.input-control {\r\n    display: inline-block;\r\n    min-height: 27px;\r\n    height: 27px;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    line-height: 1;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.input-control .icon-search {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  color: #777;\r\n}\r\n\r\n.input-control input {\r\n  width: 100%;\r\n  padding:3px 5px;\r\n  font-size: 13px;\r\n  padding-left:25px;\r\n  border: solid 1px #ccc;\r\n  height: 25px;\r\n}\r\n.full-size {\r\n    width: 100% !important;\r\n}\r\n.ul {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding:0;\r\n    margin: 0 25px;\r\n}\r\n\r\n.ul li {\r\n    display: list-item;\r\n    list-style-type: none;\r\n\r\n}\r\n\r\n.ul li a {\r\n    color: #323232;\r\n    padding: 8px 5px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    min-height: 40px;\r\n    line-height: 25px;\r\n    border-bottom:1px solid #eee;\r\n}\r\n\r\n.list {\r\n    height: 100%;\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.list li {\r\n    display: list-item;\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list li a {\r\n    color: #323232;\r\n    padding: 8px 5px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    min-height: 40px;\r\n    line-height: 25px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n\r\n\r\n.list li a:hover, .list li a:focus {\r\n    background: #f5f5f5;\r\n    text-decoration:none;\r\n}\r\n\r\n.title-xs {\r\n    color: rgb(16, 165, 189) !important;\r\n    font-size: 12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Thuviensach/danh-sach-thu-vien/danh-sach-thu-vien.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"window-thuvien-wr\">\r\n    <app-window [name]=\"name\" [icon]=\"iconText\" [url]=\"url\" [idea]=\"idea\" [urlIdea]=\"urlIdea\" style=\"width:950px;\">\r\n        <div>\r\n\r\n            <!-- Nav tabs -->\r\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li role=\"presentation\" class=\"active\"><a href=\"#Sach\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">Thư viện Sách</a></li>\r\n                <li role=\"presentation\"><a href=\"#Ghichep\" aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\">Ghi chép</a></li>\r\n                <li role=\"presentation\"><a href=\"#Tailieu\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\">Tài liệu y khoa</a></li>\r\n            </ul>\r\n        </div>\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content\">\r\n            <div role=\"Sach\" class=\"tab-pane active\" id=\"Sach\">\r\n                <div class=\"col\">\r\n                    <div class=\"search-box-top\">\r\n                        <div class=\"input-control text full-size\">\r\n                            <span class=\"fa fa-fw fa-search icon icon-search\"></span>\r\n                            <input placeholder=\"Nhập tên sách...\" [formControl]=\"searchKey\" type=\"text\" class=\"ng-untouched ng-pristine ng-valid\">\r\n                        </div>\r\n                        <!-- đếm số sách -->\r\n                        <div style=\"padding: 5px 0 0 0;\">\r\n                            <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                0/{{TongSoLuongSach}} <b class=\"title-xs\">sách</b>\r\n                </span>\r\n                        </div>\r\n                        <hr class=\"thin bg-grayLighter\">\r\n                    </div>\r\n                    <ul class=\"list\">\r\n                        <li *ngFor=\"let sach of DsSach\">\r\n                            <a>\r\n                        <span class=\"title\">{{sach.Name}}</span>\r\n                    </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div role=\"Ghichep\" class=\"tab-pane\" id=\"Ghichep\">\r\n                <div class=\"col\">\r\n                    <div class=\"search-box-top\">\r\n                        <div class=\"input-control text full-size\">\r\n                            <span class=\"fa fa-fw fa-search icon icon-search\"></span>\r\n                            <input placeholder=\"Nhập tên ghi chép...\" [formControl]=\"searchKey\" type=\"text\" class=\"ng-untouched ng-pristine ng-valid\">\r\n                        </div>\r\n                        <!-- đếm số ghi chép -->\r\n                        <div style=\"padding: 5px 0 0 0;\">\r\n                            <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                0/{{TongSoLuongGhiChep}} <b class=\"title-xs\">ghi chép</b>\r\n                </span>\r\n                        </div>\r\n                        <hr class=\"thin bg-grayLighter\">\r\n                    </div>\r\n                    <ul class=\"list\">\r\n                        <li *ngFor=\"let ghichep of DsGhiChep\">\r\n                            <a>\r\n                        <span class=\"title\">{{ghichep.Name}}</span>\r\n                    </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div role=\"Tailieu\" class=\"tab-pane\" id=\"Tailieu\">\r\n\r\n                <div class=\"col\">\r\n                    <div class=\"search-box-top\">\r\n                        <div class=\"input-control text full-size\">\r\n                            <span class=\"fa fa-fw fa-search icon icon-search\"></span>\r\n                            <input placeholder=\"Nhập tên tài liệu...\" [formControl]=\"searchKey\" type=\"text\" class=\"ng-untouched ng-pristine ng-valid\">\r\n                        </div>\r\n                        <!-- đếm số tài liệu -->\r\n                        <div style=\"padding: 5px 0 0 0;\">\r\n                            <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                0/{{TongSoLuongTaiLieu}} <b class=\"title-xs\">tài liệu</b>\r\n                </span>\r\n                        </div>\r\n                        <hr class=\"thin bg-grayLighter\">\r\n                    </div>\r\n                    <ul class=\"list\">\r\n                        <li *ngFor=\"let tailieu of DsTaiLieu\">\r\n                            <a>\r\n                        <span class=\"title\">{{tailieu.Name}}</span>\r\n                    </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </app-window>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Thuviensach/danh-sach-thu-vien/danh-sach-thu-vien.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Services_thuviensach_service__ = __webpack_require__("../../../../../src/app/Share/Services/thuviensach.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DanhSachThuVienComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DanhSachThuVienComponent = (function () {
    function DanhSachThuVienComponent(thuviensachService, router, activedroute, settingService) {
        // this.searchKey.valueChanges
        //     .debounceTime(1000)
        //     .subscribe((event) => {
        //         this.doSearchBaiThuoc(event);
        this.thuviensachService = thuviensachService;
        this.router = router;
        this.activedroute = activedroute;
        this.settingService = settingService;
        this.loading = false;
        this.scrollLoading = false;
        this.empty = false;
        this.page = 1;
        this.isSearch = false;
        this.loadMore = false;
        this.searchUpdate = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.searchKey = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
        //         // this.clickThuoc(null);
        //     });
    }
    DanhSachThuVienComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Hàm lấy dữ liệu bài thuốc
        this.thuviensachService.getSach(1).subscribe(function (data) {
            _this.DsSach = data.DsSach.DsSach;
            _this.TongSoLuongSach = data.DsSach.TongSoLuong;
            _this.startSach = 0;
            _this.endSach = 50;
        });
        this.thuviensachService.getTailieu(1).subscribe(function (data) {
            _this.DsTaiLieu = data.DsTaiLieu.DsTaiLieu;
            _this.TongSoLuongTaiLieu = data.DsTaiLieu.TongSoLuong;
            _this.startTaiLieu = 0;
            _this.endTaiLieu = 50;
        });
        this.thuviensachService.getGhichep(1).subscribe(function (data) {
            _this.DsGhiChep = data.DsGhiChep.DsGhiChep;
            _this.TongSoLuongGhiChep = data.DsGhiChep.TongSoLuong;
            _this.startGhiChep = 0;
            _this.endGhiChep = 50;
        });
        this.menu = this.settingService.getMenu();
        for (var i = 0; i < this.menu.length; i++) {
            for (var x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'thuvientailieu') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'thuvientailieu';
    };
    DanhSachThuVienComponent.prototype.onScrollSach = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuongSach / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.thuviensachService.getSach(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsSach.DsSach.length; i++) {
                    _this.DsSach.push(data.DsSach.DsSach[i]);
                }
                _this.endSach = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;
                // }
            });
        }
        if (this.endSach === this.DsSach.length) {
            this.scrollLoading = false;
        }
    };
    DanhSachThuVienComponent.prototype.onScrollTaiLieu = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuongTaiLieu / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.thuviensachService.getTailieu(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsTaiLieu.DsTaiLieu.length; i++) {
                    _this.DsTaiLieu.push(data.DsTaiLieu.DsTaiLieu[i]);
                }
                _this.endTaiLieu = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;
                // }
            });
        }
        if (this.endTaiLieu === this.DsTaiLieu.length) {
            this.scrollLoading = false;
        }
    };
    DanhSachThuVienComponent.prototype.onScrollGhiChep = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuongGhiChep / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.thuviensachService.getGhichep(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsGhiChep.DsGhiChep.length; i++) {
                    _this.DsGhiChep.push(data.DsGhiChep.DsGhiChep[i]);
                }
                _this.endGhiChep = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;
                // }
            });
        }
        if (this.endGhiChep === this.DsGhiChep.length) {
            this.scrollLoading = false;
        }
    };
    return DanhSachThuVienComponent;
}());
DanhSachThuVienComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-danh-sach-thu-vien',
        template: __webpack_require__("../../../../../src/app/Apps/Thuviensach/danh-sach-thu-vien/danh-sach-thu-vien.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Thuviensach/danh-sach-thu-vien/danh-sach-thu-vien.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__Share_Services_thuviensach_service__["a" /* ThuviensachService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Share_Services_thuviensach_service__["a" /* ThuviensachService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _d || Object])
], DanhSachThuVienComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=danh-sach-thu-vien.component.js.map

/***/ }),

/***/ "../../../../../src/app/Share/Services/thuviensach.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThuviensachService; });
/* unused harmony export Thuviensach */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThuviensachService = (function () {
    function ThuviensachService(http) {
        this.http = http;
        this.sachUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/Sach_List";
        this.tailieuUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/TaiLieu_List";
        this.ghichepUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/GhiChep_List";
    }
    ThuviensachService.prototype.getSach = function (page) {
        // ...using get request
        return this.http.get(this.sachUrl + "?Trang=" + page + "&soluongmoitrang=50")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThuviensachService.prototype.getSearchSach = function (key) {
        var searchUrl = this.sachUrl + "?Trang=1&searchTerm=" + key + "&soluongmoitrang=15";
        return this.http.get(searchUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThuviensachService.prototype.getTailieu = function (page) {
        // ...using get request
        return this.http.get(this.tailieuUrl + "?Trang=" + page + "&soluongmoitrang=50")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThuviensachService.prototype.getSearchTailieu = function (key) {
        var searchUrl = this.tailieuUrl + "?Trang=1&searchTerm=" + key + "&soluongmoitrang=15";
        return this.http.get(searchUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThuviensachService.prototype.getGhichep = function (page) {
        // ...using get request
        return this.http.get(this.ghichepUrl + "?Trang=" + page + "&soluongmoitrang=50")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThuviensachService.prototype.getSearchGhichep = function (key) {
        var searchUrl = this.ghichepUrl + "?Trang=1&searchTerm=" + key + "&soluongmoitrang=15";
        return this.http.get(searchUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return ThuviensachService;
}());
ThuviensachService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ThuviensachService);

var Thuviensach = (function () {
    function Thuviensach(id, Name, DanhGia, Anh, LinkDownload, TomTat, NhaXuatBan, ChungLoai, NguoiGhiChep, IdNguoiGhiChep, AvatarNguoiGhiChep, NguoiChiaSe, IdNguoiChiaSe, AvatarNguoiChiaSe) {
        this.id = id;
        this.Name = Name;
        this.DanhGia = DanhGia;
        this.Anh = Anh;
        this.LinkDownload = LinkDownload;
        this.TomTat = TomTat;
        this.NhaXuatBan = NhaXuatBan;
        this.ChungLoai = ChungLoai;
        this.NguoiGhiChep = NguoiGhiChep;
        this.IdNguoiGhiChep = IdNguoiGhiChep;
        this.AvatarNguoiGhiChep = AvatarNguoiGhiChep;
        this.NguoiChiaSe = NguoiChiaSe;
        this.IdNguoiChiaSe = IdNguoiChiaSe;
        this.AvatarNguoiChiaSe = AvatarNguoiChiaSe;
    }
    return Thuviensach;
}());

var _a;
//# sourceMappingURL=thuviensach.service.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map