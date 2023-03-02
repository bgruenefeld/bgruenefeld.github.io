"use strict";
(self["webpackChunkjudgement"] = self["webpackChunkjudgement"] || []).push([["vendors-3ce50090"],{

/***/ 8318:
/*!***********************************************************************************!*\
  !*** ./node_modules/aurelia-task-queue/dist/native-modules/aurelia-task-queue.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskQueue": () => (/* binding */ TaskQueue)
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 1015);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var stackSeparator = '\nEnqueued in TaskQueue by:\n';
var microStackSeparator = '\nEnqueued in MicroTaskQueue by:\n';

function makeRequestFlushFromMutationObserver(flush) {
  var observer = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.DOM.createMutationObserver(flush);
  var val = 'a';
  var node = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.DOM.createTextNode('a');
  var values = Object.create(null);
  values.a = 'b';
  values.b = 'a';
  observer.observe(node, { characterData: true });
  return function requestFlush() {
    node.data = val = values[val];
  };
}

function makeRequestFlushFromTimer(flush) {
  return function requestFlush() {
    var timeoutHandle = setTimeout(handleFlushTimer, 0);

    var intervalHandle = setInterval(handleFlushTimer, 50);
    function handleFlushTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      flush();
    }
  };
}

function onError(error, task, longStacks) {
  if (longStacks && task.stack && (typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && error !== null) {
    error.stack = filterFlushStack(error.stack) + task.stack;
  }

  if ('onError' in task) {
    task.onError(error);
  } else {
    setTimeout(function () {
      throw error;
    }, 0);
  }
}

var TaskQueue = function () {
  function TaskQueue() {
    var _this = this;

    

    this.flushing = false;
    this.longStacks = false;

    this.microTaskQueue = [];
    this.microTaskQueueCapacity = 1024;
    this.taskQueue = [];

    if (aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.FEATURE.mutationObserver) {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
        return _this.flushMicroTaskQueue();
      });
    } else {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
        return _this.flushMicroTaskQueue();
      });
    }

    this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
      return _this.flushTaskQueue();
    });
  }

  TaskQueue.prototype._flushQueue = function _flushQueue(queue, capacity) {
    var index = 0;
    var task = void 0;

    try {
      this.flushing = true;
      while (index < queue.length) {
        task = queue[index];
        if (this.longStacks) {
          this.stack = typeof task.stack === 'string' ? task.stack : undefined;
        }
        task.call();
        index++;

        if (index > capacity) {
          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }

          queue.length -= index;
          index = 0;
        }
      }
    } catch (error) {
      onError(error, task, this.longStacks);
    } finally {
      this.flushing = false;
    }
  };

  TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
    if (this.microTaskQueue.length < 1) {
      this.requestFlushMicroTaskQueue();
    }

    if (this.longStacks) {
      task.stack = this.prepareQueueStack(microStackSeparator);
    }

    this.microTaskQueue.push(task);
  };

  TaskQueue.prototype.queueTask = function queueTask(task) {
    if (this.taskQueue.length < 1) {
      this.requestFlushTaskQueue();
    }

    if (this.longStacks) {
      task.stack = this.prepareQueueStack(stackSeparator);
    }

    this.taskQueue.push(task);
  };

  TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
    var queue = this.taskQueue;
    this.taskQueue = [];
    this._flushQueue(queue, Number.MAX_VALUE);
  };

  TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
    var queue = this.microTaskQueue;
    this._flushQueue(queue, this.microTaskQueueCapacity);
    queue.length = 0;
  };

  TaskQueue.prototype.prepareQueueStack = function prepareQueueStack(separator) {
    var stack = separator + filterQueueStack(captureStack());

    if (typeof this.stack === 'string') {
      stack = filterFlushStack(stack) + this.stack;
    }

    return stack;
  };

  return TaskQueue;
}();

function captureStack() {
  var error = new Error();

  if (error.stack) {
    return error.stack;
  }

  try {
    throw error;
  } catch (e) {
    return e.stack;
  }
}

function filterQueueStack(stack) {
  return stack.replace(/^[\s\S]*?\bqueue(Micro)?Task\b[^\n]*\n/, '');
}

function filterFlushStack(stack) {
  var index = stack.lastIndexOf('flushMicroTaskQueue');

  if (index < 0) {
    index = stack.lastIndexOf('flushTaskQueue');
    if (index < 0) {
      return stack;
    }
  }

  index = stack.lastIndexOf('\n', index);

  return index < 0 ? stack : stack.substr(0, index);
}

/***/ }),

/***/ "aurelia-templating-binding":
/*!***************************************************************************************************!*\
  !*** ./node_modules/aurelia-templating-binding/dist/native-modules/aurelia-templating-binding.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeMap": () => (/* binding */ AttributeMap),
/* harmony export */   "InterpolationBindingExpression": () => (/* binding */ InterpolationBindingExpression),
/* harmony export */   "InterpolationBinding": () => (/* binding */ InterpolationBinding),
/* harmony export */   "ChildInterpolationBinding": () => (/* binding */ ChildInterpolationBinding),
/* harmony export */   "LetExpression": () => (/* binding */ LetExpression),
/* harmony export */   "LetBinding": () => (/* binding */ LetBinding),
/* harmony export */   "LetInterpolationBindingExpression": () => (/* binding */ LetInterpolationBindingExpression),
/* harmony export */   "LetInterpolationBinding": () => (/* binding */ LetInterpolationBinding),
/* harmony export */   "SyntaxInterpreter": () => (/* binding */ SyntaxInterpreter),
/* harmony export */   "TemplatingBindingLanguage": () => (/* binding */ TemplatingBindingLanguage),
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ 8099);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-templating */ 1781);
var _class, _temp, _dec, _class2, _dec2, _class3, _class4, _temp2, _class5, _temp3;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AttributeMap = (_temp = _class = function () {
  function AttributeMap(svg) {
    

    this.elements = Object.create(null);
    this.allElements = Object.create(null);

    this.svg = svg;

    this.registerUniversal('accesskey', 'accessKey');
    this.registerUniversal('contenteditable', 'contentEditable');
    this.registerUniversal('tabindex', 'tabIndex');
    this.registerUniversal('textcontent', 'textContent');
    this.registerUniversal('innerhtml', 'innerHTML');
    this.registerUniversal('scrolltop', 'scrollTop');
    this.registerUniversal('scrollleft', 'scrollLeft');
    this.registerUniversal('readonly', 'readOnly');

    this.register('label', 'for', 'htmlFor');

    this.register('img', 'usemap', 'useMap');

    this.register('input', 'maxlength', 'maxLength');
    this.register('input', 'minlength', 'minLength');
    this.register('input', 'formaction', 'formAction');
    this.register('input', 'formenctype', 'formEncType');
    this.register('input', 'formmethod', 'formMethod');
    this.register('input', 'formnovalidate', 'formNoValidate');
    this.register('input', 'formtarget', 'formTarget');

    this.register('textarea', 'maxlength', 'maxLength');

    this.register('td', 'rowspan', 'rowSpan');
    this.register('td', 'colspan', 'colSpan');
    this.register('th', 'rowspan', 'rowSpan');
    this.register('th', 'colspan', 'colSpan');
  }

  AttributeMap.prototype.register = function register(elementName, attributeName, propertyName) {
    elementName = elementName.toLowerCase();
    attributeName = attributeName.toLowerCase();
    var element = this.elements[elementName] = this.elements[elementName] || Object.create(null);
    element[attributeName] = propertyName;
  };

  AttributeMap.prototype.registerUniversal = function registerUniversal(attributeName, propertyName) {
    attributeName = attributeName.toLowerCase();
    this.allElements[attributeName] = propertyName;
  };

  AttributeMap.prototype.map = function map(elementName, attributeName) {
    if (this.svg.isStandardSvgAttribute(elementName, attributeName)) {
      return attributeName;
    }
    elementName = elementName.toLowerCase();
    attributeName = attributeName.toLowerCase();
    var element = this.elements[elementName];
    if (element !== undefined && attributeName in element) {
      return element[attributeName];
    }
    if (attributeName in this.allElements) {
      return this.allElements[attributeName];
    }

    if (/(?:^data-)|(?:^aria-)|:/.test(attributeName)) {
      return attributeName;
    }
    return (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.camelCase)(attributeName);
  };

  return AttributeMap;
}(), _class.inject = [aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.SVGAnalyzer], _temp);

var InterpolationBindingExpression = function () {
  function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, lookupFunctions, attribute) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.parts = parts;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.attribute = this.attrToRemove = attribute;
    this.discrete = false;
  }

  InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
    if (this.parts.length === 3) {
      return new ChildInterpolationBinding(target, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
    }
    return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.lookupFunctions);
  };

  return InterpolationBindingExpression;
}();

function validateTarget(target, propertyName) {
  if (propertyName === 'style') {
    aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('templating-binding').info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
  } else if (target.parentElement && target.parentElement.nodeName === 'TEXTAREA' && propertyName === 'textContent') {
    throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
  }
}

var InterpolationBinding = function () {
  function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, lookupFunctions) {
    

    validateTarget(target, targetProperty);
    this.observerLocator = observerLocator;
    this.parts = parts;
    this.target = target;
    this.targetProperty = targetProperty;
    this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
  }

  InterpolationBinding.prototype.interpolate = function interpolate() {
    if (this.isBound) {
      var value = '';
      var parts = this.parts;
      for (var i = 0, ii = parts.length; i < ii; i++) {
        value += i % 2 === 0 ? parts[i] : this['childBinding' + i].value;
      }
      this.targetAccessor.setValue(value, this.target, this.targetProperty);
    }
  };

  InterpolationBinding.prototype.updateOneTimeBindings = function updateOneTimeBindings() {
    for (var i = 1, ii = this.parts.length; i < ii; i += 2) {
      var child = this['childBinding' + i];
      if (child.mode === aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime) {
        child.call();
      }
    }
  };

  InterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.source = source;

    var parts = this.parts;
    for (var i = 1, ii = parts.length; i < ii; i += 2) {
      var binding = new ChildInterpolationBinding(this, this.observerLocator, parts[i], this.mode, this.lookupFunctions);
      binding.bind(source);
      this['childBinding' + i] = binding;
    }

    this.isBound = true;
    this.interpolate();
  };

  InterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.source = null;
    var parts = this.parts;
    for (var i = 1, ii = parts.length; i < ii; i += 2) {
      var name = 'childBinding' + i;
      this[name].unbind();
    }
  };

  return InterpolationBinding;
}();

var ChildInterpolationBinding = (_dec = (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.connectable)(), _dec(_class2 = function () {
  function ChildInterpolationBinding(target, observerLocator, sourceExpression, mode, lookupFunctions, targetProperty, left, right) {
    

    if (target instanceof InterpolationBinding) {
      this.parent = target;
    } else {
      validateTarget(target, targetProperty);
      this.target = target;
      this.targetProperty = targetProperty;
      this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
    }
    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.left = left;
    this.right = right;
  }

  ChildInterpolationBinding.prototype.updateTarget = function updateTarget(value) {
    value = value === null || value === undefined ? '' : value.toString();
    if (value !== this.value) {
      this.value = value;
      if (this.parent) {
        this.parent.interpolate();
      } else {
        this.targetAccessor.setValue(this.left + value + this.right, this.target, this.targetProperty);
      }
    }
  };

  ChildInterpolationBinding.prototype.call = function call() {
    if (!this.isBound) {
      return;
    }

    this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
    this.updateTarget(this.rawValue);

    if (this.mode !== aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime) {
      this._version++;
      this.sourceExpression.connect(this, this.source);
      if (this.rawValue instanceof Array) {
        this.observeArray(this.rawValue);
      }
      this.unobserve(false);
    }
  };

  ChildInterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    var sourceExpression = this.sourceExpression;
    if (sourceExpression.bind) {
      sourceExpression.bind(this, source, this.lookupFunctions);
    }

    this.rawValue = sourceExpression.evaluate(source, this.lookupFunctions);
    this.updateTarget(this.rawValue);

    if (this.mode === aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneWay) {
      (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.enqueueBindingConnect)(this);
    }
  };

  ChildInterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    var sourceExpression = this.sourceExpression;
    if (sourceExpression.unbind) {
      sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this.value = null;
    this.rawValue = null;
    this.unobserve(true);
  };

  ChildInterpolationBinding.prototype.connect = function connect(evaluate) {
    if (!this.isBound) {
      return;
    }
    if (evaluate) {
      this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      this.updateTarget(this.rawValue);
    }
    this.sourceExpression.connect(this, this.source);
    if (this.rawValue instanceof Array) {
      this.observeArray(this.rawValue);
    }
  };

  return ChildInterpolationBinding;
}()) || _class2);

var LetExpression = function () {
  function LetExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.targetProperty = targetProperty;
    this.lookupFunctions = lookupFunctions;
    this.toBindingContext = toBindingContext;
  }

  LetExpression.prototype.createBinding = function createBinding() {
    return new LetBinding(this.observerLocator, this.sourceExpression, this.targetProperty, this.lookupFunctions, this.toBindingContext);
  };

  return LetExpression;
}();

