webpackJsonp([0],{

/***/ "../../../../../src/app/Share/Components/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__window_window_component__ = __webpack_require__("../../../../../src/app/Share/Components/window/window.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShareModule = (function () {
    function ShareModule() {
    }
    return ShareModule;
}());
ShareModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__window_window_component__["a" /* WindowComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__window_window_component__["a" /* WindowComponent */]
        ]
    })
], ShareModule);

//# sourceMappingURL=share.module.js.map

/***/ }),

/***/ "../../../../../src/app/Share/Components/window/window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window {\r\n    width: 100%;\r\n    padding:45px 0 0 0;\r\n    background: #fff;\r\n    border-right: 1px solid #ccc;\r\n    position: relative !important;\r\n    display: block;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .window {\r\n      border-right: none;\r\n    }\r\n}\r\n\r\n.title-window {\r\n  width: 100%;\r\n  height: 44px;\r\n  background: #0f9cb3;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding:0 25px 0 55px;\r\n}\r\n\r\n\r\n.title-window .big-title {\r\n  font-size: 16px;\r\n  margin: 0;\r\n  font-weight: 600;\r\n  padding: 0;\r\n  line-height: 13px;\r\n  line-height: 43px;\r\n}\r\n\r\n.title-window .sub-title {\r\n  font-size: 11px;\r\n  color: #ccc;\r\n}\r\n\r\n.title-window .icon {\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 25px;\r\n    color: #fff;\r\n}\r\n\r\n.body {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.col-left-fixed ul li a .icon {\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 13px;\r\n    color: #fff;\r\n}\r\n\r\n/* button close */\r\n/* button close */\r\n/* button close */\r\n.bt-close {\r\n  background: none;\r\n  position: absolute;\r\n  top:0;\r\n  right:0;\r\n  padding: 3px 6px;\r\n  border: none;\r\n  box-shadow: none;\r\n  transition: all 0.2s ease 0s;\r\n}\r\n\r\n.bt-close:hover {\r\n  background: #ce352c;\r\n}\r\n\r\n.idea {\r\n    position: absolute;\r\n    right: 26px;\r\n    top: 0;\r\n}\r\n\r\n.idea a {\r\n    font-size: 14px;\r\n    background: none;\r\n    position: absolute;\r\n    top: 1px;\r\n    right: 1px;\r\n    width: 20px;\r\n    height: 20px;\r\n    line-height: 23px;\r\n    text-align: center;\r\n    transition: all 0.2s ease 0s;\r\n\r\n}\r\n\r\n.idea a .icon-idea {\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.idea a img {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.idea a img:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.idea a:hover .icon-idea {\r\n  color: #00CDAC;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Share/Components/window/window.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"window\">\r\n    <div class=\"title-window\" [ngStyle]=\"{'background': menuElements?.MauNhat}\">\r\n        <div style=\"display:flex; flex-direction: row;\">\r\n            <div *ngIf=\"idea\">\r\n                <span class=\"icon\"><img src=\"{{icon}}\" aria-hidden=\"true\" style=\"width: 20px;\"></span>\r\n                <div class=\"idea\">\r\n                    <a target=\"blank\" href=\"http://idea.truongkhoa.com/Home/Index?Id={{idIdea}}&Ma={{urlIdea}}\" title=\"Đóng góp ý tưởng\">\r\n                             <img src=\"../../assets/idea.png\">\r\n              </a>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <h3 class=\"big-title\" style=\"cursor: default\">{{name}}</h3>\r\n            </div>\r\n\r\n            <div>\r\n                <button (click)=\"back()\" class=\"bt-close\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Share/Components/window/window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WindowComponent = (function () {
    function WindowComponent(router, location, settingService, r) {
        this.router = router;
        this.location = location;
        this.settingService = settingService;
        this.r = r;
        this.menuElements = this.settingService.getConfig();
    }
    WindowComponent.prototype.ngOnInit = function () {
    };
    WindowComponent.prototype.back = function () {
        console.log(this.url);
        this.router.navigate([this.url]);
    };
    return WindowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowComponent.prototype, "url", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowComponent.prototype, "idea", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowComponent.prototype, "urlIdea", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowComponent.prototype, "idIdea", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WindowComponent.prototype, "width", void 0);
WindowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-window',
        template: __webpack_require__("../../../../../src/app/Share/Components/window/window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Share/Components/window/window.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].Emulated,
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].Default
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__Services_setting_service__["a" /* SettingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object])
], WindowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=window.component.js.map

/***/ }),

