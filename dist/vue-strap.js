(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueStrap"] = factory();
	else
		root["VueStrap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _Accordion = __webpack_require__(91);
	
	var _Accordion2 = _interopRequireDefault(_Accordion);
	
	var _Affix = __webpack_require__(95);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	var _Alert = __webpack_require__(98);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Aside = __webpack_require__(105);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	var _buttonGroup = __webpack_require__(110);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Carousel = __webpack_require__(113);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	var _Checkbox = __webpack_require__(118);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Datepicker = __webpack_require__(123);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	var _Dropdown = __webpack_require__(128);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	var _FormGroup = __webpack_require__(133);
	
	var _FormGroup2 = _interopRequireDefault(_FormGroup);
	
	var _Input = __webpack_require__(136);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Modal = __webpack_require__(141);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _Navbar = __webpack_require__(150);
	
	var _Navbar2 = _interopRequireDefault(_Navbar);
	
	var _Option = __webpack_require__(153);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _Panel = __webpack_require__(156);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Popover = __webpack_require__(161);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	var _Progressbar = __webpack_require__(167);
	
	var _Progressbar2 = _interopRequireDefault(_Progressbar);
	
	var _Radio = __webpack_require__(170);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _Select = __webpack_require__(175);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Slider = __webpack_require__(194);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Spinner = __webpack_require__(197);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	var _Tab = __webpack_require__(202);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _TabGroup = __webpack_require__(205);
	
	var _TabGroup2 = _interopRequireDefault(_TabGroup);
	
	var _Tabset = __webpack_require__(210);
	
	var _Tabset2 = _interopRequireDefault(_Tabset);
	
	var _Tooltip = __webpack_require__(215);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Typeahead = __webpack_require__(220);
	
	var _Typeahead2 = _interopRequireDefault(_Typeahead);
	
	var _Daterange = __webpack_require__(225);
	
	var _Daterange2 = _interopRequireDefault(_Daterange);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueStrap = {
	  $: _NodeList2.default,
	  accordion: _Accordion2.default,
	  affix: _Affix2.default,
	  alert: _Alert2.default,
	  aside: _Aside2.default,
	  buttonGroup: _buttonGroup2.default,
	  carousel: _Carousel2.default,
	  checkbox: _Checkbox2.default,
	  datepicker: _Datepicker2.default,
	  daterange: _Daterange2.default,
	  dropdown: _Dropdown2.default,
	  formGroup: _FormGroup2.default,
	  input: _Input2.default,
	  modal: _Modal2.default,
	  navbar: _Navbar2.default,
	  option: _Option2.default,
	  panel: _Panel2.default,
	  popover: _Popover2.default,
	  progressbar: _Progressbar2.default,
	  radio: _Radio2.default,
	  select: _Select2.default,
	  slider: _Slider2.default,
	  spinner: _Spinner2.default,
	  tab: _Tab2.default,
	  tabGroup: _TabGroup2.default,
	  tabset: _Tabset2.default,
	  tooltip: _Tooltip2.default,
	  typeahead: _Typeahead2.default
	};
	
	module.exports = VueStrap;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty = __webpack_require__(29);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _iterator = __webpack_require__(48);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _getOwnPropertyNames = __webpack_require__(83);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _classCallCheck2 = __webpack_require__(89);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(90);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent = void 0;
	var blurList = [];
	var Events = [];
	
	function isNode(val) {
	  return val instanceof window.Node;
	}
	function isNodeList(val) {
	  return val instanceof window.NodeList || val instanceof NodeList || val instanceof window.HTMLCollection || val instanceof Array;
	}
	
	function splitWords(val) {
	  val = val.trim();return val.length ? val.replace(/\s+/, ' ').split(' ') : [];
	}
	function joinWords(val) {
	  return val.length ? val.join(' ') : '';
	}
	
	var NodeList = function () {
	  function NodeList(args) {
	    (0, _classCallCheck3.default)(this, NodeList);
	
	    var nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !isNode(args[0]) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var i in nodes) {
	        this[i] = nodes[i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	  }
	
	  (0, _createClass3.default)(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        ArrayProto.forEach.call(arr, function (el) {
	          if (isNode(el)) {
	            if (!~nodes.indexOf(el)) nodes.push(el);
	          } else if (isNodeList(el)) {
	            flatten(el);
	          }
	        });
	      }
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (isNode(arg)) {
	          if (!~nodes.indexOf(arg)) nodes.push(arg);
	        } else if (isNodeList(arg)) {
	          flatten(arg);
	        } else {
	          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	        }
	      });
	      return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var notRemoved = flatten(this).filter(function (el) {
	        if (el.remove) {
	          el.remove();
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        }
	        return document.body.contains(el);
	      });
	      if (notRemoved.length) console.warn('NodeList: Some nodes could not be deleted.');
	      return notRemoved;
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return NodeListJS(ArrayProto.filter.apply(this, args), this);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      flatten(this).forEach(function (node) {
	        ArrayProto.push.apply(nodes, node.querySelectorAll(element));
	      });
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'findChildren',
	    value: function findChildren(element) {
	      var _this = this;
	
	      if (element) return this.find(element).filter(function (el) {
	        return _this.includes(el.parentElement);
	      });
	      return flatten(this.map(function (el) {
	        return el.children;
	      }));
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      ArrayProto.forEach.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      var mapped = ArrayProto.map.apply(this, args);
	      return mapped.some(function (el) {
	        return isNode(el) || isNodeList(el);
	      }) ? flatten(mapped, this) : mapped;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return flatten(this.map(function (el) {
	        return el.parentNode;
	      }), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _this2 = this;
	
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this2.indexOf(arg)) ArrayProto.push.call(_this2, arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      while (amount--) {
	        nodes.push(ArrayProto.shift.call(this));
	      }return nodes.length == 1 ? nodes[0] : NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return NodeListJS(ArrayProto.slice.apply(this, args), this);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      for (var i = 2, l = args.length; i < l; i++) {
	        if (!isNode(args[i])) throw nodeError;
	      }
	      ArrayProto.splice.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var _this3 = this;
	
	      var unshift = ArrayProto.unshift.bind(this);
	
	      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	        args[_key9] = arguments[_key9];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this3.indexOf(arg)) unshift(arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes, value) {
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = splitWords(classes);
	      }
	      this.each(function (el) {
	        var list = splitWords(el.className);
	        classes.forEach(function (c) {
	          var hasClass = ~list.indexOf(c);
	          if (!hasClass && method !== 'remove') list.push(c);
	          if (hasClass && method !== 'add') {
	            list = list.filter(function (el) {
	              return el !== c;
	            });
	          }
	        });
	        list = joinWords(list);
	        if (!list) el.removeAttribute('class');else el.className = list;
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      this.each(function (el) {
	        if (el !== null) {
	          el = el[prop];
	        }
	        arr.push(el);
	      });
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        this.each(function (el) {
	          if (el) {
	            for (var key in prop) {
	              if (key in el) {
	                el[key] = prop[key];
	              }
	            }
	          }
	        });
	      } else {
	        this.each(function (el) {
	          if (prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	        args[_key10] = arguments[_key10];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      this.each(function (el) {
	        if (el && el[method] instanceof Function) {
	          el = el[method].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      });
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return NodeListJS([this[index]], this);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = splitWords(events);
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = NodeListJS(selector, this);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      this.each(function (el) {
	        events.forEach(function (event) {
	          if (el === window || isNode(el)) {
	            el.addEventListener(event, callback, false);
	            Events.push({
	              el: el,
	              event: event,
	              callback: callback
	            });
	          }
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      events = events instanceof Array ? events : typeof events === 'string' ? splitWords(events) : null;
	      this.each(function (el) {
	        Events = Events.filter(function (e) {
	          if (e && e.el === el && (!callback || callback === e.callback) && (!events || ~events.indexOf(e.event))) {
	            e.el.removeEventListener(e.event, e.callback);
	            return false;
	          }
	          return true;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({ el: el, callback: callback });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          blurList.forEach(function (item) {
	            var target = item.el.contains(e.target) || item.el === e.target;
	            if (!target) item.callback.call(item.el, e, item.el);
	          });
	        };
	        document.addEventListener('click', blurEvent, false);
	        document.addEventListener('touchstart', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        blurList = blurList.filter(function (blur) {
	          if (blur && blur.el === el && (!callback || blur.callback === callback)) {
	            return false;
	          }
	          return el;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);
	  return NodeList;
	}();
	
	var NL = NodeList.prototype;
	
	function flatten(arr, owner) {
	  var list = [];
	  ArrayProto.forEach.call(arr, function (el) {
	    if (isNode(el)) {
	      if (!~list.indexOf(el)) list.push(el);
	    } else if (isNodeList(el)) {
	      for (var id in el) {
	        list.push(el[id]);
	      }
	    } else if (el !== null) {
	      arr.get = NL.get;
	      arr.set = NL.set;
	      arr.call = NL.call;
	      arr.owner = owner;
	      return arr;
	    }
	  });
	  return NodeListJS(list, owner);
	}
	
	(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
	  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && _iterator2.default) {
	  NL[_iterator2.default] = NL.values = ArrayProto[_iterator2.default];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this4 = this;
	
	  if (NL[prop]) return;
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
	        args[_key11] = arguments[_key11];
	      }
	
	      var arr = [];
	      var returnThis = true;
	      for (var i in NL) {
	        var el = NL[i];
	        if (el && el[prop] instanceof Function) {
	          el = el[prop].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      }
	      return returnThis ? _this4 : flatten(arr, _this4);
	    };
	  } else {
	    (0, _defineProperty2.default)(NL, prop, {
	      get: function get() {
	        var arr = [];
	        this.each(function (el) {
	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        });
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        this.each(function (el) {
	          if (el && prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
	    args[_key12] = arguments[_key12];
	  }
	
	  return new NodeList(args);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	var $Object = __webpack_require__(34).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(32);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(42), 'Object', { defineProperty: __webpack_require__(38).f });


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(33);
	var core = __webpack_require__(34);
	var ctx = __webpack_require__(35);
	var hide = __webpack_require__(37);
	var has = __webpack_require__(47);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(36);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(38);
	var createDesc = __webpack_require__(46);
	module.exports = __webpack_require__(42) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(39);
	var IE8_DOM_DEFINE = __webpack_require__(41);
	var toPrimitive = __webpack_require__(45);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(42) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(42) && !__webpack_require__(43)(function () {
	  return Object.defineProperty(__webpack_require__(44)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(43)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	var document = __webpack_require__(33).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(40);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(78);
	module.exports = __webpack_require__(82).f('iterator');


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(51)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(54)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(52);
	var defined = __webpack_require__(53);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(55);
	var $export = __webpack_require__(32);
	var redefine = __webpack_require__(56);
	var hide = __webpack_require__(37);
	var Iterators = __webpack_require__(57);
	var $iterCreate = __webpack_require__(58);
	var setToStringTag = __webpack_require__(74);
	var getPrototypeOf = __webpack_require__(76);
	var ITERATOR = __webpack_require__(75)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(37);


/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(59);
	var descriptor = __webpack_require__(46);
	var setToStringTag = __webpack_require__(74);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(37)(IteratorPrototype, __webpack_require__(75)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(39);
	var dPs = __webpack_require__(60);
	var enumBugKeys = __webpack_require__(72);
	var IE_PROTO = __webpack_require__(69)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(44)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(73).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(38);
	var anObject = __webpack_require__(39);
	var getKeys = __webpack_require__(61);
	
	module.exports = __webpack_require__(42) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(62);
	var enumBugKeys = __webpack_require__(72);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(47);
	var toIObject = __webpack_require__(63);
	var arrayIndexOf = __webpack_require__(66)(false);
	var IE_PROTO = __webpack_require__(69)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(64);
	var defined = __webpack_require__(53);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(65);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(63);
	var toLength = __webpack_require__(67);
	var toAbsoluteIndex = __webpack_require__(68);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(52);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(52);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(70)('keys');
	var uid = __webpack_require__(71);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(34);
	var global = __webpack_require__(33);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(55) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(33).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(38).f;
	var has = __webpack_require__(47);
	var TAG = __webpack_require__(75)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(70)('wks');
	var uid = __webpack_require__(71);
	var Symbol = __webpack_require__(33).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(47);
	var toObject = __webpack_require__(77);
	var IE_PROTO = __webpack_require__(69)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(53);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	var global = __webpack_require__(33);
	var hide = __webpack_require__(37);
	var Iterators = __webpack_require__(57);
	var TO_STRING_TAG = __webpack_require__(75)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(80);
	var step = __webpack_require__(81);
	var Iterators = __webpack_require__(57);
	var toIObject = __webpack_require__(63);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(54)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(75);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	var $Object = __webpack_require__(34).Object;
	module.exports = function getOwnPropertyNames(it) {
	  return $Object.getOwnPropertyNames(it);
	};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(86)('getOwnPropertyNames', function () {
	  return __webpack_require__(87).f;
	});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(32);
	var core = __webpack_require__(34);
	var fails = __webpack_require__(43);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(63);
	var gOPN = __webpack_require__(88).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(62);
	var hiddenKeys = __webpack_require__(72).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(29);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(92)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(94)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: null
	    },
	    oneAtAtime: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  created: function created() {
	    var _this = this;
	
	    this._isAccordion = true;
	    this.$on('isOpenEvent', function (child) {
	      if (_this.oneAtAtime) {
	        _this.$children.forEach(function (item) {
	          if (child !== item) {
	            item.isOpen = false;
	          }
	        });
	      }
	    });
	  }
	};
	// </script>
	// <template>
	
	//   <div class="panel-group">
	
	//     <slot></slot>
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getJSON = getJSON;
	exports.getScrollBarWidth = getScrollBarWidth;
	exports.translations = translations;
	exports.delayer = delayer;
	exports.VueFixer = VueFixer;
	// coerce convert som types of data into another type
	var coerce = exports.coerce = {
	  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
	  boolean: function boolean(val) {
	    return typeof val === 'string' ? val === '' || val === 'true' ? true : val === 'false' || val === 'null' || val === 'undefined' ? false : val : val;
	  },
	  // Attempt to convert a string value to a Number. Otherwise, return 0.
	  number: function number(val) {
	    var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	    return typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val);
	  },
	  // Attempt to convert to string any value, except for null or undefined.
	  string: function string(val) {
	    return val === undefined || val === null ? '' : val + '';
	  },
	  // Pattern accept RegExp, function, or string (converted to RegExp). Otherwise return null.
	  pattern: function pattern(val) {
	    return val instanceof Function || val instanceof RegExp ? val : typeof val === 'string' ? new RegExp(val) : null;
	  }
	};
	
	function getJSON(url) {
	  var request = new window.XMLHttpRequest();
	  var data = {};
	  // p (-simulated- promise)
	  var p = {
	    then: function then(fn1, fn2) {
	      return p.done(fn1).fail(fn2);
	    },
	    catch: function _catch(fn) {
	      return p.fail(fn);
	    },
	    always: function always(fn) {
	      return p.done(fn).fail(fn);
	    }
	  };
	  ['done', 'fail'].forEach(function (name) {
	    data[name] = [];
	    p[name] = function (fn) {
	      if (fn instanceof Function) data[name].push(fn);
	      return p;
	    };
	  });
	  p.done(JSON.parse);
	  request.onreadystatechange = function () {
	    if (request.readyState === 4) {
	      var e = { status: request.status };
	      if (request.status === 200) {
	        try {
	          var response = request.responseText;
	          for (var i in data.done) {
	            var value = data.done[i](response);
	            if (value !== undefined) {
	              response = value;
	            }
	          }
	        } catch (err) {
	          data.fail.forEach(function (fail) {
	            return fail(err);
	          });
	        }
	      } else {
	        data.fail.forEach(function (fail) {
	          return fail(e);
	        });
	      }
	    }
	  };
	  request.open('GET', url);
	  request.setRequestHeader('Accept', 'application/json');
	  request.send();
	  return p;
	}
	
	function getScrollBarWidth() {
	  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
	    return 0;
	  }
	  var inner = document.createElement('p');
	  inner.style.width = '100%';
	  inner.style.height = '200px';
	
	  var outer = document.createElement('div');
	  outer.style.position = 'absolute';
	  outer.style.top = '0px';
	  outer.style.left = '0px';
	  outer.style.visibility = 'hidden';
	  outer.style.width = '200px';
	  outer.style.height = '150px';
	  outer.style.overflow = 'hidden';
	  outer.appendChild(inner);
	
	  document.body.appendChild(outer);
	  var w1 = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var w2 = inner.offsetWidth;
	  if (w1 === w2) w2 = outer.clientWidth;
	
	  document.body.removeChild(outer);
	
	  return w1 - w2;
	}
	
	// return all the translations or the default language (english)
	function translations() {
	  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
	
	  var text = {
	    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    limit: 'Limit reached ({{limit}} items max).',
	    loading: 'Loading...',
	    minLength: 'Min. Length',
	    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	    notSelected: 'Nothing Selected',
	    required: 'Required',
	    search: 'Search'
	  };
	  return window.VueStrapLang ? window.VueStrapLang(lang) : text;
	}
	
	// delayer: set a function that execute after a delay
	// @params (function, delay_prop or value, default_value)
	function delayer(fn, varTimer) {
	  var ifNaN = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	
	  function toInt(el) {
	    return (/^[0-9]+$/.test(el) ? Number(el) || 1 : null
	    );
	  }
	  var timerId;
	  return function () {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (timerId) clearTimeout(timerId);
	    timerId = setTimeout(function () {
	      fn.apply(_this, args);
	    }, toInt(varTimer) || toInt(this[varTimer]) || ifNaN);
	  };
	}
	
	// Fix a vue instance Lifecycle to vue 1/2 (just the basic elements, is not a real parser, so this work only if your code is compatible with both)
	function VueFixer(vue) {
	  var vue2 = !window.Vue || !window.Vue.partial;
	  var mixin = {
	    computed: {
	      vue2: function vue2() {
	        return !this.$dispatch;
	      }
	    }
	  };
	  if (!vue2) {
	    if (vue.beforeCreate) {
	      mixin.create = vue.beforeCreate;
	      delete vue.beforeCreate;
	    }
	    if (vue.beforeMount) {
	      vue.beforeCompile = vue.beforeMount;
	      delete vue.beforeMount;
	    }
	    if (vue.mounted) {
	      vue.ready = vue.mounted;
	      delete vue.mounted;
	    }
	  } else {
	    if (vue.beforeCompile) {
	      vue.beforeMount = vue.beforeCompile;
	      delete vue.beforeCompile;
	    }
	    if (vue.compiled) {
	      mixin.compiled = vue.compiled;
	      delete vue.compiled;
	    }
	    if (vue.ready) {
	      vue.mounted = vue.ready;
	      delete vue.ready;
	    }
	  }
	  if (!vue.mixins) {
	    vue.mixins = [];
	  }
	  vue.mixins.unshift(mixin);
	  return vue;
	}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n    <slot></slot>\r\n  </div>";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(96)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(97)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Affix.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Affix.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Affix.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Affix.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Affix.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="hidden-print hidden-xs hidden-sm">
	
	//     <nav class="bs-docs-sidebar" :class="{affix:affixed}" :style="{marginTop:top}">
	
	//       <slot></slot>
	
	//     </nav>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      affixed: false
	    };
	  },
	
	  computed: {
	    top: function top() {
	      return this.offset > 0 ? this.offset + 'px' : null;
	    }
	  },
	  methods: {
	    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
	    checkScroll: function checkScroll() {
	      var _this = this;
	
	      // if is hidden don't calculate anything
	      if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
	        return;
	      }
	      // get window scroll and element position to detect if have to be normal or affixed
	      var scroll = {};
	      var element = {};
	      var rect = this.$el.getBoundingClientRect();
	      var body = document.body;
	      ['Top', 'Left'].forEach(function (type) {
	        var t = type.toLowerCase();
	        var ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset'];
	        var method = 'scroll' + type;
	        if (typeof ret !== 'number') {
	          // ie6,7,8 standard mode
	          ret = document.documentElement[method];
	          if (typeof ret !== 'number') {
	            // quirks mode
	            ret = document.body[method];
	          }
	        }
	        scroll[t] = ret;
	        element[t] = scroll[t] + rect[t] - (_this.$el['client' + type] || body['client' + type] || 0);
	      });
	      var fix = scroll.top > element.top - this.offset;
	      if (this.affixed !== fix) {
	        this.affixed = fix;
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    (0, _NodeList2.default)(window).on('scroll resize', function () {
	      return _this2.checkScroll();
	    });
	    setTimeout(function () {
	      return _this2.checkScroll();
	    }, 0);
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this3 = this;
	
	    (0, _NodeList2.default)(window).off('scroll resize', function () {
	      return _this3.checkScroll();
	    });
	  }
	};
	// </script>

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"hidden-print hidden-xs hidden-sm\">\r\n    <nav class=\"bs-docs-sidebar\" :class=\"{affix:affixed}\" :style=\"{marginTop:top}\">\r\n      <slot></slot>\r\n    </nav>\r\n  </div>";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(99)
	module.exports = __webpack_require__(103)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(104)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Alert.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Alert.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Alert.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Alert.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Alert.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-3f5f0bac&file=Alert.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-3f5f0bac&file=Alert.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".fade-transition {\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}", ""]);
	
	// exports


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    type: {
	      type: String
	    },
	    dismissable: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true,
	      twoWay: true
	    },
	    duration: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    width: {
	      type: String
	    },
	    placement: {
	      type: String
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && Boolean(this.duration)) {
	        this._timeout = setTimeout(function () {
	          _this.show = false;
	        }, this.duration);
	      }
	    }
	  }
	  // </script>
	
	
	  // <style>
	
	  // .fade-transition {
	
	  //   transition: opacity .3s ease;
	
	  // }
	
	  // .fade-enter,
	
	  // .fade-leave {
	
	  //   height: 0;
	
	  //   opacity: 0;
	
	  // }
	
	  // .alert.top {
	
	  //   position: fixed;
	
	  //   top: 30px;
	
	  //   margin: 0 auto;
	
	  //   left: 0;
	
	  //   right: 0;
	
	  //   z-index: 1050;
	
	  // }
	
	  // .alert.top-right {
	
	  //   position: fixed;
	
	  //   top: 30px;
	
	  //   right: 50px;
	
	  //   z-index: 1050;
	
	  // }
	
	  // </style>
	
	}; // <template>
	
	//   <div
	
	//     v-show="show"
	
	//     v-bind:class="{
	
	//       'alert':		true,
	
	//       'alert-success':(type == 'success'),
	
	//       'alert-warning':(type == 'warning'),
	
	//       'alert-info':	(type == 'info'),
	
	//       'alert-danger':	(type == 'danger'),
	
	//       'top': 			(placement === 'top'),
	
	//       'top-right': 	(placement === 'top-right')
	
	//     }"
	
	//     transition="fade"
	
	//     v-bind:style="{width:width}"
	
	//     role="alert">
	
	//     <button v-show="dismissable" type="button" class="close"
	
	//       @click="show = false">
	
	//       <span>&times;</span>
	
	//     </button>
	
	//     <slot></slot>
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports = "<div\r\n    v-show=\"show\"\r\n    v-bind:class=\"{\r\n      'alert':\t\ttrue,\r\n      'alert-success':(type == 'success'),\r\n      'alert-warning':(type == 'warning'),\r\n      'alert-info':\t(type == 'info'),\r\n      'alert-danger':\t(type == 'danger'),\r\n      'top': \t\t\t(placement === 'top'),\r\n      'top-right': \t(placement === 'top-right')\r\n    }\"\r\n    transition=\"fade\"\r\n    v-bind:style=\"{width:width}\"\r\n    role=\"alert\">\r\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\r\n      @click=\"show = false\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <slot></slot>\r\n  </div>";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(106)
	module.exports = __webpack_require__(108)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(109)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Aside.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Aside.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Aside.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Aside.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Aside.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-725a6806&file=Aside.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-725a6806&file=Aside.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".aside-open {\r\n  transition: transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  transform: translateX(-300px);\r\n}\r\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave {\r\n  animation:slideleft-out .3s;\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter {\r\n  animation:slideright-in .3s;\r\n}\r\n.slideright-leave {\r\n  animation:slideright-out .3s;\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width:240px\r\n  }\r\n}\r\n.aside.left {\r\n  right: auto;\r\n  left: 0\r\n}\r\n.aside.right {\r\n  right: 0;\r\n  left: auto\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\r\n}", ""]);
	
	// exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="aside"
	
	//     v-bind:style="{width:width + 'px'}"
	
	//     v-bind:class="{
	
	//     left:placement === 'left',
	
	//     right:placement === 'right'
	
	//     }"
	
	//     v-show="show"
	
	//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
	
	//     <div class="aside-dialog">
	
	//       <div class="aside-content">
	
	//         <div class="aside-header">
	
	//           <button type="button" class="close" @click='close'><span>&times;</span></button>
	
	//           <h4 class="aside-title">
	
	//           <slot name="header">
	
	//             {{ header }}
	
	//           </slot>
	
	//           </h4>
	
	//         </div>
	
	//         <div class="aside-body">
	
	//           <slot></slot>
	
	//         </div>
	
	//       </div>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    show: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      required: true,
	      twoWay: true
	    },
	    placement: {
	      type: String,
	      default: 'right'
	    },
	    header: {
	      type: String
	    },
	    width: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 320
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (val) {
	        if (!this._backdrop) {
	          this._backdrop = document.createElement('div');
	        }
	        this._backdrop.className = 'aside-backdrop';
	        body.appendChild(this._backdrop);
	        body.classList.add('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        // request property that requires layout to force a layout
	        var x = this._backdrop.clientHeight;
	        this._backdrop.classList.add('in');
	        (0, _NodeList2.default)(this._backdrop).on('click', function () {
	          return _this.close();
	        });
	      } else {
	        (0, _NodeList2.default)(this._backdrop).on('transitionend', function () {
	          (0, _NodeList2.default)(_this._backdrop).off();
	          try {
	            body.classList.remove('modal-open');
	            body.style.paddingRight = '0';
	            body.removeChild(_this._backdrop);
	            _this._backdrop = null;
	          } catch (e) {}
	        });
	        this._backdrop.className = 'aside-backdrop';
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	  // </script>
	
	
	  // <style>
	
	  // .aside-open {
	
	  //   transition: transform 0.3s;
	
	  // }
	
	  // .aside-open.has-push-right {
	
	  //   transform: translateX(-300px);
	
	  // }
	
	  // .aside {
	
	  //     position: fixed;
	
	  //     top: 0;
	
	  //     bottom: 0;
	
	  //     z-index: 1049;
	
	  //     overflow: auto;
	
	  //     background: #fff;
	
	  // }
	
	  // .aside.left {
	
	  //   left: 0;
	
	  //   right: auto;
	
	  // }
	
	  // .aside.right {
	
	  //   left: auto;
	
	  //   right: 0;
	
	  // }
	
	  // .slideleft-enter {
	
	  //   animation:slideleft-in .3s;
	
	  // }
	
	  // .slideleft-leave {
	
	  //   animation:slideleft-out .3s;
	
	  // }
	
	  // @keyframes slideleft-in {
	
	  //   0% {
	
	  //     transform: translateX(-100%);
	
	  //     opacity: 0;
	
	  //   }
	
	  //   100% {
	
	  //     transform: translateX(0);
	
	  //     opacity: 1;
	
	  //   }
	
	  // }
	
	  // @keyframes slideleft-out {
	
	  //   0% {
	
	  //     transform: translateX(0);
	
	  //     opacity: 1;
	
	  //   }
	
	  //   100% {
	
	  //     transform: translateX(-100%);
	
	  //     opacity: 0;
	
	  //   }
	
	  // }
	
	  // .slideright-enter {
	
	  //   animation:slideright-in .3s;
	
	  // }
	
	  // .slideright-leave {
	
	  //   animation:slideright-out .3s;
	
	  // }
	
	  // @keyframes slideright-in {
	
	  //   0% {
	
	  //     transform: translateX(100%);
	
	  //     opacity: 0;
	
	  //   }
	
	  //   100% {
	
	  //     transform: translateX(0);
	
	  //     opacity: 1;
	
	  //   }
	
	  // }
	
	  // @keyframes slideright-out {
	
	  //   0% {
	
	  //     transform: translateX(0);
	
	  //     opacity: 1;
	
	  //   }
	
	  //   100% {
	
	  //     transform: translateX(100%);
	
	  //     opacity: 0;
	
	  //   }
	
	  // }
	
	  // .aside:focus {
	
	  //     outline: 0
	
	  // }
	
	  // @media (max-width: 991px) {
	
	  //   .aside {
	
	  //     min-width:240px
	
	  //   }
	
	  // }
	
	  // .aside.left {
	
	  //   right: auto;
	
	  //   left: 0
	
	  // }
	
	  // .aside.right {
	
	  //   right: 0;
	
	  //   left: auto
	
	  // }
	
	  // .aside .aside-dialog .aside-header {
	
	  //   border-bottom: 1px solid #e5e5e5;
	
	  //   min-height: 16.43px;
	
	  //   padding: 6px 15px;
	
	  //   background: #337ab7;
	
	  //   color: #fff
	
	  // }
	
	  // .aside .aside-dialog .aside-header .close {
	
	  //   margin-right: -8px;
	
	  //   padding: 4px 8px;
	
	  //   color: #fff;
	
	  //   font-size: 25px;
	
	  //   opacity: .8
	
	  // }
	
	  // .aside .aside-dialog .aside-body {
	
	  //   position: relative;
	
	  //   padding: 15px
	
	  // }
	
	  // .aside .aside-dialog .aside-footer {
	
	  //   padding: 15px;
	
	  //   text-align: right;
	
	  //   border-top: 1px solid #e5e5e5
	
	  // }
	
	  // .aside .aside-dialog .aside-footer .btn+.btn {
	
	  //   margin-left: 5px;
	
	  //   margin-bottom: 0
	
	  // }
	
	  // .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
	
	  //   margin-left: -1px
	
	  // }
	
	  // .aside .aside-dialog .aside-footer .btn-block+.btn-block {
	
	  //   margin-left: 0
	
	  // }
	
	  // .aside-backdrop {
	
	  //   position: fixed;
	
	  //   top: 0;
	
	  //   right: 0;
	
	  //   bottom: 0;
	
	  //   left: 0;
	
	  //   z-index: 1040;
	
	  //   opacity: 0;
	
	  //   transition: opacity .3s ease;
	
	  //   background-color: #000
	
	  // }
	
	  // .aside-backdrop.in {
	
	  //   opacity: .5;
	
	  //   filter: alpha(opacity=50)
	
	  // }
	
	  // </style>
	
	};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"aside\"\r\n    v-bind:style=\"{width:width + 'px'}\"\r\n    v-bind:class=\"{\r\n    left:placement === 'left',\r\n    right:placement === 'right'\r\n    }\"\r\n    v-show=\"show\"\r\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\r\n    <div class=\"aside-dialog\">\r\n      <div class=\"aside-content\">\r\n        <div class=\"aside-header\">\r\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\r\n          <h4 class=\"aside-title\">\r\n          <slot name=\"header\">\r\n            {{ header }}\r\n          </slot>\r\n          </h4>\r\n        </div>\r\n        <div class=\"aside-body\">\r\n          <slot></slot>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(111)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(112)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    value: null,
	    buttons: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    justified: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: 'default'
	    },
	    vertical: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  watch: {
	    value: {
	      deep: true,
	      handler: function handler(val) {
	        this.$children.forEach(function (el) {
	          if (el.group && el.eval) el.eval();
	        });
	      }
	    }
	  },
	  created: function created() {
	    this._btnGroup = true;
	  }
	};
	// </script>
	// <template>
	
	//   <div :class="{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}" :data-toggle="buttons&&'buttons'">
	
	//     <slot></slot>
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = "<div :class=\"{'btn-group':buttons,'btn-group-justified':justified,'btn-group-vertical':vertical}\" :data-toggle=\"buttons&&'buttons'\">\r\n    <slot></slot>\r\n  </div>";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(114)
	module.exports = __webpack_require__(116)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(117)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-d3e7b7fc&file=Carousel.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-d3e7b7fc&file=Carousel.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(115);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-d3e7b7fc&file=Carousel.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-d3e7b7fc&file=Carousel.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".carousel-control[_v-d3e7b7fc] {\r\n  cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	// <div class="carousel slide" data-ride="carousel">
	
	//   <!-- Indicators -->
	
	//   <ol class="carousel-indicators" v-show="indicators">
	
	//     <li v-for="i in indicator" @click="indicatorClick($index)" v-bind:class="{active:$index === index}"><span></span></li>
	
	//   </ol>
	
	//   <!-- Wrapper for slides -->
	
	//   <div class="carousel-inner" role="listbox">
	
	//     <slot></slot>
	
	//   </div>
	
	//   <!-- Controls -->
	
	//   <div v-show="controls" class="carousel-controls hidden-xs">
	
	//     <a class="left carousel-control" role="button" @click="prev">
	
	//       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
	
	//     </a>
	
	//     <a class="right carousel-control" role="button" @click="next">
	
	//       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
	
	//     </a>
	
	//   </div>
	
	// </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    indicators: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    controls: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    interval: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 5000
	    }
	  },
	  data: function data() {
	    return {
	      indicator: [],
	      index: 0,
	      isAnimating: false
	    };
	  },
	
	  watch: {
	    index: function index(newVal, oldVal) {
	      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
	    }
	  },
	  methods: {
	    indicatorClick: function indicatorClick(index) {
	      if (this.isAnimating || this.index === index) return false;
	      this.isAnimating = true;
	      this.index = index;
	    },
	    slide: function slide(direction, next, prev) {
	      var _this = this;
	
	      if (!this.$el) {
	        return;
	      }
	      var $slider = (0, _NodeList2.default)('.item', this.$el);
	      if (!$slider.length) {
	        return;
	      }
	      var selected = $slider[next] || $slider[0];
	      (0, _NodeList2.default)(selected).addClass(direction === 'left' ? 'next' : 'prev');
	      // request property that requires layout to force a layout
	      var x = selected.clientHeight;
	      (0, _NodeList2.default)([$slider[prev], selected]).addClass(direction).on('transitionend', function () {
	        $slider.off('transitionend').className = 'item';
	        (0, _NodeList2.default)(selected).addClass('active');
	        _this.isAnimating = false;
	      });
	    },
	    next: function next() {
	      if (!this.$el || this.isAnimating) {
	        return false;
	      }
	      this.isAnimating = true;
	      this.index + 1 < (0, _NodeList2.default)('.item', this.$el).length ? this.index += 1 : this.index = 0;
	    },
	    prev: function prev() {
	      if (!this.$el || this.isAnimating) {
	        return false;
	      }
	      this.isAnimating = true;
	      this.index === 0 ? this.index = (0, _NodeList2.default)('.item', this.$el).length - 1 : this.index -= 1;
	    },
	    toggleInterval: function toggleInterval(val) {
	      if (val === undefined) {
	        val = this._intervalID;
	      }
	      if (this._intervalID) {
	        clearInterval(this._intervalID);
	        delete this._intervalID;
	      }
	      if (val && this.interval > 0) {
	        this._intervalID = setInterval(this.next, this.interval);
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    this.toggleInterval(true);
	    (0, _NodeList2.default)(this.$el).on('mouseenter', function () {
	      return _this2.toggleInterval(false);
	    }).on('mouseleave', function () {
	      return _this2.toggleInterval(true);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.toggleInterval(false);
	    (0, _NodeList2.default)(this.$el).off('mouseenter mouseleave');
	  }
	};
	// </script>
	
	
	// <style scoped>
	
	// .carousel-control {
	
	//   cursor: pointer;
	
	// }
	
	// </style>

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-d3e7b7fc=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-d3e7b7fc=\"\">\n    <li v-for=\"i in indicator\" @click=\"indicatorClick($index)\" v-bind:class=\"{active:$index === index}\" _v-d3e7b7fc=\"\"><span _v-d3e7b7fc=\"\"></span></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-d3e7b7fc=\"\">\n    <slot _v-d3e7b7fc=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\" _v-d3e7b7fc=\"\">\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\" _v-d3e7b7fc=\"\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-d3e7b7fc=\"\"></span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\" _v-d3e7b7fc=\"\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-d3e7b7fc=\"\"></span>\n    </a>\n  </div>\n</div>";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(119)
	module.exports = __webpack_require__(121)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(122)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-65fe1636&file=Checkbox.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-65fe1636&file=Checkbox.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-65fe1636&file=Checkbox.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-65fe1636&file=Checkbox.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, "label.checkbox[_v-65fe1636] {\r\n  position: relative;\r\n  padding-left: 18px;\r\n}\r\nlabel.checkbox > input[_v-65fe1636] {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\nlabel.checkbox > .icon[_v-65fe1636] {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\nlabel.checkbox:not(.active) > .icon[_v-65fe1636] {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\nlabel.checkbox > input:focus ~ .icon[_v-65fe1636] {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\nlabel.checkbox.active > .icon[_v-65fe1636] {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\r\n}\r\nlabel.checkbox.active .btn-default[_v-65fe1636] { filter: brightness(75%); }\r\n\r\nlabel.checkbox.disabled[_v-65fe1636],\r\nlabel.checkbox.readonly[_v-65fe1636],\r\n.btn.readonly[_v-65fe1636] {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=checkbox][_v-65fe1636] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}", ""]);
	
	// exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    value: {
	      default: true
	    },
	    checked: {
	      twoWay: true
	    },
	    button: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    active: function active() {
	      return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value;
	    },
	    isButton: function isButton() {
	      return this.button || this.group && this.$parent.buttons;
	    },
	    group: function group() {
	      return this.$parent && this.$parent._checkboxGroup;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    checked: function checked(val) {
	      if (typeof this.value !== 'boolean' && this.group) {
	        if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value);
	        if (!this.checked && ~this.$parent.value.indexOf(this.value)) this.$parent.value.$remove(this.value);
	      }
	    }
	  },
	  created: function created() {
	    if (typeof this.value === 'boolean') {
	      return;
	    }
	    var parent = this.$parent;
	    if (parent && parent._btnGroup && !parent._radioGroup) {
	      parent._checkboxGroup = true;
	      if (!(parent.value instanceof Array)) {
	        parent.value = [];
	      }
	    }
	  },
	  ready: function ready() {
	    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
	      return;
	    }
	    if (this.$parent.value.length) {
	      this.checked = ~this.$parent.value.indexOf(this.value);
	    } else if (this.checked) {
	      this.$parent.value.push(this.value);
	    }
	  },
	
	  methods: {
	    eval: function _eval() {
	      if (typeof this.value !== 'boolean' && this.group) {
	        this.checked = ~this.$parent.value.indexOf(this.value);
	      }
	    },
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    toggle: function toggle() {
	      if (!this.disabled) {
	        this.focus();
	        if (!this.readonly) {
	          this.checked = this.checked ? null : this.value;
	          if (this.group && typeof this.value !== 'boolean') {
	            var index = this.$parent.value.indexOf(this.value);
	            this.$parent.value[~index ? '$remove' : 'push'](this.value);
	          }
	        }
	      }
	      return false;
	    }
	  }
	  // </script>
	
	
	  // <style scoped>
	
	  // label.checkbox {
	
	  //   position: relative;
	
	  //   padding-left: 18px;
	
	  // }
	
	  // label.checkbox > input {
	
	  //   box-sizing: border-box;
	
	  //   position: absolute;
	
	  //   z-index: -1;
	
	  //   padding: 0;
	
	  //   opacity: 0;
	
	  //   margin: 0;
	
	  // }
	
	  // label.checkbox > .icon {
	
	  //   position: absolute;
	
	  //   top: .2rem;
	
	  //   left: 0;
	
	  //   display: block;
	
	  //   width: 1.4rem;
	
	  //   height: 1.4rem;
	
	  //   line-height:1rem;
	
	  //   text-align: center;
	
	  //   user-select: none;
	
	  //   border-radius: .35rem;
	
	  //   background-repeat: no-repeat;
	
	  //   background-position: center center;
	
	  //   background-size: 50% 50%;
	
	  // }
	
	  // label.checkbox:not(.active) > .icon {
	
	  //   background-color: #ddd;
	
	  //   border: 1px solid #bbb;
	
	  // }
	
	  // label.checkbox > input:focus ~ .icon {
	
	  //   outline: 0;
	
	  //   border: 1px solid #66afe9;
	
	  //   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	
	  // }
	
	  // label.checkbox.active > .icon {
	
	  //   background-size: 1rem 1rem;
	
	  //   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);
	
	  // }
	
	  // label.checkbox.active .btn-default { filter: brightness(75%); }
	
	
	  // label.checkbox.disabled,
	
	  // label.checkbox.readonly,
	
	  // .btn.readonly {
	
	  //   filter: alpha(opacity=65);
	
	  //   box-shadow: none;
	
	  //   opacity: .65;
	
	  // }
	
	  // label.btn > input[type=checkbox] {
	
	  //   position: absolute;
	
	  //   clip: rect(0,0,0,0);
	
	  //   pointer-events: none;
	
	  // }
	
	  // </style>
	
	}; // <template>
	
	//   <label :class="[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	
	//     <input type="checkbox" autocomplete="off"
	
	//       v-el:input
	
	//       :checked="active"
	
	//       :value="value"
	
	//       :name="name"
	
	//       :readonly="readonly"
	
	//       :disabled="disabled"
	
	//     />
	
	//     <span v-if="!isButton" class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
	
	//     <span v-if="!isButton&active&&typeColor==='default'" class="icon"></span>
	
	//     <slot></slot>
	
	//   </label>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = "<label :class=\"[isButton?'btn btn-'+typeColor:'open checkbox '+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\" _v-65fe1636=\"\">\n    <input type=\"checkbox\" autocomplete=\"off\" v-el:input=\"\" :checked=\"active\" :value=\"value\" :name=\"name\" :readonly=\"readonly\" :disabled=\"disabled\" _v-65fe1636=\"\">\n    <span v-if=\"!isButton\" class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\" _v-65fe1636=\"\"></span>\n    <span v-if=\"!isButton&amp;active&amp;&amp;typeColor==='default'\" class=\"icon\" _v-65fe1636=\"\"></span>\n    <slot _v-65fe1636=\"\"></slot>\n  </label>";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(124)
	module.exports = __webpack_require__(126)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(127)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-2ca357de&file=Datepicker.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-2ca357de&file=Datepicker.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".datepicker{\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner{\r\n  width: 218px;\r\n}\r\n.datepicker-body{\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span{\r\n  font-weight: bold;\r\n}\r\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn{\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn{\r\n  right: 2px;\r\n}", ""]);
	
	// exports


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="datepicker">
	
	//     <input class="form-control datepicker-input" :class="{'with-reset-button': clearButton}" type="text" :placeholder="placeholder"
	
	//         :style="{width:width}"
	
	//         @click="inputClick"
	
	//         v-model="value"/>
	
	//     <button v-if="clearButton && value" type="button" class="close" @click="value = ''">
	
	//       <span>&times;</span>
	
	//     </button>
	
	//     <div class="datepicker-popup" v-show="displayDayView">
	
	//       <div class="datepicker-inner">
	
	//         <div class="datepicker-body">
	
	//           <div class="datepicker-ctrl">
	
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>
	
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></span>
	
	//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
	
	//           </div>
	
	//           <div class="datepicker-weekRange">
	
	//             <span v-for="w in text.daysOfWeek">{{w}}</span>
	
	//           </div>
	
	//           <div class="datepicker-dateRange">
	
	//             <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date,$event)">{{d.text}}</span>
	
	//           </div>
	
	//         </div>
	
	//       </div>
	
	//     </div>
	
	//     <div class="datepicker-popup" v-show="displayMonthView">
	
	//       <div class="datepicker-inner">
	
	//         <div class="datepicker-body">
	
	//           <div class="datepicker-ctrl">
	
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextYearClick(0)"></span>
	
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextYearClick(1)"></span>
	
	//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
	
	//           </div>
	
	//           <div class="datepicker-monthRange">
	
	//             <template v-for="m in text.months">
	
	//               <span   :class="{'datepicker-dateRange-item-active':
	
	//                   (text.months[parse(value).getMonth()]  === m) &&
	
	//                   currDate.getFullYear() === parse(value).getFullYear()}"
	
	//                   @click="monthSelect($index)"
	
	//                 >{{m.substr(0,3)}}</span>
	
	//             </template>
	
	//           </div>
	
	//         </div>
	
	//       </div>
	
	//     </div>
	
	//     <div class="datepicker-popup" v-show="displayYearView">
	
	//       <div class="datepicker-inner">
	
	//         <div class="datepicker-body">
	
	//           <div class="datepicker-ctrl">
	
	//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextDecadeClick(0)"></span>
	
	//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextDecadeClick(1)"></span>
	
	//             <p>{{stringifyDecadeHeader(currDate)}}</p>
	
	//           </div>
	
	//           <div class="datepicker-monthRange decadeRange">
	
	//             <template v-for="decade in decadeRange">
	
	//               <span :class="{'datepicker-dateRange-item-active':
	
	//                   parse(this.value).getFullYear() === decade.text}"
	
	//                   @click.stop="yearSelect(decade.text)"
	
	//                 >{{decade.text}}</span>
	
	//             </template>
	
	//           </div>
	
	//         </div>
	
	//       </div>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: String,
	      twoWay: true
	    },
	    format: {
	      default: 'MM/dd/yyyy'
	    },
	    disabledDaysOfWeek: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    width: {
	      type: String,
	      default: '200px'
	    },
	    clearButton: {
	      type: Boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    placeholder: {
	      type: String
	    }
	  },
	  ready: function ready() {
	    var _this = this;
	
	    this._blur = function (e) {
	      if (_this.$el !== null && !_this.$el.contains(e.target)) _this.close();
	    };
	    this.$dispatch('child-created', this);
	    this.currDate = this.parse(this.value) || this.parse(new Date());
	    (0, _NodeList2.default)(window).on('click', this._blur);
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(window).off('click', this._blur);
	  },
	  data: function data() {
	    return {
	      currDate: new Date(),
	      dateRange: [],
	      decadeRange: [],
	      displayDayView: false,
	      displayMonthView: false,
	      displayYearView: false
	    };
	  },
	
	  watch: {
	    currDate: function currDate() {
	      this.getDateRange();
	    }
	  },
	  computed: {
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayYearView = false;
	    },
	    inputClick: function inputClick() {
	      this.currDate = this.parse(this.value) || this.parse(new Date());
	      if (this.displayMonthView || this.displayYearView) {
	        this.displayDayView = false;
	      } else {
	        this.displayDayView = !this.displayDayView;
	      }
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	
	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, event) {
	      if (event.target.classList[0] === 'datepicker-item-disable') {
	        return false;
	      } else {
	        this.currDate = date;
	        this.value = this.stringify(this.currDate);
	        this.displayDayView = false;
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
	    },
	    parseMonth: function parseMonth(date) {
	      return this.text.months[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;
	
	      if (!date) date = this.parse();
	      if (!date) return '';
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);
	
	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse() {
	      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
	
	      var date = void 0;
	      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
	        date = new Date(str.substring(6, 10), str.substring(3, 5) - 1, str.substring(0, 2));
	      } else {
	        date = new Date(str);
	      }
	      return isNaN(date.getFullYear()) ? new Date() : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	      }
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var _this2 = this;
	
	      this.dateRange = [];
	      this.decadeRange = [];
	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          this.dateRange.push({
	            text: dayText,
	            date: new Date(preMonth.year, preMonth.month, dayText),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	
	      var _loop = function _loop(_i2) {
	        var date = new Date(time.year, time.month, _i2);
	        var week = date.getDay();
	        var sclass = '';
	        _this2.disabledDaysOfWeek.forEach(function (el) {
	          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
	        });
	        if (_i2 === time.day) {
	          if (_this2.value) {
	            var valueDate = _this2.parse(_this2.value);
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                sclass = 'datepicker-dateRange-item-active';
	              }
	            }
	          }
	        }
	        _this2.dateRange.push({
	          text: _i2,
	          date: date,
	          sclass: sclass
	        });
	      };
	
	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        _loop(_i2);
	      }
	
	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          this.dateRange.push({
	            text: _i3,
	            date: new Date(nextMonth.year, nextMonth.month, _i3),
	            sclass: 'datepicker-item-gray'
	          });
	        }
	      }
	    }
	  }
	  // </script>
	
	
	  // <style>
	
	  // .datepicker{
	
	  //   position: relative;
	
	  //   display: inline-block;
	
	  // }
	
	  // input.datepicker-input.with-reset-button {
	
	  //   padding-right: 25px;
	
	  // }
	
	  // .datepicker > button.close {
	
	  //   position: absolute;
	
	  //   top: 0;
	
	  //   right: 0;
	
	  //   outline: none;
	
	  //   z-index: 2;
	
	  //   display: block;
	
	  //   width: 34px;
	
	  //   height: 34px;
	
	  //   line-height: 34px;
	
	  //   text-align: center;
	
	  // }
	
	  // .datepicker > button.close:focus {
	
	  //   opacity: .2;
	
	  // }
	
	  // .datepicker-popup{
	
	  //   position: absolute;
	
	  //   border: 1px solid #ccc;
	
	  //   border-radius: 5px;
	
	  //   background: #fff;
	
	  //   margin-top: 2px;
	
	  //   z-index: 1000;
	
	  //   box-shadow: 0 6px 12px rgba(0,0,0,0.175);
	
	  // }
	
	  // .datepicker-inner{
	
	  //   width: 218px;
	
	  // }
	
	  // .datepicker-body{
	
	  //   padding: 10px 10px;
	
	  // }
	
	  // .datepicker-ctrl p,
	
	  // .datepicker-ctrl span,
	
	  // .datepicker-body span{
	
	  //   display: inline-block;
	
	  //   width: 28px;
	
	  //   line-height: 28px;
	
	  //   height: 28px;
	
	  //   border-radius: 4px;
	
	  // }
	
	  // .datepicker-ctrl p {
	
	  //   width: 65%;
	
	  // }
	
	  // .datepicker-ctrl span {
	
	  //   position: absolute;
	
	  // }
	
	  // .datepicker-body span {
	
	  //   text-align: center;
	
	  // }
	
	  // .datepicker-monthRange span{
	
	  //   width: 48px;
	
	  //   height: 50px;
	
	  //   line-height: 45px;
	
	  // }
	
	  // .datepicker-item-disable {
	
	  //   background-color: white!important;
	
	  //   cursor: not-allowed!important;
	
	  // }
	
	  // .decadeRange span:first-child,
	
	  // .decadeRange span:last-child,
	
	  // .datepicker-item-disable,
	
	  // .datepicker-item-gray{
	
	  //   color: #999;
	
	  // }
	
	
	  // .datepicker-dateRange-item-active:hover,
	
	  // .datepicker-dateRange-item-active {
	
	  //   background: rgb(50, 118, 177)!important;
	
	  //   color: white!important;
	
	  // }
	
	  // .datepicker-monthRange {
	
	  //   margin-top: 10px
	
	  // }
	
	  // .datepicker-monthRange span,
	
	  // .datepicker-ctrl span,
	
	  // .datepicker-ctrl p,
	
	  // .datepicker-dateRange span {
	
	  //   cursor: pointer;
	
	  // }
	
	  // .datepicker-monthRange span:hover,
	
	  // .datepicker-ctrl p:hover,
	
	  // .datepicker-ctrl i:hover,
	
	  // .datepicker-dateRange span:hover,
	
	  // .datepicker-dateRange-item-hover {
	
	  //   background-color : #eeeeee;
	
	  // }
	
	  // .datepicker-weekRange span{
	
	  //   font-weight: bold;
	
	  // }
	
	  // .datepicker-label{
	
	  //   background-color: #f8f8f8;
	
	  //   font-weight: 700;
	
	  //   padding: 7px 0;
	
	  //   text-align: center;
	
	  // }
	
	  // .datepicker-ctrl{
	
	  //   position: relative;
	
	  //   height: 30px;
	
	  //   line-height: 30px;
	
	  //   font-weight: bold;
	
	  //   text-align: center;
	
	  // }
	
	  // .month-btn{
	
	  //   font-weight: bold;
	
	  //   -webkit-user-select:none;
	
	  //   -moz-user-select:none;
	
	  //   -ms-user-select:none;
	
	  //   user-select:none;
	
	  // }
	
	  // .datepicker-preBtn{
	
	  //   left: 2px;
	
	  // }
	
	  // .datepicker-nextBtn{
	
	  //   right: 2px;
	
	  // }
	
	  // </style>
	
	};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"datepicker\">\r\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\r\n        :style=\"{width:width}\"\r\n        @click=\"inputClick\"\r\n        v-model=\"value\"/>\r\n    <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"value = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,$event)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"m in text.months\">\r\n              <span   :class=\"{'datepicker-dateRange-item-active':\r\n                  (text.months[parse(value).getMonth()]  === m) &&\r\n                  currDate.getFullYear() === parse(value).getFullYear()}\"\r\n                  @click=\"monthSelect($index)\"\r\n                >{{m.substr(0,3)}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span :class=\"{'datepicker-dateRange-item-active':\r\n                  parse(this.value).getFullYear() === decade.text}\"\r\n                  @click.stop=\"yearSelect(decade.text)\"\r\n                >{{decade.text}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(129)
	module.exports = __webpack_require__(131)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(132)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-c4c7739a&file=Dropdown.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-c4c7739a&file=Dropdown.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-c4c7739a&file=Dropdown.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-c4c7739a&file=Dropdown.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".secret[_v-c4c7739a] {\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n  margin: -1px;\r\n  height: 1px;\r\n  width: 1px;\r\n  padding: 0;\r\n  border: 0;\r\n}", ""]);
	
	// exports


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <li v-if="isLi" v-el:dropdown :class="classes">
	
	//     <slot name="button">
	
	//       <a class="dropdown-toggle" role="button" :class="{disabled: disabled}" @keyup.esc="show = false">
	
	//         {{ text }}
	
	//         <span class="caret"></span>
	
	//       </a>
	
	//     </slot>
	
	//     <slot name="dropdown-menu">
	
	//       <ul v-else class="dropdown-menu">
	
	//         <slot></slot>
	
	//       </ul>
	
	//     </slot>
	
	//   </li>
	
	//   <div v-else v-el:dropdown :class="classes">
	
	//     <slot name="before"></slot>
	
	//     <slot name="button">
	
	//       <button type="button" class="btn btn-{{type}} dropdown-toggle" @keyup.esc="show = false" :disabled="disabled">
	
	//         {{ text }}
	
	//         <span class="caret"></span>
	
	//       </button>
	
	//     </slot>
	
	//     <slot name="dropdown-menu">
	
	//       <ul class="dropdown-menu">
	
	//         <slot></slot>
	
	//       </ul>
	
	//     </slot>
	
	//   </div>
	
	// </template>
	
	// <script>
	exports.default = {
	  props: {
	    show: {
	      twoWay: true,
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    'class': null,
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    text: {
	      type: String,
	      default: null
	    },
	    type: {
	      type: String,
	      default: 'default'
	    }
	  },
	  computed: {
	    classes: function classes() {
	      return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
	    },
	    menu: function menu() {
	      return !this.$parent || this.$parent.navbar;
	    },
	    submenu: function submenu() {
	      return this.$parent && (this.$parent.menu || this.$parent.submenu);
	    },
	    slots: function slots() {
	      return this._slotContents;
	    }
	  },
	  methods: {
	    blur: function blur() {
	      var _this = this;
	
	      this.unblur();
	      this._hide = setTimeout(function () {
	        _this._hide = null;
	        _this.show = false;
	      }, 100);
	    },
	    unblur: function unblur() {
	      if (this._hide) {
	        clearTimeout(this._hide);
	        this._hide = null;
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    var $el = (0, _NodeList2.default)(this.$els.dropdown);
	    $el.onBlur(function (e) {
	      _this2.show = false;
	    });
	    $el.findChildren('a,button.dropdown-toggle').on('click', function (e) {
	      e.preventDefault();
	      if (_this2.disabled) {
	        return false;
	      }
	      _this2.show = !_this2.show;
	      return false;
	    });
	    $el.findChildren('ul').on('click', 'li>a', function (e) {
	      _this2.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var $el = (0, _NodeList2.default)(this.$els.dropdown);
	    $el.offBlur();
	    $el.findChildren('a,button').off();
	    $el.findChildren('ul').off();
	  }
	};
	// </script>
	
	
	// <style scoped>
	
	// .secret {
	
	//   position: absolute;
	
	//   clip: rect(0 0 0 0);
	
	//   overflow: hidden;
	
	//   margin: -1px;
	
	//   height: 1px;
	
	//   width: 1px;
	
	//   padding: 0;
	
	//   border: 0;
	
	// }
	
	// </style>

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = "<li v-if=\"isLi\" v-el:dropdown=\"\" :class=\"classes\" _v-c4c7739a=\"\">\n    <slot name=\"button\" _v-c4c7739a=\"\">\n      <a class=\"dropdown-toggle\" role=\"button\" :class=\"{disabled: disabled}\" @keyup.esc=\"show = false\" _v-c4c7739a=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-c4c7739a=\"\"></span>\n      </a>\n    </slot>\n    <slot name=\"dropdown-menu\" _v-c4c7739a=\"\">\n      <ul v-else=\"\" class=\"dropdown-menu\" _v-c4c7739a=\"\">\n        <slot _v-c4c7739a=\"\"></slot>\n      </ul>\n    </slot>\n  </li>\n  <div v-else=\"\" v-el:dropdown=\"\" :class=\"classes\" _v-c4c7739a=\"\">\n    <slot name=\"before\" _v-c4c7739a=\"\"></slot>\n    <slot name=\"button\" _v-c4c7739a=\"\">\n      <button type=\"button\" class=\"btn btn-{{type}} dropdown-toggle\" @keyup.esc=\"show = false\" :disabled=\"disabled\" _v-c4c7739a=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-c4c7739a=\"\"></span>\n      </button>\n    </slot>\n    <slot name=\"dropdown-menu\" _v-c4c7739a=\"\">\n      <ul class=\"dropdown-menu\" _v-c4c7739a=\"\">\n        <slot _v-c4c7739a=\"\"></slot>\n      </ul>\n    </slot>\n  </div>";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(134)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(135)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./FormGroup.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./FormGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./FormGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <slot></slot>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    valid: {
	      twoWay: true,
	      default: null
	    },
	    enterSubmit: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    icon: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    }
	    // readonly: {
	    //   type: Boolean,
	    //   coerce: coerce.boolean,
	    //   default: false
	    // },
	    // required: {
	    //   type: Boolean,
	    //   coerce: coerce.boolean,
	    //   default: false
	    // },
	    // validationDelay: {
	    //   type: Number,
	    //   coerce: coerce.number,
	    //   default: 250
	    // }
	  },
	  data: function data() {
	    return {
	      children: [],
	      timeout: null
	    };
	  },
	
	  watch: {
	    valid: function valid(val, old) {
	      if (val === old) {
	        return;
	      }
	      this._parent && this._parent.validate();
	    }
	  },
	  methods: {
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    validate: function validate() {
	      var valid = true;
	      this.children.some(function (el) {
	        var v = el.validate ? el.validate() : el.valid !== undefined ? el.valid : el.required && !~['', null, undefined].indexOf(el.value);
	        if (!v) valid = false;
	        return !valid;
	      });
	      this.valid = valid;
	      return valid === true;
	    }
	  },
	  created: function created() {
	    this._formGroup = true;
	    var parent = this.$parent;
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  ready: function ready() {
	    this.validate();
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) this._parent.children.$remove(this);
	  }
	};
	// </script>

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	module.exports = "<slot></slot>";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(137)
	module.exports = __webpack_require__(139)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(140)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Input.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Input.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-c58d3cd0&file=Input.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Input.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Input.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-c58d3cd0&file=Input.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Input.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-c58d3cd0&file=Input.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Input.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-c58d3cd0&file=Input.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".form-group[_v-c58d3cd0] {\r\n  position: relative;\r\n}\r\nlabel~.close[_v-c58d3cd0] {\r\n  top: 25px;\r\n}\r\n.input-group>.icon[_v-c58d3cd0] {\r\n  position: relative;\r\n  display: table-cell;\r\n  width:0;\r\n  z-index: 3;\r\n}\r\n.close[_v-c58d3cd0] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback .close[_v-c58d3cd0] {\r\n  right: 20px;\r\n}", ""]);
	
	// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div class="form-group" :class="{validate:canValidate,'has-feedback':icon,'has-error':canValidate&&valid===false,'has-success':canValidate&&valid}">
	
	//     <slot name="label"><label v-if="labl" class="control-label" @click="focus">{{labl}}</label></slot>
	
	//     <div v-if="slots.before||slots.after" class="input-group">
	
	//       <slot name="before"></slot>
	
	//       <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
	
	//         :cols="cols"
	
	//         :rows="rows"
	
	//         :name="name"
	
	//         :title="attr(title)"
	
	//         :readonly="readonly"
	
	//         :required="required"
	
	//         :disabled="disabled"
	
	//         :maxlength="maxlength"
	
	//         :placeholder="placeholder"
	
	//         @blur="onblur" @focus="onfocus"
	
	//       ></textarea>
	
	//       <input v-else class="form-control" v-el:input v-model="value"
	
	//         :name="name"
	
	//         :max="attr(max)"
	
	//         :min="attr(min)"
	
	//         :step="step"
	
	//         :type="type"
	
	//         :title="attr(title)"
	
	//         :readonly="readonly"
	
	//         :required="required"
	
	//         :disabled="disabled"
	
	//         :maxlength="maxlength"
	
	//         :placeholder="placeholder"
	
	//         @keyup.enter="enterSubmit&&submit()"
	
	//         @blur="onblur" @focus="onfocus"
	
	//       />
	
	//       <div v-if="showClear && value" :class="{icon:icon}">
	
	//         <span class="close" @click="value = ''">&times;</span>
	
	//       </div>
	
	//       <div v-if="icon" class="icon">
	
	//         <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
	
	//       </div>
	
	//       <slot name="after"></slot>
	
	//     </div>
	
	//     <template v-else>
	
	//       <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
	
	//         :cols="cols"
	
	//         :rows="rows"
	
	//         :name="name"
	
	//         :title="attr(title)"
	
	//         :readonly="readonly"
	
	//         :required="required"
	
	//         :disabled="disabled"
	
	//         :maxlength="maxlength"
	
	//         :placeholder="placeholder"
	
	//         @blur="onblur" @focus="onfocus"
	
	//       ></textarea>
	
	//       <input v-else class="form-control" v-el:input v-model="value"
	
	//         :name="name"
	
	//         :max="attr(max)"
	
	//         :min="attr(min)"
	
	//         :step="step"
	
	//         :type="type"
	
	//         :title="attr(title)"
	
	//         :readonly="readonly"
	
	//         :required="required"
	
	//         :disabled="disabled"
	
	//         :maxlength="maxlength"
	
	//         :placeholder="placeholder"
	
	//         @keyup.enter="enterSubmit&&submit()"
	
	//         @blur="onblur" @focus="onfocus"
	
	//       />
	
	//       <span v-if="showClear && value" class="close" @click="value = ''">&times;</span>
	
	//       <span v-if="icon&&valid!==null" :class="['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]" aria-hidden="true"></span>
	
	//     </template>
	
	//     <div v-if="showHelp" class="help-block" @click="focus">{{help}}</div>
	
	//     <div v-if="showError" class="help-block with-errors" @click="focus">{{errorText}}</div>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    value: {
	      default: null
	    },
	    match: {
	      type: String,
	      default: null
	    },
	    clearButton: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    enterSubmit: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    error: {
	      type: String,
	      default: null
	    },
	    help: {
	      type: String,
	      default: null
	    },
	    hideHelp: { // hide when have error
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    icon: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    labl: {
	      type: String,
	      default: null
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    mask: null,
	    maskDelay: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 100
	    },
	    max: {
	      type: String,
	      coerce: _utils.coerce.string,
	      default: null
	    },
	    maxlength: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: null
	    },
	    min: {
	      type: String,
	      coerce: _utils.coerce.string,
	      default: null
	    },
	    minlength: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    pattern: {
	      coerce: _utils.coerce.pattern,
	      default: null
	    },
	    placeholder: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    required: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    rows: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 3
	    },
	    step: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: null
	    },
	    type: {
	      type: String,
	      default: 'text'
	    },
	    validationDelay: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 250
	    }
	  },
	  data: function data() {
	    return {
	      valid: null,
	      timeout: null
	    };
	  },
	
	  computed: {
	    canValidate: function canValidate() {
	      return !this.disabled && !this.readonly && (this.required || this.pattern || this.nativeValidate || this.match !== null);
	    },
	    errorText: function errorText() {
	      var value = this.value;
	      var error = [this.error];
	      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
	      if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
	      return error.join(' ');
	    },
	    input: function input() {
	      return this.$els.input;
	    },
	    nativeValidate: function nativeValidate() {
	      return (this.input || {}).checkValidity && (~['url', 'email'].indexOf(this.type.toLowerCase()) || this.min || this.max);
	    },
	    showClear: function showClear() {
	      // Disable the clear-button on Edge if is enabled. Edge has a native clear button.
	      return (/\bEdge\//.test(window.navigator.userAgent) ? false : this.clearButton
	      );
	    },
	    showError: function showError() {
	      return this.error && this.valid === false;
	    },
	    showHelp: function showHelp() {
	      return this.help && (!this.showError || !this.hideHelp);
	    },
	    slots: function slots() {
	      return this._slotContents || {};
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    title: function title() {
	      return this.errorText || this.help || '';
	    }
	  },
	  watch: {
	    match: function match(val) {
	      this.eval();
	    },
	    valid: function valid(val, old) {
	      if (val !== old) {
	        this._parent && this._parent.validate();
	      }
	    },
	    value: function value(val, old) {
	      var _this = this;
	
	      if (val !== old) {
	        if (this.mask instanceof Function) {
	          val = this.mask(val || '');
	          if (this.value !== val) {
	            if (this._timeout.mask) clearTimeout(this._timeout.mask);
	            this._timeout.mask = setTimeout(function () {
	              _this.value = val;
	              _this.$els.input.value = val;
	            }, this.maskDelay);
	          }
	        }
	        this.eval();
	      }
	    }
	  },
	  methods: {
	    attr: function attr(value) {
	      return ~['', null, undefined].indexOf(value) || value instanceof Function ? undefined : value;
	    },
	    focus: function focus() {
	      this.input.focus();
	    },
	    eval: function _eval() {
	      var _this2 = this;
	
	      if (this._timeout.eval) clearTimeout(this._timeout.eval);
	      if (!this.canValidate) {
	        this.valid = true;
	      } else {
	        this._timeout.eval = setTimeout(function () {
	          _this2.valid = _this2.validate();
	          _this2._timeout.eval = null;
	        }, this.validationDelay);
	      }
	    },
	    onblur: function onblur(e) {
	      if (this.canValidate) {
	        this.valid = this.validate();
	      }
	      this.$emit('blur', e);
	    },
	    onfocus: function onfocus(e) {
	      this.$emit('focus', e);
	    },
	    submit: function submit() {
	      if (this.$parent._formGroup) {
	        return this.$parent.validate();
	      }
	      if (this.input.form) {
	        var invalids = (0, _NodeList2.default)('.form-group.validate:not(.has-success)', this.input.form);
	        if (invalids.length) {
	          invalids.find('input,textarea,select')[0].focus();
	        } else {
	          this.input.form.submit();
	        }
	      }
	    },
	    validate: function validate() {
	      if (!this.canValidate) {
	        return true;
	      }
	      var value = (this.value || '').trim();
	      if (!value) {
	        return !this.required;
	      }
	      if (this.match !== null) {
	        return this.match === value;
	      }
	      if (value.length < this.minlength) {
	        return false;
	      }
	      if (this.nativeValidate && !this.input.checkValidity()) {
	        return false;
	      }
	      if (this.pattern) {
	        return this.pattern instanceof Function ? this.pattern(this.value) : this.pattern.test(this.value);
	      }
	      return true;
	    }
	  },
	  created: function created() {
	    this._input = true;
	    this._timeout = {};
	    var parent = this.$parent;
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      this._parent = parent;
	    }
	  },
	  ready: function ready() {
	    var _this3 = this;
	
	    this._parent && this._parent.children.push(this);
	    (0, _NodeList2.default)(this.input).on('focus', function (e) {
	      return _this3.$emit('focus', e);
	    }).on('blur', function (e) {
	      if (_this3.canValidate) {
	        _this3.valid = _this3.validate();
	      }
	      _this3.$emit('blur', e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this._parent && this._parent.children.$remove(this);
	    (0, _NodeList2.default)(this.input).off();
	  }
	};
	// </script>
	
	
	// <style scoped>
	
	// .form-group {
	
	//   position: relative;
	
	// }
	
	// label~.close {
	
	//   top: 25px;
	
	// }
	
	// .input-group>.icon {
	
	//   position: relative;
	
	//   display: table-cell;
	
	//   width:0;
	
	//   z-index: 3;
	
	// }
	
	// .close {
	
	//   position: absolute;
	
	//   top: 0;
	
	//   right: 0;
	
	//   z-index: 2;
	
	//   display: block;
	
	//   width: 34px;
	
	//   height: 34px;
	
	//   line-height: 34px;
	
	//   text-align: center;
	
	// }
	
	// .has-feedback .close {
	
	//   right: 20px;
	
	// }
	
	// </style>

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"form-group\" :class=\"{validate:canValidate,'has-feedback':icon,'has-error':canValidate&amp;&amp;valid===false,'has-success':canValidate&amp;&amp;valid}\" _v-c58d3cd0=\"\">\n    <slot name=\"label\" _v-c58d3cd0=\"\"><label v-if=\"labl\" class=\"control-label\" @click=\"focus\" _v-c58d3cd0=\"\">{{labl}}</label></slot>\n    <div v-if=\"slots.before||slots.after\" class=\"input-group\" _v-c58d3cd0=\"\">\n      <slot name=\"before\" _v-c58d3cd0=\"\"></slot>\n      <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @blur=\"onblur\" @focus=\"onfocus\" _v-c58d3cd0=\"\"></textarea>\n      <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :max=\"attr(max)\" :min=\"attr(min)\" :step=\"step\" :type=\"type\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" @blur=\"onblur\" @focus=\"onfocus\" _v-c58d3cd0=\"\">\n      <div v-if=\"showClear &amp;&amp; value\" :class=\"{icon:icon}\" _v-c58d3cd0=\"\">\n        <span class=\"close\" @click=\"value = ''\" _v-c58d3cd0=\"\">×</span>\n      </div>\n      <div v-if=\"icon\" class=\"icon\" _v-c58d3cd0=\"\">\n        <span v-if=\"icon&amp;&amp;valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\" _v-c58d3cd0=\"\"></span>\n      </div>\n      <slot name=\"after\" _v-c58d3cd0=\"\"></slot>\n    </div>\n    <template v-else=\"\" _v-c58d3cd0=\"\">\n      <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @blur=\"onblur\" @focus=\"onfocus\" _v-c58d3cd0=\"\"></textarea>\n      <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :max=\"attr(max)\" :min=\"attr(min)\" :step=\"step\" :type=\"type\" :title=\"attr(title)\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" @blur=\"onblur\" @focus=\"onfocus\" _v-c58d3cd0=\"\">\n      <span v-if=\"showClear &amp;&amp; value\" class=\"close\" @click=\"value = ''\" _v-c58d3cd0=\"\">×</span>\n      <span v-if=\"icon&amp;&amp;valid!==null\" :class=\"['form-control-feedback glyphicon','glyphicon-'+(valid?'ok':'remove')]\" aria-hidden=\"true\" _v-c58d3cd0=\"\"></span>\n    </template>\n    <div v-if=\"showHelp\" class=\"help-block\" @click=\"focus\" _v-c58d3cd0=\"\">{{help}}</div>\n    <div v-if=\"showError\" class=\"help-block with-errors\" @click=\"focus\" _v-c58d3cd0=\"\">{{errorText}}</div>\n  </div>";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(142)
	module.exports = __webpack_require__(144)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(149)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Modal.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Modal.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-8e604a0a&file=Modal.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-8e604a0a&file=Modal.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".modal {\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  transform: scale(1);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}", ""]);
	
	// exports


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInteger = __webpack_require__(145);
	
	var _isInteger2 = _interopRequireDefault(_isInteger);
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div role="dialog"
	
	//     v-bind:class="{
	
	//     'modal':true,
	
	//     'fade':effect === 'fade',
	
	//     'zoom':effect === 'zoom'
	
	//     }"
	
	//     >
	
	//     <div v-bind:class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
	
	//       v-bind:style="{width: optionalWidth}">
	
	//       <div class="modal-content">
	
	//         <slot name="modal-header">
	
	//           <div class="modal-header">
	
	//             <button type="button" class="close" @click="close"><span>&times;</span></button>
	
	//             <h4 class="modal-title">
	
	//               <slot name="title">
	
	//                 {{title}}
	
	//               </slot>
	
	//             </h4>
	
	//           </div>
	
	//         </slot>
	
	//         <slot name="modal-body">
	
	//           <div class="modal-body"></div>
	
	//         </slot>
	
	//         <slot name="modal-footer">
	
	//           <div class="modal-footer">
	
	//             <button type="button" class="btn btn-default" @click="close">{{ cancelText }}</button>
	
	//             <button type="button" class="btn btn-primary" @click="callback">{{ okText }}</button>
	
	//           </div>
	
	//         </slot>
	
	//       </div>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    okText: {
	      type: String,
	      default: 'Save changes'
	    },
	    cancelText: {
	      type: String,
	      default: 'Close'
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    show: {
	      required: true,
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      twoWay: true
	    },
	    width: {
	      default: null
	    },
	    callback: {
	      type: Function,
	      default: function _default() {}
	    },
	    effect: {
	      type: String,
	      default: null
	    },
	    isbackdrop: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    large: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    small: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  computed: {
	    optionalWidth: function optionalWidth() {
	      if (this.width === null) {
	        return null;
	      } else if ((0, _isInteger2.default)(this.width)) {
	        return this.width + 'px';
	      }
	      return this.width;
	    }
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;
	
	      var el = this.$el;
	      var body = document.body;
	      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
	      if (val) {
	        (0, _NodeList2.default)(el).find('.modal-content').focus();
	        el.style.display = 'block';
	        setTimeout(function () {
	          return (0, _NodeList2.default)(el).addClass('in');
	        }, 0);
	        (0, _NodeList2.default)(body).addClass('modal-open');
	        if (scrollBarWidth !== 0) {
	          body.style.paddingRight = scrollBarWidth + 'px';
	        }
	        if (this.isbackdrop) {
	          (0, _NodeList2.default)(el).on('click', function (e) {
	            if (e.target === el) _this.show = false;
	          });
	        }
	      } else {
	        body.style.paddingRight = null;
	        (0, _NodeList2.default)(body).removeClass('modal-open');
	        (0, _NodeList2.default)(el).removeClass('in').on('transitionend', function () {
	          (0, _NodeList2.default)(el).off('click transitionend');
	          el.style.display = 'none';
	        });
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	    }
	  }
	  // </script>
	
	  // <style>
	
	  // .modal {
	
	  //   transition: all 0.3s ease;
	
	  // }
	
	  // .modal.in {
	
	  //   background-color: rgba(0,0,0,0.5);
	
	  // }
	
	  // .modal.zoom .modal-dialog {
	
	  //   -webkit-transform: scale(0.1);
	
	  //   -moz-transform: scale(0.1);
	
	  //   -ms-transform: scale(0.1);
	
	  //   transform: scale(0.1);
	
	  //   top: 300px;
	
	  //   opacity: 0;
	
	  //   -webkit-transition: all 0.3s;
	
	  //   -moz-transition: all 0.3s;
	
	  //   transition: all 0.3s;
	
	  // }
	
	  // .modal.zoom.in .modal-dialog {
	
	  //   -webkit-transform: scale(1);
	
	  //   -moz-transform: scale(1);
	
	  //   -ms-transform: scale(1);
	
	  //   transform: scale(1);
	
	  //   -webkit-transform: translate3d(0, -300px, 0);
	
	  //   transform: translate3d(0, -300px, 0);
	
	  //   opacity: 1;
	
	  // }
	
	  // </style>
	
	};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(147);
	module.exports = __webpack_require__(34).Number.isInteger;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(32);
	
	$export($export.S, 'Number', { isInteger: __webpack_require__(148) });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(40);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports = "<div role=\"dialog\"\r\n    v-bind:class=\"{\r\n    'modal':true,\r\n    'fade':effect === 'fade',\r\n    'zoom':effect === 'zoom'\r\n    }\"\r\n    >\r\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\r\n      v-bind:style=\"{width: optionalWidth}\">\r\n      <div class=\"modal-content\">\r\n        <slot name=\"modal-header\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\r\n            <h4 class=\"modal-title\">\r\n              <slot name=\"title\">\r\n                {{title}}\r\n              </slot>\r\n            </h4>\r\n          </div>\r\n        </slot>\r\n        <slot name=\"modal-body\">\r\n          <div class=\"modal-body\"></div>\r\n        </slot>\r\n        <slot name=\"modal-footer\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">{{ okText }}</button>\r\n          </div>\r\n        </slot>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(151)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(152)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    placement: {
	      type: String,
	      default: ''
	    },
	    fluid: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      id: 'bs-example-navbar-collapse-1',
	      collapsed: true,
	      styles: {}
	    };
	  },
	
	  computed: {
	    slots: function slots() {
	      return this._slotContents;
	    }
	  },
	  methods: {
	    toggleCollapse: function toggleCollapse(e) {
	      e && e.preventDefault();
	      this.collapsed = !this.collapsed;
	    }
	  },
	  created: function created() {
	    this._navbar = true;
	  },
	  ready: function ready() {
	    var _this = this;
	
	    var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', this.$el).parent();
	    $dropdown.on('click', '.dropdown-toggle', function (e) {
	      e.preventDefault();
	      $dropdown.each(function (content) {
	        if (content.contains(e.target)) content.classList.toggle('open');
	      });
	    }).on('click', '.dropdown-menu>li>a', function (e) {
	      $dropdown.each(function (content) {
	        if (content.contains(e.target)) content.classList.remove('open');
	      });
	    }).onBlur(function (e) {
	      $dropdown.each(function (content) {
	        if (!content.contains(e.target)) content.classList.remove('open');
	      });
	    });
	    (0, _NodeList2.default)(this.$el).on('click touchstart', 'li:not(.dropdown)>a', function (e) {
	      setTimeout(function () {
	        _this.collapsed = true;
	      }, 200);
	    }).onBlur(function (e) {
	      if (!_this.$el.contains(e.target)) {
	        _this.collapsed = true;
	      }
	    });
	    var height = this.$el.offsetHeight;
	    if (this.placement === 'top') {
	      document.body.style.paddingTop = height + 'px';
	    }
	    if (this.placement === 'bottom') {
	      document.body.style.paddingBottom = height + 'px';
	    }
	    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).on('click', function (e) {
	      return _this.toggleCollapse(e);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)('.dropdown', this.$el).off('click').offBlur();
	    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
	  }
	};
	// </script>
	// <template>
	
	//   <nav v-el:navbar :class="['navbar',{
	
	//     'navbar-inverse':(type == 'inverse'),
	
	//     'navbar-default':(type == 'default'),
	
	//     'navbar-fixed-top':(placement === 'top'),
	
	//     'navbar-fixed-bottom':(placement === 'bottom'),
	
	//     'navbar-static-top':(placement === 'static')
	
	//   }]">
	
	//     <div v-bind:class="fluid ? 'container-fluid' : 'container'">
	
	//       <div class="navbar-header">
	
	//         <button v-if="!slots.collapse" type="button" class="navbar-toggle collapsed"  aria-expanded="false" @click="toggleCollapse">
	
	//           <span class="sr-only">Toggle navigation</span>
	
	//           <span class="icon-bar"></span>
	
	//           <span class="icon-bar"></span>
	
	//           <span class="icon-bar"></span>
	
	//         </button>
	
	//         <slot name="collapse"></slot>
	
	//         <slot name="brand"></slot>
	
	//       </div>
	
	//       <div :class="['navbar-collapse',{collapse:collapsed}]">
	
	//         <ul class="nav navbar-nav">
	
	//           <slot></slot>
	
	//         </ul>
	
	//         <ul v-if="slots.right" class="nav navbar-nav navbar-right">
	
	//           <slot name="right"></slot>
	
	//         </ul>
	
	//       </div>
	
	//     </div>
	
	//   </nav>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 152 */
