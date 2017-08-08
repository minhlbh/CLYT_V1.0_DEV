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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_responsive__ = __webpack_require__("../../../../ng2-responsive/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Auth_component__ = __webpack_require__("../../../../../src/app/authModule/Auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SignIn_SignIn_component__ = __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SignOut_SignOut_component__ = __webpack_require__("../../../../../src/app/authModule/SignOut/SignOut.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Register_Register_component__ = __webpack_require__("../../../../../src/app/authModule/Register/Register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Verify_Verify_component__ = __webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ForgotPassword_ForgotPassword_component__ = __webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ChangePass_ChangePass_component__ = __webpack_require__("../../../../../src/app/authModule/ChangePass/ChangePass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__EnterPhoneNumber_EnterPhoneNumber_component__ = __webpack_require__("../../../../../src/app/authModule/EnterPhoneNumber/EnterPhoneNumber.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
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
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_7__SignIn_SignIn_component__["a" /* SignInComponent */] },
    { path: 'signOut', component: __WEBPACK_IMPORTED_MODULE_8__SignOut_SignOut_component__["a" /* SignOutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__Register_Register_component__["a" /* RegisterComponent */] },
    { path: 'verify/:IdU/:phone/:code', component: __WEBPACK_IMPORTED_MODULE_10__Verify_Verify_component__["a" /* VerifyComponent */] },
    { path: 'forgotPass', component: __WEBPACK_IMPORTED_MODULE_11__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */] },
    { path: 'changePass/:IdU/:phone', component: __WEBPACK_IMPORTED_MODULE_12__ChangePass_ChangePass_component__["a" /* ChangePassComponent */] },
    { path: 'phone', component: __WEBPACK_IMPORTED_MODULE_13__EnterPhoneNumber_EnterPhoneNumber_component__["a" /* EnterPhoneNumberComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routing);
// tslint:disable-next-line:prefer-const
var providers = {
    'google': {
        'clientId': '442448415974-lvusnqsttcup9dd79fa2en47car1793k.apps.googleusercontent.com'
        // client secret: jQN-Mm7lJw78IrM6HTnYahxs
    },
    'facebook': {
        'clientId': '123454808277990',
        'apiVersion': 'v2.10'
    }
};
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["a" /* Angular2SocialLoginModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_responsive__["ResponsiveModule"],
            Routing
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__Auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_7__SignIn_SignIn_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_8__SignOut_SignOut_component__["a" /* SignOutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Register_Register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Verify_Verify_component__["a" /* VerifyComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ForgotPassword_ForgotPassword_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ChangePass_ChangePass_component__["a" /* ChangePassComponent */],
            __WEBPACK_IMPORTED_MODULE_13__EnterPhoneNumber_EnterPhoneNumber_component__["a" /* EnterPhoneNumberComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__Share_Services_user_service__["a" /* UserService */]
        ]
    })
], AuthModule);

