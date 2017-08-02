webpackJsonp([2],{

/***/ "../../../../../src/app/authModule/Auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/Auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  authModule works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/Auth.component.ts":
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
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/authModule/Auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Auth.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=Auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/Auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Auth_component__ = __webpack_require__("../../../../../src/app/authModule/Auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SignIn_SignIn_component__ = __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SignOut_SignOut_component__ = __webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Register_Register_component__ = __webpack_require__("../../../../../src/app/authModule/Register/Register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Verify_Verify_component__ = __webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ForgotPassword_ForgotPassword_component__ = __webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChangePass_ChangePass_component__ = __webpack_require__("../../../../../src/app/authModule/ChangePass/ChangePass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// component







// services

var routing = [
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_6__SignIn_SignIn_component__["a" /* SignInComponent */] },
    { path: 'signOut', component: __WEBPACK_IMPORTED_MODULE_7__SignOut_SignOut_component__["a" /* SignOutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__Register_Register_component__["a" /* RegisterComponent */] },
    { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_9__Verify_Verify_component__["a" /* VerifyComponent */] },
    { path: 'forgotPass', component: __WEBPACK_IMPORTED_MODULE_10__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */] },
    { path: 'changePass', component: __WEBPACK_IMPORTED_MODULE_11__ChangePass_ChangePass_component__["a" /* ChangePassComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routing);
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            Routing
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__Auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_6__SignIn_SignIn_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_7__SignOut_SignOut_component__["a" /* SignOutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Register_Register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Verify_Verify_component__["a" /* VerifyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ChangePass_ChangePass_component__["a" /* ChangePassComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__Share_Services_user_service__["a" /* UserService */]
        ]
    })
], AuthModule);