var LetBinding = (_dec2 = (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.connectable)(), _dec2(_class3 = function () {
  function LetBinding(observerLocator, sourceExpression, targetProperty, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.targetProperty = targetProperty;
    this.lookupFunctions = lookupFunctions;
    this.source = null;
    this.target = null;
    this.toBindingContext = toBindingContext;
  }

  LetBinding.prototype.updateTarget = function updateTarget() {
    var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
    this.target[this.targetProperty] = value;
  };

  LetBinding.prototype.call = function call(context) {
    if (!this.isBound) {
      return;
    }
    if (context === aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.sourceContext) {
      this.updateTarget();
      return;
    }
    throw new Error('Unexpected call context ' + context);
  };

  LetBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }

    this.isBound = true;
    this.source = source;
    this.target = this.toBindingContext ? source.bindingContext : source.overrideContext;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }

    (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.enqueueBindingConnect)(this);
  };

  LetBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this.target = null;
    this.unobserve(true);
  };

  LetBinding.prototype.connect = function connect() {
    if (!this.isBound) {
      return;
    }
    this.updateTarget();
    this.sourceExpression.connect(this, this.source);
  };

  return LetBinding;
}()) || _class3);

var LetInterpolationBindingExpression = function () {
  function LetInterpolationBindingExpression(observerLocator, targetProperty, parts, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.parts = parts;
    this.lookupFunctions = lookupFunctions;
    this.toBindingContext = toBindingContext;
  }

  LetInterpolationBindingExpression.prototype.createBinding = function createBinding() {
    return new LetInterpolationBinding(this.observerLocator, this.targetProperty, this.parts, this.lookupFunctions, this.toBindingContext);
  };

  return LetInterpolationBindingExpression;
}();

var LetInterpolationBinding = function () {
  function LetInterpolationBinding(observerLocator, targetProperty, parts, lookupFunctions, toBindingContext) {
    

    this.observerLocator = observerLocator;
    this.parts = parts;
    this.targetProperty = targetProperty;
    this.lookupFunctions = lookupFunctions;
    this.toBindingContext = toBindingContext;
    this.target = null;
  }

  LetInterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }

    this.isBound = true;
    this.source = source;
    this.target = this.toBindingContext ? source.bindingContext : source.overrideContext;

    this.interpolationBinding = this.createInterpolationBinding();
    this.interpolationBinding.bind(source);
  };

  LetInterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.source = null;
    this.target = null;
    this.interpolationBinding.unbind();
    this.interpolationBinding = null;
  };

  LetInterpolationBinding.prototype.createInterpolationBinding = function createInterpolationBinding() {
    if (this.parts.length === 3) {
      return new ChildInterpolationBinding(this.target, this.observerLocator, this.parts[1], aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneWay, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
    }
    return new InterpolationBinding(this.observerLocator, this.parts, this.target, this.targetProperty, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneWay, this.lookupFunctions);
  };

  return LetInterpolationBinding;
}();

var SyntaxInterpreter = (_temp2 = _class4 = function () {
  function SyntaxInterpreter(parser, observerLocator, eventManager, attributeMap) {
    

    this.parser = parser;
    this.observerLocator = observerLocator;
    this.eventManager = eventManager;
    this.attributeMap = attributeMap;
  }

  SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction, context) {
    if (info.command in this) {
      return this[info.command](resources, element, info, existingInstruction, context);
    }

    return this.handleUnknownCommand(resources, element, info, existingInstruction, context);
  };

  SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction, context) {
    aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('templating-binding').warn('Unknown binding command.', info);
    return existingInstruction;
  };

  SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName, context) {
    var tagName = element.tagName.toLowerCase();

    if (tagName === 'input' && (attrName === 'value' || attrName === 'files') && element.type !== 'checkbox' && element.type !== 'radio' || tagName === 'input' && attrName === 'checked' && (element.type === 'checkbox' || element.type === 'radio') || (tagName === 'textarea' || tagName === 'select') && attrName === 'value' || (attrName === 'textcontent' || attrName === 'innerhtml') && element.contentEditable === 'true' || attrName === 'scrolltop' || attrName === 'scrollleft') {
      return aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.twoWay;
    }

    if (context && attrName in context.attributes && context.attributes[attrName] && context.attributes[attrName].defaultBindingMode >= aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime) {
      return context.attributes[attrName].defaultBindingMode;
    }

    return aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneWay;
  };

  SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction, context) {
    var instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);

    instruction.attributes[info.attrName] = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), info.defaultBindingMode === undefined || info.defaultBindingMode === null ? this.determineDefaultBindingMode(element, info.attrName, context) : info.defaultBindingMode, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
    return new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.delegationStrategy.none, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.capture = function capture(resources, element, info) {
    return new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.delegationStrategy.capturing, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
    return new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ListenerExpression(this.eventManager, info.attrName, this.parser.parse(info.attrValue), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.delegationStrategy.bubbling, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);

    instruction.attributes[info.attrName] = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallExpression(this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction, context) {
    var instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);
    var attrValue = info.attrValue;
    var language = this.language;
    var name = null;
    var target = '';
    var current = void 0;
    var i = void 0;
    var ii = void 0;
    var inString = false;
    var inEscape = false;
    var foundName = false;

    for (i = 0, ii = attrValue.length; i < ii; ++i) {
      current = attrValue[i];

      if (current === ';' && !inString) {
        if (!foundName) {
          name = this._getPrimaryPropertyName(resources, context);
        }
        info = language.inspectAttribute(resources, '?', name, target.trim());
        language.createAttributeInstruction(resources, element, info, instruction, context);

        if (!instruction.attributes[info.attrName]) {
          instruction.attributes[info.attrName] = info.attrValue;
        }

        target = '';
        name = null;
      } else if (current === ':' && name === null) {
        foundName = true;
        name = target.trim();
        target = '';
      } else if (current === '\\') {
        target += current;
        inEscape = true;
        continue;
      } else {
        target += current;

        if (name !== null && inEscape === false && current === '\'') {
          inString = !inString;
        }
      }

      inEscape = false;
    }

    if (!foundName) {
      name = this._getPrimaryPropertyName(resources, context);
    }

    if (name !== null) {
      info = language.inspectAttribute(resources, '?', name, target.trim());
      language.createAttributeInstruction(resources, element, info, instruction, context);

      if (!instruction.attributes[info.attrName]) {
        instruction.attributes[info.attrName] = info.attrValue;
      }
    }

    return instruction;
  };

  SyntaxInterpreter.prototype._getPrimaryPropertyName = function _getPrimaryPropertyName(resources, context) {
    var type = resources.getAttribute(context.attributeName);
    if (type && type.primaryProperty) {
      return type.primaryProperty.attribute;
    }
    return null;
  };

  SyntaxInterpreter.prototype['for'] = function _for(resources, element, info, existingInstruction) {
    var parts = void 0;
    var keyValue = void 0;
    var instruction = void 0;
    var attrValue = void 0;
    var isDestructuring = void 0;

    attrValue = info.attrValue;
    isDestructuring = attrValue.match(/^ *[[].+[\]]/);
    parts = isDestructuring ? attrValue.split('of ') : attrValue.split(' of ');

    if (parts.length !== 2) {
      throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
    }

    instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);

    if (isDestructuring) {
      keyValue = parts[0].replace(/[[\]]/g, '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
      instruction.attributes.key = keyValue[0];
      instruction.attributes.value = keyValue[1];
    } else {
      instruction.attributes.local = parts[0];
    }

    instruction.attributes.items = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression(this.observerLocator, 'items', this.parser.parse(parts[1]), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneWay, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['two-way'] = function twoWay(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);

    instruction.attributes[info.attrName] = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.twoWay, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['to-view'] = function toView(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);

    instruction.attributes[info.attrName] = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.toView, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['from-view'] = function fromView(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);

    instruction.attributes[info.attrName] = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.fromView, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['one-time'] = function oneTime(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(info.attrName);

    instruction.attributes[info.attrName] = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression(this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneTime, resources.lookupFunctions);

    return instruction;
  };

  return SyntaxInterpreter;
}(), _class4.inject = [aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Parser, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ObserverLocator, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.EventManager, AttributeMap], _temp2);

SyntaxInterpreter.prototype['one-way'] = SyntaxInterpreter.prototype['to-view'];

var info = {};

var TemplatingBindingLanguage = (_temp3 = _class5 = function (_BindingLanguage) {
  _inherits(TemplatingBindingLanguage, _BindingLanguage);

  function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter, attributeMap) {
    

    var _this = _possibleConstructorReturn(this, _BindingLanguage.call(this));

    _this.parser = parser;
    _this.observerLocator = observerLocator;
    _this.syntaxInterpreter = syntaxInterpreter;
    _this.emptyStringExpression = _this.parser.parse('\'\'');
    syntaxInterpreter.language = _this;
    _this.attributeMap = attributeMap;
    _this.toBindingContextAttr = 'to-binding-context';
    return _this;
  }

  TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
    var parts = attrName.split('.');

    info.defaultBindingMode = null;

    if (parts.length === 2) {
      info.attrName = parts[0].trim();
      info.attrValue = attrValue;
      info.command = parts[1].trim();

      if (info.command === 'ref') {
        info.expression = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.NameExpression(this.parser.parse(attrValue), info.attrName, resources.lookupFunctions);
        info.command = null;
        info.attrName = 'ref';
      } else {
        info.expression = null;
      }
    } else if (attrName === 'ref') {
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      info.expression = new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.NameExpression(this.parser.parse(attrValue), 'element', resources.lookupFunctions);
    } else {
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      var interpolationParts = this.parseInterpolation(resources, attrValue);
      if (interpolationParts === null) {
        info.expression = null;
      } else {
        info.expression = new InterpolationBindingExpression(this.observerLocator, this.attributeMap.map(elementName, attrName), interpolationParts, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneWay, resources.lookupFunctions, attrName);
      }
    }

    return info;
  };

  TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, theInfo, existingInstruction, context) {
    var instruction = void 0;

    if (theInfo.expression) {
      if (theInfo.attrName === 'ref') {
        return theInfo.expression;
      }

      instruction = existingInstruction || aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BehaviorInstruction.attribute(theInfo.attrName);
      instruction.attributes[theInfo.attrName] = theInfo.expression;
    } else if (theInfo.command) {
      instruction = this.syntaxInterpreter.interpret(resources, element, theInfo, existingInstruction, context);
    }

    return instruction;
  };

  TemplatingBindingLanguage.prototype.createLetExpressions = function createLetExpressions(resources, letElement) {
    var expressions = [];
    var attributes = letElement.attributes;

    var attr = void 0;

    var parts = void 0;
    var attrName = void 0;
    var attrValue = void 0;
    var command = void 0;
    var toBindingContextAttr = this.toBindingContextAttr;
    var toBindingContext = letElement.hasAttribute(toBindingContextAttr);
    for (var i = 0, ii = attributes.length; ii > i; ++i) {
      attr = attributes[i];
      attrName = attr.name;
      attrValue = attr.nodeValue;
      parts = attrName.split('.');

      if (attrName === toBindingContextAttr) {
        continue;
      }

      if (parts.length === 2) {
        command = parts[1];
        if (command !== 'bind') {
          aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('templating-binding-language').warn('Detected invalid let command. Expected "' + parts[0] + '.bind", given "' + attrName + '"');
          continue;
        }
        expressions.push(new LetExpression(this.observerLocator, (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.camelCase)(parts[0]), this.parser.parse(attrValue), resources.lookupFunctions, toBindingContext));
      } else {
        attrName = (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.camelCase)(attrName);
        parts = this.parseInterpolation(resources, attrValue);
        if (parts === null) {
          aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('templating-binding-language').warn('Detected string literal in let bindings. Did you mean "' + attrName + '.bind=' + attrValue + '" or "' + attrName + '=${' + attrValue + '}" ?');
        }
        if (parts) {
          expressions.push(new LetInterpolationBindingExpression(this.observerLocator, attrName, parts, resources.lookupFunctions, toBindingContext));
        } else {
          expressions.push(new LetExpression(this.observerLocator, attrName, new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralString(attrValue), resources.lookupFunctions, toBindingContext));
        }
      }
    }
    return expressions;
  };

  TemplatingBindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
    var parts = this.parseInterpolation(resources, value);
    if (parts === null) {
      return null;
    }
    return new InterpolationBindingExpression(this.observerLocator, 'textContent', parts, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode.oneWay, resources.lookupFunctions, 'textContent');
  };

  TemplatingBindingLanguage.prototype.parseInterpolation = function parseInterpolation(resources, value) {
    var i = value.indexOf('${', 0);
    var ii = value.length;
    var char = void 0;
    var pos = 0;
    var open = 0;
    var quote = null;
    var interpolationStart = void 0;
    var parts = void 0;
    var partIndex = 0;

    while (i >= 0 && i < ii - 2) {
      open = 1;
      interpolationStart = i;
      i += 2;

      do {
        char = value[i];
        i++;

        if (char === "'" || char === '"') {
          if (quote === null) {
            quote = char;
          } else if (quote === char) {
            quote = null;
          }
          continue;
        }

        if (char === '\\') {
          i++;
          continue;
        }

        if (quote !== null) {
          continue;
        }

        if (char === '{') {
          open++;
        } else if (char === '}') {
          open--;
        }
      } while (open > 0 && i < ii);

      if (open === 0) {
        parts = parts || [];
        if (value[interpolationStart - 1] === '\\' && value[interpolationStart - 2] !== '\\') {
          parts[partIndex] = value.substring(pos, interpolationStart - 1) + value.substring(interpolationStart, i);
          partIndex++;
          parts[partIndex] = this.emptyStringExpression;
          partIndex++;
        } else {
          parts[partIndex] = value.substring(pos, interpolationStart);
          partIndex++;
          parts[partIndex] = this.parser.parse(value.substring(interpolationStart + 2, i - 1));
          partIndex++;
        }
        pos = i;
        i = value.indexOf('${', i);
      } else {
        break;
      }
    }

    if (partIndex === 0) {
      return null;
    }

    parts[partIndex] = value.substr(pos);
    return parts;
  };

  return TemplatingBindingLanguage;
}(aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BindingLanguage), _class5.inject = [aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Parser, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ObserverLocator, SyntaxInterpreter, AttributeMap], _temp3);

