webpackJsonp([0],{

/***/ "../../../../ng2-responsive/bootstrap/bootstrap-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var XL = (function (_super) {
    __extends(XL, _super);
    function XL(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xl';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XL.prototype, "xl", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XL;
}(index_1.RESPONSIVE_BASE));
XL.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[xl]'
            },] },
];
/** @nocollapse */
XL.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
XL.propDecorators = {
    'xl': [{ type: core_1.Input },],
};
exports.XL = XL;
var LG = (function (_super) {
    __extends(LG, _super);
    function LG(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'lg';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(LG.prototype, "lg", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return LG;
}(index_1.RESPONSIVE_BASE));
LG.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[lg]'
            },] },
];
/** @nocollapse */
LG.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
LG.propDecorators = {
    'lg': [{ type: core_1.Input },],
};
exports.LG = LG;
var MD = (function (_super) {
    __extends(MD, _super);
    function MD(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'md';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(MD.prototype, "md", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return MD;
}(index_1.RESPONSIVE_BASE));
MD.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[md]'
            },] },
];
/** @nocollapse */
MD.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
MD.propDecorators = {
    'md': [{ type: core_1.Input },],
};
exports.MD = MD;
var SM = (function (_super) {
    __extends(SM, _super);
    function SM(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'sm';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(SM.prototype, "sm", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return SM;
}(index_1.RESPONSIVE_BASE));
SM.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[sm]'
            },] },
];
/** @nocollapse */
SM.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
SM.propDecorators = {
    'sm': [{ type: core_1.Input },],
};
exports.SM = SM;
var XS = (function (_super) {
    __extends(XS, _super);
    function XS(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'xs';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(XS.prototype, "xs", {
        set: function (grid_state) {
            this.setGrid(this._state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return XS;
}(index_1.RESPONSIVE_BASE));
XS.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[xs]'
            },] },
];
/** @nocollapse */
XS.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
XS.propDecorators = {
    'xs': [{ type: core_1.Input },],
};
exports.XS = XS;
var ShowItBootstrap = (function (_super) {
    __extends(ShowItBootstrap, _super);
    function ShowItBootstrap(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBootstrap.prototype, "showItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBootstrap;
}(index_1.RESPONSIVE_BASE));
ShowItBootstrap.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItBootstrap]'
            },] },
];
/** @nocollapse */
ShowItBootstrap.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItBootstrap.propDecorators = {
    'showItBootstrap': [{ type: core_1.Input },],
};
exports.ShowItBootstrap = ShowItBootstrap;
var HideItBootstrap = (function (_super) {
    __extends(HideItBootstrap, _super);
    function HideItBootstrap(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBootstrap.prototype, "hideItBootstrap", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'bootstrap');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBootstrap;
}(index_1.RESPONSIVE_BASE));
HideItBootstrap.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItBootstrap]'
            },] },
];
/** @nocollapse */
HideItBootstrap.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItBootstrap.propDecorators = {
    'hideItBootstrap': [{ type: core_1.Input },],
};
exports.HideItBootstrap = HideItBootstrap;
var ResponsiveSizeInfo = (function () {
    function ResponsiveSizeInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.statechanges = new core_1.EventEmitter();
    }
    Object.defineProperty(ResponsiveSizeInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    ResponsiveSizeInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.elementoObservar.subscribe(this.updateData.bind(this));
    };
    ResponsiveSizeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    ResponsiveSizeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this._noRepeat, value);
        if (update) {
            this.statechanges.emit(value);
            this.cd.markForCheck();
        }
    };
    ResponsiveSizeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this._noRepeat = newValue;
            return true;
        }
    };
    return ResponsiveSizeInfo;
}());
ResponsiveSizeInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'responsiveSizeInfo',
                inputs: ['responsiveSizeInfo'],
                outputs: ['statechanges']
            },] },
];
/** @nocollapse */
ResponsiveSizeInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.ResponsiveSizeInfo = ResponsiveSizeInfo;
//# sourceMappingURL=bootstrap-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/bootstrap/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bootstrap_directives_1 = __webpack_require__("../../../../ng2-responsive/bootstrap/bootstrap-directives.js");
exports.XL = bootstrap_directives_1.XL;
exports.LG = bootstrap_directives_1.LG;
exports.MD = bootstrap_directives_1.MD;
exports.SM = bootstrap_directives_1.SM;
exports.XS = bootstrap_directives_1.XS;
exports.ShowItBootstrap = bootstrap_directives_1.ShowItBootstrap;
exports.HideItBootstrap = bootstrap_directives_1.HideItBootstrap;
exports.ResponsiveSizeInfo = bootstrap_directives_1.ResponsiveSizeInfo;
exports.BOOTSTRAP_DIRECTIVES = [
    bootstrap_directives_1.XL,
    bootstrap_directives_1.LG,
    bootstrap_directives_1.MD,
    bootstrap_directives_1.SM,
    bootstrap_directives_1.XS,
    bootstrap_directives_1.ShowItBootstrap,
    bootstrap_directives_1.HideItBootstrap,
    bootstrap_directives_1.ResponsiveSizeInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/browsers/browsers-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var IsChrome = (function (_super) {
    __extends(IsChrome, _super);
    function IsChrome(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'chrome';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsChrome.prototype, "isChrome", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsChrome;
}(index_1.RESPONSIVE_BASE));
IsChrome.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isChrome]'
            },] },
];
/** @nocollapse */
IsChrome.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsChrome.propDecorators = {
    'isChrome': [{ type: core_1.Input },],
};
exports.IsChrome = IsChrome;
var IsFirefox = (function (_super) {
    __extends(IsFirefox, _super);
    function IsFirefox(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'firefox';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsFirefox.prototype, "isFirefox", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsFirefox;
}(index_1.RESPONSIVE_BASE));
IsFirefox.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isFirefox]'
            },] },
];
/** @nocollapse */
IsFirefox.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsFirefox.propDecorators = {
    'isFirefox': [{ type: core_1.Input },],
};
exports.IsFirefox = IsFirefox;
var IsSafari = (function (_super) {
    __extends(IsSafari, _super);
    function IsSafari(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'safari';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsSafari.prototype, "isSafari", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsSafari;
}(index_1.RESPONSIVE_BASE));
IsSafari.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isSafari]'
            },] },
];
/** @nocollapse */
IsSafari.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsSafari.propDecorators = {
    'isSafari': [{ type: core_1.Input },],
};
exports.IsSafari = IsSafari;
var IsOpera = (function (_super) {
    __extends(IsOpera, _super);
    function IsOpera(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'opera';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsOpera.prototype, "isOpera", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsOpera;
}(index_1.RESPONSIVE_BASE));
IsOpera.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isOpera]'
            },] },
];
/** @nocollapse */
IsOpera.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsOpera.propDecorators = {
    'isOpera': [{ type: core_1.Input },],
};
exports.IsOpera = IsOpera;
var IsIE = (function (_super) {
    __extends(IsIE, _super);
    function IsIE(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE.prototype, "isIE", {
        set: function (grid_state) {
            this.setGrid(this._state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE;
}(index_1.RESPONSIVE_BASE));
IsIE.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE]'
            },] },
];
/** @nocollapse */
IsIE.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE.propDecorators = {
    'isIE': [{ type: core_1.Input },],
};
exports.IsIE = IsIE;
var ShowItBrowser = (function (_super) {
    __extends(ShowItBrowser, _super);
    function ShowItBrowser(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItBrowser.prototype, "showItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItBrowser;
}(index_1.RESPONSIVE_BASE));
ShowItBrowser.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItBrowser]'
            },] },
];
/** @nocollapse */
ShowItBrowser.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItBrowser.propDecorators = {
    'showItBrowser': [{ type: core_1.Input },],
};
exports.ShowItBrowser = ShowItBrowser;
var HideItBrowser = (function (_super) {
    __extends(HideItBrowser, _super);
    function HideItBrowser(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItBrowser.prototype, "hideItBrowser", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'browser');
        },
        enumerable: true,
        configurable: true
    });
    return HideItBrowser;
}(index_1.RESPONSIVE_BASE));
HideItBrowser.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItBrowser]',
                providers: [index_1.ResponsiveState]
            },] },
];
/** @nocollapse */
HideItBrowser.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItBrowser.propDecorators = {
    'hideItBrowser': [{ type: core_1.Input },],
};
exports.HideItBrowser = HideItBrowser;
var IsIE9 = (function (_super) {
    __extends(IsIE9, _super);
    function IsIE9(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 9';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE9.prototype, "isIE9", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE9;
}(index_1.RESPONSIVE_BASE));
IsIE9.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE9]'
            },] },
];
/** @nocollapse */
IsIE9.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE9.propDecorators = {
    'isIE9': [{ type: core_1.Input },],
};
exports.IsIE9 = IsIE9;
var IsIE10 = (function (_super) {
    __extends(IsIE10, _super);
    function IsIE10(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 10';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE10.prototype, "isIE10", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE10;
}(index_1.RESPONSIVE_BASE));
IsIE10.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE10]'
            },] },
];
/** @nocollapse */
IsIE10.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE10.propDecorators = {
    'isIE10': [{ type: core_1.Input },],
};
exports.IsIE10 = IsIE10;
var IsIE11 = (function (_super) {
    __extends(IsIE11, _super);
    function IsIE11(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 11';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE11.prototype, "isIE11", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE11;
}(index_1.RESPONSIVE_BASE));
IsIE11.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE11]'
            },] },
];
/** @nocollapse */
IsIE11.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE11.propDecorators = {
    'isIE11': [{ type: core_1.Input },],
};
exports.IsIE11 = IsIE11;
var IsIE12 = (function (_super) {
    __extends(IsIE12, _super);
    function IsIE12(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'ie 12';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIE12.prototype, "isIE12", {
        set: function (grid_state) {
            this.setGrid(this._state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return IsIE12;
}(index_1.RESPONSIVE_BASE));
IsIE12.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIE12]'
            },] },
];
/** @nocollapse */
IsIE12.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIE12.propDecorators = {
    'isIE12': [{ type: core_1.Input },],
};
exports.IsIE12 = IsIE12;
var ShowIEVersion = (function (_super) {
    __extends(ShowIEVersion, _super);
    function ShowIEVersion(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowIEVersion.prototype, "showIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return ShowIEVersion;
}(index_1.RESPONSIVE_BASE));
ShowIEVersion.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showIEVersion]'
            },] },
];
/** @nocollapse */
ShowIEVersion.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowIEVersion.propDecorators = {
    'showIEVersion': [{ type: core_1.Input },],
};
exports.ShowIEVersion = ShowIEVersion;
var HideIEVersion = (function (_super) {
    __extends(HideIEVersion, _super);
    function HideIEVersion(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideIEVersion.prototype, "hideIEVersion", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'ie');
        },
        enumerable: true,
        configurable: true
    });
    return HideIEVersion;
}(index_1.RESPONSIVE_BASE));
HideIEVersion.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideIEVersion]'
            },] },
];
/** @nocollapse */
HideIEVersion.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideIEVersion.propDecorators = {
    'hideIEVersion': [{ type: core_1.Input },],
};
exports.HideIEVersion = HideIEVersion;
var BrowserInfo = (function () {
    function BrowserInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.browser = new core_1.EventEmitter();
    }
    Object.defineProperty(BrowserInfo.prototype, "browserInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    BrowserInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    };
    BrowserInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BrowserInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.browser.emit(value);
            this.cd.markForCheck();
        }
    };
    BrowserInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return BrowserInfo;
}());
BrowserInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "browserInfo", inputs: ['browserInfo'], outputs: ['browser']
            },] },
];
/** @nocollapse */
BrowserInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.BrowserInfo = BrowserInfo;
var IeInfo = (function () {
    function IeInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.ieVersion = new core_1.EventEmitter();
    }
    Object.defineProperty(IeInfo.prototype, "ieInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    IeInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.browserObserver.subscribe(this.updateData.bind(this));
    };
    IeInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    IeInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.ieVersion.emit(value);
            this.cd.markForCheck();
        }
    };
    IeInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return IeInfo;
}());
IeInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "ieInfo", inputs: ['ieInfo'], outputs: ['ieVersion']
            },] },
];
/** @nocollapse */
IeInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.IeInfo = IeInfo;
//# sourceMappingURL=browsers-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/browsers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var browsers_directives_1 = __webpack_require__("../../../../ng2-responsive/browsers/browsers-directives.js");
exports.IsChrome = browsers_directives_1.IsChrome;
exports.IsFirefox = browsers_directives_1.IsFirefox;
exports.IsSafari = browsers_directives_1.IsSafari;
exports.IsOpera = browsers_directives_1.IsOpera;
exports.IsIE = browsers_directives_1.IsIE;
exports.IsIE9 = browsers_directives_1.IsIE9;
exports.IsIE10 = browsers_directives_1.IsIE10;
exports.IsIE11 = browsers_directives_1.IsIE11;
exports.IsIE12 = browsers_directives_1.IsIE12;
exports.ShowItBrowser = browsers_directives_1.ShowItBrowser;
exports.HideItBrowser = browsers_directives_1.HideItBrowser;
exports.ShowIEVersion = browsers_directives_1.ShowIEVersion;
exports.HideIEVersion = browsers_directives_1.HideIEVersion;
exports.IeInfo = browsers_directives_1.IeInfo;
exports.BrowserInfo = browsers_directives_1.BrowserInfo;
exports.BROWSER_DIRECTIVES = [
    browsers_directives_1.IsChrome,
    browsers_directives_1.IsFirefox,
    browsers_directives_1.IsSafari,
    browsers_directives_1.IsOpera,
    browsers_directives_1.IsIE,
    browsers_directives_1.IsIE9,
    browsers_directives_1.IsIE10,
    browsers_directives_1.IsIE11,
    browsers_directives_1.IsIE12,
    browsers_directives_1.ShowItBrowser,
    browsers_directives_1.HideItBrowser,
    browsers_directives_1.ShowIEVersion,
    browsers_directives_1.HideIEVersion,
    browsers_directives_1.IeInfo,
    browsers_directives_1.BrowserInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
__webpack_require__("../../../../rxjs/add/operator/share.js");
__webpack_require__("../../../../rxjs/add/operator/debounce.js");
var Rx_1 = __webpack_require__("../../../../rxjs/Rx.js");
var const_1 = __webpack_require__("../../../../ng2-responsive/config/const.js");
var ResponsiveConfigInterface = (function () {
    function ResponsiveConfigInterface() {
    }
    return ResponsiveConfigInterface;
}());
exports.ResponsiveConfigInterface = ResponsiveConfigInterface;
var ResponsiveConfig = (function () {
    function ResponsiveConfig(config) {
        this.config = {
            breakPoints: {
                xs: { max: 767 },
                sm: { min: 768, max: 991 },
                md: { min: 992, max: 1199 },
                lg: { min: 1200, max: 1599 },
                xl: { min: 1600 }
            },
            debounceTime: 100
        };
        if (!!config)
            this.config = config;
    }
    return ResponsiveConfig;
}());
ResponsiveConfig.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ResponsiveConfig.ctorParameters = function () { return [
    { type: ResponsiveConfigInterface, decorators: [{ type: core_1.Optional },] },
]; };
exports.ResponsiveConfig = ResponsiveConfig;
var ResponsiveState = (function () {
    function ResponsiveState(responsiveConfig) {
        var _this = this;
        this._windows = {};
        this._screenWidth = window.screen.width;
        this._screenHeight = window.screen.height;
        this._orientation = window.orientation;
        this._userAgent = window.navigator.userAgent.toLowerCase();
        this._window = window;
        this._vendor = window.navigator.vendor;
        this.registerWindow = function (rw) {
            if (rw.name && !_this._windows[rw.name]) {
                _this._windows[rw.name] = rw;
                window.dispatchEvent(new Event('resize'));
            }
        };
        this.unregisterWindow = function (rw) {
            for (var rwn in _this._windows) {
                if (_this._windows[rwn] === rw)
                    delete (_this._windows[rwn]);
            }
            window.dispatchEvent(new Event('resize'));
        };
        this.sizeObserver = function () {
            return _this._width = _this.getWidth('window');
        };
        this.sizeOperations = function () {
            _this._width = _this.getWidth('window');
            try {
                var breakpoints = _this._responsiveConfig.config.breakPoints;
                if (breakpoints.xl.min <= _this._width)
                    return 'xl';
                else if (breakpoints.lg.max >= _this._width && breakpoints.lg.min <= _this._width)
                    return 'lg';
                else if (breakpoints.md.max >= _this._width && breakpoints.md.min <= _this._width)
                    return 'md';
                else if (breakpoints.sm.max >= _this._width && breakpoints.sm.min <= _this._width)
                    return 'sm';
                else if (breakpoints.xs.max >= _this._width)
                    return 'xs';
            }
            catch (e) { }
            return null;
        };
        this.browserName = function () {
            try {
                if (const_1.REG_SORT_NAMES.WEBKIT[0].test(_this._userAgent) && const_1.REG_SORT_NAMES.CHROME.test(_this._userAgent) && !const_1.REG_BROWSERS.IE[2].test(_this._userAgent))
                    return 'chrome';
                else if (const_1.REG_SORT_NAMES.MOZILLA.test(_this._userAgent) && const_1.REG_BROWSERS.FIREFOX.test(_this._userAgent))
                    return 'firefox';
                else if (const_1.REG_BROWSERS.IE[0].test(_this._userAgent) || const_1.REG_BROWSERS.IE[1].test(_this._userAgent) || const_1.REG_BROWSERS.IE[2].test(_this._userAgent))
                    return 'ie';
                else if (const_1.REG_SORT_NAMES.SAFARI.test(_this._userAgent) && const_1.REG_SORT_NAMES.WEBKIT[1].test(_this._userAgent) && !const_1.REG_SORT_NAMES.CHROME.test(_this._userAgent))
                    return 'safari';
                else if (const_1.REG_BROWSERS.OPERA.test(_this._userAgent))
                    return 'opera';
                else if (const_1.REG_BROWSERS.SILK.test(_this._userAgent))
                    return 'silk';
                else if (const_1.REG_BROWSERS.YANDEX.test(_this._userAgent))
                    return 'yandex';
                else
                    return 'NA';
            }
            catch (e) { }
            return null;
        };
        this.ie_version_detect = function () {
            try {
                var msie = _this._userAgent.indexOf('msie ');
                if (const_1.REG_BROWSERS.IE[0].test(_this._userAgent)) {
                    var ie_version = parseInt(_this._userAgent.substring(msie + 5, _this._userAgent.indexOf('.', msie)), 10);
                    if (ie_version === 7)
                        return 'ie 7';
                    else if (ie_version === 8)
                        return 'ie 8';
                    else if (ie_version === 9)
                        return 'ie 9';
                    else if (ie_version == 10)
                        return 'ie 10';
                    return null;
                }
                var trident = _this._userAgent.indexOf('trident/');
                if (const_1.REG_BROWSERS.IE[1].test(_this._userAgent)) {
                    var rv = _this._userAgent.indexOf('rv:');
                    var ie_version = parseInt(_this._userAgent.substring(rv + 3, _this._userAgent.indexOf('.', rv)), 10);
                    if (ie_version == 11)
                        return 'ie 11';
                    return null;
                }
                var edge = _this._userAgent.indexOf('Edge/');
                if (const_1.REG_BROWSERS.IE[2].test(_this._userAgent))
                    return 'ie +12';
            }
            catch (e) { }
            return null;
        };
        this.pixel_ratio = function () {
            try {
                if (_this.test_Is_4k())
                    return '4k';
                else if (_this.getDevicePixelRatio() > 1)
                    return 'retina';
                else if (_this.getDevicePixelRatio() === 1)
                    return '1x';
                else
                    return null;
            }
            catch (e) { }
            return null;
        };
        this.device_detection = function () {
            try {
                if (_this.isMobile())
                    return 'mobile';
                else if (_this.isTablet())
                    return 'tablet';
                else if (_this.isSMART())
                    return 'smarttv';
                else if (_this.isDesktop())
                    return 'desktop';
            }
            catch (e) { }
            return null;
        };
        this.orientation_device = function () {
            try {
                if (_this.isMobile() || _this.isTablet()) {
                    if (window.innerHeight > window.innerWidth)
                        return 'portrait';
                    else
                        return 'landscape';
                }
                else if (_this.isSMART() || _this.isDesktop())
                    return 'landscape';
                else
                    return null;
            }
            catch (e) { }
            return null;
        };
        this.standard_devices = function () {
            try {
                if (const_1.REG_MOBILES.IPHONE.test(_this._userAgent))
                    return 'iphone';
                else if (const_1.REG_TABLETS.IPAD.test(_this._userAgent))
                    return 'ipad';
                else if (_this.isMobile() && const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                    return 'android mobile';
                else if (_this.isTablet() && const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                    return 'android tablet';
                else if (const_1.REG_MOBILES.WINDOWS_PHONE.test(_this._userAgent))
                    return 'windows phone';
            }
            catch (e) { }
            return null;
        };
        this.game_devices = function () {
            try {
                if (const_1.REG_GAME_DEVICES.PS4.test(_this._userAgent))
                    return 'Playstation 4';
                else if (const_1.REG_GAME_DEVICES.PS3.test(_this._userAgent))
                    return 'Playstation 3';
                else if (const_1.REG_GAME_DEVICES.XBOX_ONE.test(_this._userAgent))
                    return 'Xbox one';
                else if (const_1.REG_GAME_DEVICES.XBOX.test(_this._userAgent))
                    return 'Xbox';
                else if (const_1.REG_GAME_DEVICES.WII.test(_this._userAgent))
                    return 'Wii';
                else if (const_1.REG_GAME_DEVICES.WII_U.test(_this._userAgent))
                    return 'Wii U';
                else if (const_1.REG_GAME_DEVICES.NINTENDO_3DS.test(_this._userAgent))
                    return 'Nintendo 3DS';
                else if (const_1.REG_GAME_DEVICES.PS_VITA.test(_this._userAgent))
                    return 'Playstation Vita';
                else if (const_1.REG_GAME_DEVICES.PSP.test(_this._userAgent))
                    return 'PSP';
            }
            catch (e) { }
            return null;
        };
        this.smart_tv = function () {
            try {
                if (const_1.REG_SMARTS_TV.CHROMECAST.test(_this._userAgent))
                    return 'Chromecast';
                else if (const_1.REG_SMARTS_TV.APPLE_TV.test(_this._userAgent))
                    return 'Apple tv';
                else if (const_1.REG_SMARTS_TV.GOOGLE_TV.test(_this._userAgent))
                    return 'Google tv';
                else if (const_1.REG_GAME_DEVICES.XBOX_ONE.test(_this._userAgent))
                    return 'Xbox One';
                else if (const_1.REG_GAME_DEVICES.PS4.test(_this._userAgent))
                    return 'Playstation 4';
                else if (const_1.REG_SMARTS_TV.GENERIC_TV.test(_this._userAgent))
                    return 'Generic smartv';
            }
            catch (e) { }
            return null;
        };
        this.desktop = function () {
            try {
                if (_this.isDesktop()) {
                    if (const_1.REG_OS.WINDOWS.test(_this._userAgent))
                        return 'Windows';
                    else if (const_1.REG_OS.MAC_OS.test(_this._userAgent))
                        return 'Mac';
                    else if (const_1.REG_OS.LINUX.test(_this._userAgent))
                        return 'Linux';
                }
            }
            catch (e) { }
            return null;
        };
        this.tablet = function () {
            try {
                if (_this.isTablet()) {
                    if (const_1.REG_TABLETS.IPAD.test(_this._userAgent))
                        return 'Ipad';
                    else if (const_1.REG_TABLETS.TABLET.test(_this._userAgent) && const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                        return 'Android';
                    else if (const_1.REG_TABLETS.KINDLE.test(_this._userAgent))
                        return 'Kindle';
                    else if (const_1.REG_TABLETS.TABLET.test(_this._userAgent))
                        return 'Generic Tablet';
                }
            }
            catch (e) { }
            return null;
        };
        this.mobile = function () {
            try {
                if (_this.isMobile()) {
                    if (const_1.REG_MOBILES.IPHONE.test(_this._userAgent))
                        return 'Iphone';
                    else if (const_1.REG_MOBILES.ANDROID.test(_this._userAgent))
                        return 'Android';
                    else if (const_1.REG_MOBILES.WINDOWS_PHONE.test(_this._userAgent))
                        return 'Windows Phone';
                    else if (const_1.REG_MOBILES.BLACKBERRY.test(_this._userAgent) || const_1.REG_MOBILES.BB10.test(_this._userAgent))
                        return 'Blackberry';
                    else
                        return 'Generic Mobile';
                }
            }
            catch (e) { }
            return null;
        };
        this.windows = function () {
            try {
                if (_this.isDesktop() && _this.isWindows()) {
                    if (const_1.WINDOWS_OS_VERSION.WINDOWS_XP.test(_this._userAgent))
                        return 'Windows XP';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_VISTA.test(_this._userAgent))
                        return 'Windows Vista';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_7.test(_this._userAgent))
                        return 'Windows 7';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_8.test(_this._userAgent) || const_1.WINDOWS_OS_VERSION.WINDOWS_8_1.test(_this._userAgent))
                        return 'Windows 8';
                    else if (const_1.WINDOWS_OS_VERSION.WINDOWS_10.test(_this._userAgent))
                        return 'Windows 10';
                    else
                        return 'Generic Windows';
                }
            }
            catch (e) { }
            return null;
        };
        this.linux = function () {
            try {
                if (_this.isDesktop() && _this.isLinux()) {
                    if (const_1.LINUX_OS.DEBIAN.test(_this._userAgent))
                        return 'Debian';
                    else if (const_1.LINUX_OS.KNOPPIX.test(_this._userAgent))
                        return 'Knoppix';
                    else if (const_1.LINUX_OS.MINT.test(_this._userAgent))
                        return 'Mint';
                    else if (const_1.LINUX_OS.UBUNTU.test(_this._userAgent))
                        return 'Ubuntu';
                    else if (const_1.LINUX_OS.KUBUNTU.test(_this._userAgent))
                        return 'Kubuntu';
                    else if (const_1.LINUX_OS.XUBUNTU.test(_this._userAgent))
                        return 'Xubuntu';
                    else if (const_1.LINUX_OS.LUBUNTU.test(_this._userAgent))
                        return 'Lubuntu';
                    else if (const_1.LINUX_OS.FEDORA.test(_this._userAgent))
                        return 'Fedora';
                    else if (const_1.LINUX_OS.RED_HAT.test(_this._userAgent))
                        return 'Red hat';
                    else if (const_1.LINUX_OS.MANDRIVA.test(_this._userAgent))
                        return 'Mandriva';
                    else if (const_1.LINUX_OS.GENTOO.test(_this._userAgent))
                        return 'Gentoo';
                    else if (const_1.LINUX_OS.SABAYON.test(_this._userAgent))
                        return 'Sabayon';
                    else if (const_1.LINUX_OS.SLACKWARE.test(_this._userAgent))
                        return 'Slackware';
                    else if (const_1.LINUX_OS.SUSE.test(_this._userAgent))
                        return 'Suse';
                    else if (const_1.LINUX_OS.CENT_OS.test(_this._userAgent))
                        return 'CentOS';
                    else if (const_1.LINUX_OS.BACKTRACK.test(_this._userAgent))
                        return 'Backtrack';
                    else
                        return 'Generic Linux';
                }
            }
            catch (e) { }
            return null;
        };
        this.userAgent_data = function () {
            var ie_version_name = '';
            var ie_version_state = false;
            var game_device_name = '';
            var smart_tv_name = '';
            var desktop_name = '';
            var tablet_name = '';
            var mobile_name = '';
            var windows_name = '';
            var linux_name = '';
            if (_this.ie_version_detect() != null) {
                ie_version_name = _this.ie_version_detect();
                ie_version_state = true;
            }
            if (_this.isGameDevice()) {
                game_device_name = _this.game_devices();
            }
            if (_this.isSMART()) {
                smart_tv_name = _this.smart_tv();
            }
            if (_this.isDesktop()) {
                desktop_name = _this.desktop();
            }
            if (_this.isTablet()) {
                tablet_name = _this.tablet();
            }
            if (_this.isMobile()) {
                mobile_name = _this.mobile();
            }
            if (_this.isWindows()) {
                windows_name = _this.windows();
            }
            if (_this.isLinux()) {
                linux_name = _this.linux();
            }
            return {
                device: _this.device_detection(),
                browser: _this.browserName(),
                pixelratio: _this.pixel_ratio(),
                ie_version: {
                    name: ie_version_name,
                    state: ie_version_state
                },
                game_device: {
                    name: game_device_name,
                    state: _this.isGameDevice()
                },
                smart_tv: {
                    name: smart_tv_name,
                    state: _this.isSMART()
                },
                desktop: {
                    name: desktop_name,
                    state: _this.isDesktop()
                },
                tablet: {
                    name: tablet_name,
                    state: _this.isTablet()
                },
                mobile: {
                    name: mobile_name,
                    state: _this.isMobile()
                },
                window_os: {
                    name: windows_name,
                    state: _this.isWindows()
                },
                linux_os: {
                    name: linux_name,
                    state: _this.isLinux()
                },
                bot: _this.isBot()
            };
        };
        this._responsiveConfig = !!responsiveConfig ? responsiveConfig : new ResponsiveConfig();
        var resize_observer = Rx_1.Observable
            .fromEvent(window, 'resize')
            .debounceTime(this._responsiveConfig.config.debounceTime)
            .defaultIfEmpty()
            .startWith(this.getWidth('window'));
        var pixel_ratio_observer = Rx_1.Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getDevicePixelRatio());
        var device_observer = Rx_1.Observable
            .fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.getUserAgent());
        var user_agent_observer = Rx_1.Observable.fromEvent(window, 'onload')
            .defaultIfEmpty()
            .startWith(this.userAgent_data());
        var orientation_observer = Rx_1.Observable
            .fromEvent(window, 'orientationchange')
            .defaultIfEmpty()
            .startWith(this.getOrientation());
        this.elementoObservar = resize_observer.map(this.sizeOperations);
        this.anchoObservar = resize_observer.map(this.sizeObserver);
        this.browserObserver = device_observer.map(this.browserName);
        this.pixelObserver = pixel_ratio_observer.map(this.pixel_ratio);
        this.deviceObserver = device_observer.map(this.device_detection);
        this.orientationObserver = orientation_observer.map(this.orientation_device);
        this.standardObserver = device_observer.map(this.standard_devices);
        this.ieVersionObserver = device_observer.map(this.ie_version_detect);
        this.userAgentObserver = user_agent_observer.map(this.userAgent_data);
    }
    ResponsiveState.prototype.getWidth = function (windowName) {
        if (windowName && this._windows[windowName])
            return this._windows[windowName].getWidth();
        else
            return window.innerWidth;
    };
    ResponsiveState.prototype.test_Is_4k = function () {
        return ((this._screenHeight < this._screenWidth) ? (this._screenWidth > 3839) : (this._screenHeight > 3839));
    };
    ResponsiveState.prototype.getDevicePixelRatio = function () {
        var ratio = 1;
        if (typeof window.screen.systemXDPI !== 'undefined' && typeof window.screen.logicalXDPI !== 'undefined' && window.screen.systemXDPI > window.screen.logicalXDPI)
            ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
        else if (typeof window.devicePixelRatio !== 'undefined')
            ratio = window.devicePixelRatio;
        return ratio;
    };
    ResponsiveState.prototype.isMobile = function () {
        if (const_1.REG_MOBILES.GENERIC_REG[0].test(this._userAgent) && this.isTablet() == false ||
            const_1.REG_MOBILES.GENERIC_REG[1].test(this._userAgent.substr(0, 4)) && this.isTablet() == false)
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isTablet = function () {
        if (const_1.REG_TABLETS.IPAD.test(this._userAgent) || const_1.REG_TABLETS.KINDLE.test(this._userAgent) || const_1.REG_TABLETS.PLAYBOOK[0].test(this._userAgent) || const_1.REG_TABLETS.PLAYBOOK[1].test(this._userAgent) || const_1.REG_TABLETS.TABLET.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isSMART = function () {
        if (const_1.REG_SMARTS_TV.GENERIC_TV.test(this._userAgent) || const_1.REG_SMARTS_TV.PS4.test(this._userAgent) || const_1.REG_SMARTS_TV.XBOX_ONE.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isDesktop = function () {
        if (!this.isMobile() || !this.isTablet() || !this.isSMART())
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isGameDevice = function () {
        if (const_1.REG_GAME_DEVICES.PS4.test(this._userAgent) || const_1.REG_GAME_DEVICES.PS3.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.XBOX.test(this._userAgent) || const_1.REG_GAME_DEVICES.XBOX_ONE.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.WII.test(this._userAgent) || const_1.REG_GAME_DEVICES.WII_U.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.NINTENDO_3DS.test(this._userAgent) || const_1.REG_GAME_DEVICES.PS_VITA.test(this._userAgent)
            || const_1.REG_GAME_DEVICES.PSP.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isWindows = function () {
        if (const_1.REG_OS.WINDOWS.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isLinux = function () {
        if (const_1.REG_OS.LINUX.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.isBot = function () {
        if (const_1.REG_BOTS.GENERIC_BOT.test(this._userAgent))
            return true;
        else
            return false;
    };
    ResponsiveState.prototype.getUserAgent = function () {
        return window.navigator.userAgent.toLowerCase();
    };
    ResponsiveState.prototype.getOrientation = function () {
        return window.orientation;
    };
    return ResponsiveState;
}());
ResponsiveState.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ResponsiveState.ctorParameters = function () { return [
    { type: ResponsiveConfig, decorators: [{ type: core_1.Optional },] },
]; };
exports.ResponsiveState = ResponsiveState;
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/const.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL_INPUTS = {
    BOOTSTRAP: ['xs', 'sm', 'md', 'lg', 'xl'],
    DEVICES: ['mobile', 'tablet', 'smarttv', 'desktop'],
    STANDARD: ['iphone', 'ipad', 'android mobile', 'android tablet', 'windows phone'],
    ORIENTATION: ['portrait', 'landscape'],
    BROWSERS: ['chrome', 'firefox', 'ie', 'safari', 'opera'],
    PIXEL_RATIO: ['1x', 'retina', '4k'],
    IE_VERSIONS: ['ie 9', 'ie 10', 'ie 11', 'ie +12']
};
exports.REG_WEARABLES = {
    IWATCH: ''
};
exports.REG_MOBILES = {
    ANDROID: /(android);?[\s\/]+([\d.]+)?/,
    IPHONE: /(iphone\sos)\s([\d_]+)/,
    WINDOWS_PHONE: /windows phone ([\d.]+)/,
    BLACKBERRY: /(blackBerry).*version\/([\d.]+)/,
    BB10: /(bb10).*version\/([\d.]+)/,
    WEB_OS: /(webos|hpwos)[\s\/]([\d.]+)/,
    IPOD: /(ipod)(.*os\s([\d_]+))?/,
    FIREFOX_OS: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
    MOBI: /[^-]mobi/i,
    GENERIC_REG: [/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i]
};
exports.REG_TABLETS = {
    IPAD: /(ipad).*os\s([\d_]+)/,
    KINDLE: /kindle|silk|kfapw|kfarwi|kfaswi|kffowi|kfjw|kfmewi|kfot|kfsaw|kfsowi|kftbw|kfthw|kftt|wffowi/i,
    TABLET: /tablet/i,
    PLAYBOOK: [/rim\stablet/i, /playbook/i]
};
exports.REG_SMARTS_TV = {
    CHROMECAST: /crkey/i,
    APPLE_TV: /appletv/i,
    GOOGLE_TV: /(large screen)|googletv/i,
    PS4: /playstation 4/i,
    XBOX_ONE: /xbox one/i,
    GENERIC_TV: /tv|smarttv|googletv|crkey|Sharp|THOMSON|THOM|Panasonic|Philips|NETTV|Maple_2011|appletv|Humax|Ikea|Loewe|Medion|hbbtv|pov_tv|Airties|netcast.tv|OWB|Grundig|Arcelik/i
};
exports.REG_GAME_DEVICES = {
    PS4: /playstation 4/i,
    PS3: /playstation 3/i,
    XBOX: /xbox one/i,
    XBOX_ONE: /xbox/i,
    WII_U: /nintendo wiiu/i,
    WII: /nintendo wii/i,
    PS_VITA: /playstation vita/i,
    NINTENDO_3DS: /nintendo 3ds/i,
    PSP: /psp/i
};
exports.REG_BROWSERS = {
    CHROME: [/chrome\/([\d.]+)/, /crios\/([\d.]+)/],
    FIREFOX: /firefox|iceweasel|fxios/i,
    WEB_VIEW: /(iphone|ipod|ipad).*applewebkit(?!.*safari)/,
    SAFARI: /version\/([\d.]+)([^s](safari)|[^m]*(mobile)[^S]*(safari))/,
    OPERA: /opera|opr|opios/i,
    IE: [/msie/, /trident/, /edge/],
    MS_EDGE: /edge/,
    SILK: /silk/i,
    YANDEX: /yabrowser/i
};
exports.REG_OS = {
    WINDOWS: /win\d{2}|windows/,
    IOS: /(ipod|iphone|ipad)/i,
    MAC_OS: /macintosh/i,
    ANDROID: /android/i,
    LINUX: /linux/i,
    FIREFOX_OS: /\((?:mobile|tablet); rv:([\d.]+)\).*firefox\/[\d.]+/,
    CHROME_OS: /cros/,
    WINDOWS_PHONE: /windows phone/i
};
exports.REG_SORT_NAMES = {
    MOZILLA: /mozilla/,
    CHROME: /chrome/,
    WEBKIT: [/webkit/, /applewebkit/],
    SAFARI: /safari/
};
exports.WINDOWS_OS_VERSION = {
    WINDOWS_3_11: /win16/,
    WINDOWS_95: /(windows 95|win95|windows_95)/,
    WINDOWS_ME: /(win 9x 4.90|windows ME)/,
    WINDOWS_98: /(windows 98|win98)/,
    WINDOWS_CE: /windows ce/,
    WINDOWS_2000: /(windows nt 5.0|windows 2000)/,
    WINDOWS_XP: /(windows nt 5.1|windows xp)/,
    WINDOWS_SERVER_2003: /windows nt 5.2/,
    WINDOWS_VISTA: /windows nt 6.0|Windows Vista/,
    WINDOWS_7: /(windows 7|windows nt 6.1)/,
    WINDOWS_8_1: /(windows 8.1|windows nt 6.3)/,
    WINDOWS_8: /(windows 8|windows nt 6.2)/,
    WINDOWS_10: /(windows nt 10.0)/,
    WINDOWS_PHONE_7_5: /(windows phone os 7.5)/,
    WINDOWS_PHONE_8_1: /(windows phone 8.1)/,
    WINDOWS_PHONE_10: /(windows phone 10)/,
    WINDOWS_NT_4_0: /(windows nt 4.0|winnt4.0|winnt|windows nt)/
};
exports.MAC_OS_VERSION = {
    MAC_OS: ''
};
exports.LINUX_OS = {
    DEBIAN: /Debian/i,
    KNOPPIX: /Knoppix/i,
    MINT: /Mint/i,
    UBUNTU: /Ubuntu/i,
    KUBUNTU: /Kubuntu/i,
    XUBUNTU: /Xubuntu/i,
    LUBUNTU: /Lubuntu/i,
    FEDORA: /Fedora/i,
    RED_HAT: /Red Hat/i,
    MANDRIVA: /Mandriva/i,
    GENTOO: /Gentoo/i,
    SABAYON: /Sabayon/i,
    SLACKWARE: /Slackware/i,
    SUSE: /SUSE/i,
    CENT_OS: /CentOS/i,
    BACKTRACK: /BackTrack/i
};
exports.REG_BOTS = {
    GENERIC_BOT: /bot|googlebot|crawler|spider|robot|crawling/i
};
//# sourceMappingURL=const.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__("../../../../ng2-responsive/config/config.js");
exports.ResponsiveConfig = config_1.ResponsiveConfig;
exports.ResponsiveState = config_1.ResponsiveState;
exports.ResponsiveConfigInterface = config_1.ResponsiveConfigInterface;
var responsive_base_1 = __webpack_require__("../../../../ng2-responsive/config/responsive-base.js");
exports.RESPONSIVE_BASE = responsive_base_1.RESPONSIVE_BASE;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/config/responsive-base.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var RESPONSIVE_BASE = (function () {
    function RESPONSIVE_BASE(templateRef, viewContainer, _responsiveState, cd) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this._noRepeat = 0;
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.eventChanges = new core_1.EventEmitter();
    }
    RESPONSIVE_BASE.prototype.setGrid = function (grid_state, directive) {
        switch (directive) {
            case 'bootstrap':
                this.set_active_subscriptions.bootstrap = true;
                break;
            case 'device':
                this.set_active_subscriptions.device = true;
                break;
            case 'standard':
                this.set_active_subscriptions.standard = true;
                break;
            case 'orientation':
                this.set_active_subscriptions.orientation = true;
                break;
            case 'browser':
                this.set_active_subscriptions.browser = true;
                break;
            case 'pixelratio':
                this.set_active_subscriptions.pixelratio = true;
                break;
            case 'ie':
                this.set_active_subscriptions.ie = true;
                break;
            case 'sizes':
                this.set_active_subscriptions.sizes = true;
                break;
            default:
                null;
        }
        if (directive === 'sizes')
            this._sizes_grid_state = grid_state;
        else
            this._others_grid_state = (Array.isArray(grid_state) ? grid_state : [grid_state]);
        this._directive = directive;
    };
    RESPONSIVE_BASE.prototype.ngOnInit = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.device)
            this._subscription_Device = this._responsiveState.deviceObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateView.bind(this));
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateView.bind(this));
    };
    RESPONSIVE_BASE.prototype.ngOnDestroy = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap.unsubscribe();
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser.unsubscribe();
        if (this.set_active_subscriptions.device)
            this._subscription_Device.unsubscribe();
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio.unsubscribe();
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation.unsubscribe();
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard.unsubscribe();
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version.unsubscribe();
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes.unsubscribe();
    };
    RESPONSIVE_BASE.prototype.showHide = function (show) {
        if (!!show) {
            if (this._noRepeat === 0) {
                this._noRepeat = 1;
                this.eventChanges.emit(true);
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            }
        }
        else {
            this._noRepeat = 0;
            this.eventChanges.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    };
    RESPONSIVE_BASE.prototype.updateView = function (value) {
        var showBoolean = this._directive === 'sizes' ?
            !!((typeof this._sizes_grid_state.min === 'undefined' || value >= this._sizes_grid_state.min) &&
                (typeof this._sizes_grid_state.max === 'undefined' || value <= this._sizes_grid_state.max)) :
            !!this._others_grid_state && this._others_grid_state.indexOf(value) !== -1;
        this.showHide(!!this._showWhenTrue ? showBoolean : !showBoolean);
    };
    return RESPONSIVE_BASE;
}());
exports.RESPONSIVE_BASE = RESPONSIVE_BASE;
//# sourceMappingURL=responsive-base.js.map

/***/ }),

/***/ "../../../../ng2-responsive/custom-sizes/custom-sizes-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var ShowItSizes = (function (_super) {
    __extends(ShowItSizes, _super);
    function ShowItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItSizes.prototype, "showItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItSizes;
}(index_1.RESPONSIVE_BASE));
ShowItSizes.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItSizes]'
            },] },
];
/** @nocollapse */
ShowItSizes.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItSizes.propDecorators = {
    'showItSizes': [{ type: core_1.Input },],
};
exports.ShowItSizes = ShowItSizes;
var HideItSizes = (function (_super) {
    __extends(HideItSizes, _super);
    function HideItSizes(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItSizes.prototype, "hideItSizes", {
        set: function (_grid_state) {
            this.setGrid(_grid_state, 'sizes');
        },
        enumerable: true,
        configurable: true
    });
    return HideItSizes;
}(index_1.RESPONSIVE_BASE));
HideItSizes.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItSizes]'
            },] },
];
/** @nocollapse */
HideItSizes.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItSizes.propDecorators = {
    'hideItSizes': [{ type: core_1.Input },],
};
exports.HideItSizes = HideItSizes;
//# sourceMappingURL=custom-sizes-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/custom-sizes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var custom_sizes_directives_1 = __webpack_require__("../../../../ng2-responsive/custom-sizes/custom-sizes-directives.js");
exports.ShowItSizes = custom_sizes_directives_1.ShowItSizes;
exports.HideItSizes = custom_sizes_directives_1.HideItSizes;
exports.CUSTOMSIZES_DIRECTIVES = [
    custom_sizes_directives_1.ShowItSizes,
    custom_sizes_directives_1.HideItSizes
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/devices/devices-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var IsSmartTv = (function (_super) {
    __extends(IsSmartTv, _super);
    function IsSmartTv(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'smarttv';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsSmartTv.prototype, "isSmartTv", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsSmartTv;
}(index_1.RESPONSIVE_BASE));
IsSmartTv.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isSmartTv]'
            },] },
];
/** @nocollapse */
IsSmartTv.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsSmartTv.propDecorators = {
    'isSmartTv': [{ type: core_1.Input },],
};
exports.IsSmartTv = IsSmartTv;
var IsDesktop = (function (_super) {
    __extends(IsDesktop, _super);
    function IsDesktop(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'desktop';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsDesktop.prototype, "isDesktop", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsDesktop;
}(index_1.RESPONSIVE_BASE));
IsDesktop.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isDesktop]'
            },] },
];
/** @nocollapse */
IsDesktop.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsDesktop.propDecorators = {
    'isDesktop': [{ type: core_1.Input },],
};
exports.IsDesktop = IsDesktop;
var IsTablet = (function (_super) {
    __extends(IsTablet, _super);
    function IsTablet(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'tablet';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsTablet.prototype, "isTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsTablet;
}(index_1.RESPONSIVE_BASE));
IsTablet.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isTablet]'
            },] },
];
/** @nocollapse */
IsTablet.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsTablet.propDecorators = {
    'isTablet': [{ type: core_1.Input },],
};
exports.IsTablet = IsTablet;
var IsMobile = (function (_super) {
    __extends(IsMobile, _super);
    function IsMobile(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'mobile';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsMobile.prototype, "isMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return IsMobile;
}(index_1.RESPONSIVE_BASE));
IsMobile.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isMobile]'
            },] },
];
/** @nocollapse */
IsMobile.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsMobile.propDecorators = {
    'isMobile': [{ type: core_1.Input },],
};
exports.IsMobile = IsMobile;
var ShowItDevice = (function (_super) {
    __extends(ShowItDevice, _super);
    function ShowItDevice(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItDevice.prototype, "showItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItDevice;
}(index_1.RESPONSIVE_BASE));
ShowItDevice.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItDevice]'
            },] },
];
/** @nocollapse */
ShowItDevice.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItDevice.propDecorators = {
    'showItDevice': [{ type: core_1.Input },],
};
exports.ShowItDevice = ShowItDevice;
var HideItDevice = (function (_super) {
    __extends(HideItDevice, _super);
    function HideItDevice(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItDevice.prototype, "hideItDevice", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'device');
        },
        enumerable: true,
        configurable: true
    });
    return HideItDevice;
}(index_1.RESPONSIVE_BASE));
HideItDevice.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItDevice]'
            },] },
];
/** @nocollapse */
HideItDevice.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItDevice.propDecorators = {
    'hideItDevice': [{ type: core_1.Input },],
};
exports.HideItDevice = HideItDevice;
var IsIphone = (function (_super) {
    __extends(IsIphone, _super);
    function IsIphone(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIphone.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsIphone;
}(index_1.RESPONSIVE_BASE));
IsIphone.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIphone]'
            },] },
];
/** @nocollapse */
IsIphone.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIphone.propDecorators = {
    'isIphone': [{ type: core_1.Input },],
};
exports.IsIphone = IsIphone;
var IsIpad = (function (_super) {
    __extends(IsIpad, _super);
    function IsIpad(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'iphone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsIpad.prototype, "isIphone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsIpad;
}(index_1.RESPONSIVE_BASE));
IsIpad.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isIpad]'
            },] },
];
/** @nocollapse */
IsIpad.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsIpad.propDecorators = {
    'isIphone': [{ type: core_1.Input },],
};
exports.IsIpad = IsIpad;
var IsAndroidMobile = (function (_super) {
    __extends(IsAndroidMobile, _super);
    function IsAndroidMobile(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android mobile';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsAndroidMobile.prototype, "isAndroidMobile", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsAndroidMobile;
}(index_1.RESPONSIVE_BASE));
IsAndroidMobile.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isAndroidMobile]'
            },] },
];
/** @nocollapse */
IsAndroidMobile.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsAndroidMobile.propDecorators = {
    'isAndroidMobile': [{ type: core_1.Input },],
};
exports.IsAndroidMobile = IsAndroidMobile;
var IsAndroidTablet = (function (_super) {
    __extends(IsAndroidTablet, _super);
    function IsAndroidTablet(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'android tablet';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsAndroidTablet.prototype, "isAndroidTablet", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsAndroidTablet;
}(index_1.RESPONSIVE_BASE));
IsAndroidTablet.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isAndroidTablet]'
            },] },
];
/** @nocollapse */
IsAndroidTablet.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsAndroidTablet.propDecorators = {
    'isAndroidTablet': [{ type: core_1.Input },],
};
exports.IsAndroidTablet = IsAndroidTablet;
var IsWindowsPhone = (function (_super) {
    __extends(IsWindowsPhone, _super);
    function IsWindowsPhone(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'windows phone';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsWindowsPhone.prototype, "isWindowsPhone", {
        set: function (grid_state) {
            this.setGrid(this._state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return IsWindowsPhone;
}(index_1.RESPONSIVE_BASE));
IsWindowsPhone.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isWindowsPhone]'
            },] },
];
/** @nocollapse */
IsWindowsPhone.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsWindowsPhone.propDecorators = {
    'isWindowsPhone': [{ type: core_1.Input },],
};
exports.IsWindowsPhone = IsWindowsPhone;
var ShowItStandard = (function (_super) {
    __extends(ShowItStandard, _super);
    function ShowItStandard(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(ShowItStandard.prototype, "showItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return ShowItStandard;
}(index_1.RESPONSIVE_BASE));
ShowItStandard.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[showItStandard]'
            },] },
];
/** @nocollapse */
ShowItStandard.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
ShowItStandard.propDecorators = {
    'showItStandard': [{ type: core_1.Input },],
};
exports.ShowItStandard = ShowItStandard;
var HideItStandard = (function (_super) {
    __extends(HideItStandard, _super);
    function HideItStandard(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(HideItStandard.prototype, "hideItStandard", {
        set: function (grid_state) {
            this.setGrid(grid_state, 'standard');
        },
        enumerable: true,
        configurable: true
    });
    return HideItStandard;
}(index_1.RESPONSIVE_BASE));
HideItStandard.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[hideItStandard]'
            },] },
];
/** @nocollapse */
HideItStandard.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
HideItStandard.propDecorators = {
    'hideItStandard': [{ type: core_1.Input },],
};
exports.HideItStandard = HideItStandard;
var IsPortrait = (function (_super) {
    __extends(IsPortrait, _super);
    function IsPortrait(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'portrait';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsPortrait.prototype, "isPortrait", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    return IsPortrait;
}(index_1.RESPONSIVE_BASE));
IsPortrait.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isPortrait]'
            },] },
];
/** @nocollapse */
IsPortrait.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsPortrait.propDecorators = {
    'isPortrait': [{ type: core_1.Input },],
};
exports.IsPortrait = IsPortrait;
var IsLandscape = (function (_super) {
    __extends(IsLandscape, _super);
    function IsLandscape(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'landscape';
        _this._showWhenTrue = false;
        return _this;
    }
    Object.defineProperty(IsLandscape.prototype, "isLandscape", {
        set: function (grid_state) {
            this.setGrid(this._state, 'orientation');
        },
        enumerable: true,
        configurable: true
    });
    return IsLandscape;
}(index_1.RESPONSIVE_BASE));
IsLandscape.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isLandscape]'
            },] },
];
/** @nocollapse */
IsLandscape.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsLandscape.propDecorators = {
    'isLandscape': [{ type: core_1.Input },],
};
exports.IsLandscape = IsLandscape;
var DeviceInfo = (function () {
    function DeviceInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.device = new core_1.EventEmitter();
    }
    Object.defineProperty(DeviceInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    DeviceInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.deviceObserver.subscribe(this.updateData.bind(this));
    };
    DeviceInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.device.emit(value);
            this.cd.markForCheck();
        }
    };
    DeviceInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return DeviceInfo;
}());
DeviceInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'deviceInfo'
            },] },
];
/** @nocollapse */
DeviceInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
DeviceInfo.propDecorators = {
    'device': [{ type: core_1.Output },],
};
exports.DeviceInfo = DeviceInfo;
var DeviceStandardInfo = (function () {
    function DeviceStandardInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.standard = new core_1.EventEmitter();
    }
    Object.defineProperty(DeviceStandardInfo.prototype, "deviceStandardInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    DeviceStandardInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.standardObserver.subscribe(this.updateData.bind(this));
    };
    DeviceStandardInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DeviceStandardInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.standard.emit(value);
            this.cd.markForCheck();
        }
    };
    DeviceStandardInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return DeviceStandardInfo;
}());
DeviceStandardInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: "deviceStandardInfo", inputs: ['deviceStandardInfo'], outputs: ['standard']
            },] },
];
/** @nocollapse */
DeviceStandardInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.DeviceStandardInfo = DeviceStandardInfo;
var OrientationInfo = (function () {
    function OrientationInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.orientation = new core_1.EventEmitter();
    }
    Object.defineProperty(OrientationInfo.prototype, "responsiveSizeInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    OrientationInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.orientationObserver.subscribe(this.updateData.bind(this));
    };
    OrientationInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    OrientationInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.orientation.emit(value);
            this.cd.markForCheck();
        }
    };
    OrientationInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this.noRepeat = newValue;
            return true;
        }
    };
    return OrientationInfo;
}());
OrientationInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'orientationInfo',
                outputs: ['orientation']
            },] },
];
/** @nocollapse */
OrientationInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.OrientationInfo = OrientationInfo;
//# sourceMappingURL=devices-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/devices/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var devices_directives_1 = __webpack_require__("../../../../ng2-responsive/devices/devices-directives.js");
exports.IsDesktop = devices_directives_1.IsDesktop;
exports.IsTablet = devices_directives_1.IsTablet;
exports.IsMobile = devices_directives_1.IsMobile;
exports.IsSmartTv = devices_directives_1.IsSmartTv;
exports.ShowItDevice = devices_directives_1.ShowItDevice;
exports.HideItDevice = devices_directives_1.HideItDevice;
exports.IsIphone = devices_directives_1.IsIphone;
exports.IsIpad = devices_directives_1.IsIpad;
exports.IsAndroidMobile = devices_directives_1.IsAndroidMobile;
exports.IsAndroidTablet = devices_directives_1.IsAndroidTablet;
exports.IsWindowsPhone = devices_directives_1.IsWindowsPhone;
exports.ShowItStandard = devices_directives_1.ShowItStandard;
exports.HideItStandard = devices_directives_1.HideItStandard;
exports.IsPortrait = devices_directives_1.IsPortrait;
exports.IsLandscape = devices_directives_1.IsLandscape;
exports.DeviceInfo = devices_directives_1.DeviceInfo;
exports.DeviceStandardInfo = devices_directives_1.DeviceStandardInfo;
exports.OrientationInfo = devices_directives_1.OrientationInfo;
exports.DEVICES_DIRECTIVES = [
    devices_directives_1.IsDesktop,
    devices_directives_1.IsTablet,
    devices_directives_1.IsMobile,
    devices_directives_1.IsSmartTv,
    devices_directives_1.ShowItDevice,
    devices_directives_1.HideItDevice,
    devices_directives_1.IsIphone,
    devices_directives_1.IsIpad,
    devices_directives_1.IsAndroidMobile,
    devices_directives_1.IsAndroidTablet,
    devices_directives_1.IsWindowsPhone,
    devices_directives_1.ShowItStandard,
    devices_directives_1.HideItStandard,
    devices_directives_1.IsPortrait,
    devices_directives_1.IsLandscape,
    devices_directives_1.DeviceInfo,
    devices_directives_1.DeviceStandardInfo,
    devices_directives_1.OrientationInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Responsive Devices Detect Directives for Angular 2
 *
 * @Created_by Manu Cutillas
 * @Contributors Christophe HOARAU, Kamil Breguła
 * @created_at May 04, 2016
 * @updated_at Febr 5, 2017 - by ManuCutillas
 * @version_0.7.5
 *
 * Dependencies:
 * @angular/core : "2.4.6"
 * rxjs: "5.1.0"
 *
 * @more_info https://github.com/ManuCutillas
 *            https://www.npmjs.com/~manucutillas
 *            https://github.com/no-more
 *
 * @description : NG2-RESPONSIVE
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var index_2 = __webpack_require__("../../../../ng2-responsive/bootstrap/index.js");
var index_3 = __webpack_require__("../../../../ng2-responsive/browsers/index.js");
var index_4 = __webpack_require__("../../../../ng2-responsive/custom-sizes/index.js");
var index_5 = __webpack_require__("../../../../ng2-responsive/devices/index.js");
var index_6 = __webpack_require__("../../../../ng2-responsive/pixelratio/index.js");
var index_7 = __webpack_require__("../../../../ng2-responsive/responsive/index.js");
var index_8 = __webpack_require__("../../../../ng2-responsive/responsive-window/index.js");
var index_9 = __webpack_require__("../../../../ng2-responsive/useragent/index.js");
var index_10 = __webpack_require__("../../../../ng2-responsive/config/index.js");
exports.ResponsiveConfig = index_10.ResponsiveConfig;
exports.ResponsiveState = index_10.ResponsiveState;
exports.ResponsiveConfigInterface = index_10.ResponsiveConfigInterface;
var ResponsiveModule = (function () {
    function ResponsiveModule() {
    }
    return ResponsiveModule;
}());
ResponsiveModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    index_2.BOOTSTRAP_DIRECTIVES,
                    index_3.BROWSER_DIRECTIVES,
                    index_4.CUSTOMSIZES_DIRECTIVES,
                    index_5.DEVICES_DIRECTIVES,
                    index_6.PIXELRATIO_DIRECTIVES,
                    index_7.RESPONSIVE_DIRECTIVE,
                    index_8.RESPONSIVEWINDOW_DIRECTIVE,
                    index_9.USERAGENT_DIRECTIVE
                ],
                exports: [
                    index_2.BOOTSTRAP_DIRECTIVES,
                    index_3.BROWSER_DIRECTIVES,
                    index_4.CUSTOMSIZES_DIRECTIVES,
                    index_5.DEVICES_DIRECTIVES,
                    index_6.PIXELRATIO_DIRECTIVES,
                    index_7.RESPONSIVE_DIRECTIVE,
                    index_8.RESPONSIVEWINDOW_DIRECTIVE,
                    index_9.USERAGENT_DIRECTIVE,
                ],
                providers: [
                    index_1.ResponsiveState,
                    index_1.ResponsiveConfig
                ]
            },] },
];
/** @nocollapse */
ResponsiveModule.ctorParameters = function () { return []; };
exports.ResponsiveModule = ResponsiveModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/pixelratio/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pixelratio_directives_1 = __webpack_require__("../../../../ng2-responsive/pixelratio/pixelratio-directives.js");
exports.Is1xPixel = pixelratio_directives_1.Is1xPixel;
exports.IsRetina = pixelratio_directives_1.IsRetina;
exports.Is4k = pixelratio_directives_1.Is4k;
exports.PixelRatioInfo = pixelratio_directives_1.PixelRatioInfo;
exports.PIXELRATIO_DIRECTIVES = [
    pixelratio_directives_1.Is1xPixel,
    pixelratio_directives_1.IsRetina,
    pixelratio_directives_1.Is4k,
    pixelratio_directives_1.PixelRatioInfo
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/pixelratio/pixelratio-directives.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
/*======== 1x =========*/
var Is1xPixel = (function (_super) {
    __extends(Is1xPixel, _super);
    function Is1xPixel(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = '1x';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(Is1xPixel.prototype, "is1xPixel", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return Is1xPixel;
}(index_1.RESPONSIVE_BASE));
Is1xPixel.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[is1xPixel]'
            },] },
];
/** @nocollapse */
Is1xPixel.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
Is1xPixel.propDecorators = {
    'is1xPixel': [{ type: core_1.Input },],
};
exports.Is1xPixel = Is1xPixel;
/*======== RETINA =========*/
var IsRetina = (function (_super) {
    __extends(IsRetina, _super);
    function IsRetina(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = 'retina';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(IsRetina.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return IsRetina;
}(index_1.RESPONSIVE_BASE));
IsRetina.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[isRetina]'
            },] },
];
/** @nocollapse */
IsRetina.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
IsRetina.propDecorators = {
    'isRetina': [{ type: core_1.Input },],
};
exports.IsRetina = IsRetina;
/*======== 4K =========*/
var Is4k = (function (_super) {
    __extends(Is4k, _super);
    function Is4k(templateRef, viewContainer, _responsiveState, cd) {
        var _this = _super.call(this, templateRef, viewContainer, _responsiveState, cd) || this;
        _this._state = '4k';
        _this._showWhenTrue = true;
        return _this;
    }
    Object.defineProperty(Is4k.prototype, "isRetina", {
        set: function (grid_state) {
            this.setGrid(this._state, 'pixelratio');
        },
        enumerable: true,
        configurable: true
    });
    return Is4k;
}(index_1.RESPONSIVE_BASE));
Is4k.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[is4k]'
            },] },
];
/** @nocollapse */
Is4k.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: core_1.ViewContainerRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
Is4k.propDecorators = {
    'isRetina': [{ type: core_1.Input },],
};
exports.Is4k = Is4k;
/*======== DeviceInfo =========*/
var PixelRatioInfo = (function () {
    function PixelRatioInfo(_responsiveState, viewContainer, cd) {
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.pixelratio = new core_1.EventEmitter();
    }
    Object.defineProperty(PixelRatioInfo.prototype, "pixelratioInfo", {
        set: function (grid_state) {
            this.updateData(this.currentstate);
        },
        enumerable: true,
        configurable: true
    });
    PixelRatioInfo.prototype.ngOnInit = function () {
        this._subscription = this._responsiveState.pixelObserver.subscribe(this.updateData.bind(this));
    };
    PixelRatioInfo.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    PixelRatioInfo.prototype.updateData = function (value) {
        var update = this._ifValueChanged(this.noRepeat, value);
        if (update) {
            this.pixelratio.emit(value);
            this.cd.markForCheck();
        }
    };
    PixelRatioInfo.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else
            this.noRepeat = newValue;
        return true;
    };
    return PixelRatioInfo;
}());
PixelRatioInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'pixelratioInfo',
                inputs: ['pixelratioInfo']
            },] },
];
/** @nocollapse */
PixelRatioInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
PixelRatioInfo.propDecorators = {
    'pixelratio': [{ type: core_1.Output },],
};
exports.PixelRatioInfo = PixelRatioInfo;
//# sourceMappingURL=pixelratio-directives.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive-window/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responsive_window_1 = __webpack_require__("../../../../ng2-responsive/responsive-window/responsive-window.js");
exports.ResponsiveWindow = responsive_window_1.ResponsiveWindow;
exports.RESPONSIVEWINDOW_DIRECTIVE = [responsive_window_1.ResponsiveWindow];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive-window/responsive-window.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var ResponsiveWindow = (function () {
    function ResponsiveWindow(_responsiveState, el, cd) {
        this._responsiveState = _responsiveState;
        this.el = el;
        this.cd = cd;
        this.element = el.nativeElement;
    }
    ResponsiveWindow.prototype.ngOnInit = function () {
        this._responsiveState.registerWindow(this);
    };
    ResponsiveWindow.prototype.ngDoCheck = function () {
        var update = this._ifValueChanged(this._noRepeat, this.name);
        if (update) {
            this._responsiveState.unregisterWindow(this);
            this._responsiveState.registerWindow(this);
            this.cd.markForCheck();
        }
    };
    ResponsiveWindow.prototype.ngOnDestroy = function () {
        this._responsiveState.unregisterWindow(this);
    };
    ResponsiveWindow.prototype.getWidth = function () {
        return this.element.offsetWidth;
    };
    ResponsiveWindow.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else
            this._noRepeat = newValue;
        return true;
    };
    return ResponsiveWindow;
}());
ResponsiveWindow.decorators = [
    { type: core_1.Directive, args: [{
                selector: "[responsive-window]"
            },] },
];
/** @nocollapse */
ResponsiveWindow.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ElementRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
ResponsiveWindow.propDecorators = {
    'name': [{ type: core_1.Input, args: ['responsive-window',] },],
};
exports.ResponsiveWindow = ResponsiveWindow;
//# sourceMappingURL=responsive-window.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var responsive_1 = __webpack_require__("../../../../ng2-responsive/responsive/responsive.js");
exports.Responsive = responsive_1.Responsive;
exports.RESPONSIVE_DIRECTIVE = [responsive_1.Responsive];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/responsive/responsive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var Responsive = (function () {
    function Responsive(templateRef, _responsiveState, viewContainer, cd) {
        this.templateRef = templateRef;
        this._responsiveState = _responsiveState;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.changes = new core_1.EventEmitter();
        this.set_values = {
            bootstrap: '',
            browser: '',
            device: '',
            pixelratio: '',
            orientation: '',
            standard: '',
            ie: '',
            sizes: 0
        };
        this.set_active_subscriptions = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this.match_multiple = {
            bootstrap: false,
            browser: false,
            device: false,
            pixelratio: false,
            orientation: false,
            standard: false,
            ie: false,
            sizes: false
        };
        this._showWhenTrue = true;
        this._globalNoRepeat = 0;
        this._bootstrapNoRepeat = 0;
        this._deviceNoRepeat = 0;
        this._standardNoRepeat = 0;
        this._orientationNoRepeat = 0;
        this._browserNoRepeat = 0;
        this._pixelratioNoRepeat = 0;
        this._ieNoRepeat = 0;
        this._sizesNoRepeat = 0;
        this._bootstrap_user_param = [];
        this._devices_user_param = [];
        this._standard_user_param = [];
        this._orientation_user_param = [];
        this._browser_user_param = [];
        this._pixelratio_user_param = [];
        this._ie_user_param = [];
        this._sizes_user_param = [];
        this._sizes_window = 'window';
        this._actives = [];
    }
    Object.defineProperty(Responsive.prototype, "responsive", {
        set: function (config) {
            this.init_responsive(config);
        },
        enumerable: true,
        configurable: true
    });
    Responsive.prototype.init_responsive = function (value) {
        if (this.isJSON(value)) {
            if (!!value.bootstrap && this._bootstrapNoRepeat === 0) {
                this._bootstrap_user_param = (Array.isArray(value.bootstrap) ? value.bootstrap : [value.bootstrap]);
                this._bootstrapNoRepeat = 1;
                this.set_active_subscriptions.bootstrap = true;
            }
            if (!!value.device && this._deviceNoRepeat === 0) {
                this._devices_user_param = (Array.isArray(value.device) ? value.device : [value.device]);
                this._deviceNoRepeat = 1;
                this.set_active_subscriptions.device = true;
            }
            if (!!value.standard && this._standardNoRepeat === 0) {
                this._standard_user_param = (Array.isArray(value.standard) ? value.standard : [value.standard]);
                this._standardNoRepeat = 1;
                this.set_active_subscriptions.standard = true;
            }
            if (!!value.orientation && this._orientationNoRepeat === 0) {
                this._orientation_user_param = (Array.isArray(value.orientation) ? value.orientation : [value.orientation]);
                this._orientationNoRepeat = 1;
                this.set_active_subscriptions.orientation = true;
            }
            if (!!value.browser && this._browserNoRepeat === 0) {
                this._browser_user_param = (Array.isArray(value.browser) ? value.browser : [value.browser]);
                this._browserNoRepeat = 1;
                this.set_active_subscriptions.browser = true;
            }
            if (!!value.pixelratio && this._pixelratioNoRepeat === 0) {
                this._pixelratio_user_param = (Array.isArray(value.pixelratio) ? value.pixelratio : [value.pixelratio]);
                this._pixelratioNoRepeat = 1;
                this.set_active_subscriptions.pixelratio = true;
            }
            if (!!value.ie && this._ieNoRepeat === 0) {
                this._ie_user_param = (Array.isArray(value.ie) ? value.ie : [value.ie]);
                this._ieNoRepeat = 1;
                this.set_active_subscriptions.ie = true;
            }
            if (!!value.sizes && this._sizesNoRepeat === 0) {
                var min = value.sizes.min;
                var max = value.sizes.max;
                var win = value.sizes.window;
                if (win !== undefined) {
                    this._sizes_window = win;
                }
                this._sizes_user_param = [min, max];
                this._sizesNoRepeat = 1;
                this.set_active_subscriptions.sizes = true;
            }
        }
        else if (Array.isArray(value))
            throw new Error('Responsive directive don´t work with a only array parameter');
        else if (typeof value === 'string')
            throw new Error('Responsive directive don´t work with a only string parameter');
        else if (typeof value === 'number')
            throw new Error('Responsive directive don´t work with a only number parameter');
        else if (typeof value === 'undefined' || value === null)
            throw new Error('Responsive directive don´t work without a param');
        for (var key in this.set_active_subscriptions) {
            if (this.set_active_subscriptions[key])
                this._actives.push(key);
        }
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap = this._responsiveState.elementoObservar.subscribe(this.updateBootstrap.bind(this));
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser = this._responsiveState.browserObserver.subscribe(this.updateBrowser.bind(this));
        if (this.set_active_subscriptions.device)
            this._subscription_Device = this._responsiveState.deviceObserver.subscribe(this.updateDevice.bind(this));
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio = this._responsiveState.pixelObserver.subscribe(this.updatePixelRatio.bind(this));
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation = this._responsiveState.orientationObserver.subscribe(this.updateOrientation.bind(this));
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard = this._responsiveState.standardObserver.subscribe(this.updateStandard.bind(this));
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version = this._responsiveState.ieVersionObserver.subscribe(this.updateIEversion.bind(this));
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes = this._responsiveState.anchoObservar.subscribe(this.updateSizes.bind(this));
    };
    Responsive.prototype.updateBootstrap = function (value) {
        var _update = this._ifValueChanged(this._noRepeatBootstrapName, value);
        if (_update) {
            this.set_values.bootstrap = value;
        }
        this.updateEvent(this.set_values.bootstrap, 'bootstrap');
    };
    Responsive.prototype.updateBrowser = function (value) {
        this.set_values.browser = value;
        this.updateEvent(this.set_values.browser, 'browser');
    };
    Responsive.prototype.updateDevice = function (value) {
        this.set_values.device = value;
        this.updateEvent(this.set_values.device, 'device');
    };
    Responsive.prototype.updatePixelRatio = function (value) {
        this.set_values.pixelratio = value;
        this.updateEvent(this.set_values.pixelratio, 'pixelratio');
    };
    Responsive.prototype.updateOrientation = function (value) {
        this.set_values.orientation = value;
        this.updateEvent(this.set_values.orientation, 'orientation');
    };
    Responsive.prototype.updateStandard = function (value) {
        this.set_values.standard = value;
        this.updateEvent(this.set_values.standard, 'standard');
    };
    Responsive.prototype.updateIEversion = function (value) {
        this.set_values.ie = value;
        this.updateEvent(this.set_values.ie, 'ie');
    };
    Responsive.prototype.updateSizes = function (value) {
        if (!this._sizes_window)
            this.set_values.sizes = value;
        else
            this.set_values.sizes = this._responsiveState.getWidth(this._sizes_window);
        this.updateEvent(this.set_values.sizes, 'sizes');
    };
    Responsive.prototype.updateEvent = function (param, type_directive) {
        if (!!this._showWhenTrue) {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(this._bootstrap_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'device':
                    this.showHideOperations(this._devices_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(this._standard_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(this._orientation_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(this._browser_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(this._pixelratio_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(this._ie_user_param.indexOf(param) !== -1, type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!!(param >= this._sizes_user_param[0] && param <= this._sizes_user_param[1]), type_directive);
                    break;
                default:
                    null;
            }
        }
        else {
            switch (type_directive) {
                case 'bootstrap':
                    this.showHideOperations(!(this._bootstrap_user_param.indexOf(param)), type_directive);
                    break;
                case 'device':
                    this.showHideOperations(!(this._devices_user_param.indexOf(param)), type_directive);
                    break;
                case 'standard':
                    this.showHideOperations(!(this._standard_user_param.indexOf(param)), type_directive);
                    break;
                case 'orientation':
                    this.showHideOperations(!(this._orientation_user_param.indexOf(param)), type_directive);
                    break;
                case 'browser':
                    this.showHideOperations(!(this._browser_user_param.indexOf(param)), type_directive);
                    break;
                case 'pixelratio':
                    this.showHideOperations(!(this._pixelratio_user_param.indexOf(param)), type_directive);
                    break;
                case 'ie':
                    this.showHideOperations(!(this._ie_user_param.indexOf(param)), type_directive);
                    break;
                case 'sizes':
                    this.showHideOperations(!(!!(param >= this._sizes_user_param[0] && param <= this._sizes_user_param[1])), type_directive);
                    break;
                default:
                    null;
            }
        }
    };
    Responsive.prototype.showHideOperations = function (show, type_directive) {
        var global_state = this.matchValues(show, type_directive);
        if (!!global_state) {
            if (this._globalNoRepeat === 0) {
                this._globalNoRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.changes.emit(true);
                this.cd.markForCheck();
            }
        }
        else {
            this._globalNoRepeat = 0;
            this.changes.emit(false);
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    };
    Responsive.prototype.matchValues = function (show, type_directive) {
        var match = true;
        if (show) {
            this.match_multiple[type_directive] = true;
        }
        else {
            this.match_multiple[type_directive] = false;
        }
        for (var all_key in this.match_multiple) {
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var active = _a[_i];
                if (all_key == active && this.match_multiple[all_key] === false)
                    return match = false;
            }
        }
        return match;
    };
    Responsive.prototype.ngOnDestroy = function () {
        if (this.set_active_subscriptions.bootstrap)
            this._subscription_Bootstrap.unsubscribe();
        if (this.set_active_subscriptions.browser)
            this._subscription_Browser.unsubscribe();
        if (this.set_active_subscriptions.device)
            this._subscription_Device.unsubscribe();
        if (this.set_active_subscriptions.pixelratio)
            this._subscription_Pixel_Ratio.unsubscribe();
        if (this.set_active_subscriptions.orientation)
            this._subscription_Orientation.unsubscribe();
        if (this.set_active_subscriptions.standard)
            this._subscription_Standard.unsubscribe();
        if (this.set_active_subscriptions.ie)
            this._subscription_IE_Version.unsubscribe();
        if (this.set_active_subscriptions.sizes)
            this._subscription_custom_sizes.unsubscribe();
    };
    Responsive.prototype._ifValueChanged = function (oldValue, newValue) {
        if (oldValue === newValue)
            return false;
        else {
            this._noRepeatBootstrapName = newValue;
            return true;
        }
    };
    Responsive.prototype.isJSON = function (value) {
        try {
            JSON.stringify(value);
            return true;
        }
        catch (ex) {
            return false;
        }
    };
    return Responsive;
}());
Responsive.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[responsive]'
            },] },
];
/** @nocollapse */
Responsive.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
    { type: index_1.ResponsiveState, },
    { type: core_1.ViewContainerRef, },
    { type: core_1.ChangeDetectorRef, },
]; };
Responsive.propDecorators = {
    'responsive': [{ type: core_1.Input },],
    'changes': [{ type: core_1.Output },],
};
exports.Responsive = Responsive;
//# sourceMappingURL=responsive.js.map