//# sourceMappingURL=Auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/ChangePass/ChangePass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/ChangePass/ChangePass.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ChangePass works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/ChangePass/ChangePass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangePassComponent = (function () {
    function ChangePassComponent() {
    }
    ChangePassComponent.prototype.ngOnInit = function () {
    };
    return ChangePassComponent;
}());
ChangePassComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ChangePass',
        template: __webpack_require__("../../../../../src/app/authModule/ChangePass/ChangePass.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/ChangePass/ChangePass.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChangePassComponent);

//# sourceMappingURL=ChangePass.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ForgotPassword works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts":
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

module.exports = "<p>\r\n  Register works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/authModule/Register/Register.component.ts":
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
        selector: 'app-Register',
        template: __webpack_require__("../../../../../src/app/authModule/Register/Register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Register/Register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=Register.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in.wr {\r\n    background-image: url(\"https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg\");\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: table;\r\n}\r\n\r\n.inner {\r\n    background: #fff;\r\n    position: fixed;\r\n    right: 0;\r\n    float: right;\r\n    height: 100%;\r\n    min-height: 580px;\r\n    width: 450px;\r\n    margin: 0;\r\n    padding: 70px 50px 0;\r\n    z-index: 1;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sign-in .logo {\r\n    font-size: 19px;\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.sign-in .logo a {\r\n    color: #555;\r\n}\r\n\r\n.sign-in .logo img {\r\n    width: 45px;\r\n    height: 45px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .logo span {\r\n    margin: 9px 5px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social a {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.sign-in .social a:hover,\r\n.sign-in .social a:focus {\r\n    opacity: .9;\r\n}\r\n\r\n.sign-in .social a i {\r\n    font-size: 17px;\r\n    color: #fff;\r\n    padding: 12px 0 0 0;\r\n}\r\n\r\n.sign-in .social a.fb {\r\n    background: #467cbd;\r\n}\r\n\r\n.sign-in .social a.google {\r\n    background: #dc4e41;\r\n}\r\n\r\n.sign-in .social a.linkedin {\r\n    background: #0077b5;\r\n}\r\n\r\n.sign-in .title {\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    font-weight: 300;\r\n    font-size: 25px;\r\n    float: left;\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in input {\r\n    padding: 6px 10px;\r\n    border-width: 1px;\r\n    border-color: #666;\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    height: 36px;\r\n    outline: none;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in button {\r\n    background-color: #0f9cb3;\r\n    width: auto;\r\n    color: #fff;\r\n    text-align: center;\r\n    height: 36px;\r\n    padding: 4px 12px 4px 12px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    margin-bottom: 16px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: none;\r\n    float: left;\r\n}\r\n\r\n.sign-in button:hover,\r\n.sign-in button:focus {\r\n    opacity: .8;\r\n}\r\n\r\n.sign-in .form-group {\r\n    margin-bottom: 16px;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sign-in .or {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 13px;\r\n    color: #666;\r\n    text-align: left;\r\n    margin-top: 12px;\r\n    font-weight: 400;\r\n}\r\n\r\n.sign-in .form-group .alert-text {\r\n    color: red;\r\n    text-align: left !important;\r\n    width: 100%;\r\n    float: left;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.sign-in .form-group a {\r\n    font-size: 13px;\r\n    color: #0f9cb3;\r\n    float: left;\r\n}\r\n\r\n.sign-in .form-group a:hover {\r\n    text-decoration: none;\r\n    color: #777;\r\n}\r\n\r\n.sign-in .form-group .checkbox {\r\n    cursor: pointer;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative\r\n}\r\n\r\n.sign-in .form-group .checkbox input {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 3px 3px 0 0;\r\n    padding: 0;\r\n    float: left;\r\n    cursor: pointer;\r\n    color: #0f9cb3;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.sign-in .form-group .checkbox span {\r\n    float: left;\r\n    margin-left: 22px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n\r\n.sign-in .footer {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0 50px 5px;\r\n    background: rgba(255, 255, 255, 0.3)\r\n}\r\n\r\n.sign-in .footer a {\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in .footer .form-group {\r\n    margin: 0;\r\n}\r\n\r\n.sign-in .footer a,\r\n.footer span {\r\n    padding: 0 15px 5px 0;\r\n    font-size: 12px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .footer a:hover,\r\n.sign-in .footer a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .inner {\r\n        width: 100%;\r\n        padding: 30px 50px 0 20px;\r\n    }\r\n    .sign-in .footer {\r\n        padding: 0 20px 5px;\r\n    }\r\n    .sign-in .form-group .checkbox input {\r\n        margin-top: 0;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in wr\">\r\n    <div class=\"inner\">\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['']\">\r\n\t         \t<img src=\"{{elements.Logo}}\">\r\n\t         \t<span>{{elements.ThuongHieu}}</span>\r\n\t         </a>\r\n        </div>\r\n        <h3 class=\"title\">Đăng nhập</h3>\r\n        <div class=\"social\">\r\n            <a class=\"fb\" (click)=\"loginWithFacebook()\">\r\n                <i class=\"fa fa-fw fa-facebook\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"google\">\r\n                <i class=\"fa fa-fw fa-google-plus\"></i>\r\n            </a>\r\n            <a href=\"#\" class=\"linkedin\">\r\n                <i class=\"fa fa-fw fa-linkedin\"></i>\r\n            </a>\r\n        </div>\r\n        <span class=\"or\">Hoặc</span>\r\n        <div class=\"form-group\" *ngIf=\"this.error != null\">\r\n            <span class=\"alert-text\">\r\n                    {{error}}\r\n            </span>\r\n        </div>\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n            <input [formControl]=\"username\" type=\"text\" placeholder=\"Nhập email hoặc số điện thoại\">\r\n            <input [formControl]=\"password\" type=\"password\" placeholder=\"Nhập mật khẩu\">\r\n        </form>\r\n        <div class=\"form-group\">\r\n            <label class=\"checkbox\">\r\n                    <input type=\"checkbox\" checked>\r\n                    <span>Giữ tôi luôn đăng nhập</span>\r\n                </label>\r\n        </div>\r\n        <button (click)=\"onLoginSubmit()\" [style.background-color]=\"elements?.MauNhat\">Đăng nhập</button>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/forgotPass']\">\r\n                    Quên mật khẩu\r\n                </a>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/register']\">\r\n                    Tạo tài khoản mới\r\n                </a>\r\n        </div>\r\n        <div class=\"footer\">\r\n            <div class=\"form-group\">\r\n                <span>\r\n                        ©2017 {{elements.ThuongHieu}}\r\n                    </span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <a href=\"#\">\r\n                        Chính sách bảo mật\r\n                    </a>\r\n                <a href=\"#\">\r\n                        Điều khoản sử dụng\r\n                    </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
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
    function SignInComponent(router, settingService, fb, userService) {
        this.router = router;
        this.settingService = settingService;
        this.fb = fb;
        this.userService = userService;
        this.error = null;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.elements = this.settingService.getConfig();
        // tslint:disable-next-line:prefer-const
        var initParams = {
            appId: '1234566778',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    // fb login
    SignInComponent.prototype.loginWithFacebook = function () {
        this.fb.login()
            .then(function (response) { return console.log(response); })
            .catch(function (error) { return console.error(error); });
    };
    // login function
    SignInComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log(this.username.value, this.password.value);
        this.userService.login(this.username.value, this.password.value).subscribe(function (data) {
            console.log(data.access_token);
            console.log(data.token_type);
            _this.userService.setAuthToken(data.access_token);
            _this.userService.setTokenType(data.token_type);
            _this.userService.setAuth(data);
            _this.router.navigate(['']);
        }, function (err) {
            var errOb = JSON.parse(err.text());
            console.log('error:', errOb.error_description);
            _this.error = errOb.error_description;
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["b" /* FacebookService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], SignInComponent);

var _a, _b, _c, _d;
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

module.exports = "<p>\r\n  Signing out...\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/SignOut/SignOut.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignOutComponent = (function () {
    function SignOutComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    SignOutComponent.prototype.ngOnInit = function () {
        this.userService.refreshToken();
        this.router.navigate(['']);
    };
    return SignOutComponent;
}());
SignOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-signout',
        template: __webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], SignOutComponent);

var _a, _b;
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

module.exports = "<p>\r\n  Verify works!\r\n</p>"

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

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-comment-embed/fb-comment-embed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBCommentEmbedComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Embedded Comments
 * @shortdesc Embedded comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-comments
 * @description
 * Embedded comments are a simple way to put public post comments - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public comments from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-comment-embed href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185" width="500"></fb-comment-embed>
 * ```
 */
var FBCommentEmbedComponent = (function (_super) {
    __extends(FBCommentEmbedComponent, _super);
    function FBCommentEmbedComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-comment-embed') || this;
    }
    return FBCommentEmbedComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBCommentEmbedComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-comment-embed',
                template: ''
            },] },
];
/** @nocollapse */
FBCommentEmbedComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBCommentEmbedComponent.propDecorators = {
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'includeParent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBCommentEmbedComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBCommentEmbedComponent.prototype, "width", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBCommentEmbedComponent.prototype, "includeParent", void 0);
//# sourceMappingURL=fb-comment-embed.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-comments/fb-comments.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBCommentsComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Comments
 * @shortdesc Comments component
 * @fbdoc https://developers.facebook.com/docs/plugins/comments
 * @description
 * The comments plugin lets people comment on content on your site using their Facebook account.
 * People can choose to share their comment activity with their friends (and friends of their friends) on Facebook as well.
 * The comments plugin also includes built-in moderation tools and social relevance ranking.
 *
 * @usage
 * ```html
 * <fb-comments></fb-comments>
 * ```
 */
var FBCommentsComponent = (function (_super) {
    __extends(FBCommentsComponent, _super);
    function FBCommentsComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-comments') || this;
        /**
         * The absolute URL that comments posted in the plugin will be permanently associated with.
         * All stories shared on Facebook about comments posted using the comments plugin will link to this URL.
         * Defaults to current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    return FBCommentsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBCommentsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-comments',
                template: ''
            },] },
];
/** @nocollapse */
FBCommentsComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBCommentsComponent.propDecorators = {
    'colorscheme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'mobile': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'numposts': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'orderBy': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBCommentsComponent.prototype, "colorscheme", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBCommentsComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBCommentsComponent.prototype, "mobile", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Number)
], FBCommentsComponent.prototype, "numposts", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBCommentsComponent.prototype, "orderBy", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBCommentsComponent.prototype, "width", void 0);
//# sourceMappingURL=fb-comments.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-follow/fb-follow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBFollowComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Follow Button
 * @shortdesc Follow button component
 * @fbdoc https://developers.facebook.com/docs/plugins/follow-button
 * @description The Follow button lets people subscribe to the public updates of others on Facebook.
 * @usage
 * ```html
 * <fb-follow href="https://www.facebook.com/zuck"></fb-follow>
 * ```
 */
var FBFollowComponent = (function (_super) {
    __extends(FBFollowComponent, _super);
    function FBFollowComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-follow') || this;
    }
    return FBFollowComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBFollowComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-follow',
                template: ''
            },] },
];
/** @nocollapse */
FBFollowComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBFollowComponent.propDecorators = {
    'colorScheme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'kidDirectedSite': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'layout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showFaces': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBFollowComponent.prototype, "colorScheme", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBFollowComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBFollowComponent.prototype, "kidDirectedSite", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBFollowComponent.prototype, "layout", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBFollowComponent.prototype, "showFaces", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBFollowComponent.prototype, "size", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBFollowComponent.prototype, "width", void 0);
//# sourceMappingURL=fb-follow.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-like/fb-like.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBLikeComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Like Button
 * @shortdesc Like button component
 * @fbdoc https://developers.facebook.com/docs/plugins/like-button
 * @description
 * A single click on the Like button will 'like' pieces of content on the web and share them on Facebook.
 * You can also display a Share button next to the Like button to let people add a personal message and customize who they share with.
 * @usage
 * ```html
 * <fb-like href="https://www.facebook.com/zuck"></fb-like>
 * ```
 */
var FBLikeComponent = (function (_super) {
    __extends(FBLikeComponent, _super);
    function FBLikeComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-like') || this;
        /**
         * The absolute URL of the page that will be liked.
         * Defaults to the current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    return FBLikeComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBLikeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-like',
                template: ''
            },] },
];
/** @nocollapse */
FBLikeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBLikeComponent.propDecorators = {
    'action': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'colorScheme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'kidDirectedSite': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'layout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ref': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'share': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showFaces': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBLikeComponent.prototype, "action", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBLikeComponent.prototype, "colorScheme", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBLikeComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBLikeComponent.prototype, "kidDirectedSite", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBLikeComponent.prototype, "layout", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBLikeComponent.prototype, "ref", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBLikeComponent.prototype, "share", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBLikeComponent.prototype, "showFaces", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBLikeComponent.prototype, "size", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBLikeComponent.prototype, "width", void 0);
//# sourceMappingURL=fb-like.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-page/fb-page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBPageComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Page Plugin
 * @shortdesc Page plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/page-plugin
 * @description
 * The Page plugin lets you easily embed and promote any Facebook Page on your website. Just like on Facebook, your visitors can like and share the Page without leaving your site.
 * @usage
 * ```html
 * <fb-page href="https://facebook.com/facebook"></fb-page>
 * ```
 */
var FBPageComponent = (function (_super) {
    __extends(FBPageComponent, _super);
    function FBPageComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-page') || this;
    }
    return FBPageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBPageComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-page',
                template: ''
            },] },
];
/** @nocollapse */
FBPageComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBPageComponent.propDecorators = {
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'height': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tabs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hideCover': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showFacepile': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'hideCTA': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'smallHeader': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'adaptContainerWidth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBPageComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Number)
], FBPageComponent.prototype, "width", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Number)
], FBPageComponent.prototype, "height", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBPageComponent.prototype, "tabs", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "hideCover", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "showFacepile", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "hideCTA", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "smallHeader", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBPageComponent.prototype, "adaptContainerWidth", void 0);
//# sourceMappingURL=fb-page.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-post/fb-post.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBPostComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Embedded Posts
 * @shortdesc Embedded post component
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-posts
 * @description
 * Embedded Posts are a simple way to put public posts - by a Page or a person on Facebook - into the content of your web site or web page.
 * Only public posts from Facebook Pages and profiles can be embedded.
 * @usage
 * ```html
 * <fb-post href="https://www.facebook.com/20531316728/posts/10154009990506729/"></fb-post>
 * ```
 */