function configure(config) {
  config.container.registerSingleton(aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BindingLanguage, TemplatingBindingLanguage);
  config.container.registerAlias(aurelia_templating__WEBPACK_IMPORTED_MODULE_2__.BindingLanguage, TemplatingBindingLanguage);
}

/***/ }),

/***/ "aurelia-templating-resources":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/aurelia-templating-resources/dist/native-modules/aurelia-templating-resources.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractRepeater": () => (/* binding */ AbstractRepeater),
/* harmony export */   "ArrayRepeatStrategy": () => (/* binding */ ArrayRepeatStrategy),
/* harmony export */   "AttrBindingBehavior": () => (/* binding */ AttrBindingBehavior),
/* harmony export */   "BindingSignaler": () => (/* binding */ BindingSignaler),
/* harmony export */   "Compose": () => (/* binding */ Compose),
/* harmony export */   "DebounceBindingBehavior": () => (/* binding */ DebounceBindingBehavior),
/* harmony export */   "Else": () => (/* binding */ Else),
/* harmony export */   "Focus": () => (/* binding */ Focus),
/* harmony export */   "FromViewBindingBehavior": () => (/* binding */ FromViewBindingBehavior),
/* harmony export */   "HTMLSanitizer": () => (/* binding */ HTMLSanitizer),
/* harmony export */   "Hide": () => (/* binding */ Hide),
/* harmony export */   "If": () => (/* binding */ If),
/* harmony export */   "MapRepeatStrategy": () => (/* binding */ MapRepeatStrategy),
/* harmony export */   "NullRepeatStrategy": () => (/* binding */ NullRepeatStrategy),
/* harmony export */   "NumberRepeatStrategy": () => (/* binding */ NumberRepeatStrategy),
/* harmony export */   "OneTimeBindingBehavior": () => (/* binding */ OneTimeBindingBehavior),
/* harmony export */   "OneWayBindingBehavior": () => (/* binding */ OneWayBindingBehavior),
/* harmony export */   "Repeat": () => (/* binding */ Repeat),
/* harmony export */   "RepeatStrategyLocator": () => (/* binding */ RepeatStrategyLocator),
/* harmony export */   "Replaceable": () => (/* binding */ Replaceable),
/* harmony export */   "SanitizeHTMLValueConverter": () => (/* binding */ SanitizeHTMLValueConverter),
/* harmony export */   "SelfBindingBehavior": () => (/* binding */ SelfBindingBehavior),
/* harmony export */   "SetRepeatStrategy": () => (/* binding */ SetRepeatStrategy),
/* harmony export */   "Show": () => (/* binding */ Show),
/* harmony export */   "SignalBindingBehavior": () => (/* binding */ SignalBindingBehavior),
/* harmony export */   "ThrottleBindingBehavior": () => (/* binding */ ThrottleBindingBehavior),
/* harmony export */   "ToViewBindingBehavior": () => (/* binding */ ToViewBindingBehavior),
/* harmony export */   "TwoWayBindingBehavior": () => (/* binding */ TwoWayBindingBehavior),
/* harmony export */   "UpdateTriggerBindingBehavior": () => (/* binding */ UpdateTriggerBindingBehavior),
/* harmony export */   "With": () => (/* binding */ With),
/* harmony export */   "configure": () => (/* binding */ configure$1),
/* harmony export */   "createFullOverrideContext": () => (/* binding */ createFullOverrideContext),
/* harmony export */   "getItemsSourceExpression": () => (/* binding */ getItemsSourceExpression),
/* harmony export */   "isOneTime": () => (/* binding */ isOneTime),
/* harmony export */   "unwrapExpression": () => (/* binding */ unwrapExpression),
/* harmony export */   "updateOneTimeBinding": () => (/* binding */ updateOneTimeBinding),
/* harmony export */   "updateOverrideContext": () => (/* binding */ updateOverrideContext),
/* harmony export */   "viewsRequireLifecycle": () => (/* binding */ viewsRequireLifecycle)
/* harmony export */ });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_task_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-task-queue */ 8318);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-logging */ 8099);
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-loader */ 209);
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aurelia-path */ 8627);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aurelia-metadata */ 1383);










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

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var ActivationStrategy;
(function (ActivationStrategy) {
    ActivationStrategy["InvokeLifecycle"] = "invoke-lifecycle";
    ActivationStrategy["Replace"] = "replace";
})(ActivationStrategy || (ActivationStrategy = {}));
var Compose = (function () {
    function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
        this.activationStrategy = ActivationStrategy.InvokeLifecycle;
        this.element = element;
        this.container = container;
        this.compositionEngine = compositionEngine;
        this.viewSlot = viewSlot;
        this.viewResources = viewResources;
        this.taskQueue = taskQueue;
        this.currentController = null;
        this.currentViewModel = null;
        this.changes = Object.create(null);
    }
    Compose.inject = function () {
        return [aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.Element, aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Container, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionEngine, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources, aurelia_task_queue__WEBPACK_IMPORTED_MODULE_2__.TaskQueue];
    };
    Compose.prototype.created = function (owningView) {
        this.owningView = owningView;
    };
    Compose.prototype.bind = function (bindingContext, overrideContext) {
        this.bindingContext = bindingContext;
        this.overrideContext = overrideContext;
        var changes = this.changes;
        changes.view = this.view;
        changes.viewModel = this.viewModel;
        changes.model = this.model;
        if (!this.pendingTask) {
            processChanges(this);
        }
    };
    Compose.prototype.unbind = function () {
        this.changes = Object.create(null);
        this.bindingContext = null;
        this.overrideContext = null;
        var returnToCache = true;
        var skipAnimation = true;
        this.viewSlot.removeAll(returnToCache, skipAnimation);
    };
    Compose.prototype.modelChanged = function (newValue, oldValue) {
        this.changes.model = newValue;
        requestUpdate(this);
    };
    Compose.prototype.viewChanged = function (newValue, oldValue) {
        this.changes.view = newValue;
        requestUpdate(this);
    };
    Compose.prototype.viewModelChanged = function (newValue, oldValue) {
        this.changes.viewModel = newValue;
        requestUpdate(this);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Compose.prototype, "model", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Compose.prototype, "view", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Compose.prototype, "viewModel", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Compose.prototype, "activationStrategy", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Compose.prototype, "swapOrder", void 0);
    Compose = __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.noView,
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customElement)('compose')
    ], Compose);
    return Compose;
}());
function isEmpty(obj) {
    for (var _ in obj) {
        return false;
    }
    return true;
}
function tryActivateViewModel(vm, model) {
    if (vm && typeof vm.activate === 'function') {
        return Promise.resolve(vm.activate(model));
    }
}
function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
        bindingContext: composer.bindingContext,
        overrideContext: composer.overrideContext,
        owningView: composer.owningView,
        container: composer.container,
        viewSlot: composer.viewSlot,
        viewResources: composer.viewResources,
        currentController: composer.currentController,
        host: composer.element,
        swapOrder: composer.swapOrder
    });
}
function processChanges(composer) {
    var changes = composer.changes;
    composer.changes = Object.create(null);
    if (needsReInitialization(composer, changes)) {
        var instruction = {
            view: composer.view,
            viewModel: composer.currentViewModel || composer.viewModel,
            model: composer.model
        };
        instruction = Object.assign(instruction, changes);
        instruction = createInstruction(composer, instruction);
        composer.pendingTask = composer.compositionEngine.compose(instruction).then(function (controller) {
            composer.currentController = controller;
            composer.currentViewModel = controller ? controller.viewModel : null;
        });
    }
    else {
        composer.pendingTask = tryActivateViewModel(composer.currentViewModel, changes.model);
        if (!composer.pendingTask) {
            return;
        }
    }
    composer.pendingTask = composer.pendingTask
        .then(function () {
        completeCompositionTask(composer);
    }, function (reason) {
        completeCompositionTask(composer);
        throw reason;
    });
}
function completeCompositionTask(composer) {
    composer.pendingTask = null;
    if (!isEmpty(composer.changes)) {
        processChanges(composer);
    }
}
function requestUpdate(composer) {
    if (composer.pendingTask || composer.updateRequested) {
        return;
    }
    composer.updateRequested = true;
    composer.taskQueue.queueMicroTask(function () {
        composer.updateRequested = false;
        processChanges(composer);
    });
}
function needsReInitialization(composer, changes) {
    var activationStrategy = composer.activationStrategy;
    var vm = composer.currentViewModel;
    if (vm && typeof vm.determineActivationStrategy === 'function') {
        activationStrategy = vm.determineActivationStrategy();
    }
    return 'view' in changes
        || 'viewModel' in changes
        || activationStrategy === ActivationStrategy.Replace;
}

var IfCore = (function () {
    function IfCore(viewFactory, viewSlot) {
        this.viewFactory = viewFactory;
        this.viewSlot = viewSlot;
        this.view = null;
        this.bindingContext = null;
        this.overrideContext = null;
        this.showing = false;
        this.cache = true;
    }
    IfCore.prototype.bind = function (bindingContext, overrideContext) {
        this.bindingContext = bindingContext;
        this.overrideContext = overrideContext;
    };
    IfCore.prototype.unbind = function () {
        if (this.view === null) {
            return;
        }
        this.view.unbind();
        if (!this.viewFactory.isCaching) {
            return;
        }
        if (this.showing) {
            this.showing = false;
            this.viewSlot.remove(this.view, true, true);
        }
        else {
            this.view.returnToCache();
        }
        this.view = null;
    };
    IfCore.prototype._show = function () {
        if (this.showing) {
            if (!this.view.isBound) {
                this.view.bind(this.bindingContext, this.overrideContext);
            }
            return;
        }
        if (this.view === null) {
            this.view = this.viewFactory.create();
        }
        if (!this.view.isBound) {
            this.view.bind(this.bindingContext, this.overrideContext);
        }
        this.showing = true;
        return this.viewSlot.add(this.view);
    };
    IfCore.prototype._hide = function () {
        var _this = this;
        if (!this.showing) {
            return;
        }
        this.showing = false;
        var removed = this.viewSlot.remove(this.view);
        if (removed instanceof Promise) {
            return removed.then(function () {
                _this._unbindView();
            });
        }
        this._unbindView();
    };
    IfCore.prototype._unbindView = function () {
        var cache = this.cache === 'false' ? false : !!this.cache;
        this.view.unbind();
        if (!cache) {
            this.view = null;
        }
    };
    return IfCore;
}());

var If = (function (_super) {
    __extends(If, _super);
    function If() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cache = true;
        return _this;
    }
    If.prototype.bind = function (bindingContext, overrideContext) {
        _super.prototype.bind.call(this, bindingContext, overrideContext);
        if (this.condition) {
            this._show();
        }
        else {
            this._hide();
        }
    };
    If.prototype.conditionChanged = function (newValue) {
        this._update(newValue);
    };
    If.prototype._update = function (show) {
        var _this = this;
        if (this.animating) {
            return;
        }
        var promise;
        if (this.elseVm) {
            promise = show ? this._swap(this.elseVm, this) : this._swap(this, this.elseVm);
        }
        else {
            promise = show ? this._show() : this._hide();
        }
        if (promise) {
            this.animating = true;
            promise.then(function () {
                _this.animating = false;
                if (_this.condition !== _this.showing) {
                    _this._update(_this.condition);
                }
            });
        }
    };
    If.prototype._swap = function (remove, add) {
        switch (this.swapOrder) {
            case 'before':
                return Promise.resolve(add._show()).then(function () { return remove._hide(); });
            case 'with':
                return Promise.all([remove._hide(), add._show()]);
            default:
                var promise = remove._hide();
                return promise ? promise.then(function () { return add._show(); }) : add._show();
        }
    };
    __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable)({ primaryProperty: true })
    ], If.prototype, "condition", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], If.prototype, "swapOrder", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], If.prototype, "cache", void 0);
    If = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('if'),
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController,
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot)
    ], If);
    return If;
}(IfCore));

var Else = (function (_super) {
    __extends(Else, _super);
    function Else(viewFactory, viewSlot) {
        var _this = _super.call(this, viewFactory, viewSlot) || this;
        _this._registerInIf();
        return _this;
    }
    Else.prototype.bind = function (bindingContext, overrideContext) {
        _super.prototype.bind.call(this, bindingContext, overrideContext);
        if (this.ifVm.condition) {
            this._hide();
        }
        else {
            this._show();
        }
    };
    Else.prototype._registerInIf = function () {
        var previous = this.viewSlot.anchor.previousSibling;
        while (previous && !previous.au) {
            previous = previous.previousSibling;
        }
        if (!previous || !previous.au.if) {
            throw new Error("Can't find matching If for Else custom attribute.");
        }
        this.ifVm = previous.au.if.viewModel;
        this.ifVm.elseVm = this;
    };
    Else = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('else'),
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController,
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot)
    ], Else);
    return Else;
}(IfCore));

