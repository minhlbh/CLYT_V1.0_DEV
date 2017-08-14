webpackJsonp([4],{

/***/ "../../../../../src/app/Policy/policy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Policy/policy.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  policy works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/Policy/policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyComponent = (function () {
    function PolicyComponent() {
    }
    PolicyComponent.prototype.ngOnInit = function () {
    };
    return PolicyComponent;
}());
PolicyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-policy',
        template: __webpack_require__("../../../../../src/app/Policy/policy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Policy/policy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PolicyComponent);

//# sourceMappingURL=policy.component.js.map

/***/ }),

/***/ "../../../../../src/app/Policy/policy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__policy_component__ = __webpack_require__("../../../../../src/app/Policy/policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__term_of_services_term_of_services_component__ = __webpack_require__("../../../../../src/app/Policy/term-of-services/term-of-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/Policy/privacy/privacy.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModule", function() { return PolicyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routing = [
    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_4__term_of_services_term_of_services_component__["a" /* TermOfServicesComponent */] },
    { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_5__privacy_privacy_component__["a" /* PrivacyComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routing);
var PolicyModule = (function () {
    function PolicyModule() {
    }
    return PolicyModule;
}());
PolicyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* CommonModule */],
            Routing
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__policy_component__["a" /* PolicyComponent */],
            __WEBPACK_IMPORTED_MODULE_4__term_of_services_term_of_services_component__["a" /* TermOfServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__privacy_privacy_component__["a" /* PrivacyComponent */]
        ]
    })
], PolicyModule);

//# sourceMappingURL=policy.module.js.map

/***/ }),

/***/ "../../../../../src/app/Policy/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Policy/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Chính sách bảo mật\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/Policy/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__("../../../../../src/app/Policy/privacy/privacy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Policy/privacy/privacy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrivacyComponent);

//# sourceMappingURL=privacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/Policy/term-of-services/term-of-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Policy/term-of-services/term-of-services.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Điều khoản sử dụng dịch vụ\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/Policy/term-of-services/term-of-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermOfServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermOfServicesComponent = (function () {
    function TermOfServicesComponent() {
    }
    TermOfServicesComponent.prototype.ngOnInit = function () {
    };
    return TermOfServicesComponent;
}());
TermOfServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-term-of-services',
        template: __webpack_require__("../../../../../src/app/Policy/term-of-services/term-of-services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Policy/term-of-services/term-of-services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TermOfServicesComponent);

//# sourceMappingURL=term-of-services.component.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map