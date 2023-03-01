"use strict";
(self["webpackChunkjudgement"] = self["webpackChunkjudgement"] || []).push([["vendors-319a6989"],{

/***/ 7062:
/*!***************************************************************************************!*\
  !*** ./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap),
/* harmony export */   "starting": () => (/* binding */ starting)
/* harmony export */ });
/* harmony import */ var aurelia_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-polyfills */ 4378);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var bootstrapPromises = [];
var startResolve = void 0;

var startPromise = new Promise(function (resolve) {
  return startResolve = resolve;
});
var host = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global;
var isNodeLike = typeof process !== 'undefined' && !process.browser;

function ready() {
  if (!host.document || host.document.readyState === 'complete') {
    return Promise.resolve();
  }

  return new Promise(function (resolve) {
    host.document.addEventListener('DOMContentLoaded', completed);
    host.addEventListener('load', completed);

    function completed() {
      host.document.removeEventListener('DOMContentLoaded', completed);
      host.removeEventListener('load', completed);
      resolve();
    }
  });
}

function createLoader() {
  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.Loader) {
    return Promise.resolve(new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.Loader());
  }

  if (false) { var _m, m; }

  return Promise.reject('No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.');
}

function initializePal(loader) {
  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.isInitialized) return Promise.resolve();

  var type = void 0;

  var isRenderer = isNodeLike && (process.type === 'renderer' || process.versions['node-webkit']);

  if (isNodeLike && !isRenderer) {
    type = 'nodejs';
  } else if (typeof window !== 'undefined') {
    type = 'browser';
  } else if (typeof self !== 'undefined') {
    type = 'worker';
  } else {
    throw new Error('Could not determine platform implementation to load.');
  }

  return loader.loadModule('aurelia-pal-' + type).then(function (palModule) {
    return type === 'nodejs' && !aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.isInitialized && palModule.globalize() || palModule.initialize();
  });
}

function preparePlatform(loader) {
  var map = function map(moduleId, relativeTo) {
    return loader.normalize(moduleId, relativeTo).then(function (normalized) {
      loader.map(moduleId, normalized);
      return normalized;
    });
  };

  return initializePal(loader).then(function () {
    return loader.normalize('aurelia-bootstrapper');
  }).then(function (bootstrapperName) {
    var frameworkPromise = map('aurelia-framework', bootstrapperName);

    return Promise.all([frameworkPromise, frameworkPromise.then(function (frameworkName) {
      return map('aurelia-dependency-injection', frameworkName);
    }), map('aurelia-router', bootstrapperName), map('aurelia-logging-console', bootstrapperName)]);
  }).then(function (_ref) {
    var frameworkName = _ref[0];
    return loader.loadModule(frameworkName);
  }).then(function (fx) {
    return startResolve(function () {
      return new fx.Aurelia(loader);
    });
  });
}

function config(appHost, configModuleId, aurelia) {
  aurelia.host = appHost;
  aurelia.configModuleId = configModuleId || null;

  if (configModuleId) {
    return aurelia.loader.loadModule(configModuleId).then(function (customConfig) {
      if (!customConfig.configure) {
        throw new Error('Cannot initialize module \'' + configModuleId + '\' without a configure function.');
      }

      return customConfig.configure(aurelia);
    });
  }

  aurelia.use.standardConfiguration().developmentLogging();

  return aurelia.start().then(function () {
    return aurelia.setRoot();
  });
}

function run() {
  return ready().then(createLoader).then(preparePlatform).then(function () {
    var appHosts = host.document.querySelectorAll('[aurelia-app],[data-aurelia-app]');
    for (var i = 0, ii = appHosts.length; i < ii; ++i) {
      var appHost = appHosts[i];
      var moduleId = appHost.getAttribute('aurelia-app') || appHost.getAttribute('data-aurelia-app');
      bootstrap(config.bind(null, appHost, moduleId));
    }

    var toConsole = console.error.bind(console);
    var bootstraps = bootstrapPromises.map(function (p) {
      return p.catch(toConsole);
    });
    bootstrapPromises = null;
    return Promise.all(bootstraps);
  });
}

function bootstrap(configure) {
  var p = startPromise.then(function (factory) {
    return configure(factory());
  });
  if (bootstrapPromises) bootstrapPromises.push(p);
  return p;
}

var starting = run();

/***/ }),

/***/ 6158:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/aurelia-dependency-injection/dist/native-modules/aurelia-dependency-injection.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_emptyParameters": () => (/* binding */ _emptyParameters),
/* harmony export */   "InvocationHandler": () => (/* binding */ InvocationHandler),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "autoinject": () => (/* binding */ autoinject),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "invoker": () => (/* binding */ invoker),
/* harmony export */   "invokeAsFactory": () => (/* binding */ invokeAsFactory),
/* harmony export */   "FactoryInvoker": () => (/* binding */ FactoryInvoker),
/* harmony export */   "registration": () => (/* binding */ registration),
/* harmony export */   "transient": () => (/* binding */ transient),
/* harmony export */   "singleton": () => (/* binding */ singleton),
/* harmony export */   "TransientRegistration": () => (/* binding */ TransientRegistration),
/* harmony export */   "SingletonRegistration": () => (/* binding */ SingletonRegistration),
/* harmony export */   "resolver": () => (/* binding */ resolver),
/* harmony export */   "Strategy": () => (/* binding */ Strategy),
/* harmony export */   "StrategyResolver": () => (/* binding */ StrategyResolver),
/* harmony export */   "Lazy": () => (/* binding */ Lazy),
/* harmony export */   "All": () => (/* binding */ All),
/* harmony export */   "Optional": () => (/* binding */ Optional),
/* harmony export */   "Parent": () => (/* binding */ Parent),
/* harmony export */   "Factory": () => (/* binding */ Factory),
/* harmony export */   "NewInstance": () => (/* binding */ NewInstance),
/* harmony export */   "getDecoratorDependencies": () => (/* binding */ getDecoratorDependencies),
/* harmony export */   "lazy": () => (/* binding */ lazy),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "optional": () => (/* binding */ optional),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "factory": () => (/* binding */ factory),
/* harmony export */   "newInstance": () => (/* binding */ newInstance)
/* harmony export */ });
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-metadata */ 1383);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function isInjectable(potentialTarget) {
    return !!potentialTarget;
}
function autoinject(potentialTarget) {
    var deco = function (target) {
        if (!target.hasOwnProperty('inject')) {
            target.inject = (aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.paramTypes, target) ||
                _emptyParameters).slice();
            if (target.inject && target.inject.length > 0) {
                if (target.inject[target.inject.length - 1] === Object) {
                    target.inject.splice(-1, 1);
                }
            }
        }
    };
    if (isInjectable(potentialTarget)) {
        return deco(potentialTarget);
    }
    return deco;
}
function inject() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return function (target, _key, descriptor) {
        if (typeof descriptor === 'number') {
            autoinject(target);
            if (rest.length === 1) {
                target.inject[descriptor] = rest[0];
            }
            return;
        }
        if (descriptor) {
            var fn = descriptor.value;
            fn.inject = rest;
        }
        else {
            target.inject = rest;
        }
    };
}

var resolver = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.protocol.create('aurelia:resolver', function (target) {
    if (!(typeof target.get === 'function')) {
        return 'Resolvers must implement: get(container: Container, key: any): any';
    }
    return true;
});
var Strategy;
(function (Strategy) {
    Strategy[Strategy["instance"] = 0] = "instance";
    Strategy[Strategy["singleton"] = 1] = "singleton";
    Strategy[Strategy["transient"] = 2] = "transient";
    Strategy[Strategy["function"] = 3] = "function";
    Strategy[Strategy["array"] = 4] = "array";
    Strategy[Strategy["alias"] = 5] = "alias";
})(Strategy || (Strategy = {}));
function isStrategy(actual, expected, state) {
    return actual === expected;
}
var StrategyResolver = (function () {
    function StrategyResolver(strategy, state) {
        this.strategy = strategy;
        this.state = state;
    }
    StrategyResolver.prototype.get = function (container, key) {
        if (isStrategy(this.strategy, Strategy.instance, this.state)) {
            return this.state;
        }
        if (isStrategy(this.strategy, Strategy.singleton, this.state)) {
            var singleton = container.invoke(this.state);
            this.state = singleton;
            this.strategy = 0;
            return singleton;
        }
        if (isStrategy(this.strategy, Strategy.transient, this.state)) {
            return container.invoke(this.state);
        }
        if (isStrategy(this.strategy, Strategy.function, this.state)) {
            return this.state(container, key, this);
        }
        if (isStrategy(this.strategy, Strategy.array, this.state)) {
            return this.state[0].get(container, key);
        }
        if (isStrategy(this.strategy, Strategy.alias, this.state)) {
            return container.get(this.state);
        }
        throw new Error('Invalid strategy: ' + this.strategy);
    };
    StrategyResolver = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Number, Object])
    ], StrategyResolver);
    return StrategyResolver;
}());
var Lazy = (function () {
    function Lazy(key) {
        this._key = key;
    }
    Lazy_1 = Lazy;
    Lazy.prototype.get = function (container) {
        var _this = this;
        return function () { return container.get(_this._key); };
    };
    Lazy.of = function (key) {
        return new Lazy_1(key);
    };
    var Lazy_1;
    Lazy = Lazy_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Lazy);
    return Lazy;
}());
var All = (function () {
    function All(key) {
        this._key = key;
    }
    All_1 = All;
    All.prototype.get = function (container) {
        return container.getAll(this._key);
    };
    All.of = function (key) {
        return new All_1(key);
    };
    var All_1;
    All = All_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], All);
    return All;
}());
var Optional = (function () {
    function Optional(key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        this._key = key;
        this._checkParent = checkParent;
    }
    Optional_1 = Optional;
    Optional.prototype.get = function (container) {
        if (container.hasResolver(this._key, this._checkParent)) {
            return container.get(this._key);
        }
        return null;
    };
    Optional.of = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        return new Optional_1(key, checkParent);
    };
    var Optional_1;
    Optional = Optional_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Boolean])
    ], Optional);
    return Optional;
}());
var Parent = (function () {
    function Parent(key) {
        this._key = key;
    }
    Parent_1 = Parent;
    Parent.prototype.get = function (container) {
        return container.parent ? container.parent.get(this._key) : null;
    };
    Parent.of = function (key) {
        return new Parent_1(key);
    };
    var Parent_1;
    Parent = Parent_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Parent);
    return Parent;
}());
var Factory = (function () {
    function Factory(key) {
        this._key = key;
    }
    Factory_1 = Factory;
    Factory.prototype.get = function (container) {
        var fn = this._key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === Strategy.function) {
            fn = resolver.state;
        }
        return function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            return container.invoke(fn, rest);
        };
    };
    Factory.of = function (key) {
        return new Factory_1(key);
    };
    var Factory_1;
    Factory = Factory_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Factory);
    return Factory;
}());
var NewInstance = (function () {
    function NewInstance(key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        this.key = key;
        this.asKey = key;
        this.dynamicDependencies = dynamicDependencies;
    }
    NewInstance_1 = NewInstance;
    NewInstance.prototype.get = function (container) {
        var dynamicDependencies = this.dynamicDependencies.length > 0
            ? this.dynamicDependencies.map(function (dependency) {
                return dependency['protocol:aurelia:resolver']
                    ? dependency.get(container)
                    : container.get(dependency);
            })
            : undefined;
        var fn = this.key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === 3) {
            fn = resolver.state;
        }
        var instance = container.invoke(fn, dynamicDependencies);
        container.registerInstance(this.asKey, instance);
        return instance;
    };
    NewInstance.prototype.as = function (key) {
        this.asKey = key;
        return this;
    };
    NewInstance.of = function (key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        return new (NewInstance_1.bind.apply(NewInstance_1, [void 0, key].concat(dynamicDependencies)))();
    };
    var NewInstance_1;
    NewInstance = NewInstance_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Object])
    ], NewInstance);
    return NewInstance;
}());
function getDecoratorDependencies(target) {
    autoinject(target);
    return target.inject;
}
function lazy(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Lazy.of(keyValue);
    };
}
function all(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = All.of(keyValue);
    };
}
function optional(checkParentOrTarget) {
    if (checkParentOrTarget === void 0) { checkParentOrTarget = true; }
    var deco = function (checkParent) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = Optional.of(inject$$1[index], checkParent);
        };
    };
    if (typeof checkParentOrTarget === 'boolean') {
        return deco(checkParentOrTarget);
    }
    return deco(true);
}
function parent(target, _key, index) {
    var inject$$1 = getDecoratorDependencies(target);
    inject$$1[index] = Parent.of(inject$$1[index]);
}
function factory(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Factory.of(keyValue);
    };
}
function newInstance(asKeyOrTarget) {
    var dynamicDependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dynamicDependencies[_i - 1] = arguments[_i];
    }
    var deco = function (asKey) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = NewInstance.of.apply(NewInstance, [inject$$1[index]].concat(dynamicDependencies));
            if (!!asKey) {
                inject$$1[index].as(asKey);
            }
        };
    };
    if (arguments.length >= 1) {
        return deco(asKeyOrTarget);
    }
    return deco();
}

