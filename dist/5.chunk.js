webpackJsonp([5],{

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracuubaithuocComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TracuubaithuocComponent = (function () {
    function TracuubaithuocComponent(settingService, router, activatedroute) {
        this.settingService = settingService;
        this.router = router;
        this.activatedroute = activatedroute;
    }
    TracuubaithuocComponent.prototype.ngOnInit = function () {
    };
    return TracuubaithuocComponent;
}());
TracuubaithuocComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tracuubaithuoc',
        template: __webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object])
], TracuubaithuocComponent);

var _a, _b, _c;
//# sourceMappingURL=Tracuubaithuoc.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Tracuubaithuoc_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Share_Services_baithuoc_service__ = __webpack_require__("../../../../../src/app/Share/Services/baithuoc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__danh_sach_bai_thuoc_danh_sach_bai_thuoc_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracuubaithuocModule", function() { return TracuubaithuocModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__danh_sach_bai_thuoc_danh_sach_bai_thuoc_component__["a" /* DanhSachBaiThuocComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(routing);
var TracuubaithuocModule = (function () {
    function TracuubaithuocModule() {
    }
    return TracuubaithuocModule;
}());
TracuubaithuocModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            Routing,
            __WEBPACK_IMPORTED_MODULE_8__Share_Components_share_module__["a" /* ShareModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_infinite_scroll__["InfiniteScrollModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__Tracuubaithuoc_component__["a" /* TracuubaithuocComponent */],
            __WEBPACK_IMPORTED_MODULE_10__danh_sach_bai_thuoc_danh_sach_bai_thuoc_component__["a" /* DanhSachBaiThuocComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__Share_Services_baithuoc_service__["a" /* BaithuocService */],
        ]
    })
], TracuubaithuocModule);