/***/ (function(module, exports) {

	module.exports = "<nav v-el:navbar :class=\"['navbar',{\r\n    'navbar-inverse':(type == 'inverse'),\r\n    'navbar-default':(type == 'default'),\r\n    'navbar-fixed-top':(placement === 'top'),\r\n    'navbar-fixed-bottom':(placement === 'bottom'),\r\n    'navbar-static-top':(placement === 'static')\r\n  }]\">\r\n    <div v-bind:class=\"fluid ? 'container-fluid' : 'container'\">\r\n      <div class=\"navbar-header\">\r\n        <button v-if=\"!slots.collapse\" type=\"button\" class=\"navbar-toggle collapsed\"  aria-expanded=\"false\" @click=\"toggleCollapse\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <slot name=\"collapse\"></slot>\r\n        <slot name=\"brand\"></slot>\r\n      </div>\r\n      <div :class=\"['navbar-collapse',{collapse:collapsed}]\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <slot></slot>\r\n        </ul>\r\n        <ul v-if=\"slots.right\" class=\"nav navbar-nav navbar-right\">\r\n          <slot name=\"right\"></slot>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(154)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(155)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Option.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Option.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Option.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Option.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Option.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><li v-el:v v-if="loading"><slot></slot></li></template>
	
	// <script>
	exports.default = {
	  props: { value: null },
	  data: function data() {
	    return { loading: true };
	  },
	  ready: function ready() {
	    if (this.$parent._select) {
	      if (!this.$parent.options) {
	        this.$parent.options = [];
	      }
	      var el = {};
	      el[this.$parent.optionsLabel] = this.$els.v.innerHTML;
	      el[this.$parent.optionsValue] = this.value;
	      this.$parent.options.push(el);
	      this.loading = false;
	    } else {
	      console.warn('options only work inside a select component');
	    }
	  }
	};
	// </script>

/***/ }),
/* 155 */
/***/ (function(module, exports) {

	module.exports = "<li v-el:v v-if=\"loading\"><slot></slot></li>";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(157)
	module.exports = __webpack_require__(159)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(160)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Panel.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Panel.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Panel.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Panel.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Panel.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-41c3325c&file=Panel.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-41c3325c&file=Panel.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-transition {\r\n  transition: max-height .5s ease;\r\n}\r\n.collapse-enter, .collapse-leave {\r\n  max-height: 0!important;\r\n}", ""]);
	
	// exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    isOpen: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    inAccordion: function inAccordion() {
	      return this.$parent && this.$parent._isAccordion;
	    },
	    panelType: function panelType() {
	      return 'panel panel-' + (this.type || this.$parent && this.$parent.type || 'default');
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      this.isOpen = !this.isOpen;
	      this.$dispatch('isOpenEvent', this);
	    }
	  },
	  transitions: {
	    collapse: {
	      afterEnter: function afterEnter(el) {
	        el.style.maxHeight = '';
	        el.style.overflow = '';
	      },
	      beforeLeave: function beforeLeave(el) {
	        el.style.maxHeight = el.offsetHeight + 'px';
	        el.style.overflow = 'hidden';
	        // Recalculate DOM before the class gets added.
	        return el.offsetHeight;
	      }
	    }
	  },
	  created: function created() {
	    if (this.isOpen === null) {
	      this.isOpen = !this.inAccordion;
	    }
	  }
	};
	// </script>
	
	
	// <style>
	
	// .accordion-toggle {
	
	//   cursor: pointer;
	
	// }
	
	// .collapse-transition {
	
	//   transition: max-height .5s ease;
	
	// }
	
	// .collapse-enter, .collapse-leave {
	
	//   max-height: 0!important;
	
	// }
	
	// </style>
	// <template>
	
	//   <div :class="panelType">
	
	//     <div :class="['panel-heading',{'accordion-toggle':inAccordion}]" @click.prevent="inAccordion&&toggle()">
	
	//       <slot name="header">
	
	//         <h4 class="panel-title">{{ header }}</h4>
	
	//       </slot>
	
	//     </div>
	
	//     <div class="panel-collapse"
	
	//       v-el:panel
	
	//       v-show="isOpen"
	
	//       transition="collapse"
	
	//     >
	
	//       <div class="panel-body">
	
	//         <slot></slot>
	
	//       </div>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 160 */