function validateKey(key) {
    if (key === null || key === undefined) {
        throw new Error('key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
    }
}
var _emptyParameters = Object.freeze([]);
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration = 'aurelia:registration';
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker = 'aurelia:invoker';
var resolverDecorates = resolver.decorates;
var InvocationHandler = (function () {
    function InvocationHandler(fn, invoker, dependencies) {
        this.fn = fn;
        this.invoker = invoker;
        this.dependencies = dependencies;
    }
    InvocationHandler.prototype.invoke = function (container, dynamicDependencies) {
        return dynamicDependencies !== undefined
            ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies)
            : this.invoker.invoke(container, this.fn, this.dependencies);
    };
    return InvocationHandler;
}());
function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);
    var lookup;
    while (i--) {
        lookup = staticDependencies[i];
        if (lookup === null || lookup === undefined) {
            throw new Error('Constructor Parameter with index ' +
                i +
                ' cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
        }
        else {
            args[i] = container.get(lookup);
        }
    }
    if (dynamicDependencies !== undefined) {
        args = args.concat(dynamicDependencies);
    }
    return Reflect.construct(fn, args);
}
var classInvoker = {
    invoke: function (container, Type, deps) {
        var instances = deps.map(function (dep) { return container.get(dep); });
        return Reflect.construct(Type, instances);
    },
    invokeWithDynamicDependencies: invokeWithDynamicDependencies
};
function getDependencies(f) {
    if (!f.hasOwnProperty('inject')) {
        return [];
    }
    if (typeof f.inject === 'function') {
        return f.inject();
    }
    return f.inject;
}
var Container = (function () {
    function Container(configuration) {
        if (configuration === undefined) {
            configuration = {};
        }
        this._configuration = configuration;
        this._onHandlerCreated = configuration.onHandlerCreated;
        this._handlers =
            configuration.handlers || (configuration.handlers = new Map());
        this._resolvers = new Map();
        this.root = this;
        this.parent = null;
    }
    Container.prototype.makeGlobal = function () {
        Container.instance = this;
        return this;
    };
    Container.prototype.setHandlerCreatedCallback = function (onHandlerCreated) {
        this._onHandlerCreated = onHandlerCreated;
        this._configuration.onHandlerCreated = onHandlerCreated;
    };
    Container.prototype.registerInstance = function (key, instance) {
        return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
    };
    Container.prototype.registerSingleton = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
    };
    Container.prototype.registerTransient = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
    };
    Container.prototype.registerHandler = function (key, handler) {
        return this.registerResolver(key, new StrategyResolver(3, handler));
    };
    Container.prototype.registerAlias = function (originalKey, aliasKey) {
        return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
    };
    Container.prototype.registerResolver = function (key, resolver$$1) {
        validateKey(key);
        var allResolvers = this._resolvers;
        var result = allResolvers.get(key);
        if (result === undefined) {
            allResolvers.set(key, resolver$$1);
        }
        else if (result.strategy === 4) {
            result.state.push(resolver$$1);
        }
        else {
            allResolvers.set(key, new StrategyResolver(4, [result, resolver$$1]));
        }
        return resolver$$1;
    };
    Container.prototype.autoRegister = function (key, fn) {
        fn = fn === undefined ? key : fn;
        if (typeof fn === 'function') {
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, fn);
            if (registration === undefined) {
                return this.registerResolver(key, new StrategyResolver(1, fn));
            }
            return registration.registerResolver(this, key, fn);
        }
        return this.registerResolver(key, new StrategyResolver(0, fn));
    };
    Container.prototype.autoRegisterAll = function (fns) {
        var i = fns.length;
        while (i--) {
            this.autoRegister(fns[i]);
        }
    };
    Container.prototype.unregister = function (key) {
        this._resolvers.delete(key);
    };
    Container.prototype.hasResolver = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = false; }
        validateKey(key);
        return (this._resolvers.has(key) ||
            (checkParent &&
                this.parent !== null &&
                this.parent.hasResolver(key, checkParent)));
    };
    Container.prototype.getResolver = function (key) {
        return this._resolvers.get(key);
    };
    Container.prototype.get = function (key) {
        validateKey(key);
        if (key === Container) {
            return this;
        }
        if (resolverDecorates(key)) {
            return key.get(this, key);
        }
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, key);
            if (registration === undefined) {
                return this.parent._get(key);
            }
            return registration.registerResolver(this, key, key).get(this, key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype._get = function (key) {
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            return this.parent._get(key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype.getAll = function (key) {
        validateKey(key);
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return _emptyParameters;
            }
            return this.parent.getAll(key);
        }
        if (resolver$$1.strategy === 4) {
            var state = resolver$$1.state;
            var i = state.length;
            var results = new Array(i);
            while (i--) {
                results[i] = state[i].get(this, key);
            }
            return results;
        }
        return [resolver$$1.get(this, key)];
    };
    Container.prototype.createChild = function () {
        var child = new Container(this._configuration);
        child.root = this.root;
        child.parent = this;
        return child;
    };
    Container.prototype.invoke = function (fn, dynamicDependencies) {
        try {
            var handler = this._handlers.get(fn);
            if (handler === undefined) {
                handler = this._createInvocationHandler(fn);
                this._handlers.set(fn, handler);
            }
            return handler.invoke(this, dynamicDependencies);
        }
        catch (e) {
            throw new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.AggregateError("Error invoking " + fn.name + ". Check the inner error for details.", e, true);
        }
    };
    Container.prototype._createInvocationHandler = function (fn) {
        var dependencies;
        if (fn.inject === undefined) {
            dependencies =
                aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.paramTypes, fn) || _emptyParameters;
        }
        else {
            dependencies = [];
            var ctor = fn;
            while (typeof ctor === 'function') {
                dependencies.push.apply(dependencies, getDependencies(ctor));
                ctor = Object.getPrototypeOf(ctor);
            }
        }
        var invoker = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, fn) || classInvoker;
        var handler = new InvocationHandler(fn, invoker, dependencies);
        return this._onHandlerCreated !== undefined
            ? this._onHandlerCreated(handler)
            : handler;
    };
    return Container;
}());

function invoker(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, value, target);
    };
}
function invokeAsFactory(potentialTarget) {
    var deco = function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, FactoryInvoker.instance, target);
    };
    return potentialTarget ? deco(potentialTarget) : deco;
}
var FactoryInvoker = (function () {
    function FactoryInvoker() {
    }
    FactoryInvoker.prototype.invoke = function (container, fn, dependencies) {
        var i = dependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(dependencies[i]);
        }
        return fn.apply(undefined, args);
    };
    FactoryInvoker.prototype.invokeWithDynamicDependencies = function (container, fn, staticDependencies, dynamicDependencies) {
        var i = staticDependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(staticDependencies[i]);
        }
        if (dynamicDependencies !== undefined) {
            args = args.concat(dynamicDependencies);
        }
        return fn.apply(undefined, args);
    };
    return FactoryInvoker;
}());
FactoryInvoker.instance = new FactoryInvoker();

function registration(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, value, target);
    };
}
function transient(key) {
    return registration(new TransientRegistration(key));
}
function singleton(keyOrRegisterInChild, registerInChild) {
    if (registerInChild === void 0) { registerInChild = false; }
    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
}
var TransientRegistration = (function () {
    function TransientRegistration(key) {
        this._key = key;
    }
    TransientRegistration.prototype.registerResolver = function (container, key, fn) {
        var existingResolver = container.getResolver(this._key || key);
        return existingResolver === undefined
            ? container.registerTransient((this._key || key), fn)
            : existingResolver;
    };
    return TransientRegistration;
}());
var SingletonRegistration = (function () {
    function SingletonRegistration(keyOrRegisterInChild, registerInChild) {
        if (registerInChild === void 0) { registerInChild = false; }
        if (typeof keyOrRegisterInChild === 'boolean') {
            this._registerInChild = keyOrRegisterInChild;
        }
        else {
            this._key = keyOrRegisterInChild;
            this._registerInChild = registerInChild;
        }
    }
    SingletonRegistration.prototype.registerResolver = function (container, key, fn) {
        var targetContainer = this._registerInChild ? container : container.root;
        var existingResolver = targetContainer.getResolver(this._key || key);
        return existingResolver === undefined
            ? targetContainer.registerSingleton(this._key || key, fn)
            : existingResolver;
    };
    return SingletonRegistration;
}());




/***/ }),

/***/ "aurelia-event-aggregator":
/*!***********************************************************************************************!*\
  !*** ./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventAggregator": () => (/* binding */ EventAggregator),
/* harmony export */   "includeEventsIn": () => (/* binding */ includeEventsIn),
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ 8099);




var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('event-aggregator');

var Handler = function () {
  function Handler(messageType, callback) {
    

    this.messageType = messageType;
    this.callback = callback;
  }

  Handler.prototype.handle = function handle(message) {
    if (message instanceof this.messageType) {
      this.callback.call(null, message);
    }
  };

  return Handler;
}();

function invokeCallback(callback, data, event) {
  try {
    callback(data, event);
  } catch (e) {
    logger.error(e);
  }
}

function invokeHandler(handler, data) {
  try {
    handler.handle(data);
  } catch (e) {
    logger.error(e);
  }
}

var EventAggregator = function () {
  function EventAggregator() {
    

    this.eventLookup = {};
    this.messageHandlers = [];
  }

  EventAggregator.prototype.publish = function publish(event, data) {
    var subscribers = void 0;
    var i = void 0;

    if (!event) {
      throw new Error('Event was invalid.');
    }

    if (typeof event === 'string') {
      subscribers = this.eventLookup[event];
      if (subscribers) {
        subscribers = subscribers.slice();
        i = subscribers.length;

        while (i--) {
          invokeCallback(subscribers[i], data, event);
        }
      }
    } else {
      subscribers = this.messageHandlers.slice();
      i = subscribers.length;

      while (i--) {
        invokeHandler(subscribers[i], event);
      }
    }
  };

  EventAggregator.prototype.subscribe = function subscribe(event, callback) {
    var handler = void 0;
    var subscribers = void 0;

    if (!event) {
      throw new Error('Event channel/type was invalid.');
    }

    if (typeof event === 'string') {
      handler = callback;
      subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
    } else {
      handler = new Handler(event, callback);
      subscribers = this.messageHandlers;
    }

    subscribers.push(handler);

    return {
      dispose: function dispose() {
        var idx = subscribers.indexOf(handler);
        if (idx !== -1) {
          subscribers.splice(idx, 1);
        }
      }
    };
  };

  EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
    var sub = this.subscribe(event, function (a, b) {
      sub.dispose();
      return callback(a, b);
    });

    return sub;
  };

  return EventAggregator;
}();

function includeEventsIn(obj) {
  var ea = new EventAggregator();

  obj.subscribeOnce = function (event, callback) {
    return ea.subscribeOnce(event, callback);
  };

  obj.subscribe = function (event, callback) {
    return ea.subscribe(event, callback);
  };

  obj.publish = function (event, data) {
    ea.publish(event, data);
  };

  return ea;
}

function configure(config) {
  config.instance(EventAggregator, includeEventsIn(config.aurelia));
}

/***/ }),

/***/ "aurelia-framework":
/*!*********************************************************************************!*\
  !*** ./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aurelia": () => (/* binding */ Aurelia),
