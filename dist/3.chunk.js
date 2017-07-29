webpackJsonp([3],{

/***/ "../../../../../src/app/Home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scroll {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    height: calc(100%-100px);\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n\r\n}\r\n\r\n\r\n/* .content {\r\n    flex-direction: row;\r\n} */\r\n\r\n.block {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    height: 580px;\r\n    overflow-y: hidden;\r\n    min-width: 435px;\r\n    margin: 10px;\r\n    transition:all 0.5s ease-in-out;\r\n}\r\n\r\n.header {\r\n    background-color: transparent;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.brand {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.body {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.grid {\r\n    /* height: 100%; */\r\n    /* width: 435px; */\r\n    min-width: 435px;\r\n}\r\n\r\n.grid-item {\r\n    width: 145px;\r\n    height: 145px;\r\n    padding: 5px;\r\n    transition:all 0.4s ease-in-out;\r\n}\r\n\r\n.grid-item-w2 {\r\n    width: 290px;\r\n\r\n}\r\n\r\n.grid-item-w3 {\r\n    width: 435px;\r\n}\r\n\r\n.child {\r\n    padding: 5px;\r\n    background-color: gold;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"screen\">\r\n    <div class=\"header\">\r\n        <div class=\"brand\">\r\n\r\n            <div class=\"brand-logo\">\r\n                <img class=\"brand-logo-img\" src=\"assets/images/logo-startscreen.png\">\r\n            </div>\r\n            <div class=\"brand-title\">Trưởng Khoa</div>\r\n\r\n        </div>\r\n        <div class=\"controls\">\r\n            <button class=\"btn btn-default\" (click)=\"showMore()\">Button Home</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"content scroll\">\r\n        <ng-container *ngFor=\"let blocks of menus\">\r\n            <div class=\"block\" [id]=\"blocks.Id\">\r\n                <div class=\"title\">{{blocks.Ten}}</div>\r\n                <div class=\"body\">\r\n                    <div class=\"grid\">\r\n                         <ng-container *ngFor=\"let item of blocks.items\">\r\n                            <div class=\"grid-item\" [ngClass]=\"\r\n                                {'grid-item-w2': item.chieuRong==2,\r\n                                'grid-item-w3': item.chieuRong==3,\r\n                                'grid-item-h3': item.chieuCao==3,\r\n                                'grid-item-h2': item.chieuCao==2\r\n                                }\r\n                                \">\r\n\r\n                                <div class=\"child\">{{item.ChieuRong}}</div>\r\n\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n"

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