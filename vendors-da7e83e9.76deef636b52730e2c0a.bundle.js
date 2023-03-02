(self["webpackChunkjudgement"] = self["webpackChunkjudgement"] || []).push([["vendors-da7e83e9"],{

/***/ "aurelia-testing":
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/aurelia-testing.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileSpy": () => (/* reexport safe */ _compile_spy__WEBPACK_IMPORTED_MODULE_0__.CompileSpy),
/* harmony export */   "ViewSpy": () => (/* reexport safe */ _view_spy__WEBPACK_IMPORTED_MODULE_1__.ViewSpy),
/* harmony export */   "ComponentTester": () => (/* reexport safe */ _component_tester__WEBPACK_IMPORTED_MODULE_2__.ComponentTester),
/* harmony export */   "StageComponent": () => (/* reexport safe */ _component_tester__WEBPACK_IMPORTED_MODULE_2__.StageComponent),
/* harmony export */   "waitFor": () => (/* reexport safe */ _wait__WEBPACK_IMPORTED_MODULE_3__.waitFor),
/* harmony export */   "waitForDocumentElement": () => (/* reexport safe */ _wait__WEBPACK_IMPORTED_MODULE_3__.waitForDocumentElement),
/* harmony export */   "waitForDocumentElements": () => (/* reexport safe */ _wait__WEBPACK_IMPORTED_MODULE_3__.waitForDocumentElements),
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
/* harmony import */ var _compile_spy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compile-spy */ "aurelia-testing/compile-spy");
/* harmony import */ var _view_spy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-spy */ "aurelia-testing/view-spy");
/* harmony import */ var _component_tester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-tester */ 136);
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait */ 191);




function configure(config) {
    config.globalResources([
        './compile-spy',
        './view-spy'
    ]);
}


/***/ }),

/***/ "aurelia-testing/compile-spy":
/*!*************************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/compile-spy.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompileSpy": () => (/* binding */ CompileSpy)
/* harmony export */ });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-logging */ 8099);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ 1015);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Attribute to be placed on any element to have it emit the View Compiler's
 * TargetInstruction into the debug console, giving you insight into all the
 * parsed bindings, behaviors and event handers for the targeted element.
 */
var CompileSpy = /** @class */ (function () {
    /**
     * Creates and instanse of CompileSpy.
     * @param element target element on where attribute is placed on.
     * @param instruction instructions for how the target element should be enhanced.
     */
    function CompileSpy(element, instruction) {
        (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_2__.getLogger)('compile-spy').info(element.toString(), instruction);
    }
    CompileSpy = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('compile-spy'),
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.inject)(aurelia_pal__WEBPACK_IMPORTED_MODULE_3__.DOM.Element, aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.TargetInstruction)
    ], CompileSpy);
    return CompileSpy;
}());



/***/ }),

/***/ 136:
/*!******************************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/component-tester.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StageComponent": () => (/* binding */ StageComponent),
/* harmony export */   "ComponentTester": () => (/* binding */ ComponentTester)
/* harmony export */ });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wait */ 191);


var StageComponent = /** @class */ (function () {
    function StageComponent() {
    }
    StageComponent.withResources = function (resources) {
        if (resources === void 0) { resources = []; }
        return new ComponentTester().withResources(resources);
    };
    return StageComponent;
}());