/* harmony export */   "FrameworkConfiguration": () => (/* binding */ FrameworkConfiguration),
/* harmony export */   "All": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.All),
/* harmony export */   "Container": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.Container),
/* harmony export */   "Factory": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.Factory),
/* harmony export */   "FactoryInvoker": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.FactoryInvoker),
/* harmony export */   "InvocationHandler": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.InvocationHandler),
/* harmony export */   "Lazy": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.Lazy),
/* harmony export */   "NewInstance": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.NewInstance),
/* harmony export */   "Optional": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.Optional),
/* harmony export */   "Parent": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.Parent),
/* harmony export */   "SingletonRegistration": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.SingletonRegistration),
/* harmony export */   "Strategy": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.Strategy),
/* harmony export */   "StrategyResolver": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.StrategyResolver),
/* harmony export */   "TransientRegistration": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.TransientRegistration),
/* harmony export */   "_emptyParameters": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__._emptyParameters),
/* harmony export */   "all": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.all),
/* harmony export */   "autoinject": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.autoinject),
/* harmony export */   "factory": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.factory),
/* harmony export */   "getDecoratorDependencies": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.getDecoratorDependencies),
/* harmony export */   "inject": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.inject),
/* harmony export */   "invokeAsFactory": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.invokeAsFactory),
/* harmony export */   "invoker": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.invoker),
/* harmony export */   "lazy": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.lazy),
/* harmony export */   "newInstance": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.newInstance),
/* harmony export */   "optional": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.optional),
/* harmony export */   "parent": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.parent),
/* harmony export */   "registration": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.registration),
/* harmony export */   "resolver": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.resolver),
/* harmony export */   "singleton": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.singleton),
/* harmony export */   "transient": () => (/* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.transient),
/* harmony export */   "AccessKeyed": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.AccessKeyed),
/* harmony export */   "AccessMember": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.AccessMember),
/* harmony export */   "AccessScope": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.AccessScope),
/* harmony export */   "AccessThis": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.AccessThis),
/* harmony export */   "Assign": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Assign),
/* harmony export */   "Binary": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Binary),
/* harmony export */   "Binding": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Binding),
/* harmony export */   "BindingBehavior": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.BindingBehavior),
/* harmony export */   "BindingBehaviorResource": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.BindingBehaviorResource),
/* harmony export */   "BindingEngine": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.BindingEngine),
/* harmony export */   "BindingExpression": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.BindingExpression),
/* harmony export */   "Call": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Call),
/* harmony export */   "CallExpression": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.CallExpression),
/* harmony export */   "CallFunction": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.CallFunction),
/* harmony export */   "CallMember": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.CallMember),
/* harmony export */   "CallScope": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.CallScope),
/* harmony export */   "CheckedObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.CheckedObserver),
/* harmony export */   "ClassObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ClassObserver),
/* harmony export */   "CollectionLengthObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.CollectionLengthObserver),
/* harmony export */   "ComputedExpression": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ComputedExpression),
/* harmony export */   "Conditional": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Conditional),
/* harmony export */   "DataAttributeObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.DataAttributeObserver),
/* harmony export */   "DirtyCheckProperty": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.DirtyCheckProperty),
/* harmony export */   "DirtyChecker": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.DirtyChecker),
/* harmony export */   "EventManager": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.EventManager),
/* harmony export */   "EventSubscriber": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.EventSubscriber),
/* harmony export */   "Expression": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Expression),
/* harmony export */   "ExpressionCloner": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ExpressionCloner),
/* harmony export */   "ExpressionObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ExpressionObserver),
/* harmony export */   "Listener": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Listener),
/* harmony export */   "ListenerExpression": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ListenerExpression),
/* harmony export */   "LiteralArray": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.LiteralArray),
/* harmony export */   "LiteralObject": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.LiteralObject),
/* harmony export */   "LiteralPrimitive": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.LiteralPrimitive),
/* harmony export */   "LiteralString": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.LiteralString),
/* harmony export */   "LiteralTemplate": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.LiteralTemplate),
/* harmony export */   "ModifyCollectionObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ModifyCollectionObserver),
/* harmony export */   "NameExpression": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.NameExpression),
/* harmony export */   "ObjectObservationAdapter": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ObjectObservationAdapter),
/* harmony export */   "ObserverLocator": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ObserverLocator),
/* harmony export */   "Parser": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Parser),
/* harmony export */   "ParserImplementation": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ParserImplementation),
/* harmony export */   "PrimitiveObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.PrimitiveObserver),
/* harmony export */   "SVGAnalyzer": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.SVGAnalyzer),
/* harmony export */   "SelectValueObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.SelectValueObserver),
/* harmony export */   "SetterObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.SetterObserver),
/* harmony export */   "StyleObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.StyleObserver),
/* harmony export */   "Unary": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Unary),
/* harmony export */   "Unparser": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.Unparser),
/* harmony export */   "ValueAttributeObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ValueAttributeObserver),
/* harmony export */   "ValueConverter": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ValueConverter),
/* harmony export */   "ValueConverterResource": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.ValueConverterResource),
/* harmony export */   "XLinkAttributeObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.XLinkAttributeObserver),
/* harmony export */   "bindingBehavior": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.bindingBehavior),
/* harmony export */   "bindingMode": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.bindingMode),
/* harmony export */   "calcSplices": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.calcSplices),
/* harmony export */   "camelCase": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.camelCase),
/* harmony export */   "cloneExpression": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.cloneExpression),
/* harmony export */   "computedFrom": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.computedFrom),
/* harmony export */   "connectBindingToSignal": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.connectBindingToSignal),
/* harmony export */   "connectable": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.connectable),
/* harmony export */   "createComputedObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.createComputedObserver),
/* harmony export */   "createOverrideContext": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.createOverrideContext),
/* harmony export */   "createScopeForTest": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.createScopeForTest),
/* harmony export */   "dataAttributeAccessor": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.dataAttributeAccessor),
/* harmony export */   "declarePropertyDependencies": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.declarePropertyDependencies),
/* harmony export */   "delegationStrategy": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.delegationStrategy),
/* harmony export */   "disableConnectQueue": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.disableConnectQueue),
/* harmony export */   "elements": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.elements),
/* harmony export */   "enableConnectQueue": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.enableConnectQueue),
/* harmony export */   "enqueueBindingConnect": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.enqueueBindingConnect),
/* harmony export */   "getArrayObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.getArrayObserver),
/* harmony export */   "getChangeRecords": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.getChangeRecords),
/* harmony export */   "getConnectQueueSize": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.getConnectQueueSize),
/* harmony export */   "getContextFor": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.getContextFor),
/* harmony export */   "getMapObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.getMapObserver),
/* harmony export */   "getSetObserver": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.getSetObserver),
/* harmony export */   "hasDeclaredDependencies": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.hasDeclaredDependencies),
/* harmony export */   "mergeSplice": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.mergeSplice),
/* harmony export */   "observable": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.observable),
/* harmony export */   "presentationAttributes": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.presentationAttributes),
/* harmony export */   "presentationElements": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.presentationElements),
/* harmony export */   "projectArraySplices": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.projectArraySplices),
/* harmony export */   "propertyAccessor": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.propertyAccessor),
/* harmony export */   "setConnectQueueThreshold": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.setConnectQueueThreshold),
/* harmony export */   "signalBindings": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.signalBindings),
/* harmony export */   "sourceContext": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.sourceContext),
/* harmony export */   "subscriberCollection": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.subscriberCollection),
/* harmony export */   "targetContext": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.targetContext),
/* harmony export */   "valueConverter": () => (/* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_6__.valueConverter),
/* harmony export */   "Origin": () => (/* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__.Origin),
/* harmony export */   "decorators": () => (/* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__.decorators),
/* harmony export */   "deprecated": () => (/* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__.deprecated),
/* harmony export */   "metadata": () => (/* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__.metadata),
/* harmony export */   "mixin": () => (/* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__.mixin),
/* harmony export */   "protocol": () => (/* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__.protocol),
/* harmony export */   "Animator": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Animator),
/* harmony export */   "BehaviorInstruction": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BehaviorInstruction),
/* harmony export */   "BehaviorPropertyObserver": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BehaviorPropertyObserver),
/* harmony export */   "BindableProperty": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindableProperty),
/* harmony export */   "BindingLanguage": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindingLanguage),
/* harmony export */   "BoundViewFactory": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory),
/* harmony export */   "CompositionEngine": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionEngine),
/* harmony export */   "CompositionTransaction": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransaction),
/* harmony export */   "CompositionTransactionNotifier": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransactionNotifier),
/* harmony export */   "CompositionTransactionOwnershipToken": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransactionOwnershipToken),
/* harmony export */   "Controller": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Controller),
/* harmony export */   "ConventionalViewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ConventionalViewStrategy),
/* harmony export */   "ElementConfigResource": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ElementConfigResource),
/* harmony export */   "ElementEvents": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ElementEvents),
/* harmony export */   "HtmlBehaviorResource": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.HtmlBehaviorResource),
/* harmony export */   "InlineViewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.InlineViewStrategy),
/* harmony export */   "ModuleAnalyzer": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ModuleAnalyzer),
/* harmony export */   "NoViewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.NoViewStrategy),
/* harmony export */   "PassThroughSlot": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.PassThroughSlot),
/* harmony export */   "RelativeViewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.RelativeViewStrategy),
/* harmony export */   "ResourceDescription": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceDescription),
/* harmony export */   "ResourceLoadContext": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceLoadContext),
/* harmony export */   "ResourceModule": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceModule),
/* harmony export */   "ShadowDOM": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ShadowDOM),
/* harmony export */   "ShadowSlot": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ShadowSlot),
/* harmony export */   "SlotCustomAttribute": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SlotCustomAttribute),
/* harmony export */   "StaticViewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.StaticViewStrategy),
/* harmony export */   "SwapStrategies": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SwapStrategies),
/* harmony export */   "TargetInstruction": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TargetInstruction),
/* harmony export */   "TemplateRegistryViewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplateRegistryViewStrategy),
/* harmony export */   "TemplatingEngine": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine),
/* harmony export */   "View": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.View),
/* harmony export */   "ViewCompileInstruction": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewCompileInstruction),
/* harmony export */   "ViewCompiler": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewCompiler),
/* harmony export */   "ViewEngine": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine),
/* harmony export */   "ViewEngineHooksResource": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngineHooksResource),
/* harmony export */   "ViewFactory": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewFactory),
/* harmony export */   "ViewLocator": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewLocator),
/* harmony export */   "ViewResources": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources),
/* harmony export */   "ViewSlot": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot),
/* harmony export */   "_hyphenate": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__._hyphenate),
/* harmony export */   "_isAllWhitespace": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__._isAllWhitespace),
/* harmony export */   "animationEvent": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.animationEvent),
/* harmony export */   "behavior": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.behavior),
/* harmony export */   "bindable": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable),
/* harmony export */   "child": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.child),
/* harmony export */   "children": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.children),
/* harmony export */   "containerless": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.containerless),
/* harmony export */   "customAttribute": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute),
/* harmony export */   "customElement": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customElement),
/* harmony export */   "dynamicOptions": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.dynamicOptions),
/* harmony export */   "elementConfig": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.elementConfig),
/* harmony export */   "inlineView": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.inlineView),
/* harmony export */   "noView": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.noView),
/* harmony export */   "processAttributes": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.processAttributes),
/* harmony export */   "processContent": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.processContent),
/* harmony export */   "resource": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.resource),
/* harmony export */   "templateController": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController),
/* harmony export */   "useShadowDOM": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useShadowDOM),
/* harmony export */   "useView": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useView),
/* harmony export */   "useViewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useViewStrategy),
/* harmony export */   "validateBehaviorName": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.validateBehaviorName),
/* harmony export */   "view": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.view),
/* harmony export */   "viewEngineHooks": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewEngineHooks),
/* harmony export */   "viewResources": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewResources),
/* harmony export */   "viewStrategy": () => (/* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewStrategy),
/* harmony export */   "Loader": () => (/* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_2__.Loader),
/* harmony export */   "TemplateDependency": () => (/* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_2__.TemplateDependency),
/* harmony export */   "TemplateRegistryEntry": () => (/* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_2__.TemplateRegistryEntry),
/* harmony export */   "TaskQueue": () => (/* reexport safe */ aurelia_task_queue__WEBPACK_IMPORTED_MODULE_8__.TaskQueue),
/* harmony export */   "buildQueryString": () => (/* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_5__.buildQueryString),
/* harmony export */   "join": () => (/* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_5__.join),
/* harmony export */   "parseQueryString": () => (/* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_5__.parseQueryString),
/* harmony export */   "relativeToFile": () => (/* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_5__.relativeToFile),
/* harmony export */   "AggregateError": () => (/* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.AggregateError),
/* harmony export */   "DOM": () => (/* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM),
/* harmony export */   "FEATURE": () => (/* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.FEATURE),
/* harmony export */   "PLATFORM": () => (/* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.PLATFORM),
/* harmony export */   "initializePAL": () => (/* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.initializePAL),
/* harmony export */   "isInitialized": () => (/* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.isInitialized),
/* harmony export */   "reset": () => (/* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.reset),
/* harmony export */   "LogManager": () => (/* binding */ LogManager)
/* harmony export */ });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ 8099);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-loader */ 209);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-path */ 8627);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aurelia-metadata */ 1383);
/* harmony import */ var aurelia_task_queue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aurelia-task-queue */ 8318);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };










function preventActionlessFormSubmit() {
  aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.addEventListener('submit', function (evt) {
    var target = evt.target;
    var action = target.action;

    if (target.tagName.toLowerCase() === 'form' && !action) {
      evt.preventDefault();
    }
  });
}

var Aurelia = function () {
  function Aurelia(loader, container, resources) {
    

    this.loader = loader || new aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.PLATFORM.Loader();
    this.container = container || new aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__.Container().makeGlobal();
    this.resources = resources || new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources();
    this.use = new FrameworkConfiguration(this);
    this.logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('aurelia');
    this.hostConfigured = false;
    this.host = null;

    this.use.instance(Aurelia, this);
    this.use.instance(aurelia_loader__WEBPACK_IMPORTED_MODULE_2__.Loader, this.loader);
    this.use.instance(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources, this.resources);
  }

  Aurelia.prototype.start = function start() {
    var _this = this;

    if (this._started) {
      return this._started;
    }

    this.logger.info('Aurelia Starting');
    return this._started = this.use.apply().then(function () {
      preventActionlessFormSubmit();

      if (!_this.container.hasResolver(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindingLanguage)) {
        var message = 'You must configure Aurelia with a BindingLanguage implementation.';
        _this.logger.error(message);
        throw new Error(message);
      }

      _this.logger.info('Aurelia Started');
      var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
      aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.dispatchEvent(evt);
      return _this;
    });
  };

  Aurelia.prototype.enhance = function enhance() {
    var _this2 = this;

    var bindingContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var applicationHost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    this._configureHost(applicationHost || aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.querySelectorAll('body')[0]);

    return new Promise(function (resolve) {
      var engine = _this2.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine);
      _this2.root = engine.enhance({ container: _this2.container, element: _this2.host, resources: _this2.resources, bindingContext: bindingContext });
      _this2.root.attached();
      _this2._onAureliaComposed();
      resolve(_this2);
    });
  };

  Aurelia.prototype.setRoot = function setRoot() {
    var _this3 = this;

    var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var applicationHost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var instruction = {};

    if (this.root && this.root.viewModel && this.root.viewModel.router) {
      this.root.viewModel.router.deactivate();
      this.root.viewModel.router.reset();
    }

    this._configureHost(applicationHost);

    var engine = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine);
    var transaction = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransaction);
    delete transaction.initialComposition;

    if (!root) {
      if (this.configModuleId) {
        root = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_5__.relativeToFile)('./app', this.configModuleId);
      } else {
        root = 'app';
      }
    }

    instruction.viewModel = root;
    instruction.container = instruction.childContainer = this.container;
    instruction.viewSlot = this.hostSlot;
    instruction.host = this.host;

    return engine.compose(instruction).then(function (r) {
      _this3.root = r;
      instruction.viewSlot.attached();
      _this3._onAureliaComposed();
      return _this3;
    });
  };

  Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
    if (this.hostConfigured) {
      return;
    }
    applicationHost = applicationHost || this.host;

    if (!applicationHost || typeof applicationHost === 'string') {
      this.host = aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.getElementById(applicationHost || 'applicationHost');
    } else {
      this.host = applicationHost;
    }

    if (!this.host) {
      throw new Error('No applicationHost was specified.');
    }

    this.hostConfigured = true;
    this.host.aurelia = this;
    this.hostSlot = new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot(this.host, true);
    this.hostSlot.transformChildNodesIntoView();
    this.container.registerInstance(aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.boundary, this.host);
  };

  Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
    var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
    setTimeout(function () {
      return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__.DOM.dispatchEvent(evt);
    }, 1);
  };

  return Aurelia;
}();

var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('aurelia');
var extPattern = /\.[^/.]+$/;

function runTasks(config, tasks) {
  var current = void 0;
  var next = function next() {
    current = tasks.shift();
    if (current) {
      return Promise.resolve(current(config)).then(next);
    }

    return Promise.resolve();
  };

  return next();
}

function loadPlugin(fwConfig, loader, info) {
  logger.debug('Loading plugin ' + info.moduleId + '.');
  if (typeof info.moduleId === 'string') {
    fwConfig.resourcesRelativeTo = info.resourcesRelativeTo;

    var id = info.moduleId;

    if (info.resourcesRelativeTo.length > 1) {
      return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function (normalizedId) {
        return _loadPlugin(normalizedId);
      });
    }

    return _loadPlugin(id);
  } else if (typeof info.configure === 'function') {
    if (fwConfig.configuredPlugins.indexOf(info.configure) !== -1) {
      return Promise.resolve();
    }
    fwConfig.configuredPlugins.push(info.configure);

    return Promise.resolve(info.configure.call(null, fwConfig, info.config || {}));
  }
  throw new Error(invalidConfigMsg(info.moduleId || info.configure, 'plugin'));

  function _loadPlugin(moduleId) {
    return loader.loadModule(moduleId).then(function (m) {
      if ('configure' in m) {
        if (fwConfig.configuredPlugins.indexOf(m.configure) !== -1) {
          return Promise.resolve();
        }
        return Promise.resolve(m.configure(fwConfig, info.config || {})).then(function () {
          fwConfig.configuredPlugins.push(m.configure);
          fwConfig.resourcesRelativeTo = null;
          logger.debug('Configured plugin ' + info.moduleId + '.');
        });
      }

      fwConfig.resourcesRelativeTo = null;
      logger.debug('Loaded plugin ' + info.moduleId + '.');
    });
  }
}