//# sourceMappingURL=Tracuubaithuoc.module.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window-baithuoc-wr {\r\n    width: 950px;\r\n    height: 100%;\r\n    float: left;\r\n}\r\n\r\n.col {\r\n    width: 250px;\r\n    padding:64px 20px 25px 20px;\r\n    height: 100%;\r\n    position: relative;\r\n    float: left;\r\n    overflow: hidden;\r\n    border-right:1px solid #ccc;\r\n}\r\n\r\n.col:last-child {\r\n    border: none;\r\n}\r\n\r\n.col:nth-child(2) {\r\n    width: 199px;\r\n}\r\n\r\n.search-box-top {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 20px 0 20px ;\r\n    width: 100%;\r\n    background: #fff;\r\n    z-index: 100;\r\n}\r\n\r\n\r\n\r\n.search-box-top .text-light {\r\n    margin-top: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.search-box-top hr {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.text-light {\r\n    font-weight: 600;\r\n}\r\n\r\n.input-control {\r\n    display: inline-block;\r\n    min-height: 27px;\r\n    height: 27px;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    line-height: 1;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.input-control .icon-search {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  color: #777;\r\n}\r\n\r\n.input-control input {\r\n  width: 100%;\r\n  padding:3px 5px;\r\n  font-size: 13px;\r\n  padding-left:25px;\r\n  border: solid 1px #ccc;\r\n  height: 25px;\r\n}\r\n\r\n.ul {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding:0;\r\n    margin: 0 25px;\r\n}\r\n\r\n.ul li {\r\n    display: list-item;\r\n    list-style-type: none;\r\n\r\n}\r\n\r\n.ul li a {\r\n    color: #323232;\r\n    padding: 8px 5px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    min-height: 40px;\r\n    line-height: 25px;\r\n    border-bottom:1px solid #eee;\r\n}\r\n\r\n.list {\r\n    height: 100%;\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.list li {\r\n    display: list-item;\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list li a {\r\n    color: #323232;\r\n    padding: 8px 5px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    min-height: 40px;\r\n    line-height: 25px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n\r\n\r\n.list li a:hover, .list li a:focus {\r\n    background: #f5f5f5;\r\n    text-decoration:none;\r\n}\r\n\r\n.title-xs {\r\n    color: rgb(16, 165, 189) !important;\r\n    font-size: 12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"window-baithuoc-wr\">\r\n    <app-window [name]=\"name\" [icon]=\"iconText\" [url]=\"url\" [idea]=\"idea\" [urlIdea]=\"urlIdea\" style=\"width:950px;\">\r\n\r\n        <div class=\"col\">\r\n            <div class=\"search-box-top\">\r\n                <div class=\"input-control text full-size\">\r\n                    <span class=\"fa fa-fw fa-search icon icon-search\"></span>\r\n                    <input placeholder=\"Nhập tên bài thuốc...\" [formControl]=\"searchKey\" type=\"text\" class=\"ng-untouched ng-pristine ng-valid\">\r\n                </div>\r\n                <!-- đếm số bài thuốc -->\r\n                <div style=\"padding: 5px 0 0 0;\">\r\n                    <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                0/{{TongSoLuongBaiThuoc}} <b class=\"title-xs\">bài thuốc</b>\r\n                </span>\r\n                </div>\r\n                <hr class=\"thin bg-grayLighter\">\r\n            </div>\r\n            <ul class=\"list\">\r\n                <li *ngFor=\"let baithuoc of DsBaiThuoc\">\r\n                    <a>\r\n                        <span class=\"title\">{{baithuoc.Name}}</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- Hết cột 1 -->\r\n\r\n        <div class=\"col\">\r\n            <div class=\"search-box-top\">\r\n                <div class=\"input-control text full-size\">\r\n                    <span class=\"fa fa-fw fa-search icon icon-search\"></span>\r\n                    <input placeholder=\"Nhập tên vị thuốc...\" type=\"text\" class=\"ng-untouched ng-pristine ng-valid\">\r\n                </div>\r\n                <!-- đếm số vị thuốc -->\r\n                <div style=\"padding: 5px 0 0 0;\">\r\n                    <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                0/{{TongSoLuongViThuoc}} <b class=\"title-xs\">vị thuốc</b>\r\n                </span>\r\n                </div>\r\n                <hr class=\"thin bg-grayLighter\">\r\n            </div>\r\n            <ul class=\"list\">\r\n                <li *ngFor=\"let vithuoc of DsViThuoc\">\r\n                    <a>\r\n                        <span class=\"title\">{{vithuoc.Name}}</span>\r\n                     </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- Hết cột 2 -->\r\n\r\n        <div class=\"col\">\r\n            <div class=\"search-box-top\">\r\n                <div class=\"input-control text full-size\">\r\n                    <span class=\"fa fa-fw fa-search icon icon-search\"></span>\r\n                    <input placeholder=\"Nhập tên chế phẩm thuốc...\" type=\"text\" class=\"ng-untouched ng-pristine ng-valid\">\r\n                </div>\r\n                <!-- đếm số chế phẩm thuốc -->\r\n                <div style=\"padding: 5px 0 0 0;\">\r\n                    <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                0/{{TongSoLuongChePhamThuoc}} <b class=\"title-xs\">chế phẩm thuốc</b>\r\n                </span>\r\n                </div>\r\n                <hr class=\"thin bg-grayLighter\">\r\n            </div>\r\n            <ul class=\"list\">\r\n                <li *ngFor=\"let chephamthuoc of DsChePhamThuoc\">\r\n                    <a>\r\n                        <span class=\"title\">{{chephamthuoc.Name}}</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- Hết cột 3 -->\r\n\r\n        <div class=\"col\">\r\n            <div class=\"search-box-top\">\r\n                <div class=\"input-control text full-size\">\r\n                    <span class=\"fa fa-fw fa-search icon icon-search\"></span>\r\n                    <input placeholder=\"Nhập tên dược thiện...\" type=\"text\" class=\"ng-untouched ng-pristine ng-valid\">\r\n                </div>\r\n                <!-- đếm số dược thiện -->\r\n                <div style=\"padding: 5px 0 0 0;\">\r\n                    <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                0/{{TongSoLuongDuocThien}} <b class=\"title-xs\">dược thiện</b>\r\n                </span>\r\n                </div>\r\n                <hr class=\"thin bg-grayLighter\">\r\n            </div>\r\n            <ul class=\"list\">\r\n                <li *ngFor=\"let duocthien of DsDuocThien\">\r\n<a>\r\n                    <span class=\"title\">{{duocthien.Name}}</span>\r\n</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- Hết cột 4 -->\r\n    </app-window>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Services_baithuoc_service__ = __webpack_require__("../../../../../src/app/Share/Services/baithuoc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DanhSachBaiThuocComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DanhSachBaiThuocComponent = (function () {
    function DanhSachBaiThuocComponent(baithuocService, router, activedroute, settingService) {
        var _this = this;
        this.baithuocService = baithuocService;
        this.router = router;
        this.activedroute = activedroute;
        this.settingService = settingService;
        this.searchUpdate = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.searchKey = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]('');
        this.loading = false;
        this.scrollLoading = false;
        this.empty = false;
        this.page = 1;
        this.isSearch = false;
        this.loadMore = false;
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe(function (event) {
            _this.doSearchBaiThuoc(event);
            _this.doSearchViThuoc(event);
            _this.doSearchChePhamThuoc(event);
            _this.doSearchDuocThien(event);
            // this.clickThuoc(null);
        });
    }
    DanhSachBaiThuocComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Hàm lấy dữ liệu bài thuốc
        this.baithuocService.getBaithuoc(1).subscribe(function (data) {
            _this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
            _this.TongSoLuongBaiThuoc = data.DsBaiThuoc.TongSoLuong;
            _this.startBaithuoc = 0;
            _this.endBaithuoc = 50;
        });
        this.baithuocService.getVithuoc(1).subscribe(function (data) {
            _this.DsViThuoc = data.DsViThuoc.DsViThuoc;
            _this.TongSoLuongViThuoc = data.DsViThuoc.TongSoLuong;
            _this.startVithuoc = 0;
            _this.endVithuoc = 50;
        });
        this.baithuocService.getChephamthuoc(1).subscribe(function (data) {
            _this.DsChePhamThuoc = data.DsChePhamThuoc.DsChePhamThuoc;
            _this.TongSoLuongChePhamThuoc = data.DsChePhamThuoc.TongSoLuong;
            _this.startChephamthuoc = 0;
            _this.endChephamthuoc = 50;
        });
        this.baithuocService.getDuocthien(1).subscribe(function (data) {
            _this.DsDuocThien = data.DsDuocThien.DsDuocThien;
            _this.TongSoLuongDuocThien = data.DsDuocThien.TongSoLuong;
            _this.startDuocthien = 0;
            _this.endDuocthien = 50;
        });
        this.menu = this.settingService.getMenu();
        for (var i = 0; i < this.menu.length; i++) {
            for (var x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'baithuocvithuoc') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'baithuocvithuoc';
    };
    DanhSachBaiThuocComponent.prototype.doSearchBaiThuoc = function (text) {
        var _this = this;
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.baithuocService.getBaithuoc(1).subscribe(function (data) {
                _this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
                _this.TongSoLuongBaiThuoc = data.TongSoLuong;
                _this.startBaithuoc = (_this.page - 1) * 50;
                _this.endBaithuoc = _this.page * 50;
            });
            // return search results
        }
        else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(function () {
                _this.baithuocService.getSearchBaithuoc(text).subscribe(function (data) {
                    _this.DsBaiThuoc = data.DsBaiThuoc.DsBaiThuoc;
                    _this.TongSoLuongBaiThuoc = data.DsBaiThuoc.TongSoLuong;
                    _this.startBaithuoc = 0;
                    _this.endBaithuoc = data.TongSoLuong;
                    if (_this.DsBaiThuoc.length === 0 && _this.TongSoLuongBaiThuoc === 0) {
                        _this.empty = true;
                    }
                    else {
                        _this.empty = false;
                    }
                    _this.loading = false;
                });
            }, 1500);
        }
    };
    DanhSachBaiThuocComponent.prototype.onScrollBaiThuoc = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuongBaiThuoc / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getBaithuoc(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsBaiThuoc.DsBaiThuoc.length; i++) {
                    _this.DsBaiThuoc.push(data.DsBaiThuoc.DsBaiThuoc[i]);
                }
                _this.endBaithuoc = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;
                // }
            });
        }
        if (this.endBaiThuoc === this.DsBaiThuoc.length) {
            this.scrollLoading = false;
        }
    };
    DanhSachBaiThuocComponent.prototype.doSearchViThuoc = function (text) {
        var _this = this;
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.baithuocService.getVithuoc(1).subscribe(function (data) {
                _this.DsViThuoc = data.DsViThuoc.DsViThuoc;
                _this.TongSoLuongViThuoc = data.TongSoLuong;
                _this.startVithuoc = (_this.page - 1) * 50;
                _this.endVithuoc = _this.page * 50;
            });
            // return search results
        }
        else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            console.log(this.isSearch);
            setTimeout(function () {
                _this.baithuocService.getSearchVithuoc(text).subscribe(function (data) {
                    _this.DsViThuoc = data.DsViThuoc.DsViThuoc;
                    _this.TongSoLuongViThuoc = data.DsViThuoc.TongSoLuong;
                    _this.startVithuoc = 0;
                    _this.endVithuoc = data.TongSoLuong;
                    if (_this.DsViThuoc.length === 0 && _this.TongSoLuongViThuoc === 0) {
                        _this.empty = true;
                    }
                    else {
                        _this.empty = false;
                    }
                    _this.loading = false;
                });
            }, 1500);
        }
    };
    DanhSachBaiThuocComponent.prototype.onScrollViThuoc = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuongViThuoc / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getVithuoc(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsViThuoc.DsThuocViThuoc.length; i++) {
                    _this.DsViThuoc.push(data.DsViThuoc.DsViThuoc[i]);
                }
                _this.endVithuoc = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;
                // }
            });
        }
        if (this.endVithuoc === this.DsViThuoc.length) {
            this.scrollLoading = false;
        }
        console.log(this.scrollLoading);
    };
    DanhSachBaiThuocComponent.prototype.doSearchChePhamThuoc = function (text) {
        var _this = this;
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.baithuocService.getChephamthuoc(1).subscribe(function (data) {
                _this.DsChePhamThuoc = data.DsChePhamThuoc.DsChePhamThuoc;
                _this.TongSoLuongChePhamThuoc = data.TongSoLuong;
                _this.startChephamthuoc = (_this.page - 1) * 50;
                _this.endChephamthuoc = _this.page * 50;
            });
            // return search results
        }
        else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(function () {
                _this.baithuocService.getSearchChephamthuoc(text).subscribe(function (data) {
                    _this.DsChePhamThuoc = data.DsChePhamThuoc.DsChePhamThuoc;
                    _this.TongSoLuongChePhamThuoc = data.DsChePhamThuoc.TongSoLuong;
                    _this.startChephamthuoc = 0;
                    _this.endChephamthuoc = data.TongSoLuong;
                    if (_this.DsChePhamThuoc.length === 0 && _this.TongSoLuongChePhamThuoc === 0) {
                        _this.empty = true;
                    }
                    else {
                        _this.empty = false;
                    }
                    _this.loading = false;
                });
            }, 1500);
        }
    };
    DanhSachBaiThuocComponent.prototype.onScrollChePhamThuoc = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuongChePhamThuoc / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getChephamthuoc(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsChePhamThuoc.DsChePhamThuoc.length; i++) {
                    _this.DsChePhamThuoc.push(data.DsChePhamThuoc.DsChePhamThuoc[i]);
                }
                _this.endChephamthuoc = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;
                // }
            });
        }
        if (this.endChephamthuoc === this.DsChePhamThuoc.length) {
            this.scrollLoading = false;
        }
    };
    DanhSachBaiThuocComponent.prototype.doSearchDuocThien = function (text) {
        var _this = this;
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.baithuocService.getDuocthien(1).subscribe(function (data) {
                _this.DsDuocThien = data.DsDuocThien.DsDuocThien;
                _this.TongSoLuongDuocThien = data.TongSoLuong;
                _this.startDuocthien = (_this.page - 1) * 50;
                _this.endDuocthien = _this.page * 50;
            });
            // return search results
        }
        else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(function () {
                _this.baithuocService.getSearchDuocthien(text).subscribe(function (data) {
                    _this.DsDuocThien = data.DsDuocThien.DsDuocThien;
                    _this.TongSoLuongDuocThien = data.DsDuocThien.TongSoLuong;
                    _this.startDuocthien = 0;
                    _this.endDuocthien = data.TongSoLuong;
                    if (_this.DsDuocThien.length === 0 && _this.TongSoLuongDuocThien === 0) {
                        _this.empty = true;
                    }
                    else {
                        _this.empty = false;
                    }
                    _this.loading = false;
                });
            }, 1500);
        }
    };
    DanhSachBaiThuocComponent.prototype.onScrollDuocThien = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuongDuocThien / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.baithuocService.getDuocthien(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsDuocthien.DsDuocThien.length; i++) {
                    _this.DsDuocThien.push(data.DsDuocthien.DsDuocThien[i]);
                }
                _this.endDuocthien = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                // if (this.endThuoc > this.DsThuoc.length) {
                //     this.endThuoc = this.DsThuoc.length;
                // }
            });
        }
        if (this.endDuocthien === this.DsDuocThien.length) {
            this.scrollLoading = false;
        }
    };
    return DanhSachBaiThuocComponent;
}());
DanhSachBaiThuocComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-danh-sach-bai-thuoc',
        template: __webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__Share_Services_baithuoc_service__["a" /* BaithuocService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Share_Services_baithuoc_service__["a" /* BaithuocService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _d || Object])
], DanhSachBaiThuocComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=danh-sach-bai-thuoc.component.js.map

/***/ }),