/***/ (function(module, exports) {

	module.exports = "<div :class=\"panelType\">\r\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\r\n      <slot name=\"header\">\r\n        <h4 class=\"panel-title\">{{ header }}</h4>\r\n      </slot>\r\n    </div>\r\n    <div class=\"panel-collapse\"\r\n      v-el:panel\r\n      v-show=\"isOpen\"\r\n      transition=\"collapse\"\r\n    >\r\n      <div class=\"panel-body\">\r\n        <slot></slot>\r\n      </div>\r\n    </div>\r\n  </div>";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(162)
	module.exports = __webpack_require__(164)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(166)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Popover.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Popover.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Popover.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Popover.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Popover.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-da0d651a&file=Popover.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-da0d651a&file=Popover.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".popover.top,\r\n.popover.left,\r\n.popover.right,\r\n.popover.bottom {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave {\r\n  animation:scale-out 0.15s ease-out;\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}", ""]);
	
	// exports


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(165);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    }
	  }
	  // </script>
	
	
	  // <style>
	
	  // .popover.top,
	
	  // .popover.left,
	
	  // .popover.right,
	
	  // .popover.bottom {
	
	  //   display: block;
	
	  // }
	
	  // .scale-enter {
	
	  //   animation:scale-in 0.15s ease-in;
	
	  // }
	
	  // .scale-leave {
	
	  //   animation:scale-out 0.15s ease-out;
	
	  // }
	
	  // @keyframes scale-in {
	
	  //   0% {
	
	  //     transform: scale(0);
	
	  //     opacity: 0;
	
	  //   }
	
	  //   100% {
	
	  //     transform: scale(1);
	
	  //     opacity: 1;
	
	  //   }
	
	  // }
	
	  // @keyframes scale-out {
	
	  //   0% {
	
	  //     transform: scale(1);
	
	  //     opacity: 1;
	
	  //   }
	
	  //   100% {
	
	  //     transform: scale(0);
	
	  //     opacity: 0;
	
	  //   }
	
	  // }
	
	  // </style>
	
	}; // <template>
	
	//   <span v-el:trigger>
	
	//     <slot></slot>
	
	//     <div v-el:popover v-if="show"
	
	//       :class="['popover',placement]"
	
	//       :transition="effect"
	
	//     >
	
	//       <div class="arrow"></div>
	
	//       <h3 class="popover-title" v-if="title">
	
	//         <slot name="title">{{title}}</slot>
	
	//       </h3>
	
	//       <div class="popover-content">
	
	//         <slot name="content">{{{content}}}</slot>
	
	//       </div>
	
	//     </div>
	
	//   </span>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    trigger: {
	      type: String
	    },
	    effect: {
	      type: String,
	      default: 'fade'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String
	    },
	    header: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: true
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    }
	  },
	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      show: false
	    };
	  },
	
	  methods: {
	    toggle: function toggle(e) {
	      var _this = this;
	
	      if (e && this.trigger === 'contextmenu') e.preventDefault();
	      if (!(this.show = !this.show)) {
	        return;
	      }
	      Vue.nextTick(function () {
	        var popover = _this.$els.popover;
	        var trigger = _this.$els.trigger.children[0];
	        switch (_this.placement) {
	          case 'top':
	            _this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this.position.top = trigger.offsetTop - popover.offsetHeight;
	            break;
	          case 'left':
	            _this.position.left = trigger.offsetLeft - popover.offsetWidth;
	            _this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'right':
	            _this.position.left = trigger.offsetLeft + trigger.offsetWidth;
	            _this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
	            break;
	          case 'bottom':
	            _this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
	            _this.position.top = trigger.offsetTop + trigger.offsetHeight;
	            break;
	          default:
	            console.warn('Wrong placement prop');
	        }
	        popover.style.top = _this.position.top + 'px';
	        popover.style.left = _this.position.left + 'px';
	      }, 0);
	    }
	  },
	  ready: function ready() {
	    var trigger = this.$els.trigger;
	    if (!trigger) return console.error('Could not find trigger v-el in your component that uses popoverMixin.');
	
	    if (this.trigger === 'focus' && !~trigger.tabIndex) {
	      trigger = (0, _NodeList2.default)('a,input,select,textarea,button', trigger);
	      if (!trigger.length) {
	        trigger = null;
	      }
	    }
	    if (trigger) {
	      var events = { contextmenu: 'contextmenu', hover: 'mouseleave mouseenter', focus: 'blur focus' };
	      (0, _NodeList2.default)(trigger).on(events[this.trigger] || 'click', this.toggle);
	      this._trigger = trigger;
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._trigger) (0, _NodeList2.default)(this._trigger).off();
	  }
	};