function loadResources(aurelia, resourcesToLoad, appResources) {
  if (Object.keys(resourcesToLoad).length === 0) {
    return Promise.resolve();
  }
  var viewEngine = aurelia.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine);

  return Promise.all(Object.keys(resourcesToLoad).map(function (n) {
    return _normalize(resourcesToLoad[n]);
  })).then(function (loads) {
    var names = [];
    var importIds = [];

    loads.forEach(function (l) {
      names.push(undefined);
      importIds.push(l.importId);
    });

    return viewEngine.importViewResources(importIds, names, appResources);
  });

  function _normalize(load) {
    var moduleId = load.moduleId;
    var ext = getExt(moduleId);

    if (isOtherResource(moduleId)) {
      moduleId = removeExt(moduleId);
    }

    return aurelia.loader.normalize(moduleId, load.relativeTo).then(function (normalized) {
      return {
        name: load.moduleId,
        importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
      };
    });
  }

  function isOtherResource(name) {
    var ext = getExt(name);
    if (!ext) return false;
    if (ext === '') return false;
    if (ext === '.js' || ext === '.ts') return false;
    return true;
  }

  function removeExt(name) {
    return name.replace(extPattern, '');
  }

  function addOriginalExt(normalized, ext) {
    return removeExt(normalized) + '.' + ext;
  }
}

function getExt(name) {
  var match = name.match(extPattern);
  if (match && match.length > 0) {
    return match[0].split('.')[1];
  }
}

function loadBehaviors(config) {
  return Promise.all(config.behaviorsToLoad.map(function (m) {
    return m.load(config.container, m.target);
  })).then(function () {
    config.behaviorsToLoad = null;
  });
}

function assertProcessed(plugins) {
  if (plugins.processed) {
    throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
  }
}

function invalidConfigMsg(cfg, type) {
  return 'Invalid ' + type + ' [' + cfg + '], ' + type + ' must be specified as functions or relative module IDs.';
}

var FrameworkConfiguration = function () {
  function FrameworkConfiguration(aurelia) {
    var _this4 = this;

    

    this.aurelia = aurelia;
    this.container = aurelia.container;

    this.info = [];
    this.processed = false;
    this.preTasks = [];
    this.postTasks = [];

    this.behaviorsToLoad = [];

    this.configuredPlugins = [];
    this.resourcesToLoad = {};
    this.preTask(function () {
      return aurelia.loader.normalize('aurelia-bootstrapper').then(function (name) {
        return _this4.bootstrapperName = name;
      });
    });
    this.postTask(function () {
      return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
    });
  }

  FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
    this.container.registerInstance(type, _instance);
    return this;
  };

  FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
    this.container.registerSingleton(type, implementation);
    return this;
  };

  FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
    this.container.registerTransient(type, implementation);
    return this;
  };

  FrameworkConfiguration.prototype.preTask = function preTask(task) {
    assertProcessed(this);
    this.preTasks.push(task);
    return this;
  };

  FrameworkConfiguration.prototype.postTask = function postTask(task) {
    assertProcessed(this);
    this.postTasks.push(task);
    return this;
  };

  FrameworkConfiguration.prototype.feature = function feature(plugin) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (typeof plugin === 'undefined' ? 'undefined' : _typeof(plugin)) {
      case 'string':
        var hasIndex = /\/index$/i.test(plugin);
        var _moduleId = hasIndex || getExt(plugin) ? plugin : plugin + '/index';
        var root = hasIndex ? plugin.substr(0, plugin.length - 6) : plugin;
        this.info.push({ moduleId: _moduleId, resourcesRelativeTo: [root, ''], config: config });
        break;

      case 'function':
        this.info.push({ configure: plugin, config: config || {} });
        break;
      default:
        throw new Error(invalidConfigMsg(plugin, 'feature'));
    }
    return this;
  };

  FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
    var _this5 = this;

    assertProcessed(this);

    var toAdd = Array.isArray(resources) ? resources : arguments;
    var resource = void 0;
    var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

    for (var i = 0, ii = toAdd.length; i < ii; ++i) {
      resource = toAdd[i];
      switch (typeof resource === 'undefined' ? 'undefined' : _typeof(resource)) {
        case 'string':
          var parent = resourcesRelativeTo[0];
          var grandParent = resourcesRelativeTo[1];
          var name = resource;

          if ((resource.startsWith('./') || resource.startsWith('../')) && parent !== '') {
            name = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_5__.join)(parent, resource);
          }

          this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
          break;
        case 'function':
          var meta = this.aurelia.resources.autoRegister(this.container, resource);
          if (meta instanceof aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.HtmlBehaviorResource && meta.elementName !== null) {
            if (this.behaviorsToLoad.push(meta) === 1) {
              this.postTask(function () {
                return loadBehaviors(_this5);
              });
            }
          }
          break;
        default:
          throw new Error(invalidConfigMsg(resource, 'resource'));
      }
    }

    return this;
  };

  FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
    assertProcessed(this);
    this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
    return this;
  };

  FrameworkConfiguration.prototype.plugin = function plugin(_plugin, pluginConfig) {
    assertProcessed(this);

    var info = void 0;
    switch (typeof _plugin === 'undefined' ? 'undefined' : _typeof(_plugin)) {
      case 'string':
        info = { moduleId: _plugin, resourcesRelativeTo: [_plugin, ''], config: pluginConfig || {} };
        break;
      case 'function':
        info = { configure: _plugin, config: pluginConfig || {} };
        break;
      default:
        throw new Error(invalidConfigMsg(_plugin, 'plugin'));
    }
    this.info.push(info);
    return this;
  };

  FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
    var _this6 = this;

    var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
    this.info.push(plugin);

    this.preTask(function () {
      var relativeTo = [name, _this6.bootstrapperName];
      plugin.moduleId = name;
      plugin.resourcesRelativeTo = relativeTo;
      return Promise.resolve();
    });

    return this;
  };

  FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
    return this._addNormalizedPlugin('aurelia-templating-binding');
  };

  FrameworkConfiguration.prototype.router = function router() {
    return this._addNormalizedPlugin('aurelia-templating-router');
  };

  FrameworkConfiguration.prototype.history = function history() {
    return this._addNormalizedPlugin('aurelia-history-browser');
  };

  FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
    return this._addNormalizedPlugin('aurelia-templating-resources');
  };

  FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
    return this._addNormalizedPlugin('aurelia-event-aggregator');
  };

  FrameworkConfiguration.prototype.basicConfiguration = function basicConfiguration() {
    return this.defaultBindingLanguage().defaultResources().eventAggregator();
  };

  FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
    return this.basicConfiguration().history().router();
  };

  FrameworkConfiguration.prototype.developmentLogging = function developmentLogging(level) {
    var _this7 = this;

    var logLevel = level ? aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.logLevel[level] : undefined;

    if (logLevel === undefined) {
      logLevel = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.logLevel.debug;
    }

    this.preTask(function () {
      return _this7.aurelia.loader.normalize('aurelia-logging-console', _this7.bootstrapperName).then(function (name) {
        return _this7.aurelia.loader.loadModule(name).then(function (m) {
          aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.addAppender(new m.ConsoleAppender());
          aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.setLevel(logLevel);
        });
      });
    });

    return this;
  };

  FrameworkConfiguration.prototype.apply = function apply() {
    var _this8 = this;

    if (this.processed) {
      return Promise.resolve();
    }

    return runTasks(this, this.preTasks).then(function () {
      var loader = _this8.aurelia.loader;
      var info = _this8.info;
      var current = void 0;

      var next = function next() {
        current = info.shift();
        if (current) {
          return loadPlugin(_this8, loader, current).then(next);
        }

        _this8.processed = true;
        _this8.configuredPlugins = null;
        return Promise.resolve();
      };

      return next().then(function () {
        return runTasks(_this8, _this8.postTasks);
      });
    });
  };

  return FrameworkConfiguration;
}();