/***/ }),

/***/ "../../../../ng2-responsive/useragent/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var useragent_1 = __webpack_require__("../../../../ng2-responsive/useragent/useragent.js");
exports.UserAgentInfo = useragent_1.UserAgentInfo;
exports.USERAGENT_DIRECTIVE = [useragent_1.UserAgentInfo];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-responsive/useragent/useragent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../ng2-responsive/config/index.js");
var UserAgentInfo = (function () {
    function UserAgentInfo(_responsiveState, cd) {
        this._responsiveState = _responsiveState;
        this.cd = cd;
        this.info = new core_1.EventEmitter();
    }
    UserAgentInfo.prototype.ngOnInit = function () {
        this._subscription_UserAgent = this._responsiveState.userAgentObserver.subscribe(this.emitUserAgent.bind(this));
    };
    UserAgentInfo.prototype.ngOnDestroy = function () {
        this._subscription_UserAgent.unsubscribe();
    };
    UserAgentInfo.prototype.emitUserAgent = function (value) {
        this.info.emit(value);
        this.cd.markForCheck();
    };
    return UserAgentInfo;
}());
UserAgentInfo.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'userAgentInfo', outputs: ['info']
            },] },
];
/** @nocollapse */
UserAgentInfo.ctorParameters = function () { return [
    { type: index_1.ResponsiveState, },
    { type: core_1.ChangeDetectorRef, },
]; };
exports.UserAgentInfo = UserAgentInfo;
//# sourceMappingURL=useragent.js.map

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
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* NgClass */]));

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
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* NgStyle */]));

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