__WEBPACK_IMPORTED_MODULE_4_angular2_social_login__["a" /* Angular2SocialLoginModule */].loadProvidersScripts(providers);
//# sourceMappingURL=Auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/ChangePass/ChangePass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in.wr {\r\n    background-image: url(\"https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg\");\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: table;\r\n}\r\n\r\n.inner {\r\n    background: #fff;\r\n    position: relative;\r\n    right: 0;\r\n    float: right;\r\n    height: 100%;\r\n    min-height: 640px;\r\n    width: 450px;\r\n    margin: 0;\r\n    padding: 40px 50px 0;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sign-in .logo {\r\n    font-size: 25px;\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .logo a {\r\n    color: #555;\r\n}\r\n\r\n.sign-in .logo img {\r\n    width: 64px;\r\n    height: 64px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .logo span {\r\n    margin: 13px 10px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social a {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.sign-in .social a:hover,\r\n.sign-in .social a:focus {\r\n    opacity: .9;\r\n}\r\n\r\n.sign-in .social a i {\r\n    font-size: 17px;\r\n    color: #fff;\r\n    padding: 12px 0 0 0;\r\n}\r\n\r\n.sign-in .social a.fb {\r\n    background: #467cbd;\r\n}\r\n\r\n.sign-in .social a.google {\r\n    background: #dc4e41;\r\n}\r\n\r\n.sign-in .social a.linkedin {\r\n    background: #0077b5;\r\n}\r\n\r\n.sign-in .title {\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    font-weight: 300;\r\n    font-size: 25px;\r\n    float: left;\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in input {\r\n    padding: 6px 10px;\r\n    border-width: 1px;\r\n    border-color: #666;\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    height: 36px;\r\n    outline: none;\r\n    width: 100%;\r\n}\r\n\r\n.sign-in button {\r\n    background-color: #0f9cb3;\r\n    width: auto;\r\n    color: #fff;\r\n    text-align: center;\r\n    height: 36px;\r\n    padding: 4px 12px 4px 12px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    margin-bottom: 16px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: none;\r\n    float: left;\r\n}\r\n\r\n.sign-in button:hover,\r\n.sign-in button:focus {\r\n    opacity: .8;\r\n}\r\n\r\n.sign-in .form-group {\r\n    margin-bottom: 20px;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.sign-in .icon-error {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 29px;\r\n    font-size: 20px;\r\n    color: #ff4a68;\r\n    display: none;\r\n    z-index: 10;\r\n}\r\n\r\n.sign-in .form-group.warning .icon-error {\r\n    display: block\r\n}\r\n\r\n.sign-in .form-group.warning input {\r\n    border: solid 1px #ff4a68;\r\n    padding-right: 30px;\r\n}\r\n\r\n.sign-in .form-group.warning .alert-text {\r\n    padding: 0;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.sign-in .or {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 13px;\r\n    color: #666;\r\n    text-align: left;\r\n    margin-top: 12px;\r\n    font-weight: 400;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .form-group .alert-text {\r\n    color: red;\r\n    text-align: left !important;\r\n    width: 100%;\r\n    float: left;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.sign-in .form-group .success-text {\r\n    color: green;\r\n    text-align: left !important;\r\n    width: 100%;\r\n    float: left;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    margin-top: 10px;\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n\r\n.sign-in .form-group a {\r\n    font-size: 13px;\r\n    color: #0f9cb3;\r\n    float: left;\r\n}\r\n\r\n.sign-in .form-group a:hover {\r\n    text-decoration: none;\r\n    color: #777;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .inner {\r\n        width: 100%;\r\n        padding: 30px 50px 0 20px;\r\n    }\r\n}\r\n\r\n\r\n/* button close */\r\n\r\n\r\n/* button close */\r\n\r\n.bt-close {\r\n    transition: all 0.3s ease 0s;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 10000;\r\n}\r\n\r\n.bt-close:hover {\r\n    background: #ce352c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/ChangePass/ChangePass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in wr\">\r\n    <button class=\"bt-close\">\r\n        <span [routerLink] = \"['']\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n    </button>\r\n    <div class=\"inner\">\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['']\">\r\n\t         \t<img src=\"{{elements.Logo}}\">\r\n\t         \t<span>{{elements.ThuongHieu}}</span>\r\n\t         </a>\r\n        </div>\r\n        <h3 class=\"title\">Đặt lại mật khẩu</h3>\r\n        <span _ngcontent-c2=\"\" class=\"or\">\r\n            Chúng tôi đã gửi tới điện thoại của bạn một mã xác thực để giúp bạn cài đặt lại mật khẩu mới.\r\n        </span>\r\n        <div class=\"form-group\" *ngIf=\"error != null\">\r\n            <span class=\"alert-text\"> {{error}}\r\n          </span>\r\n        </div>\r\n        <form #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"verifyCode\" type=\"text\" placeholder=\"Nhập mã xác thực\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"newPassword\" type=\"password\" placeholder=\"Nhập mật khẩu mới\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"confirmPassword\" type=\"password\" placeholder=\"Nhập lại mật khẩu mới\">\r\n            </div>\r\n        </form>\r\n        <div class=\"form-group\" *ngIf=\"!success\">\r\n            <a [routerLink]=\"['/auth/forgotPass']\" class=\"alert-text\">Thiếp lập mật khẩu mới thất bại! Click để quay lại</a>\r\n        </div>\r\n\r\n        <div class=\"form-group\" *ngIf=\"success\">\r\n            <a [routerLink]=\"['/auth/signIn']\" class=\"success-text\">Thiếp lập mật khẩu mới thành công! Click để về trang đăng nhập</a>\r\n        </div>\r\n        <button (click)=\"changePassword()\">Hoàn tất</button>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/forgotPass']\">\r\n           Thoát\r\n         </a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/ChangePass/ChangePass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function ChangePassComponent(settingService, router, activedroute, userService) {
        this.settingService = settingService;
        this.router = router;
        this.activedroute = activedroute;
        this.userService = userService;
        this.verifyCode = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.newPassword = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.confirmPassword = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.IdU = null;
        this.phone = null;
        this.elements = this.settingService.getConfig();
    }
    ChangePassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activedroute.params.subscribe(function (pars) {
            console.log(pars['IdU']);
            _this.IdU = pars['IdU'];
            _this.phone = pars['phone'];
        });
    };
    ChangePassComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.newPassword.value !== this.confirmPassword.value) {
            this.error = 'Mật khẩu không phù hợp!';
        }
        else {
            this.userService.changePass(this.newPassword.value, this.verifyCode.value, this.phone, this.IdU).subscribe(function (data) {
                console.log(data);
                if (data.Mes === 'Thiếp lập mật khẩu mới thành công!') {
                    _this.success = true;
                    // this.router.navigate(['auth/signIn']);
                }
            });
        }
    };
    return ChangePassComponent;
}());
ChangePassComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-changepass',
        template: __webpack_require__("../../../../../src/app/authModule/ChangePass/ChangePass.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/ChangePass/ChangePass.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ChangePassComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ChangePass.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/EnterPhoneNumber/EnterPhoneNumber.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in.wr {\r\n    background-image: url(\"https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg\");\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: table;\r\n}\r\n\r\n.inner {\r\n    background: #fff;\r\n    position: relative;\r\n    right: 0;\r\n    float: right;\r\n    height: 100%;\r\n    min-height: 640px;\r\n    width: 450px;\r\n    margin: 0;\r\n    padding: 40px 50px 0;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sign-in .logo {\r\n    font-size: 25px;\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .logo a {\r\n    color: #555;\r\n}\r\n\r\n.sign-in .logo img {\r\n    width: 64px;\r\n    height: 64px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .logo span {\r\n    margin: 13px 10px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social a {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.sign-in .social a:hover,\r\n.sign-in .social a:focus {\r\n    opacity: .9;\r\n}\r\n\r\n.sign-in .social a i {\r\n    font-size: 17px;\r\n    color: #fff;\r\n    padding: 12px 0 0 0;\r\n}\r\n\r\n.sign-in .social a.fb {\r\n    background: #467cbd;\r\n}\r\n\r\n.sign-in .social a.google {\r\n    background: #dc4e41;\r\n}\r\n\r\n.sign-in .social a.linkedin {\r\n    background: #0077b5;\r\n}\r\n\r\n.sign-in .title {\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    font-weight: 300;\r\n    font-size: 25px;\r\n    float: left;\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in input {\r\n    padding: 6px 10px;\r\n    border-width: 1px;\r\n    border-color: #666;\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    height: 36px;\r\n    outline: none;\r\n    width: 100%;\r\n}\r\n\r\n.sign-in button {\r\n    background-color: #0f9cb3;\r\n    width: auto;\r\n    color: #fff;\r\n    text-align: center;\r\n    height: 36px;\r\n    padding: 4px 12px 4px 12px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    margin-bottom: 16px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: none;\r\n    float: left;\r\n}\r\n\r\n.sign-in button:hover,\r\n.sign-in button:focus {\r\n    opacity: .8;\r\n}\r\n\r\n.sign-in .form-group {\r\n    margin-bottom: 20px;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.sign-in .icon-error {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 29px;\r\n    font-size: 20px;\r\n    color: #ff4a68;\r\n    display: none;\r\n    z-index: 10;\r\n}\r\n\r\n.sign-in .form-group.warning .icon-error {\r\n    display: block\r\n}\r\n\r\n.sign-in .form-group.warning input {\r\n    border: solid 1px #ff4a68;\r\n    padding-right: 30px;\r\n}\r\n\r\n.sign-in .form-group.warning .alert-text {\r\n    padding: 0;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.sign-in .or {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 13px;\r\n    color: #666;\r\n    text-align: left;\r\n    margin-top: 12px;\r\n    font-weight: 400;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .form-group .alert-text {\r\n    color: red;\r\n    text-align: left !important;\r\n    width: 100%;\r\n    float: left;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.sign-in .form-group a {\r\n    font-size: 13px;\r\n    color: #0f9cb3;\r\n    float: left;\r\n}\r\n\r\n.sign-in .form-group a:hover {\r\n    text-decoration: none;\r\n    color: #777;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .inner {\r\n        width: 100%;\r\n        padding: 30px 50px 0 20px;\r\n    }\r\n}\r\n\r\n\r\n/* button close */\r\n\r\n\r\n/* button close */\r\n\r\n.bt-close {\r\n    transition: all 0.3s ease 0s;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 10000;\r\n}\r\n\r\n.bt-close:hover {\r\n    background: #ce352c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/EnterPhoneNumber/EnterPhoneNumber.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in wr\">\r\n    <button class=\"bt-close\">\r\n        <span [routerLink] = \"['']\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n    </button>\r\n    <div class=\"inner\">\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['']\">\r\n\t         \t<img src=\"{{elements.Logo}}\">\r\n\t         \t<span>{{elements.ThuongHieu}}</span>\r\n\t         </a>\r\n        </div>\r\n        <h3 class=\"title\">Nhập số điện thoại của bạn</h3>\r\n\r\n        <form #f=\"ngForm\" class=\"form-group\">\r\n            <input [formControl]=\"phone\" type=\"text\" placeholder=\"Nhập số điện thoại...\">\r\n        </form>\r\n        <button>Hoàn tất</button>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/signIn']\">\r\n           Thoát\r\n         </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/EnterPhoneNumber/EnterPhoneNumber.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterPhoneNumberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EnterPhoneNumberComponent = (function () {
    function EnterPhoneNumberComponent(settingService, router, activedroute, userService) {
        this.settingService = settingService;
        this.router = router;
        this.activedroute = activedroute;
        this.userService = userService;
        this.phone = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.elements = this.settingService.getConfig();
    }
    EnterPhoneNumberComponent.prototype.ngOnInit = function () {
    };
    return EnterPhoneNumberComponent;
}());
EnterPhoneNumberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-enterphonenumber',
        template: __webpack_require__("../../../../../src/app/authModule/EnterPhoneNumber/EnterPhoneNumber.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/EnterPhoneNumber/EnterPhoneNumber.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], EnterPhoneNumberComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=EnterPhoneNumber.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in.wr {\r\n    background-image: url(\"https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg\");\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: table;\r\n}\r\n\r\n.inner {\r\n    background: #fff;\r\n    position: relative;\r\n    right: 0;\r\n    float: right;\r\n    height: 100%;\r\n    min-height: 640px;\r\n    width: 450px;\r\n    margin: 0;\r\n    padding: 40px 50px 0;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sign-in .logo {\r\n    font-size: 25px;\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .logo a {\r\n    color: #555;\r\n}\r\n\r\n.sign-in .logo img {\r\n    width: 64px;\r\n    height: 64px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .logo span {\r\n    margin: 13px 10px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social a {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.sign-in .social a:hover,\r\n.sign-in .social a:focus {\r\n    opacity: .9;\r\n}\r\n\r\n.sign-in .social a i {\r\n    font-size: 17px;\r\n    color: #fff;\r\n    padding: 12px 0 0 0;\r\n}\r\n\r\n.sign-in .social a.fb {\r\n    background: #467cbd;\r\n}\r\n\r\n.sign-in .social a.google {\r\n    background: #dc4e41;\r\n}\r\n\r\n.sign-in .social a.linkedin {\r\n    background: #0077b5;\r\n}\r\n\r\n.sign-in .title {\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    font-weight: 300;\r\n    font-size: 25px;\r\n    float: left;\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in input {\r\n    padding: 6px 10px;\r\n    border-width: 1px;\r\n    border-color: #666;\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    height: 36px;\r\n    outline: none;\r\n    width: 100%;\r\n}\r\n\r\n.sign-in button {\r\n    background-color: #0f9cb3;\r\n    width: auto;\r\n    color: #fff;\r\n    text-align: center;\r\n    height: 36px;\r\n    padding: 4px 12px 4px 12px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    margin-bottom: 16px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: none;\r\n    float: left;\r\n}\r\n\r\n.sign-in button:hover,\r\n.sign-in button:focus {\r\n    opacity: .8;\r\n}\r\n\r\n.sign-in .form-group {\r\n    margin-bottom: 20px;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.sign-in .icon-error {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 29px;\r\n    font-size: 20px;\r\n    color: #ff4a68;\r\n    display: none;\r\n    z-index: 10;\r\n}\r\n\r\n.sign-in .form-group.warning .icon-error {\r\n    display: block\r\n}\r\n\r\n.sign-in .form-group.warning input {\r\n    border: solid 1px #ff4a68;\r\n    padding-right: 30px;\r\n}\r\n\r\n.sign-in .form-group.warning .alert-text {\r\n    padding: 0;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.sign-in .or {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 13px;\r\n    color: #666;\r\n    text-align: left;\r\n    margin-top: 12px;\r\n    font-weight: 400;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .form-group .alert-text {\r\n    color: red;\r\n    text-align: left !important;\r\n    width: 100%;\r\n    float: left;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.sign-in .form-group a {\r\n    font-size: 13px;\r\n    color: #0f9cb3;\r\n    float: left;\r\n}\r\n\r\n.sign-in .form-group a:hover {\r\n    text-decoration: none;\r\n    color: #777;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .inner {\r\n        width: 100%;\r\n        padding: 30px 50px 0 20px;\r\n    }\r\n}\r\n\r\n\r\n/* button close */\r\n\r\n\r\n/* button close */\r\n\r\n.bt-close {\r\n    transition: all 0.3s ease 0s;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 10000;\r\n}\r\n\r\n.bt-close:hover {\r\n    background: #ce352c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in wr\">\r\n    <button class=\"bt-close\">\r\n        <span [routerLink] = \"['']\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n    </button>\r\n    <div class=\"inner\">\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['']\">\r\n\t         \t<img src=\"{{elements.Logo}}\">\r\n\t         \t<span>{{elements.ThuongHieu}}</span>\r\n\t         </a>\r\n        </div>\r\n        <h3 class=\"title\">Quên mật khẩu</h3>\r\n        <span _ngcontent-c2=\"\" class=\"or\">\r\n      Chúng tôi sẽ gửi tới điện thoại của bạn một mã xác thực để giúp bạn cài đặt lại mật khẩu.\r\n    </span>\r\n        <div class=\"form-group\">\r\n            <input [formControl]=\"phone\" type=\"text\" placeholder=\"Nhập số điện thoại\">\r\n        </div>\r\n\r\n        <button (click)=\"forgotPass()\">Tiếp tục</button>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/signIn']\">\r\n           Thoát\r\n         </a>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function ForgotPasswordComponent(settingService, router, activedroute, userService) {
        this.settingService = settingService;
        this.router = router;
        this.activedroute = activedroute;
        this.userService = userService;
        this.phone = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.elements = this.settingService.getConfig();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotPass = function () {
        var _this = this;
        console.log(this.phone.value);
        this.userService.forgotPassword(this.phone.value).subscribe(function (data) {
            console.log(data.mess);
            _this.router.navigate(['auth/changePass', data.IdU, _this.phone.value]);
        }, function (err) {
            // tslint:disable-next-line:no-unused-expression
            _this;
            // alert("so dien thoai loi")
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/ForgotPassword/ForgotPassword.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Share_Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ForgotPasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=ForgotPassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/Register/Register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "        .sign-in.wr {\r\n            background-image: url(\"https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg\");\r\n            position: absolute;\r\n            width: 100%;\r\n            height: 100%;\r\n            display: table;\r\n        }\r\n\r\n        .inner {\r\n            background: #fff;\r\n            position: relative;\r\n            right: 0;\r\n            float: right;\r\n            height: 100%;\r\n            min-height: 640px;\r\n            width: 450px;\r\n            margin: 0;\r\n            padding: 40px 50px 0;\r\n            z-index: 1;\r\n            overflow: hidden;\r\n            text-align: center;\r\n        }\r\n\r\n        .middle {\r\n            display: table-cell;\r\n            vertical-align: middle;\r\n        }\r\n\r\n        .sign-in .logo {\r\n            font-size: 25px;\r\n            width: 100%;\r\n            float: left;\r\n            margin-bottom: 20px;\r\n        }\r\n\r\n        .sign-in .logo a {\r\n            color: #555;\r\n        }\r\n\r\n        .sign-in .logo img {\r\n            width: 64px;\r\n            height: 64px;\r\n            float: left;\r\n        }\r\n\r\n        .sign-in .logo span {\r\n            margin: 13px 10px;\r\n            float: left;\r\n        }\r\n\r\n        .sign-in .social {\r\n            width: 100%;\r\n            float: left;\r\n        }\r\n\r\n        .sign-in .social a {\r\n            width: 40px;\r\n            height: 40px;\r\n            float: left;\r\n            margin-right: 5px;\r\n            text-align: center;\r\n        }\r\n\r\n        .sign-in .social a:hover,\r\n        .sign-in .social a:focus {\r\n            opacity: .9;\r\n        }\r\n\r\n        .sign-in .social a i {\r\n            font-size: 17px;\r\n            color: #fff;\r\n            padding: 12px 0 0 0;\r\n        }\r\n\r\n        .sign-in .social a.fb {\r\n            background: #467cbd;\r\n        }\r\n\r\n        .sign-in .social a.google {\r\n            background: #dc4e41;\r\n        }\r\n\r\n        .sign-in .social a.linkedin {\r\n            background: #0077b5;\r\n        }\r\n\r\n        .sign-in .title {\r\n            padding: 0;\r\n            margin-top: 16px;\r\n            margin-bottom: 16px;\r\n            font-weight: 300;\r\n            font-size: 25px;\r\n            float: left;\r\n            color: #0f9cb3;\r\n        }\r\n\r\n        .sign-in input {\r\n            padding: 6px 10px;\r\n            border-width: 1px;\r\n            border-color: #666;\r\n            border-color: rgba(0, 0, 0, 0.6);\r\n            height: 36px;\r\n            outline: none;\r\n            width: 100%;\r\n        }\r\n\r\n        .sign-in button {\r\n            background-color: #0f9cb3;\r\n            width: auto;\r\n            color: #fff;\r\n            text-align: center;\r\n            height: 36px;\r\n            padding: 4px 12px 4px 12px;\r\n            display: inline-block;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            vertical-align: middle;\r\n            text-overflow: ellipsis;\r\n            -ms-touch-action: manipulation;\r\n                touch-action: manipulation;\r\n            cursor: pointer;\r\n            margin-bottom: 16px;\r\n            box-shadow: none;\r\n            outline: none;\r\n            border: none;\r\n            float: left;\r\n        }\r\n\r\n        .sign-in button:hover,\r\n        .sign-in button:focus {\r\n            opacity: .8;\r\n        }\r\n\r\n        .sign-in .form-group {\r\n            margin-bottom: 20px;\r\n            font-size: 12px;\r\n            width: 100%;\r\n            float: left;\r\n            position: relative;\r\n        }\r\n\r\n        .sign-in .icon-error {\r\n            position: absolute;\r\n            right: 5px;\r\n            top: 29px;\r\n            font-size: 20px;\r\n            color: #ff4a68;\r\n            display: none;\r\n            z-index: 10;\r\n        }\r\n\r\n        .sign-in .form-group.warning .icon-error {\r\n            display: block\r\n        }\r\n\r\n        .sign-in .form-group.warning input {\r\n            border: solid 1px #ff4a68;\r\n            padding-right: 30px;\r\n        }\r\n\r\n        .sign-in .form-group.warning .alert-text {\r\n            padding: 0;\r\n            margin: 0 0 5px 0;\r\n        }\r\n\r\n        .sign-in .or {\r\n            width: 100%;\r\n            float: left;\r\n            font-size: 13px;\r\n            color: #666;\r\n            text-align: left;\r\n            margin-top: 12px;\r\n            font-weight: 400;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .sign-in .form-group .alert-text {\r\n            color: red;\r\n            text-align: left !important;\r\n            width: 100%;\r\n            float: left;\r\n            font-weight: 400;\r\n            line-height: 16px;\r\n            margin-top: 10px;\r\n            display: block;\r\n        }\r\n\r\n        .sign-in .form-group a {\r\n            font-size: 13px;\r\n            color: #0f9cb3;\r\n            float: left;\r\n        }\r\n\r\n        .sign-in .form-group a:hover {\r\n            text-decoration: none;\r\n            color: #777;\r\n        }\r\n\r\n        .sign-in .form-group .checkbox {\r\n            cursor: pointer;\r\n            float: left;\r\n            margin: 0;\r\n            padding: 0;\r\n            position: relative\r\n        }\r\n\r\n        .sign-in .form-group .checkbox input {\r\n            width: 20px;\r\n            height: 20px;\r\n            margin: 3px 3px 0 0;\r\n            padding: 0;\r\n            float: left;\r\n            cursor: pointer;\r\n            color: #0f9cb3;\r\n            position: absolute;\r\n            left: 0;\r\n        }\r\n\r\n        .sign-in .form-group .checkbox span {\r\n            margin-left: 22px;\r\n            font-size: 12px;\r\n            font-weight: 400;\r\n            margin: 0 0 0 20px;\r\n            padding: 0;\r\n            text-align: left;\r\n            float: left\r\n        }\r\n\r\n        .sign-in .form-group .checkbox a {\r\n            float: none;\r\n        }\r\n\r\n        .sign-in .footer {\r\n            width: 100%;\r\n            position: absolute;\r\n            bottom: 0;\r\n            left: 0;\r\n            padding: 0 50px 5px;\r\n            background: rgba(255, 255, 255, 0.3)\r\n        }\r\n\r\n        .sign-in .footer a {\r\n            color: #0f9cb3;\r\n        }\r\n\r\n        .sign-in .footer .form-group {\r\n            margin: 0;\r\n        }\r\n\r\n        .sign-in .footer a,\r\n        .footer span {\r\n            padding: 0 15px 5px 0;\r\n            font-size: 12px;\r\n            float: left;\r\n        }\r\n\r\n        .sign-in .footer a:hover,\r\n        .sign-in .footer a:focus {\r\n            text-decoration: none;\r\n        }\r\n\r\n        @media only screen and (max-width: 768px) {\r\n            .inner {\r\n                width: 100%;\r\n                padding: 20px 50px 0 20px;\r\n            }\r\n            .sign-in .logo {\r\n                margin-bottom: 0;\r\n            }\r\n            .sign-in .footer {\r\n                padding: 0 20px 5px;\r\n            }\r\n            .sign-in .form-group .checkbox input {\r\n                margin-top: 0;\r\n            }\r\n        }\r\n        /* button close */\r\n        /* button close */\r\n\r\n        .bt-close {\r\n            transition: all 0.3s ease 0s;\r\n            position: absolute;\r\n            right: 0;\r\n            top: 0;\r\n            z-index: 10000;\r\n        }\r\n\r\n        .bt-close:hover {\r\n            background: #ce352c;\r\n        }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/Register/Register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in wr\">\r\n    <button class=\"bt-close\">\r\n        <span [routerLink] = \"['']\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n    </button>\r\n    <div class=\"inner\">\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['']\">\r\n\t         \t<img src=\"{{elements.Logo}}\">\r\n\t         \t<span>{{elements.ThuongHieu}}</span>\r\n\t         </a>\r\n        </div>\r\n        <h3 class=\"title\">Đăng ký tài khoản</h3>\r\n        <div class=\"social\">\r\n            <a (click)=\"signIn('facebook')\" class=\"fb\">\r\n        <i class=\"fa fa-fw fa-facebook\"></i>\r\n      </a>\r\n            <a (click)=\"signIn('google')\" class=\"google\">\r\n        <i class=\"fa fa-fw fa-google-plus\"></i>\r\n      </a>\r\n            <!-- <a (click) = \"signIn('linkedin')\" class=\"linkedin\">\r\n        <i class=\"fa fa-fw fa-linkedin\"></i>\r\n      </a> -->\r\n        </div>\r\n        <span class=\"or\">Hoặc</span>\r\n        <form #f=\"ngForm\" (ngSubmit)=\"registerSubmit()\">\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"name\" type=\"text\" placeholder=\"Họ & tên\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"email\" type=\"text\" placeholder=\"Email\">\r\n            </div>\r\n            <!-- <div class=\"form-group warning\" *ngIf=\"error != null\">\r\n        <span class=\"alert-text\">Số điện thoại không hợp lệ!</span>\r\n        <input [formControl]=\"phone\" type=\"text\" placeholder=\"Số điện thoại\">\r\n        <span class=\"glyphicon glyphicon-exclamation-sign icon-error\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Email không hợp lệ. Vui lòng nhập lại.\"></span>\r\n      </div> -->\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"phone\" type=\"text\" placeholder=\"Số điện thoại\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"password\" type=\"password\" placeholder=\"Mật khẩu\">\r\n            </div>\r\n        </form>\r\n        <div class=\"form-group\">\r\n            <label class=\"checkbox\">\r\n          <input type=\"checkbox\" checked>\r\n          <span>Tôi đồng ý với <a [routerLink]=\"['/policies/terms']\">điều khoản sử dụng</a> và <a [routerLink]=\"['/policies/privacy']\">chính sách bảo mật.</a></span>\r\n        </label>\r\n        </div>\r\n        <button (click)=\"registerSubmit()\">Tạo tài khoản</button>\r\n\r\n        <div class=\"footer\">\r\n            <div class=\"form-group\">\r\n                <span>\r\n               ©2017 {{elements.ThuongHieu}}\r\n          </span>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/Register/Register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function RegisterComponent(settingService, router, _auth, userService) {
        this.settingService = settingService;
        this.router = router;
        this._auth = _auth;
        this.userService = userService;
        this.error = null;
        this.name = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.phone = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.password = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        this.elements = this.settingService.getConfig();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // login social network
    RegisterComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (_this.user !== null) {
                _this.socialLogin = true;
                _this.router.navigate(['auth/phone']);
            }
            else {
                _this.socialLogin = false;
            }
        });
    };
    RegisterComponent.prototype.registerSubmit = function () {
        var _this = this;
        this.userService.register(this.name.value, this.email.value, this.phone.value, this.password.value).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['auth/verify', data.Id, data.Phone, data.Code]);
        }, function (err) {
            var errOb = JSON.parse(err.text());
            console.log('error:', errOb.error_description);
            _this.error = errOb.error_description;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/authModule/Register/Register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Register/Register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_social_login__["b" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=Register.component.js.map

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in.wr {\r\n    background-image: url(\"https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg\");\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: table;\r\n}\r\n\r\n.inner {\r\n    background: #fff;\r\n    position: relative;\r\n    right: 0;\r\n    float: right;\r\n    height: 100vh;\r\n    min-height: 640px;\r\n    width: 450px;\r\n    margin: 0;\r\n    padding: 40px 50px 0;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sign-in .logo {\r\n    font-size: 25px;\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .logo a {\r\n    color: #555;\r\n}\r\n\r\n.sign-in .logo img {\r\n    width: 64px;\r\n    height: 64px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .logo span {\r\n    margin: 13px 10px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social a {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.sign-in .social a:hover,\r\n.sign-in .social a:focus {\r\n    opacity: .9;\r\n}\r\n\r\n.sign-in .social a i {\r\n    font-size: 17px;\r\n    color: #fff;\r\n    padding: 12px 0 0 0;\r\n}\r\n\r\n.sign-in .social a.fb {\r\n    background: #467cbd;\r\n}\r\n\r\n.sign-in .social a.google {\r\n    background: #dc4e41;\r\n}\r\n\r\n.sign-in .social a.linkedin {\r\n    background: #0077b5;\r\n}\r\n\r\n.sign-in .title {\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    font-weight: 300;\r\n    font-size: 25px;\r\n    float: left;\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in input {\r\n    padding: 6px 10px;\r\n    border-width: 1px;\r\n    border-color: #666;\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    height: 36px;\r\n    outline: none;\r\n    width: 100%;\r\n}\r\n\r\n.sign-in .input-button {\r\n    background-color: #0f9cb3;\r\n    width: auto;\r\n    color: #fff;\r\n    text-align: center;\r\n    height: 36px;\r\n    padding: 4px 12px 4px 12px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    margin-bottom: 16px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: none;\r\n    float: left;\r\n}\r\n\r\n.sign-in button {\r\n    background-color: #0f9cb3;\r\n    width: auto;\r\n    color: #fff;\r\n    text-align: center;\r\n    height: 36px;\r\n    padding: 4px 12px 4px 12px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    margin-bottom: 16px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: none;\r\n    float: left;\r\n}\r\n\r\n.sign-in button:hover,\r\n.sign-in button:focus {\r\n    opacity: .8;\r\n}\r\n\r\n.sign-in button:hover,\r\n.sign-in button:focus {\r\n    opacity: .8;\r\n}\r\n\r\n.sign-in .form-group {\r\n    margin-bottom: 20px;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.sign-in .icon-error {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 29px;\r\n    font-size: 20px;\r\n    color: #ff4a68;\r\n    display: none;\r\n    z-index: 10;\r\n}\r\n\r\n.sign-in .form-group.warning .icon-error {\r\n    display: block\r\n}\r\n\r\n.sign-in .form-group.warning input {\r\n    border: solid 1px #ff4a68;\r\n    padding-right: 30px;\r\n}\r\n\r\n.sign-in .form-group.warning .alert-text {\r\n    padding: 0;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.sign-in .or {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 13px;\r\n    color: #666;\r\n    text-align: left;\r\n    margin-top: 12px;\r\n    font-weight: 400;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.sign-in .form-group .alert-text {\r\n    color: red;\r\n    text-align: left !important;\r\n    width: 100%;\r\n    float: left;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.sign-in .form-group a {\r\n    font-size: 13px;\r\n    color: #0f9cb3;\r\n    float: left;\r\n}\r\n\r\n.sign-in .form-group a:hover {\r\n    text-decoration: none;\r\n    color: #777;\r\n}\r\n\r\n.sign-in .form-group .checkbox {\r\n    cursor: pointer;\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative\r\n}\r\n\r\n.sign-in .form-group .checkbox input {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 3px 3px 0 0;\r\n    padding: 0;\r\n    float: left;\r\n    cursor: pointer;\r\n    color: #0f9cb3;\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.sign-in .form-group .checkbox span {\r\n    float: left;\r\n    margin-left: 22px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n\r\n.sign-in .footer {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 0 50px 5px;\r\n    background: rgba(255, 255, 255, 0.3)\r\n}\r\n\r\n.sign-in .footer a {\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in .footer .form-group {\r\n    margin: 0;\r\n}\r\n\r\n.sign-in .footer a,\r\n.footer span {\r\n    padding: 0 15px 5px 0;\r\n    font-size: 12px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .footer a:hover,\r\n.sign-in .footer a:focus {\r\n    text-decoration: none;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .inner {\r\n        width: 100%;\r\n        padding: 30px 50px 0 20px;\r\n    }\r\n    .sign-in .footer {\r\n        padding: 0 20px 5px;\r\n    }\r\n    .sign-in .form-group .checkbox input {\r\n        margin-top: 0;\r\n    }\r\n}\r\n\r\n\r\n/* button close */\r\n\r\n\r\n/* button close */\r\n\r\n.bt-close {\r\n    transition: all 0.3s ease 0s;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 10000;\r\n}\r\n\r\n.bt-close:hover {\r\n    background: #ce352c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in wr\">\r\n    <button class=\"bt-close\">\r\n        <span [routerLink] = \"['']\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n    </button>\r\n    <div class=\"inner\">\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['']\">\r\n\t         \t<img src=\"{{elements.Logo}}\">\r\n\t         \t<span>{{elements.ThuongHieu}}</span>\r\n\t         </a>\r\n        </div>\r\n\r\n        <h3 class=\"title\">Đăng nhập</h3>\r\n        <div class=\"social\">\r\n            <a (click)=\"signIn('facebook')\" class=\"fb\">\r\n                <i class=\"fa fa-fw fa-facebook\"></i>\r\n            </a>\r\n            <a (click)=\"signIn('google')\" class=\"google\">\r\n                <i class=\"fa fa-fw fa-google-plus\"></i>\r\n            </a>\r\n            <!-- <a (click)=\"signIn('linkedin')\" class=\"linkedin\">\r\n        <i class=\"fa fa-fw fa-linkedin\"></i>\r\n      </a> -->\r\n\r\n        </div>\r\n        <span class=\"or\">Hoặc</span>\r\n        <div class=\"form-group\" *ngIf=\"error != null\">\r\n            <span class=\"alert-text\"> {{error}}\r\n          </span>\r\n        </div>\r\n        <!-- <div class=\"form-group warning\" *ngIf=\"error != null\">\r\n            <span class=\"alert-text\">Số điện thoại không hợp lệ!</span>\r\n            <input type=\"text\" placeholder=\"Nhập email hoặc số điện thoại\">\r\n            <span class=\"glyphicon glyphicon-exclamation-sign icon-error\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Email không hợp lệ. Vui lòng nhập lại.\"></span>\r\n        </div> -->\r\n        <form #f=\"ngForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"username\" type=\"text\" placeholder=\"Nhập email hoặc số điện thoại\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input [formControl]=\"password\" type=\"password\" placeholder=\"Nhập mật khẩu\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"checkbox\">\r\n          <input type=\"checkbox\" checked>\r\n          <span>Giữ tôi luôn đăng nhập</span>\r\n        </label>\r\n            </div>\r\n            <input class=\"input-button\" (click)=\"onLoginSubmit()\" type=\"submit\" value=\"Đăng nhập\">\r\n        </form>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/forgotPass']\">\r\n           Quên mật khẩu\r\n         </a>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/register']\">\r\n           Tạo tài khoản mới\r\n         </a>\r\n        </div>\r\n        <div class=\"footer\">\r\n            <div class=\"form-group\">\r\n                <span>\r\n               ©2017 {{elements.ThuongHieu}}\r\n          </span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <a [routerLink]=\"['/policies/privacy']\">\r\n          Chính sách bảo mật\r\n        </a>\r\n                <a [routerLink]=\"['/policies/terms']\">\r\n          Điều khoản sử dụng\r\n        </a>\r\n                <div class=\"form-group\">\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/SignIn/SignIn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_social_login__ = __webpack_require__("../../../../angular2-social-login/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function SignInComponent(router, settingService, _auth, userService) {
        this.router = router;
        this.settingService = settingService;
        this._auth = _auth;
        this.userService = userService;
        this.error = null;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.elements = this.settingService.getConfig();
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.socialLogin = false;
    };
    // login social network
    SignInComponent.prototype.signIn = function (provider) {
        var _this = this;
        this.sub = this._auth.login(provider).subscribe(function (data) {
            console.log(data);
            _this.user = data;
            if (_this.user !== null) {
                _this.socialLogin = true;
                _this.router.navigate(['auth/phone']);
            }
            else {
                _this.socialLogin = false;
            }
        });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/SignIn/SignIn.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_social_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_social_login__["b" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Share_Services_user_service__["a" /* UserService */]) === "function" && _d || Object])
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
exports.push([module.i, ".sign-in.wr {\r\n    background-image: url(\"https://sharinglife.blob.core.windows.net/images/file_d442c622-9f49-4165-a35a-32e302e9fbf8.svg\");\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: table;\r\n}\r\n\r\n.inner {\r\n    background: #fff;\r\n    position: relative;\r\n    right: 0;\r\n    float: right;\r\n    height: 100%;\r\n    min-height: 640px;\r\n    width: 450px;\r\n    margin: 0;\r\n    padding: 40px 50px 0;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.middle {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sign-in .logo {\r\n    font-size: 25px;\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .logo a {\r\n    color: #555;\r\n}\r\n\r\n.sign-in .logo img {\r\n    width: 64px;\r\n    height: 64px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .logo span {\r\n    margin: 13px 10px;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.sign-in .social a {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.sign-in .social a:hover,\r\n.sign-in .social a:focus {\r\n    opacity: .9;\r\n}\r\n\r\n.sign-in .social a i {\r\n    font-size: 17px;\r\n    color: #fff;\r\n    padding: 12px 0 0 0;\r\n}\r\n\r\n.sign-in .social a.fb {\r\n    background: #467cbd;\r\n}\r\n\r\n.sign-in .social a.google {\r\n    background: #dc4e41;\r\n}\r\n\r\n.sign-in .social a.linkedin {\r\n    background: #0077b5;\r\n}\r\n\r\n.sign-in .title {\r\n    padding: 0;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    font-weight: 300;\r\n    font-size: 25px;\r\n    float: left;\r\n    color: #0f9cb3;\r\n}\r\n\r\n.sign-in input {\r\n    padding: 6px 10px;\r\n    border-width: 1px;\r\n    border-color: #666;\r\n    border-color: rgba(0, 0, 0, 0.6);\r\n    height: 36px;\r\n    outline: none;\r\n    width: 100%;\r\n}\r\n\r\n.sign-in button {\r\n    background-color: #0f9cb3;\r\n    width: auto;\r\n    color: #fff;\r\n    text-align: center;\r\n    height: 36px;\r\n    padding: 4px 12px 4px 12px;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n    text-overflow: ellipsis;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    cursor: pointer;\r\n    margin-bottom: 16px;\r\n    box-shadow: none;\r\n    outline: none;\r\n    border: none;\r\n    float: left;\r\n}\r\n\r\n.sign-in button:hover,\r\n.sign-in button:focus {\r\n    opacity: .8;\r\n}\r\n\r\n.sign-in .form-group {\r\n    margin-bottom: 20px;\r\n    font-size: 12px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n}\r\n\r\n.sign-in .icon-error {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 29px;\r\n    font-size: 20px;\r\n    color: #ff4a68;\r\n    display: none;\r\n    z-index: 10;\r\n}\r\n\r\n.sign-in .form-group.warning .icon-error {\r\n    display: block\r\n}\r\n\r\n.sign-in .form-group.warning input {\r\n    border: solid 1px #ff4a68;\r\n    padding-right: 30px;\r\n}\r\n\r\n.sign-in .form-group.warning .alert-text {\r\n    padding: 0;\r\n    margin: 0 0 5px 0;\r\n}\r\n\r\n.sign-in .or {\r\n    width: 100%;\r\n    float: left;\r\n    font-size: 13px;\r\n    color: #666;\r\n    text-align: left;\r\n    margin-top: 12px;\r\n    font-weight: 400;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.sign-in .form-group .alert-text {\r\n    color: red;\r\n    text-align: left !important;\r\n    width: 100%;\r\n    float: left;\r\n    font-weight: 400;\r\n    line-height: 16px;\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.sign-in .form-group a {\r\n    font-size: 13px;\r\n    color: #0f9cb3;\r\n    float: left;\r\n}\r\n\r\n.sign-in .form-group a:hover {\r\n    text-decoration: none;\r\n    color: #777;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .inner {\r\n        width: 100%;\r\n        padding: 30px 50px 0 20px;\r\n    }\r\n}\r\n\r\n\r\n/* button close */\r\n\r\n\r\n/* button close */\r\n\r\n.bt-close {\r\n    transition: all 0.3s ease 0s;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 10000;\r\n}\r\n\r\n.bt-close:hover {\r\n    background: #ce352c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authModule/Verify/Verify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in wr\">\r\n    <button class=\"bt-close\">\r\n        <span [routerLink] = \"['']\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\r\n    </button>\r\n    <div class=\"inner\">\r\n        <div class=\"logo\">\r\n            <a [routerLink]=\"['']\">\r\n\t         \t<img src=\"{{elements.Logo}}\">\r\n\t         \t<span>{{elements.ThuongHieu}}</span>\r\n\t         </a>\r\n        </div>\r\n        <h3 class=\"title\">Xác thực tài khoản</h3>\r\n        <span _ngcontent-c2=\"\" class=\"or\">\r\n      Một tin nhắn chứa mã xác thực đã được gửi đến số điện thoại của bạn. Vui lòng kiểm tra và nhập mã xác thực.\r\n    </span>\r\n        <div class=\"form-group\">\r\n            <input [formControl]=\"verifyCode\" type=\"text\" placeholder=\"Nhập mã xác thực\">\r\n        </div>\r\n        <button (click)=\"verification()\">Hoàn tất</button>\r\n        <div class=\"form-group\">\r\n            <a href=\"#\">\r\n           Gửi lại mã xác thực\r\n         </a>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <a [routerLink]=\"['/auth/register']\">\r\n           Thoát\r\n         </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/authModule/Verify/Verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__ = __webpack_require__("../../../../../src/app/Share/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function VerifyComponent(router, activedroute, userService, settingService) {
        this.router = router;
        this.activedroute = activedroute;
        this.userService = userService;
        this.settingService = settingService;
        this.error = null;
        this.IdU = null;
        this.Phone = null;
        this.verifyCode = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        this.elements = this.settingService.getConfig();
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activedroute.params.subscribe(function (pars) {
            _this.IdU = pars['IdU'];
            _this.Phone = pars['phone'];
        });
    };
    VerifyComponent.prototype.verification = function () {
        var _this = this;
        this.userService.verifyCode(this.verifyCode.value, this.Phone, this.IdU).subscribe(function (data) {
            console.log(data);
            _this.error = data;
            if (data === 'Xác nhận Phone thành công') {
                _this.router.navigate(['auth/signIn']);
            }
        });
    };
    return VerifyComponent;
}());
VerifyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-verify',
        template: __webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authModule/Verify/Verify.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Share_Services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _d || Object])
], VerifyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=Verify.component.js.map