var LogManager = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__;

/***/ }),

/***/ "aurelia-history-browser":
/*!*********************************************************************************************!*\
  !*** ./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserHistory": () => (/* binding */ BrowserHistory),
/* harmony export */   "DefaultLinkHandler": () => (/* binding */ DefaultLinkHandler),
/* harmony export */   "LinkHandler": () => (/* binding */ LinkHandler),
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
/* harmony import */ var aurelia_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-history */ 1149);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var LinkHandler = (function () {
    function LinkHandler() {
    }
    LinkHandler.prototype.activate = function (history) { };
    LinkHandler.prototype.deactivate = function () { };
    return LinkHandler;
}());
var DefaultLinkHandler = (function (_super) {
    __extends(DefaultLinkHandler, _super);
    function DefaultLinkHandler() {
        var _this = _super.call(this) || this;
        _this.handler = function (e) {
            var _a = DefaultLinkHandler.getEventInfo(e), shouldHandleEvent = _a.shouldHandleEvent, href = _a.href;
            if (shouldHandleEvent) {
                e.preventDefault();
                _this.history.navigate(href);
            }
        };
        return _this;
    }
    DefaultLinkHandler.prototype.activate = function (history) {
        if (history._hasPushState) {
            this.history = history;
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.addEventListener('click', this.handler, true);
        }
    };
    DefaultLinkHandler.prototype.deactivate = function () {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.removeEventListener('click', this.handler, true);
    };
    DefaultLinkHandler.getEventInfo = function (event) {
        var $event = event;
        var info = {
            shouldHandleEvent: false,
            href: null,
            anchor: null
        };
        var target = DefaultLinkHandler.findClosestAnchor($event.target);
        if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
            return info;
        }
        if (hasAttribute(target, 'download')
            || hasAttribute(target, 'router-ignore')
            || hasAttribute(target, 'data-router-ignore')) {
            return info;
        }
        if ($event.altKey || $event.ctrlKey || $event.metaKey || $event.shiftKey) {
            return info;
        }
        var href = target.getAttribute('href');
        info.anchor = target;
        info.href = href;
        var leftButtonClicked = $event.which === 1;
        var isRelative = href && !(href.charAt(0) === '#' || (/^[a-z]+:/i).test(href));
        info.shouldHandleEvent = leftButtonClicked && isRelative;
        return info;
    };
    DefaultLinkHandler.findClosestAnchor = function (el) {
        while (el) {
            if (el.tagName === 'A') {
                return el;
            }
            el = el.parentNode;
        }
    };
    DefaultLinkHandler.targetIsThisWindow = function (target) {
        var targetWindow = target.getAttribute('target');
        var win = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global;
        return !targetWindow ||
            targetWindow === win.name ||
            targetWindow === '_self';
    };
    return DefaultLinkHandler;
}(LinkHandler));
var hasAttribute = function (el, attr) { return el.hasAttribute(attr); };

var BrowserHistory = (function (_super) {
    __extends(BrowserHistory, _super);
    function BrowserHistory(linkHandler) {
        var _this = _super.call(this) || this;
        _this._isActive = false;
        _this._checkUrlCallback = _this._checkUrl.bind(_this);
        _this.location = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.location;
        _this.history = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.history;
        _this.linkHandler = linkHandler;
        return _this;
    }
    BrowserHistory.prototype.activate = function (options) {
        if (this._isActive) {
            throw new Error('History has already been activated.');
        }
        var $history = this.history;
        var wantsPushState = !!options.pushState;
        this._isActive = true;
        var normalizedOptions = this.options = Object.assign({}, { root: '/' }, this.options, options);
        var rootUrl = this.root = ('/' + normalizedOptions.root + '/').replace(rootStripper, '/');
        var wantsHashChange = this._wantsHashChange = normalizedOptions.hashChange !== false;
        var hasPushState = this._hasPushState = !!(normalizedOptions.pushState && $history && $history.pushState);
        var eventName;
        if (hasPushState) {
            eventName = 'popstate';
        }
        else if (wantsHashChange) {
            eventName = 'hashchange';
        }
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.addEventListener(eventName, this._checkUrlCallback);
        if (wantsHashChange && wantsPushState) {
            var $location = this.location;
            var atRoot = $location.pathname.replace(/[^\/]$/, '$&/') === rootUrl;
            if (!hasPushState && !atRoot) {
                var fragment = this.fragment = this._getFragment(null, true);
                $location.replace(rootUrl + $location.search + '#' + fragment);
                return true;
            }
            else if (hasPushState && atRoot && $location.hash) {
                var fragment = this.fragment = this._getHash().replace(routeStripper, '');
                $history.replaceState({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title, rootUrl + fragment + $location.search);
            }
        }
        if (!this.fragment) {
            this.fragment = this._getFragment('');
        }
        this.linkHandler.activate(this);
        if (!normalizedOptions.silent) {
            return this._loadUrl('');
        }
    };
    BrowserHistory.prototype.deactivate = function () {
        var handler = this._checkUrlCallback;
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.removeEventListener('popstate', handler);
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.removeEventListener('hashchange', handler);
        this._isActive = false;
        this.linkHandler.deactivate();
    };
    BrowserHistory.prototype.getAbsoluteRoot = function () {
        var $location = this.location;
        var origin = createOrigin($location.protocol, $location.hostname, $location.port);
        return "" + origin + this.root;
    };
    BrowserHistory.prototype.navigate = function (fragment, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.trigger, trigger = _c === void 0 ? true : _c, _d = _b.replace, replace = _d === void 0 ? false : _d;
        var location = this.location;
        if (fragment && absoluteUrl.test(fragment)) {
            location.href = fragment;
            return true;
        }
        if (!this._isActive) {
            return false;
        }
        fragment = this._getFragment(fragment || '');
        if (this.fragment === fragment && !replace) {
            return false;
        }
        this.fragment = fragment;
        var url = this.root + fragment;
        if (fragment === '' && url !== '/') {
            url = url.slice(0, -1);
        }
        if (this._hasPushState) {
            url = url.replace('//', '/');
            this.history[replace ? 'replaceState' : 'pushState']({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title, url);
        }
        else if (this._wantsHashChange) {
            updateHash(location, fragment, replace);
        }
        else {
            location.assign(url);
        }
        if (trigger) {
            return this._loadUrl(fragment);
        }
        return true;
    };
    BrowserHistory.prototype.navigateBack = function () {
        this.history.back();
    };
    BrowserHistory.prototype.setTitle = function (title) {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title = title;
    };
    BrowserHistory.prototype.setState = function (key, value) {
        var $history = this.history;
        var state = Object.assign({}, $history.state);
        var _a = this.location, pathname = _a.pathname, search = _a.search, hash = _a.hash;
        state[key] = value;
        $history.replaceState(state, null, "" + pathname + search + hash);
    };
    BrowserHistory.prototype.getState = function (key) {
        var state = Object.assign({}, this.history.state);
        return state[key];
    };
    BrowserHistory.prototype.getHistoryIndex = function () {
        var historyIndex = this.getState('HistoryIndex');
        if (historyIndex === undefined) {
            historyIndex = this.history.length - 1;
            this.setState('HistoryIndex', historyIndex);
        }
        return historyIndex;
    };
    BrowserHistory.prototype.go = function (movement) {
        this.history.go(movement);
    };
    BrowserHistory.prototype._getHash = function () {
        return this.location.hash.substr(1);
    };
    BrowserHistory.prototype._getFragment = function (fragment, forcePushState) {
        var rootUrl;
        if (!fragment) {
            if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                var location_1 = this.location;
                fragment = location_1.pathname + location_1.search;
                rootUrl = this.root.replace(trailingSlash, '');
                if (!fragment.indexOf(rootUrl)) {
                    fragment = fragment.substr(rootUrl.length);
                }
            }
            else {
                fragment = this._getHash();
            }
        }
        return '/' + fragment.replace(routeStripper, '');
    };
    BrowserHistory.prototype._checkUrl = function () {
        var current = this._getFragment('');
        if (current !== this.fragment) {
            this._loadUrl('');
        }
    };
    BrowserHistory.prototype._loadUrl = function (fragmentOverride) {
        var fragment = this.fragment = this._getFragment(fragmentOverride);
        return this.options.routeHandler ?
            this.options.routeHandler(fragment) :
            false;
    };
    BrowserHistory.inject = [LinkHandler];
    return BrowserHistory;
}(aurelia_history__WEBPACK_IMPORTED_MODULE_0__.History));
var routeStripper = /^#?\/*|\s+$/g;
var rootStripper = /^\/+|\/+$/g;
var trailingSlash = /\/$/;
var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
function updateHash($location, fragment, replace) {
    if (replace) {
        var href = $location.href.replace(/(javascript:|#).*$/, '');
        $location.replace(href + '#' + fragment);
    }
    else {
        $location.hash = '#' + fragment;
    }
}
function createOrigin(protocol, hostname, port) {
    return protocol + "//" + hostname + (port ? ':' + port : '');
}

function configure(config) {
    var $config = config;
    $config.singleton(aurelia_history__WEBPACK_IMPORTED_MODULE_0__.History, BrowserHistory);
    $config.transient(LinkHandler, DefaultLinkHandler);
}


//# sourceMappingURL=aurelia-history-browser.js.map


/***/ }),

/***/ 1149:
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-history/dist/native-modules/aurelia-history.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "History": () => (/* binding */ History)
/* harmony export */ });


function mi(name) {
  throw new Error('History must implement ' + name + '().');
}

var History = function () {
  function History() {
    
  }

  History.prototype.activate = function activate(options) {
    mi('activate');
  };

  History.prototype.deactivate = function deactivate() {
    mi('deactivate');
  };

  History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
    mi('getAbsoluteRoot');
  };

  History.prototype.navigate = function navigate(fragment, options) {
    mi('navigate');
  };

  History.prototype.navigateBack = function navigateBack() {
    mi('navigateBack');
  };

  History.prototype.setTitle = function setTitle(title) {
    mi('setTitle');
  };

  History.prototype.setState = function setState(key, value) {
    mi('setState');
  };

  History.prototype.getState = function getState(key) {
    mi('getState');
  };

  History.prototype.getHistoryIndex = function getHistoryIndex() {
    mi('getHistoryIndex');
  };

  History.prototype.go = function go(movement) {
    mi('go');
  };

  return History;
}();

/***/ }),

/***/ 8757:
/*!*******************************************************************************************!*\
  !*** ./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextTemplateLoader": () => (/* binding */ TextTemplateLoader),
/* harmony export */   "WebpackLoader": () => (/* binding */ WebpackLoader),
/* harmony export */   "ensureOriginOnExports": () => (/* binding */ ensureOriginOnExports)
/* harmony export */ });
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-loader */ 209);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-metadata */ 1383);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* module decorator */ module = __webpack_require__.hmd(module);




