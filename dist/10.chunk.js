webpackJsonp([10],{

/***/ "../../../../../src/app/Apps/Chandoanhinhanh/Chandoanhinhanh.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dicom {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Chandoanhinhanh/Chandoanhinhanh.component.html":
/***/ (function(module, exports) {

module.exports = "<app-window [idea]=\"true\" name=\"Chẩn đoán hình ảnh\" url=\"apps\">\r\n\r\n    <iframe class=\"dicom\" src=\"http://api.truongkhoa.com/dicom\"></iframe>\r\n\r\n</app-window>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Chandoanhinhanh/Chandoanhinhanh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChandoanhinhanhComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChandoanhinhanhComponent = (function () {
    function ChandoanhinhanhComponent() {
    }
    ChandoanhinhanhComponent.prototype.ngOnInit = function () {
    };
    return ChandoanhinhanhComponent;
}());
ChandoanhinhanhComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chandoanhinhanh',
        template: __webpack_require__("../../../../../src/app/Apps/Chandoanhinhanh/Chandoanhinhanh.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Chandoanhinhanh/Chandoanhinhanh.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChandoanhinhanhComponent);

//# sourceMappingURL=Chandoanhinhanh.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Chandoanhinhanh/Chandoanhinhanh.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Chandoanhinhanh_component__ = __webpack_require__("../../../../../src/app/Apps/Chandoanhinhanh/Chandoanhinhanh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChandoanhinhanhModule", function() { return ChandoanhinhanhModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__Chandoanhinhanh_component__["a" /* ChandoanhinhanhComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routing);
var ChandoanhinhanhModule = (function () {
    function ChandoanhinhanhModule() {
    }
    return ChandoanhinhanhModule;
}());
ChandoanhinhanhModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            Routing,
            __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__["a" /* ShareModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__Chandoanhinhanh_component__["a" /* ChandoanhinhanhComponent */]]
    })
], ChandoanhinhanhModule);

//# sourceMappingURL=Chandoanhinhanh.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map