var FBPostComponent = (function (_super) {
    __extends(FBPostComponent, _super);
    function FBPostComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-post') || this;
    }
    return FBPostComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBPostComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-post',
                template: ''
            },] },
];
/** @nocollapse */
FBPostComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBPostComponent.propDecorators = {
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBPostComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBPostComponent.prototype, "width", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBPostComponent.prototype, "showText", void 0);
//# sourceMappingURL=fb-post.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-quote/fb-quote.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBQuoteComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Quote Plugin
 * @shortdesc Quote plugin component
 * @fbdoc https://developers.facebook.com/docs/plugins/quote
 * @description
 * The quote plugin lets people select text on your page and add it to their share, so they can tell a more expressive story.
 * Note that you do not need to implement Facebook login or request any additional permissions through app review in order to use this plugin.
 * @usage
 * ```html
 * <fb-quote></fb-quote>
 * ```
 */
var FBQuoteComponent = (function (_super) {
    __extends(FBQuoteComponent, _super);
    function FBQuoteComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-quote') || this;
    }
    return FBQuoteComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBQuoteComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-quote',
                template: ''
            },] },
];
/** @nocollapse */
FBQuoteComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBQuoteComponent.propDecorators = {
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'layout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBQuoteComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBQuoteComponent.prototype, "layout", void 0);
//# sourceMappingURL=fb-quote.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-save/fb-save.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBSaveComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Save Button
 * @shortdesc Save button component.
 * @fbdoc https://developers.facebook.com/docs/plugins/save
 * @description
 * The Save button lets people save items or services to a private list on Facebook, share it with friends, and receive relevant notifications.
 * @usage
 * ```html
 * <fb-save uri="https://github.com/zyra/ng2-facebook-sdk/"></fb-save>
 * ```
 */
var FBSaveComponent = (function (_super) {
    __extends(FBSaveComponent, _super);
    function FBSaveComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-save') || this;
        /**
         * The absolute link of the page that will be saved.
         * Current Link/Address
         */
        _this.uri = window.location.href;
        return _this;
    }
    return FBSaveComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBSaveComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-save',
                template: ''
            },] },
];
/** @nocollapse */
FBSaveComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBSaveComponent.propDecorators = {
    'uri': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBSaveComponent.prototype, "uri", void 0);
