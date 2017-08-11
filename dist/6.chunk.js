webpackJsonp([6],{

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

module.exports = "<p>\n  Tracuubaithuoc works!\n</p>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tracuubaithuoc_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/Tracuubaithuoc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Share_Services_baithuoc_service__ = __webpack_require__("../../../../../src/app/Share/Services/baithuoc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__danh_sach_bai_thuoc_danh_sach_bai_thuoc_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracuubaithuocModule", function() { return TracuubaithuocModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__Tracuubaithuoc_component__["a" /* TracuubaithuocComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__danh_sach_bai_thuoc_danh_sach_bai_thuoc_component__["a" /* DanhSachBaiThuocComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routing);
var TracuubaithuocModule = (function () {
    function TracuubaithuocModule() {
    }
    return TracuubaithuocModule;
}());
TracuubaithuocModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            Routing,
            __WEBPACK_IMPORTED_MODULE_6__Share_Components_share_module__["a" /* ShareModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__Tracuubaithuoc_component__["a" /* TracuubaithuocComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__Share_Services_baithuoc_service__["a" /* BaithuocService */],
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  danh-sach-bai-thuoc works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Share_Services_baithuoc_service__ = __webpack_require__("../../../../../src/app/Share/Services/baithuoc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function DanhSachBaiThuocComponent(
        // nhớ khai báo service
        baithuocService, router, activedroute, settingService) {
        this.baithuocService = baithuocService;
        this.router = router;
        this.activedroute = activedroute;
        this.settingService = settingService;
        this.empty = false;
        this.page = 1;
    }
    DanhSachBaiThuocComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Hàm lấy dữ liệu bệnh
        this.baithuocService.getBaithuoc(1).subscribe(function (data) {
            _this.DsBaithuoc = data.DsBaithuoc;
            _this.TongSoLuong = data.TongSoLuong;
            _this.startBaithuoc = 0;
            _this.endBaithuoc = 50;
        });
        this.menu = this.settingService.getMenu();
        for (var i = 0; i < this.menu.length; i++) {
            for (var x = 0; x < this.menu[i].items.length; x++) {
                if (this.menu[i].items[x].url === 'tracuubaithuoc') {
                    this.name = this.menu[i].items[x].Ten;
                    this.iconText = this.menu[i].items[x].IconText;
                    this.idIdea = this.menu[i].items[x].Id;
                }
            }
        }
        this.url = 'apps';
        this.idea = true;
        this.urlIdea = 'tracuubaithuoc';
    };
    return DanhSachBaiThuocComponent;
}());
DanhSachBaiThuocComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-danh-sach-bai-thuoc',
        template: __webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Tracuubaithuoc/danh-sach-bai-thuoc/danh-sach-bai-thuoc.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Share_Services_baithuoc_service__["a" /* BaithuocService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Share_Services_baithuoc_service__["a" /* BaithuocService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _d || Object])
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
        this.thuocUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment_prod__["a" /* environment */].apiUrl + "/CSDLYT/DongY_BaiThuoc_List";
    }
    BaithuocService.prototype.getBaithuoc = function (page) {
        // ...using get request
        return this.http.get(this.thuocUrl + "?Trang=" + page + "&soluongmoitrang=50")
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
//# sourceMappingURL=6.chunk.js.map