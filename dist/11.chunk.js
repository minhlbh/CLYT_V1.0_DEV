webpackJsonp([11],{

/***/ "../../../../../src/app/Apps/Bantinhl7/Bantinhl7.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hl7 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.windows-size {\r\n    width: 900px;\r\n    height: 100%\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Bantinhl7/Bantinhl7.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"windows-size\">\r\n<app-window [idea]=\"true\" name=\"Bản tin HL7\" url=\"apps\">\r\n\r\n    <iframe class=\"hl7\" src=\"http://api.truongkhoa.com/hl7/hl7\"></iframe>\r\n\r\n</app-window>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Bantinhl7/Bantinhl7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bantinhl7Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Bantinhl7Component = (function () {
    function Bantinhl7Component() {
    }
    Bantinhl7Component.prototype.ngOnInit = function () {
    };
    return Bantinhl7Component;
}());
Bantinhl7Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bantinhl7',
        template: __webpack_require__("../../../../../src/app/Apps/Bantinhl7/Bantinhl7.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Bantinhl7/Bantinhl7.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Bantinhl7Component);

//# sourceMappingURL=Bantinhl7.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Bantinhl7/Bantinhl7.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bantinhl7_component__ = __webpack_require__("../../../../../src/app/Apps/Bantinhl7/Bantinhl7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bantinhl7Module", function() { return Bantinhl7Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__Bantinhl7_component__["a" /* Bantinhl7Component */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routing);
var Bantinhl7Module = (function () {
    function Bantinhl7Module() {
    }
    return Bantinhl7Module;
}());
Bantinhl7Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            Routing,
            __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__["a" /* ShareModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__Bantinhl7_component__["a" /* Bantinhl7Component */]]
    })
], Bantinhl7Module);

//# sourceMappingURL=Bantinhl7.module.js.map

/***/ })

});
//# sourceMappingURL=11.chunk.js.map