var With = (function () {
    function With(viewFactory, viewSlot) {
        this.viewFactory = viewFactory;
        this.viewSlot = viewSlot;
        this.parentOverrideContext = null;
        this.view = null;
    }
    With.prototype.bind = function (bindingContext, overrideContext) {
        this.parentOverrideContext = overrideContext;
        this.valueChanged(this.value);
    };
    With.prototype.valueChanged = function (newValue) {
        var overrideContext = (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.createOverrideContext)(newValue, this.parentOverrideContext);
        var view = this.view;
        if (!view) {
            view = this.view = this.viewFactory.create();
            view.bind(newValue, overrideContext);
            this.viewSlot.add(view);
        }
        else {
            view.bind(newValue, overrideContext);
        }
    };
    With.prototype.unbind = function () {
        var view = this.view;
        this.parentOverrideContext = null;
        if (view) {
            view.unbind();
        }
    };
    With = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('with'),
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController,
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot)
    ], With);
    return With;
}());

var oneTime = aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.oneTime;
function updateOverrideContexts(views, startIndex) {
    var length = views.length;
    if (startIndex > 0) {
        startIndex = startIndex - 1;
    }
    for (; startIndex < length; ++startIndex) {
        updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
    }
}
function createFullOverrideContext(repeat, data, index, length, key) {
    var bindingContext = {};
    var overrideContext = (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.createOverrideContext)(bindingContext, repeat.scope.overrideContext);
    if (typeof key !== 'undefined') {
        bindingContext[repeat.key] = key;
        bindingContext[repeat.value] = data;
    }
    else {
        bindingContext[repeat.local] = data;
    }
    updateOverrideContext(overrideContext, index, length);
    return overrideContext;
}
function updateOverrideContext(overrideContext, index, length) {
    var first = (index === 0);
    var last = (index === length - 1);
    var even = index % 2 === 0;
    overrideContext.$index = index;
    overrideContext.$first = first;
    overrideContext.$last = last;
    overrideContext.$middle = !(first || last);
    overrideContext.$odd = !even;
    overrideContext.$even = even;
}
function getItemsSourceExpression(instruction, attrName) {
    return instruction.behaviorInstructions
        .filter(function (bi) { return bi.originalAttrName === attrName; })[0]
        .attributes
        .items
        .sourceExpression;
}
function unwrapExpression(expression) {
    var unwrapped = false;
    while (expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.BindingBehavior) {
        expression = expression.expression;
    }
    while (expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.ValueConverter) {
        expression = expression.expression;
        unwrapped = true;
    }
    return unwrapped ? expression : null;
}
function isOneTime(expression) {
    while (expression instanceof aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.BindingBehavior) {
        if (expression.name === 'oneTime') {
            return true;
        }
        expression = expression.expression;
    }
    return false;
}
function updateOneTimeBinding(binding) {
    if (binding.call && binding.mode === oneTime) {
        binding.call(aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.sourceContext);
    }
    else if (binding.updateOneTimeBindings) {
        binding.updateOneTimeBindings();
    }
}
function indexOf(array, item, matcher, startIndex) {
    if (!matcher) {
        return array.indexOf(item);
    }
    var length = array.length;
    for (var index = startIndex || 0; index < length; index++) {
        if (matcher(array[index], item)) {
            return index;
        }
    }
    return -1;
}

var ArrayRepeatStrategy = (function () {
    function ArrayRepeatStrategy() {
    }
    ArrayRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
        return observerLocator.getArrayObserver(items);
    };
    ArrayRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        var _this = this;
        var $repeat = repeat;
        var itemsLength = items.length;
        if (!items || itemsLength === 0) {
            $repeat.removeAllViews(true, !$repeat.viewsRequireLifecycle);
            return;
        }
        var children = $repeat.views();
        var viewsLength = children.length;
        if (viewsLength === 0) {
            this._standardProcessInstanceChanged($repeat, items);
            return;
        }
        if ($repeat.viewsRequireLifecycle) {
            var childrenSnapshot = children.slice(0);
            var itemNameInBindingContext = $repeat.local;
            var matcher_1 = $repeat.matcher();
            var itemsPreviouslyInViews_1 = [];
            var viewsToRemove = [];
            for (var index = 0; index < viewsLength; index++) {
                var view = childrenSnapshot[index];
                var oldItem = view.bindingContext[itemNameInBindingContext];
                if (indexOf(items, oldItem, matcher_1) === -1) {
                    viewsToRemove.push(view);
                }
                else {
                    itemsPreviouslyInViews_1.push(oldItem);
                }
            }
            var updateViews = void 0;
            var removePromise = void 0;
            if (itemsPreviouslyInViews_1.length > 0) {
                removePromise = $repeat.removeViews(viewsToRemove, true, !$repeat.viewsRequireLifecycle);
                updateViews = function () {
                    for (var index = 0; index < itemsLength; index++) {
                        var item = items[index];
                        var indexOfView = indexOf(itemsPreviouslyInViews_1, item, matcher_1, index);
                        var view = void 0;
                        if (indexOfView === -1) {
                            var overrideContext = createFullOverrideContext($repeat, items[index], index, itemsLength);
                            $repeat.insertView(index, overrideContext.bindingContext, overrideContext);
                            itemsPreviouslyInViews_1.splice(index, 0, undefined);
                        }
                        else if (indexOfView === index) {
                            view = children[indexOfView];
                            itemsPreviouslyInViews_1[indexOfView] = undefined;
                        }
                        else {
                            view = children[indexOfView];
                            $repeat.moveView(indexOfView, index);
                            itemsPreviouslyInViews_1.splice(indexOfView, 1);
                            itemsPreviouslyInViews_1.splice(index, 0, undefined);
                        }
                        if (view) {
                            updateOverrideContext(view.overrideContext, index, itemsLength);
                        }
                    }
                    _this._inPlaceProcessItems($repeat, items);
                };
            }
            else {
                removePromise = $repeat.removeAllViews(true, !$repeat.viewsRequireLifecycle);
                updateViews = function () { return _this._standardProcessInstanceChanged($repeat, items); };
            }
            if (removePromise instanceof Promise) {
                removePromise.then(updateViews);
            }
            else {
                updateViews();
            }
        }
        else {
            this._inPlaceProcessItems($repeat, items);
        }
    };
    ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function (repeat, items) {
        for (var i = 0, ii = items.length; i < ii; i++) {
            var overrideContext = createFullOverrideContext(repeat, items[i], i, ii);
            repeat.addView(overrideContext.bindingContext, overrideContext);
        }
    };
    ArrayRepeatStrategy.prototype._inPlaceProcessItems = function (repeat, items) {
        var itemsLength = items.length;
        var viewsLength = repeat.viewCount();
        while (viewsLength > itemsLength) {
            viewsLength--;
            repeat.removeView(viewsLength, true, !repeat.viewsRequireLifecycle);
        }
        var local = repeat.local;
        for (var i = 0; i < viewsLength; i++) {
            var view = repeat.view(i);
            var last = i === itemsLength - 1;
            var middle = i !== 0 && !last;
            var bindingContext = view.bindingContext;
            var overrideContext = view.overrideContext;
            if (bindingContext[local] === items[i]
                && overrideContext.$middle === middle
                && overrideContext.$last === last) {
                continue;
            }
            bindingContext[local] = items[i];
            overrideContext.$middle = middle;
            overrideContext.$last = last;
            repeat.updateBindings(view);
        }
        for (var i = viewsLength; i < itemsLength; i++) {
            var overrideContext = createFullOverrideContext(repeat, items[i], i, itemsLength);
            repeat.addView(overrideContext.bindingContext, overrideContext);
        }
    };
    ArrayRepeatStrategy.prototype.instanceMutated = function (repeat, array, splices) {
        var _this = this;
        if (repeat.__queuedSplices) {
            for (var i = 0, ii = splices.length; i < ii; ++i) {
                var _a = splices[i], index = _a.index, removed = _a.removed, addedCount = _a.addedCount;
                (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.mergeSplice)(repeat.__queuedSplices, index, removed, addedCount);
            }
            repeat.__array = array.slice(0);
            return;
        }
        var maybePromise = this._runSplices(repeat, array.slice(0), splices);
        if (maybePromise instanceof Promise) {
            var queuedSplices_1 = repeat.__queuedSplices = [];
            var runQueuedSplices_1 = function () {
                if (!queuedSplices_1.length) {
                    repeat.__queuedSplices = undefined;
                    repeat.__array = undefined;
                    return;
                }
                var nextPromise = _this._runSplices(repeat, repeat.__array, queuedSplices_1) || Promise.resolve();
                queuedSplices_1 = repeat.__queuedSplices = [];
                nextPromise.then(runQueuedSplices_1);
            };
            maybePromise.then(runQueuedSplices_1);
        }
    };
    ArrayRepeatStrategy.prototype._runSplices = function (repeat, array, splices) {
        var _this = this;
        var removeDelta = 0;
        var rmPromises = [];
        for (var i = 0, ii = splices.length; i < ii; ++i) {
            var splice = splices[i];
            var removed = splice.removed;
            for (var j = 0, jj = removed.length; j < jj; ++j) {
                var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
                if (viewOrPromise instanceof Promise) {
                    rmPromises.push(viewOrPromise);
                }
            }
            removeDelta -= splice.addedCount;
        }
        if (rmPromises.length > 0) {
            return Promise.all(rmPromises).then(function () {
                var spliceIndexLow = _this._handleAddedSplices(repeat, array, splices);
                updateOverrideContexts(repeat.views(), spliceIndexLow);
            });
        }
        var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
        updateOverrideContexts(repeat.views(), spliceIndexLow);
        return undefined;
    };
    ArrayRepeatStrategy.prototype._handleAddedSplices = function (repeat, array, splices) {
        var spliceIndex;
        var spliceIndexLow;
        var arrayLength = array.length;
        for (var i = 0, ii = splices.length; i < ii; ++i) {
            var splice = splices[i];
            var addIndex = spliceIndex = splice.index;
            var end = splice.index + splice.addedCount;
            if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
                spliceIndexLow = spliceIndex;
            }
            for (; addIndex < end; ++addIndex) {
                var overrideContext = createFullOverrideContext(repeat, array[addIndex], addIndex, arrayLength);
                repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
            }
        }
        return spliceIndexLow;
    };
    return ArrayRepeatStrategy;
}());

var MapRepeatStrategy = (function () {
    function MapRepeatStrategy() {
    }
    MapRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
        return observerLocator.getMapObserver(items);
    };
    MapRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        var _this = this;
        var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        if (removePromise instanceof Promise) {
            removePromise.then(function () { return _this._standardProcessItems(repeat, items); });
            return;
        }
        this._standardProcessItems(repeat, items);
    };
    MapRepeatStrategy.prototype._standardProcessItems = function (repeat, items) {
        var index = 0;
        var overrideContext;
        items.forEach(function (value, key) {
            overrideContext = createFullOverrideContext(repeat, value, index, items.size, key);
            repeat.addView(overrideContext.bindingContext, overrideContext);
            ++index;
        });
    };
    MapRepeatStrategy.prototype.instanceMutated = function (repeat, map, records) {
        var key;
        var i;
        var ii;
        var overrideContext;
        var removeIndex;
        var addIndex;
        var record;
        var rmPromises = [];
        var viewOrPromise;
        for (i = 0, ii = records.length; i < ii; ++i) {
            record = records[i];
            key = record.key;
            switch (record.type) {
                case 'update':
                    removeIndex = this._getViewIndexByKey(repeat, key);
                    viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                    if (viewOrPromise instanceof Promise) {
                        rmPromises.push(viewOrPromise);
                    }
                    overrideContext = createFullOverrideContext(repeat, map.get(key), removeIndex, map.size, key);
                    repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
                    break;
                case 'add':
                    addIndex = repeat.viewCount() <= map.size - 1 ? repeat.viewCount() : map.size - 1;
                    overrideContext = createFullOverrideContext(repeat, map.get(key), addIndex, map.size, key);
                    repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
                    break;
                case 'delete':
                    if (record.oldValue === undefined) {
                        return;
                    }
                    removeIndex = this._getViewIndexByKey(repeat, key);
                    viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                    if (viewOrPromise instanceof Promise) {
                        rmPromises.push(viewOrPromise);
                    }
                    break;
                case 'clear':
                    repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
                    break;
                default:
                    continue;
            }
        }
        if (rmPromises.length > 0) {
            Promise.all(rmPromises).then(function () {
                updateOverrideContexts(repeat.views(), 0);
            });
        }
        else {
            updateOverrideContexts(repeat.views(), 0);
        }
    };
    MapRepeatStrategy.prototype._getViewIndexByKey = function (repeat, key) {
        var i;
        var ii;
        var child;
        for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
            child = repeat.view(i);
            if (child.bindingContext[repeat.key] === key) {
                return i;
            }
        }
        return undefined;
    };
    return MapRepeatStrategy;
}());

var NullRepeatStrategy = (function () {
    function NullRepeatStrategy() {
    }
    NullRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        repeat.removeAllViews(true);
    };
    NullRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
    };
    return NullRepeatStrategy;
}());