/***/ "../../../../../src/app/Share/Services/baithuoc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaithuocService; });
/* unused harmony export Baithuoc */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaithuocService = (function () {
    function BaithuocService(http) {
        this.http = http;
        this.baithuocUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/DongY_BaiThuoc_List";
        this.vithuocUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/DongY_ViThuoc_List";
        this.chephamthuocUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/DongY_ChePhamThuoc_List";
        this.duocthienUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/DongY_DuocThien_List";
    }
    BaithuocService.prototype.getBaithuoc = function (page) {
        // ...using get request
        return this.http.get(this.baithuocUrl + "?Trang=" + page + "&soluongmoitrang=50")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    BaithuocService.prototype.getSearchBaithuoc = function (key) {
        var searchUrl = this.baithuocUrl + "?Trang=1&searchTerm=" + key + "&soluongmoitrang=15";
        return this.http.get(searchUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    BaithuocService.prototype.getVithuoc = function (page) {
        // ...using get request
        return this.http.get(this.vithuocUrl + "?Trang=" + page + "&soluongmoitrang=50")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    BaithuocService.prototype.getSearchVithuoc = function (key) {
        var searchUrl = this.vithuocUrl + "?Trang=1&searchTerm=" + key + "&soluongmoitrang=15";
        return this.http.get(searchUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    BaithuocService.prototype.getChephamthuoc = function (page) {
        // ...using get request
        return this.http.get(this.chephamthuocUrl + "?Trang=" + page + "&soluongmoitrang=50")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    BaithuocService.prototype.getSearchChephamthuoc = function (key) {
        var searchUrl = this.chephamthuocUrl + "?Trang=1&searchTerm=" + key + "&soluongmoitrang=15";
        return this.http.get(searchUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    BaithuocService.prototype.getDuocthien = function (page) {
        // ...using get request
        return this.http.get(this.duocthienUrl + "?Trang=" + page + "&soluongmoitrang=50")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    BaithuocService.prototype.getSearchDuocthien = function (key) {
        var searchUrl = this.duocthienUrl + "?Trang=1&searchTerm=" + key + "&soluongmoitrang=15";
        return this.http.get(searchUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return BaithuocService;
}());
BaithuocService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BaithuocService);

var Baithuoc = (function () {
    function Baithuoc(id, Name) {
        this.id = id;
        this.Name = Name;
    }
    return Baithuoc;
}());

var _a;
//# sourceMappingURL=baithuoc.service.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map