//# sourceMappingURL=fb-save.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-send/fb-send.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBSendComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Send Button
 * @shortdesc Send button component
 * @fbdoc https://developers.facebook.com/docs/plugins/send-button
 * @description
 * The Send button lets people privately send content on your site to one or more friends in a Facebook message.
 * @usage
 * ```html
 * <fb-send href="https://github.com/zyra/ng2-facebook-sdk/"></fb-send>
 * ```
 */
var FBSendComponent = (function (_super) {
    __extends(FBSendComponent, _super);
    function FBSendComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-send') || this;
        /**
         * The absolute URL of the page that will be sent. Defaults to the current URL.
         */
        _this.href = window.location.href;
        return _this;
    }
    return FBSendComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBSendComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-send',
                template: ''
            },] },
];
/** @nocollapse */
FBSendComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBSendComponent.propDecorators = {
    'colorScheme': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'kidDirectedSite': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ref': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBSendComponent.prototype, "colorScheme", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBSendComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBSendComponent.prototype, "kidDirectedSite", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBSendComponent.prototype, "ref", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBSendComponent.prototype, "size", void 0);
//# sourceMappingURL=fb-send.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-share/fb-share.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBShareComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Share Button
 * @shortdesc Share button component
 * @fbdoc https://developers.facebook.com/docs/plugins/share-button
 * @description
 * The Share button lets people add a personalized message to links before sharing on their timeline, in groups, or to their friends via a Facebook Message.
 * @usage
 * ```html
 * <fb-share href="https://github.com/zyra/ng2-facebook-sdk/"></fb-share>
 * ```
 */
var FBShareComponent = (function (_super) {
    __extends(FBShareComponent, _super);
    function FBShareComponent(el, rnd) {
        return _super.call(this, el, rnd, 'fb-share-button') || this;
    }
    return FBShareComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBShareComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-share',
                template: ''
            },] },
];
/** @nocollapse */
FBShareComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBShareComponent.propDecorators = {
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'layout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'mobileIframe': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'size': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBShareComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBShareComponent.prototype, "layout", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBShareComponent.prototype, "mobileIframe", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBShareComponent.prototype, "size", void 0);
//# sourceMappingURL=fb-share.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fb-video/fb-video.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fbml_component__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fbml-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBVideoComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Embedded Video
 * @shortdesc Component to embed Facebook videos
 * @fbdoc https://developers.facebook.com/docs/plugins/embedded-video-player
 * @description Component to embed Facebook videos and control them.
 * @usage
 * ```html
 * <!-- basic usage -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/"></fb-video>
 *
 * <!-- event emitters -->
 * <fb-video href="https://www.facebook.com/facebook/videos/10153231379946729/" (paused)="onVideoPaused($event)"></fb-video>
 * ```
 *
 * To manually interact with the video player, fetch it using `ViewChild`.
 *
 * ```ts
 * import { Component, ViewChild } from '@angular/core';
 * import { FBVideoComponent } from 'ng2-facebook-sdk';
 *
 * @Component(...)
 * export class MyComponent {
 *
 *   @ViewChild(FBVideoComponent) video: FBVideoComponent;
 *
 *   ngAfterViewInit() {
 *     this.video.play();
 *     this.video.pause();
 *     this.video.getVolume();
 *   }
 *
 * }
 *
 * ```
 */
var FBVideoComponent = (function (_super) {
    __extends(FBVideoComponent, _super);
    function FBVideoComponent(el, rnd) {
        var _this = _super.call(this, el, rnd, 'fb-video') || this;
        /**
         * Fired when video starts to play.
         */
        _this.startedPlaying = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fired when video pauses.
         */
        _this.paused = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         *
         Fired when video finishes playing.
         */
        _this.finishedPlaying = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fired when video starts to buffer.
         */
        _this.startedBuffering = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fired when video recovers from buffering.
         */
        _this.finishedBuffering = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * Fired when an error occurs on the video.
         */
        _this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._listeners = [];
        _this.nativeElement.id = _this._id = 'video-' + String(Math.floor((Math.random() * 10000) + 1));
        return _this;
    }
    /**
     * @hidden
     */
    FBVideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.Event.subscribe('xfbml.ready', function (msg) {
            if (msg.type === 'video' && msg.id === _this._id) {
                _this._instance = msg.instance;
                _this._listeners.push(_this._instance.subscribe('startedPlaying', function (e) { return _this.startedPlaying.emit(e); }), _this._instance.subscribe('paused', function (e) { return _this.paused.emit(e); }), _this._instance.subscribe('finishedPlaying', function (e) { return _this.finishedPlaying.emit(e); }), _this._instance.subscribe('startedBuffering', function (e) { return _this.startedBuffering.emit(e); }), _this._instance.subscribe('finishedBuffering', function (e) { return _this.finishedBuffering.emit(e); }), _this._instance.subscribe('error', function (e) { return _this.error.emit(e); }));
            }
        });
    };
    /**
     * @hidden
     */
    FBVideoComponent.prototype.ngOnDestroy = function () {
        this._listeners.forEach(function (l) {
            if (typeof l.release === 'function') {
                l.release();
            }
        });
    };
    /**
     * Plays the video.
     */
    FBVideoComponent.prototype.play = function () { };
    /**
     * Pauses the video.
     */
    FBVideoComponent.prototype.pause = function () { };
    /**
     * Seeks to specified position.
     * @param seconds {number}
     */
    FBVideoComponent.prototype.seek = function (seconds) { };
    /**
     * Mute the video.
     */
    FBVideoComponent.prototype.mute = function () { };
    /**
     * Unmute the video.
     */
    FBVideoComponent.prototype.unmute = function () { };
    /**
     * Returns true if video is muted, false if not.
     */
    FBVideoComponent.prototype.isMuted = function () { return; };
    /**
     * Set the volume
     * @param volume
     */
    FBVideoComponent.prototype.setVolume = function (volume) { };
    /**
     * Get the volume
     */
    FBVideoComponent.prototype.getVolume = function () { return; };
    /**
     * Returns the current video time position in seconds
     */
    FBVideoComponent.prototype.getCurrentPosition = function () { };
    /**
     * Returns the video duration in seconds
     */
    FBVideoComponent.prototype.getDuration = function () { };
    return FBVideoComponent;
}(__WEBPACK_IMPORTED_MODULE_1__fbml_component__["a" /* FBMLComponent */]));

FBVideoComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'fb-video',
                template: ''
            },] },
];
/** @nocollapse */
FBVideoComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
FBVideoComponent.propDecorators = {
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'allowfullscreen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'autoplay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showCaptions': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'startedPlaying': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'paused': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'finishedPlaying': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'startedBuffering': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'finishedBuffering': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'error': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBVideoComponent.prototype, "href", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBVideoComponent.prototype, "allowfullscreen", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBVideoComponent.prototype, "autoplay", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", String)
], FBVideoComponent.prototype, "width", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBVideoComponent.prototype, "showText", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["b" /* FBMLAttribute */],
    __metadata("design:type", Boolean)
], FBVideoComponent.prototype, "showCaptions", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "play", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "pause", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "seek", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "mute", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "unmute", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], FBVideoComponent.prototype, "isMuted", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "setVolume", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], FBVideoComponent.prototype, "getVolume", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "getCurrentPosition", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__fbml_component__["c" /* FBMLInstanceMethod */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FBVideoComponent.prototype, "getDuration", null);
//# sourceMappingURL=fb-video.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/components/fbml-component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = FBMLAttribute;
/* harmony export (immutable) */ __webpack_exports__["c"] = FBMLInstanceMethod;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FBMLComponent; });
/**
 * @hidden
 */