/***/ }),
/* 166 */
/***/ (function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n    <slot></slot>\r\n    <div v-el:popover v-if=\"show\"\r\n      :class=\"['popover',placement]\"\r\n      :transition=\"effect\"\r\n    >\r\n      <div class=\"arrow\"></div>\r\n      <h3 class=\"popover-title\" v-if=\"title\">\r\n        <slot name=\"title\">{{title}}</slot>\r\n      </h3>\r\n      <div class=\"popover-content\">\r\n        <slot name=\"content\">{{{content}}}</slot>\r\n      </div>\r\n    </div>\r\n  </span>";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(168)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(169)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    now: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      required: true
	    },
	    label: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String
	    },
	    striped: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    animated: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  }
	  // </script>
	
	}; // <template>
	
	//   <div role="progressbar" 
	
	//     :class="['progress-bar',{
	
	//       'progress-bar-success':type == 'success',
	
	//       'progress-bar-warning':type == 'warning',
	
	//       'progress-bar-info':type == 'info',
	
	//       'progress-bar-danger':type == 'danger',
	
	//       'progress-bar-striped':striped,
	
	//       'active':animated
	
	//     }]"
	
	//     :style="{width: now + '%'}"
	
	//   >
	
	//     {{label ? now + '%' : ''}}
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 169 */
/***/ (function(module, exports) {

	module.exports = "<div role=\"progressbar\" \r\n    :class=\"['progress-bar',{\r\n      'progress-bar-success':type == 'success',\r\n      'progress-bar-warning':type == 'warning',\r\n      'progress-bar-info':type == 'info',\r\n      'progress-bar-danger':type == 'danger',\r\n      'progress-bar-striped':striped,\r\n      'active':animated\r\n    }]\"\r\n    :style=\"{width: now + '%'}\"\r\n  >\r\n    {{label ? now + '%' : ''}}\r\n  </div>";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(171)
	module.exports = __webpack_require__(173)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(174)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Radio.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Radio.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Radio.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Radio.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Radio.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(172);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-04b2c56e&file=Radio.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-04b2c56e&file=Radio.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".radio { position: relative; }\r\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\r\n}\r\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\r\n}\r\n.radio.active .btn-default { filter: brightness(75%); }\r\n\r\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}", ""]);
	
	// exports


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    value: {
	      default: true
	    },
	    checked: {
	      twoWay: true
	    },
	    button: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    type: {
	      type: String,
	      default: null
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.group ? this.$parent.value === this.value : this.value === this.checked;
	    },
	    buttonStyle: function buttonStyle() {
	      return this.button || this.group && this.$parent.buttons;
	    },
	    group: function group() {
	      return this.$parent && this.$parent._radioGroup;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (!parent) return;
	    if (parent._btnGroup && !parent._checkboxGroup) {
	      parent._radioGroup = true;
	    }
	  },
	  ready: function ready() {
	    if (!this.$parent._radioGroup) return;
	    if (this.$parent.value) {
	      this.checked = this.$parent.value === this.value;
	    } else if (this.checked) {
	      this.$parent.value = this.value;
	    }
	  },
	
	  methods: {
	    focus: function focus() {
	      this.$els.input.focus();
	    },
	    toggle: function toggle() {
	      if (this.disabled) {
	        return;
	      }
	      this.focus();
	      if (this.readonly) {
	        return;
	      }
	      this.checked = this.value;
	      if (this.group) {
	        this.$parent.value = this.value;
	      }
	    }
	  }
	  // </script>
	
	
	  // <style scope>
	
	  // .radio { position: relative; }
	
	  // .radio > label > input {
	
	  //   position: absolute;
	
	  //   margin: 0;
	
	  //   padding: 0;
	
	  //   opacity: 0;
	
	  //   z-index: -1;
	
	  //   box-sizing: border-box;
	
	  // }
	
	  // .radio > label > .icon {
	
	  //   position: absolute;
	
	  //   top: .15rem;
	
	  //   left: 0;
	
	  //   display: block;
	
	  //   width: 1.4rem;
	
	  //   height: 1.4rem;
	
	  //   text-align: center;
	
	  //   user-select: none;
	
	  //   border-radius: .7rem;
	
	  //   background-repeat: no-repeat;
	
	  //   background-position: center center;
	
	  //   background-size: 50% 50%;
	
	  // }
	
	  // .radio:not(.active) > label > .icon {
	
	  //   background-color: #ddd;
	
	  //   border: 1px solid #bbb;
	
	  // }
	
	  // .radio > label > input:focus ~ .icon {
	
	  //   outline: 0;
	
	  //   border: 1px solid #66afe9;
	
	  //   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	
	  // }
	
	  // .radio.active > label > .icon {
	
	  //   background-size: 1rem 1rem;
	
	  //   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
	
	  // }
	
	  // .radio.active .btn-default { filter: brightness(75%); }
	
	
	  // .radio.disabled > label > .icon,
	
	  // .radio.readonly > label > .icon,
	
	  // .btn.readonly {
	
	  //   filter: alpha(opacity=65);
	
	  //   box-shadow: none;
	
	  //   opacity: .65;
	
	  // }
	
	  // label.btn > input[type=radio] {
	
	  //   position: absolute;
	
	  //   clip: rect(0,0,0,0);
	
	  //   pointer-events: none;
	
	  // }
	
	  // </style>
	
	}; // <template>
	
	//   <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	
	//     <input type="radio" autocomplete="off"
	
	//       v-el:input
	
	//       v-show="!readonly"
	
	//       :checked="active"
	
	//       :value="value"
	
	//       :name="name"
	
	//       :readonly="readonly"
	
	//       :disabled="disabled"
	
	//     />
	
	//     <slot></slot>
	
	//   </label>
	
	//   <div v-else :class="['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
	
	//     <label class="open">
	
	//       <input type="radio" autocomplete="off"
	
	//         v-el:input
	
	//         :checked="active"
	
	//         :value="value"
	
	//         :name="name"
	
	//         :readonly="readonly"
	
	//         :disabled="disabled"
	
	//       />
	
	//       <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
	
	//       <span v-if="active&&typeColor==='default'" class="icon"></span>
	
	//       <slot></slot>
	
	//     </label>
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	module.exports = "<label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <input type=\"radio\" autocomplete=\"off\"\r\n      v-el:input\r\n      v-show=\"!readonly\"\r\n      :checked=\"active\"\r\n      :value=\"value\"\r\n      :name=\"name\"\r\n      :readonly=\"readonly\"\r\n      :disabled=\"disabled\"\r\n    />\r\n    <slot></slot>\r\n  </label>\r\n  <div v-else :class=\"['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <label class=\"open\">\r\n      <input type=\"radio\" autocomplete=\"off\"\r\n        v-el:input\r\n        :checked=\"active\"\r\n        :value=\"value\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\r\n      <slot></slot>\r\n    </label>\r\n  </div>";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(176)
	module.exports = __webpack_require__(178)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(193)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Select.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Select.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-5738441e&file=Select.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Select.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Select.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-5738441e&file=Select.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Select.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(177);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-5738441e&file=Select.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-5738441e&file=Select.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, "div.form-control.dropdown-toggle[_v-5738441e]{\r\n  height: auto;\r\n  padding-right: 24px;\r\n  cursor: pointer;\r\n}\r\ndiv.form-control.dropdown-toggle[_v-5738441e]:after{\r\n  content: ' ';\r\n  position: absolute;\r\n  right: 13px;\r\n  top: 50%;\r\n  margin: -1px 0 0;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid \\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n.bs-searchbox[_v-5738441e] {\r\n  position: relative;\r\n  margin: 4px 8px;\r\n}\r\n.bs-searchbox .close[_v-5738441e] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.bs-searchbox input[_v-5738441e]:focus,\r\n.secret:focus + button[_v-5738441e] {\r\n  outline: 0;\r\n  border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.secret[_v-5738441e] {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\ndiv>.close[_v-5738441e] { margin-left: 5px; }\r\n.notify.out[_v-5738441e] { position: relative; }\r\n.notify.in[_v-5738441e],\r\n.notify>div[_v-5738441e] {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n}\r\n.notify>div[_v-5738441e] {\r\n  top: 5px;\r\n  z-index: 1;\r\n}\r\n.notify.in[_v-5738441e] {\r\n  opacity: .9;\r\n  bottom: 5px;\r\n}\r\n.btn-group-justified .dropdown-toggle>span[_v-5738441e]:not(.close) {\r\n  width: calc(100% - 18px);\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  margin-bottom: -4px;\r\n}\r\n.btn-group-justified .dropdown-menu[_v-5738441e] {\r\n  width: 100%;\r\n}\r\n.open>.dropdown-menu[_v-5738441e] {\r\n  overflow-y: auto;\r\n  max-height: 20.5rem;\r\n}\r\n.form-control.dropdown-toggle[_v-5738441e]{\r\n  border-radius: 5px;\r\n}\r\n.form-control.dropdown-toggle>.close[_v-5738441e]{\r\n  float: none;\r\n  font-size: 20px;\r\n  line-height: 20px;\r\n}", ""]);
	
	// exports


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(179);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _utils = __webpack_require__(93);
	
	var _NodeList = __webpack_require__(28);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div v-el:select :class="classes">
	
	//     <div class="form-control dropdown-toggle"
	
	//       :disabled="disabled || !hasParent"
	
	//       :readonly="readonly"
	
	//       @click="toggle()"
	
	//       @keyup.esc="show = false"
	
	//     >
	
	//       <span class="btn-content" v-html="loading ? text.loading : showPlaceholder || selected"></span>
	
	//       <span v-if="clearable&&values.length" class="close" @click="clear()">&times;</span>
	
	//     </div>
	
	//     <select v-el:sel v-model="value" v-show="show" name="{{name}}" class="secret" :multiple="multiple" :required="required" :readonly="readonly" :disabled="disabled">
	
	//       <option v-if="required" value=""></option>
	
	//       <option v-for="option in options" :value="option[optionsValue]||option|json">{{ option[optionsLabel]||option }}</option>
	
	//     </select>
	
	//     <ul class="dropdown-menu">
	
	//       <template v-if="options.length">
	
	//         <li v-if="canSearch" class="bs-searchbox">
	
	//           <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
	
	//             v-el:search
	
	//             v-model="searchValue"
	
	//             @keyup.esc="show = false"
	
	//           />
	
	//           <span v-show="searchValue" class="close" @click="clearSearch">&times;</span>
	
	//         </li>
	
	//         <li v-if="required&&!clearable"><a @mousedown.prevent="clear() && blur()">{{ placeholder || text.notSelected }}</a></li>
	
	//         <li v-for="option in options | filterBy searchValue" :id="option[optionsValue]||option">
	
	//           <a @mousedown.prevent="select(option[optionsValue],option)">
	
	//             <span v-html="option[optionsLabel]||option"></span>
	
	//             <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option[optionsValue])"></span>
	
	//           </a>
	
	//         </li>
	
	//       </template>
	
	//       <slot></slot>
	
	//       <div v-if="showNotify && !closeOnSelect" class="notify in" transition="fadein">{{limitText}}</div>
	
	//     </ul>
	
	//     <div v-if="showNotify && closeOnSelect" class="notify out" transition="fadein"><div>{{limitText}}</div></div>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	var timeout = {};
	exports.default = {
	  props: {
	    value: {
	      twoWay: true
	    },
	    options: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    multiple: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    clearable: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    closeOnSelect: { // only works when multiple
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    lang: {
	      type: String,
	      default: navigator.language
	    },
	    limit: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 1024
	    },
	    name: {
	      type: String,
	      default: null
	    },
	    optionsLabel: {
	      type: String,
	      default: 'label'
	    },
	    optionsValue: {
	      type: String,
	      default: 'value'
	    },
	    parent: {
	      default: true
	    },
	    placeholder: {
	      type: String,
	      default: null
	    },
	    readonly: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    required: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: null
	    },
	    minSearch: {
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    },
	    search: { // Allow searching (only works when options are provided)
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    searchText: {
	      type: String,
	      default: null
	    },
	    url: {
	      type: String,
	      default: null
	    }
	  },
	  data: function data() {
	    return {
	      loading: null,
	      searchValue: null,
	      show: false,
	      showNotify: false,
	      valid: null
	    };
	  },
	
	  computed: {
	    selected: function selected() {
	      var _this = this;
	
	      if (this.options.length === 0) {
	        return '';
	      }
	      var foundItems = [];
	      this.values.forEach(function (item) {
	        if (~['number', 'string'].indexOf(typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item))) {
	          var option = null;
	          if (_this.options.some(function (o) {
	            if (o instanceof Object ? o[_this.optionsValue] === item : o === item) {
	              option = o;
	              return true;
	            }
	          })) {
	            foundItems.push(option[_this.optionsLabel] || option);
	          }
	        }
	      });
	      return foundItems.join(', ');
	    },
	    classes: function classes() {
	      return [{ open: this.show, disabled: this.disabled }, this.class, this.isLi ? 'dropdown' : this.inInput ? 'input-group-btn' : 'btn-group'];
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._navbar || this.$parent.menu || this.$parent._tabset;
	    },
	    canSearch: function canSearch() {
	      return this.minSearch ? this.options.length >= this.minSearch : this.search;
	    },
	    limitText: function limitText() {
	      return this.text.limit.replace('{{limit}}', this.limit);
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.values.length === 0 || !this.hasParent ? this.placeholder || this.text.notSelected : null;
	    },
	    text: function text() {
	      return (0, _utils.translations)(this.lang);
	    },
	    hasParent: function hasParent() {
	      return this.parent instanceof Array ? this.parent.length : this.parent;
	    },
	    values: function values() {
	      return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : [];
	    }
	  },
	  watch: {
	    options: function options(_options) {
	      var _this2 = this;
	
	      var changed = false;
	      if (_options instanceof Array && _options.length) {
	        _options.map(function (el) {
	          if (!(el instanceof Object)) {
	            var obj = {};
	            obj[_this2.optionsLabel] = el;
	            obj[_this2.optionsValue] = el;
	            changed = true;
	            return obj;
	          }
	          return el;
	        });
	      }
	      if (changed) {
	        this.options = _options;
	      }
	    },
	    show: function show(val) {
	      if (val) {
	        this.$els.sel.focus();
	        this.$els.search && this.$els.search.focus();
	      }
	    },
	    url: function url() {
	      this.update();
	    },
	    value: function value(val) {
	      var _this3 = this;
	
	      this.$emit('change', val);
	      this.$emit('selected', this.selected);
	      if (this.value instanceof Array && val.length > this.limit) {
	        this.showNotify = true;
	        if (timeout.limit) clearTimeout(timeout.limit);
	        timeout.limit = setTimeout(function () {
	          timeout.limit = false;
	          _this3.showNotify = false;
	        }, 1500);
	      }
	      this.checkValue();
	      this.valid = this.validate();
	    },
	    valid: function valid(val, old) {
	      if (val === old) {
	        return;
	      }
	      this._parent && this._parent.validate();
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    clear: function clear() {
	      if (this.disabled || this.readonly) {
	        return;
	      }
	      this.value = this.value instanceof Array ? [] : null;
	      this.toggle();
	    },
	    clearSearch: function clearSearch() {
	      this.searchValue = '';
	      this.$els.search.focus();
	    },
	    checkValue: function checkValue() {
	      if (this.multiple && !(this.value instanceof Array)) {
	        this.value = this.value === null || this.value === undefined ? [] : [this.value];
	      }
	      if (!this.multiple && this.value instanceof Array) {
	        this.value = this.value.length ? this.value.pop() : null;
	      }
	      if (this.limit < 1) {
	        this.limit = 1;
	      }
	      if (this.values.length > this.limit) {
	        this.value = this.value.slice(0, this.limit);
	      }
	    },
	    isSelected: function isSelected(v) {
	      return this.values.indexOf(v) > -1;
	    },
	    select: function select(v, alt) {
	      (0, _NodeList2.default)(this.$els.search).blur();
	      if (this.value instanceof Array) {
	        if (~this.value.indexOf(v)) {
	          this.value.$remove(v);
	        } else {
	          this.value.push(v);
	        }
	        if (this.closeOnSelect) {
	          this.toggle();
	        }
	      } else {
	        var tmp = this.value;
	        this.value = !~['', null, undefined].indexOf(v) ? v : alt;
	        if (this.value === tmp) {
	          this.value = null;
	        }
	        this.toggle();
	      }
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    },
	    update: function update() {
	      var _this4 = this;
	
	      if (!this.url) return;
	      this.loading = true;
	      (0, _utils.getJSON)(this.url).then(function (data) {
	        var options = [];
	        data.forEach(function (opc) {
	          if (opc[_this4.optionsValue] !== undefined && opc[_this4.optionsLabel] !== undefined) options.push(opc);
	        });
	        _this4.options = options;
	        if (!options.length) {
	          _this4.value = _this4.value instanceof Array ? [] : null;
	        }
	      }).always(function () {
	        _this4.loading = false;
	        _this4.checkValue();
	      });
	    },
	    validate: function validate() {
	      return !this.required ? true : this.value instanceof Array ? this.value.length > 0 : this.value !== null;
	    }
	  },
	  created: function created() {
	    this._select = true;
	    if (this.value === undefined || !this.parent) {
	      this.value = null;
	    }
	    if (!this.multiple && this.value instanceof Array) {
	      this.value = this.value.shift();
	    }
	    this.checkValue();
	    if (this.url) this.update();
	    var parent = this.$parent;
	    while (parent && !parent._formGroup) {
	      parent = parent.$parent;
	    }
	    if (parent && parent._formGroup) {
	      parent.children.push(this);
	      this._parent = parent;
	    }
	  },
	  ready: function ready() {
	    var _this5 = this;
	
	    (0, _NodeList2.default)(this.$els.select).onBlur(function (e) {
	      _this5.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._parent) this._parent.children.$remove(this);
	    (0, _NodeList2.default)(this.$els.select).offBlur();
	  }
	};
	// </script>
	
	
	// <style scoped>
	
	// div.form-control.dropdown-toggle{
	
	//   height: auto;
	
	//   padding-right: 24px;
	
	//   cursor: pointer;
	
	// }
	
	// div.form-control.dropdown-toggle:after{
	
	//   content: ' ';
	
	//   position: absolute;
	
	//   right: 13px;
	
	//   top: 50%;
	
	//   margin: -1px 0 0;
	
	//   border-top: 4px dashed;
	
	//   border-top: 4px solid \9;
	
	//   border-right: 4px solid transparent;
	
	//   border-left: 4px solid transparent;
	
	// }
	
	// .bs-searchbox {
	
	//   position: relative;
	
	//   margin: 4px 8px;
	
	// }
	
	// .bs-searchbox .close {
	
	//   position: absolute;
	
	//   top: 0;
	
	//   right: 0;
	
	//   z-index: 2;
	
	//   display: block;
	
	//   width: 34px;
	
	//   height: 34px;
	
	//   line-height: 34px;
	
	//   text-align: center;
	
	// }
	
	// .bs-searchbox input:focus,
	
	// .secret:focus + button {
	
	//   outline: 0;
	
	//   border-color: #66afe9 !important;
	
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
	
	// }
	
	// .secret {
	
	//   border: 0;
	
	//   clip: rect(0 0 0 0);
	
	//   height: 1px;
	
	//   margin: -1px;
	
	//   overflow: hidden;
	
	//   padding: 0;
	
	//   position: absolute;
	
	//   width: 1px;
	
	// }
	
	// div>.close { margin-left: 5px; }
	
	// .notify.out { position: relative; }
	
	// .notify.in,
	
	// .notify>div {
	
	//   position: absolute;
	
	//   width: 96%;
	
	//   margin: 0 2%;
	
	//   min-height: 26px;
	
	//   padding: 3px 5px;
	
	//   background: #f5f5f5;
	
	//   border: 1px solid #e3e3e3;
	
	//   box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
	
	//   pointer-events: none;
	
	// }
	
	// .notify>div {
	
	//   top: 5px;
	
	//   z-index: 1;
	
	// }
	
	// .notify.in {
	
	//   opacity: .9;
	
	//   bottom: 5px;
	
	// }
	
	// .btn-group-justified .dropdown-toggle>span:not(.close) {
	
	//   width: calc(100% - 18px);
	
	//   display: inline-block;
	
	//   overflow: hidden;
	
	//   white-space: nowrap;
	
	//   text-overflow: ellipsis;
	
	//   margin-bottom: -4px;
	
	// }
	
	// .btn-group-justified .dropdown-menu {
	
	//   width: 100%;
	
	// }
	
	// .open>.dropdown-menu {
	
	//   overflow-y: auto;
	
	//   max-height: 20.5rem;
	
	// }
	
	// .form-control.dropdown-toggle{
	
	//   border-radius: 5px;
	
	// }
	
	// .form-control.dropdown-toggle>.close{
	
	//   float: none;
	
	//   font-size: 20px;
	
	//   line-height: 20px;
	
	// }
	
	// </style>

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(48);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(180);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(181), __esModule: true };

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(182);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	module.exports = __webpack_require__(34).Symbol;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(33);
	var has = __webpack_require__(47);
	var DESCRIPTORS = __webpack_require__(42);
	var $export = __webpack_require__(32);
	var redefine = __webpack_require__(56);
	var META = __webpack_require__(183).KEY;
	var $fails = __webpack_require__(43);
	var shared = __webpack_require__(70);
	var setToStringTag = __webpack_require__(74);
	var uid = __webpack_require__(71);
	var wks = __webpack_require__(75);
	var wksExt = __webpack_require__(82);
	var wksDefine = __webpack_require__(184);
	var enumKeys = __webpack_require__(185);
	var isArray = __webpack_require__(188);
	var anObject = __webpack_require__(39);
	var isObject = __webpack_require__(40);
	var toIObject = __webpack_require__(63);
	var toPrimitive = __webpack_require__(45);
	var createDesc = __webpack_require__(46);
	var _create = __webpack_require__(59);
	var gOPNExt = __webpack_require__(87);
	var $GOPD = __webpack_require__(189);
	var $DP = __webpack_require__(38);
	var $keys = __webpack_require__(61);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(88).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(187).f = $propertyIsEnumerable;
	  __webpack_require__(186).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(55)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(37)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(71)('meta');
	var isObject = __webpack_require__(40);
	var has = __webpack_require__(47);
	var setDesc = __webpack_require__(38).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(43)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(33);
	var core = __webpack_require__(34);
	var LIBRARY = __webpack_require__(55);
	var wksExt = __webpack_require__(82);
	var defineProperty = __webpack_require__(38).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(61);
	var gOPS = __webpack_require__(186);
	var pIE = __webpack_require__(187);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 186 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 187 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(65);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(187);
	var createDesc = __webpack_require__(46);
	var toIObject = __webpack_require__(63);
	var toPrimitive = __webpack_require__(45);
	var has = __webpack_require__(47);
	var IE8_DOM_DEFINE = __webpack_require__(41);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(42) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 190 */
