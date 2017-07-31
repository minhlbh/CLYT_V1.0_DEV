webpackJsonp([3],{

/***/ "../../../../../src/app/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    height: calc(100%-100px);\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n\r\n}\r\n\r\n\r\n/* .content {\r\n    flex-direction: row;\r\n} */\r\n\r\n.block {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    /* height: 580px;\r\n    overflow-y: hidden;\r\n    min-width: 435px; \r\n    margin: 10px; */\r\n    transition:all 0.5s ease-in-out;\r\n\r\n    width: 290px;\r\n    margin-left: 80px;\r\n    float: left;\r\n    position: relative;\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n\r\n.brand {\r\n    float: left;\r\n    margin-top: 30px;\r\n    margin-left: 80px;\r\n}\r\n\r\n.body {\r\n    width: 100%;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.grid {\r\n    /* height: 100%; */\r\n    /* width: 435px; */\r\n    min-width: 435px;\r\n}\r\n\r\n.grid-item {\r\n    width: 145px;\r\n    height: 145px;\r\n    padding: 5px;\r\n    transition:all 0.4s ease-in-out;\r\n}\r\n\r\n.grid-item-w2 {\r\n    width: 290px;\r\n\r\n}\r\n\r\n.grid-item-w3 {\r\n    width: 435px;\r\n}\r\n\r\n.child {\r\n    padding: 5px;\r\n    background-color: gold;\r\n    min-width: 100%;\r\n    min-height: 135px;\r\n    position: relative;\r\n    float: left;\r\n}\r\n\r\n.screen {\r\n    background: linear-gradient(to bottom, #10b2e1 0%,#26ceeb 31%,#b9e8fa 100%);\r\n    min-width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    position: absolute;\r\n    padding-top: 100px;\r\n}\r\n\r\n.header {\r\n    height: 100px;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.brand-logo {\r\n    float: left;\r\n}\r\n\r\n.brand-title {\r\n    float: left;\r\n    margin: 15px 0 15px 5px;\r\n    font-size: 28px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.content {\r\n    width: 1945px;\r\n    overflow: auto;\r\n    float: left;\r\n    padding-right: 45px;\r\n    z-index: 1000;\r\n    position: relative;\r\n}\r\n\r\n.title {\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    float: left;\r\n    position: relative;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 10px 60px 10px 5px;\r\n}\r\n\r\n.tile-label {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 13px 10px 10px 10px;\r\n    z-index: 9999;\r\n    color: #fff;\r\n    background: linear-gradient(to top,rgba(0,0,0,.60) 0,rgba(255,255,255,.05) 100%);\r\n}\r\n\r\n.search-top {\r\n    padding: 45px 5px 45px 80px;\r\n    width: 300px;\r\n    float: right;\r\n}\r\n\r\n.input-control {\r\n    display: inline-block;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    position: relative;\r\n    width: 100%;\r\n    line-height: 34px;\r\n    height: 35px;\r\n}\r\n\r\n.input-control .icon-search {\r\n    top: 11px;\r\n    left: 10px;\r\n    position: absolute; \r\n    color: #777;\r\n}\r\n\r\n.input-control input {\r\n    padding: 9px 10px 9px 30px;\r\n    border: none;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 100%;\r\n}\r\n\r\n.area-controls {\r\n    float: right;\r\n    margin-top: 45px;\r\n    margin-right: 50px;\r\n}\r\n\r\n.area-controls .user {\r\n    float: left;\r\n    margin-right: 2px;\r\n}\r\n\r\n.area-controls .user .name-user {\r\n    background: #fff;\r\n    padding: 7px 10px;\r\n    height: 35px;\r\n    line-height: 22px;\r\n    float: left;\r\n    margin-right: 4px;\r\n    color: #323232;\r\n}\r\n\r\n.area-controls .user .sign-up-now {\r\n    background: #0f9cb3;\r\n    color: #fff;\r\n    padding: 7px 10px;\r\n    height: 35px;\r\n    line-height: 22px;\r\n    float: left;\r\n    margin-right: 2px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.area-controls .user a:hover, .area-controls .user a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n.controls {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.controls .view-all {\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #0f9cb3;\r\n}\r\n\r\n.controls .view-all span {\r\n    margin: 2px 5px;\r\n    float: left;\r\n}\r\n\r\n.controls .view-all i {\r\n    margin: 0 5px 0 0;\r\n    font-size: 25px;\r\n    float: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"screen\">\r\n    <div class=\"header\">\r\n        <div class=\"brand\">\r\n\r\n            <div class=\"brand-logo\">\r\n                <img class=\"brand-logo-img\" src=\"assets/images/logo-startscreen.png\">\r\n            </div>\r\n            <div class=\"brand-title\">Trưởng Khoa</div>\r\n\r\n        </div>\r\n        <!-- searchbox, đăng kí, đăng nhập -->\r\n        <div class=\"area-controls\">\r\n            <div class=\"user\">\r\n                <span *ngIf=\"this.auth\" class=\"name-user\">{{this.auth.HoVaTen}}</span>\r\n                <span *ngIf=\"this.auth\" class=\"avt fa fa-fw fa-user\" style=\"cursor: pointer;\"></span>\r\n                <a *ngIf=\"!this.auth\" routerLink='/login' class=\"name-user bt-sign-up\">\r\n          <span class=\"fa fa-fw fa-sign-in icon\" aria-hidden=\"true\"></span>\r\n          Đăng nhập\r\n        </a>\r\n                <a *ngIf=\"!this.auth\" routerLink='/register' class=\"sign-up-now bt-sign-up\">\r\n          <span class=\"fa fa-fw fa-user-plus icon\" aria-hidden=\"true\"></span>\r\n          Đăng ký ngay\r\n        </a>\r\n            </div>\r\n            <button (click)=\"logOut()\" *ngIf=\"this.auth\" class=\"settings fa fa-fw fa-power-off\" style=\"cursor: pointer;\"></button>\r\n        </div>\r\n        <div class=\"search-top\">\r\n            <div class=\"input-control text full-size\" data-role=\"input\">\r\n                <span class=\"glyphicon glyphicon-search icon-search\" aria-hidden=\"true\"></span>\r\n                <input type=\"text\" placeholder=\"Tìm kiếm dịch vụ...\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content scroll\">\r\n        <ng-container *ngFor=\"let blocks of menus\">\r\n            <div class=\"block\" [id]=\"blocks.Id\">\r\n                <div class=\"title\">{{blocks.Ten}}</div>\r\n                <div class=\"body\">\r\n                    <div class=\"grid\">\r\n                        <ng-container *ngFor=\"let item of blocks.items\">\r\n                            <div class=\"grid-item\" [ngClass]=\"\r\n                                {'grid-item-w2': item.chieuRong==2,\r\n                                'grid-item-w3': item.chieuRong==3,\r\n                                'grid-item-h3': item.chieuCao==3,\r\n                                'grid-item-h2': item.chieuCao==2\r\n                                }\r\n                                \">\r\n                                <!-- 1 ảnh 1 icon ảnh -->\r\n                                <div *ngIf=\"item?.style=='1 ảnh Icon ảnh'\">\r\n                                    <div class=\"child\" [ngStyle]=\"{'background-image': 'url('+ item.Images[0] +')'}\">\r\n                                        {{item.ChieuRong}}\r\n                                        <h4 class=\"tile-label\">\r\n                                            <span class=\"fa fa-fw {{item.IconText}}\" aria-hidden=\"true\"></span> {{item?.Ten}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- 1 ảnh icon text -->\r\n                                <div *ngIf=\"item?.style=='1 ảnh Icon text'\">\r\n                                    <div class=\"child\">\r\n                                        {{item.ChieuRong}}\r\n                                        <div class=\"tile-content iconic\">\r\n                                            <a routerLink={{item.url}}><span class=\"fa fa-fw {{item.IconText}} icon\"></span></a>\r\n                                        </div>\r\n                                        <h4 class=\"tile-label\">\r\n                                            <span class=\"fa fa-fw {{item.IconText}}\" aria-hidden=\"true\"></span> {{item?.Ten}}\r\n                                        </h4>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"controls\">\r\n                    <a href=\"#\" class=\"view-all\" (click)=\"showMore()\">\r\n                      <span>Xem tất cả</span>\r\n                      <i class=\"fa fa-fw fa-arrow-circle-o-right\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n        </ng-container>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(settingService) {
        this.settingService = settingService;
        this.menus = [];
        this.blockFull = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // HomeObject.init();
        this.menus = this.settingService.getMenu();
        setTimeout(function () {
            HomeObject.byWidth();
        }, 0);
    };
    HomeComponent.prototype.showMore = function () {
        this.menus[0].items = this.menus[0].items.concat(this.menus[0].items);
        setTimeout(function () {
            HomeObject.byHeight('49500');
        }, 0);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/Home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Định nghĩa router riêng cho module này
var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */] }
];
// forChild -> Router này sẽ được load như một router con
var Routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routing);
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            Routing,
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__["a" /* SettingService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map