/***/ }),

/***/ "../../../../angular2-social-login/dist/angular2-social-login.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../angular2-social-login/dist/auth.service.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Angular2SocialLoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Angular2SocialLoginModule = (function () {
    function Angular2SocialLoginModule() {
    }
    Angular2SocialLoginModule.loadProvidersScripts = function (config) {
        var loadProvidersScripts = {
            google: function (info) {
                var d = document, gJs, ref = d.getElementsByTagName('script')[0];
                gJs = d.createElement('script');
                gJs.async = true;
                gJs.src = "//apis.google.com/js/platform.js";
                gJs.onload = function () {
                    gapi.load('auth2', function () {
                        gapi.auth2.init({
                            client_id: info["clientId"],
                            scope: 'email'
                        });
                    });
                };
                ref.parentNode.insertBefore(gJs, ref);
            },
            linkedin: function (info) {
                var lIN, d = document, ref = d.getElementsByTagName('script')[0];
                lIN = d.createElement('script');
                lIN.async = false;
                lIN.src = "//platform.linkedin.com/in.js";
                lIN.text = ("api_key: " + info["clientId"]).replace("\"", "");
                ref.parentNode.insertBefore(lIN, ref);
            },
            facebook: function (info) {
                var d = document, fbJs, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                fbJs = d.createElement('script');
                fbJs.id = id;
                fbJs.async = true;
                fbJs.src = "//connect.facebook.net/en_US/sdk.js";
                fbJs.onload = function () {
                    FB.init({
                        appId: info["clientId"],
                        status: true,
                        cookie: true,
                        xfbml: true,
                        version: info["apiVersion"]
                    });
                };
                ref.parentNode.insertBefore(fbJs, ref);
            }
        };
        Object.keys(config).forEach(function (provider) {
            loadProvidersScripts[provider](config[provider]);
        });
    };
    Angular2SocialLoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        })
    ], Angular2SocialLoginModule);
    return Angular2SocialLoginModule;
}());

