webpackJsonp([12],{

/***/ "../../../../../src/app/Apps/Hoichantructuyen/Hoichantructuyen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Hoichantructuyen/Hoichantructuyen.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:900px; height:100%\">\r\n    <app-window> <iframe style=\"border:none\" width=\"100%\" height=\"100%\" src=\"https://meet.jit.si/truongkhoa\"></iframe></app-window>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Hoichantructuyen/Hoichantructuyen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoichantructuyenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoichantructuyenComponent = (function () {
    function HoichantructuyenComponent() {
    }
    HoichantructuyenComponent.prototype.ngOnInit = function () {
    };
    return HoichantructuyenComponent;
}());
HoichantructuyenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hoichantructuyen',
        template: __webpack_require__("../../../../../src/app/Apps/Hoichantructuyen/Hoichantructuyen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Hoichantructuyen/Hoichantructuyen.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HoichantructuyenComponent);

//# sourceMappingURL=Hoichantructuyen.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Hoichantructuyen/Hoichantructuyen.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Hoichantructuyen_component__ = __webpack_require__("../../../../../src/app/Apps/Hoichantructuyen/Hoichantructuyen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoichantructuyenModule", function() { return HoichantructuyenModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__Hoichantructuyen_component__["a" /* HoichantructuyenComponent */]
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routing);
var HoichantructuyenModule = (function () {
    function HoichantructuyenModule() {
    }
    return HoichantructuyenModule;
}());
HoichantructuyenModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], Routing, __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__["a" /* ShareModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__Hoichantructuyen_component__["a" /* HoichantructuyenComponent */]]
    })
], HoichantructuyenModule);

//# sourceMappingURL=Hoichantructuyen.module.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map