/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
* An implementation of the TemplateLoader interface implemented with text-based loading.
*/
var TextTemplateLoader = /** @class */ (function () {
    function TextTemplateLoader() {
    }
    /**
    * Loads a template.
    * @param loader The loader that is requesting the template load.
    * @param entry The TemplateRegistryEntry to load and populate with a template.
    * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.
    */
    TextTemplateLoader.prototype.loadTemplate = function (loader, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loader.loadText(entry.address)];
                    case 1:
                        text = _a.sent();
                        entry.template = aurelia_pal__WEBPACK_IMPORTED_MODULE_2__.DOM.createTemplateFromMarkup(text);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TextTemplateLoader;
}());
function ensureOriginOnExports(moduleExports, moduleId) {
    var target = moduleExports;
    var key;
    var exportedValue;
    if (target.__useDefault) {
        target = target.default;
    }
    aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.set(target, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin(moduleId, 'default'));
    if (typeof target === 'object') {
        for (key in target) {
            exportedValue = target[key];
            if (typeof exportedValue === 'function') {
                aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.set(exportedValue, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin(moduleId, key));
            }
        }
    }
    return moduleExports;
}
/**
* A default implementation of the Loader abstraction which works with webpack (extended common-js style).
*/
var WebpackLoader = /** @class */ (function (_super) {
    __extends(WebpackLoader, _super);
    function WebpackLoader() {
        var _this = _super.call(this) || this;
        _this.moduleRegistry = Object.create(null);
        _this.loaderPlugins = Object.create(null);
        _this.modulesBeingLoaded = new Map();
        _this.useTemplateLoader(new TextTemplateLoader());
        _this.addPlugin('template-registry-entry', {
            fetch: function (moduleId) { return __awaiter(_this, void 0, void 0, function () {
                var HmrContext, entry;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // HMR:
                            if (false) {}
                            entry = this.getOrCreateTemplateRegistryEntry(moduleId);
                            if (!!entry.templateIsLoaded) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.templateLoader.loadTemplate(this, entry)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, entry];
                    }
                });
            }); }
        });
        aurelia_pal__WEBPACK_IMPORTED_MODULE_2__.PLATFORM.eachModule = function (callback) {
            var registry = __webpack_require__.c;
            var cachedModuleIds = Object.getOwnPropertyNames(registry);
            cachedModuleIds
                // Note: we use .some here like a .forEach that can be "break"ed out of.
                // It will stop iterating only when a truthy value is returned.
                // Even though the docs say "true" explicitly, loader-default also goes by truthy
                // and this is to keep it consistent with that.
                .some(function (moduleId) {
                var moduleExports = registry[moduleId].exports;
                if (typeof moduleExports === 'object') {
                    return callback(moduleId, moduleExports);
                }
                return false;
            });
        };
        return _this;
    }
    WebpackLoader.prototype._import = function (address, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var addressParts, moduleId, loaderPlugin, plugin_1, asyncModuleId, callback;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressParts = address.split('!');
                        moduleId = addressParts.splice(addressParts.length - 1, 1)[0];
                        loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;
                        if (!loaderPlugin) return [3 /*break*/, 2];
                        plugin_1 = this.loaderPlugins[loaderPlugin];
                        if (!plugin_1) {
                            throw new Error("Plugin " + loaderPlugin + " is not registered in the loader.");
                        }
                        if (false) {}
                        return [4 /*yield*/, plugin_1.fetch(moduleId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (__webpack_require__.m[moduleId]) {
                            if (defaultHMR && module.hot && 0) {}
                            return [2 /*return*/, __webpack_require__(moduleId)];
                        }
                        asyncModuleId = "async!" + moduleId;
                        if (!__webpack_require__.m[asyncModuleId]) return [3 /*break*/, 4];
                        if (defaultHMR && module.hot && 0) {}
                        callback = __webpack_require__(asyncModuleId);
                        return [4 /*yield*/, new Promise(callback)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: throw new Error("Unable to find module with ID: " + moduleId);
                }
            });
        });
    };
    /**
    * Maps a module id to a source.
    * @param id The module id.
    * @param source The source to map the module to.
    */
    WebpackLoader.prototype.map = function (id, source) { };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
        return moduleId;
    };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalize = function (moduleId, relativeTo) {
        return Promise.resolve(moduleId);
    };
    /**
    * Instructs the loader to use a specific TemplateLoader instance for loading templates
    * @param templateLoader The instance of TemplateLoader to use for loading templates.
    */
    WebpackLoader.prototype.useTemplateLoader = function (templateLoader) {
        this.templateLoader = templateLoader;
    };
    /**
    * Loads a collection of modules.
    * @param ids The set of module ids to load.
    * @return A Promise for an array of loaded modules.
    */
    WebpackLoader.prototype.loadAllModules = function (ids) {
        var _this = this;
        return Promise.all(ids.map(function (id) { return _this.loadModule(id); }));
    };
    /**
    * Loads a module.
    * @param moduleId The module ID to load.
    * @return A Promise for the loaded module.
    */
    WebpackLoader.prototype.loadModule = function (moduleId, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var existing, beingLoaded, moduleExports;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        existing = this.moduleRegistry[moduleId];
                        if (existing) {
                            return [2 /*return*/, existing];
                        }
                        beingLoaded = this.modulesBeingLoaded.get(moduleId);
                        if (beingLoaded) {
                            return [2 /*return*/, beingLoaded];
                        }
                        beingLoaded = this._import(moduleId, defaultHMR);
                        this.modulesBeingLoaded.set(moduleId, beingLoaded);
                        return [4 /*yield*/, beingLoaded];
                    case 1:
                        moduleExports = _a.sent();
                        this.moduleRegistry[moduleId] = ensureOriginOnExports(moduleExports, moduleId);
                        this.modulesBeingLoaded.delete(moduleId);
                        return [2 /*return*/, moduleExports];
                }
            });
        });
    };
    /**
    * Loads a template.
    * @param url The url of the template to load.
    * @return A Promise for a TemplateRegistryEntry containing the template.
    */
    WebpackLoader.prototype.loadTemplate = function (url) {
        return this.loadModule(this.applyPluginToUrl(url, 'template-registry-entry'), false);
    };
    /**
    * Loads a text-based resource.
    * @param url The url of the text file to load.
    * @return A Promise for text content.
    */
    WebpackLoader.prototype.loadText = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result, defaultExport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadModule(url, false)];
                    case 1:
                        result = _a.sent();
                        defaultExport = result && result.__esModule ? result.default : result;
                        if (defaultExport instanceof Array && defaultExport[0] instanceof Array && defaultExport.hasOwnProperty('toString')) {
                            // we're dealing with a file loaded using the css-loader:
                            return [2 /*return*/, defaultExport.toString()];
                        }
                        return [2 /*return*/, typeof result === "string" ? result : defaultExport];
                }
            });
        });
    };
    /**
    * Alters a module id so that it includes a plugin loader.
    * @param url The url of the module to load.
    * @param pluginName The plugin to apply to the module id.
    * @return The plugin-based module id.
    */
    WebpackLoader.prototype.applyPluginToUrl = function (url, pluginName) {
        return pluginName + "!" + url;
    };
    /**
    * Registers a plugin with the loader.
    * @param pluginName The name of the plugin.
    * @param implementation The plugin implementation.
    */
    WebpackLoader.prototype.addPlugin = function (pluginName, implementation) {
        this.loaderPlugins[pluginName] = implementation;
    };
    return WebpackLoader;
}(aurelia_loader__WEBPACK_IMPORTED_MODULE_0__.Loader));
aurelia_pal__WEBPACK_IMPORTED_MODULE_2__.PLATFORM.Loader = WebpackLoader;




/***/ }),

/***/ 209:
/*!***************************************************************************!*\
  !*** ./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateDependency": () => (/* binding */ TemplateDependency),
/* harmony export */   "TemplateRegistryEntry": () => (/* binding */ TemplateRegistryEntry),
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-path */ 8627);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-metadata */ 1383);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();






var TemplateDependency = function TemplateDependency(src, name) {
  

  this.src = src;
  this.name = name;
};

var TemplateRegistryEntry = function () {
  function TemplateRegistryEntry(address) {
    

    this.templateIsLoaded = false;
    this.factoryIsReady = false;
    this.resources = null;
    this.dependencies = null;

    this.address = address;
    this.onReady = null;
    this._template = null;
    this._factory = null;
  }

  TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
    var finalSrc = typeof src === 'string' ? (0,aurelia_path__WEBPACK_IMPORTED_MODULE_0__.relativeToFile)(src, this.address) : aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.get(src).moduleId;

    this.dependencies.push(new TemplateDependency(finalSrc, name));
  };

  _createClass(TemplateRegistryEntry, [{
    key: 'template',
    get: function get() {
      return this._template;
    },
    set: function set(value) {
      var address = this.address;
      var requires = void 0;
      var current = void 0;
      var src = void 0;
      var dependencies = void 0;

      this._template = value;
      this.templateIsLoaded = true;

      requires = value.content.querySelectorAll('require');
      dependencies = this.dependencies = new Array(requires.length);

      for (var i = 0, ii = requires.length; i < ii; ++i) {
        current = requires[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
        }

        dependencies[i] = new TemplateDependency((0,aurelia_path__WEBPACK_IMPORTED_MODULE_0__.relativeToFile)(src, address), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    }
  }, {
    key: 'factory',
    get: function get() {
      return this._factory;
    },
    set: function set(value) {
      this._factory = value;
      this.factoryIsReady = true;
    }
  }]);

  return TemplateRegistryEntry;
}();

var Loader = function () {
  function Loader() {
    

    this.templateRegistry = {};
  }

  Loader.prototype.map = function map(id, source) {
    throw new Error('Loaders must implement map(id, source).');
  };

  Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
  };

  Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
  };

  Loader.prototype.loadModule = function loadModule(id) {
    throw new Error('Loaders must implement loadModule(id).');
  };

  Loader.prototype.loadAllModules = function loadAllModules(ids) {
    throw new Error('Loader must implement loadAllModules(ids).');
  };

  Loader.prototype.loadTemplate = function loadTemplate(url) {
    throw new Error('Loader must implement loadTemplate(url).');
  };

  Loader.prototype.loadText = function loadText(url) {
    throw new Error('Loader must implement loadText(url).');
  };

  Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
  };

  Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    throw new Error('Loader must implement addPlugin(pluginName, implementation).');
  };

  Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
    return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
  };

  return Loader;
}();

/***/ }),

/***/ "aurelia-logging-console":
/*!*********************************************************************************************!*\
  !*** ./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleAppender": () => (/* binding */ ConsoleAppender)
/* harmony export */ });


var ConsoleAppender = function () {
  function ConsoleAppender() {
    
  }

  ConsoleAppender.prototype.debug = function debug(logger) {
    var _console;

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    (_console = console).debug.apply(_console, ["DEBUG [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.info = function info(logger) {
    var _console2;

    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    (_console2 = console).info.apply(_console2, ["INFO [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.warn = function warn(logger) {
    var _console3;

    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }

    (_console3 = console).warn.apply(_console3, ["WARN [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.error = function error(logger) {
    var _console4;

    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }

    (_console4 = console).error.apply(_console4, ["ERROR [" + logger.id + "]"].concat(rest));
  };

  return ConsoleAppender;
}();

/***/ }),

/***/ 8099:
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logLevel": () => (/* binding */ logLevel),
/* harmony export */   "getLogger": () => (/* binding */ getLogger),
/* harmony export */   "addAppender": () => (/* binding */ addAppender),
/* harmony export */   "removeAppender": () => (/* binding */ removeAppender),
/* harmony export */   "getAppenders": () => (/* binding */ getAppenders),
/* harmony export */   "clearAppenders": () => (/* binding */ clearAppenders),
/* harmony export */   "addCustomLevel": () => (/* binding */ addCustomLevel),
/* harmony export */   "removeCustomLevel": () => (/* binding */ removeCustomLevel),
/* harmony export */   "setLevel": () => (/* binding */ setLevel),
/* harmony export */   "getLevel": () => (/* binding */ getLevel),
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });


var logLevel = {
  none: 0,
  error: 10,
  warn: 20,
  info: 30,
  debug: 40
};

var loggers = {};
var appenders = [];
var globalDefaultLevel = logLevel.none;

var standardLevels = ['none', 'error', 'warn', 'info', 'debug'];
function isStandardLevel(level) {
  return standardLevels.filter(function (l) {
    return l === level;
  }).length > 0;
}

function appendArgs() {
  return [this].concat(Array.prototype.slice.call(arguments));
}

function logFactory(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var _appenders$i;

      (_appenders$i = appenders[i])[level].apply(_appenders$i, args);
    }
  };
}

function logFactoryCustom(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var appender = appenders[i];
      if (appender[level] !== undefined) {
        appender[level].apply(appender, args);
      }
    }
  };
}

function connectLoggers() {
  var proto = Logger.prototype;
  for (var _level in logLevel) {
    if (isStandardLevel(_level)) {
      if (_level !== 'none') {
        proto[_level] = logFactory(_level);
      }
    } else {
      proto[_level] = logFactoryCustom(_level);
    }
  }
}

function disconnectLoggers() {
  var proto = Logger.prototype;
  for (var _level2 in logLevel) {
    if (_level2 !== 'none') {
      proto[_level2] = function () {};
    }
  }
}

function getLogger(id) {
  return loggers[id] || new Logger(id);
}

function addAppender(appender) {
  if (appenders.push(appender) === 1) {
    connectLoggers();
  }
}

function removeAppender(appender) {
  appenders = appenders.filter(function (a) {
    return a !== appender;
  });
}

function getAppenders() {
  return [].concat(appenders);
}

function clearAppenders() {
  appenders = [];
  disconnectLoggers();
}

function addCustomLevel(name, value) {
  if (logLevel[name] !== undefined) {
    throw Error('Log level "' + name + '" already exists.');
  }

  if (isNaN(value)) {
    throw Error('Value must be a number.');
  }

  logLevel[name] = value;

  if (appenders.length > 0) {
    connectLoggers();
  } else {
    Logger.prototype[name] = function () {};
  }
}