var NumberRepeatStrategy = (function () {
    function NumberRepeatStrategy() {
    }
    NumberRepeatStrategy.prototype.getCollectionObserver = function () {
        return null;
    };
    NumberRepeatStrategy.prototype.instanceChanged = function (repeat, value) {
        var _this = this;
        var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        if (removePromise instanceof Promise) {
            removePromise.then(function () { return _this._standardProcessItems(repeat, value); });
            return;
        }
        this._standardProcessItems(repeat, value);
    };
    NumberRepeatStrategy.prototype._standardProcessItems = function (repeat, value) {
        var childrenLength = repeat.viewCount();
        var i;
        var ii;
        var overrideContext;
        var viewsToRemove;
        value = Math.floor(value);
        viewsToRemove = childrenLength - value;
        if (viewsToRemove > 0) {
            if (viewsToRemove > childrenLength) {
                viewsToRemove = childrenLength;
            }
            for (i = 0, ii = viewsToRemove; i < ii; ++i) {
                repeat.removeView(childrenLength - (i + 1), true, !repeat.viewsRequireLifecycle);
            }
            return;
        }
        for (i = childrenLength, ii = value; i < ii; ++i) {
            overrideContext = createFullOverrideContext(repeat, i, i, ii);
            repeat.addView(overrideContext.bindingContext, overrideContext);
        }
        updateOverrideContexts(repeat.views(), 0);
    };
    return NumberRepeatStrategy;
}());

var SetRepeatStrategy = (function () {
    function SetRepeatStrategy() {
    }
    SetRepeatStrategy.prototype.getCollectionObserver = function (observerLocator, items) {
        return observerLocator.getSetObserver(items);
    };
    SetRepeatStrategy.prototype.instanceChanged = function (repeat, items) {
        var _this = this;
        var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        if (removePromise instanceof Promise) {
            removePromise.then(function () { return _this._standardProcessItems(repeat, items); });
            return;
        }
        this._standardProcessItems(repeat, items);
    };
    SetRepeatStrategy.prototype._standardProcessItems = function (repeat, items) {
        var index = 0;
        var overrideContext;
        items.forEach(function (value) {
            overrideContext = createFullOverrideContext(repeat, value, index, items.size);
            repeat.addView(overrideContext.bindingContext, overrideContext);
            ++index;
        });
    };
    SetRepeatStrategy.prototype.instanceMutated = function (repeat, set, records) {
        var value;
        var i;
        var ii;
        var overrideContext;
        var removeIndex;
        var record;
        var rmPromises = [];
        var viewOrPromise;
        for (i = 0, ii = records.length; i < ii; ++i) {
            record = records[i];
            value = record.value;
            switch (record.type) {
                case 'add':
                    var size = Math.max(set.size - 1, 0);
                    overrideContext = createFullOverrideContext(repeat, value, size, set.size);
                    repeat.insertView(size, overrideContext.bindingContext, overrideContext);
                    break;
                case 'delete':
                    removeIndex = this._getViewIndexByValue(repeat, value);
                    viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
                    if (viewOrPromise instanceof Promise) {
                        rmPromises.push(viewOrPromise);
                    }
                    break;
                case 'clear':
                    repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
                    break;
                default:
                    continue;
            }
        }
        if (rmPromises.length > 0) {
            Promise.all(rmPromises).then(function () {
                updateOverrideContexts(repeat.views(), 0);
            });
        }
        else {
            updateOverrideContexts(repeat.views(), 0);
        }
    };
    SetRepeatStrategy.prototype._getViewIndexByValue = function (repeat, value) {
        var i;
        var ii;
        var child;
        for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
            child = repeat.view(i);
            if (child.bindingContext[repeat.local] === value) {
                return i;
            }
        }
        return undefined;
    };
    return SetRepeatStrategy;
}());

var RepeatStrategyLocator = (function () {
    function RepeatStrategyLocator() {
        this.matchers = [];
        this.strategies = [];
        this.addStrategy(function (items) { return items === null || items === undefined; }, new NullRepeatStrategy());
        this.addStrategy(function (items) { return items instanceof Array; }, new ArrayRepeatStrategy());
        this.addStrategy(function (items) { return items instanceof Map; }, new MapRepeatStrategy());
        this.addStrategy(function (items) { return items instanceof Set; }, new SetRepeatStrategy());
        this.addStrategy(function (items) { return typeof items === 'number'; }, new NumberRepeatStrategy());
    }
    RepeatStrategyLocator.prototype.addStrategy = function (matcher, strategy) {
        this.matchers.push(matcher);
        this.strategies.push(strategy);
    };
    RepeatStrategyLocator.prototype.getStrategy = function (items) {
        var matchers = this.matchers;
        for (var i = 0, ii = matchers.length; i < ii; ++i) {
            if (matchers[i](items)) {
                return this.strategies[i];
            }
        }
        return null;
    };
    return RepeatStrategyLocator;
}());

var lifecycleOptionalBehaviors = ['focus', 'if', 'else', 'repeat', 'show', 'hide', 'with'];
function behaviorRequiresLifecycle(instruction) {
    var t = instruction.type;
    var name = t.elementName !== null ? t.elementName : t.attributeName;
    return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind)
        || t.viewFactory && viewsRequireLifecycle(t.viewFactory)
        || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
}
function targetRequiresLifecycle(instruction) {
    var behaviors = instruction.behaviorInstructions;
    if (behaviors) {
        var i = behaviors.length;
        while (i--) {
            if (behaviorRequiresLifecycle(behaviors[i])) {
                return true;
            }
        }
    }
    return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
}
function viewsRequireLifecycle(viewFactory) {
    if ('_viewsRequireLifecycle' in viewFactory) {
        return viewFactory._viewsRequireLifecycle;
    }
    viewFactory._viewsRequireLifecycle = false;
    if (viewFactory.viewFactory) {
        viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
        return viewFactory._viewsRequireLifecycle;
    }
    if (viewFactory.template.querySelector('.au-animate')) {
        viewFactory._viewsRequireLifecycle = true;
        return true;
    }
    for (var id in viewFactory.instructions) {
        if (targetRequiresLifecycle(viewFactory.instructions[id])) {
            viewFactory._viewsRequireLifecycle = true;
            return true;
        }
    }
    viewFactory._viewsRequireLifecycle = false;
    return false;
}

var AbstractRepeater = (function () {
    function AbstractRepeater(options) {
        Object.assign(this, {
            local: 'items',
            viewsRequireLifecycle: true
        }, options);
    }
    AbstractRepeater.prototype.viewCount = function () {
        throw new Error('subclass must implement `viewCount`');
    };
    AbstractRepeater.prototype.views = function () {
        throw new Error('subclass must implement `views`');
    };
    AbstractRepeater.prototype.view = function (index) {
        throw new Error('subclass must implement `view`');
    };
    AbstractRepeater.prototype.matcher = function () {
        throw new Error('subclass must implement `matcher`');
    };
    AbstractRepeater.prototype.addView = function (bindingContext, overrideContext) {
        throw new Error('subclass must implement `addView`');
    };
    AbstractRepeater.prototype.insertView = function (index, bindingContext, overrideContext) {
        throw new Error('subclass must implement `insertView`');
    };
    AbstractRepeater.prototype.moveView = function (sourceIndex, targetIndex) {
        throw new Error('subclass must implement `moveView`');
    };
    AbstractRepeater.prototype.removeAllViews = function (returnToCache, skipAnimation) {
        throw new Error('subclass must implement `removeAllViews`');
    };
    AbstractRepeater.prototype.removeViews = function (viewsToRemove, returnToCache, skipAnimation) {
        throw new Error('subclass must implement `removeView`');
    };
    AbstractRepeater.prototype.removeView = function (index, returnToCache, skipAnimation) {
        throw new Error('subclass must implement `removeView`');
    };
    AbstractRepeater.prototype.updateBindings = function (view) {
        throw new Error('subclass must implement `updateBindings`');
    };
    return AbstractRepeater;
}());

var matcherExtractionMarker = '__marker_extracted__';
var Repeat = (function (_super) {
    __extends(Repeat, _super);
    function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
        var _this = _super.call(this, {
            local: 'item',
            viewsRequireLifecycle: viewsRequireLifecycle(viewFactory)
        }) || this;
        _this.viewFactory = viewFactory;
        _this.instruction = instruction;
        _this.viewSlot = viewSlot;
        _this.lookupFunctions = viewResources.lookupFunctions;
        _this.observerLocator = observerLocator;
        _this.key = 'key';
        _this.value = 'value';
        _this.strategyLocator = strategyLocator;
        _this.ignoreMutation = false;
        _this.sourceExpression = getItemsSourceExpression(_this.instruction, 'repeat.for');
        _this.isOneTime = isOneTime(_this.sourceExpression);
        _this.viewsRequireLifecycle = viewsRequireLifecycle(viewFactory);
        return _this;
    }
    Repeat_1 = Repeat;
    Repeat.prototype.call = function (context, changes) {
        this[context](this.items, changes);
    };
    Repeat.prototype.bind = function (bindingContext, overrideContext) {
        this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
        var instruction = this.instruction;
        if (!(matcherExtractionMarker in instruction)) {
            instruction[matcherExtractionMarker] = this._captureAndRemoveMatcherBinding();
        }
        this.matcherBinding = instruction[matcherExtractionMarker];
        this.itemsChanged();
    };
    Repeat.prototype.unbind = function () {
        this.scope = null;
        this.items = null;
        this.matcherBinding = null;
        this.viewSlot.removeAll(true, true);
        this._unsubscribeCollection();
    };
    Repeat.prototype._unsubscribeCollection = function () {
        if (this.collectionObserver) {
            this.collectionObserver.unsubscribe(this.callContext, this);
            this.collectionObserver = null;
            this.callContext = null;
        }
    };
    Repeat.prototype.itemsChanged = function () {
        var _this = this;
        this._unsubscribeCollection();
        if (!this.scope) {
            return;
        }
        var items = this.items;
        this.strategy = this.strategyLocator.getStrategy(items);
        if (!this.strategy) {
            throw new Error("Value for '" + this.sourceExpression + "' is non-repeatable");
        }
        if (!this.isOneTime && !this._observeInnerCollection()) {
            this._observeCollection();
        }
        this.ignoreMutation = true;
        this.strategy.instanceChanged(this, items);
        this.observerLocator.taskQueue.queueMicroTask(function () {
            _this.ignoreMutation = false;
        });
    };
    Repeat.prototype._getInnerCollection = function () {
        var expression = unwrapExpression(this.sourceExpression);
        if (!expression) {
            return null;
        }
        return expression.evaluate(this.scope, null);
    };
    Repeat.prototype.handleCollectionMutated = function (collection, changes) {
        if (!this.collectionObserver) {
            return;
        }
        if (this.ignoreMutation) {
            return;
        }
        this.strategy.instanceMutated(this, collection, changes);
    };
    Repeat.prototype.handleInnerCollectionMutated = function (collection, changes) {
        var _this = this;
        if (!this.collectionObserver) {
            return;
        }
        if (this.ignoreMutation) {
            return;
        }
        this.ignoreMutation = true;
        var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
        this.observerLocator.taskQueue.queueMicroTask(function () { return _this.ignoreMutation = false; });
        if (newItems === this.items) {
            this.itemsChanged();
        }
        else {
            this.items = newItems;
        }
    };
    Repeat.prototype._observeInnerCollection = function () {
        var items = this._getInnerCollection();
        var strategy = this.strategyLocator.getStrategy(items);
        if (!strategy) {
            return false;
        }
        this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
        if (!this.collectionObserver) {
            return false;
        }
        this.callContext = 'handleInnerCollectionMutated';
        this.collectionObserver.subscribe(this.callContext, this);
        return true;
    };
    Repeat.prototype._observeCollection = function () {
        var items = this.items;
        this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
        if (this.collectionObserver) {
            this.callContext = 'handleCollectionMutated';
            this.collectionObserver.subscribe(this.callContext, this);
        }
    };
    Repeat.prototype._captureAndRemoveMatcherBinding = function () {
        var viewFactory = this.viewFactory.viewFactory;
        if (viewFactory) {
            var template = viewFactory.template;
            var instructions = viewFactory.instructions;
            if (Repeat_1.useInnerMatcher) {
                return extractMatcherBindingExpression(instructions);
            }
            if (getChildrenCount(template) > 1) {
                return undefined;
            }
            var repeatedElement = getFirstElementChild(template);
            if (!repeatedElement.hasAttribute('au-target-id')) {
                return undefined;
            }
            var repeatedElementTargetId = repeatedElement.getAttribute('au-target-id');
            return extractMatcherBindingExpression(instructions, repeatedElementTargetId);
        }
        return undefined;
    };
    Repeat.prototype.viewCount = function () { return this.viewSlot.children.length; };
    Repeat.prototype.views = function () { return this.viewSlot.children; };
    Repeat.prototype.view = function (index) { return this.viewSlot.children[index]; };
    Repeat.prototype.matcher = function () {
        var matcherBinding = this.matcherBinding;
        return matcherBinding
            ? matcherBinding.sourceExpression.evaluate(this.scope, matcherBinding.lookupFunctions)
            : null;
    };
    Repeat.prototype.addView = function (bindingContext, overrideContext) {
        var view = this.viewFactory.create();
        view.bind(bindingContext, overrideContext);
        this.viewSlot.add(view);
    };
    Repeat.prototype.insertView = function (index, bindingContext, overrideContext) {
        var view = this.viewFactory.create();
        view.bind(bindingContext, overrideContext);
        this.viewSlot.insert(index, view);
    };
    Repeat.prototype.moveView = function (sourceIndex, targetIndex) {
        this.viewSlot.move(sourceIndex, targetIndex);
    };
    Repeat.prototype.removeAllViews = function (returnToCache, skipAnimation) {
        return this.viewSlot.removeAll(returnToCache, skipAnimation);
    };
    Repeat.prototype.removeViews = function (viewsToRemove, returnToCache, skipAnimation) {
        return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    };
    Repeat.prototype.removeView = function (index, returnToCache, skipAnimation) {
        return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
    };
    Repeat.prototype.updateBindings = function (view) {
        var $view = view;
        var j = $view.bindings.length;
        while (j--) {
            updateOneTimeBinding($view.bindings[j]);
        }
        j = $view.controllers.length;
        while (j--) {
            var k = $view.controllers[j].boundProperties.length;
            while (k--) {
                var binding = $view.controllers[j].boundProperties[k].binding;
                updateOneTimeBinding(binding);
            }
        }
    };
    var Repeat_1;
    Repeat.useInnerMatcher = true;
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Repeat.prototype, "items", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Repeat.prototype, "local", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Repeat.prototype, "key", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable
    ], Repeat.prototype, "value", void 0);
    Repeat = Repeat_1 = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('repeat'),
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController,
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TargetInstruction, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources, aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.ObserverLocator, RepeatStrategyLocator)
    ], Repeat);
    return Repeat;
}(AbstractRepeater));
var extractMatcherBindingExpression = function (instructions, targetedElementId) {
    var instructionIds = Object.keys(instructions);
    for (var i = 0; i < instructionIds.length; i++) {
        var instructionId = instructionIds[i];
        if (targetedElementId !== undefined && instructionId !== targetedElementId) {
            continue;
        }
        var expressions = instructions[instructionId].expressions;
        if (expressions) {
            for (var ii = 0; ii < expressions.length; ii++) {
                if (expressions[ii].targetProperty === 'matcher') {
                    var matcherBindingExpression = expressions[ii];
                    expressions.splice(ii, 1);
                    return matcherBindingExpression;
                }
            }
        }
    }
};
var getChildrenCount = function (el) {
    var childNodes = el.childNodes;
    var count = 0;
    for (var i = 0, ii = childNodes.length; ii > i; ++i) {
        if (childNodes[i].nodeType === 1) {
            ++count;
        }
    }
    return count;
};
var getFirstElementChild = function (el) {
    var firstChild = el.firstChild;
    while (firstChild !== null) {
        if (firstChild.nodeType === 1) {
            return firstChild;
        }
        firstChild = firstChild.nextSibling;
    }
    return null;
};

