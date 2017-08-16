webpackJsonp([10],{

/***/ "../../../../../src/app/Apps/Tracuubenh/Tracuubenh.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 768px) {\r\n    .fxs-block {\r\n    width: 100%;\r\n    }\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubenh/Tracuubenh.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fxs-blade-content-container\">\r\n    <div class=\"fxs-block\">\r\n        <app-danh-sach-benh>\r\n        </app-danh-sach-benh>\r\n    </div>\r\n\r\n    <div *ngIf=\"showChiTiet\" class=\"fxs-block large\">\r\n        <app-chi-tiet-benh [idBenh]=\"detailBenhId\"></app-chi-tiet-benh>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubenh/Tracuubenh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_benh_service__ = __webpack_require__("../../../../../src/app/Share/Services/benh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracuubenhComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TracuubenhComponent = (function () {
    function TracuubenhComponent(settingService, router, benhService, activatedroute) {
        this.settingService = settingService;
        this.router = router;
        this.benhService = benhService;
        this.activatedroute = activatedroute;
        this.showChiTiet = false;
        this.detailBenhId = 0;
    }
    TracuubenhComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedroute.params.subscribe(function (pars) {
            _this.idBenh(pars['id']);
        });
    };
    TracuubenhComponent.prototype.idBenh = function (id) {
        if (id == null) {
            this.showChiTiet = false;
        }
        else {
            this.detailBenhId = id;
            this.showChiTiet = true;
        }
    };
    return TracuubenhComponent;
}());
TracuubenhComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'app-Tracuubenh',
        template: __webpack_require__("../../../../../src/app/Apps/Tracuubenh/Tracuubenh.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Tracuubenh/Tracuubenh.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_benh_service__["a" /* BenhService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_benh_service__["a" /* BenhService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object])
], TracuubenhComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=Tracuubenh.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubenh/Tracuubenh.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll__ = __webpack_require__("../../../../angular2-infinite-scroll/angular2-infinite-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_responsive__ = __webpack_require__("../../../../ng2-responsive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Tracuubenh_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubenh/Tracuubenh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__danh_sach_benh_danh_sach_benh_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubenh/danh-sach-benh/danh-sach-benh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Share_Services_benh_service__ = __webpack_require__("../../../../../src/app/Share/Services/benh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Share_Services_forum_service__ = __webpack_require__("../../../../../src/app/Share/Services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracuubenhModule", function() { return TracuubenhModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// module









// components


// services



var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__Tracuubenh_component__["a" /* TracuubenhComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_9__Tracuubenh_component__["a" /* TracuubenhComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(routing);
var TracuubenhModule = (function () {
    function TracuubenhModule() {
    }
    return TracuubenhModule;
}());
TracuubenhModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_infinite_scroll__["InfiniteScrollModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_responsive__["ResponsiveModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            Routing,
            __WEBPACK_IMPORTED_MODULE_13__Share_Components_share_module__["a" /* ShareModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__Tracuubenh_component__["a" /* TracuubenhComponent */],
            __WEBPACK_IMPORTED_MODULE_10__danh_sach_benh_danh_sach_benh_component__["a" /* DanhSachBenhComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__Share_Services_benh_service__["a" /* BenhService */],
            __WEBPACK_IMPORTED_MODULE_12__Share_Services_forum_service__["a" /* ForumService */]
        ]
    })
], TracuubenhModule);

