webpackJsonp([3],{

<<<<<<< HEAD
/***/ "../../../../../src/app/Home/home.component.css":
=======
/***/ "../../../../../src/app/Apps/Layout/Layout.component.css":
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".scroll {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    height: calc(100%-100px);\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n\r\n}\r\n\r\n\r\n/* .content {\r\n    flex-direction: row;\r\n} */\r\n\r\n.block {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    height: 580px;\r\n    overflow-y: hidden;\r\n    min-width: 435px;\r\n    margin: 10px;\r\n    transition:all 0.5s ease-in-out;\r\n}\r\n\r\n.header {\r\n    background-color: transparent;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.brand {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.body {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.grid {\r\n    /* height: 100%; */\r\n    /* width: 435px; */\r\n    min-width: 435px;\r\n}\r\n\r\n.grid-item {\r\n    width: 145px;\r\n    height: 145px;\r\n    padding: 5px;\r\n    transition:all 0.4s ease-in-out;\r\n}\r\n\r\n.grid-item-w2 {\r\n    width: 290px;\r\n\r\n}\r\n\r\n.grid-item-w3 {\r\n    width: 435px;\r\n}\r\n\r\n.child {\r\n    padding: 5px;\r\n    background-color: gold;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n", ""]);
=======
exports.push([module.i, "", ""]);
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"screen\">\r\n    <div class=\"header\">\r\n        <div class=\"brand\">\r\n\r\n            <div class=\"brand-logo\">\r\n                <img class=\"brand-logo-img\" src=\"assets/images/logo-startscreen.png\">\r\n            </div>\r\n            <div class=\"brand-title\">Trưởng Khoa</div>\r\n\r\n        </div>\r\n        <div class=\"controls\">\r\n            <button class=\"btn btn-default\" (click)=\"showMore()\">Button Home</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"content scroll\">\r\n        <ng-container *ngFor=\"let blocks of menus\">\r\n            <div class=\"block\" [id]=\"blocks.Id\">\r\n                <div class=\"title\">{{blocks.Ten}}</div>\r\n                <div class=\"body\">\r\n                    <div class=\"grid\">\r\n                         <ng-container *ngFor=\"let item of blocks.items\">\r\n                            <div class=\"grid-item\" [ngClass]=\"\r\n                                {'grid-item-w2': item.chieuRong==2,\r\n                                'grid-item-w3': item.chieuRong==3,\r\n                                'grid-item-h3': item.chieuCao==3,\r\n                                'grid-item-h2': item.chieuCao==2\r\n                                }\r\n                                \">\r\n\r\n                                <div class=\"child\">{{item.ChieuRong}}</div>\r\n\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Home/home.component.ts":
=======
/***/ "../../../../../src/app/Apps/Layout/Layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"fxs-portal\" fxLayoutAlign=\"start stretch\" fxLayout=\"column\">\n\n    <app-Nav></app-Nav>\n\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" class=\"fxs-portal-main\">\n\n        <div >\n            <app-left-menu ></app-left-menu>\n        </div>\n        <main class=\"fxs-panorama\">\n            <router-outlet></router-outlet>\n        </main>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Apps/Layout/Layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Layout',
        template: __webpack_require__("../../../../../src/app/Apps/Layout/Layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Layout/Layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=Layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Layout/left-menu/left-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.col-left-fixed {\n    width: 230px;\n    height: 100%;\n    position: fixed;\n    left: 0;\n    top: 40px;\n    background: #0f9cb3;\n    font-size: 13px;\n    border-top: rgba(255,255,255,.3) 1px solid;\n    border-right: rgba(255,255,255,.3) 1px solid;\n    z-index: 10;\n    padding: 43px 0 50px 0;\n}\n\n.col-left-fixed ul:first-child {\n    border-bottom: rgba(255,255,255,.3) 1px solid;\n    float: left;\n    width: 100%;\n}\n\n\n.col-left-fixed ul {\n    padding: 0;\n    margin: 0;\n}\n\n.col-left-fixed ul li {\n    display: list-item;\n    list-style-type: none;\n}\n\n.col-left-fixed ul li a {\n    color: #fff;\n    width: 100%;\n    float: left;\n    position: relative;\n    padding: 12px 10px 12px 50px;\n    min-height: 42px;\n}\n\n.col-left-fixed ul li a:hover, .col-left-fixed ul li a:focus, .col-left-fixed ul li.active a {\n  text-decoration: none;\n  background: #11a8c1;\n}\n\n.col-left-fixed ul li a .icon {\n    font-size: 20px;\n    margin-right: 5px;\n    position: absolute;\n    top: 11px;\n    left: 13px;\n}\n\n.col-left-fixed .glyphicon {\n  position: absolute;\n  top: 13px;\n  left: 18px;\n  font-size: 16px;\n}\n\n.list-services {\n    height: 100%;\n    overflow: auto;\n    float: left;\n}\n\n.fxs-sidebar.toggled .list-services::-webkit-scrollbar { \n    display: none; \n}\n\n.col-left-fixed .list-services ul {\n    border-bottom:none;\n}\n\n.list-services .title.big {\n    text-transform: uppercase;\n}\n\n/* toggled */\n/* toggled */\n/* toggled */\n/* .col-left-fixed.toggled ul li a .title {\n  display: none;\n}\n\n.col-left-fixed.toggled ul li a {\npadding: 12px 10px 12px 40px;\n}\n\n.col-left-fixed.toggled {\n  width: 50px;\n  left: 0;\n} */\n\n.main.toggled {\n  padding-left: 50px;\n}\n.col-left-fixed  ul li a span.title {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    float: left;\n    width: 170px;\n    white-space: nowrap;\n}\n\n.bt-collapsed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n}\n\n.fxs-sidebar.toggled .col-left-fixed {\n    width: 50px;\n}\n\n.fxs-sidebar.toggled .col-left-fixed  ul li a span.title {\n    display: none;\n}\n\n.fxs-sidebar.toggled .col-left-fixed ul li a {\n  padding: 12px 10px 12px 39px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Layout/left-menu/left-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fxs-sidebar\" [ngClass]=\"{'toggled': isToggled}\">\n    <div class=\"col-left-fixed\"  style=\"background: '{{menuElements.MauNhat}}'\">\n        <ul class=\"bt-collapsed\">\n            <li>\n                <a id=\"menu-toggle\" (click)=\"isToggled = !isToggled\">\n                              <span class=\"glyphicon glyphicon-align-justify\" aria-hidden=\"true\"></span>\n                        </a>\n            </li>\n        </ul>\n        <div class=\"list-services\">\n            <ul *ngFor=\"let element of menuElements\">\n                <li *ngFor=\"let item of element?.items\">\n                    <a href=\"{{item?.url}}\" style=\"cursor: pointer\">\n                              <span class=\"fa fa-fw {{item.IconText}} icon\" aria-hidden=\"true\"></span>\n                              <span class=\"title\" style=\"text-overflow: ellipsis;\">{{item.Ten}}</span>\n                        </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Layout/left-menu/left-menu.component.ts":
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftMenuComponent; });
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD
var HomeComponent = (function () {
    function HomeComponent(settingService) {
        this.settingService = settingService;
        this.menus = [];
        this.blockFull = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // HomeObject.init();
        this.menus = this.settingService.getMenu();
        console.log(this.menus);
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
=======
var LeftMenuComponent = (function () {
    function LeftMenuComponent(settingService) {
        this.settingService = settingService;
        this.isToggled = false;
        console.log(this.isToggled);
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
        this.menuElements = this.settingService.getMenu();
    };
    return LeftMenuComponent;
}());
LeftMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-left-menu',
        template: __webpack_require__("../../../../../src/app/Apps/Layout/left-menu/left-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Layout/left-menu/left-menu.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].Default
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object])
], LeftMenuComponent);

