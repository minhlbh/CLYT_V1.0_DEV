webpackJsonp([3],{

/***/ "../../../../../src/app/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .content {\r\n    flex-direction: row;\r\n} */\r\n\r\n.block {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n    margin: 10px;\r\n    transition: all 0.5s ease-in-out;\r\n    margin-left: 80px;\r\n    width: 435px;\r\n}\r\n\r\n.title {\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    float: left;\r\n    position: relative;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 10px 60px 10px 5px;\r\n}\r\n\r\n.title-item {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.count-apps {\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-size: 12px;\r\n}\r\n\r\n.body {\r\n    width: 100%;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    float: left;\r\n    position: relative;\r\n    height: 445px;\r\n}\r\n\r\n.grid {\r\n    /* height: 100%; */\r\n    /* width: 145px;   */\r\n    min-width: 435px;\r\n}\r\n\r\n.grid-item {\r\n    width: 145px;\r\n    height: 145px;\r\n    padding: 5px;\r\n    transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.grid-item-w2 {\r\n    width: 290px;\r\n}\r\n\r\n.grid-item-w3 {\r\n    width: 435px;\r\n}\r\n\r\n.grid-item-h2 {\r\n    height: 290px;\r\n}\r\n\r\n.grid-item-h3 {\r\n    height: 435px;\r\n}\r\n\r\n.child {\r\n    padding: 5px;\r\n    background-color: gold;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    float: left;\r\n    cursor: pointer;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.screen {\r\n    background: linear-gradient(to bottom, #10b2e1 0%, #26ceeb 31%, #b9e8fa 100%);\r\n    min-width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.title-label {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 13px 10px 10px 10px;\r\n    z-index: 9999;\r\n    color: #fff;\r\n    background: linear-gradient(to top, rgba(0, 0, 0, .60) 0, rgba(255, 255, 255, .05) 100%);\r\n    font-size: 18px;\r\n}\r\n\r\n.title-label .icon img {\r\n    width: 20px;\r\n}\r\n\r\n.wrapper {\r\n    background: linear-gradient(to bottom, #10b2e1 0%, #26ceeb 31%, #b9e8fa 100%);\r\n    min-width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    position: absolute;\r\n    padding-top: 100px;\r\n}\r\n\r\n.header {\r\n    height: 100px;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.logo {\r\n    float: left;\r\n    margin-top: 30px;\r\n    margin-left: 80px;\r\n}\r\n\r\n.logo img {\r\n    float: left;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.logo span {\r\n    float: left;\r\n    margin: 15px 0 15px 5px;\r\n    font-size: 28px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.search-home {\r\n    padding: 45px 5px 45px 80px;\r\n    width: 300px;\r\n    float: right;\r\n}\r\n\r\n.input-control {\r\n    display: inline-block;\r\n    min-height: 34px;\r\n    height: 35px;\r\n    width: 100%;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    line-height: 1;\r\n    position: relative;\r\n}\r\n\r\n.input-control .icon-search {\r\n    position: absolute;\r\n    top: 11px;\r\n    left: 10px;\r\n    color: #777;\r\n    display: inline-block;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.input-control input {\r\n    padding: 9px 10px 9px 30px;\r\n    border: none;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 100%;\r\n    color: #323232;\r\n}\r\n\r\n.controls {\r\n    float: right;\r\n    margin-top: 45px;\r\n    margin-right: 50px;\r\n}\r\n\r\n.controls .user {\r\n    float: left;\r\n    margin-right: 2px;\r\n}\r\n\r\n.controls .user .name-user {\r\n    background: #fff;\r\n    padding: 7px 10px;\r\n    height: 35px;\r\n    line-height: 22px;\r\n    float: left;\r\n    margin-right: 4px;\r\n    color: #323232;\r\n}\r\n\r\n\r\n/* Mobile css */\r\n\r\n.m-nav {\r\n    height: 60px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    color: white;\r\n    /* box-shadow: 0 7px 6px -6px #999; */\r\n}\r\n\r\n.m-brand {\r\n    padding: 0 20px;\r\n}\r\n\r\n.m-brand-logo {\r\n    margin-right: 10px;\r\n    width: 42px;\r\n    height: 42px;\r\n}\r\n\r\n.m-header-title {\r\n    padding: 0 10px;\r\n    background-color: #eee;\r\n    margin: 0;\r\n    padding: 10px\r\n}\r\n\r\n.m-content {\r\n    padding-top: 60px;\r\n}\r\n\r\n.m-item {\r\n    padding: 5px;\r\n    margin-left: 10px;\r\n    border-bottom: solid 1px #eee;\r\n}\r\n\r\n.m-cover {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 30px;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.controls .user .sign-up-now {\r\n    background: #0f9cb3;\r\n    color: #fff;\r\n    padding: 7px 10px;\r\n    height: 35px;\r\n    line-height: 22px;\r\n    float: left;\r\n    margin-right: 2px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.controls .user a {\r\n    text-decoration: none;\r\n}\r\n\r\n.bottom {\r\n    float: left;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.show-all {\r\n    color: #ffffff;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #0f9cb3;\r\n    float: left;\r\n    cursor: pointer;\r\n}\r\n\r\n.show-all span {\r\n    margin: 2px 5px;\r\n    float: left;\r\n}\r\n\r\n.show-all i {\r\n    margin: 0 5px 0 0;\r\n    font-size: 25px;\r\n    float: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *showItDevice=\"['desktop', 'tablet']\">\r\n\r\n    <div class=\"fxs-portal wrapper\" fxLayoutAlign=\"start stretch\" fxLayout=\"column\"  [ngStyle]=\"{'background-image': 'url('+ config?.Background +')'}\">\r\n\r\n        <div class=\"fxs-topbar header\" [ngStyle]=\"{'background-color': (menus?.MauDam | async)} \">\r\n            <div class=\"logo\">\r\n                <img width=\"50px\" [src]=\"config?.Logo\">\r\n                <span>{{config?.ThuongHieu}}</span>\r\n            </div>\r\n            <div class=\"controls\">\r\n                <div class=\"user\">\r\n                    <a href=\"#\" class=\"name-user bt-sign-up\">\r\n                        <span class=\"fa fa-fw fa-sign-in icon\" aria-hidden=\"true\"></span>\r\n                        Đăng nhập\r\n                    </a>\r\n                    <a href=\"#\" class=\"sign-up-now bt-sign-up\">\r\n                        <span class=\"fa fa-fw fa-user-plus icon\" aria-hidden=\"true\"></span>\r\n                        Đăng ký ngay\r\n                    </a>\r\n                </div>\r\n                <!-- <div class=\"controls\">\r\n                    <a href=\"#\" class=\"view-all\" (click)=\"showMore()\">\r\n                      <span>Xem tất cả</span>\r\n                      <i class=\"fa fa-fw fa-arrow-circle-o-right\"></i>\r\n                    </a>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"search-home\">\r\n                <div class=\"input-control text full-size\">\r\n                    <span class=\"glyphicon glyphicon-search icon-search\" aria-hidden=\"true\"></span>\r\n                    <input type=\"text\" placeholder=\"Tìm dịch vụ...\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" class=\"fxs-portal-main\">\r\n            <main class=\"fxs-panorama\">\r\n                <div class=\"fxs-blade-content-container\">\r\n                    <ng-container *ngFor=\"let blocks of menus\">\r\n                        <div class=\"block\" [id]=\"blocks?.Id\">\r\n                            <div class=\"title\">\r\n                                {{blocks.Ten}}\r\n                                <span class=\"count-apps\">({{blocks?.items.length}} apps)</span>\r\n                            </div>\r\n                            <!-- <div class=\"bottom\">\r\n                                <a (click)=\"showMore(blocks?.Id)\" class=\"show-all\">\r\n                                  <span>Xem tất cả</span>\r\n                                  <i class=\"fa fa-fw fa-arrow-circle-o-right\"></i>\r\n                                </a>\r\n                            </div> -->\r\n                            <div class=\"body\">\r\n                                <div class=\"grid\">\r\n                                    <ng-container *ngFor=\"let item of blocks?.items\">\r\n                                        <div class=\"grid-item\" [ngClass]=\"\r\n                                {\r\n                                    'grid-item-w2': item.chieuRong==2,\r\n                                    'grid-item-w3': item.chieuRong==3,\r\n                                    'grid-item-h3': item.chieuCao==3,\r\n                                    'grid-item-h2': item.chieuCao==2\r\n                                }\">\r\n                                            <!-- style ô vuông là icon  -->\r\n                                            <a class=\"child\" *ngIf=\"item?.style == 'Icon'\" [style.background-color]=\"item?.mauNen\" [routerLink]=\"['/apps', item?.url]\" [ngStyle]=\"{'background-image': 'url('+ item?.IconText +')'}\">\r\n                                                <h4 class=\"title-label\">\r\n                                                    <span class=\"icon\"><img src=\"{{item.IconText}}\" aria-hidden=\"true\"></span>                                                    {{item.chieuRong}} - {{item.chieuCao}} - {{item.Ten}}\r\n                                                </h4>\r\n                                            </a>\r\n                                            <!-- style ô vuông là ảnh  -->\r\n                                            <a class=\"child\" *ngIf=\"item?.style == 'Image'\" [routerLink]=\"['/apps', item?.url]\" [ngStyle]=\"{'background-image': 'url('+ item?.Images[0] +')'}\">\r\n                                                <h4 class=\"title-label\">\r\n                                                    <span class=\"icon\"><img src=\"{{item?.IconText}}\" aria-hidden=\"true\"></span>                                                    {{item.chieuRong}} - {{item.chieuCao}} - {{item.Ten}}\r\n                                                </h4>\r\n\r\n                                            </a>\r\n\r\n                                            <!-- style ô vuông là dạng slide  -->\r\n                                            <div class=\"child\" *ngIf=\"item?.style == 'Slide'\">\r\n                                                <h4 class=\"title-label\">\r\n                                                    <span class=\"icon\"><img src=\"{{item.IconText}}\" aria-hidden=\"true\"></span>                                                    {{item.chieuRong}} - {{item.chieuCao}} - {{item.Ten}}\r\n                                                </h4>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </main>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *showItDevice=\"['mobile']\">\r\n    <nav class=\"m-nav\" fxLayout=\"row\" [ngStyle]=\"{'background-color': config?.MauDam}\" fxLayoutAlign=\"space-between center\">\r\n        <div class=\"m-brand\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <img class=\"m-brand-logo\" [src]=\"config?.Logo\">\r\n            <div>{{config?.ThuongHieu | uppercase}}</div>\r\n        </div>\r\n        <div>\r\n            <a href=\"#\" style=\"padding:0 20px;\">Menu</a>\r\n        </div>\r\n    </nav>\r\n    <div class=\"m-content\">\r\n        <ng-container *ngFor=\"let blocks of menus\">\r\n            <div class=\"m-header-title\">{{blocks?.Ten | uppercase}}</div>\r\n            <ng-container *ngFor=\"let item of blocks?.items\">\r\n                <a [routerLink]=\"['/apps',item?.url]\" class=\"m-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"m-cover\" [ngStyle]=\"{'background-image': 'url('+ item?.Images[0] +')'}\"></div>\r\n                    <div style=\"padding:0 10px\">\r\n                        {{item?.Ten}}\r\n                    </div>\r\n                </a>\r\n            </ng-container>\r\n        </ng-container>\r\n    </div>\r\n</ng-container>\r\n"

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
        this.blockFull = false;
        this.settingService.itemValue.subscribe(function (data) {
            console.log('abc', data);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.getFirstConfig().subscribe(function () {
            _this.menus = _this.settingService.getMenu();
            _this.config = _this.settingService.getConfig();
            setTimeout(function () {
                HomeObject.byWidth('all');
                // this.showMore();
            }, 0);
        });
    };
    HomeComponent.prototype.showMore = function (id) {
        this.menus[0].items = this.menus[0].items.concat(this.menus[0].items);
        setTimeout(function () {
            HomeObject.byHeight(id);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_responsive__ = __webpack_require__("../../../../ng2-responsive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Định nghĩa router riêng cho module này
var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */] }
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
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_responsive__["ResponsiveModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__Share_Services_setting_service__["a" /* SettingService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map