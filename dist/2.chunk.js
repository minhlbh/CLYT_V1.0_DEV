webpackJsonp([2],{

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.css":
=======
/***/ "../../../../../src/app/authModule/Auth.component.css":
>>>>>>> origin/hiep.dev
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.html":
=======
/***/ "../../../../../src/app/authModule/Auth.component.html":
>>>>>>> origin/hiep.dev
/***/ (function(module, exports) {

module.exports = "<p>\n  authModule works!\n</p>"

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts":
=======
/***/ "../../../../../src/app/authModule/Auth.component.ts":
>>>>>>> origin/hiep.dev
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'app-ForgotPassword',
        template: __webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ForgotPasswordComponent);

//# sourceMappingURL=ForgotPassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/Register/Register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/Register/Register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Register works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/Register/Register.component.ts":
=======
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/authModule/Auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Auth.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=Auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/Auth.module.ts":
>>>>>>> origin/hiep.dev
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Auth_component__ = __webpack_require__("../../../../../src/app/authModule/Auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SignIn_SignIn_component__ = __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SignOut_SignOut_component__ = __webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Register_Register_component__ = __webpack_require__("../../../../../src/app/authModule/Register/Register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Verify_Verify_component__ = __webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ForgotPassword_ForgotPassword_component__ = __webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Register',
        template: __webpack_require__("../../../../../src/app/authModule/Register/Register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Register/Register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);
=======
>>>>>>> origin/hiep.dev



<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.css":
/***/ (function(module, exports, __webpack_require__) {
=======
>>>>>>> origin/hiep.dev





<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  SignIn works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = (function () {
    function SignInComponent() {
=======

var routing = [
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_3__SignIn_SignIn_component__["a" /* SignInComponent */] },
    { path: 'signOut', component: __WEBPACK_IMPORTED_MODULE_4__SignOut_SignOut_component__["a" /* SignOutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__Register_Register_component__["a" /* RegisterComponent */] },
    { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_6__Verify_Verify_component__["a" /* VerifyComponent */] },
    { path: 'forgotPass', component: __WEBPACK_IMPORTED_MODULE_7__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forChild(routing);
var AuthModule = (function () {
    function AuthModule() {
>>>>>>> origin/hiep.dev
    }
    return AuthModule;
}());
<<<<<<< HEAD
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-SignIn',
        template: __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignInComponent);
=======
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            Routing
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__Auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_3__SignIn_SignIn_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_4__SignOut_SignOut_component__["a" /* SignOutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__Register_Register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Verify_Verify_component__["a" /* VerifyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */]
        ]
    })
], AuthModule);
>>>>>>> origin/hiep.dev

//# sourceMappingURL=Auth.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/SignOut/SignOut.component.css":
=======
/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.css":
>>>>>>> origin/hiep.dev
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/SignOut/SignOut.component.html":
=======
/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.html":
>>>>>>> origin/hiep.dev
/***/ (function(module, exports) {

module.exports = "<p>\n  ForgotPassword works!\n</p>"

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/SignOut/SignOut.component.ts":
=======
/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts":
>>>>>>> origin/hiep.dev
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'app-SignOut',
        template: __webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.css")]
=======
        selector: 'app-ForgotPassword',
        template: __webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.css")]
>>>>>>> origin/hiep.dev
    }),
    __metadata("design:paramtypes", [])
], ForgotPasswordComponent);

//# sourceMappingURL=ForgotPassword.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/Verify/Verify.component.css":
=======
/***/ "../../../../../src/app/authModule/Register/Register.component.css":
>>>>>>> origin/hiep.dev
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/Verify/Verify.component.html":
=======
/***/ "../../../../../src/app/authModule/Register/Register.component.html":
>>>>>>> origin/hiep.dev
/***/ (function(module, exports) {

module.exports = "<p>\n  Register works!\n</p>"

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/Verify/Verify.component.ts":
=======
/***/ "../../../../../src/app/authModule/Register/Register.component.ts":
>>>>>>> origin/hiep.dev
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
        selector: 'app-Verify',
        template: __webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.css")]
=======
        selector: 'app-Register',
        template: __webpack_require__("../../../../../src/app/authModule/Register/Register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Register/Register.component.css")]
>>>>>>> origin/hiep.dev
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=Register.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/authModule.component.css":
=======
/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.css":
>>>>>>> origin/hiep.dev
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

<<<<<<< HEAD
/***/ "../../../../../src/app/authModule/authModule.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  authModule works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/authModule.component.ts":
=======
/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  SignIn works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.ts":
>>>>>>> origin/hiep.dev
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModuleComponent; });
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
>>>>>>> origin/hiep.dev
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
var AuthModuleComponent = (function () {
    function AuthModuleComponent() {
    }
    AuthModuleComponent.prototype.ngOnInit = function () {
    };
    return AuthModuleComponent;
}());
AuthModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-authModule',
        template: __webpack_require__("../../../../../src/app/authModule/authModule.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/authModule.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthModuleComponent);

//# sourceMappingURL=authModule.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/authModule.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authModule_component__ = __webpack_require__("../../../../../src/app/authModule/authModule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SignIn_SignIn_component__ = __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SignOut_SignOut_component__ = __webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Register_Register_component__ = __webpack_require__("../../../../../src/app/authModule/Register/Register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Verify_Verify_component__ = __webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ForgotPassword_ForgotPassword_component__ = __webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModuleModule", function() { return AuthModuleModule; });
=======
var SignInComponent = (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-SignIn',
        template: __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignInComponent);

//# sourceMappingURL=SignIn.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/SignOut/SignOut.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/SignOut/SignOut.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  SignOut works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/SignOut/SignOut.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutComponent; });
>>>>>>> origin/hiep.dev
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
<<<<<<< HEAD








var routing = [
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_3__SignIn_SignIn_component__["a" /* SignInComponent */] },
    { path: 'signOut', component: __WEBPACK_IMPORTED_MODULE_4__SignOut_SignOut_component__["a" /* SignOutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__Register_Register_component__["a" /* RegisterComponent */] },
    { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_6__Verify_Verify_component__["a" /* VerifyComponent */] },
    { path: 'forgotPass', component: __WEBPACK_IMPORTED_MODULE_7__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */] },
];
var AuthModuleModule = (function () {
    function AuthModuleModule() {
    }
    return AuthModuleModule;
}());
AuthModuleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__authModule_component__["a" /* AuthModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_3__SignIn_SignIn_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_4__SignOut_SignOut_component__["a" /* SignOutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__Register_Register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Verify_Verify_component__["a" /* VerifyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */]
        ]
    })
], AuthModuleModule);

//# sourceMappingURL=authModule.module.js.map
=======
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignOutComponent = (function () {
    function SignOutComponent() {
    }
    SignOutComponent.prototype.ngOnInit = function () {
    };
    return SignOutComponent;
}());
SignOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-SignOut',
        template: __webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignOutComponent);

//# sourceMappingURL=SignOut.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/Verify/Verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/Verify/Verify.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Verify works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/Verify/Verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerifyComponent = (function () {
    function VerifyComponent() {
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    return VerifyComponent;
}());
VerifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Verify',
        template: __webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VerifyComponent);

//# sourceMappingURL=Verify.component.js.map
>>>>>>> origin/hiep.dev

/***/ })

});
//# sourceMappingURL=2.chunk.js.map