function FBMLAttribute(target, key) {
    var processKey = function (_k) { return 'data-' + _k.toString().replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase(); };
    Object.defineProperty(target, key, {
        set: function (value) {
            value = value.toString();
            this.setAttribute(processKey(key), value);
        },
        get: function () {
            return this.getAttribute(processKey(key));
        },
        enumerable: true
    });
}
/**
 * @hidden
 */
function FBMLInstanceMethod(target, key) {
    return {
        enumerable: true,
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this._instance) {
                return this._instance[key].apply(this._instance, args);
            }
            else {
                console.warn('ng2-facebook-sdk: tried calling instance method before component is ready.');
                return null;
            }
        }
    };
}
/**
 * @hidden
 */
var FBMLComponent = (function () {
    function FBMLComponent(el, rnd, fbClass) {
        this.el = el;
        this.rnd = rnd;
        this.fbClass = fbClass;
        this.nativeElement = this.el.nativeElement;
        this.rnd.setElementClass(this.nativeElement, this.fbClass, true);
    }
    FBMLComponent.prototype.setAttribute = function (name, value) {
        if (!name || !value)
            return;
        this.rnd.setElementAttribute(this.nativeElement, name, value);
    };
    FBMLComponent.prototype.getAttribute = function (name) {
        if (!name)
            return;
        return this.nativeElement.getAttribute(name);
    };
    return FBMLComponent;
}());

