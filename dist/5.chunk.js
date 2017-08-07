webpackJsonp([5],{

/***/ "../../../../../src/app/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.block {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    height: 100%;\r\n    overflow-y: hidden;\r\n    margin: 10px;\r\n    margin-left: 80px;\r\n}\r\n\r\n.block.fixwidth {\r\n    width: 435px;\r\n}\r\n\r\n.grid {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n    -ms-grid-columns: (145px)[3];\r\n        grid-template-columns: repeat(3, 145px);\r\n    grid-auto-rows: 145px;\r\n    grid-auto-columns: 145px;\r\n    grid-auto-flow: row dense;\r\n\r\n}\r\n\r\n@media screen and (max-height: 700px) {\r\n    .grid {\r\n        max-height: 435px;\r\n        overflow: hidden;\r\n    }\r\n    .g-holiz {\r\n        -ms-grid-rows: (145px)[3];\r\n            grid-template-rows: repeat(3, 145px);\r\n        grid-auto-flow: column dense;\r\n    }\r\n}\r\n\r\n@media screen and (min-height: 701px) {\r\n    .g-holiz {\r\n        -ms-grid-rows: (145px)[4];\r\n            grid-template-rows: repeat(4, 145px);\r\n        grid-auto-flow: column dense;\r\n    }\r\n}\r\n\r\n.grid-item-w2 {\r\n    -ms-grid-column: span 2;\r\n        grid-column: span 2;\r\n}\r\n\r\n.grid-item-w3 {\r\n    -ms-grid-column: span 3;\r\n        grid-column: span 3;\r\n}\r\n\r\n.grid-item-h2 {\r\n    -ms-grid-row: span 2;\r\n        grid-row: span 2;\r\n}\r\n\r\n.grid-item-h3 {\r\n    -ms-grid-row: span 3;\r\n        grid-row: span 3;\r\n}\r\n\r\n.grid-item {\r\n    padding: 5px;\r\n    float: left;\r\n    -webkit-animation: scale .25s ease-out;\r\n            animation: scale .25s ease-out;\r\n}\r\n\r\n.grid-item-w2 .title-label {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\n.grid-item-w2 .title-label-icon {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\n.icon-background img {\r\n    width: 58px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.child {\r\n    padding: 5px;\r\n    background-color: gold;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    float: left;\r\n    cursor: pointer;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n@-webkit-keyframes scale {\r\n    0% {\r\n        -webkit-transform: scale(0.0);\r\n                transform: scale(0.0);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.0);\r\n                transform: scale(1.0);\r\n    }\r\n}\r\n\r\n@keyframes scale {\r\n    0% {\r\n        -webkit-transform: scale(0.0);\r\n                transform: scale(0.0);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1.0);\r\n                transform: scale(1.0);\r\n    }\r\n}\r\n\r\n.title {\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    float: left;\r\n    position: relative;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 10px 60px 10px 5px;\r\n}\r\n\r\n.title-item {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.count-apps {\r\n    margin-left: 5px;\r\n    color: #fff;\r\n    font-size: 12px;\r\n}\r\n\r\n.screen {\r\n    background: linear-gradient(to bottom, #10b2e1 0%, #26ceeb 31%, #b9e8fa 100%);\r\n    min-width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n.title-label {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 13px 10px 10px 10px;\r\n    z-index: 9999;\r\n    color: #fff;\r\n    background: linear-gradient(to top, rgba(0, 0, 0, .60) 0, rgba(255, 255, 255, .05) 100%);\r\n    font-size: 15px;\r\n}\r\n\r\n.title-label .icon img {\r\n    width: 20px;\r\n}\r\n\r\n.title-label-icon .icon img {\r\n    width: 20px;\r\n}\r\n\r\n.title-label-icon {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 13px 10px 10px 10px;\r\n    z-index: 9999;\r\n    color: #fff;\r\n    font-size: 15px;\r\n}\r\n\r\n.body .grid .grid-item .child .title-label .icon img {\r\n    width: 20px;\r\n}\r\n\r\n.wrapper {\r\n    background: linear-gradient(to bottom, #10b2e1 0%, #26ceeb 31%, #b9e8fa 100%);\r\n    min-width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    position: absolute;\r\n    padding-top: 100px;\r\n}\r\n\r\n.header {\r\n    height: 100px;\r\n    width: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.logo {\r\n    float: left;\r\n    margin-top: 30px;\r\n    margin-left: 80px;\r\n}\r\n\r\n.logo img {\r\n    float: left;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.logo span {\r\n    float: left;\r\n    margin: 15px 0 15px 5px;\r\n    font-size: 28px;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.search-home {\r\n    padding: 45px 5px 45px 80px;\r\n    width: 300px;\r\n    float: right;\r\n}\r\n\r\n.input-control {\r\n    display: inline-block;\r\n    min-height: 34px;\r\n    height: 35px;\r\n    width: 100%;\r\n    position: relative;\r\n    vertical-align: middle;\r\n    margin: 0;\r\n    line-height: 1;\r\n    position: relative;\r\n}\r\n\r\n.input-control .icon-search {\r\n    position: absolute;\r\n    top: 11px;\r\n    left: 10px;\r\n    color: #777;\r\n    display: inline-block;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.input-control input {\r\n    padding: 9px 10px 9px 30px;\r\n    border: none;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 100%;\r\n    color: #323232;\r\n}\r\n\r\n.controls {\r\n    float: right;\r\n    margin-top: 45px;\r\n    margin-right: 50px;\r\n}\r\n\r\n.controls .user {\r\n    float: left;\r\n    margin-right: 2px;\r\n}\r\n\r\n.controls .user .name-user {\r\n    background: #fff;\r\n    padding: 7px 10px;\r\n    height: 35px;\r\n    line-height: 22px;\r\n    float: left;\r\n    margin-right: 4px;\r\n    color: #323232;\r\n}\r\n\r\n.logo {\r\n    float: left;\r\n    margin-top: 30px;\r\n    margin-left: 80px;\r\n}\r\n\r\n.input-control .icon-search {\r\n    position: absolute;\r\n    top: 11px;\r\n    left: 10px;\r\n    color: #777;\r\n    display: inline-block;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.input-control input {\r\n    padding: 9px 10px 9px 30px;\r\n    border: none;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 100%;\r\n    color: #323232;\r\n}\r\n\r\n.controls {\r\n    float: right;\r\n    margin-top: 45px;\r\n    margin-right: 50px;\r\n}\r\n\r\n.controls .user {\r\n    float: left;\r\n    margin-right: 2px;\r\n}\r\n\r\n.controls .user .name-user {\r\n    background: #fff;\r\n    padding: 7px 10px;\r\n    height: 35px;\r\n    line-height: 22px;\r\n    float: left;\r\n    margin-right: 4px;\r\n    color: #323232;\r\n}\r\n\r\n.controls .user .sign-up-now {\r\n    background: #0f9cb3;\r\n    color: #fff;\r\n    padding: 7px 10px;\r\n    height: 35px;\r\n    line-height: 22px;\r\n    float: left;\r\n    margin-right: 2px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n/* Mobile css */\r\n\r\n.m-nav {\r\n    height: 60px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    color: white;\r\n}\r\n\r\n.m-brand {\r\n    padding: 0 10px;\r\n}\r\n\r\n.m-brand-logo {\r\n    margin-right: 10px;\r\n    width: 42px;\r\n    height: 42px;\r\n}\r\n\r\n.m-header-title {\r\n    margin: 0;\r\n    padding: 15px 10px 5px;\r\n    font-size: 14px;\r\n    color: #fff;\r\n}\r\n\r\n.m-body {\r\n    background: url(https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg) no-repeat center center fixed;\r\n    background-size: cover;\r\n}\r\n\r\n.m-content {\r\n    padding-top: 60px;\r\n}\r\n\r\n.m-item {\r\n    padding: 5px 0;\r\n    margin: 0 10px;\r\n    border-bottom: rgba(255, 255, 255, .3) 1px solid;\r\n}\r\n\r\n.m-item:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.m-cover {\r\n    min-width: 60px;\r\n    min-height: 60px;\r\n    border-radius: 30px;\r\n    background-position: center center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.title-services {\r\n    padding: 0 10px;\r\n    color: #fff;\r\n}\r\n\r\n.account {\r\n    color: #fff;\r\n    padding: 0 15px;\r\n    font-size: 18px;\r\n    position: relative;\r\n    float: right;\r\n}\r\n\r\n.dropdown-menu {\r\n    top: 42px;\r\n    right: -1px;\r\n    left: auto !important;\r\n    min-width: 120px;\r\n    border-radius: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.dropdown-menu .divider {\r\n    margin: 0;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    padding: 7px 10px;\r\n}\r\n\r\n.dropdown-menu>li>a .icon {\r\n    margin-right: 5px;\r\n}\r\n\r\n.search-mb {\r\n    font-size: 18px;\r\n    float: right;\r\n    position: relative;\r\n    padding: 0 5px;\r\n}\r\n\r\n.search-mb:hover,\r\n.search-mb:focus {\r\n    border: none;\r\n}\r\n\r\n.input-control.mb-home {\r\n    min-height: 34px;\r\n    height: 35px;\r\n    display: block;\r\n    vertical-align: middle;\r\n    margin: 0 0 0 10px;\r\n    position: relative;\r\n    -ms-flex-preferred-size: calc(100% - 100px);\r\n        flex-basis: calc(100% - 100px);\r\n}\r\n\r\n.input-control.mb-home .icon-search {\r\n    position: absolute;\r\n    top: 11px;\r\n    left: 10px;\r\n    color: #777;\r\n    display: inline-block;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.input-control.mb-home input {\r\n    padding: 9px 10px 9px 30px;\r\n    border: none;\r\n    height: 35px;\r\n    line-height: 35px;\r\n    width: 100%;\r\n    color: #323232;\r\n}\r\n\r\n.fxs-panorama.home {\r\n    height: calc(100vh - 100px);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *showItDevice=\"['desktop', 'tablet']\">\r\n\r\n    <div class=\"fxs-portal wrapper\" fxLayoutAlign=\"start stretch\" fxLayout=\"column\" [ngStyle]=\"{'background-image': 'url('+ config?.Background +')'}\">\r\n\r\n        <div class=\"fxs-topbar header\" [ngStyle]=\"{'background-color': (menus?.MauDam | async)} \">\r\n            <div class=\"logo\">\r\n                <img *ngIf=\"config?.Logo\" width=\"50px\" [src]=\"config?.Logo\">\r\n                <span>{{config?.ThuongHieu}}</span>\r\n            </div>\r\n            <div class=\"controls\">\r\n                <div class=\"user\">\r\n                    <a href=\"#\" class=\"name-user bt-sign-up\" (click)=\"reLayout()\">\r\n                        <span class=\"fa fa-fw fa-sign-in icon\" aria-hidden=\"true\"></span>\r\n                        Đăng nhập\r\n                    </a>\r\n                    <a href=\"#\" class=\"sign-up-now bt-sign-up\">\r\n                        <span class=\"fa fa-fw fa-user-plus icon\" aria-hidden=\"true\"></span>\r\n                        Đăng ký ngay\r\n                    </a>\r\n                </div>\r\n                <!-- <div class=\"controls\">\r\n                    <a href=\"#\" class=\"view-all\" (click)=\"showMore()\">\r\n                      <span>Xem tất cả</span>\r\n                      <i class=\"fa fa-fw fa-arrow-circle-o-right\"></i>\r\n                    </a>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"search-home\">\r\n                <div class=\"input-control text full-size\">\r\n                    <span class=\"glyphicon glyphicon-search icon-search\" aria-hidden=\"true\"></span>\r\n                    <input type=\"text\" placeholder=\"Tìm dịch vụ...\" [(ngModel)]=\"searchKey\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start stretch\" class=\"fxs-portal-main\">\r\n            <main class=\"fxs-panorama home\">\r\n                <div class=\"fxs-blade-content-container\" *ngIf=\"menus\">\r\n                    <ng-container *ngFor=\"let blocks of menus; let bl_i = index\">\r\n                        <div class=\"block\" [id]=\"blocks?.Id\" [ngClass]=\"{'fixwidth': !blocks?.full}\">\r\n                            <div class=\"title\">\r\n                                {{blocks.Ten}}\r\n                                <span class=\"count-apps\">({{blocks?.items.length}} apps)</span>\r\n                            </div>\r\n\r\n\r\n                            <section class=\"grid\" [ngClass]=\"{'g-holiz': blocks?.full}\">\r\n                                <ng-container *ngFor=\"let item of blocks?.items | homeFilter:searchKey\">\r\n                                    <div class=\"grid-item\"  [ngClass]=\"\r\n                                {\r\n                                    'grid-item-w2': item.chieuRong==2,\r\n                                    'grid-item-w3': item.chieuRong==3,\r\n                                    'grid-item-h3': item.chieuCao==3,\r\n                                    'grid-item-h2': item.chieuCao==2\r\n                                }\"\r\n                                >\r\n                                        <a class=\"child\" *ngIf=\"item?.style == 'Icon'\" [style.background-color]=\"item?.mauNen\" [routerLink]=\"['/apps', item?.url]\">\r\n                                            <div class=\"icon-background\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                                                <img src=\"{{item?.IconText}}\">\r\n                                            </div>\r\n                                            <h4 class=\"title-label-icon\">\r\n                                                <span class=\"icon\">\r\n                                                        <img src=\"{{item?.IconText}}\" aria-hidden=\"true\">\r\n                                                    </span> {{item.Ten}}\r\n                                            </h4>\r\n                                        </a>\r\n                                        <a class=\"child\" *ngIf=\"item?.style == 'Image'\" [routerLink]=\"['/apps', item?.url]\" [ngStyle]=\"{'background-image': 'url('+ item?.Images[0] +')'}\">\r\n                                            <h4 class=\"title-label\">\r\n                                                <span class=\"icon\">\r\n                                                        <img src=\"{{item?.IconText}}\" aria-hidden=\"true\">\r\n                                                    </span> {{item.Ten}}\r\n                                            </h4>\r\n\r\n                                        </a>\r\n\r\n                                        <div class=\"child\" *ngIf=\"item?.style == 'Slide'\">\r\n                                            <h4 class=\"title-label\">\r\n                                                <span class=\"icon\"><img src=\"{{item.IconText}}\" aria-hidden=\"true\"></span>                                                {{item.Ten}}\r\n                                            </h4>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </section>\r\n                            <div class=\"bottom\">\r\n                                <a *ngIf=\"!blocks?.full\" (click)=\"showMore(bl_i)\" class=\"show-all\">\r\n                                  <span style=\"cursor: pointer\">Xem tất cả</span>\r\n                                  <i class=\"fa fa-fw fa-arrow-circle-o-right\"></i>\r\n                                </a>\r\n                                <a *ngIf=\"blocks?.full\" (click)=\"showLess(bl_i)\" class=\"show-all\">\r\n                                  <span style=\"cursor: pointer\">Thu gọn</span>\r\n                                  <i class=\"fa fa-fw fa-arrow-circle-o-left\"></i>\r\n                                </a>\r\n                            </div>\r\n                            <!-- </div> -->\r\n                            <!-- </div> -->\r\n                        </div>\r\n\r\n                    </ng-container>\r\n                    <!-- thêm khoảng cách vào cuối cùng -->\r\n                    <div style=\"padding:40px\"> </div>\r\n                </div>\r\n            </main>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-container *showItDevice=\"['mobile']\">\r\n    <div class=\"m-body\">\r\n        <nav class=\"m-nav\" fxLayout=\"row\" [ngStyle]=\"{'background-color': config?.MauDam}\" fxLayoutAlign=\"space-between center\">\r\n            <div *ngIf=\"!searchState\" class=\"m-brand\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <img class=\"m-brand-logo\" [src]=\"config?.Logo\">\r\n                <div>{{config?.ThuongHieu | uppercase}}</div>\r\n            </div>\r\n            <div *ngIf=\"searchState\" class=\"input-control mb-home\">\r\n                <span class=\"glyphicon glyphicon-search icon-search\" aria-hidden=\"true\"></span>\r\n                <input type=\"text\" placeholder=\"Tìm dịch vụ...\">\r\n            </div>\r\n            <div>\r\n                <a href=\"#\" class=\"account\">\r\n                    <span class=\"glyphicon glyphicon-user dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-hidden=\"true\"></span>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\"><span class=\"fa fa-fw fa-sign-in icon\" aria-hidden=\"true\"></span>Đăng nhập</a></li>\r\n                <li role=\"separator\" class=\"divider\"></li>\r\n                <li><a href=\"#\"><span class=\"fa fa-fw fa-user-plus icon\" aria-hidden=\"true\"></span>Đăng ký</a></li>\r\n                </ul>\r\n                </a>\r\n                <div class=\"search-mb\">\r\n                    <span (click)=\"searchState=!searchState\" class=\"glyphicon glyphicon-search dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                        aria-expanded=\"false\" aria-hidden=\"true\"></span>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n        <div class=\"m-content\">\r\n            <ng-container *ngFor=\"let blocks of menus\">\r\n                <div class=\"m-header-title\">{{blocks?.Ten | uppercase}}</div>\r\n                <ng-container *ngFor=\"let item of blocks?.items\">\r\n                    <a [routerLink]=\"['/apps',item?.url]\" class=\"m-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <div class=\"m-cover\" [ngStyle]=\"{'background-image': 'url('+ item?.Images[0] +')'}\"></div>\r\n                        <div class=\"title-services\">\r\n                            {{item?.Ten}}\r\n                        </div>\r\n                    </a>\r\n                </ng-container>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n"

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
        this.runAnimation = false;
        this.searchState = false;
        this.state = 'show';
        // this.settingService.itemValue.subscribe((data) => {
        //     console.log('abc', data);
        // });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.getFirstConfig().subscribe(function () {
            _this.menus = _this.settingService.getMenu();
            _this.config = _this.settingService.getConfig();
        });
    };
    HomeComponent.prototype.showMore = function (i) {
        this.menus.forEach(function (block) {
            block.full = false;
        });
        // this.menus[i].items = [...this.menus[i].items, ...this.menus[i].items];
        this.menus[i].full = true;
        this.state = 'show';
    };
    HomeComponent.prototype.showLess = function (i) {
        this.menus[i].full = false;
    };
    HomeComponent.prototype.getRandomInt = function (min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min) * 0.01;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Share_Pipes_homeFilter_pipe__ = __webpack_require__("../../../../../src/app/Share/Pipes/homeFilter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Định nghĩa router riêng cho module này
var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */] }
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
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            Routing,
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_responsive__["ResponsiveModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__Share_Services_setting_service__["a" /* SettingService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__Share_Pipes_homeFilter_pipe__["a" /* HomeFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/Share/Pipes/homeFilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_slugify__ = __webpack_require__("../../../../ng2-slugify/ng2-slugify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_slugify__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeFilterPipe = (function () {
    function HomeFilterPipe() {
        this.slug = new __WEBPACK_IMPORTED_MODULE_1_ng2_slugify__["Slug"]('vietnamese');
    }
    HomeFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // return items.filter(item => item.Ten.indexOf(filter) !== -1);
        var searchKey = this.slug.slugify(filter.toLowerCase());
        return items.filter(function (item) {
            return _this.slug.slugify(item.Ten.toLowerCase()).indexOf(searchKey) !== -1;
        });
    };
    return HomeFilterPipe;
}());
HomeFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'homeFilter',
        pure: false
    })
], HomeFilterPipe);