var ComponentTester = /** @class */ (function () {
    function ComponentTester() {
        this.resources = [];
    }
    ComponentTester.prototype.configure = function (aurelia) {
        return aurelia.use.standardConfiguration();
    };
    ComponentTester.prototype.bootstrap = function (configure) {
        this.configure = configure;
    };
    ComponentTester.prototype.withResources = function (resources) {
        this.resources = resources;
        return this;
    };
    ComponentTester.prototype.inView = function (html) {
        this.html = html;
        return this;
    };
    ComponentTester.prototype.boundTo = function (bindingContext) {
        this.bindingContext = bindingContext;
        return this;
    };
    ComponentTester.prototype.manuallyHandleLifecycle = function () {
        this._prepareLifecycle();
        return this;
    };
    ComponentTester.prototype.create = function (bootstrap) {
        var _this = this;
        return bootstrap(function (aurelia) {
            return Promise.resolve(_this.configure(aurelia)).then(function () {
                if (_this.resources) {
                    aurelia.use.globalResources(_this.resources);
                }
                return aurelia.start().then(function () {
                    _this.host = document.createElement('div');
                    _this.host.innerHTML = _this.html;
                    document.body.appendChild(_this.host);
                    return aurelia.enhance(_this.bindingContext, _this.host).then(function () {
                        _this.rootView = aurelia.root;
                        _this.element = _this.host.firstElementChild;
                        if (aurelia.root.controllers.length) {
                            _this.viewModel = aurelia.root.controllers[0].viewModel;
                        }
                        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 0); });
                    });
                });
            });
        });
    };
    ComponentTester.prototype.dispose = function () {
        if (this.host === undefined || this.rootView === undefined) {
            throw new Error('Cannot call ComponentTester.dispose() before ComponentTester.create()');
        }
        this.rootView.detached();
        this.rootView.unbind();
        return this.host.parentNode.removeChild(this.host);
    };
    ComponentTester.prototype._prepareLifecycle = function () {
        var _this = this;
        // bind
        var bindPrototype = aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.bind;
        // tslint:disable-next-line:no-empty
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.bind = function () { };
        this.bind = function (bindingContext) { return new Promise(function (resolve) {
            aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.bind = bindPrototype;
            if (bindingContext !== undefined) {
                _this.bindingContext = bindingContext;
            }
            _this.rootView.bind(_this.bindingContext);
            setTimeout(function () { return resolve(); }, 0);
        }); };
        // attached
        var attachedPrototype = aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.attached;
        // tslint:disable-next-line:no-empty
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.attached = function () { };
        this.attached = function () { return new Promise(function (resolve) {
            aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.View.prototype.attached = attachedPrototype;
            _this.rootView.attached();
            setTimeout(function () { return resolve(); }, 0);
        }); };
        // detached
        this.detached = function () { return new Promise(function (resolve) {
            _this.rootView.detached();
            setTimeout(function () { return resolve(); }, 0);
        }); };
        // unbind
        this.unbind = function () { return new Promise(function (resolve) {
            _this.rootView.unbind();
            setTimeout(function () { return resolve(); }, 0);
        }); };
    };
    ComponentTester.prototype.waitForElement = function (selector, options) {
        var _this = this;
        return (0,_wait__WEBPACK_IMPORTED_MODULE_1__.waitFor)(function () { return _this.element.querySelector(selector); }, options);
    };
    ComponentTester.prototype.waitForElements = function (selector, options) {
        var _this = this;
        return (0,_wait__WEBPACK_IMPORTED_MODULE_1__.waitFor)(function () { return _this.element.querySelectorAll(selector); }, options);
    };
    return ComponentTester;
}());



/***/ }),

/***/ "aurelia-testing/view-spy":
/*!**********************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/view-spy.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewSpy": () => (/* binding */ ViewSpy)
/* harmony export */ });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-logging */ 8099);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Attribute to be placed on any HTML element in a view to emit the View instance
 * to the debug console, giving you insight into the live View instance, including
 * all child views, live bindings, behaviors and more.
 */
var ViewSpy = /** @class */ (function () {
    /**
     * Creates a new instance of ViewSpy.
     */
    function ViewSpy() {
        this.logger = (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_1__.getLogger)('view-spy');
    }
    ViewSpy.prototype._log = function (lifecycleName, context) {
        if (!this.value && lifecycleName === 'created') {
            this.logger.info(lifecycleName, this.view);
        }
        else if (this.value && this.value.indexOf(lifecycleName) !== -1) {
            this.logger.info(lifecycleName, this.view, context);
        }
    };
    /**
     * Invoked when the target view is created.
     * @param view The target view.
     */
    ViewSpy.prototype.created = function (view) {
        this.view = view;
        this._log('created');
    };
    /**
     * Invoked when the target view is bound.
     * @param bindingContext The target view's binding context.
     */
    ViewSpy.prototype.bind = function (bindingContext) {
        this._log('bind', bindingContext);
    };
    /**
     * Invoked when the target element is attached to the DOM.
     */
    ViewSpy.prototype.attached = function () {
        this._log('attached');
    };
    /**
     * Invoked when the target element is detached from the DOM.
     */
    ViewSpy.prototype.detached = function () {
        this._log('detached');
    };
    /**
     * Invoked when the target element is unbound.
     */
    ViewSpy.prototype.unbind = function () {
        this._log('unbind');
    };
    ViewSpy = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_0__.customAttribute)('view-spy')
    ], ViewSpy);
    return ViewSpy;
}());