/***/ (function(module, exports) {



/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(184)('asyncIterator');


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(184)('observable');


/***/ }),
/* 193 */
/***/ (function(module, exports) {

	module.exports = "<div v-el:select=\"\" :class=\"classes\" _v-5738441e=\"\">\n    <div class=\"form-control dropdown-toggle\" :disabled=\"disabled || !hasParent\" :readonly=\"readonly\" @click=\"toggle()\" @keyup.esc=\"show = false\" _v-5738441e=\"\">\n      <span class=\"btn-content\" v-html=\"loading ? text.loading : showPlaceholder || selected\" _v-5738441e=\"\"></span>\n      <span v-if=\"clearable&amp;&amp;values.length\" class=\"close\" @click=\"clear()\" _v-5738441e=\"\">×</span>\n    </div>\n    <select v-el:sel=\"\" v-model=\"value\" v-show=\"show\" name=\"{{name}}\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\" _v-5738441e=\"\">\n      <option v-if=\"required\" value=\"\" _v-5738441e=\"\"></option>\n      <option v-for=\"option in options\" :value=\"option[optionsValue]||option|json\" _v-5738441e=\"\">{{ option[optionsLabel]||option }}</option>\n    </select>\n    <ul class=\"dropdown-menu\" _v-5738441e=\"\">\n      <template v-if=\"options.length\" _v-5738441e=\"\">\n        <li v-if=\"canSearch\" class=\"bs-searchbox\" _v-5738441e=\"\">\n          <input type=\"text\" placeholder=\"{{searchText||text.search}}\" class=\"form-control\" autocomplete=\"off\" v-el:search=\"\" v-model=\"searchValue\" @keyup.esc=\"show = false\" _v-5738441e=\"\">\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\" _v-5738441e=\"\">×</span>\n        </li>\n        <li v-if=\"required&amp;&amp;!clearable\" _v-5738441e=\"\"><a @mousedown.prevent=\"clear() &amp;&amp; blur()\" _v-5738441e=\"\">{{ placeholder || text.notSelected }}</a></li>\n        <li v-for=\"option in options | filterBy searchValue\" :id=\"option[optionsValue]||option\" _v-5738441e=\"\">\n          <a @mousedown.prevent=\"select(option[optionsValue],option)\" _v-5738441e=\"\">\n            <span v-html=\"option[optionsLabel]||option\" _v-5738441e=\"\"></span>\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option[optionsValue])\" _v-5738441e=\"\"></span>\n          </a>\n        </li>\n      </template>\n      <slot _v-5738441e=\"\"></slot>\n      <div v-if=\"showNotify &amp;&amp; !closeOnSelect\" class=\"notify in\" transition=\"fadein\" _v-5738441e=\"\">{{limitText}}</div>\n    </ul>\n    <div v-if=\"showNotify &amp;&amp; closeOnSelect\" class=\"notify out\" transition=\"fadein\" _v-5738441e=\"\"><div _v-5738441e=\"\">{{limitText}}</div></div>\n  </div>";

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(195)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(196)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Slider.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Slider.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Slider.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Slider.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Slider.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 195 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	
	//   <div class="item">
	
	//     <slot></slot>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      index: 0,
	      show: false
	    };
	  },
	
	  computed: {
	    show: function show() {
	      return this.$parent.index === this.index;
	    }
	  },
	  ready: function ready() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c] === this) {
	        this.index = parseInt(c, 10);
	        break;
	      }
	    }
	    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
	    this.$parent.indicator.push(this.index);
	    if (this.index === 0) {
	      this.$el.classList.add('active');
	    }
	  }
	};
	// </script>