//# sourceMappingURL=homeFilter.pipe.js.map

/***/ }),

/***/ "../../../../ng2-slugify/charmaps.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Charmaps", function() { return Charmaps; });
// Do not edit this file. It is automatically generated
// by grunt from JSON files in rules directory
var Charmaps = (function () {
    function Charmaps() {
        this.initMaps();
    }
    ;
    Charmaps.prototype.getMaps = function (key) {
        return this.maps[key];
    };
    Charmaps.prototype.initMaps = function () {
        this.maps = {
            "arabic": {
                "أ": "a",
                "ب": "b",
                "ت": "t",
                "ث": "th",
                "ج": "g",
                "ح": "h",
                "خ": "kh",
                "د": "d",
                "ذ": "th",
                "ر": "r",
                "ز": "z",
                "س": "s",
                "ش": "sh",
                "ص": "s",
                "ض": "d",
                "ط": "t",
                "ظ": "th",
                "ع": "aa",
                "غ": "gh",
                "ف": "f",
                "ق": "k",
                "ك": "k",
                "ل": "l",
                "م": "m",
                "ن": "n",
                "ه": "h",
                "و": "o",
                "ي": "y"
            },
            "austrian": {
                "Ä": "AE",
                "Ö": "OE",
                "Ü": "UE",
                "ß": "sz",
                "ä": "ae",
                "ö": "oe",
                "ü": "ue"
            },
            "burmese": {
                "က": "k",
                "ခ": "kh",
                "ဂ": "g",
                "ဃ": "ga",
                "င": "ng",
                "စ": "s",
                "ဆ": "sa",
                "ဇ": "z",
                "စျ": "za",
                "ည": "ny",
                "ဋ": "t",
                "ဌ": "ta",
                "ဍ": "d",
                "ဎ": "da",
                "ဏ": "na",
                "တ": "t",
                "ထ": "ta",
                "ဒ": "d",
                "ဓ": "da",
                "န": "n",
                "ပ": "p",
                "ဖ": "pa",
                "ဗ": "b",
                "ဘ": "ba",
                "မ": "m",
                "ယ": "y",
                "ရ": "ya",
                "လ": "l",
                "ဝ": "w",
                "သ": "th",
                "ဟ": "h",
                "ဠ": "la",
                "အ": "a",
                "ြ": "y",
                "ျ": "ya",
                "ွ": "w",
                "ြွ": "yw",
                "ျွ": "ywa",
                "ှ": "h",
                "ဧ": "e",
                "၏": "-e",
                "ဣ": "i",
                "ဤ": "-i",
                "ဉ": "u",
                "ဦ": "-u",
                "ဩ": "aw",
                "သြော": "aw",
                "ဪ": "aw",
                "၍": "ywae",
                "၌": "hnaik",
                "၀": "0",
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "္": "",
                "့": "",
                "း": "",
                "ာ": "a",
                "ါ": "a",
                "ေ": "e",
                "ဲ": "e",
                "ိ": "i",
                "ီ": "i",
                "ို": "o",
                "ု": "u",
                "ူ": "u",
                "ေါင်": "aung",
                "ော": "aw",
                "ော်": "aw",
                "ေါ": "aw",
                "ေါ်": "aw",
                "်": "at",
                "က်": "et",
                "ိုက်": "aik",
                "ောက်": "auk",
                "င်": "in",
                "ိုင်": "aing",
                "ောင်": "aung",
                "စ်": "it",
                "ည်": "i",
                "တ်": "at",
                "ိတ်": "eik",
                "ုတ်": "ok",
                "ွတ်": "ut",
                "ေတ်": "it",
                "ဒ်": "d",
                "ိုဒ်": "ok",
                "ုဒ်": "ait",
                "န်": "an",
                "ာန်": "an",
                "ိန်": "ein",
                "ုန်": "on",
                "ွန်": "un",
                "ပ်": "at",
                "ိပ်": "eik",
                "ုပ်": "ok",
                "ွပ်": "ut",
                "န်ုပ်": "nub",
                "မ်": "an",
                "ိမ်": "ein",
                "ုမ်": "on",
                "ွမ်": "un",
                "ယ်": "e",
                "ိုလ်": "ol",
                "ဉ်": "in",
                "ံ": "an",
                "ိံ": "ein",
                "ုံ": "on"
            },
            "czech": {
                "Č": "C",
                "Ď": "D",
                "Ě": "E",
                "Ň": "N",
                "Ř": "R",
                "Š": "S",
                "Ť": "T",
                "Ů": "U",
                "Ž": "Z",
                "č": "c",
                "ď": "d",
                "ě": "e",
                "ň": "n",
                "ř": "r",
                "š": "s",
                "ť": "t",
                "ů": "u",
                "ž": "z"
            },
            "default": {
                "°": 0,
                "¹": 1,
                "²": 2,
                "³": 3,
                "⁴": 4,
                "⁵": 5,
                "⁶": 6,
                "⁷": 7,
                "⁸": 8,
                "⁹": 9,
                "₀": 0,
                "₁": 1,
                "₂": 2,
                "₃": 3,
                "₄": 4,
                "₅": 5,
                "₆": 6,
                "₇": 7,
                "₈": 8,
                "₉": 9,
                "æ": "ae",
                "ǽ": "ae",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Å": "AA",
                "Ǻ": "A",
                "Ă": "A",
                "Ǎ": "A",
                "Æ": "AE",
                "Ǽ": "AE",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "å": "aa",
                "ǻ": "a",
                "ă": "a",
                "ǎ": "a",
                "ª": "a",
                "@": "at",
                "Ĉ": "C",
                "Ċ": "C",
                "ĉ": "c",
                "ċ": "c",
                "©": "c",
                "Ð": "Dj",
                "Đ": "D",
                "ð": "dj",
                "đ": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "Ĕ": "E",
                "Ė": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "ĕ": "e",
                "ė": "e",
                "ƒ": "f",
                "Ĝ": "G",
                "Ġ": "G",
                "ĝ": "g",
                "ġ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "Ĩ": "I",
                "Ĭ": "I",
                "Ǐ": "I",
                "Į": "I",
                "Ĳ": "IJ",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "ĩ": "i",
                "ĭ": "i",
                "ǐ": "i",
                "į": "i",
                "ĳ": "ij",
                "Ĵ": "J",
                "ĵ": "j",
                "Ĺ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "ĺ": "l",
                "ľ": "l",
                "ŀ": "l",
                "Ñ": "N",
                "ñ": "n",
                "ŉ": "n",
                "Ò": "O",
                "Ô": "O",
                "Õ": "O",
                "Ō": "O",
                "Ŏ": "O",
                "Ǒ": "O",
                "Ő": "O",
                "Ơ": "O",
                "Ø": "OE",
                "Ǿ": "O",
                "Œ": "OE",
                "ò": "o",
                "ô": "o",
                "õ": "o",
                "ō": "o",
                "ŏ": "o",
                "ǒ": "o",
                "ő": "o",
                "ơ": "o",
                "ø": "oe",
                "ǿ": "o",
                "º": "o",
                "œ": "oe",
                "Ŕ": "R",
                "Ŗ": "R",
                "ŕ": "r",
                "ŗ": "r",
                "Ŝ": "S",
                "Ș": "S",
                "ŝ": "s",
                "ș": "s",
                "ſ": "s",
                "Ţ": "T",
                "Ț": "T",
                "Ŧ": "T",
                "Þ": "TH",
                "ţ": "t",
                "ț": "t",
                "ŧ": "t",
                "þ": "th",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ŭ": "U",
                "Ű": "U",
                "Ų": "U",
                "Ư": "U",
                "Ǔ": "U",
                "Ǖ": "U",
                "Ǘ": "U",
                "Ǚ": "U",
                "Ǜ": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ŭ": "u",
                "ű": "u",
                "ų": "u",
                "ư": "u",
                "ǔ": "u",
                "ǖ": "u",
                "ǘ": "u",
                "ǚ": "u",
                "ǜ": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ý": "Y",
                "Ÿ": "Y",
                "Ŷ": "Y",
                "ý": "y",
                "ÿ": "y",
                "ŷ": "y"
            },
            "esperanto": {
                "ĉ": "cx",
                "ĝ": "gx",
                "ĥ": "hx",
                "ĵ": "jx",
                "ŝ": "sx",
                "ŭ": "ux",
                "Ĉ": "CX",
                "Ĝ": "GX",
                "Ĥ": "HX",
                "Ĵ": "JX",
                "Ŝ": "SX",
                "Ŭ": "UX"
            },
            "finnish": {
                "Ä": "A",
                "Ö": "O",
                "ä": "a",
                "ö": "o"
            },
            "georgian": {
                "ა": "a",
                "ბ": "b",
                "გ": "g",
                "დ": "d",
                "ე": "e",
                "ვ": "v",
                "ზ": "z",
                "თ": "t",
                "ი": "i",
                "კ": "k",
                "ლ": "l",
                "მ": "m",
                "ნ": "n",
                "ო": "o",
                "პ": "p",
                "ჟ": "zh",
                "რ": "r",
                "ს": "s",
                "ტ": "t",
                "უ": "u",
                "ფ": "f",
                "ქ": "k",
                "ღ": "gh",
                "ყ": "q",
                "შ": "sh",
                "ჩ": "ch",
                "ც": "ts",
                "ძ": "dz",
                "წ": "ts",
                "ჭ": "ch",
                "ხ": "kh",
                "ჯ": "j",
                "ჰ": "h"
            },
            "german": {
                "Ä": "AE",
                "Ö": "OE",
                "Ü": "UE",
                "ß": "ss",
                "ä": "ae",
                "ö": "oe",
                "ü": "ue"
            },
            "greek": {
                "ΑΥ": "AU",
                "Αυ": "Au",
                "ΟΥ": "OU",
                "Ου": "Ou",
                "ΕΥ": "EU",
                "Ευ": "Eu",
                "ΕΙ": "I",
                "Ει": "I",
                "ΟΙ": "I",
                "Οι": "I",
                "ΥΙ": "I",
                "Υι": "I",
                "ΑΎ": "AU",
                "Αύ": "Au",
                "ΟΎ": "OU",
                "Ού": "Ou",
                "ΕΎ": "EU",
                "Εύ": "Eu",
                "ΕΊ": "I",
                "Εί": "I",
                "ΟΊ": "I",
                "Οί": "I",
                "ΎΙ": "I",
                "Ύι": "I",
                "ΥΊ": "I",
                "Υί": "I",
                "αυ": "au",
                "ου": "ou",
                "ευ": "eu",
                "ει": "i",
                "οι": "i",
                "υι": "i",
                "αύ": "au",
                "ού": "ou",
                "εύ": "eu",
                "εί": "i",
                "οί": "i",
                "ύι": "i",
                "υί": "i",
                "Α": "A",
                "Β": "V",
                "Γ": "G",
                "Δ": "D",
                "Ε": "E",
                "Ζ": "Z",
                "Η": "I",
                "Θ": "Th",
                "Ι": "I",
                "Κ": "K",
                "Λ": "L",
                "Μ": "M",
                "Ν": "N",
                "Ξ": "X",
                "Ο": "O",
                "Π": "P",
                "Ρ": "R",
                "Σ": "S",
                "Τ": "T",
                "Υ": "I",
                "Φ": "F",
                "Χ": "Ch",
                "Ψ": "Ps",
                "Ω": "O",
                "Ά": "A",
                "Έ": "E",
                "Ή": "I",
                "Ί": "I",
                "Ό": "O",
                "Ύ": "I",
                "Ϊ": "I",
                "Ϋ": "I",
                "ϒ": "I",
                "α": "a",
                "β": "v",
                "γ": "g",
                "δ": "d",
                "ε": "e",
                "ζ": "z",
                "η": "i",
                "θ": "th",
                "ι": "i",
                "κ": "k",
                "λ": "l",
                "μ": "m",
                "ν": "n",
                "ξ": "x",
                "ο": "o",
                "π": "p",
                "ρ": "r",
                "ς": "s",
                "σ": "s",
                "τ": "t",
                "υ": "i",
                "φ": "f",
                "χ": "ch",
                "ψ": "ps",
                "ω": "o",
                "ά": "a",
                "έ": "e",
                "ή": "i",
                "ί": "i",
                "ό": "o",
                "ύ": "i",
                "ϊ": "i",
                "ϋ": "i",
                "ΰ": "i",
                "ώ": "o",
                "ϐ": "v",
                "ϑ": "th"
            },
            "hindi": {
                "अ": "a",
                "आ": "aa",
                "ए": "e",
                "ई": "ii",
                "ऍ": "ei",
                "ऎ": "ऎ",
                "ऐ": "ai",
                "इ": "i",
                "ओ": "o",
                "ऑ": "oi",
                "ऒ": "oii",
                "ऊ": "uu",
                "औ": "ou",
                "उ": "u",
                "ब": "B",
                "भ": "Bha",
                "च": "Ca",
                "छ": "Chha",
                "ड": "Da",
                "ढ": "Dha",
                "फ": "Fa",
                "फ़": "Fi",
                "ग": "Ga",
                "घ": "Gha",
                "ग़": "Ghi",
                "ह": "Ha",
                "ज": "Ja",
                "झ": "Jha",
                "क": "Ka",
                "ख": "Kha",
                "ख़": "Khi",
                "ल": "L",
                "ळ": "Li",
                "ऌ": "Li",
                "ऴ": "Lii",
                "ॡ": "Lii",
                "म": "Ma",
                "न": "Na",
                "ङ": "Na",
                "ञ": "Nia",
                "ण": "Nae",
                "ऩ": "Ni",
                "ॐ": "oms",
                "प": "Pa",
                "क़": "Qi",
                "र": "Ra",
                "ऋ": "Ri",
                "ॠ": "Ri",
                "ऱ": "Ri",
                "स": "Sa",
                "श": "Sha",
                "ष": "Shha",
                "ट": "Ta",
                "त": "Ta",
                "ठ": "Tha",
                "द": "Tha",
                "थ": "Tha",
                "ध": "Thha",
                "ड़": "ugDha",
                "ढ़": "ugDhha",
                "व": "Va",
                "य": "Ya",
                "य़": "Yi",
                "ज़": "Za"
            },
            "latvian": {
                "Ā": "A",
                "Ē": "E",
                "Ģ": "G",
                "Ī": "I",
                "Ķ": "K",
                "Ļ": "L",
                "Ņ": "N",
                "Ū": "U",
                "ā": "a",
                "ē": "e",
                "ģ": "g",
                "ī": "i",
                "ķ": "k",
                "ļ": "l",
                "ņ": "n",
                "ū": "u"
            },
            "norwegian": {
                "Æ": "AE",
                "Ø": "OE",
                "Å": "AA",
                "æ": "ae",
                "ø": "oe",
                "å": "aa"
            },
            "polish": {
                "Ą": "A",
                "Ć": "C",
                "Ę": "E",
                "Ł": "L",
                "Ń": "N",
                "Ó": "O",
                "Ś": "S",
                "Ź": "Z",
                "Ż": "Z",
                "ą": "a",
                "ć": "c",
                "ę": "e",
                "ł": "l",
                "ń": "n",
                "ó": "o",
                "ś": "s",
                "ź": "z",
                "ż": "z"
            },
            "russian": {
                "Ъ": "",
                "Ь": "",
                "А": "A",
                "Б": "B",
                "Ц": "C",
                "Ч": "Ch",
                "Д": "D",
                "Е": "E",
                "Ё": "E",
                "Э": "E",
                "Ф": "F",
                "Г": "G",
                "Х": "H",
                "И": "I",
                "Й": "Y",
                "Я": "Ya",
                "Ю": "Yu",
                "К": "K",
                "Л": "L",
                "М": "M",
                "Н": "N",
                "О": "O",
                "П": "P",
                "Р": "R",
                "С": "S",
                "Ш": "Sh",
                "Щ": "Shch",
                "Т": "T",
                "У": "U",
                "В": "V",
                "Ы": "Y",
                "З": "Z",
                "Ж": "Zh",
                "ъ": "",
                "ь": "",
                "а": "a",
                "б": "b",
                "ц": "c",
                "ч": "ch",
                "д": "d",
                "е": "e",
                "ё": "e",
                "э": "e",
                "ф": "f",
                "г": "g",
                "х": "h",
                "и": "i",
                "й": "y",
                "я": "ya",
                "ю": "yu",
                "к": "k",
                "л": "l",
                "м": "m",
                "н": "n",
                "о": "o",
                "п": "p",
                "р": "r",
                "с": "s",
                "ш": "sh",
                "щ": "shch",
                "т": "t",
                "у": "u",
                "в": "v",
                "ы": "y",
                "з": "z",
                "ж": "zh"
            },
            "swedish": {
                "Ä": "A",
                "Ö": "O",
                "ä": "a",
                "ö": "ö"
            },
            "turkish": {
                "Ç": "C",
                "Ğ": "G",
                "İ": "I",
                "Ş": "S",
                "Ö": "O",
                "Ü": "U",
                "ç": "c",
                "ğ": "g",
                "ı": "i",
                "ş": "s",
                "ö": "o",
                "ü": "u"
            },
            "ukrainian": {
                "Ґ": "G",
                "І": "I",
                "Ї": "Ji",
                "Є": "Ye",
                "ґ": "g",
                "і": "i",
                "ї": "ji",
                "є": "ye"
            },
            "vietnamese": {
                "ạ": "a",
                "ả": "a",
                "ầ": "a",
                "ấ": "a",
                "ậ": "a",
                "ẩ": "a",
                "ẫ": "a",
                "ằ": "a",
                "ắ": "a",
                "ặ": "a",
                "ẳ": "a",
                "ẵ": "a",
                "ẹ": "e",
                "ẻ": "e",
                "ẽ": "e",
                "ề": "e",
                "ế": "e",
                "ệ": "e",
                "ể": "e",
                "ễ": "e",
                "ị": "i",
                "ỉ": "i",
                "ọ": "o",
                "ỏ": "o",
                "ồ": "o",
                "ố": "o",
                "ộ": "o",
                "ổ": "o",
                "ỗ": "o",
                "ờ": "o",
                "ớ": "o",
                "ợ": "o",
                "ở": "o",
                "ỡ": "o",
                "ụ": "u",
                "ủ": "u",
                "ừ": "u",
                "ứ": "u",
                "ự": "u",
                "ử": "u",
                "ữ": "u",
                "ỳ": "y",
                "ỵ": "y",
                "ỷ": "y",
                "ỹ": "y",
                "Ạ": "A",
                "Ả": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ậ": "A",
                "Ẩ": "A",
                "Ẫ": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ặ": "A",
                "Ẳ": "A",
                "Ẵ": "A",
                "Ẹ": "E",
                "Ẻ": "E",
                "Ẽ": "E",
                "Ề": "E",
                "Ế": "E",
                "Ệ": "E",
                "Ể": "E",
                "Ễ": "E",
                "Ị": "I",
                "Ỉ": "I",
                "Ọ": "O",
                "Ỏ": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ộ": "O",
                "Ổ": "O",
                "Ỗ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ợ": "O",
                "Ở": "O",
                "Ỡ": "O",
                "Ụ": "U",
                "Ủ": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ự": "U",
                "Ử": "U",
                "Ữ": "U",
                "Ỳ": "Y",
                "Ỵ": "Y",
                "Ỷ": "Y",
                "Ỹ": "Y"
            }
        }; /*END*/
    };
    return Charmaps;
}());

//# sourceMappingURL=charmaps.js.map

/***/ }),

/***/ "../../../../ng2-slugify/ng2-slugify.js":
/***/ (function(module, exports, __webpack_require__) {

var charmaps_1 = __webpack_require__("../../../../ng2-slugify/charmaps.ts");
var Slug = (function () {
    function Slug(key) {
        var charmaps = new charmaps_1.Charmaps();
        var k = (key) ? key : 'default';
        this.maps = charmaps.getMaps(k);
    }
    Slug.prototype.slugify = function (s) {
        if (!s) {
            return '';
        }
        var ascii = [];
        var ch, cp;
        for (var i = 0; i < s.length; i++) {
            if ((cp = s.charCodeAt(i)) < 0x180) {
                ch = String.fromCharCode(cp);
                ascii.push(this.maps[ch] || ch);
            }
        }
        s = ascii.join('');
        s = s.replace(/[^\w\s-]/g, '').trim().toLowerCase();
        return s.replace(/[-\s]+/g, '-');
    };
    return Slug;
})();
exports.Slug = Slug;
//# sourceMappingURL=ng2-slugify.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map