/***/ "../../../../../src/app/Share/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* unused harmony export SocialLogin */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.authToken = null;
        this.tokenType = null;
        this.baseUrl = "" + __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].apiUrl;
    }
    // login
    UserService.prototype.login = function (username, password) {
        // tslint:disable-next-line:prefer-const
        var body = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* URLSearchParams */]();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', 'password');
        return this.http.post("http://api.truongkhoa.com/token", body).map(function (response) { return response.json(); });
    };
    // register
    UserService.prototype.register = function (name, email, phone, password) {
        // tslint:disable-next-line:prefer-const
        var body = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* URLSearchParams */]();
        body.set('HoVaTen', name);
        body.set('Email', email);
        body.set('Phone', phone);
        body.set('Password', password);
        return this.http.post(this.baseUrl + "Account/Register", body).map(function (response) { return response.json(); });
    };
    // verify
    UserService.prototype.verifyCode = function (code, phone, idUser) {
        // tslint:disable-next-line:prefer-const
        var body = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* URLSearchParams */]();
        body.set('Code', code);
        body.set('PhoneNumber', phone);
        return this.http.post(this.baseUrl + "Account/XacNhanPhone?IdU=" + idUser, body).map(function (response) { return response.json(); });
    };
    // forgot pass
    UserService.prototype.forgotPassword = function (phone) {
        // tslint:disable-next-line:prefer-const
        var body = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* URLSearchParams */]();
        body.set('Phone', phone);
        return this.http.post(this.baseUrl + "Account/ForgotPassword", body).map(function (response) { return response.json(); });
    };
    // change pass
    UserService.prototype.changePass = function (newPass, code, phone, idU) {
        // tslint:disable-next-line:prefer-const
        var body = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* URLSearchParams */]();
        body.set('PhoneNumber', phone);
        body.set('Code', code);
        body.set('Password', newPass);
        return this.http.post(this.baseUrl + "Account/ForgotPassword?IdU=" + idU, body).map(function (response) { return response.json(); });
    };
    // get & set token/localToken
    UserService.prototype.setTokenType = function (token_type) {
        this.tokenType = token_type;
        localStorage.setItem('token_type', token_type);
    };
    UserService.prototype.setAuthToken = function (token) {
        this.authToken = token;
        localStorage.setItem('token', token);
    };
    UserService.prototype.getLocalToken = function () {
        return localStorage.getItem('token') ? localStorage.getItem('token') : null;
    };
    UserService.prototype.getLocalTokenType = function () {
        return localStorage.getItem('token_type') ? localStorage.getItem('token_type') : null;
    };
    UserService.prototype.setAuth = function (data) {
        localStorage.setItem('auth', JSON.stringify(data));
    };
    UserService.prototype.getAuth = function () {
        return JSON.parse(localStorage.getItem('auth'));
    };
    UserService.prototype.refreshToken = function () {
        return localStorage.setItem('auth', null);
    };
    // social login
    UserService.prototype.checkLoginFacebook = function (_acc) {
        // tslint:disable-next-line:prefer-const
        var body = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* URLSearchParams */]();
        body.set('id', _acc.id);
        body.set('email', _acc.email);
        body.set('token', _acc.token);
        return this.http.post(this.baseUrl + "Account/CheckFacebookLogin", body).map(function (response) { return response.json(); });
    };
    // get set localStorage social login
    UserService.prototype.set_UserInfoFB = function (data) {
        localStorage.setItem('_fbData', JSON.stringify(data));
    };
    UserService.prototype.get_UserInfoFB = function () {
        return localStorage.getItem('_fbData') ? localStorage.getItem('_fbData') : null;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var SocialLogin = (function () {
    function SocialLogin(id, email, token) {
        this.id = id;
        this.email = email;
        this.token = token;
    }
    return SocialLogin;
}());

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://api.truongkhoa.com/api/'
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "../../../../angular2-infinite-scroll/angular2-infinite-scroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var infinite_scroll_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/infinite-scroll.js");
var position_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/position-resolver.js");
var axis_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/axis-resolver.js");
var infinite_scroll_2 = __webpack_require__("../../../../angular2-infinite-scroll/src/infinite-scroll.js");
exports.InfiniteScroll = infinite_scroll_2.InfiniteScroll;
var position_resolver_2 = __webpack_require__("../../../../angular2-infinite-scroll/src/position-resolver.js");
exports.PositionResolver = position_resolver_2.PositionResolver;
exports.PositionResolverFactory = position_resolver_2.PositionResolverFactory;
var axis_resolver_2 = __webpack_require__("../../../../angular2-infinite-scroll/src/axis-resolver.js");
exports.AxisResolver = axis_resolver_2.AxisResolver;
exports.AxisResolverFactory = axis_resolver_2.AxisResolverFactory;
var index_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/index.js");
exports.InfiniteScrollModule = index_1.InfiniteScrollModule;
var scroll_register_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/scroll-register.js");
exports.ScrollRegister = scroll_register_1.ScrollRegister;
var scroll_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/scroll-resolver.js");
exports.ScrollResolver = scroll_resolver_1.ScrollResolver;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [infinite_scroll_1.InfiniteScroll, axis_resolver_1.AxisResolver, position_resolver_1.PositionResolver]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBK0IsdUJBQXVCLENBQUMsQ0FBQTtBQUN2RCxrQ0FBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCw4QkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQUluRCxnQ0FBK0IsdUJBQXVCLENBQUM7QUFBOUMsMERBQThDO0FBQ3ZELGtDQUEwRCx5QkFBeUIsQ0FBQztBQUEzRSxnRUFBZ0I7QUFBRSw4RUFBeUQ7QUFDcEYsOEJBQWtELHFCQUFxQixDQUFDO0FBQS9ELG9EQUFZO0FBQUUsa0VBQWlEO0FBQ3hFLHNCQUFxQyxhQUFhLENBQUM7QUFBMUMsNERBQTBDO0FBQ25ELGdDQUErQix1QkFBdUIsQ0FBQztBQUE5QywwREFBOEM7QUFDdkQsZ0NBQStCLHVCQUF1QixDQUFDO0FBQTlDLDBEQUE4QztBQUd2RDtrQkFBZTtJQUNkLFVBQVUsRUFBRSxDQUFFLGdDQUFjLEVBQUUsNEJBQVksRUFBRSxvQ0FBZ0IsQ0FBRTtDQUM5RCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuL3NyYy9pbmZpbml0ZS1zY3JvbGwnO1xuaW1wb3J0IHsgUG9zaXRpb25SZXNvbHZlciB9IGZyb20gJy4vc3JjL3Bvc2l0aW9uLXJlc29sdmVyJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlciB9IGZyb20gJy4vc3JjL2F4aXMtcmVzb2x2ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVnaXN0ZXIgfSBmcm9tICcuL3NyYy9zY3JvbGwtcmVnaXN0ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVzb2x2ZXIgfSBmcm9tICcuL3NyYy9zY3JvbGwtcmVzb2x2ZXInO1xuXG5leHBvcnQgeyBJbmZpbml0ZVNjcm9sbCB9IGZyb20gJy4vc3JjL2luZmluaXRlLXNjcm9sbCc7XG5leHBvcnQgeyBQb3NpdGlvblJlc29sdmVyLCBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vc3JjL3Bvc2l0aW9uLXJlc29sdmVyJztcbmV4cG9ydCB7IEF4aXNSZXNvbHZlciwgQXhpc1Jlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vc3JjL2F4aXMtcmVzb2x2ZXInO1xuZXhwb3J0IHsgSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICcuL3NyYy9pbmRleCc7XG5leHBvcnQgeyBTY3JvbGxSZWdpc3RlciB9IGZyb20gJy4vc3JjL3Njcm9sbC1yZWdpc3Rlcic7XG5leHBvcnQgeyBTY3JvbGxSZXNvbHZlciB9IGZyb20gJy4vc3JjL3Njcm9sbC1yZXNvbHZlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9tb2RlbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRpcmVjdGl2ZXM6IFsgSW5maW5pdGVTY3JvbGwsIEF4aXNSZXNvbHZlciwgUG9zaXRpb25SZXNvbHZlciBdXG59XG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular2-infinite-scroll/src/axis-resolver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AxisResolverFactory = (function () {
    function AxisResolverFactory() {
    }
    AxisResolverFactory.prototype.create = function (vertical) {
        if (vertical === void 0) { vertical = true; }
        return new AxisResolver(vertical);
    };
    AxisResolverFactory.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AxisResolverFactory.ctorParameters = function () { return []; };
    return AxisResolverFactory;
}());
exports.AxisResolverFactory = AxisResolverFactory;
var AxisResolver = (function () {
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
    }
    AxisResolver.prototype.clientHeightKey = function () { return this.vertical ? 'clientHeight' : 'clientWidth'; };
    AxisResolver.prototype.offsetHeightKey = function () { return this.vertical ? 'offsetHeight' : 'offsetWidth'; };
    AxisResolver.prototype.scrollHeightKey = function () { return this.vertical ? 'scrollHeight' : 'scrollWidth'; };
    AxisResolver.prototype.pageYOffsetKey = function () { return this.vertical ? 'pageYOffset' : 'pageXOffset'; };
    AxisResolver.prototype.offsetTopKey = function () { return this.vertical ? 'offsetTop' : 'offsetLeft'; };
    AxisResolver.prototype.scrollTopKey = function () { return this.vertical ? 'scrollTop' : 'scrollLeft'; };
    AxisResolver.prototype.topKey = function () { return this.vertical ? 'top' : 'left'; };
    return AxisResolver;
}());
exports.AxisResolver = AxisResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF4aXMtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUduRDtJQUNFO0lBQWdCLENBQUM7SUFFakIsb0NBQU0sR0FBTixVQUFPLFFBQXdCO1FBQXhCLHdCQUF3QixHQUF4QixlQUF3QjtRQUM3QixNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNJLDhCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUU7S0FDbkIsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLGtDQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDJCQUFtQixzQkFZL0IsQ0FBQTtBQUVEO0lBQ0Usc0JBQW9CLFFBQXdCO1FBQWhDLHdCQUFnQyxHQUFoQyxlQUFnQztRQUF4QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtJQUM1QyxDQUFDO0lBQ0Qsc0NBQWUsR0FBZixjQUFvQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM1RSxzQ0FBZSxHQUFmLGNBQW9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzVFLHNDQUFlLEdBQWYsY0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDNUUscUNBQWMsR0FBZCxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxRSxtQ0FBWSxHQUFaLGNBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLG1DQUFZLEdBQVosY0FBaUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDckUsNkJBQU0sR0FBTixjQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JELG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxvQkFBWSxlQVV4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIEF4aXNSZXNvbHZlckZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGNyZWF0ZSh2ZXJ0aWNhbDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICByZXR1cm4gbmV3IEF4aXNSZXNvbHZlcih2ZXJ0aWNhbCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5leHBvcnQgY2xhc3MgQXhpc1Jlc29sdmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2ZXJ0aWNhbDogYm9vbGVhbiA9IHRydWUpIHtcbiAgfVxuICBjbGllbnRIZWlnaHRLZXkoKSB7IHJldHVybiB0aGlzLnZlcnRpY2FsID8gJ2NsaWVudEhlaWdodCcgOiAnY2xpZW50V2lkdGgnOyB9XG4gIG9mZnNldEhlaWdodEtleSgpIHsgcmV0dXJuIHRoaXMudmVydGljYWwgPyAnb2Zmc2V0SGVpZ2h0JyA6ICdvZmZzZXRXaWR0aCc7IH1cbiAgc2Nyb2xsSGVpZ2h0S2V5KCkgeyByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdzY3JvbGxIZWlnaHQnIDogJ3Njcm9sbFdpZHRoJzsgfVxuICBwYWdlWU9mZnNldEtleSgpIHsgcmV0dXJuIHRoaXMudmVydGljYWwgPyAncGFnZVlPZmZzZXQnIDogJ3BhZ2VYT2Zmc2V0JzsgfVxuICBvZmZzZXRUb3BLZXkoKSB7IHJldHVybiB0aGlzLnZlcnRpY2FsID8gJ29mZnNldFRvcCcgOiAnb2Zmc2V0TGVmdCc7IH1cbiAgc2Nyb2xsVG9wS2V5KCkgeyByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnOyB9XG4gIHRvcEtleSgpIHsgcmV0dXJuIHRoaXMudmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JzsgfVxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular2-infinite-scroll/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var infinite_scroll_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/infinite-scroll.js");
var axis_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/axis-resolver.js");
var position_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/position-resolver.js");
var scroll_register_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/scroll-register.js");
var scroll_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/scroll-resolver.js");
var InfiniteScrollModule = (function () {
    function InfiniteScrollModule() {
    }
    InfiniteScrollModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [infinite_scroll_1.InfiniteScroll],
                    exports: [infinite_scroll_1.InfiniteScroll],
                    providers: [
                        axis_resolver_1.AxisResolverFactory,
                        position_resolver_1.PositionResolverFactory,
                        scroll_register_1.ScrollRegister,
                        scroll_resolver_1.ScrollResolver
                    ]
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollModule.ctorParameters = function () { return []; };
    return InfiniteScrollModule;
}());
exports.InfiniteScrollModule = InfiniteScrollModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDLGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELDhCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzlELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBR25EO0lBQUE7SUFnQkEsQ0FBQztJQWhCMEMsK0JBQVUsR0FBMEI7UUFDL0UsRUFBRSxJQUFJLEVBQUUsZUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO29CQUN2QixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO29CQUN6QixTQUFTLEVBQUU7d0JBQ1QsbUNBQW1CO3dCQUNuQiwyQ0FBdUI7d0JBQ3ZCLGdDQUFjO3dCQUNkLGdDQUFjO3FCQUNmO2lCQUNGLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCxtQ0FBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSw0QkFBb0IsdUJBZ0JoQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGwgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbCc7XG5pbXBvcnQgeyBBeGlzUmVzb2x2ZXJGYWN0b3J5IH0gZnJvbSAnLi9heGlzLXJlc29sdmVyJztcbmltcG9ydCB7IFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbi1yZXNvbHZlcic7XG5pbXBvcnQgeyBTY3JvbGxSZWdpc3RlciB9IGZyb20gJy4vc2Nyb2xsLXJlZ2lzdGVyJztcbmltcG9ydCB7IFNjcm9sbFJlc29sdmVyIH0gZnJvbSAnLi9zY3JvbGwtcmVzb2x2ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbE1vZHVsZSB7IHN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbSW5maW5pdGVTY3JvbGxdLFxuICBleHBvcnRzOiBbSW5maW5pdGVTY3JvbGxdLFxuICBwcm92aWRlcnM6IFtcbiAgICBBeGlzUmVzb2x2ZXJGYWN0b3J5LFxuICAgIFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5LFxuICAgIFNjcm9sbFJlZ2lzdGVyLFxuICAgIFNjcm9sbFJlc29sdmVyXG4gIF1cbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular2-infinite-scroll/src/infinite-scroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var position_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/position-resolver.js");
var scroll_register_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/scroll-register.js");
var scroll_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/scroll-resolver.js");
var InfiniteScroll = (function () {
    function InfiniteScroll(element, zone, positionResolverFactory, scrollRegister, scrollerResolver) {
        this.element = element;
        this.zone = zone;
        this.positionResolverFactory = positionResolverFactory;
        this.scrollRegister = scrollRegister;
        this.scrollerResolver = scrollerResolver;
        this.scrolled = new core_1.EventEmitter();
        this.scrolledUp = new core_1.EventEmitter();
        this._distanceDown = 2;
        this._distanceUp = 1.5;
        this._throttle = 300;
        this._disabled = false;
        this._container = null;
        this.scrollWindow = true;
        this._immediate = false;
        this._horizontal = false;
        this._alwaysCallback = false;
        this.throttleType = 'throttle';
    }
    Object.defineProperty(InfiniteScroll.prototype, "debounce", {
        set: function (value) {
            this.throttleType = value === '' || !!value ? 'debounce' : 'throttle';
        },
        enumerable: true,
        configurable: true
    });
    InfiniteScroll.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof window !== 'undefined') {
            var containerElement = this.resolveContainerElement();
            var positionResolver_1 = this.positionResolverFactory.create({
                windowElement: containerElement,
                horizontal: this._horizontal
            });
            var options = {
                container: positionResolver_1.container,
                throttleType: this.throttleType,
                throttleDuration: this._throttle,
                filterBefore: function () { return !_this._disabled; },
                mergeMap: function () { return positionResolver_1.calculatePoints(_this.element); },
                scrollHandler: function (container) { return _this.handleOnScroll(container); }
            };
            this.disposeScroller = this.scrollRegister.attachEvent(options);
        }
    };
    InfiniteScroll.prototype.handleOnScroll = function (container) {
        var scrollResolverConfig = {
            distance: {
                down: this._distanceDown,
                up: this._distanceUp
            }
        };
        var scrollStats = this.scrollerResolver.getScrollStats(container, scrollResolverConfig);
        if (this.shouldTriggerEvents(scrollStats.shouldScroll)) {
            var infiniteScrollEvent = {
                currentScrollPosition: container.scrolledUntilNow
            };
            if (scrollStats.isScrollingDown) {
                this.onScrollDown(infiniteScrollEvent);
            }
            else {
                this.onScrollUp(infiniteScrollEvent);
            }
        }
    };
    InfiniteScroll.prototype.shouldTriggerEvents = function (shouldScroll) {
        return (this._alwaysCallback || shouldScroll) && !this._disabled;
    };
    InfiniteScroll.prototype.ngOnDestroy = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    InfiniteScroll.prototype.onScrollDown = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolled.emit(data); });
    };
    InfiniteScroll.prototype.onScrollUp = function (data) {
        var _this = this;
        if (data === void 0) { data = { currentScrollPosition: 0 }; }
        this.zone.run(function () { return _this.scrolledUp.emit(data); });
    };
    InfiniteScroll.prototype.resolveContainerElement = function () {
        if (this._container) {
            return typeof (this._container) === 'string' ? window.document.querySelector(this._container) : this._container;
        }
        else {
            return this.scrollWindow ? window : this.element;
        }
    };
    InfiniteScroll.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[infinite-scroll]'
                },] },
    ];
    /** @nocollapse */
    InfiniteScroll.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.NgZone, },
        { type: position_resolver_1.PositionResolverFactory, },
        { type: scroll_register_1.ScrollRegister, },
        { type: scroll_resolver_1.ScrollResolver, },
    ]; };
    InfiniteScroll.propDecorators = {
        'scrolled': [{ type: core_1.Output },],
        'scrolledUp': [{ type: core_1.Output },],
        '_distanceDown': [{ type: core_1.Input, args: ['infiniteScrollDistance',] },],
        '_distanceUp': [{ type: core_1.Input, args: ['infiniteScrollUpDistance',] },],
        '_throttle': [{ type: core_1.Input, args: ['infiniteScrollThrottle',] },],
        '_disabled': [{ type: core_1.Input, args: ['infiniteScrollDisabled',] },],
        '_container': [{ type: core_1.Input, args: ['infiniteScrollContainer',] },],
        'scrollWindow': [{ type: core_1.Input, args: ['scrollWindow',] },],
        '_immediate': [{ type: core_1.Input, args: ['immediateCheck',] },],
        '_horizontal': [{ type: core_1.Input, args: ['horizontal',] },],
        '_alwaysCallback': [{ type: core_1.Input, args: ['alwaysCallback',] },],
        'debounce': [{ type: core_1.Input },],
    };
    return InfiniteScroll;
}());
exports.InfiniteScroll = InfiniteScroll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFJTyxlQUFlLENBQUMsQ0FBQTtBQUN2QixrQ0FBd0MscUJBQXFCLENBQUMsQ0FBQTtBQUM5RCxnQ0FBcUQsbUJBQW1CLENBQUMsQ0FBQTtBQUN6RSxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQUtuRDtJQXFCRSx3QkFDVSxPQUFtQixFQUNuQixJQUFZLEVBQ1osdUJBQWdELEVBQ2hELGNBQThCLEVBQzlCLGdCQUFnQztRQUpoQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO1FBekJ6QyxhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUF1QixDQUFDO1FBQ25ELGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQXVCLENBQUM7UUFFckQsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDMUIsZ0JBQVcsR0FBVyxHQUFHLENBQUM7UUFDMUIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQU0xQixpQkFBWSxHQUFXLFVBQVUsQ0FBQztJQVN2QyxDQUFDO0lBYkosc0JBQUksb0NBQVE7YUFBWixVQUFhLEtBQXVCO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFhRCxpQ0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUN4RCxJQUFNLGtCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7Z0JBQzNELGFBQWEsRUFBRSxnQkFBZ0I7Z0JBQy9CLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVzthQUM3QixDQUFDLENBQUM7WUFDSCxJQUFNLE9BQU8sR0FBeUI7Z0JBQ3BDLFNBQVMsRUFBRSxrQkFBZ0IsQ0FBQyxTQUFTO2dCQUNyQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7Z0JBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNoQyxZQUFZLEVBQUUsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBZixDQUFlO2dCQUNuQyxRQUFRLEVBQUUsY0FBTSxPQUFBLGtCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQTlDLENBQThDO2dCQUM5RCxhQUFhLEVBQUUsVUFBQyxTQUF3QixJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBOUIsQ0FBOEI7YUFDNUUsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsU0FBd0I7UUFDckMsSUFBTSxvQkFBb0IsR0FBRztZQUMzQixRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUN4QixFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDckI7U0FDRixDQUFDO1FBQ0YsSUFBTSxXQUFXLEdBQWdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDdkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBTSxtQkFBbUIsR0FBd0I7Z0JBQy9DLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxnQkFBZ0I7YUFDbEQsQ0FBQztZQUNGLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0IsWUFBcUI7UUFDdkMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbkUsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLElBQXdEO1FBQXJFLGlCQUVDO1FBRlksb0JBQXdELEdBQXhELFNBQThCLHFCQUFxQixFQUFFLENBQUMsRUFBRTtRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQXdEO1FBQW5FLGlCQUVDO1FBRlUsb0JBQXdELEdBQXhELFNBQThCLHFCQUFxQixFQUFFLENBQUMsRUFBRTtRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8sZ0RBQXVCLEdBQS9CO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxHQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBQ0kseUJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUIsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDZCQUFjLEdBQW1FLGNBQU0sT0FBQTtRQUM5RixFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO1FBQ3BCLEVBQUMsSUFBSSxFQUFFLGFBQU0sR0FBRztRQUNoQixFQUFDLElBQUksRUFBRSwyQ0FBdUIsR0FBRztRQUNqQyxFQUFDLElBQUksRUFBRSxnQ0FBYyxHQUFHO1FBQ3hCLEVBQUMsSUFBSSxFQUFFLGdDQUFjLEdBQUc7S0FDdkIsRUFONkYsQ0FNN0YsQ0FBQztJQUNLLDZCQUFjLEdBQTJDO1FBQ2hFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQy9CLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQU0sRUFBRSxFQUFFO1FBQ2pDLGVBQWUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRyxFQUFFLEVBQUU7UUFDdkUsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLDBCQUEwQixFQUFHLEVBQUUsRUFBRTtRQUN2RSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsd0JBQXdCLEVBQUcsRUFBRSxFQUFFO1FBQ25FLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRyxFQUFFLEVBQUU7UUFDbkUsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLHlCQUF5QixFQUFHLEVBQUUsRUFBRTtRQUNyRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFHLEVBQUUsRUFBRTtRQUM1RCxZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUcsRUFBRSxFQUFFO1FBQzVELGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUcsRUFBRSxFQUFFO1FBQ3pELGlCQUFpQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFHLEVBQUUsRUFBRTtRQUNqRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtLQUM3QixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBeEhELElBd0hDO0FBeEhZLHNCQUFjLGlCQXdIMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluZmluaXRlU2Nyb2xsRXZlbnQsIFNjcm9sbFN0YXRzLCBQb3NpdGlvblN0YXRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLCBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb24tcmVzb2x2ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVnaXN0ZXIsIFNjcm9sbFJlZ2lzdGVyQ29uZmlnIH0gZnJvbSAnLi9zY3JvbGwtcmVnaXN0ZXInO1xuaW1wb3J0IHsgU2Nyb2xsUmVzb2x2ZXIgfSBmcm9tICcuL3Njcm9sbC1yZXNvbHZlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1J4JztcblxuXG5cbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgIHNjcm9sbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbEV2ZW50PigpO1xuICAgc2Nyb2xsZWRVcCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxFdmVudD4oKTtcblxuICAgX2Rpc3RhbmNlRG93bjogbnVtYmVyID0gMjtcbiAgIF9kaXN0YW5jZVVwOiBudW1iZXIgPSAxLjU7XG4gICBfdGhyb3R0bGU6IG51bWJlciA9IDMwMDtcbiAgIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgX2NvbnRhaW5lcjogYW55ID0gbnVsbDtcbiAgIHNjcm9sbFdpbmRvdzogYm9vbGVhbiA9IHRydWU7XG4gICBfaW1tZWRpYXRlOiBib29sZWFuID0gZmFsc2U7XG4gICBfaG9yaXpvbnRhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgX2Fsd2F5c0NhbGxiYWNrOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICBzZXQgZGVib3VuY2UodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRocm90dGxlVHlwZSA9IHZhbHVlID09PSAnJyB8fCAhIXZhbHVlID8gJ2RlYm91bmNlJyA6ICd0aHJvdHRsZSc7XG4gIH1cblxuICBwcml2YXRlIHRocm90dGxlVHlwZTogc3RyaW5nID0gJ3Rocm90dGxlJztcbiAgcHJpdmF0ZSBkaXNwb3NlU2Nyb2xsZXI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBwb3NpdGlvblJlc29sdmVyRmFjdG9yeTogUG9zaXRpb25SZXNvbHZlckZhY3RvcnksXG4gICAgcHJpdmF0ZSBzY3JvbGxSZWdpc3RlcjogU2Nyb2xsUmVnaXN0ZXIsXG4gICAgcHJpdmF0ZSBzY3JvbGxlclJlc29sdmVyOiBTY3JvbGxSZXNvbHZlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gdGhpcy5yZXNvbHZlQ29udGFpbmVyRWxlbWVudCgpO1xuICAgICAgY29uc3QgcG9zaXRpb25SZXNvbHZlciA9IHRoaXMucG9zaXRpb25SZXNvbHZlckZhY3RvcnkuY3JlYXRlKHtcbiAgICAgICAgd2luZG93RWxlbWVudDogY29udGFpbmVyRWxlbWVudCxcbiAgICAgICAgaG9yaXpvbnRhbDogdGhpcy5faG9yaXpvbnRhbFxuICAgICAgfSk7XG4gICAgICBjb25zdCBvcHRpb25zOiBTY3JvbGxSZWdpc3RlckNvbmZpZyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBwb3NpdGlvblJlc29sdmVyLmNvbnRhaW5lcixcbiAgICAgICAgdGhyb3R0bGVUeXBlOiB0aGlzLnRocm90dGxlVHlwZSxcbiAgICAgICAgdGhyb3R0bGVEdXJhdGlvbjogdGhpcy5fdGhyb3R0bGUsXG4gICAgICAgIGZpbHRlckJlZm9yZTogKCkgPT4gIXRoaXMuX2Rpc2FibGVkLFxuICAgICAgICBtZXJnZU1hcDogKCkgPT4gcG9zaXRpb25SZXNvbHZlci5jYWxjdWxhdGVQb2ludHModGhpcy5lbGVtZW50KSxcbiAgICAgICAgc2Nyb2xsSGFuZGxlcjogKGNvbnRhaW5lcjogUG9zaXRpb25TdGF0cykgPT4gdGhpcy5oYW5kbGVPblNjcm9sbChjb250YWluZXIpXG4gICAgICB9O1xuICAgICAgdGhpcy5kaXNwb3NlU2Nyb2xsZXIgPSB0aGlzLnNjcm9sbFJlZ2lzdGVyLmF0dGFjaEV2ZW50KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9uU2Nyb2xsKGNvbnRhaW5lcjogUG9zaXRpb25TdGF0cykge1xuICAgIGNvbnN0IHNjcm9sbFJlc29sdmVyQ29uZmlnID0ge1xuICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgZG93bjogdGhpcy5fZGlzdGFuY2VEb3duLFxuICAgICAgICB1cDogdGhpcy5fZGlzdGFuY2VVcFxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2Nyb2xsU3RhdHM6IFNjcm9sbFN0YXRzID0gdGhpcy5zY3JvbGxlclJlc29sdmVyLmdldFNjcm9sbFN0YXRzKGNvbnRhaW5lciwgc2Nyb2xsUmVzb2x2ZXJDb25maWcpO1xuICAgIGlmICh0aGlzLnNob3VsZFRyaWdnZXJFdmVudHMoc2Nyb2xsU3RhdHMuc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgY29uc3QgaW5maW5pdGVTY3JvbGxFdmVudDogSW5maW5pdGVTY3JvbGxFdmVudCA9IHtcbiAgICAgICAgY3VycmVudFNjcm9sbFBvc2l0aW9uOiBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vd1xuICAgICAgfTtcbiAgICAgIGlmIChzY3JvbGxTdGF0cy5pc1Njcm9sbGluZ0Rvd24pIHtcbiAgICAgICAgdGhpcy5vblNjcm9sbERvd24oaW5maW5pdGVTY3JvbGxFdmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsVXAoaW5maW5pdGVTY3JvbGxFdmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkVHJpZ2dlckV2ZW50cyhzaG91bGRTY3JvbGw6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gKHRoaXMuX2Fsd2F5c0NhbGxiYWNrIHx8IHNob3VsZFNjcm9sbCkgJiYgIXRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3kgKCkge1xuICAgIGlmICh0aGlzLmRpc3Bvc2VTY3JvbGxlcikge1xuICAgICAgdGhpcy5kaXNwb3NlU2Nyb2xsZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbERvd24oZGF0YTogSW5maW5pdGVTY3JvbGxFdmVudCA9IHsgY3VycmVudFNjcm9sbFBvc2l0aW9uOiAwIH0pIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuc2Nyb2xsZWQuZW1pdChkYXRhKSk7XG4gIH1cblxuICBvblNjcm9sbFVwKGRhdGE6IEluZmluaXRlU2Nyb2xsRXZlbnQgPSB7IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjogMCB9KSB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnNjcm9sbGVkVXAuZW1pdChkYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDb250YWluZXJFbGVtZW50KCk6IGFueSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHR5cGVvZih0aGlzLl9jb250YWluZXIpID09PSAnc3RyaW5nJyA/ICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb250YWluZXIpIDogdGhpcy5fY29udGFpbmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxXaW5kb3cgPyB3aW5kb3cgOiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW2luZmluaXRlLXNjcm9sbF0nXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogTmdab25lLCB9LFxue3R5cGU6IFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5LCB9LFxue3R5cGU6IFNjcm9sbFJlZ2lzdGVyLCB9LFxue3R5cGU6IFNjcm9sbFJlc29sdmVyLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nc2Nyb2xsZWQnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ3Njcm9sbGVkVXAnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ19kaXN0YW5jZURvd24nOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbERpc3RhbmNlJywgXSB9LF0sXG4nX2Rpc3RhbmNlVXAnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbFVwRGlzdGFuY2UnLCBdIH0sXSxcbidfdGhyb3R0bGUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbFRocm90dGxlJywgXSB9LF0sXG4nX2Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaW5maW5pdGVTY3JvbGxEaXNhYmxlZCcsIF0gfSxdLFxuJ19jb250YWluZXInOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbmZpbml0ZVNjcm9sbENvbnRhaW5lcicsIF0gfSxdLFxuJ3Njcm9sbFdpbmRvdyc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3Njcm9sbFdpbmRvdycsIF0gfSxdLFxuJ19pbW1lZGlhdGUnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydpbW1lZGlhdGVDaGVjaycsIF0gfSxdLFxuJ19ob3Jpem9udGFsJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaG9yaXpvbnRhbCcsIF0gfSxdLFxuJ19hbHdheXNDYWxsYmFjayc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2Fsd2F5c0NhbGxiYWNrJywgXSB9LF0sXG4nZGVib3VuY2UnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular2-infinite-scroll/src/position-resolver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var axis_resolver_1 = __webpack_require__("../../../../angular2-infinite-scroll/src/axis-resolver.js");
var PositionResolverFactory = (function () {
    function PositionResolverFactory(axisResolver) {
        this.axisResolver = axisResolver;
    }
    PositionResolverFactory.prototype.create = function (options) {
        return new PositionResolver(this.axisResolver.create(!options.horizontal), options);
    };
    PositionResolverFactory.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PositionResolverFactory.ctorParameters = function () { return [
        { type: axis_resolver_1.AxisResolverFactory, },
    ]; };
    return PositionResolverFactory;
}());
exports.PositionResolverFactory = PositionResolverFactory;
var PositionResolver = (function () {
    function PositionResolver(axis, options) {
        this.axis = axis;
        this.options = options;
        this.resolveContainer(this.options.windowElement);
        this.defineContainer(this.options.windowElement);
    }
    PositionResolver.prototype.defineContainer = function (windowElement) {
        if (this.resolveContainer(windowElement) || !windowElement.nativeElement) {
            this.container = windowElement;
        }
        else {
            this.container = windowElement.nativeElement;
        }
        return this.container;
    };
    PositionResolver.prototype.resolveContainer = function (windowElement) {
        var isContainerWindow = Object.prototype.toString.call(windowElement).includes('Window');
        this.isContainerWindow = isContainerWindow;
        return isContainerWindow;
    };
    PositionResolver.prototype.getDocumentElement = function () {
        return this.isContainerWindow
            ? this.options.windowElement.document.documentElement
            : null;
    };
    PositionResolver.prototype.calculatePoints = function (element) {
        return this.isContainerWindow
            ? this.calculatePointsForWindow(element)
            : this.calculatePointsForElement(element);
    };
    PositionResolver.prototype.calculatePointsForWindow = function (element) {
        // container's height
        var height = this.height(this.container);
        // scrolled until now / current y point
        var scrolledUntilNow = height + this.pageYOffset(this.getDocumentElement());
        // total height / most bottom y point
        var totalToScroll = this.offsetTop(element.nativeElement) + this.height(element.nativeElement);
        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
    };
    PositionResolver.prototype.calculatePointsForElement = function (element) {
        var scrollTop = this.axis.scrollTopKey();
        var scrollHeight = this.axis.scrollHeightKey();
        var container = this.container;
        var height = this.height(container);
        // perhaps use this.container.offsetTop instead of 'scrollTop'
        var scrolledUntilNow = container[scrollTop];
        var containerTopOffset = 0;
        var offsetTop = this.offsetTop(container);
        if (offsetTop !== void 0) {
            containerTopOffset = offsetTop;
        }
        var totalToScroll = container[scrollHeight];
        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
    };
    PositionResolver.prototype.height = function (elem) {
        var offsetHeight = this.axis.offsetHeightKey();
        var clientHeight = this.axis.clientHeightKey();
        // elem = elem.nativeElement;
        if (isNaN(elem[offsetHeight])) {
            return this.getDocumentElement()[clientHeight];
        }
        else {
            return elem[offsetHeight];
        }
    };
    PositionResolver.prototype.offsetTop = function (elem) {
        var top = this.axis.topKey();
        // elem = elem.nativeElement;
        if (!elem.getBoundingClientRect) {
            return;
        }
        return elem.getBoundingClientRect()[top] + this.pageYOffset(elem);
    };
    PositionResolver.prototype.pageYOffset = function (elem) {
        var pageYOffset = this.axis.pageYOffsetKey();
        var scrollTop = this.axis.scrollTopKey();
        var offsetTop = this.axis.offsetTopKey();
        // elem = elem.nativeElement;
        if (isNaN(window[pageYOffset])) {
            return this.getDocumentElement()[scrollTop];
        }
        else if (elem.ownerDocument) {
            return elem.ownerDocument.defaultView[pageYOffset];
        }
        else {
            return elem[offsetTop];
        }
    };
    return PositionResolver;
}());
exports.PositionResolver = PositionResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3NpdGlvbi1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELDhCQUFrRCxpQkFBaUIsQ0FBQyxDQUFBO0FBSXBFO0lBRUUsaUNBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUNyRCxDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFRLE9BQXlCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDSSxrQ0FBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO0tBQ25CLENBQUM7SUFDRixrQkFBa0I7SUFDWCxzQ0FBYyxHQUFtRSxjQUFNLE9BQUE7UUFDOUYsRUFBQyxJQUFJLEVBQUUsbUNBQW1CLEdBQUc7S0FDNUIsRUFGNkYsQ0FFN0YsQ0FBQztJQUNGLDhCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSwrQkFBdUIsMEJBZW5DLENBQUE7QUFFRDtJQUtFLDBCQUFxQixJQUFrQixFQUFVLE9BQXlCO1FBQXJELFNBQUksR0FBSixJQUFJLENBQWM7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsYUFBMkI7UUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDakMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQy9DLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLGFBQTJCO1FBQzFDLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFFRCw2Q0FBa0IsR0FBbEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtjQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZTtjQUNuRCxJQUFJLENBQUM7SUFDWCxDQUFDO0lBRUQsMENBQWUsR0FBZixVQUFpQixPQUFtQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtjQUN6QixJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDO2NBQ3RDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbURBQXdCLEdBQXhCLFVBQTBCLE9BQW1CO1FBQzNDLHFCQUFxQjtRQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyx1Q0FBdUM7UUFDdkMsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLHFDQUFxQztRQUNyQyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRyxNQUFNLENBQUMsRUFBRSxjQUFNLEVBQUUsa0NBQWdCLEVBQUUsNEJBQWEsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRCxvREFBeUIsR0FBekIsVUFBMkIsT0FBbUI7UUFDNUMsSUFBSSxTQUFTLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9DLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFakMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0Qyw4REFBOEQ7UUFDOUQsSUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxFQUFFLGNBQU0sRUFBRSxrQ0FBZ0IsRUFBRSw0QkFBYSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVPLGlDQUFNLEdBQWQsVUFBZ0IsSUFBUztRQUN2QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQy9DLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFL0MsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7SUFFTyxvQ0FBUyxHQUFqQixVQUFtQixJQUFTO1FBQzFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFN0IsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBYSxJQUFTO1FBQ3BCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsSUFBSSxTQUFTLEdBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxJQUFJLFNBQVMsR0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTNDLDZCQUE2QjtRQUM3QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBcEdELElBb0dDO0FBcEdZLHdCQUFnQixtQkFvRzVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBeGlzUmVzb2x2ZXIsIEF4aXNSZXNvbHZlckZhY3RvcnkgfSBmcm9tICcuL2F4aXMtcmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyUmVmLCBQb3NpdGlvbkVsZW1lbnRzLCBQb3NpdGlvblN0YXRzIH0gZnJvbSAnLi9tb2RlbHMnO1xuXG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBheGlzUmVzb2x2ZXI6IEF4aXNSZXNvbHZlckZhY3RvcnkpIHtcbiAgfVxuXG4gIGNyZWF0ZSAob3B0aW9uczogUG9zaXRpb25FbGVtZW50cykge1xuICAgIHJldHVybiBuZXcgUG9zaXRpb25SZXNvbHZlcih0aGlzLmF4aXNSZXNvbHZlci5jcmVhdGUoIW9wdGlvbnMuaG9yaXpvbnRhbCksIG9wdGlvbnMpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEF4aXNSZXNvbHZlckZhY3RvcnksIH0sXG5dO1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25SZXNvbHZlciB7XG4gIHByaXZhdGUgZG9jdW1lbnRFbGVtZW50OiBDb250YWluZXJSZWY7XG4gIHByaXZhdGUgaXNDb250YWluZXJXaW5kb3c6IGJvb2xlYW47XG4gIHB1YmxpYyBjb250YWluZXI6IENvbnRhaW5lclJlZjtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBheGlzOiBBeGlzUmVzb2x2ZXIsIHByaXZhdGUgb3B0aW9uczogUG9zaXRpb25FbGVtZW50cykge1xuICAgIHRoaXMucmVzb2x2ZUNvbnRhaW5lcih0aGlzLm9wdGlvbnMud2luZG93RWxlbWVudCk7XG4gICAgdGhpcy5kZWZpbmVDb250YWluZXIodGhpcy5vcHRpb25zLndpbmRvd0VsZW1lbnQpO1xuICB9XG5cbiAgZGVmaW5lQ29udGFpbmVyKHdpbmRvd0VsZW1lbnQ6IENvbnRhaW5lclJlZikge1xuICAgIGlmICh0aGlzLnJlc29sdmVDb250YWluZXIod2luZG93RWxlbWVudCkgfHwgIXdpbmRvd0VsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXIgPSB3aW5kb3dFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHdpbmRvd0VsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG5cbiAgcmVzb2x2ZUNvbnRhaW5lcih3aW5kb3dFbGVtZW50OiBDb250YWluZXJSZWYpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0NvbnRhaW5lcldpbmRvdyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3dFbGVtZW50KS5pbmNsdWRlcygnV2luZG93Jyk7XG4gICAgdGhpcy5pc0NvbnRhaW5lcldpbmRvdyA9IGlzQ29udGFpbmVyV2luZG93O1xuICAgIHJldHVybiBpc0NvbnRhaW5lcldpbmRvdztcbiAgfVxuXG4gIGdldERvY3VtZW50RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbnRhaW5lcldpbmRvd1xuICAgICAgPyB0aGlzLm9wdGlvbnMud2luZG93RWxlbWVudC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50cyAoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHJldHVybiB0aGlzLmlzQ29udGFpbmVyV2luZG93XG4gICAgICA/IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yV2luZG93KGVsZW1lbnQpXG4gICAgICA6IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yRWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50c0ZvcldpbmRvdyAoZWxlbWVudDogRWxlbWVudFJlZik6IFBvc2l0aW9uU3RhdHMge1xuICAgIC8vIGNvbnRhaW5lcidzIGhlaWdodFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KHRoaXMuY29udGFpbmVyKTtcbiAgICAvLyBzY3JvbGxlZCB1bnRpbCBub3cgLyBjdXJyZW50IHkgcG9pbnRcbiAgICBjb25zdCBzY3JvbGxlZFVudGlsTm93ID0gaGVpZ2h0ICsgdGhpcy5wYWdlWU9mZnNldCh0aGlzLmdldERvY3VtZW50RWxlbWVudCgpKTtcbiAgICAvLyB0b3RhbCBoZWlnaHQgLyBtb3N0IGJvdHRvbSB5IHBvaW50XG4gICAgY29uc3QgdG90YWxUb1Njcm9sbCA9IHRoaXMub2Zmc2V0VG9wKGVsZW1lbnQubmF0aXZlRWxlbWVudCkgKyB0aGlzLmhlaWdodChlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiB7IGhlaWdodCwgc2Nyb2xsZWRVbnRpbE5vdywgdG90YWxUb1Njcm9sbCB9O1xuICB9XG5cbiAgY2FsY3VsYXRlUG9pbnRzRm9yRWxlbWVudCAoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIGxldCBzY3JvbGxUb3AgICAgPSB0aGlzLmF4aXMuc2Nyb2xsVG9wS2V5KCk7XG4gICAgbGV0IHNjcm9sbEhlaWdodCA9IHRoaXMuYXhpcy5zY3JvbGxIZWlnaHRLZXkoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcblxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KGNvbnRhaW5lcik7XG4gICAgLy8gcGVyaGFwcyB1c2UgdGhpcy5jb250YWluZXIub2Zmc2V0VG9wIGluc3RlYWQgb2YgJ3Njcm9sbFRvcCdcbiAgICBjb25zdCBzY3JvbGxlZFVudGlsTm93ID0gY29udGFpbmVyW3Njcm9sbFRvcF07XG4gICAgbGV0IGNvbnRhaW5lclRvcE9mZnNldCA9IDA7XG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gdGhpcy5vZmZzZXRUb3AoY29udGFpbmVyKTtcbiAgICBpZiAob2Zmc2V0VG9wICE9PSB2b2lkIDApIHtcbiAgICAgIGNvbnRhaW5lclRvcE9mZnNldCA9IG9mZnNldFRvcDtcbiAgICB9XG4gICAgY29uc3QgdG90YWxUb1Njcm9sbCA9IGNvbnRhaW5lcltzY3JvbGxIZWlnaHRdO1xuICAgIHJldHVybiB7IGhlaWdodCwgc2Nyb2xsZWRVbnRpbE5vdywgdG90YWxUb1Njcm9sbCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBoZWlnaHQgKGVsZW06IGFueSkge1xuICAgIGxldCBvZmZzZXRIZWlnaHQgPSB0aGlzLmF4aXMub2Zmc2V0SGVpZ2h0S2V5KCk7XG4gICAgbGV0IGNsaWVudEhlaWdodCA9IHRoaXMuYXhpcy5jbGllbnRIZWlnaHRLZXkoKTtcblxuICAgIC8vIGVsZW0gPSBlbGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGlzTmFOKGVsZW1bb2Zmc2V0SGVpZ2h0XSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50RWxlbWVudCgpW2NsaWVudEhlaWdodF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtW29mZnNldEhlaWdodF07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvZmZzZXRUb3AgKGVsZW06IGFueSkge1xuICAgIGxldCB0b3AgPSB0aGlzLmF4aXMudG9wS2V5KCk7XG5cbiAgICAvLyBlbGVtID0gZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHsgLy8gfHwgZWxlbS5jc3MoJ25vbmUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVt0b3BdICsgdGhpcy5wYWdlWU9mZnNldChlbGVtKTtcbiAgfVxuXG4gIHBhZ2VZT2Zmc2V0IChlbGVtOiBhbnkpIHtcbiAgICBsZXQgcGFnZVlPZmZzZXQgPSB0aGlzLmF4aXMucGFnZVlPZmZzZXRLZXkoKTtcbiAgICBsZXQgc2Nyb2xsVG9wICAgPSB0aGlzLmF4aXMuc2Nyb2xsVG9wS2V5KCk7XG4gICAgbGV0IG9mZnNldFRvcCAgID0gdGhpcy5heGlzLm9mZnNldFRvcEtleSgpO1xuXG4gICAgLy8gZWxlbSA9IGVsZW0ubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoaXNOYU4od2luZG93W3BhZ2VZT2Zmc2V0XSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50RWxlbWVudCgpW3Njcm9sbFRvcF07XG4gICAgfSBlbHNlIGlmIChlbGVtLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXdbcGFnZVlPZmZzZXRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbVtvZmZzZXRUb3BdO1xuICAgIH1cbiAgfVxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular2-infinite-scroll/src/scroll-register.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
__webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
__webpack_require__("../../../../rxjs/add/observable/timer.js");
__webpack_require__("../../../../rxjs/add/observable/of.js");
__webpack_require__("../../../../rxjs/add/operator/debounce.js");
__webpack_require__("../../../../rxjs/add/operator/throttle.js");
__webpack_require__("../../../../rxjs/add/operator/filter.js");
__webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
var ScrollRegister = (function () {
    function ScrollRegister() {
    }
    ScrollRegister.prototype.attachEvent = function (options) {
        var scroller$ = Observable_1.Observable.fromEvent(options.container, 'scroll')[options.throttleType](function () { return Observable_1.Observable.timer(options.throttleDuration); })
            .filter(options.filterBefore)
            .mergeMap(function (ev) { return Observable_1.Observable.of(options.mergeMap(ev)); })
            .subscribe(options.scrollHandler);
        return scroller$;
    };
    ScrollRegister.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ScrollRegister.ctorParameters = function () { return []; };
    return ScrollRegister;
}());
exports.ScrollRegister = ScrollRegister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlZ2lzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nyb2xsLXJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0MsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUNuQyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3BDLFFBQU8sNEJBQTRCLENBQUMsQ0FBQTtBQUNwQyxRQUFPLDBCQUEwQixDQUFDLENBQUE7QUFDbEMsUUFBTyw0QkFBNEIsQ0FBQyxDQUFBO0FBYXBDO0lBQUE7SUFlQSxDQUFDO0lBZEMsb0NBQVcsR0FBWCxVQUFhLE9BQTZCO1FBQ3hDLElBQU0sU0FBUyxHQUFpQix1QkFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUM5RSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsY0FBTSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO2FBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO2FBQzVCLFFBQVEsQ0FBQyxVQUFDLEVBQU8sSUFBSyxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzthQUMxRCxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNJLHlCQUFVLEdBQTBCO1FBQzNDLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUU7S0FDbkIsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLDZCQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLHNCQUFjLGlCQWUxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyUmVmIH0gZnJvbSAnLi9tb2RlbHMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aW1lcic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rocm90dGxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsUmVnaXN0ZXJDb25maWcge1xuICBjb250YWluZXI6IENvbnRhaW5lclJlZjtcbiAgdGhyb3R0bGVUeXBlOiBzdHJpbmc7XG4gIHRocm90dGxlRHVyYXRpb246IG51bWJlcjtcbiAgZmlsdGVyQmVmb3JlOiBGdW5jdGlvbjtcbiAgbWVyZ2VNYXA6IEZ1bmN0aW9uO1xuICBzY3JvbGxIYW5kbGVyOiBGdW5jdGlvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgU2Nyb2xsUmVnaXN0ZXIge1xuICBhdHRhY2hFdmVudCAob3B0aW9uczogU2Nyb2xsUmVnaXN0ZXJDb25maWcpOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHNjcm9sbGVyJDogU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQob3B0aW9ucy5jb250YWluZXIsICdzY3JvbGwnKVxuICAgICAgW29wdGlvbnMudGhyb3R0bGVUeXBlXSgoKSA9PiBPYnNlcnZhYmxlLnRpbWVyKG9wdGlvbnMudGhyb3R0bGVEdXJhdGlvbikpXG4gICAgICAuZmlsdGVyKG9wdGlvbnMuZmlsdGVyQmVmb3JlKVxuICAgICAgLm1lcmdlTWFwKChldjogYW55KSA9PiBPYnNlcnZhYmxlLm9mKG9wdGlvbnMubWVyZ2VNYXAoZXYpKSlcbiAgICAgIC5zdWJzY3JpYmUob3B0aW9ucy5zY3JvbGxIYW5kbGVyKTtcbiAgICByZXR1cm4gc2Nyb2xsZXIkO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../angular2-infinite-scroll/src/scroll-resolver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ScrollResolver = (function () {
    function ScrollResolver() {
        this.lastScrollPosition = 0;
    }
    ScrollResolver.prototype.shouldScroll = function (container, config, scrollingDown) {
        var distance = config.distance;
        var remaining;
        var containerBreakpoint;
        if (scrollingDown) {
            remaining = container.totalToScroll - container.scrolledUntilNow;
            containerBreakpoint = container.height * distance.down + 1;
        }
        else {
            remaining = container.scrolledUntilNow;
            containerBreakpoint = container.height * distance.up + 1;
        }
        var shouldScroll = remaining <= containerBreakpoint;
        this.lastScrollPosition = container.scrolledUntilNow;
        return shouldScroll;
    };
    ScrollResolver.prototype.isScrollingDown = function (container) {
        return this.lastScrollPosition < container.scrolledUntilNow;
    };
    ScrollResolver.prototype.getScrollStats = function (container, config) {
        var isScrollingDown = this.isScrollingDown(container);
        var shouldScroll = this.shouldScroll(container, config, isScrollingDown);
        return { isScrollingDown: isScrollingDown, shouldScroll: shouldScroll };
    };
    ScrollResolver.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ScrollResolver.ctorParameters = function () { return []; };
    return ScrollResolver;
}());
exports.ScrollResolver = ScrollResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nyb2xsLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFHM0M7SUFBQTtRQUNTLHVCQUFrQixHQUFXLENBQUMsQ0FBQztJQWlDeEMsQ0FBQztJQS9CQyxxQ0FBWSxHQUFaLFVBQWMsU0FBd0IsRUFBRSxNQUFzQixFQUFFLGFBQXNCO1FBQ3BGLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxTQUFpQixDQUFDO1FBQ3RCLElBQUksbUJBQTJCLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsQixTQUFTLEdBQUcsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7WUFDakUsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQU0sWUFBWSxHQUFZLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBaUIsU0FBd0I7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7SUFDOUQsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZ0IsU0FBd0IsRUFBRSxNQUFzQjtRQUM5RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsRUFBRSxnQ0FBZSxFQUFFLDBCQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0kseUJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRTtLQUNuQixDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsNkJBQWMsR0FBbUUsY0FBTSxPQUFBLEVBQzdGLEVBRDZGLENBQzdGLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0JBQWMsaUJBa0MxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zaXRpb25TdGF0cywgU2Nyb2xsZXJDb25maWcgfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIFNjcm9sbFJlc29sdmVyIHtcbiAgcHVibGljIGxhc3RTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMDtcblxuICBzaG91bGRTY3JvbGwgKGNvbnRhaW5lcjogUG9zaXRpb25TdGF0cywgY29uZmlnOiBTY3JvbGxlckNvbmZpZywgc2Nyb2xsaW5nRG93bjogYm9vbGVhbikge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gY29uZmlnLmRpc3RhbmNlO1xuICAgIGxldCByZW1haW5pbmc6IG51bWJlcjtcbiAgICBsZXQgY29udGFpbmVyQnJlYWtwb2ludDogbnVtYmVyO1xuICAgIGlmIChzY3JvbGxpbmdEb3duKSB7XG4gICAgICByZW1haW5pbmcgPSBjb250YWluZXIudG90YWxUb1Njcm9sbCAtIGNvbnRhaW5lci5zY3JvbGxlZFVudGlsTm93O1xuICAgICAgY29udGFpbmVyQnJlYWtwb2ludCA9IGNvbnRhaW5lci5oZWlnaHQgKiBkaXN0YW5jZS5kb3duICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtYWluaW5nID0gY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3c7XG4gICAgICBjb250YWluZXJCcmVha3BvaW50ID0gY29udGFpbmVyLmhlaWdodCAqIGRpc3RhbmNlLnVwICsgMTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkU2Nyb2xsOiBib29sZWFuID0gcmVtYWluaW5nIDw9IGNvbnRhaW5lckJyZWFrcG9pbnQ7XG4gICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgICByZXR1cm4gc2hvdWxkU2Nyb2xsO1xuICB9XG5cbiAgaXNTY3JvbGxpbmdEb3duIChjb250YWluZXI6IFBvc2l0aW9uU3RhdHMpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPCBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgfVxuXG4gIGdldFNjcm9sbFN0YXRzIChjb250YWluZXI6IFBvc2l0aW9uU3RhdHMsIGNvbmZpZzogU2Nyb2xsZXJDb25maWcpIHtcbiAgICBjb25zdCBpc1Njcm9sbGluZ0Rvd24gPSB0aGlzLmlzU2Nyb2xsaW5nRG93bihjb250YWluZXIpO1xuICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IHRoaXMuc2hvdWxkU2Nyb2xsKGNvbnRhaW5lciwgY29uZmlnLCBpc1Njcm9sbGluZ0Rvd24pO1xuICAgIHJldHVybiB7IGlzU2Nyb2xsaW5nRG93biwgc2hvdWxkU2Nyb2xsIH07XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../ngx-sharebuttons/components/share-button/share-button.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareButtonComponent; });