/***/ }),
/* 196 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"item\">\r\n    <slot></slot>\r\n  </div>";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(198)
	module.exports = __webpack_require__(200)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(201)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(199);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-28fec6e7&file=Spinner.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Spinner.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-28fec6e7&file=Spinner.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Spinner.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, "@keyframes spin {\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.spinner-gritcode {\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 9998;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  background: rgba(255, 255, 255, 0.9);\r\n}\r\n.spinner-gritcode.spinner-fixed {\r\n  position: fixed;\r\n}\r\n.spinner-gritcode .spinner-wrapper {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.spinner-gritcode .spinner-circle {\r\n  position: relative;\r\n  border: 4px solid #ccc;\r\n  border-right-color: #337ab7;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  animation: spin 0.6s linear;\r\n  animation-iteration-count: infinite;\r\n  width: 3em;\r\n  height: 3em;\r\n  z-index: 2;\r\n}\r\n.spinner-gritcode .spinner-text {\r\n  position: relative;\r\n  text-align: center;\r\n  margin-top: 0.5em;\r\n  z-index: 2;\r\n  width: 100%;\r\n  font-size: 95%;\r\n  color: #337ab7;\r\n}\r\n.spinner-gritcode.spinner-sm .spinner-circle {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n}\r\n.spinner-gritcode.spinner-md .spinner-circle {\r\n  width: 2em;\r\n  height: 2em;\r\n}\r\n.spinner-gritcode.spinner-lg .spinner-circle {\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n}\r\n.spinner-gritcode.spinner-xl .spinner-circle {\r\n  width: 3.5em;\r\n  height: 3.5em;\r\n}\r\n.lt-ie10 .spinner-gritcode .spinner-circle,\r\n.ie9 .spinner-gritcode .spinner-circle,\r\n.oldie .spinner-gritcode .spinner-circle,\r\n.no-csstransitions .spinner-gritcode .spinner-circle,\r\n.no-csstransforms3d .spinner-gritcode .spinner-circle {\r\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\r\n  animation: none;\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  border: none;\r\n  width: 32px;\r\n  height: 32px;\r\n}", ""]);
	
	// exports


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var MIN_WAIT = 500; // in ms
	
	// <template>
	
	//   <div :class="['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]" v-show="active">
	
	//     <div class="spinner-wrapper">
	
	//       <div class="spinner-circle"></div>
	
	//       <div class="spinner-text">{{text}}</div>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  props: {
	    size: {
	      type: String,
	      default: 'md'
	    },
	    text: {
	      type: String,
	      default: ''
	    },
	    fixed: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      active: false
	    };
	  },
	
	  computed: {
	    spinnerSize: function spinnerSize() {
	      return this.size ? 'spinner-' + this.size : 'spinner-sm';
	    }
	  },
	  ready: function ready() {
	    this._body = document.querySelector('body');
	    this._bodyOverflow = this._body.style.overflowY || '';
	  },
	
	  methods: {
	    getMinWait: function getMinWait(delay) {
	      delay = delay || 0;
	      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
	    },
	    show: function show(options) {
	      if (options && options.text) {
	        this.text = options.text;
	      }
	      if (options && options.size) {
	        this.size = options.size;
	      }
	      if (options && options.fixed) {
	        this.fixed = options.fixed;
	      }
	
	      // block scrolling when spinner is on
	      this._body.style.overflowY = 'hidden';
	
	      // activate spinner
	      this._started = new Date();
	      this.active = true;
	      this.$root.$broadcast('shown::spinner');
	    },
	    hide: function hide() {
	      var _this = this;
	
	      var delay = 0;
	      this._spinnerAnimation = setTimeout(function () {
	        _this.active = false;
	        _this._body.style.overflowY = _this._bodyOverflow;
	        _this.$root.$broadcast('hidden::spinner');
	      }, this.getMinWait(delay));
	    }
	  },
	  events: {
	    'show::spinner': function showSpinner(options) {
	      this.show(options);
	    },
	    'hide::spinner': function hideSpinner() {
	      this.hide();
	    },
	    'start::ajax': function startAjax(options) {
	      this.show(options);
	    },
	    'end::ajax': function endAjax() {
	      this.hide();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    clearTimeout(this._spinnerAnimation);
	    this._body.style.overflowY = this._bodyOverflow;
	  }
	};
	// </script>
	
	
	// <style>
	
	// @keyframes spin {
	
	//   100% {
	
	//     transform: rotate(360deg);
	
	//   }
	
	// }
	
	// .spinner-gritcode {
	
	//   top: 0;
	
	//   left: 0;
	
	//   bottom: 0;
	
	//   right: 0;
	
	//   z-index: 9998;
	
	//   position: absolute;
	
	//   width: 100%;
	
	//   text-align: center;
	
	//   background: rgba(255, 255, 255, 0.9);
	
	// }
	
	// .spinner-gritcode.spinner-fixed {
	
	//   position: fixed;
	
	// }
	
	// .spinner-gritcode .spinner-wrapper {
	
	//   position: absolute;
	
	//   top: 50%;
	
	//   left: 50%;
	
	//   transform: translate(-50%, -50%);
	
	//   -ms-transform: translate(-50%, -50%);
	
	// }
	
	// .spinner-gritcode .spinner-circle {
	
	//   position: relative;
	
	//   border: 4px solid #ccc;
	
	//   border-right-color: #337ab7;
	
	//   border-radius: 50%;
	
	//   display: inline-block;
	
	//   animation: spin 0.6s linear;
	
	//   animation-iteration-count: infinite;
	
	//   width: 3em;
	
	//   height: 3em;
	
	//   z-index: 2;
	
	// }
	
	// .spinner-gritcode .spinner-text {
	
	//   position: relative;
	
	//   text-align: center;
	
	//   margin-top: 0.5em;
	
	//   z-index: 2;
	
	//   width: 100%;
	
	//   font-size: 95%;
	
	//   color: #337ab7;
	
	// }
	
	// .spinner-gritcode.spinner-sm .spinner-circle {
	
	//   width: 1.5em;
	
	//   height: 1.5em;
	
	// }
	
	// .spinner-gritcode.spinner-md .spinner-circle {
	
	//   width: 2em;
	
	//   height: 2em;
	
	// }
	
	// .spinner-gritcode.spinner-lg .spinner-circle {
	
	//   width: 2.5em;
	
	//   height: 2.5em;
	
	// }
	
	// .spinner-gritcode.spinner-xl .spinner-circle {
	
	//   width: 3.5em;
	
	//   height: 3.5em;
	
	// }
	
	// .lt-ie10 .spinner-gritcode .spinner-circle,
	
	// .ie9 .spinner-gritcode .spinner-circle,
	
	// .oldie .spinner-gritcode .spinner-circle,
	
	// .no-csstransitions .spinner-gritcode .spinner-circle,
	
	// .no-csstransforms3d .spinner-gritcode .spinner-circle {
	
	//   background: url("http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif") center center no-repeat;
	
	//   animation: none;
	
	//   margin-left: 0;
	
	//   margin-top: 5px;
	
	//   border: none;
	
	//   width: 32px;
	
	//   height: 32px;
	
	// }
	
	// </style>

/***/ }),
/* 201 */
/***/ (function(module, exports) {

	module.exports = "<div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active\">\r\n    <div class=\"spinner-wrapper\">\r\n      <div class=\"spinner-circle\"></div>\r\n      <div class=\"spinner-text\">{{text}}</div>\r\n    </div>\r\n  </div>";

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(203)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(204)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tab.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tab.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this._tabset.show === this;
	    },
	    index: function index() {
	      return this._tabset.tabs.indexOf(this);
	    },
	    show: function show() {
	      return this._tabset && this._tabset.show === this;
	    },
	    transition: function transition() {
	      return this._tabset ? this._tabset.effect : null;
	    }
	  },
	  created: function created() {
	    this._ingroup = this.$parent && this.$parent._tabgroup;
	    var tabset = this;
	    while (tabset && tabset._tabset !== true && tabset.$parent) {
	      tabset = tabset.$parent;
	    }
	    if (!tabset._tabset) {
	      this._tabset = {};
	      console.warn('Warning: "tab" depend on "tabset" to work properly.');
	    } else {
	      tabset.tabs.push(this);
	      if (!this._ingroup) {
	        tabset.headers.push(this);
	      } else {
	        if (!~tabset.headers.indexOf(this.$parent)) {
	          tabset.headers.push(this.$parent);
	        }
	      }
	      this._tabset = tabset;
	    }
	    if (this._ingroup) {
	      this.$parent.tabs.push(this);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this._tabset.active === this.index) {
	      this._tabset.active = 0;
	    }
	    if (this._ingroup) {
	      this.$parent.tabs.$remove(this);
	    }
	    this._tabset.tabs.$remove(this);
	  }
	};
	// </script>
	// <template>
	
	//   <div role="tabpanel" class="tab-pane active" v-show="show"
	
	//     :class="{hide:!show}"
	
	//     :transition="transition"
	
	//   >
	
	//     <slot></slot>
	
	//   </div>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 204 */
/***/ (function(module, exports) {

	module.exports = "<div role=\"tabpanel\" class=\"tab-pane active\" v-show=\"show\"\r\n    :class=\"{hide:!show}\"\r\n    :transition=\"transition\"\r\n  >\r\n    <slot></slot>\r\n  </div>";

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(206)
	module.exports = __webpack_require__(208)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(209)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-8c4dace8&file=TabGroup.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-8c4dace8&file=TabGroup.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(207);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-8c4dace8&file=TabGroup.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-8c4dace8&file=TabGroup.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-tabs[_v-8c4dace8] {\r\n  margin-bottom: 15px;\r\n}", ""]);
	
	// exports


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	exports.default = {
	  props: {
	    disabled: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    header: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      tabs: [],
	      show: false
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return ~this.tabs.indexOf(this._tabset.show);
	    }
	  },
	  created: function created() {
	    this._tabgroup = true;
	    var tabset = this.$parent && this.$parent._tabset === true ? this.$parent : {};
	    if (this.$parent && this.$parent._tabgroup) {
	      console.error('Can\'t nest tabgroups.');
	    }
	    while (tabset && !tabset._tabset && tabset.$parent) {
	      tabset = tabset.$parent;
	    }
	    if (!tabset._tabset) {
	      this._tabset = {};
	      this.show = true;
	      console.warn('Warning: tabgroup depend on tabset to work properly.');
	    } else {
	      this._tabset = tabset;
	    }
	  },
	
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    },
	    toggle: function toggle() {
	      this.show = !this.show;
	    }
	  }
	  // </script>
	
	
	  // <style scoped>
	
	  // .nav-tabs {
	
	  //   margin-bottom: 15px;
	
	  // }
	
	  // </style>
	
	}; // <template><slot></slot></template>
	
	
	// <script>

/***/ }),
/* 209 */
/***/ (function(module, exports) {

	module.exports = "<slot _v-8c4dace8=\"\"></slot>";

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(211)
	module.exports = __webpack_require__(213)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(214)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-58b5b162&file=Tabset.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/template-rewriter.js?id=_v-58b5b162&file=Tabset.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(212);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-58b5b162&file=Tabset.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-58b5b162&file=Tabset.vue&scoped=true!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".nav-tabs[_v-58b5b162] {\r\n  margin-bottom: 15px;\r\n}", ""]);
	
	// exports


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var _Dropdown = __webpack_require__(128);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//   <div>
	
	//     <!-- Nav tabs -->
	
	//     <ul class="nav nav-{{navStyle}}" role="tablist">
	
	//       <template v-for="t in headers">
	
	//         <li v-if="!t._tabgroup" :class="{active:t.active, disabled:t.disabled}" @click.prevent="select(t)">
	
	//           <a href="#"><slot name="header">{{{ t.header }}}</slot></a>
	
	//         </li>
	
	//         <dropdown v-else :text="t.header" :class="{active:t.active}" :disabled="t.disabled">
	
	//           <li v-for="tab in t.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
	
	//         </dropdown>
	
	//       </template>
	
	//     </ul>
	
	//     <div class="tab-content" v-el:tab-content>
	
	//       <slot></slot>
	
	//     </div>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	exports.default = {
	  components: {
	    dropdown: _Dropdown2.default
	  },
	  props: {
	    navStyle: {
	      type: String,
	      default: 'tabs'
	    },
	    effect: {
	      type: String,
	      default: 'fadein'
	    },
	    active: {
	      twoWay: true,
	      type: Number,
	      coerce: _utils.coerce.number,
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      show: null,
	      headers: [],
	      tabs: []
	    };
	  },
	  created: function created() {
	    this._tabset = true;
	  },
	
	  watch: {
	    active: function active(val) {
	      this.show = this.tabs[val];
	    }
	  },
	  ready: function ready() {
	    this.show = this.tabs[this.active];
	  },
	
	  methods: {
	    select: function select(tab) {
	      if (!tab.disabled) {
	        this.active = tab.index;
	      }
	    }
	  }
	  // </script>
	
	
	  // <style scoped>
	
	  // .nav-tabs {
	
	  //   margin-bottom: 15px;
	
	  // }
	
	  // </style>
	
	};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

	module.exports = "<div _v-58b5b162=\"\">\n    <!-- Nav tabs -->\n    <ul class=\"nav nav-{{navStyle}}\" role=\"tablist\" _v-58b5b162=\"\">\n      <template v-for=\"t in headers\" _v-58b5b162=\"\">\n        <li v-if=\"!t._tabgroup\" :class=\"{active:t.active, disabled:t.disabled}\" @click.prevent=\"select(t)\" _v-58b5b162=\"\">\n          <a href=\"#\" _v-58b5b162=\"\"><slot name=\"header\" _v-58b5b162=\"\">{{{ t.header }}}</slot></a>\n        </li>\n        <dropdown v-else=\"\" :text=\"t.header\" :class=\"{active:t.active}\" :disabled=\"t.disabled\" _v-58b5b162=\"\">\n          <li v-for=\"tab in t.tabs\" :class=\"{disabled:tab.disabled}\" _v-58b5b162=\"\"><a href=\"#\" @click.prevent=\"select(tab)\" _v-58b5b162=\"\">{{tab.header}}</a></li>\n        </dropdown>\n      </template>\n    </ul>\n    <div class=\"tab-content\" v-el:tab-content=\"\" _v-58b5b162=\"\">\n      <slot _v-58b5b162=\"\"></slot>\n    </div>\n  </div>";

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(216)
	module.exports = __webpack_require__(218)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(219)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(217);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-90e2405e&file=Tooltip.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-90e2405e&file=Tooltip.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".tooltip.top,\r\n.tooltip.left,\r\n.tooltip.right,\r\n.tooltip.bottom {\r\n  opacity: .9\r\n}\r\n.fadein-enter {\r\n  animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave {\r\n  animation:fadein-out 0.3s ease-out;\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}", ""]);
	
	// exports


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popoverMixins = __webpack_require__(165);
	
	var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_popoverMixins2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    effect: {
	      type: String,
	      default: 'scale'
	    }
	  }
	  // </script>
	
	
	  // <style>
	
	  // .tooltip.top,
	
	  // .tooltip.left,
	
	  // .tooltip.right,
	
	  // .tooltip.bottom {
	
	  //   opacity: .9
	
	  // }
	
	  // .fadein-enter {
	
	  //   animation:fadein-in 0.3s ease-in;
	
	  // }
	
	  // .fadein-leave {
	
	  //   animation:fadein-out 0.3s ease-out;
	
	  // }
	
	  // @keyframes fadein-in {
	
	  //   0% {
	
	  //     opacity: 0;
	
	  //   }
	
	  //   100% {
	
	  //     opacity: .9;
	
	  //   }
	
	  // }
	
	  // @keyframes fadein-out {
	
	  //   0% {
	
	  //     opacity: .9;
	
	  //   }
	
	  //   100% {
	
	  //     opacity: 0;
	
	  //   }
	
	  // }
	
	  // </style>
	
	}; // <template>
	
	//   <span v-el:trigger>
	
	//     <slot></slot>
	
	//     <div v-el:popover v-if="show" style="display:block;"
	
	//       :class="['tooltip',placement]"
	
	//       :transition="effect"
	
	//     >
	
	//       <div class="tooltip-arrow"></div>
	
	//       <div class="tooltip-inner">
	
	//         <slot name="content">
	
	//           {{{content}}}
	
	//         </slot>
	
	//     </div>
	
	//     </div>
	
	//   </span>
	
	// </template>
	
	
	// <script>

/***/ }),
/* 219 */
/***/ (function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n    <slot></slot>\r\n    <div v-el:popover v-if=\"show\" style=\"display:block;\"\r\n      :class=\"['tooltip',placement]\"\r\n      :transition=\"effect\"\r\n    >\r\n      <div class=\"tooltip-arrow\"></div>\r\n      <div class=\"tooltip-inner\">\r\n        <slot name=\"content\">\r\n          {{{content}}}\r\n        </slot>\r\n    </div>\r\n    </div>\r\n  </span>";

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(221)
	module.exports = __webpack_require__(223)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(224)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(222);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-2b8e59d6&file=Typeahead.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-2b8e59d6&file=Typeahead.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, ".dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}", ""]);
	
	// exports


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(93);
	
	var Vue = window.Vue; // <template>
	
	//   <div style="position: relative"
	
	//        v-bind:class="{'open':showDropdown}"
	
	//   >
	
	//     <input type="text" class="form-control"
	
	//       :placeholder="placeholder"
	
	//       autocomplete="off"
	
	//       v-model="value"
	
	//       @input="update"
	
	//       @keydown.up="up"
	
	//       @keydown.down="down"
	
	//       @keydown.enter= "hit"
	
	//       @keydown.esc="reset"
	
	//       @blur="showDropdown = false"
	
	//     />
	
	//     <ul class="dropdown-menu" v-el:dropdown>
	
	//       <li v-for="item in items" v-bind:class="{'active': isActive($index)}">
	
	//         <a @mousedown.prevent="hit" @mousemove="setActive($index)">
	
	//           <partial :name="templateName"></partial>
	
	//         </a>
	
	//       </li>
	
	//     </ul>
	
	//   </div>
	
	// </template>
	
	
	// <script>
	
	var _DELAY_ = 200;
	
	exports.default = {
	  created: function created() {
	    this.items = this.primitiveData;
	  },
	
	  partials: {
	    default: '<span v-html="item | highlight value"></span>'
	  },
	  props: {
	    value: {
	      twoWay: true,
	      type: String,
	      default: ''
	    },
	    data: {
	      type: Array
	    },
	    limit: {
	      type: Number,
	      default: 8
	    },
	    async: {
	      type: String
	    },
	    template: {
	      type: String
	    },
	    templateName: {
	      type: String,
	      default: 'default'
	    },
	    key: {
	      type: String,
	      default: null
	    },
	    matchCase: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    matchStart: {
	      type: Boolean,
	      coerce: _utils.coerce.boolean,
	      default: false
	    },
	    onHit: {
	      type: Function,
	      default: function _default(items) {
	        this.reset();
	        this.value = items;
	      }
	    },
	    placeholder: {
	      type: String
	    },
	    delay: {
	      type: Number,
	      default: _DELAY_,
	      coerce: _utils.coerce.number
	    }
	  },
	  data: function data() {
	    return {
	      showDropdown: false,
	      noResults: true,
	      current: 0,
	      items: []
	    };
	  },
	
	  computed: {
	    primitiveData: function primitiveData() {
	      var _this = this;
	
	      if (this.data) {
	        return this.data.filter(function (value) {
	          value = _this.matchCase ? value : value.toLowerCase();
	          var query = _this.matchCase ? _this.value : _this.value.toLowerCase();
	          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
	        }).slice(0, this.limit);
	      }
	    }
	  },
	  ready: function ready() {
	    // register a partial:
	    if (this.templateName && this.templateName !== 'default') {
	      Vue.partial(this.templateName, this.template);
	    }
	  },
	
	  methods: {
	    update: function update() {
	      if (!this.value) {
	        this.reset();
	        return false;
	      }
	      if (this.data) {
	        this.items = this.primitiveData;
	        this.showDropdown = this.items.length > 0;
	      }
	      if (this.async) this.query();
	    },
	
	    query: (0, _utils.delayer)(function () {
	      var _this2 = this;
	
	      (0, _utils.getJSON)(this.async + this.value).then(function (data) {
	        _this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
	        _this2.showDropdown = _this2.items.length;
	      });
	    }, 'delay', _DELAY_),
	    reset: function reset() {
	      this.items = [];
	      this.value = '';
	      this.loading = false;
	      this.showDropdown = false;
	    },
	    setActive: function setActive(index) {
	      this.current = index;
	    },
	    isActive: function isActive(index) {
	      return this.current === index;
	    },
	    hit: function hit(e) {
	      e.preventDefault();
	      this.onHit(this.items[this.current], this);
	    },
	    up: function up() {
	      if (this.current > 0) this.current--;
	    },
	    down: function down() {
	      if (this.current < this.items.length - 1) this.current++;
	    }
	  },
	  filters: {
	    highlight: function highlight(value, phrase) {
	      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
	    }
	  }
	  // </script>
	
	
	  // <style>
	
	  // .dropdown-menu > li > a {
	
	  //   cursor: pointer;
	
	  // }
	
	  // </style>
	
	};