//# sourceMappingURL=fbml-component.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/facebook.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/providers/facebook.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fb_comment_embed_fb_comment_embed__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-comment-embed/fb-comment-embed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fb_comments_fb_comments__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-comments/fb-comments.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fb_follow_fb_follow__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-follow/fb-follow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fb_like_fb_like__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-like/fb-like.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_fb_page_fb_page__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-page/fb-page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_fb_post_fb_post__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-post/fb-post.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fb_quote_fb_quote__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-quote/fb-quote.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_fb_save_fb_save__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-save/fb-save.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fb_send_fb_send__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-send/fb-send.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_fb_share_fb_share__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-share/fb-share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_fb_video_fb_video__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-video/fb-video.js");
/* unused harmony export getComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookModule; });













var components = [
    __WEBPACK_IMPORTED_MODULE_2__components_fb_comment_embed_fb_comment_embed__["a" /* FBCommentEmbedComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_fb_comments_fb_comments__["a" /* FBCommentsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_fb_follow_fb_follow__["a" /* FBFollowComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_fb_like_fb_like__["a" /* FBLikeComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_fb_page_fb_page__["a" /* FBPageComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_fb_post_fb_post__["a" /* FBPostComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_fb_quote_fb_quote__["a" /* FBQuoteComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_fb_save_fb_save__["a" /* FBSaveComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components_fb_send_fb_send__["a" /* FBSendComponent */],
    __WEBPACK_IMPORTED_MODULE_11__components_fb_share_fb_share__["a" /* FBShareComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_fb_video_fb_video__["a" /* FBVideoComponent */]
];
function getComponents() {
    return components;
}
/**
 * @shortdesc The module to import to add this library
 * @description
 * The main module to import into your application.
 * You only need to import this module if you wish to use the components in this library; otherwise, you could just import [FacebookService](../facebook-service) into your module instead.
 * This module will make all components and providers available in your application.
 *
 * @usage
 * In order to use this library, you need to import `FacebookModule` into your app's main `NgModule`.
 *
 * ```typescript
 * import { FacebookModule } from 'ng2-facebook-sdk';
 *
 * @NgModule({
 *   ...
 *   imports: [
 *     ...
 *     FacebookModule.forRoot()
 *   ],
 *   ...
 * })
 * export class AppModule { }
 * ```
 */
var FacebookModule = (function () {
    function FacebookModule() {
    }
    FacebookModule.forRoot = function () {
        return {
            ngModule: FacebookModule,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_facebook__["a" /* FacebookService */]]
        };
    };
    return FacebookModule;
}());

FacebookModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: getComponents(),
                exports: getComponents()
            },] },
];
/** @nocollapse */
FacebookModule.ctorParameters = function () { return []; };
//# sourceMappingURL=facebook.module.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_fb_comment_embed_fb_comment_embed__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-comment-embed/fb-comment-embed.js");
/* unused harmony reexport FBCommentEmbedComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fb_comments_fb_comments__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-comments/fb-comments.js");
/* unused harmony reexport FBCommentsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_fb_follow_fb_follow__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-follow/fb-follow.js");
/* unused harmony reexport FBFollowComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_fb_like_fb_like__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-like/fb-like.js");
/* unused harmony reexport FBLikeComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fb_page_fb_page__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-page/fb-page.js");
/* unused harmony reexport FBPageComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_fb_post_fb_post__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-post/fb-post.js");
/* unused harmony reexport FBPostComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_fb_quote_fb_quote__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-quote/fb-quote.js");
/* unused harmony reexport FBQuoteComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_fb_save_fb_save__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-save/fb-save.js");
/* unused harmony reexport FBSaveComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_fb_send_fb_send__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-send/fb-send.js");
/* unused harmony reexport FBSendComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_fb_share_fb_share__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-share/fb-share.js");
/* unused harmony reexport FBShareComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fb_video_fb_video__ = __webpack_require__("../../../../ngx-facebook/dist/esm/components/fb-video/fb-video.js");
/* unused harmony reexport FBVideoComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/providers/facebook.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__providers_facebook__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__facebook_module__ = __webpack_require__("../../../../ngx-facebook/dist/esm/facebook.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_12__facebook_module__["a"]; });
// components











// providers

// modules

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-facebook/dist/esm/providers/facebook.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookService; });

/**
 * @shortdesc
 * Angular 2 service to inject to use Facebook's SDK
 * @description
 * You only need to inject this service in your application if you aren't using [`FacebookModule`](../facebook-module).
 * @usage
 * ```typescript
 * import { FacebookService, InitParams } from 'ng2-facebook-sdk';
 *
 * constructor(private fb: FacebookService) {
 *
 *   const params: InitParams = {
 *
 *   };
 *
 *   fb.init(params);
 *
 * }
 * ```
 */