var aureliaHideClassName = 'aurelia-hide';
var aureliaHideClass = "." + aureliaHideClassName + " { display:none !important; }";
function injectAureliaHideStyleAtHead() {
    aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.injectStyles(aureliaHideClass);
}
function injectAureliaHideStyleAtBoundary(domBoundary) {
    if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.FEATURE.shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle) {
        domBoundary.hasAureliaHideStyle = true;
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.injectStyles(aureliaHideClass, domBoundary);
    }
}

var Show = (function () {
    function Show(element, animator, domBoundary) {
        this.element = element;
        this.animator = animator;
        this.domBoundary = domBoundary;
    }
    Show.inject = function () {
        return [aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.Element, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Animator, aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Optional.of(aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.boundary, true)];
    };
    Show.prototype.created = function () {
        injectAureliaHideStyleAtBoundary(this.domBoundary);
    };
    Show.prototype.valueChanged = function (newValue) {
        var element = this.element;
        var animator = this.animator;
        if (newValue) {
            animator.removeClass(element, aureliaHideClassName);
        }
        else {
            animator.addClass(element, aureliaHideClassName);
        }
    };
    Show.prototype.bind = function (bindingContext) {
        this.valueChanged(this.value);
    };
    Show = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('show')
    ], Show);
    return Show;
}());

var Hide = (function () {
    function Hide(element, animator, domBoundary) {
        this.element = element;
        this.animator = animator;
        this.domBoundary = domBoundary;
    }
    Hide.inject = function () {
        return [aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.Element, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Animator, aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Optional.of(aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.boundary, true)];
    };
    Hide.prototype.created = function () {
        injectAureliaHideStyleAtBoundary(this.domBoundary);
    };
    Hide.prototype.valueChanged = function (newValue) {
        if (newValue) {
            this.animator.addClass(this.element, aureliaHideClassName);
        }
        else {
            this.animator.removeClass(this.element, aureliaHideClassName);
        }
    };
    Hide.prototype.bind = function (bindingContext) {
        this.valueChanged(this.value);
    };
    Hide.prototype.value = function (value) {
        throw new Error('Method not implemented.');
    };
    Hide = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('hide')
    ], Hide);
    return Hide;
}());

var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
var needsToWarn = true;
var HTMLSanitizer = (function () {
    function HTMLSanitizer() {
    }
    HTMLSanitizer.prototype.sanitize = function (input) {
        if (needsToWarn) {
            needsToWarn = false;
            (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_5__.getLogger)('html-sanitizer')
                .warn("CAUTION: The default HTMLSanitizer does NOT provide security against a wide variety of sophisticated XSS attacks,\nand should not be relied on for sanitizing input from unknown sources.\nPlease see https://aurelia.io/docs/binding/basics#element-content for instructions on how to use a secure solution like DOMPurify or sanitize-html.");
        }
        return input.replace(SCRIPT_REGEX, '');
    };
    return HTMLSanitizer;
}());

var SanitizeHTMLValueConverter = (function () {
    function SanitizeHTMLValueConverter(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeHTMLValueConverter.prototype.toView = function (untrustedMarkup) {
        if (untrustedMarkup === null || untrustedMarkup === undefined) {
            return null;
        }
        return this.sanitizer.sanitize(untrustedMarkup);
    };
    SanitizeHTMLValueConverter = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.valueConverter)('sanitizeHTML'),
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject)(HTMLSanitizer)
    ], SanitizeHTMLValueConverter);
    return SanitizeHTMLValueConverter;
}());

var Replaceable = (function () {
    function Replaceable(viewFactory, viewSlot) {
        this.viewFactory = viewFactory;
        this.viewSlot = viewSlot;
        this.view = null;
    }
    Replaceable.prototype.bind = function (bindingContext, overrideContext) {
        if (this.view === null) {
            this.view = this.viewFactory.create();
            this.viewSlot.add(this.view);
        }
        this.view.bind(bindingContext, overrideContext);
    };
    Replaceable.prototype.unbind = function () {
        this.view.unbind();
    };
    Replaceable = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('replaceable'),
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController,
        (0,aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot)
    ], Replaceable);
    return Replaceable;
}());

var Focus = (function () {
    function Focus(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.isAttached = false;
        this.needsApply = false;
    }
    Focus.inject = function () {
        return [aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.Element, aurelia_task_queue__WEBPACK_IMPORTED_MODULE_2__.TaskQueue];
    };
    Focus.prototype.valueChanged = function (newValue) {
        if (this.isAttached) {
            this._apply();
        }
        else {
            this.needsApply = true;
        }
    };
    Focus.prototype._apply = function () {
        var _this = this;
        if (this.value) {
            this.taskQueue.queueMicroTask(function () {
                if (_this.value) {
                    _this.element.focus();
                }
            });
        }
        else {
            this.element.blur();
        }
    };
    Focus.prototype.attached = function () {
        this.isAttached = true;
        if (this.needsApply) {
            this.needsApply = false;
            this._apply();
        }
        this.element.addEventListener('focus', this);
        this.element.addEventListener('blur', this);
    };
    Focus.prototype.detached = function () {
        this.isAttached = false;
        this.element.removeEventListener('focus', this);
        this.element.removeEventListener('blur', this);
    };
    Focus.prototype.handleEvent = function (e) {
        if (e.type === 'focus') {
            this.value = true;
        }
        else if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.activeElement !== this.element) {
            this.value = false;
        }
    };
    Focus = __decorate([
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute)('focus', aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.twoWay)
    ], Focus);
    return Focus;
}());

var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;
function fixupCSSUrls(address, css) {
    if (typeof css !== 'string') {
        throw new Error("Failed loading required CSS file: " + address);
    }
    return css.replace(cssUrlMatcher, function (match, p1) {
        var quote = p1.charAt(0);
        if (quote === '\'' || quote === '"') {
            p1 = p1.substr(1, p1.length - 2);
        }
        return 'url(\'' + (0,aurelia_path__WEBPACK_IMPORTED_MODULE_7__.relativeToFile)(p1, address) + '\')';
    });
}
var CSSResource = (function () {
    function CSSResource(address) {
        this.address = address;
        this._scoped = null;
        this._global = false;
        this._alreadyGloballyInjected = false;
    }
    CSSResource.prototype.initialize = function (container, Target) {
        this._scoped = new Target(this);
    };
    CSSResource.prototype.register = function (registry, name) {
        if (name === 'scoped') {
            registry.registerViewEngineHooks(this._scoped);
        }
        else {
            this._global = true;
        }
    };
    CSSResource.prototype.load = function (container) {
        var _this = this;
        return container.get(aurelia_loader__WEBPACK_IMPORTED_MODULE_6__.Loader)
            .loadText(this.address)
            .catch(function (err) { return null; })
            .then(function (text) {
            text = fixupCSSUrls(_this.address, text);
            _this._scoped.css = text;
            if (_this._global) {
                _this._alreadyGloballyInjected = true;
                aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.injectStyles(text);
            }
        });
    };
    return CSSResource;
}());
var CSSViewEngineHooks = (function () {
    function CSSViewEngineHooks(owner) {
        this.owner = owner;
        this.css = null;
    }
    CSSViewEngineHooks.prototype.beforeCompile = function (content, resources, instruction) {
        if (instruction.targetShadowDOM) {
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.injectStyles(this.css, content, true);
        }
        else if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.FEATURE.scopedCSS) {
            var styleNode = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.injectStyles(this.css, content, true);
            styleNode.setAttribute('scoped', 'scoped');
        }
        else if (this._global && !this.owner._alreadyGloballyInjected) {
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.injectStyles(this.css);
            this.owner._alreadyGloballyInjected = true;
        }
    };
    return CSSViewEngineHooks;
}());
function _createCSSResource(address) {
    var ViewCSS = (function (_super) {
        __extends(ViewCSS, _super);
        function ViewCSS() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ViewCSS = __decorate([
            (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.resource)(new CSSResource(address))
        ], ViewCSS);
        return ViewCSS;
    }(CSSViewEngineHooks));
    return ViewCSS;
}

var AttrBindingBehavior = (function () {
    function AttrBindingBehavior() {
    }
    AttrBindingBehavior.prototype.bind = function (binding, source) {
        binding.targetObserver = new aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.DataAttributeObserver(binding.target, binding.targetProperty);
    };
    AttrBindingBehavior.prototype.unbind = function (binding, source) {
    };
    AttrBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('attr')
    ], AttrBindingBehavior);
    return AttrBindingBehavior;
}());

var modeBindingBehavior = {
    bind: function (binding, source, lookupFunctions) {
        binding.originalMode = binding.mode;
        binding.mode = this.mode;
    },
    unbind: function (binding, source) {
        binding.mode = binding.originalMode;
        binding.originalMode = null;
    }
};
var OneTimeBindingBehavior = (function () {
    function OneTimeBindingBehavior() {
        this.mode = aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.oneTime;
    }
    OneTimeBindingBehavior = __decorate([
        (0,aurelia_metadata__WEBPACK_IMPORTED_MODULE_8__.mixin)(modeBindingBehavior),
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('oneTime')
    ], OneTimeBindingBehavior);
    return OneTimeBindingBehavior;
}());
var OneWayBindingBehavior = (function () {
    function OneWayBindingBehavior() {
        this.mode = aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.toView;
    }
    OneWayBindingBehavior = __decorate([
        (0,aurelia_metadata__WEBPACK_IMPORTED_MODULE_8__.mixin)(modeBindingBehavior),
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('oneWay')
    ], OneWayBindingBehavior);
    return OneWayBindingBehavior;
}());
var ToViewBindingBehavior = (function () {
    function ToViewBindingBehavior() {
        this.mode = aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.toView;
    }
    ToViewBindingBehavior = __decorate([
        (0,aurelia_metadata__WEBPACK_IMPORTED_MODULE_8__.mixin)(modeBindingBehavior),
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('toView')
    ], ToViewBindingBehavior);
    return ToViewBindingBehavior;
}());
var FromViewBindingBehavior = (function () {
    function FromViewBindingBehavior() {
        this.mode = aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.fromView;
    }
    FromViewBindingBehavior = __decorate([
        (0,aurelia_metadata__WEBPACK_IMPORTED_MODULE_8__.mixin)(modeBindingBehavior),
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('fromView')
    ], FromViewBindingBehavior);
    return FromViewBindingBehavior;
}());
var TwoWayBindingBehavior = (function () {
    function TwoWayBindingBehavior() {
        this.mode = aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.twoWay;
    }
    TwoWayBindingBehavior = __decorate([
        (0,aurelia_metadata__WEBPACK_IMPORTED_MODULE_8__.mixin)(modeBindingBehavior),
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('twoWay')
    ], TwoWayBindingBehavior);
    return TwoWayBindingBehavior;
}());