/***/ }),
/* 224 */
/***/ (function(module, exports) {

	module.exports = "<div style=\"position: relative\"\r\n       v-bind:class=\"{'open':showDropdown}\"\r\n  >\r\n    <input type=\"text\" class=\"form-control\"\r\n      :placeholder=\"placeholder\"\r\n      autocomplete=\"off\"\r\n      v-model=\"value\"\r\n      @input=\"update\"\r\n      @keydown.up=\"up\"\r\n      @keydown.down=\"down\"\r\n      @keydown.enter= \"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @blur=\"showDropdown = false\"\r\n    />\r\n    <ul class=\"dropdown-menu\" v-el:dropdown>\r\n      <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\r\n          <partial :name=\"templateName\"></partial>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>";

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(226)
	module.exports = __webpack_require__(228)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(229)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Daterange.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Daterange.vue","-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Daterange.vue"], function () {
	var newOptions = require("-!babel!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Daterange.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Daterange.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(227);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(102)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-f68bcac6&file=Daterange.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Daterange.vue", function() {
				var newContent = require("!!../node_modules/_css-loader@0.21.0@css-loader/index.js!../node_modules/_vue-loader@7.1.7@vue-loader/lib/style-rewriter.js?id=_v-f68bcac6&file=Daterange.vue!../node_modules/_vue-loader@7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Daterange.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(101)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * vue-datepicker v0.1.2\r\n * https://github.com/weifeiyue/vue-datepicker\r\n * (c) 2016 weifeiyue\r\n * Released under the MIT License.\r\n */\r\n.mz-datepicker {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n    font-family: 'Microsoft YaHei', serif;\r\n}\r\n.mz-datepicker > input {\r\n    font-family: 'Microsoft YaHei', serif;\r\n    color: #666;\r\n    border: 1px solid #d9d9d9;\r\n    height: 30px;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    padding: 0 30px 0 7px;\r\n    font-size: 13px;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n.mz-datepicker > input:disabled {\r\n    cursor: not-allowed;\r\n    background-color: #ebebe4;\r\n}\r\n.mz-datepicker > input:focus, .mz-datepicker > input.focus {\r\n    border-color: #3bb4f2;\r\n    box-shadow: 0 0 5px rgba(59, 180, 242, .3);\r\n}\r\n.mz-datepicker > i {\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    top: 0;\r\n    right: 0;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAACZmZl+9SADAAAAAXRSTlMAQObYZgAAAB9JREFUCNdjEBSAov//GSYKMjQwAhlAEoTaHyIzIFIAFm0NVxDW3twAAAAASUVORK5CYII=') no-repeat 50% 50%;\r\n}\r\n.mz-datepicker > a {\r\n    display: none;\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    top: 0;\r\n    right: 0;\r\n    cursor: pointer;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAMFBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmy/KNBAAAAD3RSTlMAeQfv0sgfSr2XgBXh4Em9LfYxAAAAdElEQVQI12NgYGAqXFgEpIAM4f//PwuBWFv/A8HXDUCh+P8gEMTAwPjf9v//P/YfGRiU/7v5A9FnBYb6/z9SvmT8/1/AIP//f9g0oFoBhvX////kBGpZgBBDqEPoBZpn8///X6B5CDsQ9iLcAmI+XPgISAEABvtVL6xNmm0AAAAASUVORK5CYII=') no-repeat 50% 50%;\r\n}\r\n.mz-datepicker > a:hover {\r\n    opacity: 0.8;\r\n}\r\n.mz-datepicker:hover > a {\r\n    display: block;\r\n}\r\n.mz-datepicker:hover > a + i {\r\n    display: none;\r\n}\r\n.mz-datepicker-popup {\r\n    font-size: 12px;\r\n    position: absolute;\r\n    top: 100%;\r\n    margin-top: 1px;\r\n    border: 1px solid #d9d9d9;\r\n    box-shadow: 0 1px 6px rgba(99, 99, 99, 0.2);\r\n    padding: 8px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background: #fff;\r\n    outline: none;\r\n    z-index: 1;\r\n}\r\n.mz-datepicker-popup-left{\r\n    right: 0;\r\n}\r\n.mz-datepicker-popup-transition {\r\n    transition: all 200ms ease;\r\n    opacity: 1;\r\n    transform: scaleY(1);\r\n    transform-origin: center top;\r\n}\r\n.mz-datepicker-popup-enter, .mz-datepicker-popup-leave {\r\n    opacity: 0;\r\n    transform: scaleY(0)\r\n}\r\n.mz-calendar {\r\n    width: 196px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: relative;\r\n}\r\n.mz-calendar-header {\r\n    text-align: center;\r\n    color: #999;\r\n    position: relative;\r\n    line-height: 34px;\r\n}\r\n.mz-calendar-header a {\r\n    cursor: pointer;\r\n}\r\n.mz-calendar-header a:hover {\r\n    color: #1284e7;\r\n}\r\n.mz-calendar-prev-year, .mz-calendar-prev-month, .mz-calendar-next-month, .mz-calendar-next-year {\r\n    position: absolute;\r\n    font-size: 16px;\r\n}\r\n.mz-calendar-prev-year {\r\n    left: 4px;\r\n}\r\n.mz-calendar-prev-month {\r\n    left: 24px;\r\n}\r\n.mz-calendar-next-month {\r\n    right: 24px;\r\n}\r\n.mz-calendar-next-year {\r\n    right: 4px;\r\n}\r\n.mz-calendar-year-select, .mz-calendar-month-select {\r\n    font-weight: 700;\r\n    color: #666;\r\n    padding: 0 2px;\r\n}\r\n.mz-calendar-footer {}\r\n.mz-calendar th, .mz-calendar td {\r\n    width: 28px;\r\n    height: 28px;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n}\r\n.mz-calendar th {\r\n    font-weight: normal;\r\n}\r\n.mz-calendar td {\r\n    cursor: pointer;\r\n}\r\n.mz-calendar td:hover, .mz-calendar-inrange {\r\n    background: #eaf8fe;\r\n}\r\n.mz-calendar-lastmonth, .mz-calendar-nextmonth {\r\n    color: #ccc;\r\n}\r\n.mz-calendar-today {\r\n    border: solid 1px #1284e7;\r\n    font-weight: bold;\r\n    color: #1284e7;\r\n}\r\n.mz-calendar-selected {\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background: #1284e7 !important;\r\n}\r\n.mz-calendar-disabled {\r\n    cursor: not-allowed !important;\r\n    color: #bcbcbc !important;\r\n    background: #f3f3f3 !important;\r\n}\r\n.mz-calendar-top {\r\n    color: #616161;\r\n    padding-bottom: 8px;\r\n    margin-bottom: 8px;\r\n    border-bottom: 1px solid #f3f3f3;\r\n}\r\n.mz-calendar-top a {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 16px;\r\n    cursor: pointer;\r\n}\r\n.mz-calendar-top a:hover {\r\n    color: #77BDFB;\r\n}\r\n.mz-calendar-top a.on {\r\n    font-weight: bold;\r\n    color: #1284e7;\r\n}\r\n.mz-calendar-top i {\r\n    content: '|';\r\n    display: inline-block;\r\n    width: 1px;\r\n    margin: 0 10px;\r\n    height: 16px;\r\n    background: #616161;\r\n    vertical-align: middle;\r\n}\r\n.mz-calendar-bottom {\r\n    margin-top: 8px;\r\n    padding-top: 8px;\r\n    border-top: 1px solid #f3f3f3;\r\n    text-align: right;\r\n}\r\n.mz-calendar-btn {\r\n    display: inline-block;\r\n    height: 22px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n    transition: all .3s ease;\r\n    padding: 0 10px;\r\n    line-height: 22px;\r\n    color: #1284e7;\r\n    margin-left: 5px;\r\n}\r\n.mz-calendar-btn:hover {\r\n    color: #60B3FB;\r\n}\r\n.mz-calendar-btn:active {\r\n    color: #006CCA;\r\n}\r\n.mz-calendar-btn.ok {\r\n    background: #1284e7;\r\n    color: #fff;\r\n}\r\n.mz-calendar-btn.ok:hover {\r\n    background: #60B3FB;\r\n}\r\n.mz-calendar-btn.ok:active {\r\n    background: #006CCA;\r\n}\r\n.mz-calendar-range {\r\n    width: 431px;\r\n}\r\n.mz-calendar-separator {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 31px;\r\n    position: relative;\r\n}\r\n.mz-calendar-separator::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 180px;\r\n    background: #e0e0e0;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-top: -90px;\r\n}\r\n.mz-calendar-separator span {\r\n    position: absolute;\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    background: #fff;\r\n    top: 50%;\r\n    margin-top: -15px;\r\n}\r\n.mz-calendar-year-panel {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 34px;\r\n    width: 100%;\r\n    height: 196px;\r\n    background: #fff;\r\n}\r\n.mz-calendar-year-panel-year, .mz-calendar-year-panel-prev,.mz-calendar-year-panel-next {\r\n    display: inline-block;\r\n    text-align: center;\r\n    width: 50%;\r\n    height: 32px;\r\n    line-height: 32px;\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n}\r\n.mz-calendar-year-panel-prev, .mz-calendar-year-panel-next {\r\n    width: 100%;\r\n    height: 18px;\r\n    position: relative;\r\n    display: block;\r\n}\r\n.mz-calendar-year-panel-prev::before,.mz-calendar-year-panel-next::before{\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -3px;\r\n    margin-top: -3px;\r\n}\r\n.mz-calendar-year-panel-prev::before{\r\n    border-bottom: 5px solid #999;\r\n}\r\n.mz-calendar-year-panel-next::before{\r\n    border-top: 5px solid #999;\r\n}\r\n.mz-calendar-year-panel-year:hover,.mz-calendar-month-panel-month:hover, .mz-calendar-year-panel-prev:hover,.mz-calendar-year-panel-next:hover {\r\n    background: #eaf8fe;\r\n    cursor: pointer;\r\n}\r\n.mz-calendar-month-panel {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 34px;\r\n    width: 100%;\r\n    height: 196px;\r\n    background: #fff;\r\n}\r\n.mz-calendar-month-panel-month {\r\n    display: inline-block;\r\n    text-align: center;\r\n    width: 33.33%;\r\n    height: 25%;\r\n    line-height: 49px;\r\n    vertical-align: middle;\r\n    box-sizing: border-box;\r\n}\r\n.mz-calendar-panel-transition {\r\n    transition: all 200ms ease;\r\n    opacity: 1;\r\n    transform: scale(1);\r\n    transform-origin: center center;\r\n}\r\n.mz-calendar-panel-enter, .mz-calendar-panel-leave {\r\n    opacity: 0;\r\n    transform: scale(0)\r\n}", ""]);
	
	// exports


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(179);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	
	//            <div class="mz-datepicker" v-bind:style="{width:width+'px'}"> 
	
	//             <input :value="value" readonly :disabled="disabled" :placeholder="placeholder" :class="{focus:show}" @click="click" @mousedown="$event.preventDefault()"/><a v-if="clearable&&value" @click.stop="clear"></a><i @click="click"></i> 
	
	//             <div class="mz-datepicker-popup" :class="{'mz-datepicker-popup-left':left}" v-if="show" transition="mz-datepicker-popup" tabindex="-1" @blur="show = false" @dblclick="show = false" @mousedown="$event.preventDefault()" @keyup.up="changeMonth(-1,1)" @keyup.down="changeMonth(1,1)" @keyup.left="changeYear(-1,1)" @keyup.right="changeYear(1,1)" v-el:popup> 
	
	//             <div class="mz-calendar-top" v-if="range&&!en"> 
	
	//                 <template v-for="item in ranges"> 
	
	//                     <i v-if="$index"></i><a v-text="item.name" @click="selectRange(item)"></a> 
	
	//                 </template> 
	
	//             </div> 
	
	//             <div :class="{'mz-calendar-range':range}"> 
	
	//                 <template v-for="no in count"> 
	
	//                     <div class="mz-calendar"> 
	
	//                         <div class="mz-calendar-header"> 
	
	//                             <a class="mz-calendar-prev-year" :title="prevYearTitle" @click="changeYear(-1,no+1)">«</a> 
	
	//                             <a class="mz-calendar-prev-month" :title="prevMonthTitle" @click="changeMonth(-1,no+1)">‹</a> 
	
	//                             <a v-if="!en" class="mz-calendar-year-select" :title="selectYearTitle" @click="showYear(no+1)">{{this['now'+(no+1)].getFullYear()+(en?"":"年")}}</a> 
	
	//                             <a v-if="!en" class="mz-calendar-month-select" :title="selectMonthTitle" @click="showMonth(no+1)">{{months[this['now'+(no+1)].getMonth()]}}</a> 
	
	//                             <a v-if="en" class="mz-calendar-month-select" :title="selectMonthTitle" @click="showMonth(no+1)">{{months[this['now'+(no+1)].getMonth()]}}</a> 
	
	//                             <a v-if="en" class="mz-calendar-year-select" :title="selectYearTitle" @click="showYear(no+1)">{{this['now'+(no+1)].getFullYear()+(en?"":"年")}}</a> 
	
	//                             <a class="mz-calendar-next-month" :title="nextMonthTitle" @click="changeMonth(1,no+1)">›</a> 
	
	//                             <a class="mz-calendar-next-year" :title="nextYearTitle" @click="changeYear(1,no+1)">»</a> 
	
	//                         </div> 
	
	//                         <table cellspacing="0" cellpadding="0"> 
	
	//                         <tr><th v-for="day in days" v-text="day"></th></tr> 
	
	//                         <tr v-if="this['date'+(no+1)]" v-for="i in 6"><td v-for="j in 7" v-text="this['date'+(no+1)][i * 7 + j].text" :title="this['date'+(no+1)][i * 7 + j].title" :class="this['date'+(no+1)][i * 7 + j].status" @click="select(this['date'+(no+1)][i * 7 + j], no+1)"></td></tr> 
	
	//                         </table> 
	
	//                         <div class="mz-calendar-year-panel" transition="mz-calendar-panel" v-if="this['showYear'+(no+1)]"><a class="mz-calendar-year-panel-prev" @click="changeYearRange(no+1,-1)"></a><a class="mz-calendar-year-panel-year" v-for="item in this['years'+(no+1)]" :class="item.status" @click="selectYear(item,no+1)">{{item.year+(en?"":"年")}}</a><a class="mz-calendar-year-panel-next" @click="changeYearRange(no+1,1)"></a></div> 
	
	//                         <div class="mz-calendar-month-panel" transition="mz-calendar-panel" v-if="this['showMonth'+(no+1)]"><a v-for="item in this['months'+(no+1)]" class="mz-calendar-month-panel-month" :class="item.status" @click="selectMonth(item,no+1)">{{months[item.month-1].substr(0,3)}}</a></div> 
	
	//                     </div> 
	
	//                     <div class="mz-calendar-separator" v-if="range&&no===0"><span>{{toTitle}}</span></div> 
	
	//                 </template> 
	
	//             </div> 
	
	//             <div class="mz-calendar-bottom" v-if="range&&confirm"><a class="mz-calendar-btn ok" @click="ok">{{okTitle}}</a></div> 
	
	//             </div> 
	
	//         </div> 
	
	// </template>
	
	
	// <script>
	
	exports.default = {
	    props: {
	        //是否显示范围
	        range: {
	            type: Boolean,
	            default: false
	        },
	        //显示宽度
	        width: {
	            default: 214
	        },
	        //输入的时间
	        time: {
	            twoWay: true
	        },
	        //输入的开始时间
	        startTime: {
	            twoWay: true
	        },
	        //输入的结束时间
	        endTime: {
	            twoWay: true
	        },
	        //选择最大范围限制,以天为单位（只有range为true的时候才起作用）
	        maxRange: {
	            coerce: function coerce(val) {
	                return +val;
	            }
	        },
	        //是否可以清除
	        clearable: {
	            type: Boolean,
	            default: false
	        },
	        placeholder: {
	            type: String,
	            default: "日期"
	        },
	        //显示格式
	        format: {
	            type: String,
	            default: 'yyyy-MM-dd'
	        },
	        //禁用
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        //是否需要点击确认
	        confirm: {
	            type: Boolean,
	            default: false
	        },
	        //英文显示
	        en: {
	            type: Boolean,
	            default: false
	        },
	        //点击确认触发事件
	        onConfirm: Function
	    },
	    data: function data() {
	        return {
	            show: false,
	            showYear1: false,
	            showYear2: false,
	            showMonth1: false,
	            showMonth2: false,
	            prevYearTitle: this.en ? 'last year' : '上一年',
	            prevMonthTitle: this.en ? 'last month' : '上个月',
	            selectYearTitle: this.en ? 'select year' : '选择年份',
	            selectMonthTitle: this.en ? 'select month' : '选择月份',
	            nextMonthTitle: this.en ? 'next month' : '下个月',
	            nextYearTitle: this.en ? 'next year' : '下一年',
	            toTitle: this.en ? 'TO' : '至',
	            okTitle: this.en ? 'OK' : '确定',
	            left: false,
	            ranges: [], //选择范围
	            days: this.en ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] : ['一', '二', '三', '四', '五', '六', '日'],
	            months: this.en ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	            years1: [],
	            years2: [],
	            months1: [],
	            months2: [],
	            date1: null,
	            date2: null,
	            time1: this.parse(this.startTime, false) || this.parse(this.time, false),
	            time2: this.parse(this.endTime, true),
	            now1: this.parse(new Date(), false),
	            now2: this.parse(new Date(), true),
	            count: this.range ? 2 : 1 //日历数量
	        };
	    },
	    computed: {
	        value: function value() {
	            if (this.range) {
	                if (this.startTime && this.endTime) {
	                    this.startTime = this.stringify(this.parse(this.startTime, false));
	                    this.endTime = this.stringify(this.parse(this.endTime, false));
	                    return this.startTime + ' ~ ' + this.endTime;
	                } else {
	                    return null;
	                }
	            } else {
	                return this.stringify(this.parse(this.time, false));
	            }
	        }
	    },
	    watch: {
	        show: function show(val) {
	            this.hidePanel();
	            val && this.$els.popup.focus();
	        },
	        now1: function now1() {
	            this.updateAll();
	        },
	        now2: function now2() {
	            this.updateAll();
	        }
	    },
	    methods: {
	        //转换输入的时间
	        parse: function parse(time, isLast) {
	            if (time) {
	                var tmpTime = new Date(time);
	                if (isLast === undefined) {
	                    return tmpTime;
	                } else if (isLast) {
	                    return new Date(tmpTime.getFullYear(), tmpTime.getMonth(), tmpTime.getDate(), 23, 59, 59, 999);
	                } else {
	                    return new Date(tmpTime.getFullYear(), tmpTime.getMonth(), tmpTime.getDate());
	                }
	            }
	            return null;
	        },
	        //初始化时间范围
	        initRanges: function initRanges() {
	            var time = new Date(),
	                ranges = [];
	            ranges.push({
	                name: '今天',
	                start: this.parse(time, false),
	                end: this.parse(time, true)
	            });
	            time.setDate(time.getDate() - 1);
	            ranges.push({
	                name: '昨天',
	                start: this.parse(time, false),
	                end: this.parse(time, true)
	            });
	            time = new Date();
	            time.setDate(time.getDate() - 6);
	            ranges.push({
	                name: '最近7天',
	                start: this.parse(time, false),
	                end: this.parse(new Date(), true)
	            });
	            time = new Date();
	            time.setMonth(time.getMonth() + 1, 0);
	            ranges.push({
	                name: '本月',
	                start: new Date(time.getFullYear(), time.getMonth(), 1),
	                end: this.parse(time, true)
	            });
	            time = new Date();
	            time.setMonth(time.getMonth(), 0);
	            ranges.push({
	                name: '上个月',
	                start: new Date(time.getFullYear(), time.getMonth(), 1),
	                end: this.parse(time, true)
	            });
	            time = new Date();
	            time.setDate(time.getDate() - 29);
	            ranges.push({
	                name: '最近一个月',
	                start: this.parse(time, false),
	                end: this.parse(new Date(), true)
	            });
	            time = new Date();
	            time.setDate(time.getDate() - 365);
	            ranges.push({
	                name: '最近一年',
	                start: this.parse(time, false),
	                end: this.parse(new Date(), true)
	            });
	            this.ranges = ranges;
	        },
	        //更新所有的日历
	        updateAll: function updateAll() {
	            this.update(new Date(this.now1), 1);
	            this.range && this.update(new Date(this.now2), 2);
	        },
	        //点击时间输入框的时候触发
	        click: function click() {
	            var self = this;
	            self.time1 = self.parse(self.startTime) || self.parse(self.time);
	            self.now1 = self.parse(self.startTime) || new Date();
	            if (self.range) {
	                self.initRanges();
	                self.time2 = self.parse(self.endTime);
	                self.now2 = self.parse(self.endTime) || new Date();
	            }
	            var rect = this.$el.getBoundingClientRect(),
	                right = document.documentElement.clientWidth - rect.left;
	            right < (self.range ? 441 : 214) && right < rect.left ? self.left = true : self.left = false;
	            self.show = !self.show;
	        },
	        //选择时间
	        select: function select(item, no) {
	            var self = this;
	            self.hidePanel();
	            if (item.status.indexOf('mz-calendar-disabled') !== -1) {
	                return;
	            }
	            self['now' + no] = new Date(item.time);
	            self['time' + no] = new Date(item.time);
	            if (!self.range) {
	                self.time = self.getOutTime(item.time);
	                self.show = false;
	            } else if (!self.confirm) {
	                self[no === 1 ? 'startTime' : 'endTime'] = self.getOutTime(item.time);
	            }
	        },
	        //确认
	        ok: function ok() {
	            var self = this;
	            self.show = false;
	            if (self.range && self.confirm) {
	                self.startTime = self.getOutTime(self.time1);
	                self.endTime = self.getOutTime(self.time2);
	                self.onConfirm && self.onConfirm(self.startTime, self.endTime);
	            }
	        },
	        //选择范围
	        selectRange: function selectRange(item) {
	            var self = this;
	            self.now1 = new Date(item.start);
	            self.now2 = new Date(item.end);
	            self.time1 = new Date(item.start);
	            self.time2 = new Date(item.end);
	            self.startTime = self.getOutTime(item.start);
	            self.endTime = self.getOutTime(item.end);
	            self.hidePanel();
	        },
	        //根据输出类型，获取输出的时间
	        getOutTime: function getOutTime(time) {
	            var type = this.time ? (0, _typeof3.default)(this.time) : (0, _typeof3.default)(this.startTime);
	            if (type === 'number') {
	                return time.getTime();
	            } else if (type === 'object') {
	                return new Date(time);
	            } else {
	                return this.stringify(time);
	            }
	        },
	        //更新时间
	        update: function update(time, no) {
	            var i,
	                tmpTime,
	                curFirstDay,
	                lastDay,
	                curDay,
	                day,
	                arr = [];
	            time.setDate(0); //切换到上个月最后一天
	            curFirstDay = time.getDay(); //星期几
	            lastDay = time.getDate(); //上个月的最后一天
	            for (i = curFirstDay; i > 0; i--) {
	                day = lastDay - i + 1;
	                tmpTime = new Date(time.getFullYear(), time.getMonth(), day);
	                tmpTime = this.parse(tmpTime, no === 2);
	                arr.push({
	                    status: this.getTimeStatus(tmpTime, no) || 'mz-calendar-lastmonth',
	                    title: this.stringify(tmpTime),
	                    text: day,
	                    time: tmpTime
	                });
	            }
	            time.setMonth(time.getMonth() + 2, 0); //切换到当前月的最后一天
	            curDay = time.getDate(); //当前月的最后一天
	            time.setDate(1);
	            for (i = 1; i <= curDay; i++) {
	                tmpTime = new Date(time.getFullYear(), time.getMonth(), i);
	                tmpTime = this.parse(tmpTime, no === 2);
	                arr.push({
	                    status: this.getTimeStatus(tmpTime, no),
	                    title: this.stringify(tmpTime),
	                    text: i,
	                    time: tmpTime
	                });
	            }
	            //下个月的前几天
	            for (i = 1; arr.length < 42; i++) {
	                tmpTime = new Date(time.getFullYear(), time.getMonth() + 1, i);
	                tmpTime = this.parse(tmpTime, no === 2);
	                arr.push({
	                    status: this.getTimeStatus(tmpTime, no) || 'mz-calendar-nextmonth',
	                    title: this.stringify(tmpTime),
	                    text: i,
	                    time: tmpTime
	                });
	            }
	            this['date' + no] = arr;
	        },
	        //获取时间状态
	        getTimeStatus: function getTimeStatus(time, no, format) {
	            var status = '',
	                curTime = new Date(),
	                selTime = this['time' + no],
	                tmpTimeVal = this.stringify(time, format || 'yyyy-MM-dd'),
	                //需要查询状态的时间字符串值
	            curTimeVal = this.stringify(curTime, format || 'yyyy-MM-dd'),
	                //当前时间字符串值
	            selTimeVal = this.stringify(selTime, format || 'yyyy-MM-dd'); //选中时间字符串值
	            if (tmpTimeVal === selTimeVal) {
	                status = 'mz-calendar-selected';
	            } else if (tmpTimeVal === curTimeVal) {
	                status = 'mz-calendar-today';
	            }
	            if (this.time1 && this.time2 && time >= this.time1 && time <= this.time2) {
	                status += ' mz-calendar-inrange';
	            }
	            if (no == 1 && this.time2) {
	                var minTime = new Date(this.time2);
	                if (this.maxRange) {
	                    minTime.setDate(minTime.getDate() - this.maxRange);
	                    if (format === 'yyyy') {
	                        minTime = new Date(minTime.getFullYear(), 0, 1);
	                    }
	                    if (format === 'yyyy-MM') {
	                        minTime = new Date(minTime.getFullYear(), 0, 1);
	                    }
	                    if (time < minTime || time > this.time2) {
	                        status += ' mz-calendar-disabled';
	                    }
	                } else if (time > this.time2) {
	                    status += ' mz-calendar-disabled';
	                }
	                if (time > this.time2) {
	                    status += ' mz-calendar-disabled';
	                }
	            }
	            if (no == 2 && this.time1) {
	                var maxTime = new Date(this.time1);
	                if (this.maxRange) {
	                    maxTime.setDate(maxTime.getDate() + this.maxRange);
	                    if (format === 'yyyy') {
	                        maxTime = new Date(maxTime.getFullYear(), 11, 1);
	                    }
	                    if (format === 'yyyy-MM') {
	                        maxTime = new Date(maxTime.getFullYear(), maxTime.getMonth() + 1, 1);
	                    }
	                    if (time > maxTime || time < this.time1) {
	                        status += ' mz-calendar-disabled';
	                    }
	                } else if (time < this.time1) {
	                    status += ' mz-calendar-disabled';
	                }
	            }
	            return status;
	        },
	        //将Date转化为指定格式的String
	        stringify: function stringify(time, format) {
	            if (!time) {
	                return '';
	            }
	            format = format || this.format;
	            var year = time.getFullYear(),
	                //年份
	            month = time.getMonth() + 1,
	                //月份
	            day = time.getDate(),
	                //日
	            hours24 = time.getHours(),
	                //小时
	            hours = hours24 % 12 === 0 ? 12 : hours24 % 12,
	                minutes = time.getMinutes(),
	                //分
	            seconds = time.getSeconds(),
	                //秒
	            milliseconds = time.getMilliseconds(); //毫秒
	            var map = {
	                yyyy: year,
	                MM: ('0' + month).slice(-2),
	                M: month,
	                dd: ('0' + day).slice(-2),
	                d: day,
	                HH: ('0' + hours24).slice(-2),
	                H: hours24,
	                hh: ('0' + hours).slice(-2),
	                h: hours,
	                mm: ('0' + minutes).slice(-2),
	                m: minutes,
	                ss: ('0' + seconds).slice(-2),
	                s: seconds,
	                S: milliseconds
	            };
	            return format.replace(/y+|M+|d+|H+|h+|m+|s+|S+/g, function (str) {
	                return map[str];
	            });
	        },
	        //显示年份选择器
	        showYear: function showYear(no) {
	            var name = 'showYear' + no;
	            this.hidePanel(name);
	            this[name] = !this[name];
	            var time = new Date(this['now' + no] || new Date()),
	                num = Math.floor(time.getFullYear() % 10),
	                //获取当前时间个位数
	            arr = [];
	            time.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
	            time.setFullYear(time.getFullYear() - num);
	            while (arr.length < 10) {
	                no === 2 && time.setMonth(time.getMonth() + 1, 0);
	                arr.push({
	                    year: time.getFullYear(),
	                    status: this.getTimeStatus(time, no, 'yyyy')
	                });
	                time.setDate(1);
	                time.setFullYear(time.getFullYear() + 1);
	            }
	            this['years' + no] = arr;
	        },
	        //显示月份选择器
	        showMonth: function showMonth(no) {
	            var name = 'showMonth' + no;
	            this.hidePanel(name);
	            this[name] = !this[name];
	            var time = new Date(this['now' + no] || new Date()),
	                arr = [];
	            while (arr.length < 12) {
	                time.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
	                time.setMonth(arr.length);
	                no === 2 && time.setMonth(time.getMonth() + 1, 0);
	                arr.push({
	                    month: arr.length + 1,
	                    status: this.getTimeStatus(time, no, 'yyyy-MM')
	                });
	            }
	            this['months' + no] = arr;
	        },
	        //切换年份选择器
	        changeYearRange: function changeYearRange(no, flag) {
	            var arr = this['years' + no],
	                time = new Date(this['time' + no] || new Date());
	            for (var i in arr) {
	                var item = arr[i],
	                    year = item.year + 10 * flag;
	                time.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
	                time.setFullYear(year);
	                no === 2 && time.setMonth(time.getMonth() + 1, 0);
	                item.year = year;
	                item.status = this.getTimeStatus(time, no);
	            }
	        },
	        //改变年份
	        changeYear: function changeYear(flag, no) {
	            var now = this['now' + no];
	            now.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
	            now.setFullYear(now.getFullYear() + flag);
	            no === 2 && now.setMonth(now.getMonth() + 1, 0);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        //改变月份
	        changeMonth: function changeMonth(flag, no) {
	            var now = this['now' + no];
	            now.setDate(1); //先设置为第一天，因为月份天数不一样，要不存在bug
	            now.setMonth(now.getMonth() + flag);
	            no === 2 && now.setMonth(now.getMonth() + 1, 0);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        //选择年份
	        selectYear: function selectYear(item, no) {
	            if (item.status.indexOf('mz-calendar-disabled') !== -1) {
	                return;
	            }
	            var now = this['now' + no];
	            now.setFullYear(item.year);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        //选择月份
	        selectMonth: function selectMonth(item, no) {
	            if (item.status.indexOf('mz-calendar-disabled') !== -1) {
	                return;
	            }
	            var now = this['now' + no];
	            now.setMonth(item.month - 1);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        //隐藏所有面板
	        hidePanel: function hidePanel(name) {
	            ['showYear1', 'showYear2', 'showMonth1', 'showMonth2'].map(function (item) {
	                if (item !== name) {
	                    this[item] = false;
	                }
	            }.bind(this));
	        },
	        //清除时间
	        clear: function clear() {
	            var self = this;
	            self.time1 = self.time2 = self.startTime = self.endTime = self.time = null;
	            self.now1 = new Date();
	            self.now2 = new Date();
	        }
	    }
	    // </script>
	
	
	    // <style>
	
	    // /*!
	
	    //  * vue-datepicker v0.1.2
	
	    //  * https://github.com/weifeiyue/vue-datepicker
	
	    //  * (c) 2016 weifeiyue
	
	    //  * Released under the MIT License.
	
	    //  */
	
	    // .mz-datepicker {
	
	    //     display: inline-block;
	
	    //     vertical-align: middle;
	
	    //     position: relative;
	
	    //     font-family: 'Microsoft YaHei', serif;
	
	    // }
	
	    // .mz-datepicker > input {
	
	    //     font-family: 'Microsoft YaHei', serif;
	
	    //     color: #666;
	
	    //     border: 1px solid #d9d9d9;
	
	    //     height: 30px;
	
	    //     box-sizing: border-box;
	
	    //     outline: none;
	
	    //     padding: 0 30px 0 7px;
	
	    //     font-size: 13px;
	
	    //     width: 100%;
	
	    //     cursor: pointer;
	
	    // }
	
	    // .mz-datepicker > input:disabled {
	
	    //     cursor: not-allowed;
	
	    //     background-color: #ebebe4;
	
	    // }
	
	    // .mz-datepicker > input:focus, .mz-datepicker > input.focus {
	
	    //     border-color: #3bb4f2;
	
	    //     -webkit-box-shadow: 0 0 5px rgba(59, 180, 242, .3);
	
	    //     box-shadow: 0 0 5px rgba(59, 180, 242, .3);
	
	    // }
	
	    // .mz-datepicker > i {
	
	    //     display: inline-block;
	
	    //     position: absolute;
	
	    //     width: 30px;
	
	    //     height: 30px;
	
	    //     top: 0;
	
	    //     right: 0;
	
	    //     background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAACZmZl+9SADAAAAAXRSTlMAQObYZgAAAB9JREFUCNdjEBSAov//GSYKMjQwAhlAEoTaHyIzIFIAFm0NVxDW3twAAAAASUVORK5CYII=') no-repeat 50% 50%;
	
	    // }
	
	    // .mz-datepicker > a {
	
	    //     display: none;
	
	    //     position: absolute;
	
	    //     width: 30px;
	
	    //     height: 30px;
	
	    //     top: 0;
	
	    //     right: 0;
	
	    //     cursor: pointer;
	
	    //     background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAMFBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmy/KNBAAAAD3RSTlMAeQfv0sgfSr2XgBXh4Em9LfYxAAAAdElEQVQI12NgYGAqXFgEpIAM4f//PwuBWFv/A8HXDUCh+P8gEMTAwPjf9v//P/YfGRiU/7v5A9FnBYb6/z9SvmT8/1/AIP//f9g0oFoBhvX////kBGpZgBBDqEPoBZpn8///X6B5CDsQ9iLcAmI+XPgISAEABvtVL6xNmm0AAAAASUVORK5CYII=') no-repeat 50% 50%;
	
	    // }
	
	    // .mz-datepicker > a:hover {
	
	    //     opacity: 0.8;
	
	    // }
	
	    // .mz-datepicker:hover > a {
	
	    //     display: block;
	
	    // }
	
	    // .mz-datepicker:hover > a + i {
	
	    //     display: none;
	
	    // }
	
	    // .mz-datepicker-popup {
	
	    //     font-size: 12px;
	
	    //     position: absolute;
	
	    //     top: 100%;
	
	    //     margin-top: 1px;
	
	    //     border: 1px solid #d9d9d9;
	
	    //     box-shadow: 0 1px 6px rgba(99, 99, 99, 0.2);
	
	    //     padding: 8px;
	
	    //     -webkit-user-select: none;
	
	    //     -moz-user-select: none;
	
	    //     -ms-user-select: none;
	
	    //     user-select: none;
	
	    //     background: #fff;
	
	    //     outline: none;
	
	    //     z-index: 1;
	
	    // }
	
	    // .mz-datepicker-popup-left{
	
	    //     right: 0;
	
	    // }
	
	    // .mz-datepicker-popup-transition {
	
	    //     transition: all 200ms ease;
	
	    //     opacity: 1;
	
	    //     transform: scaleY(1);
	
	    //     transform-origin: center top;
	
	    // }
	
	    // .mz-datepicker-popup-enter, .mz-datepicker-popup-leave {
	
	    //     opacity: 0;
	
	    //     transform: scaleY(0)
	
	    // }
	
	    // .mz-calendar {
	
	    //     width: 196px;
	
	    //     display: inline-block;
	
	    //     vertical-align: middle;
	
	    //     position: relative;
	
	    // }
	
	    // .mz-calendar-header {
	
	    //     text-align: center;
	
	    //     color: #999;
	
	    //     position: relative;
	
	    //     line-height: 34px;
	
	    // }
	
	    // .mz-calendar-header a {
	
	    //     cursor: pointer;
	
	    // }
	
	    // .mz-calendar-header a:hover {
	
	    //     color: #1284e7;
	
	    // }
	
	    // .mz-calendar-prev-year, .mz-calendar-prev-month, .mz-calendar-next-month, .mz-calendar-next-year {
	
	    //     position: absolute;
	
	    //     font-size: 16px;
	
	    // }
	
	    // .mz-calendar-prev-year {
	
	    //     left: 4px;
	
	    // }
	
	    // .mz-calendar-prev-month {
	
	    //     left: 24px;
	
	    // }
	
	    // .mz-calendar-next-month {
	
	    //     right: 24px;
	
	    // }
	
	    // .mz-calendar-next-year {
	
	    //     right: 4px;
	
	    // }
	
	    // .mz-calendar-year-select, .mz-calendar-month-select {
	
	    //     font-weight: 700;
	
	    //     color: #666;
	
	    //     padding: 0 2px;
	
	    // }
	
	    // .mz-calendar-footer {}
	
	    // .mz-calendar th, .mz-calendar td {
	
	    //     width: 28px;
	
	    //     height: 28px;
	
	    //     text-align: center;
	
	    //     box-sizing: border-box;
	
	    // }
	
	    // .mz-calendar th {
	
	    //     font-weight: normal;
	
	    // }
	
	    // .mz-calendar td {
	
	    //     cursor: pointer;
	
	    // }
	
	    // .mz-calendar td:hover, .mz-calendar-inrange {
	
	    //     background: #eaf8fe;
	
	    // }
	
	    // .mz-calendar-lastmonth, .mz-calendar-nextmonth {
	
	    //     color: #ccc;
	
	    // }
	
	    // .mz-calendar-today {
	
	    //     border: solid 1px #1284e7;
	
	    //     font-weight: bold;
	
	    //     color: #1284e7;
	
	    // }
	
	    // .mz-calendar-selected {
	
	    //     color: #fff;
	
	    //     font-weight: bold;
	
	    //     background: #1284e7 !important;
	
	    // }
	
	    // .mz-calendar-disabled {
	
	    //     cursor: not-allowed !important;
	
	    //     color: #bcbcbc !important;
	
	    //     background: #f3f3f3 !important;
	
	    // }
	
	    // .mz-calendar-top {
	
	    //     color: #616161;
	
	    //     padding-bottom: 8px;
	
	    //     margin-bottom: 8px;
	
	    //     border-bottom: 1px solid #f3f3f3;
	
	    // }
	
	    // .mz-calendar-top a {
	
	    //     display: inline-block;
	
	    //     vertical-align: middle;
	
	    //     height: 16px;
	
	    //     cursor: pointer;
	
	    // }
	
	    // .mz-calendar-top a:hover {
	
	    //     color: #77BDFB;
	
	    // }
	
	    // .mz-calendar-top a.on {
	
	    //     font-weight: bold;
	
	    //     color: #1284e7;
	
	    // }
	
	    // .mz-calendar-top i {
	
	    //     content: '|';
	
	    //     display: inline-block;
	
	    //     width: 1px;
	
	    //     margin: 0 10px;
	
	    //     height: 16px;
	
	    //     background: #616161;
	
	    //     vertical-align: middle;
	
	    // }
	
	    // .mz-calendar-bottom {
	
	    //     margin-top: 8px;
	
	    //     padding-top: 8px;
	
	    //     border-top: 1px solid #f3f3f3;
	
	    //     text-align: right;
	
	    // }
	
	    // .mz-calendar-btn {
	
	    //     display: inline-block;
	
	    //     height: 22px;
	
	    //     text-align: center;
	
	    //     vertical-align: middle;
	
	    //     cursor: pointer;
	
	    //     border-radius: 2px;
	
	    //     -webkit-transition: all .3s ease;
	
	    //     transition: all .3s ease;
	
	    //     padding: 0 10px;
	
	    //     line-height: 22px;
	
	    //     color: #1284e7;
	
	    //     margin-left: 5px;
	
	    // }
	
	    // .mz-calendar-btn:hover {
	
	    //     color: #60B3FB;
	
	    // }
	
	    // .mz-calendar-btn:active {
	
	    //     color: #006CCA;
	
	    // }
	
	    // .mz-calendar-btn.ok {
	
	    //     background: #1284e7;
	
	    //     color: #fff;
	
	    // }
	
	    // .mz-calendar-btn.ok:hover {
	
	    //     background: #60B3FB;
	
	    // }
	
	    // .mz-calendar-btn.ok:active {
	
	    //     background: #006CCA;
	
	    // }
	
	    // .mz-calendar-range {
	
	    //     width: 431px;
	
	    // }
	
	    // .mz-calendar-separator {
	
	    //     display: inline-block;
	
	    //     vertical-align: middle;
	
	    //     width: 31px;
	
	    //     position: relative;
	
	    // }
	
	    // .mz-calendar-separator::before {
	
	    //     content: "";
	
	    //     position: absolute;
	
	    //     width: 1px;
	
	    //     height: 180px;
	
	    //     background: #e0e0e0;
	
	    //     left: 50%;
	
	    //     top: 50%;
	
	    //     margin-top: -90px;
	
	    // }
	
	    // .mz-calendar-separator span {
	
	    //     position: absolute;
	
	    //     width: 100%;
	
	    //     text-align: center;
	
	    //     height: 30px;
	
	    //     line-height: 30px;
	
	    //     background: #fff;
	
	    //     top: 50%;
	
	    //     margin-top: -15px;
	
	    // }
	
	    // .mz-calendar-year-panel {
	
	    //     position: absolute;
	
	    //     left: 0;
	
	    //     top: 34px;
	
	    //     width: 100%;
	
	    //     height: 196px;
	
	    //     background: #fff;
	
	    // }
	
	    // .mz-calendar-year-panel-year, .mz-calendar-year-panel-prev,.mz-calendar-year-panel-next {
	
	    //     display: inline-block;
	
	    //     text-align: center;
	
	    //     width: 50%;
	
	    //     height: 32px;
	
	    //     line-height: 32px;
	
	    //     vertical-align: middle;
	
	    //     box-sizing: border-box;
	
	    // }
	
	    // .mz-calendar-year-panel-prev, .mz-calendar-year-panel-next {
	
	    //     width: 100%;
	
	    //     height: 18px;
	
	    //     position: relative;
	
	    //     display: block;
	
	    // }
	
	    // .mz-calendar-year-panel-prev::before,.mz-calendar-year-panel-next::before{
	
	    //     content: '';
	
	    //     display: inline-block;
	
	    //     width: 0;
	
	    //     height: 0;
	
	    //     border-left: 5px solid transparent;
	
	    //     border-right: 5px solid transparent;
	
	    //     position: absolute;
	
	    //     left: 50%;
	
	    //     top: 50%;
	
	    //     margin-left: -3px;
	
	    //     margin-top: -3px;
	
	    // }
	
	    // .mz-calendar-year-panel-prev::before{
	
	    //     border-bottom: 5px solid #999;
	
	    // }
	
	    // .mz-calendar-year-panel-next::before{
	
	    //     border-top: 5px solid #999;
	
	    // }
	
	    // .mz-calendar-year-panel-year:hover,.mz-calendar-month-panel-month:hover, .mz-calendar-year-panel-prev:hover,.mz-calendar-year-panel-next:hover {
	
	    //     background: #eaf8fe;
	
	    //     cursor: pointer;
	
	    // }
	
	    // .mz-calendar-month-panel {
	
	    //     position: absolute;
	
	    //     left: 0;
	
	    //     top: 34px;
	
	    //     width: 100%;
	
	    //     height: 196px;
	
	    //     background: #fff;
	
	    // }
	
	    // .mz-calendar-month-panel-month {
	
	    //     display: inline-block;
	
	    //     text-align: center;
	
	    //     width: 33.33%;
	
	    //     height: 25%;
	
	    //     line-height: 49px;
	
	    //     vertical-align: middle;
	
	    //     box-sizing: border-box;
	
	    // }
	
	    // .mz-calendar-panel-transition {
	
	    //     transition: all 200ms ease;
	
	    //     opacity: 1;
	
	    //     transform: scale(1);
	
	    //     transform-origin: center center;
	
	    // }
	
	    // .mz-calendar-panel-enter, .mz-calendar-panel-leave {
	
	    //     opacity: 0;
	
	    //     transform: scale(0)
	
	    // }
	
	    // </style>
	
	};

/***/ }),
/* 229 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mz-datepicker\" v-bind:style=\"{width:width+'px'}\"> \r\n            <input :value=\"value\" readonly :disabled=\"disabled\" :placeholder=\"placeholder\" :class=\"{focus:show}\" @click=\"click\" @mousedown=\"$event.preventDefault()\"/><a v-if=\"clearable&&value\" @click.stop=\"clear\"></a><i @click=\"click\"></i> \r\n            <div class=\"mz-datepicker-popup\" :class=\"{'mz-datepicker-popup-left':left}\" v-if=\"show\" transition=\"mz-datepicker-popup\" tabindex=\"-1\" @blur=\"show = false\" @dblclick=\"show = false\" @mousedown=\"$event.preventDefault()\" @keyup.up=\"changeMonth(-1,1)\" @keyup.down=\"changeMonth(1,1)\" @keyup.left=\"changeYear(-1,1)\" @keyup.right=\"changeYear(1,1)\" v-el:popup> \r\n            <div class=\"mz-calendar-top\" v-if=\"range&&!en\"> \r\n                <template v-for=\"item in ranges\"> \r\n                    <i v-if=\"$index\"></i><a v-text=\"item.name\" @click=\"selectRange(item)\"></a> \r\n                </template> \r\n            </div> \r\n            <div :class=\"{'mz-calendar-range':range}\"> \r\n                <template v-for=\"no in count\"> \r\n                    <div class=\"mz-calendar\"> \r\n                        <div class=\"mz-calendar-header\"> \r\n                            <a class=\"mz-calendar-prev-year\" :title=\"prevYearTitle\" @click=\"changeYear(-1,no+1)\">«</a> \r\n                            <a class=\"mz-calendar-prev-month\" :title=\"prevMonthTitle\" @click=\"changeMonth(-1,no+1)\">‹</a> \r\n                            <a v-if=\"!en\" class=\"mz-calendar-year-select\" :title=\"selectYearTitle\" @click=\"showYear(no+1)\">{{this['now'+(no+1)].getFullYear()+(en?\"\":\"年\")}}</a> \r\n                            <a v-if=\"!en\" class=\"mz-calendar-month-select\" :title=\"selectMonthTitle\" @click=\"showMonth(no+1)\">{{months[this['now'+(no+1)].getMonth()]}}</a> \r\n                            <a v-if=\"en\" class=\"mz-calendar-month-select\" :title=\"selectMonthTitle\" @click=\"showMonth(no+1)\">{{months[this['now'+(no+1)].getMonth()]}}</a> \r\n                            <a v-if=\"en\" class=\"mz-calendar-year-select\" :title=\"selectYearTitle\" @click=\"showYear(no+1)\">{{this['now'+(no+1)].getFullYear()+(en?\"\":\"年\")}}</a> \r\n                            <a class=\"mz-calendar-next-month\" :title=\"nextMonthTitle\" @click=\"changeMonth(1,no+1)\">›</a> \r\n                            <a class=\"mz-calendar-next-year\" :title=\"nextYearTitle\" @click=\"changeYear(1,no+1)\">»</a> \r\n                        </div> \r\n                        <table cellspacing=\"0\" cellpadding=\"0\"> \r\n                        <tr><th v-for=\"day in days\" v-text=\"day\"></th></tr> \r\n                        <tr v-if=\"this['date'+(no+1)]\" v-for=\"i in 6\"><td v-for=\"j in 7\" v-text=\"this['date'+(no+1)][i * 7 + j].text\" :title=\"this['date'+(no+1)][i * 7 + j].title\" :class=\"this['date'+(no+1)][i * 7 + j].status\" @click=\"select(this['date'+(no+1)][i * 7 + j], no+1)\"></td></tr> \r\n                        </table> \r\n                        <div class=\"mz-calendar-year-panel\" transition=\"mz-calendar-panel\" v-if=\"this['showYear'+(no+1)]\"><a class=\"mz-calendar-year-panel-prev\" @click=\"changeYearRange(no+1,-1)\"></a><a class=\"mz-calendar-year-panel-year\" v-for=\"item in this['years'+(no+1)]\" :class=\"item.status\" @click=\"selectYear(item,no+1)\">{{item.year+(en?\"\":\"年\")}}</a><a class=\"mz-calendar-year-panel-next\" @click=\"changeYearRange(no+1,1)\"></a></div> \r\n                        <div class=\"mz-calendar-month-panel\" transition=\"mz-calendar-panel\" v-if=\"this['showMonth'+(no+1)]\"><a v-for=\"item in this['months'+(no+1)]\" class=\"mz-calendar-month-panel-month\" :class=\"item.status\" @click=\"selectMonth(item,no+1)\">{{months[item.month-1].substr(0,3)}}</a></div> \r\n                    </div> \r\n                    <div class=\"mz-calendar-separator\" v-if=\"range&&no===0\"><span>{{toTitle}}</span></div> \r\n                </template> \r\n            </div> \r\n            <div class=\"mz-calendar-bottom\" v-if=\"range&&confirm\"><a class=\"mz-calendar-btn ok\" @click=\"ok\">{{okTitle}}</a></div> \r\n            </div> \r\n        </div>";

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-strap.js.map