//# sourceMappingURL=angular2-social-login.module.js.map

/***/ }),

/***/ "../../../../angular2-social-login/dist/auth.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (provider) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            switch (provider) {
                case "google":
                    if (typeof (_this.gauth) == "undefined") {
                        _this.gauth = gapi.auth2.getAuthInstance();
                    }
                    if (!_this.gauth.isSignedIn.get()) {
                        _this.gauth.signIn().then(function () {
                            localStorage.setItem('_login_provider', 'google');
                            observer.next(_this._fetchGoogleUserDetails());
                            observer.complete();
                        });
                    }
                    else {
                        localStorage.setItem('_login_provider', 'google');
                        observer.next(_this._fetchGoogleUserDetails());
                        observer.complete();
                    }
                    break;
                case "facebook":
                    FB.getLoginStatus(function (response) {
                        if (response.status === "connected") {
                            FB.api('/me?fields=name,email,picture', function (res) {
                                if (!res || res.error) {
                                    observer.error(res.error);
                                }
                                else {
                                    var userDetails = {
                                        name: res.name,
                                        email: res.email,
                                        uid: res.id,
                                        provider: "facebook",
                                        image: res.picture.data.url,
                                        token: response.authResponse.accessToken
                                    };
                                    localStorage.setItem('_login_provider', 'facebook');
                                    observer.next(userDetails);
                                    observer.complete();
                                }
                            });
                        }
                        else {
                            FB.login(function (response) {
                                if (response.status === "connected") {
                                    FB.api('/me?fields=name,email,picture', function (res) {
                                        if (!res || res.error) {
                                            observer.error(res.error);
                                        }
                                        else {
                                            var userDetails = {
                                                name: res.name,
                                                email: res.email,
                                                uid: res.id,
                                                provider: "facebook",
                                                image: res.picture.data.url,
                                                token: response.authResponse.accessToken
                                            };
                                            localStorage.setItem('_login_provider', 'facebook');
                                            observer.next(userDetails);
                                            observer.complete();
                                        }
                                    });
                                }
                            }, { scope: 'email', auth_type: "rerequest" });
                        }
                    });
                    break;
                case "linkedin":
                    IN.User.authorize(function () {
                        IN.API.Raw("/people/~:(id,first-name,last-name,email-address,picture-url)").result(function (res) {
                            var userDetails = { name: res.firstName + " " + res.lastName, email: res.emailAddress, uid: res.id, provider: "linkedIN", image: res.pictureUrl };
                            localStorage.setItem('_login_provider', 'linkedin');
                            observer.next(userDetails);
                            observer.complete();
                        });
                    });
                    break;
            }
        });
    };
    AuthService.prototype.logout = function () {
        var provider = localStorage.getItem("_login_provider");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            switch (provider) {
                case "google":
                    var gElement = document.getElementById("gSignout");
                    if (typeof (gElement) != 'undefined' && gElement != null) {
                        gElement.remove();
                    }
                    var d = document, gSignout = void 0;
                    var ref = d.getElementsByTagName('script')[0];
                    gSignout = d.createElement('script');
                    gSignout.src = "https://accounts.google.com/Logout";
                    gSignout.type = "text/html";
                    gSignout.id = "gSignout";
                    localStorage.removeItem('_login_provider');
                    observer.next(true);
                    observer.complete();
                    ref.parentNode.insertBefore(gSignout, ref);
                    break;
                case "facebook":
                    FB.logout(function (res) {
                        localStorage.removeItem('_login_provider');
                        observer.next(true);
                        observer.complete();
                    });
                    break;
                case "linkedin":
                    IN.User.logout(function () {
                        localStorage.removeItem('_login_provider');
                        observer.next(true);
                        observer.complete();
                    }, {});
                    break;
            }
        });
    };
    AuthService.prototype._fetchGoogleUserDetails = function () {
        var currentUser = this.gauth.currentUser.get();
        var profile = currentUser.getBasicProfile();
        var idToken = currentUser.getAuthResponse().id_token;
        var accessToken = currentUser.getAuthResponse().access_token;
        return {
            token: accessToken,
            idToken: idToken,
            uid: profile.getId(),
            name: profile.getName(),
            email: profile.getEmail(),
            image: profile.getImageUrl(),
            provider: "google"
        };
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../angular2-social-login/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular2_social_login_module__ = __webpack_require__("../../../../angular2-social-login/dist/angular2-social-login.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_social_login_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../angular2-social-login/dist/auth.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map