webpackJsonp([5],{

/***/ "../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fstyle {\r\n    height: 100%;\r\n    border: none;\r\n    padding: 10px 20px 25px 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"Prop\">\r\n    <div class=\"fxs-block\" id=\"child\" [style.width]=\"Prop.Width+'px'\" style=\"height:100%\">\r\n        <app-winframe [name]=\"Prop.Title\" [manhinh]=\"Prop.ManHinh\">\r\n            <div style=\"position:relative; width:100%; height:100%\" *ngIf=\"loadding\">\r\n                <div style=\"position:absolute; width:160px; height:30px; left: calc(50% - 80px); top:calc(50% - 30px);\">\r\n                    <img src=\"assets/66.gif\">\r\n                </div>\r\n            </div>\r\n            <iframe class=\"fstyle\" style=\"border:none\" width=\"100%\" height=\"100%\" [src]=\"Prop.Link | safe: 'resourceUrl'\" frameborder=\"0\"></iframe>\r\n        </app-winframe>\r\n    </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildFrameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildFrameComponent = (function () {
    function ChildFrameComponent() {
        var _this = this;
        this.loadding = true;
        window.addEventListener('message', function (e) {
            _this.receiveMessage(e);
        }, false);
    }
    ChildFrameComponent.prototype.ngOnInit = function () {
        this.loadding = true;
    };
    ChildFrameComponent.prototype.receiveMessage = function (event) {
        // console.log(event.origin);
        try {
            var messData = JSON.parse(event.data);
            if (messData.LoaiLenh === 'LoadFrame') {
                if (messData.TrangThai === 'EndLoad') {
                    this.loadding = false;
                }
            }
        }
        catch (e) { }
    };
    return ChildFrameComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('Prop'),
    __metadata("design:type", Object)
], ChildFrameComponent.prototype, "Prop", void 0);
ChildFrameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-childframe',
        template: __webpack_require__("../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChildFrameComponent);

//# sourceMappingURL=ChildFrame.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/Frame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fstyle {\r\n    height: 100%;\r\n    border: none;\r\n    padding: 10px 20px 25px 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/Frame.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"winInfo\">\r\n    <div class=\"fxs-blade-content-container\" #scrollE>\r\n        <div class=\"fxs-block\" [style.width]=\"winInfo.DoRong+'px'\">\r\n            <!-- <button (click)=\"removeComponent()\">xoa</button> -->\r\n            <app-window [name]=\"winInfo.Ten\" [icon]=\"winInfo.IconText\" url=\"/apps\">\r\n                <div style=\"position:relative; width:100%; height:100%\" *ngIf=\"loadding\">\r\n                    <div style=\"position:absolute; width:160px; height:30px; left: calc(50% - 80px); top:calc(50% - 30px);\">\r\n                        <img src=\"assets/66.gif\">\r\n                    </div>\r\n                </div>\r\n                <iframe  class=\"fstyle\" style=\"border:none\" width=\"100%\" height=\"100%\" [src]=\"winInfo.LinkIFrame | safe: 'resourceUrl'\"\r\n                    #iframe></iframe>\r\n            </app-window>\r\n        </div>\r\n<!--\r\n        <ng-container>\r\n            <div class=\"fxs-block\" [style.width]=\"winInfo.DoRong+'px'\">\r\n                <app-window [name]=\"winInfo.Ten\" [icon]=\"winInfo.IconText\" url=\"/apps\">\r\n                    <app-ChildFrame></app-ChildFrame>\r\n                </app-window>\r\n            </div>\r\n            <div class=\"fxs-block\" [style.width]=\"winInfo.DoRong+'px'\">\r\n                <app-window [name]=\"winInfo.Ten\" [icon]=\"winInfo.IconText\" url=\"/apps\">\r\n                    <app-ChildFrame></app-ChildFrame>\r\n                </app-window>\r\n            </div>\r\n        </ng-container> -->\r\n        <ng-template #alertContainer></ng-template>\r\n        <div class=\"fxs-block\" style=\"background:white\" [style.width]=\"'300px'\"></div>\r\n    </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/Frame.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChildFrame_ChildFrame_component__ = __webpack_require__("../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tracuubenh_chi_tiet_benh_chi_tiet_benh_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubenh/chi-tiet-benh/chi-tiet-benh.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FrameComponent = (function () {
    function FrameComponent(router, activatedroute, settingService, componentFactoryResolver, document) {
        var _this = this;
        this.router = router;
        this.activatedroute = activatedroute;
        this.settingService = settingService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.document = document;
        this.components = [];
        this.loadding = true;
        this.activatedroute.params.subscribe(function (pars) {
            _this.url = pars['route'];
            var menus = _this.settingService.getMenu();
            menus.forEach(function (m) {
                m.items.forEach(function (e) {
                    console.log(e);
                    if (e.url === _this.url) {
                        _this.winInfo = e;
                    }
                });
            });
        });
        window.addEventListener('message', function (e) {
            _this.receiveMessage(e);
        }, false);
    }
    FrameComponent.prototype.ngOnInit = function () {
        this.loadding = true;
    };
    FrameComponent.prototype.ngAfterViewInit = function () {
    };
    FrameComponent.prototype.receiveMessage = function (event) {
        // console.log(event.origin);
        try {
            var messData = JSON.parse(event.data);
            if (messData.LoaiLenh === 'CloseFrame') {
                this.removeComponent(messData.ManHinh);
            }
        }
        catch (e) {
        }
        if (event.origin === 'http://api.truongkhoa.com' || event.origin === 'http://admincloud.truongkhoa.com') {
            var messData = JSON.parse(event.data);
            var componentFactory = null;
            var dyynamicComponent = null;
            // idBenh
            if (messData.LoaiLenh === 'LoadFrame') {
                if (messData.TrangThai === 'EndLoad') {
                    this.loadding = false;
                }
            }
            else if (messData.LoaiLenh === 'Chi tiết bệnh') {
                this.removeComponent(messData.ManHinh);
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__Tracuubenh_chi_tiet_benh_chi_tiet_benh_component__["a" /* ChiTietBenhComponent */]);
                dyynamicComponent = this.container.createComponent(componentFactory).instance;
                dyynamicComponent.idBenh = messData.IdBenh;
                if (!messData.IdBenh) {
                    dyynamicComponent.idBenh = messData.TenBenh;
                }
            }
            else {
                this.removeComponent(messData.ManHinh);
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__ChildFrame_ChildFrame_component__["a" /* ChildFrameComponent */]);
                dyynamicComponent = this.container.createComponent(componentFactory).instance;
                dyynamicComponent.Prop = messData;
            }
            // this.container.remo;
            // this.container.createComponent(componentFactory);
            // this.components = [...this.components, dyynamicComponent];
            // this.myScrollContainer.nativeElement.scrollLeft = -10000;
            // window.document.body.scrollLeft = 1000;
            // console.log(this.myScrollContainer);
            // const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance(
            //     {
            //         document: this.document,
            //         scrollTarget: '#child',
            //         verticalScrolling: false
            //     });
            // this.pageScrollService.start(pageScrollInstance);
        }
    };
    FrameComponent.prototype.removeComponent = function (i) {
        if (i === 1) {
            this.container.clear();
        }
        else {
            for (i; i <= this.container.length; i++) {
                this.container.detach(i);
            }
        }
    };
    return FrameComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alertContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", Object)
], FrameComponent.prototype, "container", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollE'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], FrameComponent.prototype, "myScrollContainer", void 0);
FrameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-frame',
        template: __webpack_require__("../../../../../src/app/Apps/Frame/Frame.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Frame/Frame.component.css")]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _e || Object, Object])
], FrameComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=Frame.component.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/Frame.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Frame_component__ = __webpack_require__("../../../../../src/app/Apps/Frame/Frame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__ = __webpack_require__("../../../../../src/app/Share/Components/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ChildFrame_ChildFrame_component__ = __webpack_require__("../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tracuubenh_chi_tiet_benh_chi_tiet_benh_component__ = __webpack_require__("../../../../../src/app/Apps/Tracuubenh/chi-tiet-benh/chi-tiet-benh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Share_Services_benh_service__ = __webpack_require__("../../../../../src/app/Share/Services/benh.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Share_Services_forum_service__ = __webpack_require__("../../../../../src/app/Share/Services/forum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__winframe_winframe_component__ = __webpack_require__("../../../../../src/app/Apps/Frame/winframe/winframe.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameModule", function() { return FrameModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__Frame_component__["a" /* FrameComponent */]
    }
];
var Routing = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routing);
var FrameModule = (function () {
    function FrameModule() {
    }
    return FrameModule;
}());
FrameModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            Routing,
            __WEBPACK_IMPORTED_MODULE_4__Share_Components_share_module__["a" /* ShareModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__Frame_component__["a" /* FrameComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ChildFrame_ChildFrame_component__["a" /* ChildFrameComponent */],
            // ChiTietBenhComponent,
            __WEBPACK_IMPORTED_MODULE_9__winframe_winframe_component__["a" /* WinframeComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__Share_Services_benh_service__["a" /* BenhService */],
            __WEBPACK_IMPORTED_MODULE_8__Share_Services_forum_service__["a" /* ForumService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__ChildFrame_ChildFrame_component__["a" /* ChildFrameComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Tracuubenh_chi_tiet_benh_chi_tiet_benh_component__["a" /* ChiTietBenhComponent */]
        ]
    })
], FrameModule);