var ShareButtonComponent = (function () {
    function ShareButtonComponent() {
        /** Show count, disabled by default */
        this.showCount = false;
        /** Output button count to calculate total share counts */
        this.count = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Output pop up closed*/
        this.popUpClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ShareButtonComponent.prototype.counter = function (count) {
        this.shareCount = count;
        this.count.emit(count);
    };
    /** emits closed button type: so user can tell which button has been clicked */
    ShareButtonComponent.prototype.shareClosed = function (provider) {
        this.popUpClosed.emit(provider);
    };
    return ShareButtonComponent;
}());

ShareButtonComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'share-button',
                template: "\n      <button [shareButton]=\"button.provider\"\n              [sbUrl]=\"url\"\n              [sbImage]=\"image\"\n              [sbTitle]=\"title\"\n              [sbDescription]=\"description\"\n              [sbTags]=\"tags\"\n              [sbShowCount]=\"showCount\"\n              (sbCount)=\"counter($event)\"\n              (sbPopUpClosed)=\"shareClosed($event)\"\n              [class.sb-show-count]=\"showCount\"\n        >\n\n        <div class=\"sb-template\" [innerHtml]=\"button.template\"></div>\n        <span *ngIf=\"showCount && shareCount\" class=\"sb-count\">{{ shareCount | nFormatter: 1 }}</span>\n      </button>\n    ",
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
            },] },
];
/** @nocollapse */
ShareButtonComponent.ctorParameters = function () { return []; };
ShareButtonComponent.propDecorators = {
    'url': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'description': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'image': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tags': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'button': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showCount': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'count': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'popUpClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=share-button.component.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/components/share-buttons/share-buttons.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_index__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareButtonsComponent; });


var ShareButtonsComponent = (function () {
    function ShareButtonsComponent() {
        /** Show count on share-buttons, disabled by default */
        this.showCount = false;
        /** Indicates weather default style is applied to the buttons */
        this.defaultStyle = true;
        /** Add default class to all buttons */
        this.buttonClass = '';
        /** Buttons default templates */
        this.facebook = '<i class="fa fa-facebook"></i>';
        this.twitter = '<i class="fa fa-twitter"></i>';
        this.linkedIn = '<i class="fa fa-linkedin"></i>';
        this.tumblr = '<i class="fa fa-tumblr"></i>';
        this.google = '<i class="fa fa-google-plus"></i>';
        this.pinterest = '<i class="fa fa-pinterest-p"></i>';
        this.stumbleUpOn = '<i class="fa fa-stumbleupon"></i>';
        this.reddit = '<i class="fa fa-reddit-alien"></i>';
        this.whatsApp = '<i class="fa fa-whatsapp"></i>';
        this.count = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.popUpClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Total Count: the sum of all buttons share count */
        this.tCount = 0;
    }
    ShareButtonsComponent.prototype.ngOnInit = function () {
        this.buttons = [];
        if (this.facebook) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].FACEBOOK, this.facebook, "facebook " + this.buttonClass));
        }
        if (this.twitter) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].TWITTER, this.twitter, "twitter " + this.buttonClass));
        }
        if (this.google) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].GOOGLEPLUS, this.google, "googleplus " + this.buttonClass));
        }
        if (this.pinterest) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].PINTEREST, this.pinterest, "pinterest " + this.buttonClass));
        }
        if (this.linkedIn) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].LINKEDIN, this.linkedIn, "linkedin " + this.buttonClass));
        }
        if (this.tumblr) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].TUMBLR, this.tumblr, "tumblr " + this.buttonClass));
        }
        if (this.reddit) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].REDDIT, this.reddit, "reddit " + this.buttonClass));
        }
        if (this.stumbleUpOn) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].STUMBLEUPON, this.stumbleUpOn, "stumbleupon " + this.buttonClass));
        }
        if (this.whatsApp) {
            this.buttons.push(new __WEBPACK_IMPORTED_MODULE_1__helpers_index__["d" /* ShareButton */](__WEBPACK_IMPORTED_MODULE_1__helpers_index__["b" /* ShareProvider */].WHATSAPP, this.whatsApp, "whatsapp " + this.buttonClass));
        }
    };
    /** Reset total count on URL changes */
    ShareButtonsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['url']) {
            var currUrl = changes['url'].currentValue;
            var prevUrl = changes['url'].previousValue;
            if (currUrl && currUrl !== prevUrl) {
                this.tCount = 0;
            }
        }
    };
    /** Sum all buttons count & emits total */
    ShareButtonsComponent.prototype.counter = function (count) {
        this.count.emit(count);
    };
    /** emits closed button type: so user can tell which button has been clicked */
    ShareButtonsComponent.prototype.shareClosed = function (provider) {
        this.popUpClosed.emit(provider);
    };
    return ShareButtonsComponent;
}());

ShareButtonsComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'share-buttons',
                template: "\n      <div class=\"sb-buttons\" [ngClass]=\"(defaultStyle) ? ['sb-style', 'sb-style-colors']: ''\">\n        <share-button class=\"sb-button\" *ngFor=\"let button of buttons\"\n                      [ngClass]=\"button.classes\"\n                      [button]=\"button\"\n                      [url]=\"url\"\n                      [image]=\"image\"\n                      [title]=\"title\"\n                      [description]=\"description\"\n                      [tags]=\"tags\"\n                      [showCount]=\"showCount\"\n                      (count)=\"counter($event)\"\n                      (popUpClosed)=\"shareClosed($event)\"></share-button>\n      </div>\n    ",
                styles: ["\n      .sb-style.sb-style-colors .facebook button{background:#4267b2}.sb-style.sb-style-colors .facebook button:hover{background:#35528e}.sb-style.sb-style-colors .twitter button{background:#00acee}.sb-style.sb-style-colors .twitter button:hover{background:#008abe}.sb-style.sb-style-colors .googleplus button{background:#db4437}.sb-style.sb-style-colors .googleplus button:hover{background:#af362c}.sb-style.sb-style-colors .stumbleupon button{background:#eb4924}.sb-style.sb-style-colors .stumbleupon button:hover{background:#bc3a1d}.sb-style.sb-style-colors .linkedin button{background:#006fa6}.sb-style.sb-style-colors .linkedin button:hover{background:#005985}.sb-style.sb-style-colors .pinterest button{background:#bd081c}.sb-style.sb-style-colors .pinterest button:hover{background:#970616}.sb-style.sb-style-colors .reddit button{background:#ff4006}.sb-style.sb-style-colors .reddit button:hover{background:#cc3305}.sb-style.sb-style-colors .tumblr button{background:#36465d}.sb-style.sb-style-colors .tumblr button:hover{background:#2b384a}.sb-style.sb-style-colors .whatsapp button{background:#25d366}.sb-style.sb-style-colors .whatsapp button:hover{background:#1ea952}share-buttons{width:100%}.sb-style{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:1em auto;-ms-flex-wrap:wrap;flex-wrap:wrap}.sb-style .sb-button{min-width:60px;padding:5px;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.sb-style .sb-button,.sb-style button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.sb-style button{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;border-radius:.2em;padding:.5em .9em;font-size:1em;color:#fff}.sb-style button:hover{-webkit-transition:all .3s ease;transition:all .3s ease}.sb-style .sb-show-count{-ms-flex-pack:distribute;justify-content:space-around;max-width:6em}.sb-style .sb-template{margin:0 auto}.sb-style .sb-count{margin-left:.8em;font-size:.75em;font-family:Tahoma;text-align:center;position:relative;color:#fff;font-weight:700}a:hover,button{cursor:pointer;outline:0;border:0}.facebook{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.twitter{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.googleplus{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pinterest{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.linkedin{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.tumblr{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.reddit{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.stumbleupon{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.whatsapp{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}\n    "],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
            },] },
];
/** @nocollapse */
ShareButtonsComponent.ctorParameters = function () { return []; };
ShareButtonsComponent.propDecorators = {
    'url': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'title': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'description': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'image': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tags': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'showCount': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'defaultStyle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'buttonClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'facebook': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'twitter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'linkedIn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'tumblr': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'google': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'pinterest': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'stumbleUpOn': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'reddit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'whatsApp': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'count': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'popUpClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=share-buttons.component.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/directives/share-button/share-button.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_share_buttons_service__ = __webpack_require__("../../../../ngx-sharebuttons/services/share-buttons.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareButtonDirective; });



var ShareButtonDirective = (function () {
    function ShareButtonDirective(sbService) {
        this.sbService = sbService;
        /** Output button count to calculate total share counts */
        this.sbCount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** Output pop up closed*/
        this.sbPopUpClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(ShareButtonDirective.prototype, "shareButton", {
        set: function (value) {
            this.provider = __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Helper */].getEnumValue(value, __WEBPACK_IMPORTED_MODULE_2__helpers_index__["b" /* ShareProvider */]);
            if (typeof this.provider === 'undefined') {
                throw new Error("[shareButton] must be set to one of the values (numeric or string) of ShareProvider enum: was '" + value + "'");
            }
        },
        enumerable: true,
        configurable: true
    });
    ShareButtonDirective.prototype.onClick = function () {
        this.share();
    };
    ShareButtonDirective.prototype.ngOnChanges = function (changes) {
        /** Validate URL */
        this.sbUrl = this.sbService.validateUrl(this.sbUrl);
        if (changes['sbUrl']) {
            var currUrl = changes['sbUrl'].currentValue;
            var prevUrl = changes['sbUrl'].previousValue;
            if (currUrl && currUrl !== prevUrl) {
                /** Add share count if enabled */
                if (this.sbShowCount) {
                    this.sbService.count(this.provider, this.sbUrl, this.sbCount);
                }
            }
        }
    };
    /** Open share window */
    ShareButtonDirective.prototype.share = function () {
        var args = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["c" /* ShareArgs */](this.sbUrl, this.sbTitle, this.sbDescription, this.sbImage, this.sbTags);
        this.sbService.share(this.provider, args, this.sbPopUpClosed);
    };
    return ShareButtonDirective;
}());

ShareButtonDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[shareButton]'
            },] },
];
/** @nocollapse */
ShareButtonDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__services_share_buttons_service__["a" /* ShareButtonsService */], },
]; };
ShareButtonDirective.propDecorators = {
    'shareButton': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'sbUrl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'sbTitle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'sbDescription': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'sbImage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'sbTags': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'sbShowCount': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'sbCount': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'sbPopUpClosed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
};
//# sourceMappingURL=share-button.directive.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/helpers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__n_formatter_pipe__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/n-formatter.pipe.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_helper__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/share.helper.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__share_helper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_buttons_class__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/share-buttons.class.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__share_buttons_class__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__share_buttons_class__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_links_functions__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/share-links.functions.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_provider_enum__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/share-provider.enum.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__share_provider_enum__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/helpers/n-formatter.pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NFormatterPipe; });