var _a;
//# sourceMappingURL=left-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Layout/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-top {\n    background: #0c879a;\n    margin: 0;\n    padding: 0 15px 0 0;\n    border: none;\n    height: 40px;\n}\n\n.navbar {\n    height: 40px;\n    min-height: 40px;\n}\n\n.navbar-brand {\n    height: 40px;\n}\n\n.navbar-brand.logo {\n    padding: 0 15px 0 10px;\n    border-right: rgba(255,255,255,.3) 1px solid;\n}\n\n.navbar-brand.logo img {\n    height: 36px;\n    margin: 2px 0;\n    float: left\n}\n\n.navbar-brand.logo:hover {\n    background: #11a8c1;\n}\n\n.navbar-brand.logo span {\n    color: #fff;\n    font-size: 13px;\n    text-transform: uppercase;\n    float: left;\n    line-height: 40px;\n    margin-left: 10px;\n}\n\n.navbar-default .navbar-nav>li>a {\n    color: #fff;\n    font-size: 14px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.navbar-default .navbar-nav>li>a:hover,\n.navbar-default .navbar-nav>li>a:focus {\n    background: #11a8c1;\n    color: #fff;\n}\n\n.nav-top .navbar-nav>li>a.menu-toggle,\n.nav-top .nav-right-mb>li>a.menu-toggle {\n    margin: -1px;\n    padding: 0;\n    border-bottom: 3px solid #fff;\n    border-radius: 0;\n}\n\n.nav-top .navbar-nav>li>a.menu-toggle:hover,\n.nav-top .nav-right-mb>li>a.menu-toggle:hover {\n    background: none;\n    border-bottom: 3px solid #0fa5bd;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Layout/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fxs-topbar\">\n    <!-- <div>\n    <a [routerLink]=\"['/']\">header</a>\n  </div> -->\n    <nav  class=\"navbar navbar-default navbar-fixed-top nav-top\" style=\"background: '{{settings.MauDam}}'\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand logo\" [routerLink]=\"['/']\">\n              <img src=\"{{settings.Logo}}\">\n              <span class=\"app-bar-divider\">\n                {{settings.ThuongHieu}}\n              </span>\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\">\n                  Giới thiệu\n                </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                  Liên hệ\n                </a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a routerLink=\"/login\">Đăng nhập\n                </a>\n                </li>\n                <li>\n                    <a class=\"bt-sign-up\" routerLink=\"/register\">\n                  <span>Đăng ký ngay\n                  </span>\n                </a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Layout/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(settingService) {
        this.settingService = settingService;
        this.settings = this.settingService.getConfig();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'app-Nav',
        template: __webpack_require__("../../../../../src/app/Apps/Layout/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Layout/nav/nav.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated,
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].Default
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/apps.module.ts":
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout_Layout_component__ = __webpack_require__("../../../../../src/app/Apps/Layout/Layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Layout_nav_nav_component__ = __webpack_require__("../../../../../src/app/Apps/Layout/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Layout_left_menu_left_menu_component__ = __webpack_require__("../../../../../src/app/Apps/Layout/left-menu/left-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






<<<<<<< HEAD
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
=======



var routing = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_5__Layout_Layout_component__["a" /* LayoutComponent */],
        children: [
            { path: 'tracuubenh', loadChildren: './Tracuubenh/Tracuubenh.module#TracuubenhModule' }
        ]
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routing);
var AppsModule = (function () {
    function AppsModule() {
    }
    return AppsModule;
}());
AppsModule = __decorate([
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            Routing,
<<<<<<< HEAD
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
=======
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__Layout_Layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Layout_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__Layout_left_menu_left_menu_component__["a" /* LeftMenuComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__Share_Services_setting_service__["a" /* SettingService */]
        ]
    })
], AppsModule);

//# sourceMappingURL=apps.module.js.map
>>>>>>> ba8464fc3b6fd715bc6678c2aea74f0cb6b9dd2a

/***/ })

});
//# sourceMappingURL=3.chunk.js.map