//# sourceMappingURL=Frame.module.js.map

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/winframe/winframe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".window {\r\n    width: 100%;\r\n    padding:45px 0 0 0;\r\n    background: #fff;\r\n    border-right: 1px solid #ccc;\r\n    position: relative !important;\r\n    display: block;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .window {\r\n      border-right: none;\r\n    }\r\n}\r\n\r\n.title-window {\r\n  width: 100%;\r\n  height: 44px;\r\n  background: #0f9cb3;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding:0 25px 0 55px;\r\n}\r\n\r\n\r\n.title-window .big-title {\r\n  font-size: 16px;\r\n  margin: 0;\r\n  font-weight: 600;\r\n  padding: 0;\r\n  line-height: 13px;\r\n  line-height: 43px;\r\n}\r\n\r\n.title-window .sub-title {\r\n  font-size: 11px;\r\n  color: #ccc;\r\n}\r\n\r\n.title-window .icon {\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 25px;\r\n    color: #fff;\r\n}\r\n\r\n.body {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.col-left-fixed ul li a .icon {\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 13px;\r\n    color: #fff;\r\n}\r\n\r\n/* button close */\r\n/* button close */\r\n/* button close */\r\n.bt-close {\r\n  background: none;\r\n  position: absolute;\r\n  top:0;\r\n  right:0;\r\n  padding: 3px 6px;\r\n  border: none;\r\n  box-shadow: none;\r\n  transition: all 0.2s ease 0s;\r\n}\r\n\r\n.bt-close:hover {\r\n  background: #ce352c;\r\n}\r\n\r\n.idea {\r\n    position: absolute;\r\n    right: 26px;\r\n    top: 0;\r\n}\r\n\r\n.idea a {\r\n    font-size: 14px;\r\n    background: none;\r\n    position: absolute;\r\n    top: 1px;\r\n    right: 1px;\r\n    width: 20px;\r\n    height: 20px;\r\n    line-height: 23px;\r\n    text-align: center;\r\n    transition: all 0.2s ease 0s;\r\n\r\n}\r\n\r\n.idea a .icon-idea {\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.idea a img {\r\n    width: 100%;\r\n    float: left;\r\n}\r\n.idea a img:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n}\r\n.idea a:hover .icon-idea {\r\n  color: #00CDAC;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/winframe/winframe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"window\" style=\"height:100%\">\r\n    <div class=\"title-window\" [ngStyle]=\"{'background': menuElements?.MauNhat}\">\r\n        <div style=\"display:flex; flex-direction: row;\">\r\n            <!-- <span class=\"icon\" *ngIf=\"icon\">\r\n                    <img src=\"{{icon}}\" aria-hidden=\"true\" style=\"width: 20px;\">\r\n            </span> -->\r\n            <div>\r\n                <h3 class=\"big-title\" style=\"cursor: default\">{{name}}</h3>\r\n            </div>\r\n\r\n            <div>\r\n                <button (click)=\"back()\" class=\"bt-close\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"body\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/winframe/winframe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__ = __webpack_require__("../../../../../src/app/Share/Services/setting.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinframeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WinframeComponent = (function () {
    function WinframeComponent(settingService) {
        this.settingService = settingService;
        this.menuElements = this.settingService.getConfig();
    }
    WinframeComponent.prototype.ngOnInit = function () {
    };
    WinframeComponent.prototype.back = function () {
        // console.log(this.name);
        // this.router.navigate([this.url]);
        // this.closeWin.emit(this.manhinh);
        window.postMessage(JSON.stringify({
            LoaiLenh: 'CloseFrame',
            ManHinh: this.manhinh
        }), '*');
    };
    return WinframeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WinframeComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WinframeComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WinframeComponent.prototype, "manhinh", void 0);
WinframeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-winframe',
        template: __webpack_require__("../../../../../src/app/Apps/Frame/winframe/winframe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Apps/Frame/winframe/winframe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Share_Services_setting_service__["a" /* SettingService */]) === "function" && _a || Object])
], WinframeComponent);

var _a;
//# sourceMappingURL=winframe.component.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map