//# sourceMappingURL=Tracuubenh.module.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubenh/danh-sach-benh/danh-sach-benh.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.search-box-top {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 10px 20px 0 20px ;\r\n    width: 100%;\r\n    background: #fff;\r\n    z-index: 100;\r\n}\r\n\r\n\r\n\r\n.search-box-top .text-light {\r\n    margin-top: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.search-box-top hr {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.text-light {\r\n    font-weight: 600;\r\n}\r\n\r\n.input-control {\r\n    display: inline-block;\r\n    min-height: 27px;\r\n    height: 27px;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    line-height: 1;\r\n    position: relative;\r\n}\r\n\r\n.input-control .icon-search {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  color: #777;\r\n}\r\n\r\n.input-control input {\r\n  width: 100%;\r\n  padding:3px 5px;\r\n  font-size: 13px;\r\n  padding-left:25px;\r\n  border: solid 1px #ccc;\r\n  height: 25px;\r\n}\r\n\r\n.full-size {\r\n    width: 100% !important;\r\n}\r\n\r\n.ul {\r\n    height: 100%;\r\n    overflow: auto;\r\n    padding:0;\r\n    margin: 0 25px;\r\n}\r\n\r\n.ul li {\r\n    display: list-item;\r\n    list-style-type: none;\r\n\r\n}\r\n\r\n.ul li a {\r\n    color: #323232;\r\n    padding: 8px 5px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    min-height: 40px;\r\n    line-height: 25px;\r\n    border-bottom:1px solid #eee;\r\n}\r\n\r\n\r\n\r\n.ul li a .title {\r\n    display: block;\r\n}\r\n\r\n.ul li a:hover, .ul li a:focus {\r\n  background: #f5f5f5;\r\n  text-decoration:none;\r\n}\r\n\r\n.no-mg-top {\r\n  top:0;\r\n  padding-top: 67px;\r\n}\r\n\r\n.ul li a .icon {\r\n    width: 20px;\r\n    top: 13px;\r\n    right: 10px;\r\n    color: #888;\r\n    position: absolute;\r\n}\r\n\r\n\r\n\r\n.toggled ul li a .title {\r\n  display: block\r\n}\r\n\r\n.toggled ul li a {\r\npadding: 12px 10px 12px 40px;\r\n}\r\n\r\n.toggled {\r\n  width: 50px;\r\n  left: 0;\r\n}\r\n\r\n.list {\r\n    height: 100%;\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    padding: 0;\r\n    margin: 0 20px;\r\n}\r\n\r\n.list li {\r\n    display: list-item;\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list li a {\r\n    color: #323232;\r\n    padding: 8px 5px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    min-height: 40px;\r\n    line-height: 25px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n\r\n\r\n.list li a:hover, .list li a:focus {\r\n    background: #f5f5f5;\r\n    text-decoration:none;\r\n}\r\n\r\n.list-left-wr {\r\n    width: 100%;\r\n    padding: 64px 0 25px 0;\r\n    background: #fff;\r\n    position: relative !important;\r\n    display: block;\r\n    height: calc(100vh - 85px);\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n\r\n.list-left-wr.mobile {\r\n    border:none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubenh/danh-sach-benh/danh-sach-benh.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Start col left 2 -->\r\n<app-window [icon]=\"iconText\" [idea]=\"true\" [idIdea]=\"idIdea\" [urlIdea]=\"urlIdea\" [name]=\"name\" [url]=\"url\" *showItDevice=\"['desktop', 'tablet']\">\r\n    <div class=\"list-left-wr\">\r\n        <!-- searchbox -->\r\n        <div class=\"search-box-top\">\r\n            <div class=\"input-control text full-size\" data-role=\"input\">\r\n                <span class=\"fa fa-fw fa-search icon icon-search\" aria-hidden=\"true\"></span>\r\n                <input type=\"text\" placeholder=\"Nhập tên bệnh...\" [formControl]=\"searchKey\">\r\n            </div>\r\n\r\n            <!-- đếm số bệnh -->\r\n            <div style=\"padding: 5px 0 0 0;\">\r\n                <span style=\"font-size: 11px; color: #888; float: right;\">\r\n                {{endBenh}}/{{TongSoLuong}} bệnh\r\n                </span>\r\n            </div>\r\n\r\n            <hr class=\"thin bg-grayLighter\">\r\n        </div>\r\n        <!-- loading gif -->\r\n        <div class=\"text-center\">\r\n            <p class=\"lead\" *ngIf=\"loading\">\r\n                <img src=\"assets/66.gif\">\r\n            </p>\r\n        </div>\r\n        <!-- list bệnh -->\r\n        <ul class=\"scrollbar-custom list\" infinite-scroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"500\" (scrolled)=\"onScroll()\"\r\n            [scrollWindow]=\"false\">\r\n            <li *ngIf=\"!loading\">\r\n                <div class=\"text-center\" *ngIf=\"empty\">\r\n                    <p>\r\n                        <a> Không kết quả nào phù hợp</a>\r\n                    </p>\r\n                </div>\r\n                <div *ngIf=\"!empty\">\r\n                    <a *ngFor=\"let benh of DsBenh\" style=\"cursor: pointer;\" [routerLink]=\"['/apps/tracuubenh', benh.Id]\">\r\n                <span class=\"title\" >{{benh.Name}}</span>\r\n                    </a>\r\n                    <!-- <a *ngIf=\"scrollLoading\"><img src=\"assets/66.gif\"></a> -->\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- end col left 2 -->\r\n    </div>\r\n</app-window>\r\n\r\n\r\n<!-- danh sacsh benh for mobile -->\r\n<!-- danh sacsh benh for mobile -->\r\n<!-- danh sacsh benh for mobile -->\r\n<!-- Start col left 2 -->\r\n<app-window [icon]=\"iconText\" [name]=\"name\" [url]=\"url\" *showItDevice=\"['mobile']\">\r\n    <div class=\"list-left-wr mobile\">\r\n        <!-- searchbox -->\r\n        <div class=\"search-box-top\">\r\n            <div class=\"input-control text full-size\" data-role=\"input\">\r\n                <span class=\"fa fa-fw fa-search icon icon-search\" aria-hidden=\"true\"></span>\r\n                <input type=\"text\" placeholder=\"Nhập tên bệnh...\" [formControl]=\"searchKey\">\r\n            </div>\r\n            <!-- đếm số bệnh -->\r\n            <div style=\"padding: 5px 0 0 0;\">\r\n                <span style=\"font-size: 11px; color: #888; float: right;\">\r\n          {{endBenh}}/{{TongSoLuong}} bệnh\r\n        </span>\r\n            </div>\r\n            <hr class=\"thin bg-grayLighter\">\r\n        </div>\r\n        <!-- loading gif -->\r\n        <div class=\"text-center\">\r\n            <p class=\"lead\" *ngIf=\"loading\">\r\n                <img src=\"assets/66.gif\">\r\n            </p>\r\n        </div>\r\n        <!-- list bệnh -->\r\n        <ul class=\"scrollbar-custom list\" infinite-scroll [infiniteScrollDistance]=\"1\" [infiniteScrollThrottle]=\"200\" (scrolled)=\"onScroll()\"\r\n            [scrollWindow]=\"false\">\r\n            <li *ngIf=\"!loading\">\r\n                <div class=\"text-center\" *ngIf=\"empty\">\r\n                    <p>\r\n                        <a> Không kết quả nào phù hợp</a>\r\n                    </p>\r\n                </div>\r\n                <div *ngIf=\"!empty\">\r\n                    <a *ngFor=\"let benh of DsBenh\" style=\"cursor: pointer;\" [routerLink]=\"['/apps/tracuubenh', benh.Id]\">\r\n                <span class=\"title\" >{{benh.Name}}</span>\r\n            </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- end col left 2 -->\r\n    </div>\r\n</app-window>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubenh/danh-sach-benh/danh-sach-benh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Share_Services_benh_service__ = __webpack_require__("../../../../../src/app/Share/Services/benh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DanhSachBenhComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DanhSachBenhComponent = (function () {
    function DanhSachBenhComponent(
        // nhớ khai báo service
        benhService, router, activedroute, settingService) {
        var _this = this;
        this.benhService = benhService;
        this.router = router;
        this.activedroute = activedroute;
        this.settingService = settingService;
        this.searchUpdate = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.searchKey = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */]('');
        this.loading = false;
        this.scrollLoading = false;
        this.empty = false;
        this.showChiTiet = false;
        this.loadMore = false;
        this.isSearch = false;
        this.page = 1;
        this.searchKey.valueChanges
            .debounceTime(1000)
            .subscribe(function (event) {
            _this.doSearch(event);
            // this.clickBenh(null);
        });
    }
    DanhSachBenhComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Hàm lấy dữ liệu bệnh
        this.benhService.getBenh(1).subscribe(function (data) {
            _this.DsBenh = data.DsBenh;
            _this.TongSoLuong = data.TongSoLuong;
            _this.startBenh = 0;
            _this.endBenh = 50;
        });
        this.menu = this.settingService.getMenu();
        for (var i = 0; i < this.menu.length; i++) {
            for (var x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'tracuubenh') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuubenh';
    };
    // search bệnh
    DanhSachBenhComponent.prototype.doSearch = function (text) {
        var _this = this;
        // no keyword catched => return all
        if (text === '') {
            this.isSearch = false;
            this.benhService.getBenh(1).subscribe(function (data) {
                _this.DsBenh = data.DsBenh;
                _this.TongSoLuong = data.TongSoLuong;
                _this.startBenh = (_this.page - 1) * 50;
                _this.endBenh = _this.page * 50;
            });
            // return search results
        }
        else {
            this.isSearch = true;
            this.loading = true;
            this.searchUpdate.next(text);
            setTimeout(function () {
                _this.benhService.getSearchBenh(text).subscribe(function (data) {
                    _this.DsBenh = data.DsBenh;
                    _this.TongSoLuong = data.TongSoLuong;
                    _this.startBenh = 0;
                    _this.endBenh = data.TongSoLuong;
                    if (_this.DsBenh.length === 0 && _this.TongSoLuong === 0) {
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
    // navigate to chi-tiet-benh url with id
    DanhSachBenhComponent.prototype.clickBenh = function (id) {
        this.router.navigate(['tracuubenh/', id]);
    };
    // load more onscroll
    DanhSachBenhComponent.prototype.onScroll = function () {
        var _this = this;
        this.scrollLoading = true;
        if (this.isSearch || this.page > this.TongSoLuong / 50) {
            return;
        }
        else {
            this.loadMore = true;
            this.page++;
            this.benhService.getBenh(this.page).subscribe(function (data) {
                for (var i = 0; i < data.DsBenh.length; i++) {
                    _this.DsBenh.push(data.DsBenh[i]);
                }
                _this.endBenh = _this.page * 50;
                _this.loadMore = false;
                _this.loading = false;
                if (_this.endBenh > _this.DsBenh.length) {
                    _this.endBenh = _this.DsBenh.length;
                }
            });
        }
        if (this.endBenh === this.DsBenh.length) {
            this.scrollLoading = false;
        }
    };
    return DanhSachBenhComponent;
}());
DanhSachBenhComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-danh-sach-benh',
        template: __webpack_require__("../../../../../src/app/Apps/Tracuubenh/danh-sach-benh/danh-sach-benh.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Tracuubenh/danh-sach-benh/danh-sach-benh.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Share_Services_benh_service__["a" /* BenhService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Share_Services_benh_service__["a" /* BenhService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _d || Object])
], DanhSachBenhComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=danh-sach-benh.component.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map