var NFormatterPipe = (function () {
    function NFormatterPipe() {
    }
    NFormatterPipe.prototype.transform = function (num, digits) {
        if (typeof num !== 'number') {
            throw new Error('A number is expected for nFormatter');
        }
        return __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Helper */].nFormatter(num, digits);
    };
    return NFormatterPipe;
}());

NFormatterPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'nFormatter'
            },] },
];
/** @nocollapse */
NFormatterPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=n-formatter.pipe.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/helpers/share-buttons.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShareButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareArgs; });
var ShareButton = (function () {
    function ShareButton(provider, template, classes) {
        this.provider = provider;
        this.template = template;
        this.classes = classes;
    }
    return ShareButton;
}());

var ShareArgs = (function () {
    function ShareArgs(url, title, description, image, tags, via, mobile) {
        this.url = url;
        this.title = title;
        this.description = description;
        this.image = image;
        this.tags = tags;
        this.via = via;
        this.mobile = mobile;
    }
    return ShareArgs;
}());

//# sourceMappingURL=share-buttons.class.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/helpers/share-links.functions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareLinks; });
/** Share links functions:
 *  ShareLinks: Provide a share links for all services
 * */
var ShareLinks;
(function (ShareLinks) {
    function fbShare(args) {
        var shareUrl = 'https://www.facebook.com/sharer/sharer.php';
        shareUrl += "?u=" + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        if (args.description) {
            shareUrl += "&description=" + args.description;
        }
        if (args.image) {
            shareUrl += "&picture=" + args.image;
        }
        return shareUrl;
    }
    ShareLinks.fbShare = fbShare;
    // TWITTER DOCS: https://dev.twitter.com/web/tweet-button/web-intent
    function twitterShare(args) {
        var shareUrl = 'https://twitter.com/intent/tweet';
        shareUrl += "?url=" + args.url;
        if (args.title) {
            shareUrl += "&text=" + args.title;
        }
        if (args.via) {
            shareUrl += "&via=" + args.via;
        }
        if (args.tags) {
            shareUrl += "&hashtags=" + args.tags;
        }
        return shareUrl;
    }
    ShareLinks.twitterShare = twitterShare;
    // LINKEDIN DOCS https://developer.linkedin.com/docs/share-on-linkedin#!
    function linkedInShare(args) {
        var shareUrl = 'http://www.linkedin.com/shareArticle';
        shareUrl += "?url=" + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        if (args.description) {
            shareUrl += "&summary=" + args.description;
        }
        return shareUrl;
    }
    ShareLinks.linkedInShare = linkedInShare;
    // REDDIT DOCS: http://stackoverflow.com/questions/24823114/post-to-reddit-via-url
    function redditShare(args) {
        var shareUrl = 'http://www.reddit.com/submit';
        shareUrl += "?url=" + args.url;
        if (args.title) {
            shareUrl += "&title=" + args.title;
        }
        return shareUrl;
    }
    ShareLinks.redditShare = redditShare;
    // TUMBLR DOCS: https://www.tumblr.com/docs/en/share_button
    function tumblrShare(args) {
        var shareUrl = 'http://tumblr.com/widgets/share/tool';
        shareUrl += "?canonicalUrl=" + args.url;
        if (args.description) {
            shareUrl += "&caption=" + args.description;
        }
        if (args.tags) {
            shareUrl += "&tags=" + args.tags;
        }
        return shareUrl;
    }
    ShareLinks.tumblrShare = tumblrShare;
    // STUMBLE DOCS: http://stackoverflow.com/questions/10591424/how-can-i-create-a-custom-stumbleupon-button
    function stumbleShare(args) {
        var shareUrl;
        if (args.mobile) {
            shareUrl = 'stumbleupon://';
        }
        else {
            shareUrl = 'http://www.stumbleupon.com/submit';
        }
        shareUrl += "?url=" + args.url;
        return shareUrl;
    }
    ShareLinks.stumbleShare = stumbleShare;
    // GPLUS DOCS: https://developers.google.com/+/web/share/#sharelink
    function gPlusShare(args) {
        return "https://plus.google.com/share?url=" + args.url;
    }
    ShareLinks.gPlusShare = gPlusShare;
    function pinShare(args) {
        var shareUrl = "https://in.pinterest.com/pin/create/button/?url=" + args.url;
        // if text is not provided, pin button won't work.
        if (args.description) {
            shareUrl += "&description=" + args.description;
        }
        else if (document) {
            var descElm = document.querySelector('meta[property="og:description"]');
            if (descElm) {
                shareUrl += "&description=" + descElm.getAttribute('content');
            }
        }
        if (args.image) {
            shareUrl += "&media=" + args.image;
        }
        else if (document) {
            var imageElm = document.querySelector('meta[property="og:image"]');
            if (imageElm) {
                shareUrl += "&media=" + imageElm.getAttribute('content');
            }
        }
        return shareUrl;
    }
    ShareLinks.pinShare = pinShare;
    function whatsappShare(args) {
        var shareUrl = ((args.mobile) ? 'whatsapp://' : 'https://web.whatsapp.com/') + "send?text=";
        // Title will add a new line
        if (args.title) {
            shareUrl += args.title + " %0A";
        }
        // Description adds a pipe to separate the url
        if (args.description) {
            shareUrl += args.description + " | ";
        }
        shareUrl += "" + args.url;
        return shareUrl;
    }
    ShareLinks.whatsappShare = whatsappShare;
})(ShareLinks || (ShareLinks = {}));
//# sourceMappingURL=share-links.functions.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/helpers/share-provider.enum.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareProvider; });
var ShareProvider;
(function (ShareProvider) {
    ShareProvider[ShareProvider["FACEBOOK"] = 0] = "FACEBOOK";
    ShareProvider[ShareProvider["TWITTER"] = 1] = "TWITTER";
    ShareProvider[ShareProvider["REDDIT"] = 2] = "REDDIT";
    ShareProvider[ShareProvider["STUMBLEUPON"] = 3] = "STUMBLEUPON";
    ShareProvider[ShareProvider["LINKEDIN"] = 4] = "LINKEDIN";
    ShareProvider[ShareProvider["GOOGLEPLUS"] = 5] = "GOOGLEPLUS";
    ShareProvider[ShareProvider["TUMBLR"] = 6] = "TUMBLR";
    ShareProvider[ShareProvider["PINTEREST"] = 7] = "PINTEREST";
    ShareProvider[ShareProvider["WHATSAPP"] = 8] = "WHATSAPP";
})(ShareProvider || (ShareProvider = {}));
//# sourceMappingURL=share-provider.enum.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/helpers/share.helper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/share-provider.enum.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_links_functions__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/share-links.functions.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });


/** Here is a collection of helper functions that can be used statically */
var Helper;
(function (Helper) {
    /** Prepare gPlus count request body   */
    Helper.gplusCountBody = function (url) {
        return [{
                method: 'pos.plusones.get',
                id: 'p',
                params: {
                    nolog: true,
                    id: decodeURIComponent(url),
                    source: 'widget',
                    userId: '@viewer',
                    groupId: '@self'
                },
                jsonrpc: '2.0',
                key: 'p',
                apiVersion: 'v1'
            }];
    };
    /** Create share links */
    Helper.shareFactory = function (type, args) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].FACEBOOK:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].fbShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].TWITTER:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].twitterShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].LINKEDIN:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].linkedInShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].REDDIT:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].redditShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].TUMBLR:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].tumblrShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].STUMBLEUPON:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].stumbleShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].GOOGLEPLUS:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].gPlusShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].PINTEREST:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].pinShare(args);
            case __WEBPACK_IMPORTED_MODULE_0__share_provider_enum__["a" /* ShareProvider */].WHATSAPP:
                return __WEBPACK_IMPORTED_MODULE_1__share_links_functions__["a" /* ShareLinks */].whatsappShare(args);
            default:
                return '';
        }
    };
    /** Change share counts to a readable number e.g 35.6k */
    Helper.nFormatter = function (num, digits) {
        var si = [
            { value: 1E18, symbol: 'E' },
            { value: 1E15, symbol: 'P' },
            { value: 1E12, symbol: 'T' },
            { value: 1E9, symbol: 'G' },
            { value: 1E6, symbol: 'M' },
            { value: 1E3, symbol: 'K' }
        ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
        for (i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
            }
        }
        return num.toFixed(digits).replace(rx, '$1');
    };
    Helper.getEnumValue = function (value, enumeration) {
        var result;
        if (typeof value !== 'undefined') {
            if (typeof value === 'string' && enumeration[value.toUpperCase()] >= 0) {
                result = enumeration[value.toUpperCase()];
            }
            else if (typeof value === 'number' && enumeration["" + value]) {
                result = enumeration[enumeration["" + value]];
            }
        }
        return result;
    };
})(Helper || (Helper = {}));
//# sourceMappingURL=share.helper.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_share_buttons_share_buttons_component__ = __webpack_require__("../../../../ngx-sharebuttons/components/share-buttons/share-buttons.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_share_button_share_button_component__ = __webpack_require__("../../../../ngx-sharebuttons/components/share-button/share-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_share_button_share_button_directive__ = __webpack_require__("../../../../ngx-sharebuttons/directives/share-button/share-button.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_share_buttons_service__ = __webpack_require__("../../../../ngx-sharebuttons/services/share-buttons.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_n_formatter_pipe__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/n-formatter.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_index__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_buttons_module__ = __webpack_require__("../../../../ngx-sharebuttons/share-buttons.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__share_buttons_module__["a"]; });
/* unused harmony reexport ShareButtonsComponent */
/* unused harmony reexport ShareButtonComponent */
/* unused harmony reexport ShareButtonDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers_index__["d"]; });
/* unused harmony reexport NFormatterPipe */
/* unused harmony reexport ShareButtonsService */
/* unused harmony reexport ShareArgs */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__helpers_index__["b"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/services/share-buttons.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__window_service__ = __webpack_require__("../../../../ngx-sharebuttons/services/window.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_index__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareButtonsService; });







var ShareButtonsService = (function () {
    function ShareButtonsService(window, http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
        /** Optional parameters */
        this.windowWidth = 500;
        this.windowHeight = 400;
        this.window = window.nativeWindow;
    }
    ShareButtonsService.prototype.validateUrl = function (url) {
        /** If URL is specified then validate it, otherwise use window URL */
        if (url) {
            var r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            if (r.test(url)) {
                return encodeURIComponent(url);
            }
            else {
                console.warn('[ShareButtons]: Invalid URL, fallback to Window URL');
            }
        }
        /** fallback to "Window" URL, or to "Global" in universal */
        return (this.window) ? encodeURIComponent(this.window.location.href) : global.url || '';
    };
    /** Open share window */
    ShareButtonsService.prototype.share = function (type, args, popUpClosed) {
        var _this = this;
        /** include twitterAccount in args for twitter button */
        if (this.twitterAccount) {
            args = Object.assign({}, args, { via: this.twitterAccount });
        }
        /** check for mobile browser (this won't detect tablets browser) */
        if (this.window.innerWidth <= 480) {
            args = Object.assign({}, args, { mobile: true });
        }
        var popUp = this.window.open(__WEBPACK_IMPORTED_MODULE_6__helpers_index__["a" /* Helper */].shareFactory(type, args), 'newwindow', this.windowAttr());
        /** Emit clicked button */
        if (this.window) {
            var pollTimer_1 = this.window.setInterval(function () {
                if (popUp.closed) {
                    _this.window.clearInterval(pollTimer_1);
                    popUpClosed.emit(type);
                }
            }, 200);
        }
    };
    /** Share Counts */
    ShareButtonsService.prototype.count = function (type, url, count) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_6__helpers_index__["b" /* ShareProvider */].FACEBOOK:
                this.fbCount(url, count);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__helpers_index__["b" /* ShareProvider */].LINKEDIN:
                this.linkedInCount(url, count);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__helpers_index__["b" /* ShareProvider */].REDDIT:
                this.redditCount(url, count);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__helpers_index__["b" /* ShareProvider */].TUMBLR:
                this.tumblrCount(url, count);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__helpers_index__["b" /* ShareProvider */].GOOGLEPLUS:
                this.gPlusCount(url, count);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__helpers_index__["b" /* ShareProvider */].PINTEREST:
                this.pinCount(url, count);
                break;
            default:
        }
    };
    ShareButtonsService.prototype.fbCount = function (url, count) {
        this.fetch("https://graph.facebook.com/?id=" + url)
            .subscribe(function (data) {
            data = data.json();
            if (data.hasOwnProperty('share') && data.share.hasOwnProperty('share_count')) {
                count.emit(data.share.share_count);
                return;
            }
            count.emit(0);
        });
    };
    ShareButtonsService.prototype.linkedInCount = function (url, count) {
        this.fetchJsonp("https://www.linkedin.com/countserv/count/share?url=" + url)
            .subscribe(function (data) {
            data = data.json();
            count.emit(data.count || 0);
        });
    };
    ShareButtonsService.prototype.redditCount = function (url, count) {
        this.fetch("https://buttons.reddit.com/button_info.json?url=" + url)
            .subscribe(function (data) {
            data = data.json();
            if (data.hasOwnProperty('data') && data.data.hasOwnProperty('children')) {
                if (data.data.children.length) {
                    count.emit(data.data.children[0].data.score);
                    return;
                }
            }
            count.emit(0);
        });
    };
    ShareButtonsService.prototype.gPlusCount = function (url, count) {
        var body = __WEBPACK_IMPORTED_MODULE_6__helpers_index__["a" /* Helper */].gplusCountBody(url);
        this.post('https://clients6.google.com/rpc?key=AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ', body)
            .subscribe(function (data) {
            data = data.json();
            if (data[0] && data[0].hasOwnProperty('result')) {
                count.emit(data[0].result.metadata.globalCounts.count);
                return;
            }
            count.emit(0);
        });
    };
    ShareButtonsService.prototype.pinCount = function (url, count) {
        this.fetch("https://api.pinterest.com/v1/urls/count.json?callback=receiveCount&url=" + url)
            .subscribe(function (data) {
            data = data.text();
            var result = JSON.parse(data.replace(/^receiveCount\((.*)\)/, '$1'));
            count.emit(result.count || 0);
        });
    };
    ShareButtonsService.prototype.tumblrCount = function (url, count) {
        this.fetchJsonp("https://api.tumblr.com/v2/share/stats?url=" + url)
            .subscribe(function (data) {
            data = data.json();
            if (data.hasOwnProperty('response') && data.response.hasOwnProperty('note_count')) {
                count.emit(data.response.note_count);
                return;
            }
            count.emit(0);
        });
    };
    ShareButtonsService.prototype.post = function (url, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, body, options)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty(); });
    };
    ShareButtonsService.prototype.fetch = function (url) {
        return this.http.get(url)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty(); });
    };
    ShareButtonsService.prototype.fetchJsonp = function (url) {
        return this.jsonp.request(url + "&format=jsonp&callback=JSONP_CALLBACK")
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty(); });
    };
    ShareButtonsService.prototype.windowAttr = function () {
        return 'width=' + this.windowWidth + ', height=' + this.windowHeight;
    };
    return ShareButtonsService;
}());

ShareButtonsService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ShareButtonsService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_5__window_service__["a" /* WindowService */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Jsonp */], },
]; };
//# sourceMappingURL=share-buttons.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../ngx-sharebuttons/services/window.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });

var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowService;
}());

WindowService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
WindowService.ctorParameters = function () { return []; };
function _window() {
    // return the global native browser window object
    return typeof window !== 'undefined' ? window : undefined;
}
//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../ngx-sharebuttons/share-buttons.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_share_buttons_share_buttons_component__ = __webpack_require__("../../../../ngx-sharebuttons/components/share-buttons/share-buttons.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_share_button_share_button_component__ = __webpack_require__("../../../../ngx-sharebuttons/components/share-button/share-button.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_share_button_share_button_directive__ = __webpack_require__("../../../../ngx-sharebuttons/directives/share-button/share-button.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_share_buttons_service__ = __webpack_require__("../../../../ngx-sharebuttons/services/share-buttons.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_window_service__ = __webpack_require__("../../../../ngx-sharebuttons/services/window.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_n_formatter_pipe__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/n-formatter.pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_index__ = __webpack_require__("../../../../ngx-sharebuttons/helpers/index.js");
/* unused harmony reexport ShareButtonsComponent */
/* unused harmony reexport ShareButtonComponent */
/* unused harmony reexport ShareButtonDirective */
/* unused harmony reexport ShareButton */
/* unused harmony reexport NFormatterPipe */
/* unused harmony reexport ShareButtonsService */
/* unused harmony reexport ShareArgs */
/* unused harmony reexport ShareProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareButtonsModule; });










var ShareButtonsModule = (function () {
    function ShareButtonsModule() {
    }
    ShareButtonsModule.forRoot = function () {
        return {
            ngModule: ShareButtonsModule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_share_buttons_service__["a" /* ShareButtonsService */],
                __WEBPACK_IMPORTED_MODULE_7__services_window_service__["a" /* WindowService */]
            ]
        };
    };
    return ShareButtonsModule;
}());

ShareButtonsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_3__components_share_buttons_share_buttons_component__["a" /* ShareButtonsComponent */],
                    __WEBPACK_IMPORTED_MODULE_4__components_share_button_share_button_component__["a" /* ShareButtonComponent */],
                    __WEBPACK_IMPORTED_MODULE_5__directives_share_button_share_button_directive__["a" /* ShareButtonDirective */],
                    __WEBPACK_IMPORTED_MODULE_8__helpers_n_formatter_pipe__["a" /* NFormatterPipe */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* CommonModule */],
                    __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* JsonpModule */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_3__components_share_buttons_share_buttons_component__["a" /* ShareButtonsComponent */],
                    __WEBPACK_IMPORTED_MODULE_4__components_share_button_share_button_component__["a" /* ShareButtonComponent */],
                    __WEBPACK_IMPORTED_MODULE_5__directives_share_button_share_button_directive__["a" /* ShareButtonDirective */],
                    __WEBPACK_IMPORTED_MODULE_8__helpers_n_formatter_pipe__["a" /* NFormatterPipe */]
                ]
            },] },
];
/** @nocollapse */
ShareButtonsModule.ctorParameters = function () { return []; };

//# sourceMappingURL=share-buttons.module.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/_module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_module__ = __webpack_require__("../../../flex-layout/media-query/_module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_query_breakpoints_break_points_provider__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-points-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_query_media_monitor_provider__ = __webpack_require__("../../../flex-layout/media-query/media-monitor-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_query_observable_media_provider__ = __webpack_require__("../../../flex-layout/media-query/observable-media-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_flex__ = __webpack_require__("../../../flex-layout/flexbox/api/flex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_layout__ = __webpack_require__("../../../flex-layout/flexbox/api/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_show_hide__ = __webpack_require__("../../../flex-layout/flexbox/api/show-hide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_flex_align__ = __webpack_require__("../../../flex-layout/flexbox/api/flex-align.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_flex_fill__ = __webpack_require__("../../../flex-layout/flexbox/api/flex-fill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_flex_offset__ = __webpack_require__("../../../flex-layout/flexbox/api/flex-offset.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_flex_order__ = __webpack_require__("../../../flex-layout/flexbox/api/flex-order.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__api_layout_align__ = __webpack_require__("../../../flex-layout/flexbox/api/layout-align.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__api_layout_wrap__ = __webpack_require__("../../../flex-layout/flexbox/api/layout-wrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__api_layout_gap__ = __webpack_require__("../../../flex-layout/flexbox/api/layout-gap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__api_class__ = __webpack_require__("../../../flex-layout/flexbox/api/class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__api_style__ = __webpack_require__("../../../flex-layout/flexbox/api/style.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexLayoutModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



















/**
 * Since the equivalent results are easily achieved with a css class attached to each
 * layout child, these have been deprecated and removed from the API.
 *
 *  import {LayoutPaddingDirective} from './api/layout-padding';
 *  import {LayoutMarginDirective} from './api/layout-margin';
 */
var ALL_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_8__api_layout__["a" /* LayoutDirective */],
    __WEBPACK_IMPORTED_MODULE_15__api_layout_wrap__["a" /* LayoutWrapDirective */],
    __WEBPACK_IMPORTED_MODULE_16__api_layout_gap__["a" /* LayoutGapDirective */],
    __WEBPACK_IMPORTED_MODULE_14__api_layout_align__["a" /* LayoutAlignDirective */],
    __WEBPACK_IMPORTED_MODULE_7__api_flex__["a" /* FlexDirective */],
    __WEBPACK_IMPORTED_MODULE_13__api_flex_order__["a" /* FlexOrderDirective */],
    __WEBPACK_IMPORTED_MODULE_12__api_flex_offset__["a" /* FlexOffsetDirective */],
    __WEBPACK_IMPORTED_MODULE_11__api_flex_fill__["a" /* FlexFillDirective */],
    __WEBPACK_IMPORTED_MODULE_10__api_flex_align__["a" /* FlexAlignDirective */],
    __WEBPACK_IMPORTED_MODULE_9__api_show_hide__["a" /* ShowHideDirective */],
    __WEBPACK_IMPORTED_MODULE_17__api_class__["a" /* ClassDirective */],
    __WEBPACK_IMPORTED_MODULE_18__api_style__["a" /* StyleDirective */],
];
/**
 *
 */