function removeCustomLevel(name) {
  if (logLevel[name] === undefined) {
    return;
  }

  if (isStandardLevel(name)) {
    throw Error('Built-in log level "' + name + '" cannot be removed.');
  }

  delete logLevel[name];
  delete Logger.prototype[name];
}

function setLevel(level) {
  globalDefaultLevel = level;
  for (var key in loggers) {
    loggers[key].setLevel(level);
  }
}

function getLevel() {
  return globalDefaultLevel;
}

var Logger = function () {
  function Logger(id) {
    

    var cached = loggers[id];
    if (cached) {
      return cached;
    }

    loggers[id] = this;
    this.id = id;
    this.level = globalDefaultLevel;
  }

  Logger.prototype.debug = function debug(message) {};

  Logger.prototype.info = function info(message) {};

  Logger.prototype.warn = function warn(message) {};

  Logger.prototype.error = function error(message) {};

  Logger.prototype.setLevel = function setLevel(level) {
    this.level = level;
  };

  Logger.prototype.isDebugEnabled = function isDebugEnabled() {
    return this.level === logLevel.debug;
  };

  return Logger;
}();

/***/ }),

/***/ 1383:
/*!*******************************************************************************!*\
  !*** ./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "Origin": () => (/* binding */ Origin),
/* harmony export */   "decorators": () => (/* binding */ decorators),
/* harmony export */   "deprecated": () => (/* binding */ deprecated),
/* harmony export */   "mixin": () => (/* binding */ mixin),
/* harmony export */   "protocol": () => (/* binding */ protocol)
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





function isObject(val) {
  return val && (typeof val === 'function' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object');
}

var metadata = {
  resource: 'aurelia:resource',
  paramTypes: 'design:paramtypes',
  propertyType: 'design:type',
  properties: 'design:properties',
  get: function get(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    var result = metadata.getOwn(metadataKey, target, targetKey);
    return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
  },
  getOwn: function getOwn(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    return Reflect.getOwnMetadata(metadataKey, target, targetKey);
  },
  define: function define(metadataKey, metadataValue, target, targetKey) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
  },
  getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
    var result = metadata.getOwn(metadataKey, target, targetKey);

    if (result === undefined) {
      result = new Type();
      Reflect.defineMetadata(metadataKey, result, target, targetKey);
    }

    return result;
  }
};

var originStorage = new Map();
var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

var Origin = function () {
  function Origin(moduleId, moduleMember) {
    

    this.moduleId = moduleId;
    this.moduleMember = moduleMember;
  }

  Origin.get = function get(fn) {
    var origin = originStorage.get(fn);

    if (origin === undefined) {
      aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.PLATFORM.eachModule(function (key, value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          for (var name in value) {
            try {
              var exp = value[name];
              if (exp === fn) {
                originStorage.set(fn, origin = new Origin(key, name));
                return true;
              }
            } catch (e) {}
          }
        }

        if (value === fn) {
          originStorage.set(fn, origin = new Origin(key, 'default'));
          return true;
        }

        return false;
      });
    }

    return origin || unknownOrigin;
  };

  Origin.set = function set(fn, origin) {
    originStorage.set(fn, origin);
  };

  return Origin;
}();

function decorators() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var applicator = function applicator(target, key, descriptor) {
    var i = rest.length;

    if (key) {
      descriptor = descriptor || {
        value: target[key],
        writable: true,
        configurable: true,
        enumerable: true
      };

      while (i--) {
        descriptor = rest[i](target, key, descriptor) || descriptor;
      }

      Object.defineProperty(target, key, descriptor);
    } else {
      while (i--) {
        target = rest[i](target) || target;
      }
    }

    return target;
  };

  applicator.on = applicator;
  return applicator;
}

function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
  function decorator(target, key, descriptor) {
    var methodSignature = target.constructor.name + '#' + key;
    var options = maybeKey ? {} : optionsOrTarget || {};
    var message = 'DEPRECATION - ' + methodSignature;

    if (typeof descriptor.value !== 'function') {
      throw new SyntaxError('Only methods can be marked as deprecated.');
    }

    if (options.message) {
      message += ' - ' + options.message;
    }

    return _extends({}, descriptor, {
      value: function deprecationWrapper() {
        if (options.error) {
          throw new Error(message);
        } else {
          console.warn(message);
        }

        return descriptor.value.apply(this, arguments);
      }
    });
  }

  return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
}

function mixin(behavior) {
  var instanceKeys = Object.keys(behavior);

  function _mixin(possible) {
    var decorator = function decorator(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      var i = instanceKeys.length;
      while (i--) {
        var property = instanceKeys[i];
        Object.defineProperty(resolvedTarget, property, {
          value: behavior[property],
          writable: true
        });
      }
    };

    return possible ? decorator(possible) : decorator;
  }

  return _mixin;
}

function alwaysValid() {
  return true;
}
function noCompose() {}

function ensureProtocolOptions(options) {
  if (options === undefined) {
    options = {};
  } else if (typeof options === 'function') {
    options = {
      validate: options
    };
  }

  if (!options.validate) {
    options.validate = alwaysValid;
  }

  if (!options.compose) {
    options.compose = noCompose;
  }

  return options;
}

function createProtocolValidator(validate) {
  return function (target) {
    var result = validate(target);
    return result === true;
  };
}

function createProtocolAsserter(name, validate) {
  return function (target) {
    var result = validate(target);
    if (result !== true) {
      throw new Error(result || name + ' was not correctly implemented.');
    }
  };
}

function protocol(name, options) {
  options = ensureProtocolOptions(options);

  var result = function result(target) {
    var resolvedTarget = typeof target === 'function' ? target.prototype : target;

    options.compose(resolvedTarget);
    result.assert(resolvedTarget);

    Object.defineProperty(resolvedTarget, 'protocol:' + name, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: true
    });
  };

  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
}

protocol.create = function (name, options) {
  options = ensureProtocolOptions(options);
  var hidden = 'protocol:' + name;
  var result = function result(target) {
    var decorator = protocol(name, options);
    return target ? decorator(target) : decorator;
  };

  result.decorates = function (obj) {
    return obj[hidden] === true;
  };
  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
};

/***/ }),

/***/ "aurelia-pal-browser":
/*!*************************************************************************************!*\
  !*** ./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_PLATFORM": () => (/* binding */ _PLATFORM),
/* harmony export */   "_FEATURE": () => (/* binding */ _FEATURE),
/* harmony export */   "_DOM": () => (/* binding */ _DOM),
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _PLATFORM = {
  location: window.location,
  history: window.history,
  addEventListener: function addEventListener(eventName, callback, capture) {
    this.global.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    this.global.removeEventListener(eventName, callback, capture);
  },

  performance: window.performance,
  requestAnimationFrame: function requestAnimationFrame(callback) {
    return this.global.requestAnimationFrame(callback);
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var test = function test() {};

  if (test.name === undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    var protoProp = 'prototype';
    var strTrim = String.prototype.trim;
    var arrIndexOf = Array.prototype.indexOf;
    var emptyArray = [];

    var DOMEx = function DOMEx(type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    };

    var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
      if (token === '') {
        throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
      }

      if (/\s/.test(token)) {
        throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      }

      return arrIndexOf.call(classList, token);
    };

    var ClassList = function ClassList(elem) {
      var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
      var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

      for (var i = 0, ii = classes.length; i < ii; ++i) {
        this.push(classes[i]);
      }

      this._updateClassName = function () {
        elem.setAttribute('class', this.toString());
      };
    };

    var classListProto = ClassList[protoProp] = [];

    DOMEx[protoProp] = Error[protoProp];

    classListProto.item = function (i) {
      return this[i] || null;
    };

    classListProto.contains = function (token) {
      token += '';
      return checkTokenAndGetIndex(this, token) !== -1;
    };

    classListProto.add = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;

      do {
        token = tokens[i] + '';
        if (checkTokenAndGetIndex(this, token) === -1) {
          this.push(token);
          updated = true;
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.remove = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;
      var index = void 0;

      do {
        token = tokens[i] + '';
        index = checkTokenAndGetIndex(this, token);
        while (index !== -1) {
          this.splice(index, 1);
          updated = true;
          index = checkTokenAndGetIndex(this, token);
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.toggle = function (token, force) {
      token += '';

      var result = this.contains(token);
      var method = result ? force !== true && 'remove' : force !== false && 'add';

      if (method) {
        this[method](token);
      }

      if (force === true || force === false) {
        return force;
      }

      return !result;
    };

    classListProto.toString = function () {
      return this.join(' ');
    };

    Object.defineProperty(Element.prototype, 'classList', {
      get: function get() {
        return new ClassList(this);
      },
      enumerable: true,
      configurable: true
    });
  } else {
    var testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    if (!testElement.classList.contains('c2')) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          for (var i = 0, ii = arguments.length; i < ii; ++i) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    if (testElement.classList.contains('c3')) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        }

        return _toggle.call(this, token);
      };
    }

    testElement = null;
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var _filterEntries = function _filterEntries(key, value) {
    var i = 0,
        n = _entries.length,
        result = [];
    for (; i < n; i++) {
      if (_entries[i][key] == value) {
        result.push(_entries[i]);
      }
    }
    return result;
  };

  var _clearEntries = function _clearEntries(type, name) {
    var i = _entries.length,
        entry;
    while (i--) {
      entry = _entries[i];
      if (entry.entryType == type && (name === void 0 || entry.name == name)) {
        _entries.splice(i, 1);
      }
    }
  };

  // @license http://opensource.org/licenses/MIT
  if ('performance' in window === false) {
    window.performance = {};
  }

  if ('now' in window.performance === false) {
    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }

  var startOffset = Date.now ? Date.now() : +new Date();
  var _entries = [];
  var _marksIndex = {};

  ;

  if (!window.performance.mark) {
    window.performance.mark = window.performance.webkitMark || function (name) {
      var mark = {
        name: name,
        entryType: "mark",
        startTime: window.performance.now(),
        duration: 0
      };

      _entries.push(mark);
      _marksIndex[name] = mark;
    };
  }

  if (!window.performance.measure) {
    window.performance.measure = window.performance.webkitMeasure || function (name, startMark, endMark) {
      startMark = _marksIndex[startMark].startTime;
      endMark = _marksIndex[endMark].startTime;

      _entries.push({
        name: name,
        entryType: "measure",
        startTime: startMark,
        duration: endMark - startMark
      });
    };
  }

  if (!window.performance.getEntriesByType) {
    window.performance.getEntriesByType = window.performance.webkitGetEntriesByType || function (type) {
      return _filterEntries("entryType", type);
    };
  }

  if (!window.performance.getEntriesByName) {
    window.performance.getEntriesByName = window.performance.webkitGetEntriesByName || function (name) {
      return _filterEntries("name", name);
    };
  }

  if (!window.performance.clearMarks) {
    window.performance.clearMarks = window.performance.webkitClearMarks || function (name) {
      _clearEntries("mark", name);
    };
  }

  if (!window.performance.clearMeasures) {
    window.performance.clearMeasures = window.performance.webkitClearMeasures || function (name) {
      _clearEntries("measure", name);
    };
  }

  _PLATFORM.performance = window.performance;
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var con = window.console = window.console || {};
  var nop = function nop() {};

  if (!con.memory) con.memory = {};
  ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',').forEach(function (m) {
    if (!con[m]) con[m] = nop;
  });

  if (_typeof(con.log) === 'object') {
    'log,info,warn,error,assert,dir,clear,profile,profileEnd'.split(',').forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var _CustomEvent = function _CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    _CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = _CustomEvent;
  }
}

if (Element && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}

var _FEATURE = {
  shadowDOM: !!HTMLElement.prototype.attachShadow,
  scopedCSS: 'scoped' in document.createElement('style'),
  htmlTemplateElement: function () {
    var d = document.createElement('div');
    d.innerHTML = '<template></template>';
    return 'content' in d.children[0];
  }(),
  mutationObserver: !!(window.MutationObserver || window.WebKitMutationObserver),
  ensureHTMLTemplateElement: function ensureHTMLTemplateElement(t) {
    return t;
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var isSVGTemplate = function isSVGTemplate(el) {
    return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
  };

  var fixSVGTemplateElement = function fixSVGTemplateElement(el) {
    var template = el.ownerDocument.createElement('template');
    var attrs = el.attributes;
    var length = attrs.length;
    var attr = void 0;

    el.parentNode.insertBefore(template, el);

    while (length-- > 0) {
      attr = attrs[length];
      template.setAttribute(attr.name, attr.value);
      el.removeAttribute(attr.name);
    }

    el.parentNode.removeChild(el);

    return fixHTMLTemplateElement(template);
  };

  var fixHTMLTemplateElement = function fixHTMLTemplateElement(template) {
    var content = template.content = document.createDocumentFragment();
    var child = void 0;

    while (child = template.firstChild) {
      content.appendChild(child);
    }

    return template;
  };

  var fixHTMLTemplateElementRoot = function fixHTMLTemplateElementRoot(template) {
    var content = fixHTMLTemplateElement(template).content;
    var childTemplates = content.querySelectorAll('template');

    for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
      var child = childTemplates[i];

      if (isSVGTemplate(child)) {
        fixSVGTemplateElement(child);
      } else {
        fixHTMLTemplateElement(child);
      }
    }

    return template;
  };

  if (!_FEATURE.htmlTemplateElement) {
    _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
  }
}

var shadowPoly = window.ShadowDOMPolyfill || null;

var _DOM = {
  Element: Element,
  NodeList: NodeList,
  SVGElement: SVGElement,
  boundary: 'aurelia-dom-boundary',
  addEventListener: function addEventListener(eventName, callback, capture) {
    document.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    document.removeEventListener(eventName, callback, capture);
  },
  adoptNode: function adoptNode(node) {
    return document.adoptNode(node);
  },
  createAttribute: function createAttribute(name) {
    return document.createAttribute(name);
  },
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },
  createTextNode: function createTextNode(text) {
    return document.createTextNode(text);
  },
  createComment: function createComment(text) {
    return document.createComment(text);
  },
  createDocumentFragment: function createDocumentFragment() {
    return document.createDocumentFragment();
  },
  createTemplateElement: function createTemplateElement() {
    var template = document.createElement('template');
    return _FEATURE.ensureHTMLTemplateElement(template);
  },
  createMutationObserver: function createMutationObserver(callback) {
    return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
  },
  createCustomEvent: function createCustomEvent(eventType, options) {
    return new window.CustomEvent(eventType, options);
  },
  dispatchEvent: function dispatchEvent(evt) {
    document.dispatchEvent(evt);
  },
  getComputedStyle: function getComputedStyle(element) {
    return window.getComputedStyle(element);
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  querySelector: function querySelector(query) {
    return document.querySelector(query);
  },
  querySelectorAll: function querySelectorAll(query) {
    return document.querySelectorAll(query);
  },
  nextElementSibling: function nextElementSibling(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }
    do {
      element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
  },
  createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
    var parser = document.createElement('div');
    parser.innerHTML = markup;

    var temp = parser.firstElementChild;
    if (!temp || temp.nodeName !== 'TEMPLATE') {
      throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
    }

    return _FEATURE.ensureHTMLTemplateElement(temp);
  },
  appendNode: function appendNode(newNode, parentNode) {
    (parentNode || document.body).appendChild(newNode);
  },
  replaceNode: function replaceNode(newNode, node, parentNode) {
    if (node.parentNode) {
      node.parentNode.replaceChild(newNode, node);
    } else if (shadowPoly !== null) {
      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
    } else {
      parentNode.replaceChild(newNode, node);
    }
  },
  removeNode: function removeNode(node, parentNode) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    } else if (parentNode) {
      if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
      } else {
        parentNode.removeChild(node);
      }
    }
  },
  injectStyles: function injectStyles(styles, destination, prepend, id) {
    if (id) {
      var oldStyle = document.getElementById(id);
      if (oldStyle) {
        var isStyleTag = oldStyle.tagName.toLowerCase() === 'style';

        if (isStyleTag) {
          oldStyle.innerHTML = styles;
          return;
        }

        throw new Error('The provided id does not indicate a style tag.');
      }
    }

    var node = document.createElement('style');
    node.innerHTML = styles;
    node.type = 'text/css';

    if (id) {
      node.id = id;
    }

    destination = destination || document.head;

    if (prepend && destination.childNodes.length > 0) {
      destination.insertBefore(node, destination.childNodes[0]);
    } else {
      destination.appendChild(node);
    }

    return node;
  }
};

