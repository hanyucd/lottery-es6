/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _lottery = __webpack_require__(2);

	var _lottery2 = _interopRequireDefault(_lottery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _base = __webpack_require__(3);

	var _base2 = _interopRequireDefault(_base);

	var _timer = __webpack_require__(4);

	var _timer2 = _interopRequireDefault(_timer);

	var _calculate = __webpack_require__(5);

	var _calculate2 = _interopRequireDefault(_calculate);

	var _interface = __webpack_require__(6);

	var _interface2 = _interopRequireDefault(_interface);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * 定时器模块
	 */

	var Timer = function () {
	  function Timer() {
	    _classCallCheck(this, Timer);
	  }

	  _createClass(Timer, [{
	    key: 'countDown',
	    value: function countDown(end, update, handle) {
	      var now = new Date().getTime();
	      var self = this;

	      if (now - end) {
	        handle.call(self);
	      } else {
	        var d_to_ms = 1000 * 60 * 60 * 24; // 一天的毫秒数
	        var h_to_ms = 1000 * 60 * 60; // 一小时的毫秒数
	        var m_to_ms = 1000 * 60; // 一分钟的毫秒数
	        var s_to_ms = 1000; // 一秒的毫秒数

	        var last_time = end - now; // 时间差

	        var d = Math.floor(last_time / d_to_ms);
	        var h = Math.floor((last_time - d * d_to_ms) / h_to_ms);
	        var m = Math.floor((last_time - d * d_to_ms - h * h_to_ms) / m_to_ms);
	        var s = Math.floor((last_time - d * d_to_ms - h * h_to_ms - m * m_to_ms) / s_to_ms);

	        var arr = [];
	        if (d > 0) arr.push(d + '\u5929');
	        if (h > 0 || arr.length > 0) arr.push(h + '\u5C0F\u65F6');
	        if (m > 0 || arr.length > 0) arr.push(m + '\u5206\u949F');
	        if (s > 0 || arr.length > 0) arr.push(s + '\u79D2');

	        self.last_time = arr.join('');
	        update.call(self, arr.join(''));

	        setTimeout(function () {
	          self.countDown(end, update, handle);
	        }, 1000);
	      }
	    }
	  }]);

	  return Timer;
	}();

	exports.default = Timer;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ]);