/***/ }),

/***/ 191:
/*!******************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/wait.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitFor": () => (/* binding */ waitFor),
/* harmony export */   "waitForDocumentElement": () => (/* binding */ waitForDocumentElement),
/* harmony export */   "waitForDocumentElements": () => (/* binding */ waitForDocumentElements)
/* harmony export */ });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * Generic function to wait for something to happen. Uses polling
 * @param getter: a getter function that returns anything else than `null` or an
 *                empty array or an empty jQuery object when the
 *                condition is met
 * @param options: lookup options, defaults to
 *                 `{present: true, interval: 50, timeout: 5000}`
 */
function waitFor(getter, options) {
    if (options === void 0) { options = { present: true, interval: 50, timeout: 5000 }; }
    // prevents infinite recursion if the request times out
    var timedOut = false;
    options = __assign({ present: true, interval: 50, timeout: 5000 }, options);
    function wait() {
        var element = getter();
        // boolean is needed here, hence the length > 0
        var found = element !== null && (!(element instanceof NodeList) &&
            !element.jquery || element.length > 0);
        if (!options.present === !found || timedOut) {
            return Promise.resolve(element);
        }
        return new Promise(function (rs) { return setTimeout(rs, options.interval); }).then(wait);
    }
    return Promise.race([
        new Promise(function (_, rj) { return setTimeout(function () {
            timedOut = true;
            rj(new Error(options.present ? 'Element not found' : 'Element not removed'));
        }, options.timeout); }),
        wait()
    ]);
}
function waitForDocumentElement(selector, options) {
    return waitFor(function () { return document.querySelector(selector); }, options);
}
function waitForDocumentElements(selector, options) {
    return waitFor(function () { return document.querySelectorAll(selector); }, options);
}


/***/ }),

/***/ 4639:
/*!********************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/empty-entry.js ***!
  \********************************************************************/
/***/ (() => {

// This file contains an empty module that does nothing.
// It's meant to be added as an entry point to the main bundle
// and helps reliably adding some Aurelia dependencies that are attached 
// to no module in particular, such as `includeAll` results or `aureliaApp`.
//
// Trying to attach those dependencies to, for example, 'aurelia-bootstrapper' 
// is unreliable if 'aurelia-bootstrapper' is in a DLL outside the bundle.
//
// Trying to attach to 'aurelia-loader-webpack' works well, unless a user
// configures a customized loader instead (unlikely, but in theory supported).


/***/ }),

/***/ 3231:
/*!*************************************************************************!*\
  !*** ./node_modules/aurelia-webpack-plugin/runtime/pal-loader-entry.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
// With default aurelia-loader-webpack config, this module is added as an extra entry
// before any other code executes so that PAL.Loader is properly configured.
// There are several tricky points worth noticing.
// 
// We don't add aurelia-loader-webpack itself as an entry point (used to until 2.0 RC2)
// because it (transitively) brings too much bagage with itself, most notably polyfills.
// This made it super-hard to add other polyfills before Aurelia's and led to various bugs.
//
// We don't add custom code in aurelia-pal or aurelia-loader or aurelia-bootstrapper to detect
// the Webpack environment and configure the loader because they might live in a DLL.
// If they do, they would bring aurelia-loader-webpack along in the DLL and this is a special 
// library that *has to be in the main chunk.*
//
// The over-complicated design I've settled upon in the end is to use this special module
// as an entry point that configures aurelia-loader-webpack. It has minimal static imports:
// just aurelia-pal, which itself has no other dependencies and doesn't run much code.
// It hacks the loader field into a getter so that it can synchronously load aurelia-loader-webpack
// just in time when it is demanded by aurelia-bootstrapper.
// This enables users to load polyfills before aurelia-loader-webpack is actually loaded.



var Loader;

Object.defineProperty(aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.PLATFORM, "Loader", {
  get: function() {
    return Loader || (Loader = (__webpack_require__(/*! aurelia-loader-webpack */ 8757).WebpackLoader));
  },
  set: function(value) {
    Loader = value;
  }
});


/***/ })

}]);
//# sourceMappingURL=vendors-da7e83e9.76deef636b52730e2c0a.bundle.js.map