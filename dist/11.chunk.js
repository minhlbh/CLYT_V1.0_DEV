webpackJsonp([11],{

/***/ "../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Apps/Frame/ChildFrame/ChildFrame.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"Prop\">\r\n<div class=\"fxs-block\" id=\"child\" [style.width]=\"Prop.Width+'px'\" style=\"height:100%\">\r\n    <app-window [name]=\"Prop.Title\" >\r\n        <iframe (load)=\"onLoadFrame()\" style=\"border:none\" width=\"100%\" height=\"100%\"  [src]=\"Prop.Link | safe: 'resourceUrl'\" frameborder=\"0\"></iframe>\r\n    </app-window>\r\n</div>\r\n</ng-container>\r\n"

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
    }
    ChildFrameComponent.prototype.ngOnInit = function () {
    };
    ChildFrameComponent.prototype.onLoadFrame = function () {
        console.log('load frame');
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

module.exports = "<ng-container *ngIf=\"winInfo\">\r\n    <div class=\"fxs-blade-content-container\" #scrollE>\r\n        <div class=\"fxs-block\" [style.width]=\"winInfo.DoRong+'px'\">\r\n            <!-- <button (click)=\"removeComponent()\">xoa</button> -->\r\n            <app-window [name]=\"winInfo.Ten\" [icon]=\"winInfo.IconText\" url=\"/apps\">\r\n                <iframe (load)=\"onLoadFrame()\"  class=\"fstyle\" style=\"border:none\" width=\"100%\" height=\"100%\" [src]=\"winInfo.LinkIFrame | safe: 'resourceUrl'\"\r\n                    #iframe></iframe>\r\n            </app-window>\r\n        </div>\r\n<!--\r\n        <ng-container>\r\n            <div class=\"fxs-block\" [style.width]=\"winInfo.DoRong+'px'\">\r\n                <app-window [name]=\"winInfo.Ten\" [icon]=\"winInfo.IconText\" url=\"/apps\">\r\n                    <app-ChildFrame></app-ChildFrame>\r\n                </app-window>\r\n            </div>\r\n            <div class=\"fxs-block\" [style.width]=\"winInfo.DoRong+'px'\">\r\n                <app-window [name]=\"winInfo.Ten\" [icon]=\"winInfo.IconText\" url=\"/apps\">\r\n                    <app-ChildFrame></app-ChildFrame>\r\n                </app-window>\r\n            </div>\r\n        </ng-container> -->\r\n        <ng-template #alertContainer></ng-template>\r\n        <div class=\"fxs-block\" style=\"background:white\" [style.width]=\"'300px'\"></div>\r\n    </div>\r\n</ng-container>\r\n"

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
        this.activatedroute.params.subscribe(function (pars) {
            _this.url = pars['route'];
            var menus = _this.settingService.getMenu();
            menus.forEach(function (m) {
                m.items.forEach(function (e) {
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
    };
    FrameComponent.prototype.ngAfterViewInit = function () {
    };
    FrameComponent.prototype.receiveMessage = function (event) {
        if (event.origin === 'http://api.truongkhoa.com') {
            // this.container.clear();
            // console.log(event);
            console.log(JSON.parse(event.data));
            var messData = JSON.parse(event.data);
            var componentFactory = null;
            var dyynamicComponent = null;
            // console.log(messData);
            this.removeComponent(messData.ManHinh);
            // idBenh
            if (messData.LoaiLenh === 'Chi tiết bệnh') {
                componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__Tracuubenh_chi_tiet_benh_chi_tiet_benh_component__["a" /* ChiTietBenhComponent */]);
                dyynamicComponent = this.container.createComponent(componentFactory).instance;
                dyynamicComponent.idBenh = messData.IdBenh;
                if (!messData.IdBenh) {
                    dyynamicComponent.idBenh = messData.TenBenh;
                }
            }
            else {
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
        // console.log(this.container);
        // this.container.forEach(element => {
        //     console.log(element);
        // });
        // this.container.length
        // this.container.clear();
        // const i = 3;
        // this.container.detach(i);
        // this.components.splice(i, 1);
        // console.log(this.container);
    };
    FrameComponent.prototype.onLoadFrame = function () {
        console.log('load');
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

/***/ })

});
//# sourceMappingURL=11.chunk.js.map