var FlexLayoutModule = (function () {
    function FlexLayoutModule() {
    }
    /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     */
    FlexLayoutModule.provideBreakPoints = function (breakpoints, options) {
        return {
            ngModule: FlexLayoutModule,
            providers: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__media_query_breakpoints_break_points_provider__["b" /* CUSTOM_BREAKPOINTS_PROVIDER_FACTORY */])(breakpoints, options || { orientations: false })
            ]
        };
    };
    return FlexLayoutModule;
}());

FlexLayoutModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"], args: [{
                declarations: ALL_DIRECTIVES,
                imports: [__WEBPACK_IMPORTED_MODULE_3__media_query_module__["a" /* MediaQueriesModule */]],
                exports: [__WEBPACK_IMPORTED_MODULE_3__media_query_module__["a" /* MediaQueriesModule */]].concat(ALL_DIRECTIVES),
                providers: [
                    __WEBPACK_IMPORTED_MODULE_5__media_query_media_monitor_provider__["a" /* MEDIA_MONITOR_PROVIDER */],
                    __WEBPACK_IMPORTED_MODULE_4__media_query_breakpoints_break_points_provider__["a" /* DEFAULT_BREAKPOINTS_PROVIDER */],
                    __WEBPACK_IMPORTED_MODULE_6__media_query_observable_media_provider__["a" /* OBSERVABLE_MEDIA_PROVIDER */]
                ]
            },] },
];
/** @nocollapse */
FlexLayoutModule.ctorParameters = function () { return []; };
//# sourceMappingURL=_module.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/base-adapter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFxDirectiveAdapter; });
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

/**
 * Adapter to the BaseFxDirective abstract class so it can be used via composition.
 * @see BaseFxDirective
 */
var BaseFxDirectiveAdapter = (function (_super) {
    __extends(BaseFxDirectiveAdapter, _super);
    /**
     * BaseFxDirectiveAdapter constructor
     */
    function BaseFxDirectiveAdapter(_baseKey, // non-responsive @Input property name
        _mediaMonitor, _elementRef, _renderer) {
        var _this = _super.call(this, _mediaMonitor, _elementRef, _renderer) || this;
        _this._baseKey = _baseKey;
        _this._mediaMonitor = _mediaMonitor;
        _this._elementRef = _elementRef;
        _this._renderer = _renderer;
        return _this;
    }
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "activeKey", {
        /**
         * Accessor to determine which @Input property is "active"
         * e.g. which property value will be used.
         */
        get: function () {
            var mqa = this._mqActivation;
            var key = mqa ? mqa.activatedInputKey : this._baseKey;
            // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
            return (key === 'class') ? 'klazz' : key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "inputMap", {
        /** Hash map of all @Input keys/values defined/used */
        get: function () {
            return this._inputMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "mqActivation", {
        /**
         * @see BaseFxDirective._mqActivation
         */
        get: function () {
            return this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @see BaseFxDirective._queryInput
     */
    BaseFxDirectiveAdapter.prototype.queryInput = function (key) {
        return key ? this._queryInput(key) : undefined;
    };
    /**
     *  Save the property value.
     */
    BaseFxDirectiveAdapter.prototype.cacheInput = function (key, source, cacheRaw) {
        if (cacheRaw === void 0) { cacheRaw = false; }
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error('Invalid class value provided. Did you want to cache the raw value?');
        }
    };
    /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     */
    BaseFxDirectiveAdapter.prototype.listenForMediaQueryChanges = function (key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    };
    // ************************************************************
    // Protected Methods
    // ************************************************************
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     */
    BaseFxDirectiveAdapter.prototype._cacheInputRaw = function (key, source) {
        this._inputMap[key] = source;
    };
    /**
     *  Save the property value for Array values.
     */
    BaseFxDirectiveAdapter.prototype._cacheInputArray = function (key, source) {
        this._inputMap[key] = source.join(' ');
    };
    /**
     *  Save the property value for key/value pair values.
     */
    BaseFxDirectiveAdapter.prototype._cacheInputObject = function (key, source) {
        var classes = [];
        for (var prop in source) {
            if (!!source[prop]) {
                classes.push(prop);
            }
        }
        this._inputMap[key] = classes.join(' ');
    };
    /**
     *  Save the property value for string values.
     */
    BaseFxDirectiveAdapter.prototype._cacheInputString = function (key, source) {
        this._inputMap[key] = source;
    };
    return BaseFxDirectiveAdapter;
}(__WEBPACK_IMPORTED_MODULE_0__base__["a" /* BaseFxDirective */]));

//# sourceMappingURL=base-adapter.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_auto_prefixer__ = __webpack_require__("../../../flex-layout/utils/auto-prefixer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_layout_validator__ = __webpack_require__("../../../flex-layout/utils/layout-validator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__responsive_responsive_activation__ = __webpack_require__("../../../flex-layout/flexbox/responsive/responsive-activation.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFxDirective; });



/** Abstract base class for the Layout API styling directives. */
var BaseFxDirective = (function () {
    /**
     *
     */
    function BaseFxDirective(_mediaMonitor, _elementRef, _renderer) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         *  Dictionary of input keys with associated values
         */
        this._inputMap = {};
        this._display = this._getDisplayStyle();
    }
    Object.defineProperty(BaseFxDirective.prototype, "hasMediaQueryListener", {
        get: function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Accessor Methods
    // *********************************************
    /**
     * Access the current value (if any) of the @Input property.
     */
    BaseFxDirective.prototype._queryInput = function (key) {
        return this._inputMap[key];
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    BaseFxDirective.prototype.ngOnDestroy = function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        this._mediaMonitor = null;
    };
    // *********************************************
    // Protected Methods
    // *********************************************
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    BaseFxDirective.prototype._getDefaultVal = function (key, fallbackVal) {
        var val = this._queryInput(key);
        var hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows use to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    BaseFxDirective.prototype._getDisplayStyle = function (source) {
        var element = source || this._elementRef.nativeElement;
        var value = element.style['display'] || getComputedStyle(element)['display'];
        return value.trim();
    };
    BaseFxDirective.prototype._getFlowDirection = function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var value = "";
        if (target) {
            var directionKeys_1 = Object.keys(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_auto_prefixer__["a" /* applyCssPrefixes */])({ 'flex-direction': '' }));
            var findDirection = function (styles) { return directionKeys_1.reduce(function (direction, key) {
                return direction || styles[key];
            }, null); };
            var immediateValue = findDirection(target['style']);
            value = immediateValue || findDirection(getComputedStyle(target));
            if (!immediateValue && addIfMissing) {
                value = value || 'row';
                this._applyStyleToElements(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_layout_validator__["a" /* buildLayoutCSS */])(value), [target]);
            }
        }
        return value ? value.trim() : "row";
    };
    /**
     * Applies styles given via string pair or object map to the directive element.
     */
    BaseFxDirective.prototype._applyStyleToElement = function (style, value, nativeElement) {
        var _this = this;
        var styles = {};
        var element = nativeElement || this._elementRef.nativeElement;
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_auto_prefixer__["a" /* applyCssPrefixes */])(style);
        // Iterate all properties in hashMap and set styles
        Object.keys(styles).forEach(function (key) {
            _this._renderer.setStyle(element, key, styles[key]);
        });
    };
    /**
     * Applies styles given via string pair or object map to the directive element.
     */
    BaseFxDirective.prototype._applyStyleToElements = function (style, elements) {
        var _this = this;
        var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_auto_prefixer__["a" /* applyCssPrefixes */])(style);
        Object.keys(styles).forEach(function (key) {
            elements.forEach(function (el) { return _this._renderer.setStyle(el, key, styles[key]); });
        });
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    BaseFxDirective.prototype._cacheInput = function (key, source) {
        if (typeof source === 'object') {
            for (var prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            this._inputMap[key] = source;
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    BaseFxDirective.prototype._listenForMediaQueryChanges = function (key, defaultValue, onMediaQueryChange) {
        if (!this._mqActivation) {
            var keyOptions = new __WEBPACK_IMPORTED_MODULE_2__responsive_responsive_activation__["a" /* KeyOptions */](key, defaultValue, this._inputMap);
            this._mqActivation = new __WEBPACK_IMPORTED_MODULE_2__responsive_responsive_activation__["b" /* ResponsiveActivation */](keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseFxDirective.prototype, "childrenNodes", {
        /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         */
        get: function () {
            var obj = this._elementRef.nativeElement.childNodes;
            var buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fast validator for presence of attribute on the host element
     */
    BaseFxDirective.prototype.hasKeyValue = function (key) {
        return this._mqActivation.hasKeyValue(key);
    };
    return BaseFxDirective;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_adapter__ = __webpack_require__("../../../flex-layout/flexbox/api/base-adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * Directive to add responsive support for ngClass.
 */
var ClassDirective = (function (_super) {
    __extends(ClassDirective, _super);
    /* tslint:enable */
    function ClassDirective(monitor, _iterableDiffers, _keyValueDiffers, _ngEl, _oldRenderer, _renderer) {
        var _this = 
        // TODO: this should use Renderer2 as well, but NgClass hasn't switched over yet.
        _super.call(this, _iterableDiffers, _keyValueDiffers, _ngEl, _oldRenderer) || this;
        _this.monitor = monitor;
        _this._classAdapter = new __WEBPACK_IMPORTED_MODULE_2__base_adapter__["a" /* BaseFxDirectiveAdapter */]('class', monitor, _ngEl, _renderer);
        _this._ngClassAdapter = new __WEBPACK_IMPORTED_MODULE_2__base_adapter__["a" /* BaseFxDirectiveAdapter */]('ngClass', monitor, _ngEl, _renderer);
        return _this;
    }
    Object.defineProperty(ClassDirective.prototype, "ngClassBase", {
        /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         */
        set: function (val) {
            this._ngClassAdapter.cacheInput('ngClass', val, true);
            this.ngClass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXs", {
        /* tslint:disable */
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassSm", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassMd", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLg", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXl", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtSm", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtMd", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtLg", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtXl", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtXs", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtSm", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtMd", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtLg", {
        set: function (val) { this._ngClassAdapter.cacheInput('ngClassGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classBase", {
        /** Deprecated selectors */
        /**
         * Base class selector values get applied immediately and are considered destructive overwrites to
         * all previous class assignments
         *
         * Delegate to NgClass:klass setter and cache value for base fallback from responsive APIs.
         */
        set: function (val) {
            this._classAdapter.cacheInput('_rawClass', val, true);
            this.klass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classXs", {
        set: function (val) { this._classAdapter.cacheInput('classXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classSm", {
        set: function (val) { this._classAdapter.cacheInput('classSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classMd", {
        set: function (val) { this._classAdapter.cacheInput('classMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classLg", {
        set: function (val) { this._classAdapter.cacheInput('classLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classXl", {
        set: function (val) { this._classAdapter.cacheInput('classXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classLtSm", {
        set: function (val) { this._classAdapter.cacheInput('classLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classLtMd", {
        set: function (val) { this._classAdapter.cacheInput('classLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classLtLg", {
        set: function (val) { this._classAdapter.cacheInput('classLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classLtXl", {
        set: function (val) { this._classAdapter.cacheInput('classLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classGtXs", {
        set: function (val) { this._classAdapter.cacheInput('classGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classGtSm", {
        set: function (val) { this._classAdapter.cacheInput('classGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classGtMd", {
        set: function (val) { this._classAdapter.cacheInput('classGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "classGtLg", {
        set: function (val) { this._classAdapter.cacheInput('classGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "initialClasses", {
        /**
         * Initial value of the `class` attribute; used as
         * fallback and will be merged with nay `ngClass` values
         */
        get: function () {
            return this._classAdapter.queryInput('_rawClass') || "";
        },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    ClassDirective.prototype.ngOnChanges = function (changes) {
        if (this._classAdapter.activeKey in changes) {
            this._updateKlass();
        }
        if (this._ngClassAdapter.activeKey in changes) {
            this._updateNgClass();
        }
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    ClassDirective.prototype.ngDoCheck = function () {
        if (!this._classAdapter.hasMediaQueryListener) {
            this._configureMQListener();
        }
        _super.prototype.ngDoCheck.call(this);
    };
    ClassDirective.prototype.ngOnDestroy = function () {
        this._classAdapter.ngOnDestroy();
        this._ngClassAdapter.ngOnDestroy();
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    ClassDirective.prototype._configureMQListener = function () {
        var _this = this;
        this._classAdapter.listenForMediaQueryChanges('class', '', function (changes) {
            _this._updateKlass(changes.value);
        });
        this._ngClassAdapter.listenForMediaQueryChanges('ngClass', '', function (changes) {
            _this._updateNgClass(changes.value);
            _super.prototype.ngDoCheck.call(_this); // trigger NgClass::_applyIterableChanges()
        });
    };
    /**
     *  Apply updates directly to the NgClass:klass property
     *  ::ngDoCheck() is not needed
     */
    ClassDirective.prototype._updateKlass = function (value) {
        var klass = value || this._classAdapter.queryInput('class') || '';
        if (this._classAdapter.mqActivation) {
            klass = this._classAdapter.mqActivation.activatedInput;
        }
        this.klass = klass || this.initialClasses;
    };
    /**
     *  Identify the activated input value and update the ngClass iterables...
     *  needs ngDoCheck() to actually apply the values to the element
     */
    ClassDirective.prototype._updateNgClass = function (value) {
        if (this._ngClassAdapter.mqActivation) {
            value = this._ngClassAdapter.mqActivation.activatedInput;
        }
        this.ngClass = value || ''; // Delegate subsequent activity to the NgClass logic
    };
    return ClassDirective;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* NgClass */]));

ClassDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: "\n    [class], [class.xs], [class.sm], [class.md], [class.lg], [class.xl],\n    [class.lt-sm], [class.lt-md], [class.lt-lg], [class.lt-xl],\n    [class.gt-xs], [class.gt-sm], [class.gt-md], [class.gt-lg],\n\n    [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n    [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n    [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n  "
            },] },
];
/** @nocollapse */
ClassDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
ClassDirective.propDecorators = {
    'ngClassBase': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass',] },],
    'ngClassXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.xs',] },],
    'ngClassSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.sm',] },],
    'ngClassMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.md',] },],
    'ngClassLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.lg',] },],
    'ngClassXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.xl',] },],
    'ngClassLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.lt-sm',] },],
    'ngClassLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.lt-md',] },],
    'ngClassLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.lt-lg',] },],
    'ngClassLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.lt-xl',] },],
    'ngClassGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.gt-xs',] },],
    'ngClassGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.gt-sm',] },],
    'ngClassGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.gt-md',] },],
    'ngClassGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngClass.gt-lg',] },],
    'classBase': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class',] },],
    'classXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.xs',] },],
    'classSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.sm',] },],
    'classMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.md',] },],
    'classLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.lg',] },],
    'classXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.xl',] },],
    'classLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.lt-sm',] },],
    'classLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.lt-md',] },],
    'classLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.lt-lg',] },],
    'classLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.lt-xl',] },],
    'classGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.gt-xs',] },],
    'classGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.gt-sm',] },],
    'classGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.gt-md',] },],
    'classGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['class.gt-lg',] },],
};
//# sourceMappingURL=class.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/flex-align.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexAlignDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
var FlexAlignDirective = (function (_super) {
    __extends(FlexAlignDirective, _super);
    /* tslint:enable */
    function FlexAlignDirective(monitor, elRef, renderer) {
        return _super.call(this, monitor, elRef, renderer) || this;
    }
    Object.defineProperty(FlexAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignXs", {
        set: function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignSm", {
        set: function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignMd", {
        set: function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignLg", {
        set: function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignXl", {
        set: function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtSm", {
        set: function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtMd", {
        set: function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtLg", {
        set: function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtXl", {
        set: function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtXs", {
        set: function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtSm", {
        set: function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtMd", {
        set: function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtLg", {
        set: function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    FlexAlignDirective.prototype.ngOnChanges = function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexAlignDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('align', 'stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    FlexAlignDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("align") || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    FlexAlignDirective.prototype._buildCSS = function (align) {
        var css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    };
    return FlexAlignDirective;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseFxDirective */]));

FlexAlignDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: "\n  [fxFlexAlign],\n  [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md], [fxFlexAlign.lg], [fxFlexAlign.xl],\n  [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md], [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl],\n  [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm], [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n"
            },] },
];
/** @nocollapse */
FlexAlignDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
FlexAlignDirective.propDecorators = {
    'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign',] },],
    'alignXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.xs',] },],
    'alignSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.sm',] },],
    'alignMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.md',] },],
    'alignLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.lg',] },],
    'alignXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.xl',] },],
    'alignLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.lt-sm',] },],
    'alignLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.lt-md',] },],
    'alignLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.lt-lg',] },],
    'alignLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.lt-xl',] },],
    'alignGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.gt-xs',] },],
    'alignGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.gt-sm',] },],
    'alignGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.gt-md',] },],
    'alignGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexAlign.gt-lg',] },],
};
//# sourceMappingURL=flex-align.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/flex-fill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexFillDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



var FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
var FlexFillDirective = (function (_super) {
    __extends(FlexFillDirective, _super);
    function FlexFillDirective(monitor, elRef, renderer) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this.elRef = elRef;
        _this.renderer = renderer;
        _this._applyStyleToElement(FLEX_FILL_CSS);
        return _this;
    }
    return FlexFillDirective;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BaseFxDirective */]));

FlexFillDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxFill],\n  [fxFlexFill]\n" },] },
];
/** @nocollapse */
FlexFillDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
//# sourceMappingURL=flex-fill.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/flex-offset.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexOffsetDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
var FlexOffsetDirective = (function (_super) {
    __extends(FlexOffsetDirective, _super);
    /* tslint:enable */
    function FlexOffsetDirective(monitor, elRef, renderer) {
        return _super.call(this, monitor, elRef, renderer) || this;
    }
    Object.defineProperty(FlexOffsetDirective.prototype, "offset", {
        /* tslint:disable */
        set: function (val) { this._cacheInput('offset', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXs", {
        set: function (val) { this._cacheInput('offsetXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetSm", {
        set: function (val) { this._cacheInput('offsetSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetMd", {
        set: function (val) { this._cacheInput('offsetMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLg", {
        set: function (val) { this._cacheInput('offsetLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXl", {
        set: function (val) { this._cacheInput('offsetXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtSm", {
        set: function (val) { this._cacheInput('offsetLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtMd", {
        set: function (val) { this._cacheInput('offsetLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtLg", {
        set: function (val) { this._cacheInput('offsetLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtXl", {
        set: function (val) { this._cacheInput('offsetLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtXs", {
        set: function (val) { this._cacheInput('offsetGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtSm", {
        set: function (val) { this._cacheInput('offsetGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtMd", {
        set: function (val) { this._cacheInput('offsetGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtLg", {
        set: function (val) { this._cacheInput('offsetGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    FlexOffsetDirective.prototype.ngOnChanges = function (changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexOffsetDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('offset', 0, function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    FlexOffsetDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("offset") || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    FlexOffsetDirective.prototype._buildCSS = function (offset) {
        var isPercent = String(offset).indexOf('%') > -1;
        var isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(offset)) {
            offset = offset + '%';
        }
        return { 'margin-left': "" + offset };
    };
    return FlexOffsetDirective;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseFxDirective */]));

FlexOffsetDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxFlexOffset],\n  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],\n  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],\n  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n" },] },
];
/** @nocollapse */
FlexOffsetDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
FlexOffsetDirective.propDecorators = {
    'offset': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset',] },],
    'offsetXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.xs',] },],
    'offsetSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.sm',] },],
    'offsetMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.md',] },],
    'offsetLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.lg',] },],
    'offsetXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.xl',] },],
    'offsetLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.lt-sm',] },],
    'offsetLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.lt-md',] },],
    'offsetLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.lt-lg',] },],
    'offsetLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.lt-xl',] },],
    'offsetGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.gt-xs',] },],
    'offsetGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.gt-sm',] },],
    'offsetGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.gt-md',] },],
    'offsetGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOffset.gt-lg',] },],
};
//# sourceMappingURL=flex-offset.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/flex-order.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexOrderDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
var FlexOrderDirective = (function (_super) {
    __extends(FlexOrderDirective, _super);
    /* tslint:enable */
    function FlexOrderDirective(monitor, elRef, renderer) {
        return _super.call(this, monitor, elRef, renderer) || this;
    }
    Object.defineProperty(FlexOrderDirective.prototype, "order", {
        /* tslint:disable */
        set: function (val) { this._cacheInput('order', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXs", {
        set: function (val) { this._cacheInput('orderXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderSm", {
        set: function (val) { this._cacheInput('orderSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderMd", {
        set: function (val) { this._cacheInput('orderMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderLg", {
        set: function (val) { this._cacheInput('orderLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderXl", {
        set: function (val) { this._cacheInput('orderXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtXs", {
        set: function (val) { this._cacheInput('orderGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtSm", {
        set: function (val) { this._cacheInput('orderGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtMd", {
        set: function (val) { this._cacheInput('orderGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtLg", {
        set: function (val) { this._cacheInput('orderGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtSm", {
        set: function (val) { this._cacheInput('orderLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtMd", {
        set: function (val) { this._cacheInput('orderLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtLg", {
        set: function (val) { this._cacheInput('orderLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtXl", {
        set: function (val) { this._cacheInput('orderLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    FlexOrderDirective.prototype.ngOnChanges = function (changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexOrderDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('order', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    FlexOrderDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("order") || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    FlexOrderDirective.prototype._buildCSS = function (value) {
        value = parseInt(value, 10);
        return { order: isNaN(value) ? 0 : value };
    };
    return FlexOrderDirective;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseFxDirective */]));

FlexOrderDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxFlexOrder],\n  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],\n  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],\n  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n" },] },
];
/** @nocollapse */
FlexOrderDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
FlexOrderDirective.propDecorators = {
    'order': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder',] },],
    'orderXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.xs',] },],
    'orderSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.sm',] },],
    'orderMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.md',] },],
    'orderLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.lg',] },],
    'orderXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.xl',] },],
    'orderGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.gt-xs',] },],
    'orderGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.gt-sm',] },],
    'orderGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.gt-md',] },],
    'orderGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.gt-lg',] },],
    'orderLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.lt-sm',] },],
    'orderLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.lt-md',] },],
    'orderLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.lt-lg',] },],
    'orderLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlexOrder.lt-xl',] },],
};
//# sourceMappingURL=flex-order.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/flex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout__ = __webpack_require__("../../../flex-layout/flexbox/api/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_wrap__ = __webpack_require__("../../../flex-layout/flexbox/api/layout-wrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_basis_validator__ = __webpack_require__("../../../flex-layout/utils/basis-validator.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
var FlexDirective = (function (_super) {
    __extends(FlexDirective, _super);
    /* tslint:enable */
    // Explicitly @SkipSelf on LayoutDirective and LayoutWrapDirective because we want the
    // parent flex container for this flex item.
    function FlexDirective(monitor, elRef, renderer, _container, _wrap) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this._container = _container;
        _this._wrap = _wrap;
        /** The flex-direction of this element's flex container. Defaults to 'row'. */
        _this._layout = 'row';
        _this._cacheInput("flex", "");
        _this._cacheInput("shrink", 1);
        _this._cacheInput("grow", 1);
        if (_container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            _this._layoutWatcher = _container.layout$.subscribe(function (direction) {
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(direction);
            });
        }
        return _this;
    }
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        /* tslint:disable */
        set: function (val) { this._cacheInput("shrink", val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "grow", {
        set: function (val) { this._cacheInput("grow", val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flex", {
        set: function (val) { this._cacheInput("flex", val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexXs", {
        set: function (val) { this._cacheInput('flexXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexSm", {
        set: function (val) { this._cacheInput('flexSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexMd", {
        set: function (val) { this._cacheInput('flexMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexLg", {
        set: function (val) { this._cacheInput('flexLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexXl", {
        set: function (val) { this._cacheInput('flexXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexGtXs", {
        set: function (val) { this._cacheInput('flexGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexGtSm", {
        set: function (val) { this._cacheInput('flexGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexGtMd", {
        set: function (val) { this._cacheInput('flexGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexGtLg", {
        set: function (val) { this._cacheInput('flexGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexLtSm", {
        set: function (val) { this._cacheInput('flexLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexLtMd", {
        set: function (val) { this._cacheInput('flexLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexLtLg", {
        set: function (val) { this._cacheInput('flexLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexLtXl", {
        set: function (val) { this._cacheInput('flexLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    FlexDirective.prototype.ngOnChanges = function (changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._updateStyle();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('flex', '', function (changes) {
            _this._updateStyle(changes.value);
        });
        this._updateStyle();
    };
    FlexDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    FlexDirective.prototype._onLayoutChange = function (direction) {
        this._layout = direction || this._layout || "row";
        this._updateStyle();
    };
    FlexDirective.prototype._updateStyle = function (value) {
        var flexBasis = value || this._queryInput("flex") || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        var basis = String(flexBasis).replace(";", "");
        var parts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_basis_validator__["a" /* validateBasis */])(basis, this._queryInput("grow"), this._queryInput("shrink"));
        this._applyStyleToElement(this._validateValue.apply(this, parts));
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of "row"
     */
    FlexDirective.prototype._validateValue = function (grow, shrink, basis) {
        // The flex-direction of this element's flex container. Defaults to 'row'.
        var layout = this._getFlowDirection(this.parentElement, true);
        var direction = (layout.indexOf('column') > -1) ? 'column' : 'row';
        var css, isValue;
        grow = (grow == "0") ? 0 : grow;
        shrink = (shrink == "0") ? 0 : shrink;
        // flex-basis allows you to specify the initial/starting main-axis size of the element,
        // before anything else is computed. It can either be a percentage or an absolute value.
        // It is, however, not the breaking point for flex-grow/shrink properties
        //
        // flex-grow can be seen as this:
        //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
        //   1: (Default value). Stretch; will be the same size to all other flex items on
        //       the same row since they have a default value of 1.
        //   ≥2 (integer n): Stretch. Will be n times the size of other elements
        //      with 'flex-grow: 1' on the same row.
        // Use `null` to clear existing styles.
        var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(clearStyles, { 'flex': '1 1 0.000000001px' });
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(clearStyles, { 'flex': '0 1 auto' });
                break;
            case 'grow':
                css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(clearStyles, { 'flex': '1 1 100%' });
                break;
            case 'noshrink':
                shrink = 0;
                css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(clearStyles, { 'flex': '1 0 auto' });
                break;
            case 'auto':
                css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(clearStyles, { 'flex': grow + " " + shrink + " auto" });
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(clearStyles, { 'flex': '0 0 auto' });
                break;
            default:
                var hasCalc = String(basis).indexOf('calc') > -1;
                var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
                isValue = hasCalc ||
                    String(basis).indexOf('px') > -1 ||
                    String(basis).indexOf('em') > -1 ||
                    String(basis).indexOf('vw') > -1 ||
                    String(basis).indexOf('vh') > -1;
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(basis)) {
                    basis = basis + '%';
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // Set max-width = basis if using layout-wrap
                // tslint:disable-next-line:max-line-length
                // @see https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrappifl-flex-items
                css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(clearStyles, {
                    'flex': grow + " " + shrink + " " + ((isValue || this._wrap) ? basis : '100%'),
                });
                break;
        }
        var max = (direction === 'row') ? 'max-width' : 'max-height';
        var min = (direction === 'row') ? 'min-width' : 'min-height';
        var usingCalc = (String(basis).indexOf('calc') > -1) || (basis == 'auto');
        var isPx = String(basis).indexOf('px') > -1 || usingCalc;
        // make box inflexible when shrink and grow are both zero
        // should not set a min when the grow is zero
        // should not set a max when the shrink is zero
        var isFixed = !grow && !shrink;
        css[min] = (basis == '0%') ? 0 : isFixed || (isPx && grow) ? basis : null;
        css[max] = (basis == '0%') ? 0 : isFixed || (!usingCalc && shrink) ? basis : null;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(css, { 'box-sizing': 'border-box' });
    };
    Object.defineProperty(FlexDirective.prototype, "parentElement", {
        get: function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    return FlexDirective;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BaseFxDirective */]));

FlexDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxFlex],\n  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],\n  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],\n  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],\n"
            },] },
];
/** @nocollapse */
FlexDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__layout__["a" /* LayoutDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: __WEBPACK_IMPORTED_MODULE_5__layout_wrap__["a" /* LayoutWrapDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
]; };
FlexDirective.propDecorators = {
    'shrink': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShrink',] },],
    'grow': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxGrow',] },],
    'flex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex',] },],
    'flexXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.xs',] },],
    'flexSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.sm',] },],
    'flexMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.md',] },],
    'flexLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.lg',] },],
    'flexXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.xl',] },],
    'flexGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.gt-xs',] },],
    'flexGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.gt-sm',] },],
    'flexGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.gt-md',] },],
    'flexGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.gt-lg',] },],
    'flexLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.lt-sm',] },],
    'flexLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.lt-md',] },],
    'flexLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.lt-lg',] },],
    'flexLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxFlex.lt-xl',] },],
};
//# sourceMappingURL=flex.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/layout-align.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout__ = __webpack_require__("../../../flex-layout/flexbox/api/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_layout_validator__ = __webpack_require__("../../../flex-layout/utils/layout-validator.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutAlignDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 *  @see https://css-tricks.com/almanac/properties/j/justify-content/
 *  @see https://css-tricks.com/almanac/properties/a/align-items/
 *  @see https://css-tricks.com/almanac/properties/a/align-content/
 */
var LayoutAlignDirective = (function (_super) {
    __extends(LayoutAlignDirective, _super);
    /* tslint:enable */
    function LayoutAlignDirective(monitor, elRef, renderer, container) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this._layout = 'row'; // default flex-direction
        if (container) {
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXs", {
        set: function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignSm", {
        set: function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignMd", {
        set: function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLg", {
        set: function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXl", {
        set: function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtXs", {
        set: function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtSm", {
        set: function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtMd", {
        set: function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtLg", {
        set: function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtSm", {
        set: function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtMd", {
        set: function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtLg", {
        set: function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtXl", {
        set: function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    LayoutAlignDirective.prototype.ngOnChanges = function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutAlignDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('align', 'start stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    LayoutAlignDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    LayoutAlignDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("align") || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? "row" : this._layout);
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    LayoutAlignDirective.prototype._onLayoutChange = function (direction) {
        var _this = this;
        this._layout = (direction || '').toLowerCase();
        if (!__WEBPACK_IMPORTED_MODULE_5__utils_layout_validator__["b" /* LAYOUT_VALUES */].find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        var value = this._queryInput("align") || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || "row");
    };
    LayoutAlignDirective.prototype._buildCSS = function (align) {
        var css = {}, _a = align.split(' '), main_axis = _a[0], cross_axis = _a[1]; // tslint:disable-line:variable-name
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'stretch':
            default:
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_object_extend__["a" /* extendObject */])(css, {
            'display': 'flex',
            'flex-direction': this._layout || "row",
            'box-sizing': 'border-box'
        });
    };
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     */
    LayoutAlignDirective.prototype._allowStretching = function (align, layout) {
        var _a = align.split(' '), cross_axis = _a[1]; // tslint:disable-line:variable-name
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': (layout === 'column') ? '100%' : null,
                'max-height': (layout === 'row') ? '100%' : null
            });
        }
    };
    return LayoutAlignDirective;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BaseFxDirective */]));

LayoutAlignDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxLayoutAlign],\n  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],\n  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],\n  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n" },] },
];
/** @nocollapse */
LayoutAlignDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_4__layout__["a" /* LayoutDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
LayoutAlignDirective.propDecorators = {
    'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign',] },],
    'alignXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.xs',] },],
    'alignSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.sm',] },],
    'alignMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.md',] },],
    'alignLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.lg',] },],
    'alignXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.xl',] },],
    'alignGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.gt-xs',] },],
    'alignGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.gt-sm',] },],
    'alignGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.gt-md',] },],
    'alignGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.gt-lg',] },],
    'alignLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.lt-sm',] },],
    'alignLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.lt-md',] },],
    'alignLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.lt-lg',] },],
    'alignLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutAlign.lt-xl',] },],
};
//# sourceMappingURL=layout-align.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/layout-gap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("../../../flex-layout/flexbox/api/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_layout_validator__ = __webpack_require__("../../../flex-layout/utils/layout-validator.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutGapDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = (function (_super) {
    __extends(LayoutGapDirective, _super);
    /* tslint:enable */
    function LayoutGapDirective(monitor, elRef, renderer, container) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this._layout = 'row'; // default flex-direction
        if (container) {
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "gap", {
        /* tslint:disable */
        set: function (val) { this._cacheInput('gap', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXs", {
        set: function (val) { this._cacheInput('gapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapSm", {
        set: function (val) { this._cacheInput('gapSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapMd", {
        set: function (val) { this._cacheInput('gapMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLg", {
        set: function (val) { this._cacheInput('gapLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapXl", {
        set: function (val) { this._cacheInput('gapXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtXs", {
        set: function (val) { this._cacheInput('gapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtSm", {
        set: function (val) { this._cacheInput('gapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtMd", {
        set: function (val) { this._cacheInput('gapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtLg", {
        set: function (val) { this._cacheInput('gapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtSm", {
        set: function (val) { this._cacheInput('gapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtMd", {
        set: function (val) { this._cacheInput('gapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtLg", {
        set: function (val) { this._cacheInput('gapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtXl", {
        set: function (val) { this._cacheInput('gapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    LayoutGapDirective.prototype.ngOnChanges = function (changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutGapDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    LayoutGapDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     */
    LayoutGapDirective.prototype._watchContentChanges = function () {
        var _this = this;
        var onMutationCallback = function (mutations) {
            var validatedChanges = function (it) {
                return (it.addedNodes && it.addedNodes.length) ||
                    (it.removedNodes && it.removedNodes.length);
            };
            // update gap styles only for child 'added' or 'removed' events
            if (mutations.filter(validatedChanges).length) {
                _this._updateWithValue();
            }
        };
        this._observer = new MutationObserver(onMutationCallback);
        this._observer.observe(this._elementRef.nativeElement, { childList: true });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    LayoutGapDirective.prototype._onLayoutChange = function (direction) {
        var _this = this;
        this._layout = (direction || '').toLowerCase();
        if (!__WEBPACK_IMPORTED_MODULE_4__utils_layout_validator__["b" /* LAYOUT_VALUES */].find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    /**
     *
     */
    LayoutGapDirective.prototype._updateWithValue = function (value) {
        var _this = this;
        value = value || this._queryInput("gap") || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        // Gather all non-hidden Element nodes
        var items = this.childrenNodes
            .filter(function (el) { return el.nodeType === 1 && _this._getDisplayStyle(el) != "none"; });
        var numItems = items.length;
        if (numItems > 1) {
            var lastItem = items[numItems - 1];
            // For each `element` children EXCEPT the last,
            // set the margin right/bottom styles...
            items = items.filter(function (el, j) { return j < numItems - 1; });
            this._applyStyleToElements(this._buildCSS(value), items);
            // Clear all gaps for all visible elements
            this._applyStyleToElements(this._buildCSS(), [lastItem]);
        }
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     */
    LayoutGapDirective.prototype._buildCSS = function (value) {
        if (value === void 0) { value = null; }
        var key, margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
            case 'column-reverse':
                key = 'margin-bottom';
                break;
            case "row":
            case 'row-reverse':
            default:
                key = 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    };
    return LayoutGapDirective;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseFxDirective */]));

LayoutGapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxLayoutGap],\n  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],\n  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],\n  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n"
            },] },
];
/** @nocollapse */
LayoutGapDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__layout__["a" /* LayoutDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
LayoutGapDirective.propDecorators = {
    'gap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap',] },],
    'gapXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.xs',] },],
    'gapSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.sm',] },],
    'gapMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.md',] },],
    'gapLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.lg',] },],
    'gapXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.xl',] },],
    'gapGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.gt-xs',] },],
    'gapGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.gt-sm',] },],
    'gapGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.gt-md',] },],
    'gapGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.gt-lg',] },],
    'gapLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.lt-sm',] },],
    'gapLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.lt-md',] },],
    'gapLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.lt-lg',] },],
    'gapLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutGap.lt-xl',] },],
};
//# sourceMappingURL=layout-gap.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/layout-wrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("../../../flex-layout/flexbox/api/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_layout_validator__ = __webpack_require__("../../../flex-layout/utils/layout-validator.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutWrapDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @deprecated
 * This functionality is now part of the `fxLayout` API
 *
 * 'layout-wrap' flexbox styling directive
 * Defines wrapping of child elements in layout container
 * Optional values: reverse, wrap-reverse, none, nowrap, wrap (default)]
 *
 *
 * @see https://css-tricks.com/almanac/properties/f/flex-wrap/
 */
var LayoutWrapDirective = (function (_super) {
    __extends(LayoutWrapDirective, _super);
    /* tslint:enable */
    function LayoutWrapDirective(monitor, elRef, renderer, container) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this._layout = 'row'; // default flex-direction
        if (container) {
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutWrapDirective.prototype, "wrap", {
        /* tslint:disable */
        set: function (val) { this._cacheInput("wrap", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapXs", {
        set: function (val) { this._cacheInput('wrapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapSm", {
        set: function (val) { this._cacheInput('wrapSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapMd", {
        set: function (val) { this._cacheInput('wrapMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapLg", {
        set: function (val) { this._cacheInput('wrapLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapXl", {
        set: function (val) { this._cacheInput('wrapXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtXs", {
        set: function (val) { this._cacheInput('wrapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtSm", {
        set: function (val) { this._cacheInput('wrapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtMd", {
        set: function (val) { this._cacheInput('wrapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtLg", {
        set: function (val) { this._cacheInput('wrapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapLtSm", {
        set: function (val) { this._cacheInput('wrapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapLtMd", {
        set: function (val) { this._cacheInput('wrapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapLtLg", {
        set: function (val) { this._cacheInput('wrapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapLtXl", {
        set: function (val) { this._cacheInput('wrapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    LayoutWrapDirective.prototype.ngOnChanges = function (changes) {
        if (changes['wrap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutWrapDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('wrap', 'wrap', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    LayoutWrapDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    LayoutWrapDirective.prototype._onLayoutChange = function (direction) {
        var _this = this;
        this._layout = (direction || '').toLowerCase().replace('-reverse', '');
        if (!__WEBPACK_IMPORTED_MODULE_4__utils_layout_validator__["b" /* LAYOUT_VALUES */].find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    LayoutWrapDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("wrap");
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_layout_validator__["c" /* validateWrapValue */])(value || 'wrap');
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * Build the CSS that should be assigned to the element instance
     */
    LayoutWrapDirective.prototype._buildCSS = function (value) {
        return {
            'display': 'flex',
            'flex-wrap': value,
            'flex-direction': this.flowDirection
        };
    };
    Object.defineProperty(LayoutWrapDirective.prototype, "flowDirection", {
        get: function () {
            var _this = this;
            var computeFlowDirection = function () { return _this._getFlowDirection(_this._elementRef.nativeElement); };
            return this._layoutWatcher ? this._layout : computeFlowDirection();
        },
        enumerable: true,
        configurable: true
    });
    return LayoutWrapDirective;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseFxDirective */]));

LayoutWrapDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxLayoutWrap], [fxLayoutWrap.xs], [fxLayoutWrap.sm], [fxLayoutWrap.lg], [fxLayoutWrap.xl],\n  [fxLayoutWrap.gt-xs], [fxLayoutWrap.gt-sm], [fxLayoutWrap.gt-md], [fxLayoutWrap.gt-lg],\n  [fxLayoutWrap.lt-xs], [fxLayoutWrap.lt-sm], [fxLayoutWrap.lt-md], [fxLayoutWrap.lt-lg]\n" },] },
];
/** @nocollapse */
LayoutWrapDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__layout__["a" /* LayoutDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
LayoutWrapDirective.propDecorators = {
    'wrap': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap',] },],
    'wrapXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.xs',] },],
    'wrapSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.sm',] },],
    'wrapMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.md',] },],
    'wrapLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.lg',] },],
    'wrapXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.xl',] },],
    'wrapGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.gt-xs',] },],
    'wrapGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.gt-sm',] },],
    'wrapGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.gt-md',] },],
    'wrapGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.gt-lg',] },],
    'wrapLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.lt-sm',] },],
    'wrapLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.lt-md',] },],
    'wrapLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.lt-lg',] },],
    'wrapLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayoutWrap.lt-xl',] },],
};
//# sourceMappingURL=layout-wrap.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_layout_validator__ = __webpack_require__("../../../flex-layout/utils/layout-validator.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
var LayoutDirective = (function (_super) {
    __extends(LayoutDirective, _super);
    /* tslint:enable */
    /**
     *
     */
    function LayoutDirective(monitor, elRef, renderer) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this._announcer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("row");
        _this.layout$ = _this._announcer.asObservable();
        return _this;
    }
    Object.defineProperty(LayoutDirective.prototype, "layout", {
        /* tslint:disable */
        set: function (val) { this._cacheInput("layout", val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutXs", {
        set: function (val) { this._cacheInput('layoutXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutSm", {
        set: function (val) { this._cacheInput('layoutSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutMd", {
        set: function (val) { this._cacheInput('layoutMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutLg", {
        set: function (val) { this._cacheInput('layoutLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutXl", {
        set: function (val) { this._cacheInput('layoutXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutGtXs", {
        set: function (val) { this._cacheInput('layoutGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutGtSm", {
        set: function (val) { this._cacheInput('layoutGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutGtMd", {
        set: function (val) { this._cacheInput('layoutGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutGtLg", {
        set: function (val) { this._cacheInput('layoutGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutLtSm", {
        set: function (val) { this._cacheInput('layoutLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutLtMd", {
        set: function (val) { this._cacheInput('layoutLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutLtLg", {
        set: function (val) { this._cacheInput('layoutLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutLtXl", {
        set: function (val) { this._cacheInput('layoutLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     */
    LayoutDirective.prototype.ngOnChanges = function (changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('layout', 'row', function (changes) {
            _this._updateWithDirection(changes.value);
        });
        this._updateWithDirection();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     */
    LayoutDirective.prototype._updateWithDirection = function (value) {
        value = value || this._queryInput("layout") || 'row';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        // Update styles and announce to subscribers the *new* direction
        var css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_layout_validator__["a" /* buildLayoutCSS */])(value);
        this._applyStyleToElement(css);
        this._announcer.next(css['flex-direction']);
    };
    return LayoutDirective;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BaseFxDirective */]));

LayoutDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: "\n  [fxLayout],\n  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],\n  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],\n  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]\n" },] },
];
/** @nocollapse */
LayoutDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
LayoutDirective.propDecorators = {
    'layout': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout',] },],
    'layoutXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.xs',] },],
    'layoutSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.sm',] },],
    'layoutMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.md',] },],
    'layoutLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.lg',] },],
    'layoutXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.xl',] },],
    'layoutGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.gt-xs',] },],
    'layoutGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.gt-sm',] },],
    'layoutGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.gt-md',] },],
    'layoutGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.gt-lg',] },],
    'layoutLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.lt-sm',] },],
    'layoutLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.lt-md',] },],
    'layoutLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.lt-lg',] },],
    'layoutLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxLayout.lt-xl',] },],
};
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/show-hide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout__ = __webpack_require__("../../../flex-layout/flexbox/api/layout.js");
/* unused harmony export negativeOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




var FALSY = ['false', false, 0];
/**
 * For fxHide selectors, we invert the 'value'
 * and assign to the equivalent fxShow selector cache
 *  - When 'hide' === '' === true, do NOT show the element
 *  - When 'hide' === false or 0... we WILL show the element
 */
function negativeOf(hide) {
    return (hide === "") ? false :
        ((hide === "false") || (hide === 0)) ? true : !hide;
}
/**
 * 'show' Layout API directive
 *
 */
var ShowHideDirective = (function (_super) {
    __extends(ShowHideDirective, _super);
    /* tslint:enable */
    /**
     *
     */
    function ShowHideDirective(monitor, _layout, elRef, renderer) {
        var _this = _super.call(this, monitor, elRef, renderer) || this;
        _this._layout = _layout;
        _this.elRef = elRef;
        _this.renderer = renderer;
        _this._display = _this._getDisplayStyle(); // re-invoke override to use `this._layout`
        if (_layout) {
            /**
             * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
             * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
             */
            _this._layoutWatcher = _layout.layout$.subscribe(function () { return _this._updateWithValue(); });
        }
        return _this;
    }
    Object.defineProperty(ShowHideDirective.prototype, "show", {
        /* tslint:disable */
        set: function (val) { this._cacheInput("show", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXs", {
        set: function (val) { this._cacheInput('showXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showSm", {
        set: function (val) { this._cacheInput('showSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showMd", {
        set: function (val) { this._cacheInput('showMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showLg", {
        set: function (val) { this._cacheInput('showLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showXl", {
        set: function (val) { this._cacheInput('showXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showLtSm", {
        set: function (val) { this._cacheInput('showLtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showLtMd", {
        set: function (val) { this._cacheInput('showLtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showLtLg", {
        set: function (val) { this._cacheInput('showLtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showLtXl", {
        set: function (val) { this._cacheInput('showLtXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showGtXs", {
        set: function (val) { this._cacheInput('showGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showGtSm", {
        set: function (val) { this._cacheInput('showGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showGtMd", {
        set: function (val) { this._cacheInput('showGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "showGtLg", {
        set: function (val) { this._cacheInput('showGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hide", {
        set: function (val) { this._cacheInput("show", negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXs", {
        set: function (val) { this._cacheInput("showXs", negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideSm", {
        set: function (val) { this._cacheInput('showSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideMd", {
        set: function (val) { this._cacheInput('showMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideLg", {
        set: function (val) { this._cacheInput('showLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideXl", {
        set: function (val) { this._cacheInput('showXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideLtSm", {
        set: function (val) { this._cacheInput('showLtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideLtMd", {
        set: function (val) { this._cacheInput('showLtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideLtLg", {
        set: function (val) { this._cacheInput('showLtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideLtXl", {
        set: function (val) { this._cacheInput('showLtXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideGtXs", {
        set: function (val) { this._cacheInput('showGtXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideGtSm", {
        set: function (val) { this._cacheInput('showGtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideGtMd", {
        set: function (val) { this._cacheInput('showGtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowHideDirective.prototype, "hideGtLg", {
        set: function (val) { this._cacheInput('showGtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly defined.
     */
    ShowHideDirective.prototype._getDisplayStyle = function () {
        return this._layout ? "flex" : _super.prototype._getDisplayStyle.call(this);
    };
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     */
    ShowHideDirective.prototype.ngOnChanges = function (changes) {
        if (changes['show'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    ShowHideDirective.prototype.ngOnInit = function () {
        var _this = this;
        var value = this._getDefaultVal("show", true);
        // Build _mqActivation controller
        this._listenForMediaQueryChanges('show', value, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    ShowHideDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the visibility value and then update the host's inline display style */
    ShowHideDirective.prototype._updateWithValue = function (value) {
        value = value || this._getDefaultVal("show", true);
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        var shouldShow = this._validateTruthy(value);
        this._applyStyleToElement(this._buildCSS(shouldShow));
    };
    /** Build the CSS that should be assigned to the element instance */
    ShowHideDirective.prototype._buildCSS = function (show) {
        return { 'display': show ? this._display : 'none' };
    };
    /**  Validate the to be not FALSY */
    ShowHideDirective.prototype._validateTruthy = function (show) {
        return (FALSY.indexOf(show) == -1);
    };
    return ShowHideDirective;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* BaseFxDirective */]));

ShowHideDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: "\n  [fxShow],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n"
            },] },
];
/** @nocollapse */
ShowHideDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__layout__["a" /* LayoutDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
ShowHideDirective.propDecorators = {
    'show': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow',] },],
    'showXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.xs',] },],
    'showSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.sm',] },],
    'showMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.md',] },],
    'showLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.lg',] },],
    'showXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.xl',] },],
    'showLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.lt-sm',] },],
    'showLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.lt-md',] },],
    'showLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.lt-lg',] },],
    'showLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.lt-xl',] },],
    'showGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.gt-xs',] },],
    'showGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.gt-sm',] },],
    'showGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.gt-md',] },],
    'showGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxShow.gt-lg',] },],
    'hide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide',] },],
    'hideXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.xs',] },],
    'hideSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.sm',] },],
    'hideMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.md',] },],
    'hideLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.lg',] },],
    'hideXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.xl',] },],
    'hideLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.lt-sm',] },],
    'hideLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.lt-md',] },],
    'hideLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.lt-lg',] },],
    'hideLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.lt-xl',] },],
    'hideGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.gt-xs',] },],
    'hideGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.gt-sm',] },],
    'hideGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.gt-md',] },],
    'hideGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['fxHide.gt-lg',] },],
};
//# sourceMappingURL=show-hide.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/api/style.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_adapter__ = __webpack_require__("../../../flex-layout/flexbox/api/base-adapter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_query_breakpoints_break_point_registry__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-point-registry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_query_media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_style_transforms__ = __webpack_require__("../../../flex-layout/utils/style-transforms.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleDirective; });
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
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * Directive to add responsive support for ngStyle.
 *
 */
var StyleDirective = (function (_super) {
    __extends(StyleDirective, _super);
    /* tslint:enable */
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     */
    function StyleDirective(monitor, _bpRegistry, _sanitizer, _differs, _ngEl, _oldRenderer, _renderer) {
        var _this = 
        // TODO: this should use Renderer2 when the NgStyle signature is switched over to it.
        _super.call(this, _differs, _ngEl, _oldRenderer) || this;
        _this.monitor = monitor;
        _this._bpRegistry = _bpRegistry;
        _this._sanitizer = _sanitizer;
        // Build adapter, `cacheInput()` interceptor, and get current inline style if any
        _this._buildAdapter(monitor, _ngEl, _renderer);
        _this._base.cacheInput('style', _ngEl.nativeElement.getAttribute("style"), true);
        return _this;
    }
    Object.defineProperty(StyleDirective.prototype, "styleBase", {
        /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         */
        set: function (val) {
            this._base.cacheInput('style', val, true);
            this.ngStyle = this._base.inputMap['style'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXs", {
        /* tslint:disable */
        set: function (val) { this._base.cacheInput('styleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleSm", {
        set: function (val) { this._base.cacheInput('styleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleMd", {
        set: function (val) { this._base.cacheInput('styleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLg", {
        set: function (val) { this._base.cacheInput('styleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleXl", {
        set: function (val) { this._base.cacheInput('styleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtSm", {
        set: function (val) { this._base.cacheInput('styleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtMd", {
        set: function (val) { this._base.cacheInput('styleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtLg", {
        set: function (val) { this._base.cacheInput('styleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtXl", {
        set: function (val) { this._base.cacheInput('styleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtXs", {
        set: function (val) { this._base.cacheInput('styleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtSm", {
        set: function (val) { this._base.cacheInput('styleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtMd", {
        set: function (val) { this._base.cacheInput('styleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtLg", {
        set: function (val) { this._base.cacheInput('styleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleXs", {
        /** Deprecated selectors */
        set: function (val) { this._base.cacheInput('styleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "styleSm", {
        set: function (val) { this._base.cacheInput('styleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleMd", {
        set: function (val) { this._base.cacheInput('styleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLg", {
        set: function (val) { this._base.cacheInput('styleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleXl", {
        set: function (val) { this._base.cacheInput('styleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtSm", {
        set: function (val) { this._base.cacheInput('styleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtMd", {
        set: function (val) { this._base.cacheInput('styleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtLg", {
        set: function (val) { this._base.cacheInput('styleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleLtXl", {
        set: function (val) { this._base.cacheInput('styleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtXs", {
        set: function (val) { this._base.cacheInput('styleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtSm", {
        set: function (val) { this._base.cacheInput('styleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtMd", {
        set: function (val) { this._base.cacheInput('styleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(StyleDirective.prototype, "styleGtLg", {
        set: function (val) { this._base.cacheInput('styleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    ;
    // ******************************************************************
    // Lifecycle Hookks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    StyleDirective.prototype.ngOnChanges = function (changes) {
        if (this._base.activeKey in changes) {
            this._updateStyle();
        }
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    StyleDirective.prototype.ngDoCheck = function () {
        if (!this._base.hasMediaQueryListener) {
            this._configureMQListener();
        }
        _super.prototype.ngDoCheck.call(this);
    };
    StyleDirective.prototype.ngOnDestroy = function () {
        this._base.ngOnDestroy();
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
       * Build an mqActivation object that bridges
       * mql change events to onMediaQueryChange handlers
       */
    StyleDirective.prototype._configureMQListener = function () {
        var _this = this;
        this._base.listenForMediaQueryChanges('style', '', function (changes) {
            _this._updateStyle(changes.value);
            // trigger NgClass::_applyIterableChanges()
            _super.prototype.ngDoCheck.call(_this);
        });
    };
    // ************************************************************************
    // Private Internal Methods
    // ************************************************************************
    /**
     * Use the currently activated input property and assign to
     * `ngStyle` which does the style injections...
     */
    StyleDirective.prototype._updateStyle = function (value) {
        var style = value || this._base.queryInput("style") || '';
        if (this._base.mqActivation) {
            style = this._base.mqActivation.activatedInput;
        }
        // Delegate subsequent activity to the NgStyle logic
        this.ngStyle = style;
    };
    /**
     * Build MediaQuery Activation Adapter
     * This adapter manages listening to mediaQuery change events and identifying
     * which property value should be used for the style update
     */
    StyleDirective.prototype._buildAdapter = function (monitor, _ngEl, _renderer) {
        this._base = new __WEBPACK_IMPORTED_MODULE_2__base_adapter__["a" /* BaseFxDirectiveAdapter */]('style', monitor, _ngEl, _renderer);
        this._buildCacheInterceptor();
    };
    /**
     * Build intercept to convert raw strings to ngStyleMap
     */
    StyleDirective.prototype._buildCacheInterceptor = function () {
        var _this = this;
        var cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = function (key, source, cacheRaw, merge) {
            if (cacheRaw === void 0) { cacheRaw = false; }
            if (merge === void 0) { merge = true; }
            var styles = _this._buildStyleMap(source);
            if (merge) {
                styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_object_extend__["a" /* extendObject */])({}, _this._base.inputMap['style'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    StyleDirective.prototype._buildStyleMap = function (styles) {
        var _this = this;
        var sanitizer = function (val) {
            // Always safe-guard (aka sanitize) style property values
            return _this._sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].STYLE, val);
        };
        if (styles) {
            switch (__WEBPACK_IMPORTED_MODULE_7__utils_style_transforms__["a" /* ngStyleUtils */].getType(styles)) {
                case 'string': return __WEBPACK_IMPORTED_MODULE_7__utils_style_transforms__["a" /* ngStyleUtils */].buildMapFromList(__WEBPACK_IMPORTED_MODULE_7__utils_style_transforms__["a" /* ngStyleUtils */].buildRawList(styles), sanitizer);
                case 'array': return __WEBPACK_IMPORTED_MODULE_7__utils_style_transforms__["a" /* ngStyleUtils */].buildMapFromList(styles, sanitizer);
                case 'set': return __WEBPACK_IMPORTED_MODULE_7__utils_style_transforms__["a" /* ngStyleUtils */].buildMapFromSet(styles, sanitizer);
                default: return __WEBPACK_IMPORTED_MODULE_7__utils_style_transforms__["a" /* ngStyleUtils */].buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    };
    return StyleDirective;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* NgStyle */]));

StyleDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: "\n    [style.xs], [style.sm], [style.md], [style.lg], [style.xl],\n    [style.lt-sm], [style.lt-md], [style.lt-lg], [style.lt-xl],\n    [style.gt-xs], [style.gt-sm], [style.gt-md], [style.gt-lg],\n    [ngStyle],\n    [ngStyle.xs], [ngStyle.sm], [ngStyle.lg], [ngStyle.xl],\n    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n  "
            },] },
];
/** @nocollapse */
StyleDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__media_query_media_monitor__["a" /* MediaMonitor */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__media_query_breakpoints_break_point_registry__["a" /* BreakPointRegistry */], },
    { type: __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["d" /* DomSanitizer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["KeyValueDiffers"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
]; };
StyleDirective.propDecorators = {
    'styleBase': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle',] },],
    'ngStyleXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.xs',] },],
    'ngStyleSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.sm',] },],
    'ngStyleMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.md',] },],
    'ngStyleLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.lg',] },],
    'ngStyleXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.xl',] },],
    'ngStyleLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.lt-sm',] },],
    'ngStyleLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.lt-md',] },],
    'ngStyleLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.lt-lg',] },],
    'ngStyleLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.lt-xl',] },],
    'ngStyleGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.gt-xs',] },],
    'ngStyleGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.gt-sm',] },],
    'ngStyleGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.gt-md',] },],
    'ngStyleGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngStyle.gt-lg',] },],
    'styleXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.xs',] },],
    'styleSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.sm',] },],
    'styleMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.md',] },],
    'styleLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.lg',] },],
    'styleXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.xl',] },],
    'styleLtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.lt-sm',] },],
    'styleLtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.lt-md',] },],
    'styleLtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.lt-lg',] },],
    'styleLtXl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.lt-xl',] },],
    'styleGtXs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.gt-xs',] },],
    'styleGtSm': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.gt-sm',] },],
    'styleGtMd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.gt-md',] },],
    'styleGtLg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['style.gt-lg',] },],
};
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_base__ = __webpack_require__("../../../flex-layout/flexbox/api/base.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_base_adapter__ = __webpack_require__("../../../flex-layout/flexbox/api/base-adapter.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__responsive_responsive_activation__ = __webpack_require__("../../../flex-layout/flexbox/responsive/responsive-activation.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module__ = __webpack_require__("../../../flex-layout/flexbox/_module.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__module__["a"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../flex-layout/flexbox/responsive/responsive-activation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponsiveActivation; });



var KeyOptions = (function () {
    function KeyOptions(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
    return KeyOptions;
}());

/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
var ResponsiveActivation = (function () {
    /**
     * Constructor
     */
    function ResponsiveActivation(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._subscribers = this._configureChangeObservers();
    }
    Object.defineProperty(ResponsiveActivation.prototype, "mediaMonitor", {
        /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         */
        get: function () {
            return this._mediaMonitor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInputKey", {
        /**
         * Determine which directive @Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         */
        get: function () {
            return this._activatedInputKey || this._options.baseKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInput", {
        /**
         * Get the currently activated @Input value or the fallback default @Input value
         */
        get: function () {
            var key = this.activatedInputKey;
            return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fast validator for presence of attribute on the host element
     */
    ResponsiveActivation.prototype.hasKeyValue = function (key) {
        var value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    };
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     */
    ResponsiveActivation.prototype.destroy = function () {
        this._subscribers.forEach(function (link) {
            link.unsubscribe();
        });
        this._subscribers = [];
    };
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     */
    ResponsiveActivation.prototype._configureChangeObservers = function () {
        var _this = this;
        var subscriptions = [];
        this._buildRegistryMap().forEach(function (bp) {
            if (_this._keyInUse(bp.key)) {
                // Inject directive default property key name: to let onMediaChange() calls
                // know which property is being triggered...
                var buildChanges = function (change) {
                    change = change.clone();
                    change.property = _this._options.baseKey;
                    return change;
                };
                subscriptions.push(_this.mediaMonitor.observe(bp.alias)
                    .map(buildChanges)
                    .subscribe(function (change) {
                    _this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    };
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     */
    ResponsiveActivation.prototype._buildRegistryMap = function () {
        var _this = this;
        return this.mediaMonitor.breakpoints
            .map(function (bp) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_object_extend__["a" /* extendObject */])({}, bp, {
                baseKey: _this._options.baseKey,
                key: _this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            });
        })
            .filter(function (bp) { return _this._keyInUse(bp.key); });
    };
    /**
     * Synchronizes change notifications with the current mq-activated @Input and calculates the
     * mq-activated input value or the default value
     */
    ResponsiveActivation.prototype._onMonitorEvents = function (change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    };
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     */
    ResponsiveActivation.prototype._keyInUse = function (key) {
        return this._lookupKeyValue(key) !== undefined;
    };
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     */
    ResponsiveActivation.prototype._calculateActivatedValue = function (current) {
        var currentKey = this._options.baseKey + current.suffix; // e.g. suffix == 'GtSm',
        var newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? null : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    };
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     */
    ResponsiveActivation.prototype._validateInputKey = function (inputKey) {
        var _this = this;
        var items = this.mediaMonitor.activeOverlaps;
        var isMissingKey = function (key) { return !_this._keyInUse(key); };
        if (isMissingKey(inputKey)) {
            items.some(function (bp) {
                var key = _this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    };
    /**
     * Get the value (if any) for the directive instances @Input property (aka key)
     */
    ResponsiveActivation.prototype._lookupKeyValue = function (key) {
        return this._options.inputKeys[key];
    };
    return ResponsiveActivation;
}());

//# sourceMappingURL=responsive-activation.js.map

/***/ }),

/***/ "../../../flex-layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flexbox_index__ = __webpack_require__("../../../flex-layout/flexbox/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__flexbox_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_query_index__ = __webpack_require__("../../../flex-layout/media-query/index.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__("../../../flex-layout/utils/index.js");
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/_module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__match_media__ = __webpack_require__("../../../flex-layout/media-query/match-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observable_media_provider__ = __webpack_require__("../../../flex-layout/media-query/observable-media-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breakpoints_break_points_provider__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-points-provider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__breakpoints_break_point_registry__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-point-registry.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaQueriesModule; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var MediaQueriesModule = (function () {
    function MediaQueriesModule() {
    }
    return MediaQueriesModule;
}());

MediaQueriesModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                providers: [
                    __WEBPACK_IMPORTED_MODULE_4__breakpoints_break_points_provider__["a" /* DEFAULT_BREAKPOINTS_PROVIDER */],
                    __WEBPACK_IMPORTED_MODULE_5__breakpoints_break_point_registry__["a" /* BreakPointRegistry */],
                    __WEBPACK_IMPORTED_MODULE_1__match_media__["a" /* MatchMedia */],
                    __WEBPACK_IMPORTED_MODULE_2__media_monitor__["a" /* MediaMonitor */],
                    __WEBPACK_IMPORTED_MODULE_3__observable_media_provider__["a" /* OBSERVABLE_MEDIA_PROVIDER */] // easy subscription injectable `media$` matchMedia observable
                ]
            },] },
];
/** @nocollapse */
MediaQueriesModule.ctorParameters = function () { return []; };
//# sourceMappingURL=_module.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/breakpoints/break-point-registry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__break_points_token__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-points-token.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakPointRegistry; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overriden from custom, application-specific ranges
 *
 */
var BreakPointRegistry = (function () {
    function BreakPointRegistry(_registry) {
        this._registry = _registry;
    }
    Object.defineProperty(BreakPointRegistry.prototype, "items", {
        /**
         * Accessor to raw list
         */
        get: function () {
            return this._registry.slice();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    BreakPointRegistry.prototype.findByAlias = function (alias) {
        return this._registry.find(function (bp) { return bp.alias == alias; });
    };
    BreakPointRegistry.prototype.findByQuery = function (query) {
        return this._registry.find(function (bp) { return bp.mediaQuery == query; });
    };
    Object.defineProperty(BreakPointRegistry.prototype, "overlappings", {
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         */
        get: function () {
            return this._registry.filter(function (it) { return it.overlapping == true; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "aliases", {
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         */
        get: function () {
            return this._registry.map(function (it) { return it.alias; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "suffixes", {
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         */
        get: function () {
            return this._registry.map(function (it) { return it.suffix; });
        },
        enumerable: true,
        configurable: true
    });
    return BreakPointRegistry;
}());

BreakPointRegistry.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
BreakPointRegistry.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__break_points_token__["a" /* BREAKPOINTS */],] },] },
]; };
//# sourceMappingURL=break-point-registry.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/breakpoints/break-points-provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__break_points_token__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-points-token.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_break_points__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/data/break-points.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_orientation_break_points__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/data/orientation-break-points.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_breakpoint_tools__ = __webpack_require__("../../../flex-layout/utils/breakpoint-tools.js");
/* unused harmony export buildMergedBreakPoints */
/* unused harmony export DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_BREAKPOINTS_PROVIDER; });
/* harmony export (immutable) */ __webpack_exports__["b"] = CUSTOM_BREAKPOINTS_PROVIDER_FACTORY;





/**
 * Add new custom items to the default list or override existing default with custom overrides
 */
function buildMergedBreakPoints(_custom, options) {
    options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_object_extend__["a" /* extendObject */])({}, {
        defaults: true,
        orientation: false // exclude pre-configured, internal orientations breakpoints
    }, options || {});
    return function () {
        // Order so the defaults are loaded last; so ObservableMedia will report these last!
        var defaults = options.orientations ? __WEBPACK_IMPORTED_MODULE_2__data_orientation_break_points__["a" /* ORIENTATION_BREAKPOINTS */].concat(__WEBPACK_IMPORTED_MODULE_1__data_break_points__["a" /* DEFAULT_BREAKPOINTS */]) :
            __WEBPACK_IMPORTED_MODULE_1__data_break_points__["a" /* DEFAULT_BREAKPOINTS */];
        return options.defaults ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_breakpoint_tools__["a" /* mergeByAlias */])(defaults, _custom || []) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_breakpoint_tools__["a" /* mergeByAlias */])(_custom);
    };
}
/**
 *  Ensure that only a single global BreakPoint list is instantiated...
 */
function DEFAULT_BREAKPOINTS_PROVIDER_FACTORY() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_breakpoint_tools__["b" /* validateSuffixes */])(__WEBPACK_IMPORTED_MODULE_1__data_break_points__["a" /* DEFAULT_BREAKPOINTS */]);
}
/**
 * Default Provider that does not support external customization nor provide
 * the extra extended breakpoints:   "handset", "tablet", and "web"
 *
 *  NOTE: !! breakpoints are considered to have unique 'alias' properties,
 *        custom breakpoints matching existing breakpoints will override the properties
 *        of the existing (and not be added as an extra breakpoint entry).
 *        [xs, gt-xs, sm, gt-sm, md, gt-md, lg, gt-lg, xl]
 */
var DEFAULT_BREAKPOINTS_PROVIDER = {
    provide: __WEBPACK_IMPORTED_MODULE_0__break_points_token__["a" /* BREAKPOINTS */],
    useFactory: DEFAULT_BREAKPOINTS_PROVIDER_FACTORY
};
/**
 * Use with FlexLayoutModule.CUSTOM_BREAKPOINTS_PROVIDER_FACTORY!
 */
function CUSTOM_BREAKPOINTS_PROVIDER_FACTORY(_custom, options) {
    return {
        provide: __WEBPACK_IMPORTED_MODULE_0__break_points_token__["a" /* BREAKPOINTS */],
        useFactory: buildMergedBreakPoints(_custom, options)
    };
}
//# sourceMappingURL=break-points-provider.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/breakpoints/break-points-token.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BREAKPOINTS; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 */
var BREAKPOINTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints');
//# sourceMappingURL=break-points-token.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/breakpoints/data/break-points.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RESPONSIVE_ALIASES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_BREAKPOINTS; });
var RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
var DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: 'screen and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: 'screen and (min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: 'screen and (min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: 'screen and (max-width: 1920px)'
    },
    {
        alias: 'xl',
        mediaQuery: 'screen and (min-width: 1920px) and (max-width: 5000px)'
    }
];
//# sourceMappingURL=break-points.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/breakpoints/data/orientation-break-points.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScreenTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORIENTATION_BREAKPOINTS; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* tslint:disable */
var HANDSET_PORTRAIT = '(orientations: portrait) and (max-width: 599px)';
var HANDSET_LANDSCAPE = '(orientations: landscape) and (max-width: 959px)';
var TABLET_LANDSCAPE = '(orientations: landscape) and (min-width: 960px) and (max-width: 1279px)';
var TABLET_PORTRAIT = '(orientations: portrait) and (min-width: 600px) and (max-width: 839px)';
var WEB_PORTRAIT = '(orientations: portrait) and (min-width: 840px)';
var WEB_LANDSCAPE = '(orientations: landscape) and (min-width: 1280px)';
var ScreenTypes = {
    'HANDSET': HANDSET_PORTRAIT + ", " + HANDSET_LANDSCAPE,
    'TABLET': TABLET_PORTRAIT + " , " + TABLET_LANDSCAPE,
    'WEB': WEB_PORTRAIT + ", " + WEB_LANDSCAPE + " ",
    'HANDSET_PORTRAIT': "" + HANDSET_PORTRAIT,
    'TABLET_PORTRAIT': TABLET_PORTRAIT + " ",
    'WEB_PORTRAIT': "" + WEB_PORTRAIT,
    'HANDSET_LANDSCAPE': HANDSET_LANDSCAPE + "]",
    'TABLET_LANDSCAPE': "" + TABLET_LANDSCAPE,
    'WEB_LANDSCAPE': "" + WEB_LANDSCAPE
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 */
var ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];
//# sourceMappingURL=orientation-break-points.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breakpoints_data_break_points__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/data/break-points.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breakpoints_data_orientation_break_points__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/data/orientation-break-points.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breakpoints_break_points_token__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-points-token.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breakpoints_break_point_registry__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-point-registry.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable_media__ = __webpack_require__("../../../flex-layout/media-query/observable-media.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__match_media__ = __webpack_require__("../../../flex-layout/media-query/match-media.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_change__ = __webpack_require__("../../../flex-layout/media-query/media-change.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__breakpoints_break_points_provider__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-points-provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__observable_media_provider__ = __webpack_require__("../../../flex-layout/media-query/observable-media-provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_monitor_provider__ = __webpack_require__("../../../flex-layout/media-query/media-monitor-provider.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__module__ = __webpack_require__("../../../flex-layout/media-query/_module.js");
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/match-media.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__media_change__ = __webpack_require__("../../../flex-layout/media-query/media-change.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchMedia; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


// RxJS Operators used by the classes...



/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
var MatchMedia = (function () {
    function MatchMedia(_zone) {
        this._zone = _zone;
        this._registry = new Map();
        this._source = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_4__media_change__["a" /* MediaChange */](true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     */
    MatchMedia.prototype.isActive = function (mediaQuery) {
        if (this._registry.has(mediaQuery)) {
            var mql = this._registry.get(mediaQuery);
            return mql.matches;
        }
        return false;
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     */
    MatchMedia.prototype.observe = function (mediaQuery) {
        this.registerQuery(mediaQuery);
        return this._observable$.filter(function (change) {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        });
    };
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     */
    MatchMedia.prototype.registerQuery = function (mediaQuery) {
        var _this = this;
        if (mediaQuery) {
            var mql = this._registry.get(mediaQuery);
            var onMQLEvent = function (e) {
                _this._zone.run(function () {
                    var change = new __WEBPACK_IMPORTED_MODULE_4__media_change__["a" /* MediaChange */](e.matches, mediaQuery);
                    _this._source.next(change);
                });
            };
            if (!mql) {
                mql = this._buildMQL(mediaQuery);
                mql.addListener(onMQLEvent);
                this._registry.set(mediaQuery, mql);
            }
            if (mql.matches) {
                onMQLEvent(mql); // Announce activate range for initial subscribers
            }
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    MatchMedia.prototype._buildMQL = function (query) {
        prepareQueryCSS(query);
        var canListen = !!window.matchMedia('all').addListener;
        return canListen ? window.matchMedia(query) : {
            matches: query === 'all' || query === '',
            media: query,
            addListener: function () {
            },
            removeListener: function () {
            }
        };
    };
    return MatchMedia;
}());

MatchMedia.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MatchMedia.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 */
var ALL_STYLES = {};
/**
 * For Webkit engines that only trigger the MediaQueryListListener
 * when there is at least one CSS selector for the respective media query.
 *
 * @param query string The mediaQuery used to create a faux CSS selector
 *
 */
function prepareQueryCSS(query) {
    if (!ALL_STYLES[query]) {
        try {
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            if (!style['styleSheet']) {
                var cssText = "@media " + query + " {.fx-query-test{ }}";
                style.appendChild(document.createTextNode(cssText));
            }
            document.getElementsByTagName('head')[0].appendChild(style);
            // Store in private global registry
            ALL_STYLES[query] = style;
        }
        catch (e) {
            console.error(e);
        }
    }
}
//# sourceMappingURL=match-media.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/media-change.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaChange; });
/**
 * Class instances emitted [to observers] for each mql notification
 */
var MediaChange = (function () {
    function MediaChange(matches, // Is the mq currently activated
        mediaQuery, // e.g.   (min-width: 600px) and (max-width: 959px)
        mqAlias, // e.g.   gt-sm, md, gt-lg
        suffix // e.g.   GtSM, Md, GtLg
    ) {
        if (matches === void 0) { matches = false; }
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        if (mqAlias === void 0) { mqAlias = ''; }
        if (suffix === void 0) { suffix = ''; } // e.g.   GtSM, Md, GtLg
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix; // e.g.   GtSM, Md, GtLg
    }
    MediaChange.prototype.clone = function () {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    };
    return MediaChange;
}());

//# sourceMappingURL=media-change.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/media-monitor-provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_monitor__ = __webpack_require__("../../../flex-layout/media-query/media-monitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_media__ = __webpack_require__("../../../flex-layout/media-query/match-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breakpoints_break_point_registry__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-point-registry.js");
/* unused harmony export MEDIA_MONITOR_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MEDIA_MONITOR_PROVIDER; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * Ensure a single global service provider
 */
function MEDIA_MONITOR_PROVIDER_FACTORY(parentMonitor, breakpoints, matchMedia) {
    return parentMonitor || new __WEBPACK_IMPORTED_MODULE_1__media_monitor__["a" /* MediaMonitor */](breakpoints, matchMedia);
}
/**
 * Export provider that uses a global service factory (above)
 */
var MEDIA_MONITOR_PROVIDER = {
    provide: __WEBPACK_IMPORTED_MODULE_1__media_monitor__["a" /* MediaMonitor */],
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), __WEBPACK_IMPORTED_MODULE_1__media_monitor__["a" /* MediaMonitor */]],
        __WEBPACK_IMPORTED_MODULE_3__breakpoints_break_point_registry__["a" /* BreakPointRegistry */],
        __WEBPACK_IMPORTED_MODULE_2__match_media__["a" /* MatchMedia */],
    ],
    useFactory: MEDIA_MONITOR_PROVIDER_FACTORY
};
//# sourceMappingURL=media-monitor-provider.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/media-monitor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breakpoints_break_point_registry__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-point-registry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_media__ = __webpack_require__("../../../flex-layout/media-query/match-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_add_alias__ = __webpack_require__("../../../flex-layout/utils/add-alias.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaMonitor; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
var MediaMonitor = (function () {
    function MediaMonitor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    Object.defineProperty(MediaMonitor.prototype, "breakpoints", {
        /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         */
        get: function () {
            return this._breakpoints.items.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "activeOverlaps", {
        get: function () {
            var _this = this;
            var items = this._breakpoints.overlappings.reverse();
            return items.filter(function (bp) {
                return _this._matchMedia.isActive(bp.mediaQuery);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "active", {
        get: function () {
            var _this = this;
            var found = null, items = this.breakpoints.reverse();
            items.forEach(function (bp) {
                if (bp.alias !== '') {
                    if (!found && _this._matchMedia.isActive(bp.mediaQuery)) {
                        found = bp;
                    }
                }
            });
            var first = this.breakpoints[0];
            return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     */
    MediaMonitor.prototype.isActive = function (alias) {
        var bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     */
    MediaMonitor.prototype.observe = function (alias) {
        var bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        var hasAlias = function (change) { return (bp ? change.mqAlias !== "" : true); };
        // Note: the raw MediaChange events [from MatchMedia] do not contain important alias information
        return this._matchMedia
            .observe(bp ? bp.mediaQuery : alias)
            .map(function (change) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_add_alias__["a" /* mergeAlias */])(change, bp); })
            .filter(hasAlias);
    };
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     */
    MediaMonitor.prototype._registerBreakpoints = function () {
        var _this = this;
        this._breakpoints.items.forEach(function (bp) {
            _this._matchMedia.registerQuery(bp.mediaQuery);
        });
    };
    return MediaMonitor;
}());

MediaMonitor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MediaMonitor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__breakpoints_break_point_registry__["a" /* BreakPointRegistry */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__match_media__["a" /* MatchMedia */], },
]; };
//# sourceMappingURL=media-monitor.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/observable-media-provider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breakpoints_break_point_registry__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-point-registry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_media__ = __webpack_require__("../../../flex-layout/media-query/match-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observable_media__ = __webpack_require__("../../../flex-layout/media-query/observable-media.js");
/* unused harmony export OBSERVABLE_MEDIA_PROVIDER_FACTORY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OBSERVABLE_MEDIA_PROVIDER; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * Ensure a single global ObservableMedia service provider
 */
function OBSERVABLE_MEDIA_PROVIDER_FACTORY(parentService, matchMedia, breakpoints) {
    return parentService || new __WEBPACK_IMPORTED_MODULE_5__observable_media__["a" /* MediaService */](matchMedia, breakpoints);
}
/**
 *  Provider to return global service for observable service for all MediaQuery activations
 */
var OBSERVABLE_MEDIA_PROVIDER = {
    provide: __WEBPACK_IMPORTED_MODULE_5__observable_media__["b" /* ObservableMedia */],
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"](), __WEBPACK_IMPORTED_MODULE_5__observable_media__["b" /* ObservableMedia */]],
        __WEBPACK_IMPORTED_MODULE_4__match_media__["a" /* MatchMedia */],
        __WEBPACK_IMPORTED_MODULE_3__breakpoints_break_point_registry__["a" /* BreakPointRegistry */]
    ],
    useFactory: OBSERVABLE_MEDIA_PROVIDER_FACTORY
};
//# sourceMappingURL=observable-media-provider.js.map

/***/ }),

/***/ "../../../flex-layout/media-query/observable-media.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breakpoints_break_point_registry__ = __webpack_require__("../../../flex-layout/media-query/breakpoints/break-point-registry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_media__ = __webpack_require__("../../../flex-layout/media-query/match-media.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_add_alias__ = __webpack_require__("../../../flex-layout/utils/add-alias.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ObservableMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaService; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * Base class for MediaService and pseudo-token for
 */
var ObservableMedia = (function () {
    function ObservableMedia() {
    }
    return ObservableMedia;
}());

/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.

 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 *  @usage
 *
 *  // RxJS
 *  import 'rxjs/add/operator/filter';
 *  import { ObservableMedia } from '@angular/flex-layout';
 *
 *  @Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .filter((change:MediaChange) => true)   // silly noop filter
 *        .subscribe(onChange);
 *    }
 *  }
 */
var MediaService = (function () {
    function MediaService(mediaWatcher, breakpoints) {
        this.mediaWatcher = mediaWatcher;
        this.breakpoints = breakpoints;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this.observable$ = this._buildObservable();
        this._registerBreakPoints();
    }
    /**
     * Test if specified query/alias is active.
     */
    MediaService.prototype.isActive = function (alias) {
        var query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    };
    ;
    /**
     * Proxy to the Observable subscribe method
     */
    MediaService.prototype.subscribe = function (next, error, complete) {
        return this.observable$.subscribe(next, error, complete);
    };
    ;
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     */
    MediaService.prototype.asObservable = function () {
        return this.observable$;
    };
    // ************************************************
    // Internal Methods
    // ************************************************
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     */
    MediaService.prototype._registerBreakPoints = function () {
        var _this = this;
        this.breakpoints.items.forEach(function (bp) {
            _this.mediaWatcher.registerQuery(bp.mediaQuery);
            return bp;
        });
    };
    /**
     * Prepare internal observable
     * NOTE: the raw MediaChange events [from MatchMedia] do not contain important alias information
     * these must be injected into the MediaChange
     */
    MediaService.prototype._buildObservable = function () {
        var _this = this;
        var self = this;
        // Only pass/announce activations (not de-activations)
        // Inject associated (if any) alias information into the MediaChange event
        // Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
        var activationsOnly = function (change) {
            return change.matches === true;
        };
        var addAliasInformation = function (change) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_add_alias__["a" /* mergeAlias */])(change, _this._findByQuery(change.mediaQuery));
        };
        var excludeOverlaps = function (change) {
            var bp = _this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        return this.mediaWatcher.observe()
            .filter(activationsOnly)
            .map(addAliasInformation)
            .filter(excludeOverlaps);
    };
    /**
     * Breakpoint locator by alias
     */
    MediaService.prototype._findByAlias = function (alias) {
        return this.breakpoints.findByAlias(alias);
    };
    /**
     * Breakpoint locator by mediaQuery
     */
    MediaService.prototype._findByQuery = function (query) {
        return this.breakpoints.findByQuery(query);
    };
    ;
    /**
     * Find associated breakpoint (if any)
     */
    MediaService.prototype._toMediaQuery = function (query) {
        var bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    };
    ;
    return MediaService;
}());

MediaService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
MediaService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__match_media__["a" /* MatchMedia */], },
    { type: __WEBPACK_IMPORTED_MODULE_3__breakpoints_break_point_registry__["a" /* BreakPointRegistry */], },
]; };
//# sourceMappingURL=observable-media.js.map

/***/ }),

/***/ "../../../flex-layout/utils/add-alias.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeAlias;

/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 */
function mergeAlias(dest, source) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__object_extend__["a" /* extendObject */])(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}
//# sourceMappingURL=add-alias.js.map

/***/ }),

/***/ "../../../flex-layout/utils/auto-prefixer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyCssPrefixes;
/* unused harmony export toAlignContentValue */
/* unused harmony export toBoxValue */
/* unused harmony export toBoxOrient */
/* unused harmony export toBoxDirection */
/* unused harmony export toBoxOrdinal */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Applies CSS prefixes to appropriate style keys.*/
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ function applyCssPrefixes(target) {
    for (var key in target) {
        var value = target[key];
        switch (key) {
            case 'display':
                target['display'] = value;
                // also need 'display : -webkit-box' and 'display : -ms-flexbox;'
                break;
            case 'flex':
                target['-ms-flex'] = value;
                target['-webkit-box-flex'] = value.split(" ")[0];
                break;
            case 'flex-direction':
                value = value || "row";
                target['flex-direction'] = value;
                target['-ms-flex-direction'] = value;
                target['-webkit-box-orient'] = toBoxOrient(value);
                target['-webkit-box-direction'] = toBoxDirection(value);
                break;
            case 'flex-wrap':
                target['-ms-flex-wrap'] = value;
                break;
            case 'order':
                if (isNaN(value)) {
                    value = "0";
                }
                target['order'] = value;
                target['-ms-flex-order'] = value;
                target['-webkit-box-ordinal-group'] = toBoxOrdinal(value);
                break;
            case 'justify-content':
                target['-ms-flex-pack'] = toBoxValue(value);
                target['-webkit-box-pack'] = toBoxValue(value);
                break;
            case 'align-items':
                target['-ms-flex-align'] = toBoxValue(value);
                target['-webkit-box-align'] = toBoxValue(value);
                break;
            case 'align-self':
                target['-ms-flex-item-align'] = toBoxValue(value);
                break;
            case 'align-content':
                target['-ms-align-content'] = toAlignContentValue(value);
                target['-ms-flex-line-pack'] = toAlignContentValue(value);
                break;
        }
    }
    return target;
}
function toAlignContentValue(value) {
    switch (value) {
        case "space-between":
            return "justify";
        case "space-around":
            return "distribute";
        default:
            return toBoxValue(value);
    }
}
/** Convert flex values flex-start, flex-end to start, end. */
function toBoxValue(value) {
    if (value === void 0) { value = ""; }
    return (value == 'flex-start') ? 'start' : ((value == 'flex-end') ? 'end' : value);
}
/** Convert flex Direction to Box orientations */
function toBoxOrient(flexDirection) {
    if (flexDirection === void 0) { flexDirection = 'row'; }
    return flexDirection.indexOf('column') === -1 ? 'horizontal' : 'vertical';
}
/** Convert flex Direction to Box direction type */
function toBoxDirection(flexDirection) {
    if (flexDirection === void 0) { flexDirection = 'row'; }
    return flexDirection.indexOf('reverse') !== -1 ? 'reverse' : 'normal';
}
/** Convert flex order to Box ordinal group */
function toBoxOrdinal(order) {
    if (order === void 0) { order = '0'; }
    var value = order ? parseInt(order) + 1 : 1;
    return isNaN(value) ? "0" : value.toString();
}
//# sourceMappingURL=auto-prefixer.js.map

/***/ }),

/***/ "../../../flex-layout/utils/basis-validator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateBasis;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
* The flex API permits 3 or 1 parts of the value:
*    - `flex-grow flex-shrink flex-basis`, or
*    - `flex-basis`
*/
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ function validateBasis(basis, grow, shrink) {
    if (grow === void 0) { grow = "1"; }
    if (shrink === void 0) { shrink = "1"; }
    var parts = [grow, shrink, basis];
    var j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        var matches = basis.substr(0, j).trim().split(" ");
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        var matches = basis.split(" ");
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - "3 3 calc(15em + 20px)"
 *   - calc(100% / 7 * 2)
 *   - "calc(15em + 20px)"
 *   - "calc(15em+20px)"
 *   - "37px"
 *   = "43%"
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, "").replace(/[\/\*\+\-]/g, " $& ");
}
//# sourceMappingURL=basis-validator.js.map

/***/ }),

/***/ "../../../flex-layout/utils/breakpoint-tools.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* harmony export (immutable) */ __webpack_exports__["b"] = validateSuffixes;
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeByAlias;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ALIAS_DELIMITERS = /(\.|-|_)/g;
function firstUpperCase(part) {
    var first = part.length > 0 ? part.charAt(0) : "";
    var remainder = (part.length > 1) ? part.slice(1) : "";
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param name Text to UpperCamelCase
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, "|")
        .split("|")
        .map(firstUpperCase)
        .join("");
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 */
function validateSuffixes(list) {
    list.forEach(function (bp) {
        if (!bp.suffix || bp.suffix === "") {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = bp.overlapping || false; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 */
function mergeByAlias(defaults, custom) {
    if (custom === void 0) { custom = []; }
    var merged = defaults.map(function (bp) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__object_extend__["a" /* extendObject */])({}, bp); });
    var findByAlias = function (alias) { return merged.reduce(function (result, bp) {
        return result || ((bp.alias === alias) ? bp : null);
    }, null); };
    // Merge custom breakpoints
    custom.forEach(function (bp) {
        var target = findByAlias(bp.alias);
        if (target) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__object_extend__["a" /* extendObject */])(target, bp);
        }
        else {
            merged.push(bp);
        }
    });
    return validateSuffixes(merged);
}
//# sourceMappingURL=breakpoint-tools.js.map

/***/ }),

/***/ "../../../flex-layout/utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_alias__ = __webpack_require__("../../../flex-layout/utils/add-alias.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auto_prefixer__ = __webpack_require__("../../../flex-layout/utils/auto-prefixer.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basis_validator__ = __webpack_require__("../../../flex-layout/utils/basis-validator.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_validator__ = __webpack_require__("../../../flex-layout/utils/layout-validator.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breakpoint_tools__ = __webpack_require__("../../../flex-layout/utils/breakpoint-tools.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object_extend__ = __webpack_require__("../../../flex-layout/utils/object-extend.js");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_transforms__ = __webpack_require__("../../../flex-layout/utils/style-transforms.js");
/* unused harmony namespace reexport */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../flex-layout/utils/layout-validator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LAYOUT_VALUES; });
/* harmony export (immutable) */ __webpack_exports__["a"] = buildLayoutCSS;
/* harmony export (immutable) */ __webpack_exports__["c"] = validateWrapValue;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|"direction wrap" value and then update the host's inline flexbox styles
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1];
    return buildCSS(direction, wrap);
}
/**
  * Validate the value to be one of the acceptable value options
  * Use default fallback of "row"
  */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(" "), direction = _a[0], wrap = _a[1];
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    return [direction, validateWrapValue(wrap)];
}
/**
 * Convert layout-wrap="<value>" to expected flex-wrap style
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to "wrap"
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 */
function buildCSS(direction, wrap) {
    if (wrap === void 0) { wrap = null; }
    return {
        'display': 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}
//# sourceMappingURL=layout-validator.js.map

/***/ }),

/***/ "../../../flex-layout/utils/object-extend.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extendObject;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */ function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}
//# sourceMappingURL=object-extend.js.map

/***/ }),

/***/ "../../../flex-layout/utils/style-transforms.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NgStyleKeyValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ngStyleUtils; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * NgStyle allowed inputs
 */
var NgStyleKeyValue = (function () {
    function NgStyleKeyValue(key, value, noQuotes) {
        if (noQuotes === void 0) { noQuotes = true; }
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, "").trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, "").trim() : value.trim();
        this.value = this.value.replace(/;/, "");
    }
    return NgStyleKeyValue;
}());

/**
 * Transform Operators for @angular/flex-layout NgStyle Directive
 */
var ngStyleUtils = {
    getType: getType,
    buildRawList: buildRawList,
    buildMapFromList: buildMapFromList,
    buildMapFromSet: buildMapFromSet
};
function getType(target) {
    var what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 */
function buildRawList(source, delimiter) {
    if (delimiter === void 0) { delimiter = ";"; }
    return String(source)
        .trim()
        .split(delimiter)
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val !== ""; });
}
/**
 * Convert array of key:value strings to a iterable map object
 */
function buildMapFromList(styles, sanitize) {
    var sanitizeValue = function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(function (entry) { return !!entry; })
        .map(sanitizeValue)
        .reduce(keyValuesToMap, {});
}
;
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 */
function buildMapFromSet(source, sanitize) {
    var list = new Array();
    if (getType(source) == 'set') {
        source.forEach(function (entry) { return list.push(entry); });
    }
    else {
        Object.keys(source).forEach(function (key) {
            list.push(key + ":" + source[key]);
        });
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert "key:value" -> [key, value]
 */
function stringToKeyValue(it) {
    var _a = it.split(":"), key = _a[0], val = _a[1];
    return val ? new NgStyleKeyValue(key, val) : null;
}
;
/**
 * Convert [ [key,value] ] -> { key : value }
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}
//# sourceMappingURL=style-transforms.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map