function initialize() {
  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.isInitialized) {
    return;
  }

  (0,aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.initializePAL)(function (platform, feature, dom) {
    Object.assign(platform, _PLATFORM);
    Object.assign(feature, _FEATURE);
    Object.assign(dom, _DOM);

    Object.defineProperty(dom, 'title', {
      get: function get() {
        return document.title;
      },
      set: function set(value) {
        document.title = value;
      }
    });

    Object.defineProperty(dom, 'activeElement', {
      get: function get() {
        return document.activeElement;
      }
    });

    Object.defineProperty(platform, 'XMLHttpRequest', {
      get: function get() {
        return platform.global.XMLHttpRequest;
      }
    });
  });
}

/***/ }),

/***/ 1015:
/*!*********************************************************************!*\
  !*** ./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregateError": () => (/* binding */ AggregateError),
/* harmony export */   "FEATURE": () => (/* binding */ FEATURE),
/* harmony export */   "PLATFORM": () => (/* binding */ PLATFORM),
/* harmony export */   "DOM": () => (/* binding */ DOM),
/* harmony export */   "isInitialized": () => (/* binding */ isInitialized),
/* harmony export */   "initializePAL": () => (/* binding */ initializePAL),
/* harmony export */   "reset": () => (/* binding */ reset)
/* harmony export */ });

function AggregateError(message, innerError, skipIfAlreadyAggregate) {
  if (innerError) {
    if (innerError.innerError && skipIfAlreadyAggregate) {
      return innerError;
    }

    var separator = '\n------------------------------------------------\n';

    message += separator + 'Inner Error:\n';

    if (typeof innerError === 'string') {
      message += 'Message: ' + innerError;
    } else {
      if (innerError.message) {
        message += 'Message: ' + innerError.message;
      } else {
        message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
      }

      if (innerError.stack) {
        message += '\nInner Error Stack:\n' + innerError.stack;
        message += '\nEnd Inner Error Stack';
      }
    }

    message += separator;
  }

  var e = new Error(message);
  if (innerError) {
    e.innerError = innerError;
  }

  return e;
}

var FEATURE = {};

var PLATFORM = {
  noop: function noop() {},
  eachModule: function eachModule() {},
  moduleName: function (_moduleName) {
    function moduleName(_x) {
      return _moduleName.apply(this, arguments);
    }

    moduleName.toString = function () {
      return _moduleName.toString();
    };

    return moduleName;
  }(function (moduleName) {
    return moduleName;
  })
};

PLATFORM.global = function () {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }

  return new Function('return this')();
}();

var DOM = {};
var isInitialized = false;

function initializePAL(callback) {
  if (isInitialized) {
    return;
  }
  isInitialized = true;
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(PLATFORM, FEATURE, DOM);
}
function reset() {
  isInitialized = false;
}

/***/ }),

/***/ 8627:
/*!***********************************************************************!*\
  !*** ./node_modules/aurelia-path/dist/native-modules/aurelia-path.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryString": () => (/* binding */ buildQueryString),
/* harmony export */   "join": () => (/* binding */ join),
/* harmony export */   "parseQueryString": () => (/* binding */ parseQueryString),
/* harmony export */   "relativeToFile": () => (/* binding */ relativeToFile)
/* harmony export */ });
function trimDots(ary) {
    for (var i = 0; i < ary.length; ++i) {
        var part = ary[i];
        if (part === '.') {
            ary.splice(i, 1);
            i -= 1;
        }
        else if (part === '..') {
            if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                continue;
            }
            else if (i > 0) {
                ary.splice(i - 1, 2);
                i -= 2;
            }
        }
    }
}
function relativeToFile(name, file) {
    var fileParts = file && file.split('/');
    var nameParts = name.trim().split('/');
    if (nameParts[0].charAt(0) === '.' && fileParts) {
        var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
        nameParts.unshift.apply(nameParts, normalizedBaseParts);
    }
    trimDots(nameParts);
    return nameParts.join('/');
}
function join(path1, path2) {
    if (!path1) {
        return path2;
    }
    if (!path2) {
        return path1;
    }
    var schemeMatch = path1.match(/^([^/]*?:)\//);
    var scheme = (schemeMatch && schemeMatch.length > 0) ? schemeMatch[1] : '';
    path1 = path1.substr(scheme.length);
    var urlPrefix;
    if (path1.indexOf('///') === 0 && scheme === 'file:') {
        urlPrefix = '///';
    }
    else if (path1.indexOf('//') === 0) {
        urlPrefix = '//';
    }
    else if (path1.indexOf('/') === 0) {
        urlPrefix = '/';
    }
    else {
        urlPrefix = '';
    }
    var trailingSlash = path2.slice(-1) === '/' ? '/' : '';
    var url1 = path1.split('/');
    var url2 = path2.split('/');
    var url3 = [];
    for (var i = 0, ii = url1.length; i < ii; ++i) {
        if (url1[i] === '..') {
            if (url3.length && url3[url3.length - 1] !== '..') {
                url3.pop();
            }
            else {
                url3.push(url1[i]);
            }
        }
        else if (url1[i] === '.' || url1[i] === '') {
            continue;
        }
        else {
            url3.push(url1[i]);
        }
    }
    for (var i = 0, ii = url2.length; i < ii; ++i) {
        if (url2[i] === '..') {
            if (url3.length && url3[url3.length - 1] !== '..') {
                url3.pop();
            }
            else {
                url3.push(url2[i]);
            }
        }
        else if (url2[i] === '.' || url2[i] === '') {
            continue;
        }
        else {
            url3.push(url2[i]);
        }
    }
    return scheme + urlPrefix + url3.join('/') + trailingSlash;
}
var encode = encodeURIComponent;
var encodeKey = function (k) { return encode(k).replace('%24', '$'); };
function buildParam(key, value, traditional) {
    var result = [];
    if (value === null || value === undefined) {
        return result;
    }
    if (Array.isArray(value)) {
        for (var i = 0, l = value.length; i < l; i++) {
            if (traditional) {
                result.push(encodeKey(key) + "=" + encode(value[i]));
            }
            else {
                var arrayKey = key + '[' + (typeof value[i] === 'object' && value[i] !== null ? i : '') + ']';
                result = result.concat(buildParam(arrayKey, value[i]));
            }
        }
    }
    else if (typeof (value) === 'object' && !traditional) {
        for (var propertyName in value) {
            result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
        }
    }
    else {
        result.push(encodeKey(key) + "=" + encode(value));
    }
    return result;
}
function buildQueryString(params, traditional) {
    var pairs = [];
    var keys = Object.keys(params || {}).sort();
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        pairs = pairs.concat(buildParam(key, params[key], traditional));
    }
    if (pairs.length === 0) {
        return '';
    }
    return pairs.join('&');
}
function processScalarParam(existedParam, value) {
    if (Array.isArray(existedParam)) {
        existedParam.push(value);
        return existedParam;
    }
    if (existedParam !== undefined) {
        return [existedParam, value];
    }
    return value;
}
function parseComplexParam(queryParams, keys, value) {
    var currentParams = queryParams;
    var keysLastIndex = keys.length - 1;
    for (var j = 0; j <= keysLastIndex; j++) {
        var key = keys[j] === '' ? currentParams.length : keys[j];
        preventPollution(key);
        if (j < keysLastIndex) {
            var prevValue = !currentParams[key] || typeof currentParams[key] === 'object' ? currentParams[key] : [currentParams[key]];
            currentParams = currentParams[key] = prevValue || (isNaN(keys[j + 1]) ? {} : []);
        }
        else {
            currentParams = currentParams[key] = value;
        }
    }
}
function parseQueryString(queryString) {
    var queryParams = {};
    if (!queryString || typeof queryString !== 'string') {
        return queryParams;
    }
    var query = queryString;
    if (query.charAt(0) === '?') {
        query = query.substr(1);
    }
    var pairs = query.replace(/\+/g, ' ').split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        var key = decodeURIComponent(pair[0]);
        if (!key) {
            continue;
        }
        var keys = key.split('][');
        var keysLastIndex = keys.length - 1;
        if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
            keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
            keys = keys.shift().split('[').concat(keys);
            keysLastIndex = keys.length - 1;
        }
        else {
            keysLastIndex = 0;
        }
        if (pair.length >= 2) {
            var value = pair[1] ? decodeURIComponent(pair[1]) : '';
            if (keysLastIndex) {
                parseComplexParam(queryParams, keys, value);
            }
            else {
                preventPollution(key);
                queryParams[key] = processScalarParam(queryParams[key], value);
            }
        }
        else {
            queryParams[key] = true;
        }
    }
    return queryParams;
}
function preventPollution(key) {
    if (key === '__proto__') {
        throw new Error('Prototype pollution detected.');
    }
}


//# sourceMappingURL=aurelia-path.js.map


/***/ })

}]);
//# sourceMappingURL=vendors-319a6989.09df464c778910d25d44.bundle.js.map