var FacebookService = (function () {
    function FacebookService() {
    }
    /**
     * This method is used to initialize and setup the SDK.
     * @param params {InitParams} Initialization parameters
     * @returns {Promise<any>}
     */
    FacebookService.prototype.init = function (params) {
        try {
            return Promise.resolve(FB.init(params));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    /**
     * This method lets you make calls to the Graph API
     * @usage
     * ```typescript
     * this.fb.api('somepath')
     *   .then(res => console.log(res))
     *   .catch(e => console.log(e));
     * ```
     * @param path {string} The Graph API endpoint path that you want to call.
     * @param [method=get] {string} The HTTP method that you want to use for the API request.
     * @param [params] {Object} An object consisting of any parameters that you want to pass into your Graph API call.
     * @returns {Promise<any>}
     */
    FacebookService.prototype.api = function (path, method, params) {
        if (method === void 0) { method = 'get'; }
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            try {
                FB.api(path, method, params, function (response) {
                    if (!response) {
                        reject();
                    }
                    else if (response.error) {
                        reject(response.error);
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This method is used to trigger different forms of Facebook created UI dialogs.
     * These dialogs include:
     * - Share dialog
     * - Login dialog
     * - Add page tab dialog
     * - Requests dialog
     * - Send dialog
     * - Payments dialog
     * - Go Live dialog
     * @param params {UIParams} A collection of parameters that control which dialog is loaded, and relevant settings.
     * @returns {Promise<UIResponse>}
     */
    FacebookService.prototype.ui = function (params) {
        return new Promise(function (resolve, reject) {
            try {
                FB.ui(params, function (response) {
                    if (!response)
                        reject();
                    else if (response.error)
                        reject(response.error);
                    else
                        resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This method allows you to determine if a user is logged in to Facebook and has authenticated your app.
     * @returns {Promise<LoginStatus>}
     */
    FacebookService.prototype.getLoginStatus = function () {
        return new Promise(function (resolve, reject) {
            try {
                FB.getLoginStatus(function (response) {
                    if (!response) {
                        reject();
                    }
                    else {
                        resolve(response);
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Login the user
     * @usage
     * ```typescript
     * // login without options
     * this.fb.login()
     *   .then((response: LoginResponse) => console.log('Logged in', response))
     *   .catch(e => console.error('Error logging in'));
     *
     * // login with options
     * const options: LoginOptions = {
     *   scope: 'public_profile,user_friends,email,pages_show_list',
     *   return_scopes: true,
     *   enable_profile_selector: true
     * };
     * this.fb.login(options)
     *   .then(...)
     *   .catch(...);
     * ```
     * @param [options] {LoginOptions} Login options
     * @returns {Promise<LoginResponse>} returns a promise that resolves with [LoginResponse](../login-response) object, or rejects with an error
     */
    FacebookService.prototype.login = function (options) {
        return new Promise(function (resolve, reject) {
            try {
                FB.login(function (response) {
                    if (response.authResponse) {
                        resolve(response);
                    }
                    else {
                        reject();
                    }
                }, options);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * Logout the user
     * @usage
     * ```typescript
     * this.fb.logout().then(() => console.log('Logged out!'));
     * ```
     * @returns {Promise<any>} returns a promise that resolves when the user is logged out
     */
    FacebookService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            try {
                FB.logout(function (response) {
                    resolve(response);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * This synchronous function returns back the current authResponse.
     * @usage
     * ```typescript
     * import { AuthResponse, FacebookService } from 'ng2-facebook-sdk';
     *
     * ...
     *
     * const authResponse: AuthResponse = this.fb.getAuthResponse();
     * ```
     * @returns {AuthResponse} returns an [AuthResponse](../auth-response) object
     */
    FacebookService.prototype.getAuthResponse = function () {
        try {
            return FB.getAuthResponse();
        }
        catch (e) {
            console.error('ng2-facebook-sdk: ', e);
        }
    };
    return FacebookService;
}());

FacebookService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
FacebookService.ctorParameters = function () { return []; };
//# sourceMappingURL=facebook.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map