function throttle(newValue) {
    var _this = this;
    var state = this.throttleState;
    var elapsed = +new Date() - state.last;
    if (elapsed >= state.delay) {
        clearTimeout(state.timeoutId);
        state.timeoutId = null;
        state.last = +new Date();
        this.throttledMethod(newValue);
        return;
    }
    state.newValue = newValue;
    if (state.timeoutId === null) {
        state.timeoutId = setTimeout(function () {
            state.timeoutId = null;
            state.last = +new Date();
            _this.throttledMethod(state.newValue);
        }, state.delay - elapsed);
    }
}
var ThrottleBindingBehavior = (function () {
    function ThrottleBindingBehavior() {
    }
    ThrottleBindingBehavior.prototype.bind = function (binding, source, delay) {
        if (delay === void 0) { delay = 200; }
        var methodToThrottle = 'updateTarget';
        if (binding.callSource) {
            methodToThrottle = 'callSource';
        }
        else if (binding.updateSource && binding.mode === aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.twoWay) {
            methodToThrottle = 'updateSource';
        }
        binding.throttledMethod = binding[methodToThrottle];
        binding.throttledMethod.originalName = methodToThrottle;
        binding[methodToThrottle] = throttle;
        binding.throttleState = {
            delay: delay,
            last: 0,
            timeoutId: null
        };
    };
    ThrottleBindingBehavior.prototype.unbind = function (binding, source) {
        var methodToRestore = binding.throttledMethod.originalName;
        binding[methodToRestore] = binding.throttledMethod;
        binding.throttledMethod = null;
        clearTimeout(binding.throttleState.timeoutId);
        binding.throttleState = null;
    };
    ThrottleBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('throttle')
    ], ThrottleBindingBehavior);
    return ThrottleBindingBehavior;
}());

var unset = {};
function debounceCallSource(event) {
    var _this = this;
    var state = this.debounceState;
    clearTimeout(state.timeoutId);
    state.timeoutId = setTimeout(function () { return _this.debouncedMethod(event); }, state.delay);
}
function debounceCall(context, newValue, oldValue) {
    var _this = this;
    var state = this.debounceState;
    clearTimeout(state.timeoutId);
    if (context !== state.callContextToDebounce) {
        state.oldValue = unset;
        this.debouncedMethod(context, newValue, oldValue);
        return;
    }
    if (state.oldValue === unset) {
        state.oldValue = oldValue;
    }
    state.timeoutId = setTimeout(function () {
        var _oldValue = state.oldValue;
        state.oldValue = unset;
        _this.debouncedMethod(context, newValue, _oldValue);
    }, state.delay);
}
var DebounceBindingBehavior = (function () {
    function DebounceBindingBehavior() {
    }
    DebounceBindingBehavior.prototype.bind = function (binding, source, delay) {
        if (delay === void 0) { delay = 200; }
        var isCallSource = binding.callSource !== undefined;
        var methodToDebounce = isCallSource ? 'callSource' : 'call';
        var debouncer = isCallSource ? debounceCallSource : debounceCall;
        var mode = binding.mode;
        var callContextToDebounce = mode === aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.twoWay || mode === aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.fromView ? aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.targetContext : aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.sourceContext;
        binding.debouncedMethod = binding[methodToDebounce];
        binding.debouncedMethod.originalName = methodToDebounce;
        binding[methodToDebounce] = debouncer;
        binding.debounceState = {
            callContextToDebounce: callContextToDebounce,
            delay: delay,
            timeoutId: 0,
            oldValue: unset
        };
    };
    DebounceBindingBehavior.prototype.unbind = function (binding, source) {
        var methodToRestore = binding.debouncedMethod.originalName;
        binding[methodToRestore] = binding.debouncedMethod;
        binding.debouncedMethod = null;
        clearTimeout(binding.debounceState.timeoutId);
        binding.debounceState = null;
    };
    DebounceBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('debounce')
    ], DebounceBindingBehavior);
    return DebounceBindingBehavior;
}());

function findOriginalEventTarget(event) {
    return (event.path && event.path[0]) || (event.deepPath && event.deepPath[0]) || event.target;
}
function handleSelfEvent(event) {
    var target = findOriginalEventTarget(event);
    if (this.target !== target) {
        return;
    }
    this.selfEventCallSource(event);
}
var SelfBindingBehavior = (function () {
    function SelfBindingBehavior() {
    }
    SelfBindingBehavior.prototype.bind = function (binding, source) {
        if (!binding.callSource || !binding.targetEvent) {
            throw new Error('Self binding behavior only supports event.');
        }
        binding.selfEventCallSource = binding.callSource;
        binding.callSource = handleSelfEvent;
    };
    SelfBindingBehavior.prototype.unbind = function (binding, source) {
        binding.callSource = binding.selfEventCallSource;
        binding.selfEventCallSource = null;
    };
    SelfBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('self')
    ], SelfBindingBehavior);
    return SelfBindingBehavior;
}());

var BindingSignaler = (function () {
    function BindingSignaler() {
        this.signals = {};
    }
    BindingSignaler.prototype.signal = function (name) {
        var bindings = this.signals[name];
        if (!bindings) {
            return;
        }
        var i = bindings.length;
        while (i--) {
            bindings[i].call(aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.sourceContext);
        }
    };
    return BindingSignaler;
}());

var SignalBindingBehavior = (function () {
    function SignalBindingBehavior(bindingSignaler) {
        this.signals = bindingSignaler.signals;
    }
    SignalBindingBehavior.inject = function () { return [BindingSignaler]; };
    SignalBindingBehavior.prototype.bind = function (binding, source) {
        var names = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            names[_i - 2] = arguments[_i];
        }
        if (!binding.updateTarget) {
            throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
        }
        var signals = this.signals;
        if (names.length === 1) {
            var name_1 = names[0];
            var bindings = signals[name_1] || (signals[name_1] = []);
            bindings.push(binding);
            binding.signalName = name_1;
        }
        else if (names.length > 1) {
            var i = names.length;
            while (i--) {
                var name_2 = names[i];
                var bindings = signals[name_2] || (signals[name_2] = []);
                bindings.push(binding);
            }
            binding.signalName = names;
        }
        else {
            throw new Error('Signal name is required.');
        }
    };
    SignalBindingBehavior.prototype.unbind = function (binding, source) {
        var signals = this.signals;
        var name = binding.signalName;
        binding.signalName = null;
        if (Array.isArray(name)) {
            var names = name;
            var i = names.length;
            while (i--) {
                var n = names[i];
                var bindings = signals[n];
                bindings.splice(bindings.indexOf(binding), 1);
            }
        }
        else {
            var bindings = signals[name];
            bindings.splice(bindings.indexOf(binding), 1);
        }
    };
    SignalBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('signal')
    ], SignalBindingBehavior);
    return SignalBindingBehavior;
}());

var eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
var notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way/ from-view bindings on input/select elements.';
var UpdateTriggerBindingBehavior = (function () {
    function UpdateTriggerBindingBehavior() {
    }
    UpdateTriggerBindingBehavior.prototype.bind = function (binding, source) {
        var events = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            events[_i - 2] = arguments[_i];
        }
        if (events.length === 0) {
            throw new Error(eventNamesRequired);
        }
        if (binding.mode !== aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.twoWay && binding.mode !== aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingMode.fromView) {
            throw new Error(notApplicableMessage);
        }
        var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
        if (!targetObserver.handler) {
            throw new Error(notApplicableMessage);
        }
        binding.targetObserver = targetObserver;
        targetObserver.originalHandler = binding.targetObserver.handler;
        var handler = new aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.EventSubscriber(events);
        targetObserver.handler = handler;
    };
    UpdateTriggerBindingBehavior.prototype.unbind = function (binding, source) {
        var targetObserver = binding.targetObserver;
        targetObserver.handler.dispose();
        targetObserver.handler = targetObserver.originalHandler;
        targetObserver.originalHandler = null;
    };
    UpdateTriggerBindingBehavior = __decorate([
        (0,aurelia_binding__WEBPACK_IMPORTED_MODULE_4__.bindingBehavior)('updateTrigger')
    ], UpdateTriggerBindingBehavior);
    return UpdateTriggerBindingBehavior;
}());

function _createDynamicElement(_a) {
    var name = _a.name, viewUrl = _a.viewUrl, bindableNames = _a.bindableNames, useShadowDOMmode = _a.useShadowDOMmode;
    var DynamicElement = (function () {
        function DynamicElement() {
        }
        DynamicElement.prototype.bind = function (bindingContext) {
            this.$parent = bindingContext;
        };
        DynamicElement = __decorate([
            (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customElement)(name),
            (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useView)(viewUrl)
        ], DynamicElement);
        return DynamicElement;
    }());
    for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
        (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable)(bindableNames[i])(DynamicElement);
    }
    switch (useShadowDOMmode) {
        case 'open':
            (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useShadowDOM)({ mode: 'open' })(DynamicElement);
            break;
        case 'closed':
            (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useShadowDOM)({ mode: 'closed' })(DynamicElement);
            break;
        case '':
            (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useShadowDOM)(DynamicElement);
            break;
        case null:
            break;
        default:
            (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_5__.getLogger)('aurelia-html-only-element')
                .warn("Expected 'use-shadow-dom' value to be \"close\", \"open\" or \"\", received " + useShadowDOMmode);
            break;
    }
    return DynamicElement;
}

function getElementName(address) {
    return /([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase();
}
function configure(config) {
    var viewEngine = config.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine);
    var loader = config.aurelia.loader;
    viewEngine.addResourcePlugin('.html', {
        'fetch': function (viewUrl) {
            return loader.loadTemplate(viewUrl).then(function (registryEntry) {
                var _a;
                var bindableNames = registryEntry.template.getAttribute('bindable');
                var useShadowDOMmode = registryEntry.template.getAttribute('use-shadow-dom');
                var name = getElementName(viewUrl);
                if (bindableNames) {
                    bindableNames = bindableNames.split(',').map(function (x) { return x.trim(); });
                    registryEntry.template.removeAttribute('bindable');
                }
                else {
                    bindableNames = [];
                }
                return _a = {}, _a[name] = _createDynamicElement({ name: name, viewUrl: viewUrl, bindableNames: bindableNames, useShadowDOMmode: useShadowDOMmode }), _a;
            });
        }
    });
}

function configure$1(config) {
    injectAureliaHideStyleAtHead();
    config.globalResources(Compose, If, Else, With, Repeat, Show, Hide, Replaceable, Focus, SanitizeHTMLValueConverter, OneTimeBindingBehavior, OneWayBindingBehavior, ToViewBindingBehavior, FromViewBindingBehavior, TwoWayBindingBehavior, ThrottleBindingBehavior, DebounceBindingBehavior, SelfBindingBehavior, SignalBindingBehavior, UpdateTriggerBindingBehavior, AttrBindingBehavior);
    configure(config);
    var viewEngine = config.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine);
    var styleResourcePlugin = {
        fetch: function (address) {
            var _a;
            return _a = {}, _a[address] = _createCSSResource(address), _a;
        }
    };
    ['.css', '.less', '.sass', '.scss', '.styl'].forEach(function (ext) { return viewEngine.addResourcePlugin(ext, styleResourcePlugin); });
}


//# sourceMappingURL=aurelia-templating-resources.js.map


/***/ }),

/***/ "aurelia-templating-router":
/*!*************************************************************************************************!*\
  !*** ./node_modules/aurelia-templating-router/dist/native-modules/aurelia-templating-router.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteHref": () => (/* binding */ RouteHref),
/* harmony export */   "RouterView": () => (/* binding */ RouterView),
/* harmony export */   "TemplatingRouteLoader": () => (/* binding */ TemplatingRouteLoader),
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-router */ 6433);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-metadata */ 1383);
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-path */ 8627);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ 1781);
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-dependency-injection */ 6158);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-binding */ 6778);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-pal */ 1015);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aurelia-logging */ 8099);









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

var EmptyLayoutViewModel = /** @class */ (function () {
    function EmptyLayoutViewModel() {
    }
    return EmptyLayoutViewModel;
}());
/**
 * Implementation of Aurelia Router ViewPort. Responsible for loading route, composing and swapping routes views
 */
