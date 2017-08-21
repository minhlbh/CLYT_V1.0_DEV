webpackJsonp([14],{

/***/ "../../../../../src/app/Apps/Chuyenkhoa/Chuyenkhoa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window {\r\n    width: 100%;\r\n    padding: 45px 0 0 0;\r\n    background: #fff;\r\n    border-right: 1px solid #ccc;\r\n    position: relative !important;\r\n    display: block;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n\r\n.window.chuyenkhoa {\r\n    width: 970px;\r\n}\r\n\r\n.title-window {\r\n    width: 100%;\r\n    height: 44px;\r\n    background: #0f9cb3;\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 0 25px 0 55px;\r\n}\r\n\r\n.title-window .big-title {\r\n    font-size: 16px;\r\n    margin: 0;\r\n    font-weight: 600;\r\n    padding: 0;\r\n    line-height: 13px;\r\n    line-height: 43px;\r\n}\r\n\r\n.title-window .bt-close {\r\n    background: none;\r\n    position: absolute;\r\n    top:0;\r\n    right:0;\r\n    padding: 3px 6px;\r\n    border: none;\r\n    box-shadow: none;\r\n    transition: all 0.3s ease 0s;\r\n  }\r\n  \r\n  .title-window .bt-close:hover {\r\n  background: #ce352c;\r\n}\r\n\r\n.title-window .bt-close .glyphicon {\r\n    position: relative;\r\n    top: 1px;\r\n    display: inline-block;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.body {\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.content-wr {\r\n    position: relative;\r\n    height: calc(100vh - 85px);\r\n    overflow: hidden;\r\n    width: 100%;\r\n    float: left;\r\n    background: #fff;\r\n    padding-top: 34px;\r\n}\r\n\r\n.bt-bar {\r\n    border-bottom: 1px solid #eee;\r\n    width: 100%;\r\n    float: left;\r\n    padding: 0 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: #fff;\r\n    z-index: 10000;\r\n}\r\n\r\n.bt-features {\r\n    padding: 8px 10px 8px 33px;\r\n    float: left;\r\n    color: #333;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    position: relative;\r\n}\r\n\r\n.bt-bar .bt-features:hover {\r\n    text-decoration: none;\r\n    background: #f5f5f5;\r\n}\r\n\r\n.bt-bar .bt-features .icon {\r\n    font-size: 18px;\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 10px;\r\n}\r\n\r\n.content-left {\r\n    float: left;\r\n    width: 100%;\r\n    position: relative;\r\n    padding: 0 20px 25px 20px;\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .content-main {\r\n    width: 600px;\r\n    float: left;\r\n    overflow: auto;\r\n    height: 100%;\r\n    margin: 0;\r\n    padding-right: 20px;\r\n}\r\n\r\n.title {\r\n    width: 100%;\r\n    float: left;\r\n    border-bottom: 1px solid #eee;\r\n    position: relative;\r\n    padding-right: 25px;\r\n}\r\n\r\n.title h2 {\r\n    float: left;\r\n    margin-top: 10px;\r\n}\r\n.title a {\r\n    font-weight: 400;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 20px;\r\n}\r\n\r\n.title .glyphicon-pencil:before {\r\n    position: absolute;\r\n    right: 0;\r\n    top:5px;\r\n}\r\n\r\n.title-row {\r\n    width: 100%;\r\n    float: left;\r\n    padding: 20px 0 10px 0;\r\n}\r\n\r\n.title-row .text-light {\r\n    width: auto;\r\n    padding: 0;\r\n    margin: 0 10px 0 0;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    float: left;\r\n}\r\n\r\np {\r\n    margin: 0 0 10px;\r\n    font-weight: 400;\r\n}\r\n\r\n.content-right{\r\n    width: 310px;\r\n    float: right;\r\n     position: relative;\r\n    top: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.content-right .title h2{\r\n    font-size: 15px;\r\n    line-height: 22px;\r\n    font-weight: 600;\r\n    max-width: 225px;\r\n    margin-top:10px;\r\n    padding-top:11px;\r\n    min-height: 30px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n\r\n.list-left-wr {\r\n    width: 100%;\r\n    padding: 0;\r\n    background: #fff;\r\n    position: relative !important;\r\n    display: block;\r\n    height: calc(100vh - 85px);\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n\r\n.list {\r\n    height: 100%;\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.list li {\r\n    display: list-item;\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.list li a {\r\n    color: #323232;\r\n    padding: 8px 5px;\r\n    font-size: 14px;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n    min-height: 40px;\r\n    line-height: 25px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.list li a:hover {\r\n    background: #f5f5f5;\r\n}\r\n\r\n.list li a .delete {\r\nbackground: none;\r\nborder: none;\r\nposition: absolute;\r\nright: 5px;\r\ntop: 11px;\r\ncolor: #FF0033;\r\nfont-size: 16px;\r\n}\r\n\r\n.add-new {\r\n    width: 100%;\r\n    position: relative;\r\n    height: 30px;\r\n    float: left;\r\n}\r\n\r\n.add-new input {\r\n    padding: 0 30px 0 5px;\r\n    font-weight: 400;\r\n}\r\n\r\n.add-new button {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 6px;\r\n    background: none;\r\n    border:none;\r\n    font-size: 16px;\r\n    color: #00CDAC;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Chuyenkhoa/Chuyenkhoa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"window chuyenkhoa\">\r\n    <div class=\"title-window\">\r\n      <h3 class=\"big-title\">Răng - hàm - mặt</h3>\r\n      <button _ngcontent-c7=\"\" class=\"bt-close\">\r\n          <span _ngcontent-c7=\"\" aria-hidden=\"true\" class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n    </div>\r\n    <div class=\"body\">\r\n      <div class=\"content-wr\">\r\n        <div _ngcontent-c6=\"\" class=\"bt-bar\">\r\n          <a _ngcontent-c6=\"\" class=\"bt-features\" href=\"#\"><span _ngcontent-c6=\"\" class=\"fa fa-plus icon\"></span>Tạo mới</a>\r\n          <a _ngcontent-c6=\"\" class=\"bt-features\" href=\"#\"><span _ngcontent-c6=\"\" class=\"fa fa-flag icon\"></span>Report</a>\r\n          <a _ngcontent-c6=\"\" class=\"bt-features\" href=\"#\"><span _ngcontent-c6=\"\" class=\"fa fa-pencil-square icon\"></span>Set trạng thái</a>\r\n          <a _ngcontent-c6=\"\" class=\"bt-features\" href=\"#\"><span _ngcontent-c6=\"\" class=\"fa fa-history icon\"></span>Lịch sử sửa đổi</a>\r\n          <a _ngcontent-c6=\"\" class=\"bt-features\" href=\"#\"><span _ngcontent-c6=\"\" class=\"fa fa-star icon\"></span>Theo dõi</a>\r\n        </div>\r\n        <div class=\"content-left\">\r\n          <div style=\"width: 100%;float: left;overflow: auto;height: 100%;\">\r\n            <div class=\"content-main\">\r\n              <div class=\"title\">\r\n                <h2>Khoa răng - hàm - mặt</h2>\r\n                <a class=\"glyphicon glyphicon-pencil\" href=\"#\"></a>\r\n              </div>\r\n              \r\n  \r\n              <div>\r\n                <div _ngcontent-c6=\"\" class=\"title-row\">\r\n                  <h2 _ngcontent-c6=\"\" class=\"text-light\">Tổng quan</h2>\r\n                </div>\r\n                <dd _ngcontent-c6=\"\">\r\n                  <p>\r\n                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\r\n                    voluptatem sequi nesciunt.\r\n                  </p>\r\n                  <p>\r\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n                    </p>\r\n                  <p>\r\n                    - Ut enim ad minima veniam, quis nostrum exercitationem\r\n                  </p>\r\n                  <p>\r\n                    - Ut enim ad minima veniam, quis nostrum exercitationem\r\n                  </p>\r\n                  <p>\r\n                    - Ut enim ad minima veniam, quis nostrum exercitationem\r\n                  </p>\r\n                </dd>\r\n              </div>\r\n  \r\n              \r\n  \r\n            </div>\r\n  \r\n            <div class=\"content-right\">\r\n              <div class=\"title\">\r\n                <h2>Các bệnh răng - hàm - mặt</h2>\r\n                <a class=\"glyphicon glyphicon-pencil\" href=\"#\"></a>\r\n              </div>\r\n              <div class=\"add-new\">\r\n                <input class=\"add-new\" placeholder=\"Thêm bệnh mới\">\r\n                <button class=\"fa fa-fw  fa-plus\"></button>\r\n              </div>\r\n              <div class=\"list-left-wr\">\r\n                <ul class=\"scrollbar-custom list\">\r\n                  <li>\r\n                    <a href=\"#\">\r\n                      <span >Adenovirus</span>\r\n                      <button class=\"fa fa-fw  fa-trash-o delete\"></button>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\">\r\n                        <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"#\">\r\n                          <span >Adenovirus</span>\r\n                      </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Apps/Chuyenkhoa/Chuyenkhoa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChuyenkhoaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChuyenkhoaComponent = (function () {
    function ChuyenkhoaComponent(router, activatedroute) {
        this.router = router;
        this.activatedroute = activatedroute;
    }
    ChuyenkhoaComponent.prototype.ngOnInit = function () {
    };
    return ChuyenkhoaComponent;
}());
ChuyenkhoaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chuyenkhoa',
        template: __webpack_require__("../../../../../src/app/Apps/Chuyenkhoa/Chuyenkhoa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Chuyenkhoa/Chuyenkhoa.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], ChuyenkhoaComponent);

var _a, _b;
//# sourceMappingURL=Chuyenkhoa.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Chuyenkhoa/Chuyenkhoa.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Chuyenkhoa_component__ = __webpack_require__("../../../../../src/app/Apps/Chuyenkhoa/Chuyenkhoa.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuyenkhoaModule", function() { return ChuyenkhoaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routing = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__Chuyenkhoa_component__["a" /* ChuyenkhoaComponent */] },
];
var Routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routing);
var ChuyenkhoaModule = (function () {
    function ChuyenkhoaModule() {
    }
    return ChuyenkhoaModule;
}());
ChuyenkhoaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            Routing
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__Chuyenkhoa_component__["a" /* ChuyenkhoaComponent */]]
    })
], ChuyenkhoaModule);

//# sourceMappingURL=Chuyenkhoa.module.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map