var RouterView = /** @class */ (function () {
    function RouterView(element, container, viewSlot, router, viewLocator, compositionTransaction, compositionEngine) {
        this.element = element;
        this.container = container;
        this.viewSlot = viewSlot;
        this.router = router;
        this.viewLocator = viewLocator;
        this.compositionTransaction = compositionTransaction;
        this.compositionEngine = compositionEngine;
        // add this <router-view/> to router view ports lookup based on name attribute
        // when this router is the root router-view
        // also trigger AppRouter registerViewPort extra flow
        this.router.registerViewPort(this, this.element.getAttribute('name'));
        // Each <router-view/> process its instruction as a composition transaction
        // there are differences between intial composition and subsequent compositions
        // also there are differences between root composition and child <router-view/> composition
        // mark the first composition transaction with a property initialComposition to distinguish it
        // when the root <router-view/> gets new instruction for the first time
        if (!('initialComposition' in compositionTransaction)) {
            compositionTransaction.initialComposition = true;
            this.compositionTransactionNotifier = compositionTransaction.enlist();
        }
    }
    /**@internal */
    RouterView.inject = function () {
        return [aurelia_pal__WEBPACK_IMPORTED_MODULE_6__.DOM.Element, aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_4__.Container, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot, aurelia_router__WEBPACK_IMPORTED_MODULE_0__.Router, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewLocator, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransaction, aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionEngine];
    };
    RouterView.prototype.created = function (owningView) {
        this.owningView = owningView;
    };
    RouterView.prototype.bind = function (bindingContext, overrideContext) {
        // router needs to get access to view model of current route parent
        // doing it in generic way via viewModel property on container
        this.container.viewModel = bindingContext;
        this.overrideContext = overrideContext;
    };
    /**
     * Implementation of `aurelia-router` ViewPort interface, responsible for templating related part in routing Pipeline
     */
    RouterView.prototype.process = function ($viewPortInstruction, waitToSwap) {
        var _this = this;
        // have strong typings without exposing it in public typings, this is to ensure maximum backward compat
        var viewPortInstruction = $viewPortInstruction;
        var component = viewPortInstruction.component;
        var childContainer = component.childContainer;
        var viewModel = component.viewModel;
        var viewModelResource = component.viewModelResource;
        var metadata = viewModelResource.metadata;
        var config = component.router.currentInstruction.config;
        var viewPortConfig = config.viewPorts ? (config.viewPorts[viewPortInstruction.name] || {}) : {};
        childContainer.get(RouterViewLocator)._notify(this);
        // layoutInstruction is our layout viewModel
        var layoutInstruction = {
            viewModel: viewPortConfig.layoutViewModel || config.layoutViewModel || this.layoutViewModel,
            view: viewPortConfig.layoutView || config.layoutView || this.layoutView,
            model: viewPortConfig.layoutModel || config.layoutModel || this.layoutModel,
            router: viewPortInstruction.component.router,
            childContainer: childContainer,
            viewSlot: this.viewSlot
        };
        // viewport will be a thin wrapper around composition engine
        // to process instruction/configuration from users
        // preparing all information related to a composition process
        // first by getting view strategy of a ViewPortComponent View
        var viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
        if (viewStrategy && component.view) {
            viewStrategy.makeRelativeTo(aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.get(component.router.container.viewModel.constructor).moduleId);
        }
        // using metadata of a custom element view model to load appropriate view-factory instance
        return metadata
            .load(childContainer, viewModelResource.value, null, viewStrategy, true)
            // for custom element, viewFactory typing is always ViewFactory
            // for custom attribute, it will be HtmlBehaviorResource
            .then(function (viewFactory) {
            // if this is not the first time that this <router-view/> is composing its instruction
            // try to capture ownership of the composition transaction
            // child <router-view/> will not be able to capture, since root <router-view/> typically captures
            // the ownership token
            if (!_this.compositionTransactionNotifier) {
                _this.compositionTransactionOwnershipToken = _this.compositionTransaction.tryCapture();
            }
            if (layoutInstruction.viewModel || layoutInstruction.view) {
                viewPortInstruction.layoutInstruction = layoutInstruction;
            }
            var viewPortComponentBehaviorInstruction = aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BehaviorInstruction.dynamic(_this.element, viewModel, viewFactory);
            viewPortInstruction.controller = metadata.create(childContainer, viewPortComponentBehaviorInstruction);
            if (waitToSwap) {
                return null;
            }
            _this.swap(viewPortInstruction);
        });
    };
    RouterView.prototype.swap = function ($viewPortInstruction) {
        var _this = this;
        // have strong typings without exposing it in public typings, this is to ensure maximum backward compat
        var viewPortInstruction = $viewPortInstruction;
        var viewPortController = viewPortInstruction.controller;
        var layoutInstruction = viewPortInstruction.layoutInstruction;
        var previousView = this.view;
        // Final step of swapping a <router-view/> ViewPortComponent
        var work = function () {
            var swapStrategy = aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SwapStrategies[_this.swapOrder] || aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SwapStrategies.after;
            var viewSlot = _this.viewSlot;
            swapStrategy(viewSlot, previousView, function () { return Promise.resolve(viewSlot.add(_this.view)); }).then(function () {
                _this._notify();
            });
        };
        // Ensure all users setups have been completed
        var ready = function (owningView_or_layoutView) {
            viewPortController.automate(_this.overrideContext, owningView_or_layoutView);
            var transactionOwnerShipToken = _this.compositionTransactionOwnershipToken;
            // if this router-view is the root <router-view/> of a normal startup via aurelia.setRoot
            // attemp to take control of the transaction
            // if ownership can be taken
            // wait for transaction to complete before swapping
            if (transactionOwnerShipToken) {
                return transactionOwnerShipToken
                    .waitForCompositionComplete()
                    .then(function () {
                    _this.compositionTransactionOwnershipToken = null;
                    return work();
                });
            }
            // otherwise, just swap
            return work();
        };
        // If there is layout instruction, new to compose layout before processing ViewPortComponent
        // layout controller/view/view-model is composed using composition engine APIs
        if (layoutInstruction) {
            if (!layoutInstruction.viewModel) {
                // createController chokes if there's no viewmodel, so create a dummy one
                // but avoid using a POJO as it creates unwanted metadata in Object constructor
                layoutInstruction.viewModel = new EmptyLayoutViewModel();
            }
            // using composition engine to create compose layout
            return this.compositionEngine
                // first create controller from layoutInstruction
                // and treat it as CompositionContext
                // then emulate slot projection with ViewPortComponent view
                .createController(layoutInstruction)
                .then(function (layoutController) {
                var layoutView = layoutController.view;
                aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ShadowDOM.distributeView(viewPortController.view, layoutController.slots || layoutView.slots);
                // when there is a layout
                // view hierarchy is: <router-view/> owner view -> layout view -> ViewPortComponent view
                layoutController.automate((0,aurelia_binding__WEBPACK_IMPORTED_MODULE_5__.createOverrideContext)(layoutInstruction.viewModel), _this.owningView);
                layoutView.children.push(viewPortController.view);
                return layoutView || layoutController;
            })
                .then(function (newView) {
                _this.view = newView;
                return ready(newView);
            });
        }
        // if there is no layout, then get ViewPortComponent view ready as view property
        // and process controller/swapping
        // when there is no layout
        // view hierarchy is: <router-view/> owner view -> ViewPortComponent view
        this.view = viewPortController.view;
        return ready(this.owningView);
    };
    /**
     * Notify composition transaction that this router has finished processing
     * Happens when this <router-view/> is the root router-view
     * @internal
     */
    RouterView.prototype._notify = function () {
        var notifier = this.compositionTransactionNotifier;
        if (notifier) {
            notifier.done();
            this.compositionTransactionNotifier = null;
        }
    };
    /**
     * @internal Actively avoid using decorator to reduce the amount of code generated
     *
     * There is no view to compose by default in a router view
     * This custom element is responsible for composing its own view, based on current config
     */
    RouterView.$view = null;
    /**
     * @internal Actively avoid using decorator to reduce the amount of code generated
     */
    RouterView.$resource = {
        name: 'router-view',
        bindables: ['swapOrder', 'layoutView', 'layoutViewModel', 'layoutModel', 'inherit-binding-context']
    };
    return RouterView;
}());
/**
* Locator which finds the nearest RouterView, relative to the current dependency injection container.
*/
var RouterViewLocator = /** @class */ (function () {
    /**
    * Creates an instance of the RouterViewLocator class.
    */
    function RouterViewLocator() {
        var _this = this;
        this.promise = new Promise(function (resolve) { return _this.resolve = resolve; });
    }
    /**
    * Finds the nearest RouterView instance.
    * @returns A promise that will be resolved with the located RouterView instance.
    */
    RouterViewLocator.prototype.findNearest = function () {
        return this.promise;
    };
    /**@internal */
    RouterViewLocator.prototype._notify = function (routerView) {
        this.resolve(routerView);
    };
    return RouterViewLocator;
}());

/**@internal exported for unit testing */
var EmptyClass = /** @class */ (function () {
    function EmptyClass() {
    }
    return EmptyClass;
}());
(0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.inlineView)('<template></template>')(EmptyClass);
/**
 * Default implementation of `RouteLoader` used for loading component based on a route config
 */
var TemplatingRouteLoader = /** @class */ (function (_super) {
    __extends(TemplatingRouteLoader, _super);
    function TemplatingRouteLoader(compositionEngine) {
        var _this = _super.call(this) || this;
        _this.compositionEngine = compositionEngine;
        return _this;
    }
    /**
     * Resolve a view model from a RouteConfig
     * Throws when there is neither "moduleId" nor "viewModel" property
     * @internal
     */
    TemplatingRouteLoader.prototype.resolveViewModel = function (router, config) {
        return new Promise(function (resolve, reject) {
            var viewModel;
            if ('moduleId' in config) {
                var moduleId = config.moduleId;
                if (moduleId === null) {
                    viewModel = EmptyClass;
                }
                else {
                    // this requires container of router has passes a certain point
                    // where a view model has been setup on the container
                    // it will fail in enhance scenario because no viewport has been registered
                    moduleId = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_2__.relativeToFile)(moduleId, aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.get(router.container.viewModel.constructor).moduleId);
                    if (/\.html/i.test(moduleId)) {
                        viewModel = createDynamicClass(moduleId);
                    }
                    else {
                        viewModel = moduleId;
                    }
                }
                return resolve(viewModel);
            }
            // todo: add if ('viewModel' in config) to support static view model resolution
            reject(new Error('Invalid route config. No "moduleId" found.'));
        });
    };
    /**
     * Create child container based on a router container
     * Also ensures that child router are properly constructed in the newly created child container
     * @internal
     */
    TemplatingRouteLoader.prototype.createChildContainer = function (router) {
        var childContainer = router.container.createChild();
        childContainer.registerSingleton(RouterViewLocator);
        childContainer.getChildRouter = function () {
            var childRouter;
            childContainer.registerHandler(aurelia_router__WEBPACK_IMPORTED_MODULE_0__.Router, function () { return childRouter || (childRouter = router.createChild(childContainer)); });
            return childContainer.get(aurelia_router__WEBPACK_IMPORTED_MODULE_0__.Router);
        };
        return childContainer;
    };
    /**
     * Load corresponding component of a route config of a navigation instruction
     */
    TemplatingRouteLoader.prototype.loadRoute = function (router, config, _navInstruction) {
        var _this = this;
        return this
            .resolveViewModel(router, config)
            .then(function (viewModel) { return _this.compositionEngine.ensureViewModel({
            viewModel: viewModel,
            childContainer: _this.createChildContainer(router),
            view: config.view || config.viewStrategy,
            router: router
        }); });
    };
    /**@internal */
    TemplatingRouteLoader.inject = [aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionEngine];
    return TemplatingRouteLoader;
}(aurelia_router__WEBPACK_IMPORTED_MODULE_0__.RouteLoader));
/**@internal exported for unit testing */
function createDynamicClass(moduleId) {
    var name = /([^\/^\?]+)\.html/i.exec(moduleId)[1];
    var DynamicClass = /** @class */ (function () {
        function DynamicClass() {
        }
        DynamicClass.prototype.bind = function (bindingContext) {
            this.$parent = bindingContext;
        };
        return DynamicClass;
    }());
    (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customElement)(name)(DynamicClass);
    (0,aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useView)(moduleId)(DynamicClass);
    return DynamicClass;
}

var logger = (0,aurelia_logging__WEBPACK_IMPORTED_MODULE_7__.getLogger)('route-href');
/**
 * Helper custom attribute to help associate an element with a route by name
 */
var RouteHref = /** @class */ (function () {
    function RouteHref(router, element) {
        this.router = router;
        this.element = element;
        this.attribute = 'href';
    }
    /*@internal */
    RouteHref.inject = function () {
        return [aurelia_router__WEBPACK_IMPORTED_MODULE_0__.Router, aurelia_pal__WEBPACK_IMPORTED_MODULE_6__.DOM.Element];
    };
    RouteHref.prototype.bind = function () {
        this.isActive = true;
        this.processChange();
    };
    RouteHref.prototype.unbind = function () {
        this.isActive = false;
    };
    RouteHref.prototype.attributeChanged = function (value, previous) {
        if (previous) {
            this.element.removeAttribute(previous);
        }
        return this.processChange();
    };
    RouteHref.prototype.processChange = function () {
        var _this = this;
        return this.router
            .ensureConfigured()
            .then(function () {
            if (!_this.isActive) {
                // returning null to avoid Bluebird warning
                return null;
            }
            var element = _this.element;
            var href = _this.router.generate(_this.route, _this.params);
            if (element.au.controller) {
                element.au.controller.viewModel[_this.attribute] = href;
            }
            else {
                element.setAttribute(_this.attribute, href);
            }
            // returning null to avoid Bluebird warning
            return null;
        })
            .catch(function (reason) {
            logger.error(reason);
        });
    };
    /**
     * @internal Actively avoid using decorator to reduce the amount of code generated
     */
    RouteHref.$resource = {
        type: 'attribute',
        name: 'route-href',
        bindables: [
            { name: 'route', changeHandler: 'processChange', primaryProperty: true },
            { name: 'params', changeHandler: 'processChange' },
            'attribute'
        ] // type definition of Aurelia templating is wrong
    };
    return RouteHref;
}());

function configure(config) {
    config
        .singleton(aurelia_router__WEBPACK_IMPORTED_MODULE_0__.RouteLoader, TemplatingRouteLoader)
        .singleton(aurelia_router__WEBPACK_IMPORTED_MODULE_0__.Router, aurelia_router__WEBPACK_IMPORTED_MODULE_0__.AppRouter)
        .globalResources(RouterView, RouteHref);
    config.container.registerAlias(aurelia_router__WEBPACK_IMPORTED_MODULE_0__.Router, aurelia_router__WEBPACK_IMPORTED_MODULE_0__.AppRouter);
}


//# sourceMappingURL=aurelia-templating-router.js.map


/***/ })

}]);
//# sourceMappingURL=vendors-3ce50090.76deef636b52730e2c0a.bundle.js.map