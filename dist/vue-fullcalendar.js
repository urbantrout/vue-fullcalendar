/*!
 * vue-fullcalendar v1.0.9
 * (c) 2018 Sunny Wang <sunnywang0104@163.com> 
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFullcalendar"] = factory();
	else
		root["VueFullcalendar"] = factory();
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
	
	var _fullCalendar = __webpack_require__(1);
	
	var _fullCalendar2 = _interopRequireDefault(_fullCalendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var fc = _fullCalendar2.default;
	
	module.exports = fc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)
	
	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(7),
	  /* template */
	  __webpack_require__(212),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/harald/Projekte/vue-fullcalendar/src/fullCalendar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] fullCalendar.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0de35d15", Component.options)
	  } else {
	    hotAPI.reload("data-v-0de35d15", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0de35d15!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fullCalendar.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0de35d15!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fullCalendar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.comp-full-calendar {\n  padding: 20px;\n  background: #fff;\n  max-width: 960px;\n  margin: 0 auto;\n}\n.comp-full-calendar ul,\n  .comp-full-calendar p {\n    margin: 0;\n    padding: 0;\n}\n.full-calendar-body {\n  margin-top: 20px;\n}\n.full-calendar-body .weeks {\n    display: flex;\n    border-top: 1px solid #e0e0e0;\n    border-bottom: 1px solid #e0e0e0;\n    border-left: 1px solid #e0e0e0;\n}\n.full-calendar-body .weeks .week {\n      flex: 1;\n      text-align: center;\n      border-right: 1px solid #e0e0e0;\n}\n.full-calendar-body .dates {\n    position: relative;\n}\n.full-calendar-body .dates .week-row {\n      border-left: 1px solid #e0e0e0;\n      display: flex;\n}\n.full-calendar-body .dates .week-row .day-cell {\n        flex: 1;\n        min-height: 112px;\n        padding: 4px;\n        border-right: 1px solid #e0e0e0;\n        border-bottom: 1px solid #e0e0e0;\n}\n.full-calendar-body .dates .week-row .day-cell .day-number {\n          text-align: right;\n}\n.full-calendar-body .dates .week-row .day-cell.today {\n          background-color: #fcf8e3;\n}\n.full-calendar-body .dates .week-row .day-cell.not-cur-month .day-number {\n          color: rgba(0, 0, 0, 0.24);\n}\n.full-calendar-body .dates .dates-events {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n}\n.full-calendar-body .dates .dates-events .events-week {\n        display: flex;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day {\n          cursor: pointer;\n          flex: 1;\n          min-height: 112px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .day-number {\n            text-align: right;\n            padding: 4px 5px 4px 4px;\n            opacity: 0;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day.not-cur-month .day-number {\n            color: rgba(0, 0, 0, 0.24);\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #c7e6fd;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-start {\n              margin-left: 4px;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-end {\n              margin-right: 4px;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-opacity {\n              opacity: 0;\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-active {\n              background-color: rgba(0, 0, 0, 0.3);\n}\n.full-calendar-body .dates .dates-events .events-week .events-day .event-box .more-link {\n            cursor: pointer;\n            padding-left: 8px;\n            padding-right: 2px;\n            color: rgba(0, 0, 0, 0.38);\n            font-size: 14px;\n}\n.full-calendar-body .dates .more-events {\n      position: absolute;\n      width: 150px;\n      z-index: 2;\n      border: 1px solid #eee;\n      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n}\n.full-calendar-body .dates .more-events .more-header {\n        background-color: #eee;\n        padding: 5px;\n        display: flex;\n        align-items: center;\n        font-size: 14px;\n}\n.full-calendar-body .dates .more-events .more-header .title {\n          flex: 1;\n}\n.full-calendar-body .dates .more-events .more-header .close {\n          margin-right: 2px;\n          cursor: pointer;\n          font-size: 16px;\n}\n.full-calendar-body .dates .more-events .more-body {\n        height: 146px;\n        overflow: hidden;\n}\n.full-calendar-body .dates .more-events .more-body .body-list {\n          height: 144px;\n          padding: 5px;\n          overflow: auto;\n          background-color: #fff;\n}\n.full-calendar-body .dates .more-events .more-body .body-list .body-item {\n            cursor: pointer;\n            font-size: 12px;\n            background-color: #c7e6fd;\n            margin-bottom: 2px;\n            color: rgba(0, 0, 0, 0.87);\n            padding: 0 0 0 4px;\n            height: 18px;\n            line-height: 18px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n", ""]);
	
	// exports


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dateFns = __webpack_require__(8);
	
	var _eventCard = __webpack_require__(167);
	
	var _eventCard2 = _interopRequireDefault(_eventCard);
	
	var _header = __webpack_require__(207);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: {
	    'event-card': _eventCard2.default,
	    'fc-header': _header2.default
	  },
	
	  filters: {
	    localeWeekDay: function localeWeekDay(weekday, firstDay, locale) {
	      return (0, _dateFns.format)(weekday, 'ddd', { locale: locale });
	    }
	  },
	
	  props: {
	    events: {
	      // events will be displayed on calendar
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    locale: {
	      type: String,
	      default: 'en'
	    },
	    firstDay: {
	      type: Number,
	      validator: function validator(val) {
	        var res = parseInt(val, 10);
	        return res >= 0 && res <= 6;
	      },
	
	      default: 0
	    }
	  },
	
	  data: function data() {
	    return {
	      currentMonth: (0, _dateFns.startOfMonth)(Date()),
	      isLismit: true,
	      eventLimit: 3,
	      showMore: false,
	      morePos: {
	        top: 0,
	
	        left: 0
	      },
	      selectDay: {},
	      activeEvent: {}
	    };
	  },
	
	
	  computed: {
	    currentDates: function currentDates() {
	      return this.getCalendar();
	    }
	  },
	
	  mounted: function mounted() {
	    this.emitChangeMonth(this.currentMonth);
	  },
	
	
	  methods: {
	    dayNumber: function dayNumber(day) {
	      return (0, _dateFns.getDate)(day.date);
	    },
	    emitChangeMonth: function emitChangeMonth(firstDayOfMonth) {
	      this.currentMonth = (0, _dateFns.startOfMonth)(firstDayOfMonth);
	      this.activeEvent = null;
	
	      var start = void 0;
	      start = (0, _dateFns.subDays)(firstDayOfMonth, (0, _dateFns.getDay)(firstDayOfMonth));
	
	      if ((0, _dateFns.getDay)((0, _dateFns.startOfMonth)(firstDayOfMonth)) < this.firstDay) {
	        start = (0, _dateFns.subDays)(start, 7);
	      }
	
	      start = (0, _dateFns.addDays)(start, this.firstDay);
	      var end = (0, _dateFns.addWeeks)(firstDayOfMonth, 6);
	
	      this.$emit('changeMonth', start, end, firstDayOfMonth);
	    },
	    moreTitle: function moreTitle(date) {
	      if (!date) return '';
	      return (0, _dateFns.format)(date);
	    },
	    getCalendar: function getCalendar() {
	      // calculate 2d-array of each month
	      var date = (0, _dateFns.startOfMonth)(this.currentMonth);
	
	      var calendar = [];
	
	      for (var perWeek = 0; perWeek < 6; perWeek += 1) {
	        var week = [];
	
	        for (var perDay = 0; perDay < 7; perDay += 1) {
	          week.push({
	            date: date,
	            monthDay: date,
	            isToday: (0, _dateFns.isToday)(date),
	            isCurMonth: (0, _dateFns.isThisMonth)(this.currentMonth),
	            weekDay: perDay,
	            events: this.slotEvents(date)
	          });
	
	          date = (0, _dateFns.addDays)(date, 1);
	        }
	        calendar.push(week);
	      }
	
	      return calendar;
	    },
	    slotEvents: function slotEvents(date) {
	      // find all events start from this date
	      var thisDayEvents = this.events.filter(function (day) {
	        return (0, _dateFns.isAfter)(date, Date(day.start)) && (0, _dateFns.isBefore)(date, Date(day.end));
	      });
	
	      // sort by duration
	      thisDayEvents.sort(function (a, b) {
	        if (!a.cellIndex) return 1;
	        if (!b.cellIndex) return -1;
	        return a.cellIndex - b.cellIndex;
	      });
	
	      // mark cellIndex and place holder
	      for (var i = 0; i < thisDayEvents.length; i += 1) {
	        thisDayEvents[i].cellIndex = thisDayEvents[i].cellIndex || i + 1;
	        thisDayEvents[i].isShow = true;
	        thisDayEvents[i].isActive = thisDayEvents[i] === this.activeEvent;
	
	        if (thisDayEvents[i].cellIndex === i + 1 || i > 2) continue;
	        thisDayEvents.splice(i, 0, {
	          title: 'holder',
	          cellIndex: i + 1,
	          start: (0, _dateFns.format)(date),
	          end: (0, _dateFns.format)(date),
	          isShow: false
	        });
	      }
	
	      return thisDayEvents;
	    },
	    selectThisDay: function selectThisDay(day, jsEvent) {
	      this.selectDay = day;
	      this.showMore = true;
	      this.morePos = this.computePos(jsEvent.target);
	      this.morePos.top -= 100;
	      var events = day.events.filter(function (item) {
	        return item.isShow === true;
	      });
	      this.$emit('moreClick', day.date, events, jsEvent);
	    },
	    computePos: function computePos(target) {
	      var eventRect = target.getBoundingClientRect();
	      var pageRect = this.$refs.dates.getBoundingClientRect();
	      return {
	        left: eventRect.left - pageRect.left,
	        top: eventRect.top + eventRect.height - pageRect.top
	      };
	    },
	    dayClick: function dayClick(day, jsEvent) {
	      this.activeEvent = null;
	      this.$emit('dayClick', day, jsEvent);
	    },
	    eventClick: function eventClick(event, jsEvent) {
	      if (!event.isShow) return;
	
	      this.activeEvent = event;
	      jsEvent.stopPropagation();
	      var pos = this.computePos(jsEvent.target);
	      this.$emit('eventClick', event, jsEvent, pos);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = {
	  addDays: __webpack_require__(9),
	  addHours: __webpack_require__(12),
	  addISOYears: __webpack_require__(14),
	  addMilliseconds: __webpack_require__(13),
	  addMinutes: __webpack_require__(22),
	  addMonths: __webpack_require__(23),
	  addQuarters: __webpack_require__(25),
	  addSeconds: __webpack_require__(26),
	  addWeeks: __webpack_require__(27),
	  addYears: __webpack_require__(28),
	  areRangesOverlapping: __webpack_require__(29),
	  closestIndexTo: __webpack_require__(30),
	  closestTo: __webpack_require__(31),
	  compareAsc: __webpack_require__(32),
	  compareDesc: __webpack_require__(33),
	  differenceInCalendarDays: __webpack_require__(20),
	  differenceInCalendarISOWeeks: __webpack_require__(34),
	  differenceInCalendarISOYears: __webpack_require__(35),
	  differenceInCalendarMonths: __webpack_require__(36),
	  differenceInCalendarQuarters: __webpack_require__(37),
	  differenceInCalendarWeeks: __webpack_require__(39),
	  differenceInCalendarYears: __webpack_require__(40),
	  differenceInDays: __webpack_require__(41),
	  differenceInHours: __webpack_require__(42),
	  differenceInISOYears: __webpack_require__(44),
	  differenceInMilliseconds: __webpack_require__(43),
	  differenceInMinutes: __webpack_require__(46),
	  differenceInMonths: __webpack_require__(47),
	  differenceInQuarters: __webpack_require__(48),
	  differenceInSeconds: __webpack_require__(49),
	  differenceInWeeks: __webpack_require__(50),
	  differenceInYears: __webpack_require__(51),
	  distanceInWords: __webpack_require__(52),
	  distanceInWordsStrict: __webpack_require__(57),
	  distanceInWordsToNow: __webpack_require__(58),
	  eachDay: __webpack_require__(59),
	  endOfDay: __webpack_require__(60),
	  endOfHour: __webpack_require__(61),
	  endOfISOWeek: __webpack_require__(62),
	  endOfISOYear: __webpack_require__(64),
	  endOfMinute: __webpack_require__(65),
	  endOfMonth: __webpack_require__(66),
	  endOfQuarter: __webpack_require__(67),
	  endOfSecond: __webpack_require__(68),
	  endOfToday: __webpack_require__(69),
	  endOfTomorrow: __webpack_require__(70),
	  endOfWeek: __webpack_require__(63),
	  endOfYear: __webpack_require__(71),
	  endOfYesterday: __webpack_require__(72),
	  format: __webpack_require__(73),
	  getDate: __webpack_require__(78),
	  getDay: __webpack_require__(79),
	  getDayOfYear: __webpack_require__(74),
	  getDaysInMonth: __webpack_require__(24),
	  getDaysInYear: __webpack_require__(80),
	  getHours: __webpack_require__(82),
	  getISODay: __webpack_require__(83),
	  getISOWeek: __webpack_require__(76),
	  getISOWeeksInYear: __webpack_require__(84),
	  getISOYear: __webpack_require__(15),
	  getMilliseconds: __webpack_require__(85),
	  getMinutes: __webpack_require__(86),
	  getMonth: __webpack_require__(87),
	  getOverlappingDaysInRanges: __webpack_require__(88),
	  getQuarter: __webpack_require__(38),
	  getSeconds: __webpack_require__(89),
	  getTime: __webpack_require__(90),
	  getYear: __webpack_require__(91),
	  isAfter: __webpack_require__(92),
	  isBefore: __webpack_require__(93),
	  isDate: __webpack_require__(11),
	  isEqual: __webpack_require__(94),
	  isFirstDayOfMonth: __webpack_require__(95),
	  isFriday: __webpack_require__(96),
	  isFuture: __webpack_require__(97),
	  isLastDayOfMonth: __webpack_require__(98),
	  isLeapYear: __webpack_require__(81),
	  isMonday: __webpack_require__(99),
	  isPast: __webpack_require__(100),
	  isSameDay: __webpack_require__(101),
	  isSameHour: __webpack_require__(102),
	  isSameISOWeek: __webpack_require__(104),
	  isSameISOYear: __webpack_require__(106),
	  isSameMinute: __webpack_require__(107),
	  isSameMonth: __webpack_require__(109),
	  isSameQuarter: __webpack_require__(110),
	  isSameSecond: __webpack_require__(112),
	  isSameWeek: __webpack_require__(105),
	  isSameYear: __webpack_require__(114),
	  isSaturday: __webpack_require__(115),
	  isSunday: __webpack_require__(116),
	  isThisHour: __webpack_require__(117),
	  isThisISOWeek: __webpack_require__(118),
	  isThisISOYear: __webpack_require__(119),
	  isThisMinute: __webpack_require__(120),
	  isThisMonth: __webpack_require__(121),
	  isThisQuarter: __webpack_require__(122),
	  isThisSecond: __webpack_require__(123),
	  isThisWeek: __webpack_require__(124),
	  isThisYear: __webpack_require__(125),
	  isThursday: __webpack_require__(126),
	  isToday: __webpack_require__(127),
	  isTomorrow: __webpack_require__(128),
	  isTuesday: __webpack_require__(129),
	  isValid: __webpack_require__(77),
	  isWednesday: __webpack_require__(130),
	  isWeekend: __webpack_require__(131),
	  isWithinRange: __webpack_require__(132),
	  isYesterday: __webpack_require__(133),
	  lastDayOfISOWeek: __webpack_require__(134),
	  lastDayOfISOYear: __webpack_require__(136),
	  lastDayOfMonth: __webpack_require__(137),
	  lastDayOfQuarter: __webpack_require__(138),
	  lastDayOfWeek: __webpack_require__(135),
	  lastDayOfYear: __webpack_require__(139),
	  max: __webpack_require__(140),
	  min: __webpack_require__(141),
	  parse: __webpack_require__(10),
	  setDate: __webpack_require__(142),
	  setDay: __webpack_require__(143),
	  setDayOfYear: __webpack_require__(144),
	  setHours: __webpack_require__(145),
	  setISODay: __webpack_require__(146),
	  setISOWeek: __webpack_require__(147),
	  setISOYear: __webpack_require__(18),
	  setMilliseconds: __webpack_require__(148),
	  setMinutes: __webpack_require__(149),
	  setMonth: __webpack_require__(150),
	  setQuarter: __webpack_require__(151),
	  setSeconds: __webpack_require__(152),
	  setYear: __webpack_require__(153),
	  startOfDay: __webpack_require__(21),
	  startOfHour: __webpack_require__(103),
	  startOfISOWeek: __webpack_require__(16),
	  startOfISOYear: __webpack_require__(19),
	  startOfMinute: __webpack_require__(108),
	  startOfMonth: __webpack_require__(154),
	  startOfQuarter: __webpack_require__(111),
	  startOfSecond: __webpack_require__(113),
	  startOfToday: __webpack_require__(155),
	  startOfTomorrow: __webpack_require__(156),
	  startOfWeek: __webpack_require__(17),
	  startOfYear: __webpack_require__(75),
	  startOfYesterday: __webpack_require__(157),
	  subDays: __webpack_require__(158),
	  subHours: __webpack_require__(159),
	  subISOYears: __webpack_require__(45),
	  subMilliseconds: __webpack_require__(160),
	  subMinutes: __webpack_require__(161),
	  subMonths: __webpack_require__(162),
	  subQuarters: __webpack_require__(163),
	  subSeconds: __webpack_require__(164),
	  subWeeks: __webpack_require__(165),
	  subYears: __webpack_require__(166)
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Add the specified number of days to the given date.
	 *
	 * @description
	 * Add the specified number of days to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of days to be added
	 * @returns {Date} the new date with the days added
	 *
	 * @example
	 * // Add 10 days to 1 September 2014:
	 * var result = addDays(new Date(2014, 8, 1), 10)
	 * //=> Thu Sep 11 2014 00:00:00
	 */
	function addDays (dirtyDate, dirtyAmount) {
	  var date = parse(dirtyDate)
	  var amount = Number(dirtyAmount)
	  date.setDate(date.getDate() + amount)
	  return date
	}
	
	module.exports = addDays


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(11)
	
	var MILLISECONDS_IN_HOUR = 3600000
	var MILLISECONDS_IN_MINUTE = 60000
	var DEFAULT_ADDITIONAL_DIGITS = 2
	
	var parseTokenDateTimeDelimeter = /[T ]/
	var parseTokenPlainTime = /:/
	
	// year tokens
	var parseTokenYY = /^(\d{2})$/
	var parseTokensYYY = [
	  /^([+-]\d{2})$/, // 0 additional digits
	  /^([+-]\d{3})$/, // 1 additional digit
	  /^([+-]\d{4})$/ // 2 additional digits
	]
	
	var parseTokenYYYY = /^(\d{4})/
	var parseTokensYYYYY = [
	  /^([+-]\d{4})/, // 0 additional digits
	  /^([+-]\d{5})/, // 1 additional digit
	  /^([+-]\d{6})/ // 2 additional digits
	]
	
	// date tokens
	var parseTokenMM = /^-(\d{2})$/
	var parseTokenDDD = /^-?(\d{3})$/
	var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
	var parseTokenWww = /^-?W(\d{2})$/
	var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/
	
	// time tokens
	var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
	var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
	var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/
	
	// timezone tokens
	var parseTokenTimezone = /([Z+-].*)$/
	var parseTokenTimezoneZ = /^(Z)$/
	var parseTokenTimezoneHH = /^([+-])(\d{2})$/
	var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/
	
	/**
	 * @category Common Helpers
	 * @summary Convert the given argument to an instance of Date.
	 *
	 * @description
	 * Convert the given argument to an instance of Date.
	 *
	 * If the argument is an instance of Date, the function returns its clone.
	 *
	 * If the argument is a number, it is treated as a timestamp.
	 *
	 * If an argument is a string, the function tries to parse it.
	 * Function accepts complete ISO 8601 formats as well as partial implementations.
	 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
	 *
	 * If all above fails, the function passes the given argument to Date constructor.
	 *
	 * @param {Date|String|Number} argument - the value to convert
	 * @param {Object} [options] - the object with options
	 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
	 * @returns {Date} the parsed date in the local time zone
	 *
	 * @example
	 * // Convert string '2014-02-11T11:30:30' to date:
	 * var result = parse('2014-02-11T11:30:30')
	 * //=> Tue Feb 11 2014 11:30:30
	 *
	 * @example
	 * // Parse string '+02014101',
	 * // if the additional number of digits in the extended year format is 1:
	 * var result = parse('+02014101', {additionalDigits: 1})
	 * //=> Fri Apr 11 2014 00:00:00
	 */
	function parse (argument, dirtyOptions) {
	  if (isDate(argument)) {
	    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
	    return new Date(argument.getTime())
	  } else if (typeof argument !== 'string') {
	    return new Date(argument)
	  }
	
	  var options = dirtyOptions || {}
	  var additionalDigits = options.additionalDigits
	  if (additionalDigits == null) {
	    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
	  } else {
	    additionalDigits = Number(additionalDigits)
	  }
	
	  var dateStrings = splitDateString(argument)
	
	  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
	  var year = parseYearResult.year
	  var restDateString = parseYearResult.restDateString
	
	  var date = parseDate(restDateString, year)
	
	  if (date) {
	    var timestamp = date.getTime()
	    var time = 0
	    var offset
	
	    if (dateStrings.time) {
	      time = parseTime(dateStrings.time)
	    }
	
	    if (dateStrings.timezone) {
	      offset = parseTimezone(dateStrings.timezone)
	    } else {
	      // get offset accurate to hour in timezones that change offset
	      offset = new Date(timestamp + time).getTimezoneOffset()
	      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
	    }
	
	    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
	  } else {
	    return new Date(argument)
	  }
	}
	
	function splitDateString (dateString) {
	  var dateStrings = {}
	  var array = dateString.split(parseTokenDateTimeDelimeter)
	  var timeString
	
	  if (parseTokenPlainTime.test(array[0])) {
	    dateStrings.date = null
	    timeString = array[0]
	  } else {
	    dateStrings.date = array[0]
	    timeString = array[1]
	  }
	
	  if (timeString) {
	    var token = parseTokenTimezone.exec(timeString)
	    if (token) {
	      dateStrings.time = timeString.replace(token[1], '')
	      dateStrings.timezone = token[1]
	    } else {
	      dateStrings.time = timeString
	    }
	  }
	
	  return dateStrings
	}
	
	function parseYear (dateString, additionalDigits) {
	  var parseTokenYYY = parseTokensYYY[additionalDigits]
	  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]
	
	  var token
	
	  // YYYY or ±YYYYY
	  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
	  if (token) {
	    var yearString = token[1]
	    return {
	      year: parseInt(yearString, 10),
	      restDateString: dateString.slice(yearString.length)
	    }
	  }
	
	  // YY or ±YYY
	  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
	  if (token) {
	    var centuryString = token[1]
	    return {
	      year: parseInt(centuryString, 10) * 100,
	      restDateString: dateString.slice(centuryString.length)
	    }
	  }
	
	  // Invalid ISO-formatted year
	  return {
	    year: null
	  }
	}
	
	function parseDate (dateString, year) {
	  // Invalid ISO-formatted year
	  if (year === null) {
	    return null
	  }
	
	  var token
	  var date
	  var month
	  var week
	
	  // YYYY
	  if (dateString.length === 0) {
	    date = new Date(0)
	    date.setUTCFullYear(year)
	    return date
	  }
	
	  // YYYY-MM
	  token = parseTokenMM.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    date.setUTCFullYear(year, month)
	    return date
	  }
	
	  // YYYY-DDD or YYYYDDD
	  token = parseTokenDDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    var dayOfYear = parseInt(token[1], 10)
	    date.setUTCFullYear(year, 0, dayOfYear)
	    return date
	  }
	
	  // YYYY-MM-DD or YYYYMMDD
	  token = parseTokenMMDD.exec(dateString)
	  if (token) {
	    date = new Date(0)
	    month = parseInt(token[1], 10) - 1
	    var day = parseInt(token[2], 10)
	    date.setUTCFullYear(year, month, day)
	    return date
	  }
	
	  // YYYY-Www or YYYYWww
	  token = parseTokenWww.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    return dayOfISOYear(year, week)
	  }
	
	  // YYYY-Www-D or YYYYWwwD
	  token = parseTokenWwwD.exec(dateString)
	  if (token) {
	    week = parseInt(token[1], 10) - 1
	    var dayOfWeek = parseInt(token[2], 10) - 1
	    return dayOfISOYear(year, week, dayOfWeek)
	  }
	
	  // Invalid ISO-formatted date
	  return null
	}
	
	function parseTime (timeString) {
	  var token
	  var hours
	  var minutes
	
	  // hh
	  token = parseTokenHH.exec(timeString)
	  if (token) {
	    hours = parseFloat(token[1].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR
	  }
	
	  // hh:mm or hhmm
	  token = parseTokenHHMM.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseFloat(token[2].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE
	  }
	
	  // hh:mm:ss or hhmmss
	  token = parseTokenHHMMSS.exec(timeString)
	  if (token) {
	    hours = parseInt(token[1], 10)
	    minutes = parseInt(token[2], 10)
	    var seconds = parseFloat(token[3].replace(',', '.'))
	    return (hours % 24) * MILLISECONDS_IN_HOUR +
	      minutes * MILLISECONDS_IN_MINUTE +
	      seconds * 1000
	  }
	
	  // Invalid ISO-formatted time
	  return null
	}
	
	function parseTimezone (timezoneString) {
	  var token
	  var absoluteOffset
	
	  // Z
	  token = parseTokenTimezoneZ.exec(timezoneString)
	  if (token) {
	    return 0
	  }
	
	  // ±hh
	  token = parseTokenTimezoneHH.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  // ±hh:mm or ±hhmm
	  token = parseTokenTimezoneHHMM.exec(timezoneString)
	  if (token) {
	    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
	    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
	  }
	
	  return 0
	}
	
	function dayOfISOYear (isoYear, week, day) {
	  week = week || 0
	  day = day || 0
	  var date = new Date(0)
	  date.setUTCFullYear(isoYear, 0, 4)
	  var fourthOfJanuaryDay = date.getUTCDay() || 7
	  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
	  date.setUTCDate(date.getUTCDate() + diff)
	  return date
	}
	
	module.exports = parse


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * @category Common Helpers
	 * @summary Is the given argument an instance of Date?
	 *
	 * @description
	 * Is the given argument an instance of Date?
	 *
	 * @param {*} argument - the argument to check
	 * @returns {Boolean} the given argument is an instance of Date
	 *
	 * @example
	 * // Is 'mayonnaise' a Date?
	 * var result = isDate('mayonnaise')
	 * //=> false
	 */
	function isDate (argument) {
	  return argument instanceof Date
	}
	
	module.exports = isDate


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(13)
	
	var MILLISECONDS_IN_HOUR = 3600000
	
	/**
	 * @category Hour Helpers
	 * @summary Add the specified number of hours to the given date.
	 *
	 * @description
	 * Add the specified number of hours to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of hours to be added
	 * @returns {Date} the new date with the hours added
	 *
	 * @example
	 * // Add 2 hours to 10 July 2014 23:00:00:
	 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
	 * //=> Fri Jul 11 2014 01:00:00
	 */
	function addHours (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
	}
	
	module.exports = addHours


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Add the specified number of milliseconds to the given date.
	 *
	 * @description
	 * Add the specified number of milliseconds to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of milliseconds to be added
	 * @returns {Date} the new date with the milliseconds added
	 *
	 * @example
	 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
	 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
	 * //=> Thu Jul 10 2014 12:45:30.750
	 */
	function addMilliseconds (dirtyDate, dirtyAmount) {
	  var timestamp = parse(dirtyDate).getTime()
	  var amount = Number(dirtyAmount)
	  return new Date(timestamp + amount)
	}
	
	module.exports = addMilliseconds


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(15)
	var setISOYear = __webpack_require__(18)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Add the specified number of ISO week-numbering years to the given date.
	 *
	 * @description
	 * Add the specified number of ISO week-numbering years to the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of ISO week-numbering years to be added
	 * @returns {Date} the new date with the ISO week-numbering years added
	 *
	 * @example
	 * // Add 5 ISO week-numbering years to 2 July 2010:
	 * var result = addISOYears(new Date(2010, 6, 2), 5)
	 * //=> Fri Jun 26 2015 00:00:00
	 */
	function addISOYears (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)
	}
	
	module.exports = addISOYears


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var startOfISOWeek = __webpack_require__(16)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the ISO week-numbering year of the given date.
	 *
	 * @description
	 * Get the ISO week-numbering year of the given date,
	 * which always starts 3 days before the year's first Thursday.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week-numbering year
	 *
	 * @example
	 * // Which ISO-week numbering year is 2 January 2005?
	 * var result = getISOYear(new Date(2005, 0, 2))
	 * //=> 2004
	 */
	function getISOYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	
	  var fourthOfJanuaryOfNextYear = new Date(0)
	  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
	  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
	  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)
	
	  var fourthOfJanuaryOfThisYear = new Date(0)
	  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
	  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
	  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)
	
	  if (date.getTime() >= startOfNextYear.getTime()) {
	    return year + 1
	  } else if (date.getTime() >= startOfThisYear.getTime()) {
	    return year
	  } else {
	    return year - 1
	  }
	}
	
	module.exports = getISOYear


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(17)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Return the start of an ISO week for the given date.
	 *
	 * @description
	 * Return the start of an ISO week for the given date.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO week
	 *
	 * @example
	 * // The start of an ISO week for 2 September 2014 11:55:00:
	 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfISOWeek (dirtyDate) {
	  return startOfWeek(dirtyDate, {weekStartsOn: 1})
	}
	
	module.exports = startOfISOWeek


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Week Helpers
	 * @summary Return the start of a week for the given date.
	 *
	 * @description
	 * Return the start of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the start of a week
	 *
	 * @example
	 * // The start of a week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sun Aug 31 2014 00:00:00
	 *
	 * @example
	 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
	 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfWeek (dirtyDate, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn
	
	  date.setDate(date.getDate() - diff)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfWeek


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var startOfISOYear = __webpack_require__(19)
	var differenceInCalendarDays = __webpack_require__(20)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Set the ISO week-numbering year to the given date.
	 *
	 * @description
	 * Set the ISO week-numbering year to the given date,
	 * saving the week number and the weekday number.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} isoYear - the ISO week-numbering year of the new date
	 * @returns {Date} the new date with the ISO week-numbering year setted
	 *
	 * @example
	 * // Set ISO week-numbering year 2007 to 29 December 2008:
	 * var result = setISOYear(new Date(2008, 11, 29), 2007)
	 * //=> Mon Jan 01 2007 00:00:00
	 */
	function setISOYear (dirtyDate, dirtyISOYear) {
	  var date = parse(dirtyDate)
	  var isoYear = Number(dirtyISOYear)
	  var diff = differenceInCalendarDays(date, startOfISOYear(date))
	  var fourthOfJanuary = new Date(0)
	  fourthOfJanuary.setFullYear(isoYear, 0, 4)
	  fourthOfJanuary.setHours(0, 0, 0, 0)
	  date = startOfISOYear(fourthOfJanuary)
	  date.setDate(date.getDate() + diff)
	  return date
	}
	
	module.exports = setISOYear


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(15)
	var startOfISOWeek = __webpack_require__(16)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Return the start of an ISO week-numbering year for the given date.
	 *
	 * @description
	 * Return the start of an ISO week-numbering year,
	 * which always starts 3 days before the year's first Thursday.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an ISO year
	 *
	 * @example
	 * // The start of an ISO week-numbering year for 2 July 2005:
	 * var result = startOfISOYear(new Date(2005, 6, 2))
	 * //=> Mon Jan 03 2005 00:00:00
	 */
	function startOfISOYear (dirtyDate) {
	  var year = getISOYear(dirtyDate)
	  var fourthOfJanuary = new Date(0)
	  fourthOfJanuary.setFullYear(year, 0, 4)
	  fourthOfJanuary.setHours(0, 0, 0, 0)
	  var date = startOfISOWeek(fourthOfJanuary)
	  return date
	}
	
	module.exports = startOfISOYear


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(21)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_DAY = 86400000
	
	/**
	 * @category Day Helpers
	 * @summary Get the number of calendar days between the given dates.
	 *
	 * @description
	 * Get the number of calendar days between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar days
	 *
	 * @example
	 * // How many calendar days are between
	 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
	 * var result = differenceInCalendarDays(
	 *   new Date(2012, 6, 2, 0, 0),
	 *   new Date(2011, 6, 2, 23, 0)
	 * )
	 * //=> 366
	 */
	function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
	  var startOfDayLeft = startOfDay(dirtyDateLeft)
	  var startOfDayRight = startOfDay(dirtyDateRight)
	
	  var timestampLeft = startOfDayLeft.getTime() -
	    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfDayRight.getTime() -
	    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a day is not constant
	  // (e.g. it's different in the day of the daylight saving time clock shift)
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
	}
	
	module.exports = differenceInCalendarDays


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Return the start of a day for the given date.
	 *
	 * @description
	 * Return the start of a day for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a day
	 *
	 * @example
	 * // The start of a day for 2 September 2014 11:55:00:
	 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 02 2014 00:00:00
	 */
	function startOfDay (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfDay


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(13)
	
	var MILLISECONDS_IN_MINUTE = 60000
	
	/**
	 * @category Minute Helpers
	 * @summary Add the specified number of minutes to the given date.
	 *
	 * @description
	 * Add the specified number of minutes to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of minutes to be added
	 * @returns {Date} the new date with the minutes added
	 *
	 * @example
	 * // Add 30 minutes to 10 July 2014 12:00:00:
	 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
	 * //=> Thu Jul 10 2014 12:30:00
	 */
	function addMinutes (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
	}
	
	module.exports = addMinutes


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var getDaysInMonth = __webpack_require__(24)
	
	/**
	 * @category Month Helpers
	 * @summary Add the specified number of months to the given date.
	 *
	 * @description
	 * Add the specified number of months to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of months to be added
	 * @returns {Date} the new date with the months added
	 *
	 * @example
	 * // Add 5 months to 1 September 2014:
	 * var result = addMonths(new Date(2014, 8, 1), 5)
	 * //=> Sun Feb 01 2015 00:00:00
	 */
	function addMonths (dirtyDate, dirtyAmount) {
	  var date = parse(dirtyDate)
	  var amount = Number(dirtyAmount)
	  var desiredMonth = date.getMonth() + amount
	  var dateWithDesiredMonth = new Date(0)
	  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
	  dateWithDesiredMonth.setHours(0, 0, 0, 0)
	  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
	  // Set the last day of the new month
	  // if the original date was the last day of the longer month
	  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
	  return date
	}
	
	module.exports = addMonths


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of days in a month of the given date.
	 *
	 * @description
	 * Get the number of days in a month of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the number of days in a month
	 *
	 * @example
	 * // How many days are in February 2000?
	 * var result = getDaysInMonth(new Date(2000, 1))
	 * //=> 29
	 */
	function getDaysInMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  var monthIndex = date.getMonth()
	  var lastDayOfMonth = new Date(0)
	  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
	  lastDayOfMonth.setHours(0, 0, 0, 0)
	  return lastDayOfMonth.getDate()
	}
	
	module.exports = getDaysInMonth


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(23)
	
	/**
	 * @category Quarter Helpers
	 * @summary Add the specified number of year quarters to the given date.
	 *
	 * @description
	 * Add the specified number of year quarters to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of quarters to be added
	 * @returns {Date} the new date with the quarters added
	 *
	 * @example
	 * // Add 1 quarter to 1 September 2014:
	 * var result = addQuarters(new Date(2014, 8, 1), 1)
	 * //=> Mon Dec 01 2014 00:00:00
	 */
	function addQuarters (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  var months = amount * 3
	  return addMonths(dirtyDate, months)
	}
	
	module.exports = addQuarters


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(13)
	
	/**
	 * @category Second Helpers
	 * @summary Add the specified number of seconds to the given date.
	 *
	 * @description
	 * Add the specified number of seconds to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of seconds to be added
	 * @returns {Date} the new date with the seconds added
	 *
	 * @example
	 * // Add 30 seconds to 10 July 2014 12:45:00:
	 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
	 * //=> Thu Jul 10 2014 12:45:30
	 */
	function addSeconds (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMilliseconds(dirtyDate, amount * 1000)
	}
	
	module.exports = addSeconds


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(9)
	
	/**
	 * @category Week Helpers
	 * @summary Add the specified number of weeks to the given date.
	 *
	 * @description
	 * Add the specified number of week to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of weeks to be added
	 * @returns {Date} the new date with the weeks added
	 *
	 * @example
	 * // Add 4 weeks to 1 September 2014:
	 * var result = addWeeks(new Date(2014, 8, 1), 4)
	 * //=> Mon Sep 29 2014 00:00:00
	 */
	function addWeeks (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  var days = amount * 7
	  return addDays(dirtyDate, days)
	}
	
	module.exports = addWeeks


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(23)
	
	/**
	 * @category Year Helpers
	 * @summary Add the specified number of years to the given date.
	 *
	 * @description
	 * Add the specified number of years to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of years to be added
	 * @returns {Date} the new date with the years added
	 *
	 * @example
	 * // Add 5 years to 1 September 2014:
	 * var result = addYears(new Date(2014, 8, 1), 5)
	 * //=> Sun Sep 01 2019 00:00:00
	 */
	function addYears (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMonths(dirtyDate, amount * 12)
	}
	
	module.exports = addYears


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Range Helpers
	 * @summary Is the given date range overlapping with another date range?
	 *
	 * @description
	 * Is the given date range overlapping with another date range?
	 *
	 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
	 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
	 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
	 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
	 * @returns {Boolean} whether the date ranges are overlapping
	 * @throws {Error} startDate of a date range cannot be after its endDate
	 *
	 * @example
	 * // For overlapping date ranges:
	 * areRangesOverlapping(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
	 * )
	 * //=> true
	 *
	 * @example
	 * // For non-overlapping date ranges:
	 * areRangesOverlapping(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
	 * )
	 * //=> false
	 */
	function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
	  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
	  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
	  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
	  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()
	
	  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
	    throw new Error('The start of the range cannot be after the end of the range')
	  }
	
	  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
	}
	
	module.exports = areRangesOverlapping


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Return an index of the closest date from the array comparing to the given date.
	 *
	 * @description
	 * Return an index of the closest date from the array comparing to the given date.
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date[]|String[]|Number[]} datesArray - the array to search
	 * @returns {Number} an index of the date closest to the given date
	 * @throws {TypeError} the second argument must be an instance of Array
	 *
	 * @example
	 * // Which date is closer to 6 September 2015?
	 * var dateToCompare = new Date(2015, 8, 6)
	 * var datesArray = [
	 *   new Date(2015, 0, 1),
	 *   new Date(2016, 0, 1),
	 *   new Date(2017, 0, 1)
	 * ]
	 * var result = closestIndexTo(dateToCompare, datesArray)
	 * //=> 1
	 */
	function closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {
	  if (!(dirtyDatesArray instanceof Array)) {
	    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
	  }
	
	  var dateToCompare = parse(dirtyDateToCompare)
	  var timeToCompare = dateToCompare.getTime()
	
	  var result
	  var minDistance
	
	  dirtyDatesArray.forEach(function (dirtyDate, index) {
	    var currentDate = parse(dirtyDate)
	    var distance = Math.abs(timeToCompare - currentDate.getTime())
	    if (result === undefined || distance < minDistance) {
	      result = index
	      minDistance = distance
	    }
	  })
	
	  return result
	}
	
	module.exports = closestIndexTo


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Return a date from the array closest to the given date.
	 *
	 * @description
	 * Return a date from the array closest to the given date.
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date[]|String[]|Number[]} datesArray - the array to search
	 * @returns {Date} the date from the array closest to the given date
	 * @throws {TypeError} the second argument must be an instance of Array
	 *
	 * @example
	 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
	 * var dateToCompare = new Date(2015, 8, 6)
	 * var result = closestTo(dateToCompare, [
	 *   new Date(2000, 0, 1),
	 *   new Date(2030, 0, 1)
	 * ])
	 * //=> Tue Jan 01 2030 00:00:00
	 */
	function closestTo (dirtyDateToCompare, dirtyDatesArray) {
	  if (!(dirtyDatesArray instanceof Array)) {
	    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
	  }
	
	  var dateToCompare = parse(dirtyDateToCompare)
	  var timeToCompare = dateToCompare.getTime()
	
	  var result
	  var minDistance
	
	  dirtyDatesArray.forEach(function (dirtyDate) {
	    var currentDate = parse(dirtyDate)
	    var distance = Math.abs(timeToCompare - currentDate.getTime())
	    if (result === undefined || distance < minDistance) {
	      result = currentDate
	      minDistance = distance
	    }
	  })
	
	  return result
	}
	
	module.exports = closestTo


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return 1 if the first date is after the second,
	 * -1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989:
	 * var result = compareAsc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> -1
	 *
	 * @example
	 * // Sort the array of dates:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareAsc)
	 * //=> [
	 * //   Wed Feb 11 1987 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Sun Jul 02 1995 00:00:00
	 * // ]
	 */
	function compareAsc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft < timeRight) {
	    return -1
	  } else if (timeLeft > timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareAsc


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
	 *
	 * @description
	 * Compare the two dates and return -1 if the first date is after the second,
	 * 1 if the first date is before the second or 0 if dates are equal.
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Number} the result of the comparison
	 *
	 * @example
	 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
	 * var result = compareDesc(
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * )
	 * //=> 1
	 *
	 * @example
	 * // Sort the array of dates in reverse chronological order:
	 * var result = [
	 *   new Date(1995, 6, 2),
	 *   new Date(1987, 1, 11),
	 *   new Date(1989, 6, 10)
	 * ].sort(compareDesc)
	 * //=> [
	 * //   Sun Jul 02 1995 00:00:00,
	 * //   Mon Jul 10 1989 00:00:00,
	 * //   Wed Feb 11 1987 00:00:00
	 * // ]
	 */
	function compareDesc (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var timeLeft = dateLeft.getTime()
	  var dateRight = parse(dirtyDateRight)
	  var timeRight = dateRight.getTime()
	
	  if (timeLeft > timeRight) {
	    return -1
	  } else if (timeLeft < timeRight) {
	    return 1
	  } else {
	    return 0
	  }
	}
	
	module.exports = compareDesc


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfISOWeek = __webpack_require__(16)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category ISO Week Helpers
	 * @summary Get the number of calendar ISO weeks between the given dates.
	 *
	 * @description
	 * Get the number of calendar ISO weeks between the given dates.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar ISO weeks
	 *
	 * @example
	 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
	 * var result = differenceInCalendarISOWeeks(
	 *   new Date(2014, 6, 21),
	 *   new Date(2014, 6, 6)
	 * )
	 * //=> 3
	 */
	function differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {
	  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
	  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)
	
	  var timestampLeft = startOfISOWeekLeft.getTime() -
	    startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfISOWeekRight.getTime() -
	    startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
	}
	
	module.exports = differenceInCalendarISOWeeks


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(15)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the number of calendar ISO week-numbering years between the given dates.
	 *
	 * @description
	 * Get the number of calendar ISO week-numbering years between the given dates.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar ISO week-numbering years
	 *
	 * @example
	 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
	 * var result = differenceInCalendarISOYears(
	 *   new Date(2012, 0, 1),
	 *   new Date(2010, 0, 1)
	 * )
	 * //=> 2
	 */
	function differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {
	  return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight)
	}
	
	module.exports = differenceInCalendarISOYears


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of calendar months between the given dates.
	 *
	 * @description
	 * Get the number of calendar months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar months
	 *
	 * @example
	 * // How many calendar months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInCalendarMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 8
	 */
	function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
	  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()
	
	  return yearDiff * 12 + monthDiff
	}
	
	module.exports = differenceInCalendarMonths


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var getQuarter = __webpack_require__(38)
	var parse = __webpack_require__(10)
	
	/**
	 * @category Quarter Helpers
	 * @summary Get the number of calendar quarters between the given dates.
	 *
	 * @description
	 * Get the number of calendar quarters between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar quarters
	 *
	 * @example
	 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
	 * var result = differenceInCalendarQuarters(
	 *   new Date(2014, 6, 2),
	 *   new Date(2013, 11, 31)
	 * )
	 * //=> 3
	 */
	function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
	  var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight)
	
	  return yearDiff * 4 + quarterDiff
	}
	
	module.exports = differenceInCalendarQuarters


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Quarter Helpers
	 * @summary Get the year quarter of the given date.
	 *
	 * @description
	 * Get the year quarter of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the quarter
	 *
	 * @example
	 * // Which quarter is 2 July 2014?
	 * var result = getQuarter(new Date(2014, 6, 2))
	 * //=> 3
	 */
	function getQuarter (dirtyDate) {
	  var date = parse(dirtyDate)
	  var quarter = Math.floor(date.getMonth() / 3) + 1
	  return quarter
	}
	
	module.exports = getQuarter


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(17)
	
	var MILLISECONDS_IN_MINUTE = 60000
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category Week Helpers
	 * @summary Get the number of calendar weeks between the given dates.
	 *
	 * @description
	 * Get the number of calendar weeks between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Number} the number of calendar weeks
	 *
	 * @example
	 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
	 * var result = differenceInCalendarWeeks(
	 *   new Date(2014, 6, 20),
	 *   new Date(2014, 6, 5)
	 * )
	 * //=> 3
	 *
	 * @example
	 * // If the week starts on Monday,
	 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
	 * var result = differenceInCalendarWeeks(
	 *   new Date(2014, 6, 20),
	 *   new Date(2014, 6, 5),
	 *   {weekStartsOn: 1}
	 * )
	 * //=> 2
	 */
	function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
	  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
	  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)
	
	  var timestampLeft = startOfWeekLeft.getTime() -
	    startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	  var timestampRight = startOfWeekRight.getTime() -
	    startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
	}
	
	module.exports = differenceInCalendarWeeks


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Get the number of calendar years between the given dates.
	 *
	 * @description
	 * Get the number of calendar years between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of calendar years
	 *
	 * @example
	 * // How many calendar years are between 31 December 2013 and 11 February 2015?
	 * var result = differenceInCalendarYears(
	 *   new Date(2015, 1, 11),
	 *   new Date(2013, 11, 31)
	 * )
	 * //=> 2
	 */
	function differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  return dateLeft.getFullYear() - dateRight.getFullYear()
	}
	
	module.exports = differenceInCalendarYears


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var differenceInCalendarDays = __webpack_require__(20)
	var compareAsc = __webpack_require__(32)
	
	/**
	 * @category Day Helpers
	 * @summary Get the number of full days between the given dates.
	 *
	 * @description
	 * Get the number of full days between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full days
	 *
	 * @example
	 * // How many full days are between
	 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
	 * var result = differenceInDays(
	 *   new Date(2012, 6, 2, 0, 0),
	 *   new Date(2011, 6, 2, 23, 0)
	 * )
	 * //=> 365
	 */
	function differenceInDays (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var sign = compareAsc(dateLeft, dateRight)
	  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
	  dateLeft.setDate(dateLeft.getDate() - sign * difference)
	
	  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
	  // If so, result must be decreased by 1 in absolute value
	  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
	  return sign * (difference - isLastDayNotFull)
	}
	
	module.exports = differenceInDays


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(43)
	
	var MILLISECONDS_IN_HOUR = 3600000
	
	/**
	 * @category Hour Helpers
	 * @summary Get the number of hours between the given dates.
	 *
	 * @description
	 * Get the number of hours between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of hours
	 *
	 * @example
	 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
	 * var result = differenceInHours(
	 *   new Date(2014, 6, 2, 19, 0),
	 *   new Date(2014, 6, 2, 6, 50)
	 * )
	 * //=> 12
	 */
	function differenceInHours (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInHours


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Get the number of milliseconds between the given dates.
	 *
	 * @description
	 * Get the number of milliseconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of milliseconds
	 *
	 * @example
	 * // How many milliseconds are between
	 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
	 * var result = differenceInMilliseconds(
	 *   new Date(2014, 6, 2, 12, 30, 21, 700),
	 *   new Date(2014, 6, 2, 12, 30, 20, 600)
	 * )
	 * //=> 1100
	 */
	function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getTime() - dateRight.getTime()
	}
	
	module.exports = differenceInMilliseconds


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var differenceInCalendarISOYears = __webpack_require__(35)
	var compareAsc = __webpack_require__(32)
	var subISOYears = __webpack_require__(45)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the number of full ISO week-numbering years between the given dates.
	 *
	 * @description
	 * Get the number of full ISO week-numbering years between the given dates.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full ISO week-numbering years
	 *
	 * @example
	 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
	 * var result = differenceInISOYears(
	 *   new Date(2012, 0, 1),
	 *   new Date(2010, 0, 1)
	 * )
	 * //=> 1
	 */
	function differenceInISOYears (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var sign = compareAsc(dateLeft, dateRight)
	  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight))
	  dateLeft = subISOYears(dateLeft, sign * difference)
	
	  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
	  // if last calendar ISO year is not full
	  // If so, result must be decreased by 1 in absolute value
	  var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign
	  return sign * (difference - isLastISOYearNotFull)
	}
	
	module.exports = differenceInISOYears


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var addISOYears = __webpack_require__(14)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Subtract the specified number of ISO week-numbering years from the given date.
	 *
	 * @description
	 * Subtract the specified number of ISO week-numbering years from the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
	 * @returns {Date} the new date with the ISO week-numbering years subtracted
	 *
	 * @example
	 * // Subtract 5 ISO week-numbering years from 1 September 2014:
	 * var result = subISOYears(new Date(2014, 8, 1), 5)
	 * //=> Mon Aug 31 2009 00:00:00
	 */
	function subISOYears (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addISOYears(dirtyDate, -amount)
	}
	
	module.exports = subISOYears


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(43)
	
	var MILLISECONDS_IN_MINUTE = 60000
	
	/**
	 * @category Minute Helpers
	 * @summary Get the number of minutes between the given dates.
	 *
	 * @description
	 * Get the number of minutes between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of minutes
	 *
	 * @example
	 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
	 * var result = differenceInMinutes(
	 *   new Date(2014, 6, 2, 12, 20, 0),
	 *   new Date(2014, 6, 2, 12, 7, 59)
	 * )
	 * //=> 12
	 */
	function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInMinutes


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var differenceInCalendarMonths = __webpack_require__(36)
	var compareAsc = __webpack_require__(32)
	
	/**
	 * @category Month Helpers
	 * @summary Get the number of full months between the given dates.
	 *
	 * @description
	 * Get the number of full months between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full months
	 *
	 * @example
	 * // How many full months are between 31 January 2014 and 1 September 2014?
	 * var result = differenceInMonths(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 0, 31)
	 * )
	 * //=> 7
	 */
	function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var sign = compareAsc(dateLeft, dateRight)
	  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
	  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)
	
	  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
	  // If so, result must be decreased by 1 in absolute value
	  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
	  return sign * (difference - isLastMonthNotFull)
	}
	
	module.exports = differenceInMonths


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMonths = __webpack_require__(47)
	
	/**
	 * @category Quarter Helpers
	 * @summary Get the number of full quarters between the given dates.
	 *
	 * @description
	 * Get the number of full quarters between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full quarters
	 *
	 * @example
	 * // How many full quarters are between 31 December 2013 and 2 July 2014?
	 * var result = differenceInQuarters(
	 *   new Date(2014, 6, 2),
	 *   new Date(2013, 11, 31)
	 * )
	 * //=> 2
	 */
	function differenceInQuarters (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInQuarters


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var differenceInMilliseconds = __webpack_require__(43)
	
	/**
	 * @category Second Helpers
	 * @summary Get the number of seconds between the given dates.
	 *
	 * @description
	 * Get the number of seconds between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of seconds
	 *
	 * @example
	 * // How many seconds are between
	 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
	 * var result = differenceInSeconds(
	 *   new Date(2014, 6, 2, 12, 30, 20, 0),
	 *   new Date(2014, 6, 2, 12, 30, 7, 999)
	 * )
	 * //=> 12
	 */
	function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInSeconds


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var differenceInDays = __webpack_require__(41)
	
	/**
	 * @category Week Helpers
	 * @summary Get the number of full weeks between the given dates.
	 *
	 * @description
	 * Get the number of full weeks between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full weeks
	 *
	 * @example
	 * // How many full weeks are between 5 July 2014 and 20 July 2014?
	 * var result = differenceInWeeks(
	 *   new Date(2014, 6, 20),
	 *   new Date(2014, 6, 5)
	 * )
	 * //=> 2
	 */
	function differenceInWeeks (dirtyDateLeft, dirtyDateRight) {
	  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7
	  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
	}
	
	module.exports = differenceInWeeks


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var differenceInCalendarYears = __webpack_require__(40)
	var compareAsc = __webpack_require__(32)
	
	/**
	 * @category Year Helpers
	 * @summary Get the number of full years between the given dates.
	 *
	 * @description
	 * Get the number of full years between the given dates.
	 *
	 * @param {Date|String|Number} dateLeft - the later date
	 * @param {Date|String|Number} dateRight - the earlier date
	 * @returns {Number} the number of full years
	 *
	 * @example
	 * // How many full years are between 31 December 2013 and 11 February 2015?
	 * var result = differenceInYears(
	 *   new Date(2015, 1, 11),
	 *   new Date(2013, 11, 31)
	 * )
	 * //=> 1
	 */
	function differenceInYears (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	
	  var sign = compareAsc(dateLeft, dateRight)
	  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))
	  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)
	
	  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
	  // If so, result must be decreased by 1 in absolute value
	  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
	  return sign * (difference - isLastYearNotFull)
	}
	
	module.exports = differenceInYears


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var compareDesc = __webpack_require__(33)
	var parse = __webpack_require__(10)
	var differenceInSeconds = __webpack_require__(49)
	var differenceInMonths = __webpack_require__(47)
	var enLocale = __webpack_require__(53)
	
	var MINUTES_IN_DAY = 1440
	var MINUTES_IN_ALMOST_TWO_DAYS = 2520
	var MINUTES_IN_MONTH = 43200
	var MINUTES_IN_TWO_MONTHS = 86400
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given dates in words.
	 *
	 * @description
	 * Return the distance between the given dates in words.
	 *
	 * | Distance between dates                                            | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance between dates | Result               |
	 * |------------------------|----------------------|
	 * | 0 secs ... 5 secs      | less than 5 seconds  |
	 * | 5 secs ... 10 secs     | less than 10 seconds |
	 * | 10 secs ... 20 secs    | less than 20 seconds |
	 * | 20 secs ... 40 secs    | half a minute        |
	 * | 40 secs ... 60 secs    | less than a minute   |
	 * | 60 secs ... 90 secs    | 1 minute             |
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date|String|Number} date - the other date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // What is the distance between 2 July 2014 and 1 January 2015?
	 * var result = distanceInWords(
	 *   new Date(2014, 6, 2),
	 *   new Date(2015, 0, 1)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // What is the distance between 1 January 2015 00:00:15
	 * // and 1 January 2015 00:00:00, including seconds?
	 * var result = distanceInWords(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   new Date(2015, 0, 1, 0, 0, 0),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // What is the distance from 1 January 2016
	 * // to 1 January 2015, with a suffix?
	 * var result = distanceInWords(
	 *   new Date(2016, 0, 1),
	 *   new Date(2015, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'about 1 year ago'
	 *
	 * @example
	 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWords(
	 *   new Date(2016, 7, 1),
	 *   new Date(2015, 0, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
	  var options = dirtyOptions || {}
	
	  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)
	
	  var locale = options.locale
	  var localize = enLocale.distanceInWords.localize
	  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
	    localize = locale.distanceInWords.localize
	  }
	
	  var localizeOptions = {
	    addSuffix: Boolean(options.addSuffix),
	    comparison: comparison
	  }
	
	  var dateLeft, dateRight
	  if (comparison > 0) {
	    dateLeft = parse(dirtyDateToCompare)
	    dateRight = parse(dirtyDate)
	  } else {
	    dateLeft = parse(dirtyDate)
	    dateRight = parse(dirtyDateToCompare)
	  }
	
	  var seconds = differenceInSeconds(dateRight, dateLeft)
	  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
	  var minutes = Math.round(seconds / 60) - offset
	  var months
	
	  // 0 up to 2 mins
	  if (minutes < 2) {
	    if (options.includeSeconds) {
	      if (seconds < 5) {
	        return localize('lessThanXSeconds', 5, localizeOptions)
	      } else if (seconds < 10) {
	        return localize('lessThanXSeconds', 10, localizeOptions)
	      } else if (seconds < 20) {
	        return localize('lessThanXSeconds', 20, localizeOptions)
	      } else if (seconds < 40) {
	        return localize('halfAMinute', null, localizeOptions)
	      } else if (seconds < 60) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', 1, localizeOptions)
	      }
	    } else {
	      if (minutes === 0) {
	        return localize('lessThanXMinutes', 1, localizeOptions)
	      } else {
	        return localize('xMinutes', minutes, localizeOptions)
	      }
	    }
	
	  // 2 mins up to 0.75 hrs
	  } else if (minutes < 45) {
	    return localize('xMinutes', minutes, localizeOptions)
	
	  // 0.75 hrs up to 1.5 hrs
	  } else if (minutes < 90) {
	    return localize('aboutXHours', 1, localizeOptions)
	
	  // 1.5 hrs up to 24 hrs
	  } else if (minutes < MINUTES_IN_DAY) {
	    var hours = Math.round(minutes / 60)
	    return localize('aboutXHours', hours, localizeOptions)
	
	  // 1 day up to 1.75 days
	  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
	    return localize('xDays', 1, localizeOptions)
	
	  // 1.75 days up to 30 days
	  } else if (minutes < MINUTES_IN_MONTH) {
	    var days = Math.round(minutes / MINUTES_IN_DAY)
	    return localize('xDays', days, localizeOptions)
	
	  // 1 month up to 2 months
	  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
	    months = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('aboutXMonths', months, localizeOptions)
	  }
	
	  months = differenceInMonths(dateRight, dateLeft)
	
	  // 2 months up to 12 months
	  if (months < 12) {
	    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
	    return localize('xMonths', nearestMonth, localizeOptions)
	
	  // 1 year up to max Date
	  } else {
	    var monthsSinceStartOfYear = months % 12
	    var years = Math.floor(months / 12)
	
	    // N years up to 1 years 3 months
	    if (monthsSinceStartOfYear < 3) {
	      return localize('aboutXYears', years, localizeOptions)
	
	    // N years 3 months up to N years 9 months
	    } else if (monthsSinceStartOfYear < 9) {
	      return localize('overXYears', years, localizeOptions)
	
	    // N years 9 months up to N year 12 months
	    } else {
	      return localize('almostXYears', years + 1, localizeOptions)
	    }
	  }
	}
	
	module.exports = distanceInWords


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var buildDistanceInWordsLocale = __webpack_require__(54)
	var buildFormatLocale = __webpack_require__(55)
	
	/**
	 * @category Locales
	 * @summary English locale.
	 */
	module.exports = {
	  distanceInWords: buildDistanceInWordsLocale(),
	  format: buildFormatLocale()
	}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	function buildDistanceInWordsLocale () {
	  var distanceInWordsLocale = {
	    lessThanXSeconds: {
	      one: 'less than a second',
	      other: 'less than {{count}} seconds'
	    },
	
	    xSeconds: {
	      one: '1 second',
	      other: '{{count}} seconds'
	    },
	
	    halfAMinute: 'half a minute',
	
	    lessThanXMinutes: {
	      one: 'less than a minute',
	      other: 'less than {{count}} minutes'
	    },
	
	    xMinutes: {
	      one: '1 minute',
	      other: '{{count}} minutes'
	    },
	
	    aboutXHours: {
	      one: 'about 1 hour',
	      other: 'about {{count}} hours'
	    },
	
	    xHours: {
	      one: '1 hour',
	      other: '{{count}} hours'
	    },
	
	    xDays: {
	      one: '1 day',
	      other: '{{count}} days'
	    },
	
	    aboutXMonths: {
	      one: 'about 1 month',
	      other: 'about {{count}} months'
	    },
	
	    xMonths: {
	      one: '1 month',
	      other: '{{count}} months'
	    },
	
	    aboutXYears: {
	      one: 'about 1 year',
	      other: 'about {{count}} years'
	    },
	
	    xYears: {
	      one: '1 year',
	      other: '{{count}} years'
	    },
	
	    overXYears: {
	      one: 'over 1 year',
	      other: 'over {{count}} years'
	    },
	
	    almostXYears: {
	      one: 'almost 1 year',
	      other: 'almost {{count}} years'
	    }
	  }
	
	  function localize (token, count, options) {
	    options = options || {}
	
	    var result
	    if (typeof distanceInWordsLocale[token] === 'string') {
	      result = distanceInWordsLocale[token]
	    } else if (count === 1) {
	      result = distanceInWordsLocale[token].one
	    } else {
	      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
	    }
	
	    if (options.addSuffix) {
	      if (options.comparison > 0) {
	        return 'in ' + result
	      } else {
	        return result + ' ago'
	      }
	    }
	
	    return result
	  }
	
	  return {
	    localize: localize
	  }
	}
	
	module.exports = buildDistanceInWordsLocale


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var buildFormattingTokensRegExp = __webpack_require__(56)
	
	function buildFormatLocale () {
	  // Note: in English, the names of days of the week and months are capitalized.
	  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
	  // Generally, formatted dates should look like they are in the middle of a sentence,
	  // e.g. in Spanish language the weekdays and months should be in the lowercase.
	  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
	  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	  var meridiemUppercase = ['AM', 'PM']
	  var meridiemLowercase = ['am', 'pm']
	  var meridiemFull = ['a.m.', 'p.m.']
	
	  var formatters = {
	    // Month: Jan, Feb, ..., Dec
	    'MMM': function (date) {
	      return months3char[date.getMonth()]
	    },
	
	    // Month: January, February, ..., December
	    'MMMM': function (date) {
	      return monthsFull[date.getMonth()]
	    },
	
	    // Day of week: Su, Mo, ..., Sa
	    'dd': function (date) {
	      return weekdays2char[date.getDay()]
	    },
	
	    // Day of week: Sun, Mon, ..., Sat
	    'ddd': function (date) {
	      return weekdays3char[date.getDay()]
	    },
	
	    // Day of week: Sunday, Monday, ..., Saturday
	    'dddd': function (date) {
	      return weekdaysFull[date.getDay()]
	    },
	
	    // AM, PM
	    'A': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
	    },
	
	    // am, pm
	    'a': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
	    },
	
	    // a.m., p.m.
	    'aa': function (date) {
	      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
	    }
	  }
	
	  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
	  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
	  ordinalFormatters.forEach(function (formatterToken) {
	    formatters[formatterToken + 'o'] = function (date, formatters) {
	      return ordinal(formatters[formatterToken](date))
	    }
	  })
	
	  return {
	    formatters: formatters,
	    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
	  }
	}
	
	function ordinal (number) {
	  var rem100 = number % 100
	  if (rem100 > 20 || rem100 < 10) {
	    switch (rem100 % 10) {
	      case 1:
	        return number + 'st'
	      case 2:
	        return number + 'nd'
	      case 3:
	        return number + 'rd'
	    }
	  }
	  return number + 'th'
	}
	
	module.exports = buildFormatLocale


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	var commonFormatterKeys = [
	  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
	  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
	  'H', 'HH', 'h', 'hh', 'm', 'mm',
	  's', 'ss', 'S', 'SS', 'SSS',
	  'Z', 'ZZ', 'X', 'x'
	]
	
	function buildFormattingTokensRegExp (formatters) {
	  var formatterKeys = []
	  for (var key in formatters) {
	    if (formatters.hasOwnProperty(key)) {
	      formatterKeys.push(key)
	    }
	  }
	
	  var formattingTokens = commonFormatterKeys
	    .concat(formatterKeys)
	    .sort()
	    .reverse()
	  var formattingTokensRegExp = new RegExp(
	    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
	  )
	
	  return formattingTokensRegExp
	}
	
	module.exports = buildFormattingTokensRegExp


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var compareDesc = __webpack_require__(33)
	var parse = __webpack_require__(10)
	var differenceInSeconds = __webpack_require__(49)
	var enLocale = __webpack_require__(53)
	
	var MINUTES_IN_DAY = 1440
	var MINUTES_IN_MONTH = 43200
	var MINUTES_IN_YEAR = 525600
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given dates in words.
	 *
	 * @description
	 * Return the distance between the given dates in words, using strict units.
	 * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
	 * 'less than' and the like.
	 *
	 * | Distance between dates | Result              |
	 * |------------------------|---------------------|
	 * | 0 ... 59 secs          | [0..59] seconds     |
	 * | 1 ... 59 mins          | [1..59] minutes     |
	 * | 1 ... 23 hrs           | [1..23] hours       |
	 * | 1 ... 29 days          | [1..29] days        |
	 * | 1 ... 11 months        | [1..11] months      |
	 * | 1 ... N years          | [1..N]  years       |
	 *
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @param {Date|String|Number} date - the other date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
	 * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
	 * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // What is the distance between 2 July 2014 and 1 January 2015?
	 * var result = distanceInWordsStrict(
	 *   new Date(2014, 6, 2),
	 *   new Date(2015, 0, 2)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // What is the distance between 1 January 2015 00:00:15
	 * // and 1 January 2015 00:00:00?
	 * var result = distanceInWordsStrict(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   new Date(2015, 0, 1, 0, 0, 0),
	 * )
	 * //=> '15 seconds'
	 *
	 * @example
	 * // What is the distance from 1 January 2016
	 * // to 1 January 2015, with a suffix?
	 * var result = distanceInWordsStrict(
	 *   new Date(2016, 0, 1),
	 *   new Date(2015, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> '1 year ago'
	 *
	 * @example
	 * // What is the distance from 1 January 2016
	 * // to 1 January 2015, in minutes?
	 * var result = distanceInWordsStrict(
	 *   new Date(2016, 0, 1),
	 *   new Date(2015, 0, 1),
	 *   {unit: 'm'}
	 * )
	 * //=> '525600 minutes'
	 *
	 * @example
	 * // What is the distance from 1 January 2016
	 * // to 28 January 2015, in months, rounded up?
	 * var result = distanceInWordsStrict(
	 *   new Date(2015, 0, 28),
	 *   new Date(2015, 0, 1),
	 *   {unit: 'M', partialMethod: 'ceil'}
	 * )
	 * //=> '1 month'
	 *
	 * @example
	 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWordsStrict(
	 *   new Date(2016, 7, 1),
	 *   new Date(2015, 0, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> '1 jaro'
	 */
	function distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {
	  var options = dirtyOptions || {}
	
	  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)
	
	  var locale = options.locale
	  var localize = enLocale.distanceInWords.localize
	  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
	    localize = locale.distanceInWords.localize
	  }
	
	  var localizeOptions = {
	    addSuffix: Boolean(options.addSuffix),
	    comparison: comparison
	  }
	
	  var dateLeft, dateRight
	  if (comparison > 0) {
	    dateLeft = parse(dirtyDateToCompare)
	    dateRight = parse(dirtyDate)
	  } else {
	    dateLeft = parse(dirtyDate)
	    dateRight = parse(dirtyDateToCompare)
	  }
	
	  var unit
	  var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor']
	  var seconds = differenceInSeconds(dateRight, dateLeft)
	  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
	  var minutes = mathPartial(seconds / 60) - offset
	  var hours, days, months, years
	
	  if (options.unit) {
	    unit = String(options.unit)
	  } else {
	    if (minutes < 1) {
	      unit = 's'
	    } else if (minutes < 60) {
	      unit = 'm'
	    } else if (minutes < MINUTES_IN_DAY) {
	      unit = 'h'
	    } else if (minutes < MINUTES_IN_MONTH) {
	      unit = 'd'
	    } else if (minutes < MINUTES_IN_YEAR) {
	      unit = 'M'
	    } else {
	      unit = 'Y'
	    }
	  }
	
	  // 0 up to 60 seconds
	  if (unit === 's') {
	    return localize('xSeconds', seconds, localizeOptions)
	
	  // 1 up to 60 mins
	  } else if (unit === 'm') {
	    return localize('xMinutes', minutes, localizeOptions)
	
	  // 1 up to 24 hours
	  } else if (unit === 'h') {
	    hours = mathPartial(minutes / 60)
	    return localize('xHours', hours, localizeOptions)
	
	  // 1 up to 30 days
	  } else if (unit === 'd') {
	    days = mathPartial(minutes / MINUTES_IN_DAY)
	    return localize('xDays', days, localizeOptions)
	
	  // 1 up to 12 months
	  } else if (unit === 'M') {
	    months = mathPartial(minutes / MINUTES_IN_MONTH)
	    return localize('xMonths', months, localizeOptions)
	
	  // 1 year up to max Date
	  } else if (unit === 'Y') {
	    years = mathPartial(minutes / MINUTES_IN_YEAR)
	    return localize('xYears', years, localizeOptions)
	  }
	
	  throw new Error('Unknown unit: ' + unit)
	}
	
	module.exports = distanceInWordsStrict


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var distanceInWords = __webpack_require__(52)
	
	/**
	 * @category Common Helpers
	 * @summary Return the distance between the given date and now in words.
	 *
	 * @description
	 * Return the distance between the given date and now in words.
	 *
	 * | Distance to now                                                   | Result              |
	 * |-------------------------------------------------------------------|---------------------|
	 * | 0 ... 30 secs                                                     | less than a minute  |
	 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
	 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
	 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
	 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
	 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
	 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
	 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
	 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
	 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
	 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
	 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
	 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
	 * | N yrs ... N yrs 3 months                                          | about N years       |
	 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
	 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
	 *
	 * With `options.includeSeconds == true`:
	 * | Distance to now     | Result               |
	 * |---------------------|----------------------|
	 * | 0 secs ... 5 secs   | less than 5 seconds  |
	 * | 5 secs ... 10 secs  | less than 10 seconds |
	 * | 10 secs ... 20 secs | less than 20 seconds |
	 * | 20 secs ... 40 secs | half a minute        |
	 * | 40 secs ... 60 secs | less than a minute   |
	 * | 60 secs ... 90 secs | 1 minute             |
	 *
	 * @param {Date|String|Number} date - the given date
	 * @param {Object} [options] - the object with options
	 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
	 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the distance in words
	 *
	 * @example
	 * // If today is 1 January 2015, what is the distance to 2 July 2014?
	 * var result = distanceInWordsToNow(
	 *   new Date(2014, 6, 2)
	 * )
	 * //=> '6 months'
	 *
	 * @example
	 * // If now is 1 January 2015 00:00:00,
	 * // what is the distance to 1 January 2015 00:00:15, including seconds?
	 * var result = distanceInWordsToNow(
	 *   new Date(2015, 0, 1, 0, 0, 15),
	 *   {includeSeconds: true}
	 * )
	 * //=> 'less than 20 seconds'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 January 2016, with a suffix?
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 0, 1),
	 *   {addSuffix: true}
	 * )
	 * //=> 'in about 1 year'
	 *
	 * @example
	 * // If today is 1 January 2015,
	 * // what is the distance to 1 August 2016 in Esperanto?
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = distanceInWordsToNow(
	 *   new Date(2016, 7, 1),
	 *   {locale: eoLocale}
	 * )
	 * //=> 'pli ol 1 jaro'
	 */
	function distanceInWordsToNow (dirtyDate, dirtyOptions) {
	  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
	}
	
	module.exports = distanceInWordsToNow


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Return the array of dates within the specified range.
	 *
	 * @description
	 * Return the array of dates within the specified range.
	 *
	 * @param {Date|String|Number} startDate - the first date
	 * @param {Date|String|Number} endDate - the last date
	 * @param {Number} [step=1] - the step between each day
	 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
	 * @throws {Error} startDate cannot be after endDate
	 *
	 * @example
	 * // Each day between 6 October 2014 and 10 October 2014:
	 * var result = eachDay(
	 *   new Date(2014, 9, 6),
	 *   new Date(2014, 9, 10)
	 * )
	 * //=> [
	 * //   Mon Oct 06 2014 00:00:00,
	 * //   Tue Oct 07 2014 00:00:00,
	 * //   Wed Oct 08 2014 00:00:00,
	 * //   Thu Oct 09 2014 00:00:00,
	 * //   Fri Oct 10 2014 00:00:00
	 * // ]
	 */
	function eachDay (dirtyStartDate, dirtyEndDate, dirtyStep) {
	  var startDate = parse(dirtyStartDate)
	  var endDate = parse(dirtyEndDate)
	  var step = dirtyStep !== undefined ? dirtyStep : 1
	
	  var endTime = endDate.getTime()
	
	  if (startDate.getTime() > endTime) {
	    throw new Error('The first date cannot be after the second date')
	  }
	
	  var dates = []
	
	  var currentDate = startDate
	  currentDate.setHours(0, 0, 0, 0)
	
	  while (currentDate.getTime() <= endTime) {
	    dates.push(parse(currentDate))
	    currentDate.setDate(currentDate.getDate() + step)
	  }
	
	  return dates
	}
	
	module.exports = eachDay


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Return the end of a day for the given date.
	 *
	 * @description
	 * Return the end of a day for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a day
	 *
	 * @example
	 * // The end of a day for 2 September 2014 11:55:00:
	 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 02 2014 23:59:59.999
	 */
	function endOfDay (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfDay


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Hour Helpers
	 * @summary Return the end of an hour for the given date.
	 *
	 * @description
	 * Return the end of an hour for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of an hour
	 *
	 * @example
	 * // The end of an hour for 2 September 2014 11:55:00:
	 * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
	 * //=> Tue Sep 02 2014 11:59:59.999
	 */
	function endOfHour (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMinutes(59, 59, 999)
	  return date
	}
	
	module.exports = endOfHour


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var endOfWeek = __webpack_require__(63)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Return the end of an ISO week for the given date.
	 *
	 * @description
	 * Return the end of an ISO week for the given date.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of an ISO week
	 *
	 * @example
	 * // The end of an ISO week for 2 September 2014 11:55:00:
	 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sun Sep 07 2014 23:59:59.999
	 */
	function endOfISOWeek (dirtyDate) {
	  return endOfWeek(dirtyDate, {weekStartsOn: 1})
	}
	
	module.exports = endOfISOWeek


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Week Helpers
	 * @summary Return the end of a week for the given date.
	 *
	 * @description
	 * Return the end of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the end of a week
	 *
	 * @example
	 * // The end of a week for 2 September 2014 11:55:00:
	 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sat Sep 06 2014 23:59:59.999
	 *
	 * @example
	 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
	 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Sun Sep 07 2014 23:59:59.999
	 */
	function endOfWeek (dirtyDate, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)
	
	  date.setDate(date.getDate() + diff)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfWeek


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(15)
	var startOfISOWeek = __webpack_require__(16)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Return the end of an ISO week-numbering year for the given date.
	 *
	 * @description
	 * Return the end of an ISO week-numbering year,
	 * which always starts 3 days before the year's first Thursday.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of an ISO week-numbering year
	 *
	 * @example
	 * // The end of an ISO week-numbering year for 2 July 2005:
	 * var result = endOfISOYear(new Date(2005, 6, 2))
	 * //=> Sun Jan 01 2006 23:59:59.999
	 */
	function endOfISOYear (dirtyDate) {
	  var year = getISOYear(dirtyDate)
	  var fourthOfJanuaryOfNextYear = new Date(0)
	  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
	  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
	  var date = startOfISOWeek(fourthOfJanuaryOfNextYear)
	  date.setMilliseconds(date.getMilliseconds() - 1)
	  return date
	}
	
	module.exports = endOfISOYear


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Minute Helpers
	 * @summary Return the end of a minute for the given date.
	 *
	 * @description
	 * Return the end of a minute for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a minute
	 *
	 * @example
	 * // The end of a minute for 1 December 2014 22:15:45.400:
	 * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
	 * //=> Mon Dec 01 2014 22:15:59.999
	 */
	function endOfMinute (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setSeconds(59, 999)
	  return date
	}
	
	module.exports = endOfMinute


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Return the end of a month for the given date.
	 *
	 * @description
	 * Return the end of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a month
	 *
	 * @example
	 * // The end of a month for 2 September 2014 11:55:00:
	 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 30 2014 23:59:59.999
	 */
	function endOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  date.setFullYear(date.getFullYear(), month + 1, 0)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfMonth


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Quarter Helpers
	 * @summary Return the end of a year quarter for the given date.
	 *
	 * @description
	 * Return the end of a year quarter for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a quarter
	 *
	 * @example
	 * // The end of a quarter for 2 September 2014 11:55:00:
	 * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 30 2014 23:59:59.999
	 */
	function endOfQuarter (dirtyDate) {
	  var date = parse(dirtyDate)
	  var currentMonth = date.getMonth()
	  var month = currentMonth - currentMonth % 3 + 3
	  date.setMonth(month, 0)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfQuarter


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Second Helpers
	 * @summary Return the end of a second for the given date.
	 *
	 * @description
	 * Return the end of a second for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a second
	 *
	 * @example
	 * // The end of a second for 1 December 2014 22:15:45.400:
	 * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
	 * //=> Mon Dec 01 2014 22:15:45.999
	 */
	function endOfSecond (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMilliseconds(999)
	  return date
	}
	
	module.exports = endOfSecond


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var endOfDay = __webpack_require__(60)
	
	/**
	 * @category Day Helpers
	 * @summary Return the end of today.
	 *
	 * @description
	 * Return the end of today.
	 *
	 * @returns {Date} the end of today
	 *
	 * @example
	 * // If today is 6 October 2014:
	 * var result = endOfToday()
	 * //=> Mon Oct 6 2014 23:59:59.999
	 */
	function endOfToday () {
	  return endOfDay(new Date())
	}
	
	module.exports = endOfToday


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	/**
	 * @category Day Helpers
	 * @summary Return the end of tomorrow.
	 *
	 * @description
	 * Return the end of tomorrow.
	 *
	 * @returns {Date} the end of tomorrow
	 *
	 * @example
	 * // If today is 6 October 2014:
	 * var result = endOfTomorrow()
	 * //=> Tue Oct 7 2014 23:59:59.999
	 */
	function endOfTomorrow () {
	  var now = new Date()
	  var year = now.getFullYear()
	  var month = now.getMonth()
	  var day = now.getDate()
	
	  var date = new Date(0)
	  date.setFullYear(year, month, day + 1)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfTomorrow


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Return the end of a year for the given date.
	 *
	 * @description
	 * Return the end of a year for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of a year
	 *
	 * @example
	 * // The end of a year for 2 September 2014 11:55:00:
	 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
	 * //=> Wed Dec 31 2014 23:59:59.999
	 */
	function endOfYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  date.setFullYear(year + 1, 0, 0)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfYear


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/**
	 * @category Day Helpers
	 * @summary Return the end of yesterday.
	 *
	 * @description
	 * Return the end of yesterday.
	 *
	 * @returns {Date} the end of yesterday
	 *
	 * @example
	 * // If today is 6 October 2014:
	 * var result = endOfYesterday()
	 * //=> Sun Oct 5 2014 23:59:59.999
	 */
	function endOfYesterday () {
	  var now = new Date()
	  var year = now.getFullYear()
	  var month = now.getMonth()
	  var day = now.getDate()
	
	  var date = new Date(0)
	  date.setFullYear(year, month, day - 1)
	  date.setHours(23, 59, 59, 999)
	  return date
	}
	
	module.exports = endOfYesterday


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var getDayOfYear = __webpack_require__(74)
	var getISOWeek = __webpack_require__(76)
	var getISOYear = __webpack_require__(15)
	var parse = __webpack_require__(10)
	var isValid = __webpack_require__(77)
	var enLocale = __webpack_require__(53)
	
	/**
	 * @category Common Helpers
	 * @summary Format the date.
	 *
	 * @description
	 * Return the formatted date string in the given format.
	 *
	 * Accepted tokens:
	 * | Unit                    | Token | Result examples                  |
	 * |-------------------------|-------|----------------------------------|
	 * | Month                   | M     | 1, 2, ..., 12                    |
	 * |                         | Mo    | 1st, 2nd, ..., 12th              |
	 * |                         | MM    | 01, 02, ..., 12                  |
	 * |                         | MMM   | Jan, Feb, ..., Dec               |
	 * |                         | MMMM  | January, February, ..., December |
	 * | Quarter                 | Q     | 1, 2, 3, 4                       |
	 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
	 * | Day of month            | D     | 1, 2, ..., 31                    |
	 * |                         | Do    | 1st, 2nd, ..., 31st              |
	 * |                         | DD    | 01, 02, ..., 31                  |
	 * | Day of year             | DDD   | 1, 2, ..., 366                   |
	 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
	 * |                         | DDDD  | 001, 002, ..., 366               |
	 * | Day of week             | d     | 0, 1, ..., 6                     |
	 * |                         | do    | 0th, 1st, ..., 6th               |
	 * |                         | dd    | Su, Mo, ..., Sa                  |
	 * |                         | ddd   | Sun, Mon, ..., Sat               |
	 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
	 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
	 * | ISO week                | W     | 1, 2, ..., 53                    |
	 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
	 * |                         | WW    | 01, 02, ..., 53                  |
	 * | Year                    | YY    | 00, 01, ..., 99                  |
	 * |                         | YYYY  | 1900, 1901, ..., 2099            |
	 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
	 * |                         | GGGG  | 1900, 1901, ..., 2099            |
	 * | AM/PM                   | A     | AM, PM                           |
	 * |                         | a     | am, pm                           |
	 * |                         | aa    | a.m., p.m.                       |
	 * | Hour                    | H     | 0, 1, ... 23                     |
	 * |                         | HH    | 00, 01, ... 23                   |
	 * |                         | h     | 1, 2, ..., 12                    |
	 * |                         | hh    | 01, 02, ..., 12                  |
	 * | Minute                  | m     | 0, 1, ..., 59                    |
	 * |                         | mm    | 00, 01, ..., 59                  |
	 * | Second                  | s     | 0, 1, ..., 59                    |
	 * |                         | ss    | 00, 01, ..., 59                  |
	 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
	 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
	 * | Millisecond             | SSS   | 000, 001, ..., 999               |
	 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
	 * |                         | ZZ    | -0100, +0000, ..., +1200         |
	 * | Seconds timestamp       | X     | 512969520                        |
	 * | Milliseconds timestamp  | x     | 512969520900                     |
	 *
	 * The characters wrapped in square brackets are escaped.
	 *
	 * The result may vary by locale.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
	 * @param {Object} [options] - the object with options
	 * @param {Object} [options.locale=enLocale] - the locale object
	 * @returns {String} the formatted date string
	 *
	 * @example
	 * // Represent 11 February 2014 in middle-endian format:
	 * var result = format(
	 *   new Date(2014, 1, 11),
	 *   'MM/DD/YYYY'
	 * )
	 * //=> '02/11/2014'
	 *
	 * @example
	 * // Represent 2 July 2014 in Esperanto:
	 * var eoLocale = require('date-fns/locale/eo')
	 * var result = format(
	 *   new Date(2014, 6, 2),
	 *   'Do [de] MMMM YYYY',
	 *   {locale: eoLocale}
	 * )
	 * //=> '2-a de julio 2014'
	 */
	function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
	  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
	  var options = dirtyOptions || {}
	
	  var locale = options.locale
	  var localeFormatters = enLocale.format.formatters
	  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
	  if (locale && locale.format && locale.format.formatters) {
	    localeFormatters = locale.format.formatters
	
	    if (locale.format.formattingTokensRegExp) {
	      formattingTokensRegExp = locale.format.formattingTokensRegExp
	    }
	  }
	
	  var date = parse(dirtyDate)
	
	  if (!isValid(date)) {
	    return 'Invalid Date'
	  }
	
	  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)
	
	  return formatFn(date)
	}
	
	var formatters = {
	  // Month: 1, 2, ..., 12
	  'M': function (date) {
	    return date.getMonth() + 1
	  },
	
	  // Month: 01, 02, ..., 12
	  'MM': function (date) {
	    return addLeadingZeros(date.getMonth() + 1, 2)
	  },
	
	  // Quarter: 1, 2, 3, 4
	  'Q': function (date) {
	    return Math.ceil((date.getMonth() + 1) / 3)
	  },
	
	  // Day of month: 1, 2, ..., 31
	  'D': function (date) {
	    return date.getDate()
	  },
	
	  // Day of month: 01, 02, ..., 31
	  'DD': function (date) {
	    return addLeadingZeros(date.getDate(), 2)
	  },
	
	  // Day of year: 1, 2, ..., 366
	  'DDD': function (date) {
	    return getDayOfYear(date)
	  },
	
	  // Day of year: 001, 002, ..., 366
	  'DDDD': function (date) {
	    return addLeadingZeros(getDayOfYear(date), 3)
	  },
	
	  // Day of week: 0, 1, ..., 6
	  'd': function (date) {
	    return date.getDay()
	  },
	
	  // Day of ISO week: 1, 2, ..., 7
	  'E': function (date) {
	    return date.getDay() || 7
	  },
	
	  // ISO week: 1, 2, ..., 53
	  'W': function (date) {
	    return getISOWeek(date)
	  },
	
	  // ISO week: 01, 02, ..., 53
	  'WW': function (date) {
	    return addLeadingZeros(getISOWeek(date), 2)
	  },
	
	  // Year: 00, 01, ..., 99
	  'YY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4).substr(2)
	  },
	
	  // Year: 1900, 1901, ..., 2099
	  'YYYY': function (date) {
	    return addLeadingZeros(date.getFullYear(), 4)
	  },
	
	  // ISO week-numbering year: 00, 01, ..., 99
	  'GG': function (date) {
	    return String(getISOYear(date)).substr(2)
	  },
	
	  // ISO week-numbering year: 1900, 1901, ..., 2099
	  'GGGG': function (date) {
	    return getISOYear(date)
	  },
	
	  // Hour: 0, 1, ... 23
	  'H': function (date) {
	    return date.getHours()
	  },
	
	  // Hour: 00, 01, ..., 23
	  'HH': function (date) {
	    return addLeadingZeros(date.getHours(), 2)
	  },
	
	  // Hour: 1, 2, ..., 12
	  'h': function (date) {
	    var hours = date.getHours()
	    if (hours === 0) {
	      return 12
	    } else if (hours > 12) {
	      return hours % 12
	    } else {
	      return hours
	    }
	  },
	
	  // Hour: 01, 02, ..., 12
	  'hh': function (date) {
	    return addLeadingZeros(formatters['h'](date), 2)
	  },
	
	  // Minute: 0, 1, ..., 59
	  'm': function (date) {
	    return date.getMinutes()
	  },
	
	  // Minute: 00, 01, ..., 59
	  'mm': function (date) {
	    return addLeadingZeros(date.getMinutes(), 2)
	  },
	
	  // Second: 0, 1, ..., 59
	  's': function (date) {
	    return date.getSeconds()
	  },
	
	  // Second: 00, 01, ..., 59
	  'ss': function (date) {
	    return addLeadingZeros(date.getSeconds(), 2)
	  },
	
	  // 1/10 of second: 0, 1, ..., 9
	  'S': function (date) {
	    return Math.floor(date.getMilliseconds() / 100)
	  },
	
	  // 1/100 of second: 00, 01, ..., 99
	  'SS': function (date) {
	    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
	  },
	
	  // Millisecond: 000, 001, ..., 999
	  'SSS': function (date) {
	    return addLeadingZeros(date.getMilliseconds(), 3)
	  },
	
	  // Timezone: -01:00, +00:00, ... +12:00
	  'Z': function (date) {
	    return formatTimezone(date.getTimezoneOffset(), ':')
	  },
	
	  // Timezone: -0100, +0000, ... +1200
	  'ZZ': function (date) {
	    return formatTimezone(date.getTimezoneOffset())
	  },
	
	  // Seconds timestamp: 512969520
	  'X': function (date) {
	    return Math.floor(date.getTime() / 1000)
	  },
	
	  // Milliseconds timestamp: 512969520900
	  'x': function (date) {
	    return date.getTime()
	  }
	}
	
	function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
	  var array = formatStr.match(formattingTokensRegExp)
	  var length = array.length
	
	  var i
	  var formatter
	  for (i = 0; i < length; i++) {
	    formatter = localeFormatters[array[i]] || formatters[array[i]]
	    if (formatter) {
	      array[i] = formatter
	    } else {
	      array[i] = removeFormattingTokens(array[i])
	    }
	  }
	
	  return function (date) {
	    var output = ''
	    for (var i = 0; i < length; i++) {
	      if (array[i] instanceof Function) {
	        output += array[i](date, formatters)
	      } else {
	        output += array[i]
	      }
	    }
	    return output
	  }
	}
	
	function removeFormattingTokens (input) {
	  if (input.match(/\[[\s\S]/)) {
	    return input.replace(/^\[|]$/g, '')
	  }
	  return input.replace(/\\/g, '')
	}
	
	function formatTimezone (offset, delimeter) {
	  delimeter = delimeter || ''
	  var sign = offset > 0 ? '-' : '+'
	  var absOffset = Math.abs(offset)
	  var hours = Math.floor(absOffset / 60)
	  var minutes = absOffset % 60
	  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
	}
	
	function addLeadingZeros (number, targetLength) {
	  var output = Math.abs(number).toString()
	  while (output.length < targetLength) {
	    output = '0' + output
	  }
	  return output
	}
	
	module.exports = format


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var startOfYear = __webpack_require__(75)
	var differenceInCalendarDays = __webpack_require__(20)
	
	/**
	 * @category Day Helpers
	 * @summary Get the day of the year of the given date.
	 *
	 * @description
	 * Get the day of the year of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of year
	 *
	 * @example
	 * // Which day of the year is 2 July 2014?
	 * var result = getDayOfYear(new Date(2014, 6, 2))
	 * //=> 183
	 */
	function getDayOfYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = differenceInCalendarDays(date, startOfYear(date))
	  var dayOfYear = diff + 1
	  return dayOfYear
	}
	
	module.exports = getDayOfYear


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Return the start of a year for the given date.
	 *
	 * @description
	 * Return the start of a year for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a year
	 *
	 * @example
	 * // The start of a year for 2 September 2014 11:55:00:
	 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
	 * //=> Wed Jan 01 2014 00:00:00
	 */
	function startOfYear (dirtyDate) {
	  var cleanDate = parse(dirtyDate)
	  var date = new Date(0)
	  date.setFullYear(cleanDate.getFullYear(), 0, 1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfYear


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var startOfISOWeek = __webpack_require__(16)
	var startOfISOYear = __webpack_require__(19)
	
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category ISO Week Helpers
	 * @summary Get the ISO week of the given date.
	 *
	 * @description
	 * Get the ISO week of the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the ISO week
	 *
	 * @example
	 * // Which week of the ISO-week numbering year is 2 January 2005?
	 * var result = getISOWeek(new Date(2005, 0, 2))
	 * //=> 53
	 */
	function getISOWeek (dirtyDate) {
	  var date = parse(dirtyDate)
	  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()
	
	  // Round the number of days to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
	}
	
	module.exports = getISOWeek


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var isDate = __webpack_require__(11)
	
	/**
	 * @category Common Helpers
	 * @summary Is the given date valid?
	 *
	 * @description
	 * Returns false if argument is Invalid Date and true otherwise.
	 * Invalid Date is a Date, whose time value is NaN.
	 *
	 * Time value of Date: http://es5.github.io/#x15.9.1.1
	 *
	 * @param {Date} date - the date to check
	 * @returns {Boolean} the date is valid
	 * @throws {TypeError} argument must be an instance of Date
	 *
	 * @example
	 * // For the valid date:
	 * var result = isValid(new Date(2014, 1, 31))
	 * //=> true
	 *
	 * @example
	 * // For the invalid date:
	 * var result = isValid(new Date(''))
	 * //=> false
	 */
	function isValid (dirtyDate) {
	  if (isDate(dirtyDate)) {
	    return !isNaN(dirtyDate)
	  } else {
	    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
	  }
	}
	
	module.exports = isValid


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Get the day of the month of the given date.
	 *
	 * @description
	 * Get the day of the month of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of month
	 *
	 * @example
	 * // Which day of the month is 29 February 2012?
	 * var result = getDate(new Date(2012, 1, 29))
	 * //=> 29
	 */
	function getDate (dirtyDate) {
	  var date = parse(dirtyDate)
	  var dayOfMonth = date.getDate()
	  return dayOfMonth
	}
	
	module.exports = getDate


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Get the day of the week of the given date.
	 *
	 * @description
	 * Get the day of the week of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of week
	 *
	 * @example
	 * // Which day of the week is 29 February 2012?
	 * var result = getDay(new Date(2012, 1, 29))
	 * //=> 3
	 */
	function getDay (dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  return day
	}
	
	module.exports = getDay


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var isLeapYear = __webpack_require__(81)
	
	/**
	 * @category Year Helpers
	 * @summary Get the number of days in a year of the given date.
	 *
	 * @description
	 * Get the number of days in a year of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the number of days in a year
	 *
	 * @example
	 * // How many days are in 2012?
	 * var result = getDaysInYear(new Date(2012, 0, 1))
	 * //=> 366
	 */
	function getDaysInYear (dirtyDate) {
	  return isLeapYear(dirtyDate) ? 366 : 365
	}
	
	module.exports = getDaysInYear


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Is the given date in the leap year?
	 *
	 * @description
	 * Is the given date in the leap year?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in the leap year
	 *
	 * @example
	 * // Is 1 September 2012 in the leap year?
	 * var result = isLeapYear(new Date(2012, 8, 1))
	 * //=> true
	 */
	function isLeapYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
	}
	
	module.exports = isLeapYear


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Hour Helpers
	 * @summary Get the hours of the given date.
	 *
	 * @description
	 * Get the hours of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the hours
	 *
	 * @example
	 * // Get the hours of 29 February 2012 11:45:00:
	 * var result = getHours(new Date(2012, 1, 29, 11, 45))
	 * //=> 11
	 */
	function getHours (dirtyDate) {
	  var date = parse(dirtyDate)
	  var hours = date.getHours()
	  return hours
	}
	
	module.exports = getHours


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Get the day of the ISO week of the given date.
	 *
	 * @description
	 * Get the day of the ISO week of the given date,
	 * which is 7 for Sunday, 1 for Monday etc.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the day of ISO week
	 *
	 * @example
	 * // Which day of the ISO week is 26 February 2012?
	 * var result = getISODay(new Date(2012, 1, 26))
	 * //=> 7
	 */
	function getISODay (dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	
	  if (day === 0) {
	    day = 7
	  }
	
	  return day
	}
	
	module.exports = getISODay


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(19)
	var addWeeks = __webpack_require__(27)
	
	var MILLISECONDS_IN_WEEK = 604800000
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
	 *
	 * @description
	 * Get the number of weeks in an ISO week-numbering year of the given date.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the number of ISO weeks in a year
	 *
	 * @example
	 * // How many weeks are in ISO week-numbering year 2015?
	 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
	 * //=> 53
	 */
	function getISOWeeksInYear (dirtyDate) {
	  var thisYear = startOfISOYear(dirtyDate)
	  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
	  var diff = nextYear.valueOf() - thisYear.valueOf()
	  // Round the number of weeks to the nearest integer
	  // because the number of milliseconds in a week is not constant
	  // (e.g. it's different in the week of the daylight saving time clock shift)
	  return Math.round(diff / MILLISECONDS_IN_WEEK)
	}
	
	module.exports = getISOWeeksInYear


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Get the milliseconds of the given date.
	 *
	 * @description
	 * Get the milliseconds of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the milliseconds
	 *
	 * @example
	 * // Get the milliseconds of 29 February 2012 11:45:05.123:
	 * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
	 * //=> 123
	 */
	function getMilliseconds (dirtyDate) {
	  var date = parse(dirtyDate)
	  var milliseconds = date.getMilliseconds()
	  return milliseconds
	}
	
	module.exports = getMilliseconds


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Minute Helpers
	 * @summary Get the minutes of the given date.
	 *
	 * @description
	 * Get the minutes of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the minutes
	 *
	 * @example
	 * // Get the minutes of 29 February 2012 11:45:05:
	 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
	 * //=> 45
	 */
	function getMinutes (dirtyDate) {
	  var date = parse(dirtyDate)
	  var minutes = date.getMinutes()
	  return minutes
	}
	
	module.exports = getMinutes


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Get the month of the given date.
	 *
	 * @description
	 * Get the month of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the month
	 *
	 * @example
	 * // Which month is 29 February 2012?
	 * var result = getMonth(new Date(2012, 1, 29))
	 * //=> 1
	 */
	function getMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  return month
	}
	
	module.exports = getMonth


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000
	
	/**
	 * @category Range Helpers
	 * @summary Get the number of days that overlap in two date ranges
	 *
	 * @description
	 * Get the number of days that overlap in two date ranges
	 *
	 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
	 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
	 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
	 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
	 * @returns {Number} the number of days that overlap in two date ranges
	 * @throws {Error} startDate of a date range cannot be after its endDate
	 *
	 * @example
	 * // For overlapping date ranges adds 1 for each started overlapping day:
	 * getOverlappingDaysInRanges(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
	 * )
	 * //=> 3
	 *
	 * @example
	 * // For non-overlapping date ranges returns 0:
	 * getOverlappingDaysInRanges(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
	 * )
	 * //=> 0
	 */
	function getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
	  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
	  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
	  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
	  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()
	
	  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
	    throw new Error('The start of the range cannot be after the end of the range')
	  }
	
	  var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
	
	  if (!isOverlapping) {
	    return 0
	  }
	
	  var overlapStartDate = comparedStartTime < initialStartTime
	    ? initialStartTime
	    : comparedStartTime
	
	  var overlapEndDate = comparedEndTime > initialEndTime
	    ? initialEndTime
	    : comparedEndTime
	
	  var differenceInMs = overlapEndDate - overlapStartDate
	
	  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
	}
	
	module.exports = getOverlappingDaysInRanges


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Second Helpers
	 * @summary Get the seconds of the given date.
	 *
	 * @description
	 * Get the seconds of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the seconds
	 *
	 * @example
	 * // Get the seconds of 29 February 2012 11:45:05.123:
	 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
	 * //=> 5
	 */
	function getSeconds (dirtyDate) {
	  var date = parse(dirtyDate)
	  var seconds = date.getSeconds()
	  return seconds
	}
	
	module.exports = getSeconds


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Timestamp Helpers
	 * @summary Get the milliseconds timestamp of the given date.
	 *
	 * @description
	 * Get the milliseconds timestamp of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the timestamp
	 *
	 * @example
	 * // Get the timestamp of 29 February 2012 11:45:05.123:
	 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
	 * //=> 1330515905123
	 */
	function getTime (dirtyDate) {
	  var date = parse(dirtyDate)
	  var timestamp = date.getTime()
	  return timestamp
	}
	
	module.exports = getTime


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Get the year of the given date.
	 *
	 * @description
	 * Get the year of the given date.
	 *
	 * @param {Date|String|Number} date - the given date
	 * @returns {Number} the year
	 *
	 * @example
	 * // Which year is 2 July 2014?
	 * var result = getYear(new Date(2014, 6, 2))
	 * //=> 2014
	 */
	function getYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  return year
	}
	
	module.exports = getYear


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Is the first date after the second one?
	 *
	 * @description
	 * Is the first date after the second one?
	 *
	 * @param {Date|String|Number} date - the date that should be after the other one to return true
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @returns {Boolean} the first date is after the second date
	 *
	 * @example
	 * // Is 10 July 1989 after 11 February 1987?
	 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> true
	 */
	function isAfter (dirtyDate, dirtyDateToCompare) {
	  var date = parse(dirtyDate)
	  var dateToCompare = parse(dirtyDateToCompare)
	  return date.getTime() > dateToCompare.getTime()
	}
	
	module.exports = isAfter


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Is the first date before the second one?
	 *
	 * @description
	 * Is the first date before the second one?
	 *
	 * @param {Date|String|Number} date - the date that should be before the other one to return true
	 * @param {Date|String|Number} dateToCompare - the date to compare with
	 * @returns {Boolean} the first date is before the second date
	 *
	 * @example
	 * // Is 10 July 1989 before 11 February 1987?
	 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
	 * //=> false
	 */
	function isBefore (dirtyDate, dirtyDateToCompare) {
	  var date = parse(dirtyDate)
	  var dateToCompare = parse(dirtyDateToCompare)
	  return date.getTime() < dateToCompare.getTime()
	}
	
	module.exports = isBefore


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Are the given dates equal?
	 *
	 * @description
	 * Are the given dates equal?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to compare
	 * @param {Date|String|Number} dateRight - the second date to compare
	 * @returns {Boolean} the dates are equal
	 *
	 * @example
	 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
	 * var result = isEqual(
	 *   new Date(2014, 6, 2, 6, 30, 45, 0)
	 *   new Date(2014, 6, 2, 6, 30, 45, 500)
	 * )
	 * //=> false
	 */
	function isEqual (dirtyLeftDate, dirtyRightDate) {
	  var dateLeft = parse(dirtyLeftDate)
	  var dateRight = parse(dirtyRightDate)
	  return dateLeft.getTime() === dateRight.getTime()
	}
	
	module.exports = isEqual


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Is the given date the first day of a month?
	 *
	 * @description
	 * Is the given date the first day of a month?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is the first day of a month
	 *
	 * @example
	 * // Is 1 September 2014 the first day of a month?
	 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
	 * //=> true
	 */
	function isFirstDayOfMonth (dirtyDate) {
	  return parse(dirtyDate).getDate() === 1
	}
	
	module.exports = isFirstDayOfMonth


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date Friday?
	 *
	 * @description
	 * Is the given date Friday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is Friday
	 *
	 * @example
	 * // Is 26 September 2014 Friday?
	 * var result = isFriday(new Date(2014, 8, 26))
	 * //=> true
	 */
	function isFriday (dirtyDate) {
	  return parse(dirtyDate).getDay() === 5
	}
	
	module.exports = isFriday


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Is the given date in the future?
	 *
	 * @description
	 * Is the given date in the future?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in the future
	 *
	 * @example
	 * // If today is 6 October 2014, is 31 December 2014 in the future?
	 * var result = isFuture(new Date(2014, 11, 31))
	 * //=> true
	 */
	function isFuture (dirtyDate) {
	  return parse(dirtyDate).getTime() > new Date().getTime()
	}
	
	module.exports = isFuture


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var endOfDay = __webpack_require__(60)
	var endOfMonth = __webpack_require__(66)
	
	/**
	 * @category Month Helpers
	 * @summary Is the given date the last day of a month?
	 *
	 * @description
	 * Is the given date the last day of a month?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is the last day of a month
	 *
	 * @example
	 * // Is 28 February 2014 the last day of a month?
	 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
	 * //=> true
	 */
	function isLastDayOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  return endOfDay(date).getTime() === endOfMonth(date).getTime()
	}
	
	module.exports = isLastDayOfMonth


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date Monday?
	 *
	 * @description
	 * Is the given date Monday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is Monday
	 *
	 * @example
	 * // Is 22 September 2014 Monday?
	 * var result = isMonday(new Date(2014, 8, 22))
	 * //=> true
	 */
	function isMonday (dirtyDate) {
	  return parse(dirtyDate).getDay() === 1
	}
	
	module.exports = isMonday


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Is the given date in the past?
	 *
	 * @description
	 * Is the given date in the past?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in the past
	 *
	 * @example
	 * // If today is 6 October 2014, is 2 July 2014 in the past?
	 * var result = isPast(new Date(2014, 6, 2))
	 * //=> true
	 */
	function isPast (dirtyDate) {
	  return parse(dirtyDate).getTime() < new Date().getTime()
	}
	
	module.exports = isPast


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(21)
	
	/**
	 * @category Day Helpers
	 * @summary Are the given dates in the same day?
	 *
	 * @description
	 * Are the given dates in the same day?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same day
	 *
	 * @example
	 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
	 * var result = isSameDay(
	 *   new Date(2014, 8, 4, 6, 0),
	 *   new Date(2014, 8, 4, 18, 0)
	 * )
	 * //=> true
	 */
	function isSameDay (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
	  var dateRightStartOfDay = startOfDay(dirtyDateRight)
	
	  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
	}
	
	module.exports = isSameDay


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfHour = __webpack_require__(103)
	
	/**
	 * @category Hour Helpers
	 * @summary Are the given dates in the same hour?
	 *
	 * @description
	 * Are the given dates in the same hour?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same hour
	 *
	 * @example
	 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
	 * var result = isSameHour(
	 *   new Date(2014, 8, 4, 6, 0),
	 *   new Date(2014, 8, 4, 6, 30)
	 * )
	 * //=> true
	 */
	function isSameHour (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
	  var dateRightStartOfHour = startOfHour(dirtyDateRight)
	
	  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
	}
	
	module.exports = isSameHour


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Hour Helpers
	 * @summary Return the start of an hour for the given date.
	 *
	 * @description
	 * Return the start of an hour for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of an hour
	 *
	 * @example
	 * // The start of an hour for 2 September 2014 11:55:00:
	 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
	 * //=> Tue Sep 02 2014 11:00:00
	 */
	function startOfHour (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMinutes(0, 0, 0)
	  return date
	}
	
	module.exports = startOfHour


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameWeek = __webpack_require__(105)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Are the given dates in the same ISO week?
	 *
	 * @description
	 * Are the given dates in the same ISO week?
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same ISO week
	 *
	 * @example
	 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
	 * var result = isSameISOWeek(
	 *   new Date(2014, 8, 1),
	 *   new Date(2014, 8, 7)
	 * )
	 * //=> true
	 */
	function isSameISOWeek (dirtyDateLeft, dirtyDateRight) {
	  return isSameWeek(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})
	}
	
	module.exports = isSameISOWeek


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfWeek = __webpack_require__(17)
	
	/**
	 * @category Week Helpers
	 * @summary Are the given dates in the same week?
	 *
	 * @description
	 * Are the given dates in the same week?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Boolean} the dates are in the same week
	 *
	 * @example
	 * // Are 31 August 2014 and 4 September 2014 in the same week?
	 * var result = isSameWeek(
	 *   new Date(2014, 7, 31),
	 *   new Date(2014, 8, 4)
	 * )
	 * //=> true
	 *
	 * @example
	 * // If week starts with Monday,
	 * // are 31 August 2014 and 4 September 2014 in the same week?
	 * var result = isSameWeek(
	 *   new Date(2014, 7, 31),
	 *   new Date(2014, 8, 4),
	 *   {weekStartsOn: 1}
	 * )
	 * //=> false
	 */
	function isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
	  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)
	  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)
	
	  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
	}
	
	module.exports = isSameWeek


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfISOYear = __webpack_require__(19)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Are the given dates in the same ISO week-numbering year?
	 *
	 * @description
	 * Are the given dates in the same ISO week-numbering year?
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same ISO week-numbering year
	 *
	 * @example
	 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
	 * var result = isSameISOYear(
	 *   new Date(2003, 11, 29),
	 *   new Date(2005, 0, 2)
	 * )
	 * //=> true
	 */
	function isSameISOYear (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)
	  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)
	
	  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
	}
	
	module.exports = isSameISOYear


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfMinute = __webpack_require__(108)
	
	/**
	 * @category Minute Helpers
	 * @summary Are the given dates in the same minute?
	 *
	 * @description
	 * Are the given dates in the same minute?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same minute
	 *
	 * @example
	 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
	 * // in the same minute?
	 * var result = isSameMinute(
	 *   new Date(2014, 8, 4, 6, 30),
	 *   new Date(2014, 8, 4, 6, 30, 15)
	 * )
	 * //=> true
	 */
	function isSameMinute (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
	  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)
	
	  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
	}
	
	module.exports = isSameMinute


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Minute Helpers
	 * @summary Return the start of a minute for the given date.
	 *
	 * @description
	 * Return the start of a minute for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a minute
	 *
	 * @example
	 * // The start of a minute for 1 December 2014 22:15:45.400:
	 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
	 * //=> Mon Dec 01 2014 22:15:00
	 */
	function startOfMinute (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setSeconds(0, 0)
	  return date
	}
	
	module.exports = startOfMinute


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Are the given dates in the same month?
	 *
	 * @description
	 * Are the given dates in the same month?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same month
	 *
	 * @example
	 * // Are 2 September 2014 and 25 September 2014 in the same month?
	 * var result = isSameMonth(
	 *   new Date(2014, 8, 2),
	 *   new Date(2014, 8, 25)
	 * )
	 * //=> true
	 */
	function isSameMonth (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getFullYear() === dateRight.getFullYear() &&
	    dateLeft.getMonth() === dateRight.getMonth()
	}
	
	module.exports = isSameMonth


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfQuarter = __webpack_require__(111)
	
	/**
	 * @category Quarter Helpers
	 * @summary Are the given dates in the same year quarter?
	 *
	 * @description
	 * Are the given dates in the same year quarter?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same quarter
	 *
	 * @example
	 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
	 * var result = isSameQuarter(
	 *   new Date(2014, 0, 1),
	 *   new Date(2014, 2, 8)
	 * )
	 * //=> true
	 */
	function isSameQuarter (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
	  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)
	
	  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
	}
	
	module.exports = isSameQuarter


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Quarter Helpers
	 * @summary Return the start of a year quarter for the given date.
	 *
	 * @description
	 * Return the start of a year quarter for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a quarter
	 *
	 * @example
	 * // The start of a quarter for 2 September 2014 11:55:00:
	 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Jul 01 2014 00:00:00
	 */
	function startOfQuarter (dirtyDate) {
	  var date = parse(dirtyDate)
	  var currentMonth = date.getMonth()
	  var month = currentMonth - currentMonth % 3
	  date.setMonth(month, 1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfQuarter


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfSecond = __webpack_require__(113)
	
	/**
	 * @category Second Helpers
	 * @summary Are the given dates in the same second?
	 *
	 * @description
	 * Are the given dates in the same second?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same second
	 *
	 * @example
	 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
	 * // in the same second?
	 * var result = isSameSecond(
	 *   new Date(2014, 8, 4, 6, 30, 15),
	 *   new Date(2014, 8, 4, 6, 30, 15, 500)
	 * )
	 * //=> true
	 */
	function isSameSecond (dirtyDateLeft, dirtyDateRight) {
	  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
	  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)
	
	  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
	}
	
	module.exports = isSameSecond


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Second Helpers
	 * @summary Return the start of a second for the given date.
	 *
	 * @description
	 * Return the start of a second for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a second
	 *
	 * @example
	 * // The start of a second for 1 December 2014 22:15:45.400:
	 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
	 * //=> Mon Dec 01 2014 22:15:45.000
	 */
	function startOfSecond (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setMilliseconds(0)
	  return date
	}
	
	module.exports = startOfSecond


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Are the given dates in the same year?
	 *
	 * @description
	 * Are the given dates in the same year?
	 *
	 * @param {Date|String|Number} dateLeft - the first date to check
	 * @param {Date|String|Number} dateRight - the second date to check
	 * @returns {Boolean} the dates are in the same year
	 *
	 * @example
	 * // Are 2 September 2014 and 25 September 2014 in the same year?
	 * var result = isSameYear(
	 *   new Date(2014, 8, 2),
	 *   new Date(2014, 8, 25)
	 * )
	 * //=> true
	 */
	function isSameYear (dirtyDateLeft, dirtyDateRight) {
	  var dateLeft = parse(dirtyDateLeft)
	  var dateRight = parse(dirtyDateRight)
	  return dateLeft.getFullYear() === dateRight.getFullYear()
	}
	
	module.exports = isSameYear


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date Saturday?
	 *
	 * @description
	 * Is the given date Saturday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is Saturday
	 *
	 * @example
	 * // Is 27 September 2014 Saturday?
	 * var result = isSaturday(new Date(2014, 8, 27))
	 * //=> true
	 */
	function isSaturday (dirtyDate) {
	  return parse(dirtyDate).getDay() === 6
	}
	
	module.exports = isSaturday


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date Sunday?
	 *
	 * @description
	 * Is the given date Sunday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is Sunday
	 *
	 * @example
	 * // Is 21 September 2014 Sunday?
	 * var result = isSunday(new Date(2014, 8, 21))
	 * //=> true
	 */
	function isSunday (dirtyDate) {
	  return parse(dirtyDate).getDay() === 0
	}
	
	module.exports = isSunday


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameHour = __webpack_require__(102)
	
	/**
	 * @category Hour Helpers
	 * @summary Is the given date in the same hour as the current date?
	 *
	 * @description
	 * Is the given date in the same hour as the current date?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this hour
	 *
	 * @example
	 * // If now is 25 September 2014 18:30:15.500,
	 * // is 25 September 2014 18:00:00 in this hour?
	 * var result = isThisHour(new Date(2014, 8, 25, 18))
	 * //=> true
	 */
	function isThisHour (dirtyDate) {
	  return isSameHour(new Date(), dirtyDate)
	}
	
	module.exports = isThisHour


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameISOWeek = __webpack_require__(104)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Is the given date in the same ISO week as the current date?
	 *
	 * @description
	 * Is the given date in the same ISO week as the current date?
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this ISO week
	 *
	 * @example
	 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
	 * var result = isThisISOWeek(new Date(2014, 8, 22))
	 * //=> true
	 */
	function isThisISOWeek (dirtyDate) {
	  return isSameISOWeek(new Date(), dirtyDate)
	}
	
	module.exports = isThisISOWeek


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameISOYear = __webpack_require__(106)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Is the given date in the same ISO week-numbering year as the current date?
	 *
	 * @description
	 * Is the given date in the same ISO week-numbering year as the current date?
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this ISO week-numbering year
	 *
	 * @example
	 * // If today is 25 September 2014,
	 * // is 30 December 2013 in this ISO week-numbering year?
	 * var result = isThisISOYear(new Date(2013, 11, 30))
	 * //=> true
	 */
	function isThisISOYear (dirtyDate) {
	  return isSameISOYear(new Date(), dirtyDate)
	}
	
	module.exports = isThisISOYear


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameMinute = __webpack_require__(107)
	
	/**
	 * @category Minute Helpers
	 * @summary Is the given date in the same minute as the current date?
	 *
	 * @description
	 * Is the given date in the same minute as the current date?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this minute
	 *
	 * @example
	 * // If now is 25 September 2014 18:30:15.500,
	 * // is 25 September 2014 18:30:00 in this minute?
	 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
	 * //=> true
	 */
	function isThisMinute (dirtyDate) {
	  return isSameMinute(new Date(), dirtyDate)
	}
	
	module.exports = isThisMinute


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameMonth = __webpack_require__(109)
	
	/**
	 * @category Month Helpers
	 * @summary Is the given date in the same month as the current date?
	 *
	 * @description
	 * Is the given date in the same month as the current date?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this month
	 *
	 * @example
	 * // If today is 25 September 2014, is 15 September 2014 in this month?
	 * var result = isThisMonth(new Date(2014, 8, 15))
	 * //=> true
	 */
	function isThisMonth (dirtyDate) {
	  return isSameMonth(new Date(), dirtyDate)
	}
	
	module.exports = isThisMonth


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameQuarter = __webpack_require__(110)
	
	/**
	 * @category Quarter Helpers
	 * @summary Is the given date in the same quarter as the current date?
	 *
	 * @description
	 * Is the given date in the same quarter as the current date?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this quarter
	 *
	 * @example
	 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
	 * var result = isThisQuarter(new Date(2014, 6, 2))
	 * //=> true
	 */
	function isThisQuarter (dirtyDate) {
	  return isSameQuarter(new Date(), dirtyDate)
	}
	
	module.exports = isThisQuarter


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameSecond = __webpack_require__(112)
	
	/**
	 * @category Second Helpers
	 * @summary Is the given date in the same second as the current date?
	 *
	 * @description
	 * Is the given date in the same second as the current date?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this second
	 *
	 * @example
	 * // If now is 25 September 2014 18:30:15.500,
	 * // is 25 September 2014 18:30:15.000 in this second?
	 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
	 * //=> true
	 */
	function isThisSecond (dirtyDate) {
	  return isSameSecond(new Date(), dirtyDate)
	}
	
	module.exports = isThisSecond


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameWeek = __webpack_require__(105)
	
	/**
	 * @category Week Helpers
	 * @summary Is the given date in the same week as the current date?
	 *
	 * @description
	 * Is the given date in the same week as the current date?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Boolean} the date is in this week
	 *
	 * @example
	 * // If today is 25 September 2014, is 21 September 2014 in this week?
	 * var result = isThisWeek(new Date(2014, 8, 21))
	 * //=> true
	 *
	 * @example
	 * // If today is 25 September 2014 and week starts with Monday
	 * // is 21 September 2014 in this week?
	 * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
	 * //=> false
	 */
	function isThisWeek (dirtyDate, dirtyOptions) {
	  return isSameWeek(new Date(), dirtyDate, dirtyOptions)
	}
	
	module.exports = isThisWeek


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var isSameYear = __webpack_require__(114)
	
	/**
	 * @category Year Helpers
	 * @summary Is the given date in the same year as the current date?
	 *
	 * @description
	 * Is the given date in the same year as the current date?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is in this year
	 *
	 * @example
	 * // If today is 25 September 2014, is 2 July 2014 in this year?
	 * var result = isThisYear(new Date(2014, 6, 2))
	 * //=> true
	 */
	function isThisYear (dirtyDate) {
	  return isSameYear(new Date(), dirtyDate)
	}
	
	module.exports = isThisYear


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date Thursday?
	 *
	 * @description
	 * Is the given date Thursday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is Thursday
	 *
	 * @example
	 * // Is 25 September 2014 Thursday?
	 * var result = isThursday(new Date(2014, 8, 25))
	 * //=> true
	 */
	function isThursday (dirtyDate) {
	  return parse(dirtyDate).getDay() === 4
	}
	
	module.exports = isThursday


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(21)
	
	/**
	 * @category Day Helpers
	 * @summary Is the given date today?
	 *
	 * @description
	 * Is the given date today?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is today
	 *
	 * @example
	 * // If today is 6 October 2014, is 6 October 14:00:00 today?
	 * var result = isToday(new Date(2014, 9, 6, 14, 0))
	 * //=> true
	 */
	function isToday (dirtyDate) {
	  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
	}
	
	module.exports = isToday


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(21)
	
	/**
	 * @category Day Helpers
	 * @summary Is the given date tomorrow?
	 *
	 * @description
	 * Is the given date tomorrow?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is tomorrow
	 *
	 * @example
	 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
	 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
	 * //=> true
	 */
	function isTomorrow (dirtyDate) {
	  var tomorrow = new Date()
	  tomorrow.setDate(tomorrow.getDate() + 1)
	  return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime()
	}
	
	module.exports = isTomorrow


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date Tuesday?
	 *
	 * @description
	 * Is the given date Tuesday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is Tuesday
	 *
	 * @example
	 * // Is 23 September 2014 Tuesday?
	 * var result = isTuesday(new Date(2014, 8, 23))
	 * //=> true
	 */
	function isTuesday (dirtyDate) {
	  return parse(dirtyDate).getDay() === 2
	}
	
	module.exports = isTuesday


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Is the given date Wednesday?
	 *
	 * @description
	 * Is the given date Wednesday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is Wednesday
	 *
	 * @example
	 * // Is 24 September 2014 Wednesday?
	 * var result = isWednesday(new Date(2014, 8, 24))
	 * //=> true
	 */
	function isWednesday (dirtyDate) {
	  return parse(dirtyDate).getDay() === 3
	}
	
	module.exports = isWednesday


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Weekday Helpers
	 * @summary Does the given date fall on a weekend?
	 *
	 * @description
	 * Does the given date fall on a weekend?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date falls on a weekend
	 *
	 * @example
	 * // Does 5 October 2014 fall on a weekend?
	 * var result = isWeekend(new Date(2014, 9, 5))
	 * //=> true
	 */
	function isWeekend (dirtyDate) {
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  return day === 0 || day === 6
	}
	
	module.exports = isWeekend


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Range Helpers
	 * @summary Is the given date within the range?
	 *
	 * @description
	 * Is the given date within the range?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @param {Date|String|Number} startDate - the start of range
	 * @param {Date|String|Number} endDate - the end of range
	 * @returns {Boolean} the date is within the range
	 * @throws {Error} startDate cannot be after endDate
	 *
	 * @example
	 * // For the date within the range:
	 * isWithinRange(
	 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> true
	 *
	 * @example
	 * // For the date outside of the range:
	 * isWithinRange(
	 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
	 * )
	 * //=> false
	 */
	function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
	  var time = parse(dirtyDate).getTime()
	  var startTime = parse(dirtyStartDate).getTime()
	  var endTime = parse(dirtyEndDate).getTime()
	
	  if (startTime > endTime) {
	    throw new Error('The start of the range cannot be after the end of the range')
	  }
	
	  return time >= startTime && time <= endTime
	}
	
	module.exports = isWithinRange


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(21)
	
	/**
	 * @category Day Helpers
	 * @summary Is the given date yesterday?
	 *
	 * @description
	 * Is the given date yesterday?
	 *
	 * @param {Date|String|Number} date - the date to check
	 * @returns {Boolean} the date is yesterday
	 *
	 * @example
	 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
	 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
	 * //=> true
	 */
	function isYesterday (dirtyDate) {
	  var yesterday = new Date()
	  yesterday.setDate(yesterday.getDate() - 1)
	  return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime()
	}
	
	module.exports = isYesterday


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var lastDayOfWeek = __webpack_require__(135)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Return the last day of an ISO week for the given date.
	 *
	 * @description
	 * Return the last day of an ISO week for the given date.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the last day of an ISO week
	 *
	 * @example
	 * // The last day of an ISO week for 2 September 2014 11:55:00:
	 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sun Sep 07 2014 00:00:00
	 */
	function lastDayOfISOWeek (dirtyDate) {
	  return lastDayOfWeek(dirtyDate, {weekStartsOn: 1})
	}
	
	module.exports = lastDayOfISOWeek


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Week Helpers
	 * @summary Return the last day of a week for the given date.
	 *
	 * @description
	 * Return the last day of a week for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the last day of a week
	 *
	 * @example
	 * // The last day of a week for 2 September 2014 11:55:00:
	 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Sat Sep 06 2014 00:00:00
	 *
	 * @example
	 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
	 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
	 * //=> Sun Sep 07 2014 00:00:00
	 */
	function lastDayOfWeek (dirtyDate, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	
	  var date = parse(dirtyDate)
	  var day = date.getDay()
	  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)
	
	  date.setHours(0, 0, 0, 0)
	  date.setDate(date.getDate() + diff)
	  return date
	}
	
	module.exports = lastDayOfWeek


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var getISOYear = __webpack_require__(15)
	var startOfISOWeek = __webpack_require__(16)
	
	/**
	 * @category ISO Week-Numbering Year Helpers
	 * @summary Return the last day of an ISO week-numbering year for the given date.
	 *
	 * @description
	 * Return the last day of an ISO week-numbering year,
	 * which always starts 3 days before the year's first Thursday.
	 * The result will be in the local timezone.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the end of an ISO week-numbering year
	 *
	 * @example
	 * // The last day of an ISO week-numbering year for 2 July 2005:
	 * var result = lastDayOfISOYear(new Date(2005, 6, 2))
	 * //=> Sun Jan 01 2006 00:00:00
	 */
	function lastDayOfISOYear (dirtyDate) {
	  var year = getISOYear(dirtyDate)
	  var fourthOfJanuary = new Date(0)
	  fourthOfJanuary.setFullYear(year + 1, 0, 4)
	  fourthOfJanuary.setHours(0, 0, 0, 0)
	  var date = startOfISOWeek(fourthOfJanuary)
	  date.setDate(date.getDate() - 1)
	  return date
	}
	
	module.exports = lastDayOfISOYear


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Return the last day of a month for the given date.
	 *
	 * @description
	 * Return the last day of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the last day of a month
	 *
	 * @example
	 * // The last day of a month for 2 September 2014 11:55:00:
	 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 30 2014 00:00:00
	 */
	function lastDayOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  var month = date.getMonth()
	  date.setFullYear(date.getFullYear(), month + 1, 0)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = lastDayOfMonth


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Quarter Helpers
	 * @summary Return the last day of a year quarter for the given date.
	 *
	 * @description
	 * Return the last day of a year quarter for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the last day of a quarter
	 *
	 * @example
	 * // The last day of a quarter for 2 September 2014 11:55:00:
	 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Tue Sep 30 2014 00:00:00
	 */
	function lastDayOfQuarter (dirtyDate) {
	  var date = parse(dirtyDate)
	  var currentMonth = date.getMonth()
	  var month = currentMonth - currentMonth % 3 + 3
	  date.setMonth(month, 0)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = lastDayOfQuarter


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Return the last day of a year for the given date.
	 *
	 * @description
	 * Return the last day of a year for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the last day of a year
	 *
	 * @example
	 * // The last day of a year for 2 September 2014 11:55:00:
	 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
	 * //=> Wed Dec 31 2014 00:00:00
	 */
	function lastDayOfYear (dirtyDate) {
	  var date = parse(dirtyDate)
	  var year = date.getFullYear()
	  date.setFullYear(year + 1, 0, 0)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = lastDayOfYear


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Return the latest of the given dates.
	 *
	 * @description
	 * Return the latest of the given dates.
	 *
	 * @param {...(Date|String|Number)} dates - the dates to compare
	 * @returns {Date} the latest of the dates
	 *
	 * @example
	 * // Which of these dates is the latest?
	 * var result = max(
	 *   new Date(1989, 6, 10),
	 *   new Date(1987, 1, 11),
	 *   new Date(1995, 6, 2),
	 *   new Date(1990, 0, 1)
	 * )
	 * //=> Sun Jul 02 1995 00:00:00
	 */
	function max () {
	  var dirtyDates = Array.prototype.slice.call(arguments)
	  var dates = dirtyDates.map(function (dirtyDate) {
	    return parse(dirtyDate)
	  })
	  var latestTimestamp = Math.max.apply(null, dates)
	  return new Date(latestTimestamp)
	}
	
	module.exports = max


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Common Helpers
	 * @summary Return the earliest of the given dates.
	 *
	 * @description
	 * Return the earliest of the given dates.
	 *
	 * @param {...(Date|String|Number)} dates - the dates to compare
	 * @returns {Date} the earliest of the dates
	 *
	 * @example
	 * // Which of these dates is the earliest?
	 * var result = min(
	 *   new Date(1989, 6, 10),
	 *   new Date(1987, 1, 11),
	 *   new Date(1995, 6, 2),
	 *   new Date(1990, 0, 1)
	 * )
	 * //=> Wed Feb 11 1987 00:00:00
	 */
	function min () {
	  var dirtyDates = Array.prototype.slice.call(arguments)
	  var dates = dirtyDates.map(function (dirtyDate) {
	    return parse(dirtyDate)
	  })
	  var earliestTimestamp = Math.min.apply(null, dates)
	  return new Date(earliestTimestamp)
	}
	
	module.exports = min


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Set the day of the month to the given date.
	 *
	 * @description
	 * Set the day of the month to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} dayOfMonth - the day of the month of the new date
	 * @returns {Date} the new date with the day of the month setted
	 *
	 * @example
	 * // Set the 30th day of the month to 1 September 2014:
	 * var result = setDate(new Date(2014, 8, 1), 30)
	 * //=> Tue Sep 30 2014 00:00:00
	 */
	function setDate (dirtyDate, dirtyDayOfMonth) {
	  var date = parse(dirtyDate)
	  var dayOfMonth = Number(dirtyDayOfMonth)
	  date.setDate(dayOfMonth)
	  return date
	}
	
	module.exports = setDate


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var addDays = __webpack_require__(9)
	
	/**
	 * @category Weekday Helpers
	 * @summary Set the day of the week to the given date.
	 *
	 * @description
	 * Set the day of the week to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} day - the day of the week of the new date
	 * @param {Object} [options] - the object with options
	 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
	 * @returns {Date} the new date with the day of the week setted
	 *
	 * @example
	 * // Set Sunday to 1 September 2014:
	 * var result = setDay(new Date(2014, 8, 1), 0)
	 * //=> Sun Aug 31 2014 00:00:00
	 *
	 * @example
	 * // If week starts with Monday, set Sunday to 1 September 2014:
	 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
	 * //=> Sun Sep 07 2014 00:00:00
	 */
	function setDay (dirtyDate, dirtyDay, dirtyOptions) {
	  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
	  var date = parse(dirtyDate)
	  var day = Number(dirtyDay)
	  var currentDay = date.getDay()
	
	  var remainder = day % 7
	  var dayIndex = (remainder + 7) % 7
	
	  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
	  return addDays(date, diff)
	}
	
	module.exports = setDay


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Day Helpers
	 * @summary Set the day of the year to the given date.
	 *
	 * @description
	 * Set the day of the year to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} dayOfYear - the day of the year of the new date
	 * @returns {Date} the new date with the day of the year setted
	 *
	 * @example
	 * // Set the 2nd day of the year to 2 July 2014:
	 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
	 * //=> Thu Jan 02 2014 00:00:00
	 */
	function setDayOfYear (dirtyDate, dirtyDayOfYear) {
	  var date = parse(dirtyDate)
	  var dayOfYear = Number(dirtyDayOfYear)
	  date.setMonth(0)
	  date.setDate(dayOfYear)
	  return date
	}
	
	module.exports = setDayOfYear


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Hour Helpers
	 * @summary Set the hours to the given date.
	 *
	 * @description
	 * Set the hours to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} hours - the hours of the new date
	 * @returns {Date} the new date with the hours setted
	 *
	 * @example
	 * // Set 4 hours to 1 September 2014 11:30:00:
	 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
	 * //=> Mon Sep 01 2014 04:30:00
	 */
	function setHours (dirtyDate, dirtyHours) {
	  var date = parse(dirtyDate)
	  var hours = Number(dirtyHours)
	  date.setHours(hours)
	  return date
	}
	
	module.exports = setHours


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var addDays = __webpack_require__(9)
	var getISODay = __webpack_require__(83)
	
	/**
	 * @category Weekday Helpers
	 * @summary Set the day of the ISO week to the given date.
	 *
	 * @description
	 * Set the day of the ISO week to the given date.
	 * ISO week starts with Monday.
	 * 7 is the index of Sunday, 1 is the index of Monday etc.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} day - the day of the ISO week of the new date
	 * @returns {Date} the new date with the day of the ISO week setted
	 *
	 * @example
	 * // Set Sunday to 1 September 2014:
	 * var result = setISODay(new Date(2014, 8, 1), 7)
	 * //=> Sun Sep 07 2014 00:00:00
	 */
	function setISODay (dirtyDate, dirtyDay) {
	  var date = parse(dirtyDate)
	  var day = Number(dirtyDay)
	  var currentDay = getISODay(date)
	  var diff = day - currentDay
	  return addDays(date, diff)
	}
	
	module.exports = setISODay


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var getISOWeek = __webpack_require__(76)
	
	/**
	 * @category ISO Week Helpers
	 * @summary Set the ISO week to the given date.
	 *
	 * @description
	 * Set the ISO week to the given date, saving the weekday number.
	 *
	 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} isoWeek - the ISO week of the new date
	 * @returns {Date} the new date with the ISO week setted
	 *
	 * @example
	 * // Set the 53rd ISO week to 7 August 2004:
	 * var result = setISOWeek(new Date(2004, 7, 7), 53)
	 * //=> Sat Jan 01 2005 00:00:00
	 */
	function setISOWeek (dirtyDate, dirtyISOWeek) {
	  var date = parse(dirtyDate)
	  var isoWeek = Number(dirtyISOWeek)
	  var diff = getISOWeek(date) - isoWeek
	  date.setDate(date.getDate() - diff * 7)
	  return date
	}
	
	module.exports = setISOWeek


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Set the milliseconds to the given date.
	 *
	 * @description
	 * Set the milliseconds to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} milliseconds - the milliseconds of the new date
	 * @returns {Date} the new date with the milliseconds setted
	 *
	 * @example
	 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
	 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
	 * //=> Mon Sep 01 2014 11:30:40.300
	 */
	function setMilliseconds (dirtyDate, dirtyMilliseconds) {
	  var date = parse(dirtyDate)
	  var milliseconds = Number(dirtyMilliseconds)
	  date.setMilliseconds(milliseconds)
	  return date
	}
	
	module.exports = setMilliseconds


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Minute Helpers
	 * @summary Set the minutes to the given date.
	 *
	 * @description
	 * Set the minutes to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} minutes - the minutes of the new date
	 * @returns {Date} the new date with the minutes setted
	 *
	 * @example
	 * // Set 45 minutes to 1 September 2014 11:30:40:
	 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
	 * //=> Mon Sep 01 2014 11:45:40
	 */
	function setMinutes (dirtyDate, dirtyMinutes) {
	  var date = parse(dirtyDate)
	  var minutes = Number(dirtyMinutes)
	  date.setMinutes(minutes)
	  return date
	}
	
	module.exports = setMinutes


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var getDaysInMonth = __webpack_require__(24)
	
	/**
	 * @category Month Helpers
	 * @summary Set the month to the given date.
	 *
	 * @description
	 * Set the month to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} month - the month of the new date
	 * @returns {Date} the new date with the month setted
	 *
	 * @example
	 * // Set February to 1 September 2014:
	 * var result = setMonth(new Date(2014, 8, 1), 1)
	 * //=> Sat Feb 01 2014 00:00:00
	 */
	function setMonth (dirtyDate, dirtyMonth) {
	  var date = parse(dirtyDate)
	  var month = Number(dirtyMonth)
	  var year = date.getFullYear()
	  var day = date.getDate()
	
	  var dateWithDesiredMonth = new Date(0)
	  dateWithDesiredMonth.setFullYear(year, month, 15)
	  dateWithDesiredMonth.setHours(0, 0, 0, 0)
	  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
	  // Set the last day of the new month
	  // if the original date was the last day of the longer month
	  date.setMonth(month, Math.min(day, daysInMonth))
	  return date
	}
	
	module.exports = setMonth


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	var setMonth = __webpack_require__(150)
	
	/**
	 * @category Quarter Helpers
	 * @summary Set the year quarter to the given date.
	 *
	 * @description
	 * Set the year quarter to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} quarter - the quarter of the new date
	 * @returns {Date} the new date with the quarter setted
	 *
	 * @example
	 * // Set the 2nd quarter to 2 July 2014:
	 * var result = setQuarter(new Date(2014, 6, 2), 2)
	 * //=> Wed Apr 02 2014 00:00:00
	 */
	function setQuarter (dirtyDate, dirtyQuarter) {
	  var date = parse(dirtyDate)
	  var quarter = Number(dirtyQuarter)
	  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
	  var diff = quarter - oldQuarter
	  return setMonth(date, date.getMonth() + diff * 3)
	}
	
	module.exports = setQuarter


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Second Helpers
	 * @summary Set the seconds to the given date.
	 *
	 * @description
	 * Set the seconds to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} seconds - the seconds of the new date
	 * @returns {Date} the new date with the seconds setted
	 *
	 * @example
	 * // Set 45 seconds to 1 September 2014 11:30:40:
	 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
	 * //=> Mon Sep 01 2014 11:30:45
	 */
	function setSeconds (dirtyDate, dirtySeconds) {
	  var date = parse(dirtyDate)
	  var seconds = Number(dirtySeconds)
	  date.setSeconds(seconds)
	  return date
	}
	
	module.exports = setSeconds


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Year Helpers
	 * @summary Set the year to the given date.
	 *
	 * @description
	 * Set the year to the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} year - the year of the new date
	 * @returns {Date} the new date with the year setted
	 *
	 * @example
	 * // Set year 2013 to 1 September 2014:
	 * var result = setYear(new Date(2014, 8, 1), 2013)
	 * //=> Sun Sep 01 2013 00:00:00
	 */
	function setYear (dirtyDate, dirtyYear) {
	  var date = parse(dirtyDate)
	  var year = Number(dirtyYear)
	  date.setFullYear(year)
	  return date
	}
	
	module.exports = setYear


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var parse = __webpack_require__(10)
	
	/**
	 * @category Month Helpers
	 * @summary Return the start of a month for the given date.
	 *
	 * @description
	 * Return the start of a month for the given date.
	 * The result will be in the local timezone.
	 *
	 * @param {Date|String|Number} date - the original date
	 * @returns {Date} the start of a month
	 *
	 * @example
	 * // The start of a month for 2 September 2014 11:55:00:
	 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function startOfMonth (dirtyDate) {
	  var date = parse(dirtyDate)
	  date.setDate(1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfMonth


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	var startOfDay = __webpack_require__(21)
	
	/**
	 * @category Day Helpers
	 * @summary Return the start of today.
	 *
	 * @description
	 * Return the start of today.
	 *
	 * @returns {Date} the start of today
	 *
	 * @example
	 * // If today is 6 October 2014:
	 * var result = startOfToday()
	 * //=> Mon Oct 6 2014 00:00:00
	 */
	function startOfToday () {
	  return startOfDay(new Date())
	}
	
	module.exports = startOfToday


/***/ }),
/* 156 */
/***/ (function(module, exports) {

	/**
	 * @category Day Helpers
	 * @summary Return the start of tomorrow.
	 *
	 * @description
	 * Return the start of tomorrow.
	 *
	 * @returns {Date} the start of tomorrow
	 *
	 * @example
	 * // If today is 6 October 2014:
	 * var result = startOfTomorrow()
	 * //=> Tue Oct 7 2014 00:00:00
	 */
	function startOfTomorrow () {
	  var now = new Date()
	  var year = now.getFullYear()
	  var month = now.getMonth()
	  var day = now.getDate()
	
	  var date = new Date(0)
	  date.setFullYear(year, month, day + 1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfTomorrow


/***/ }),
/* 157 */
/***/ (function(module, exports) {

	/**
	 * @category Day Helpers
	 * @summary Return the start of yesterday.
	 *
	 * @description
	 * Return the start of yesterday.
	 *
	 * @returns {Date} the start of yesterday
	 *
	 * @example
	 * // If today is 6 October 2014:
	 * var result = startOfYesterday()
	 * //=> Sun Oct 5 2014 00:00:00
	 */
	function startOfYesterday () {
	  var now = new Date()
	  var year = now.getFullYear()
	  var month = now.getMonth()
	  var day = now.getDate()
	
	  var date = new Date(0)
	  date.setFullYear(year, month, day - 1)
	  date.setHours(0, 0, 0, 0)
	  return date
	}
	
	module.exports = startOfYesterday


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var addDays = __webpack_require__(9)
	
	/**
	 * @category Day Helpers
	 * @summary Subtract the specified number of days from the given date.
	 *
	 * @description
	 * Subtract the specified number of days from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of days to be subtracted
	 * @returns {Date} the new date with the days subtracted
	 *
	 * @example
	 * // Subtract 10 days from 1 September 2014:
	 * var result = subDays(new Date(2014, 8, 1), 10)
	 * //=> Fri Aug 22 2014 00:00:00
	 */
	function subDays (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addDays(dirtyDate, -amount)
	}
	
	module.exports = subDays


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var addHours = __webpack_require__(12)
	
	/**
	 * @category Hour Helpers
	 * @summary Subtract the specified number of hours from the given date.
	 *
	 * @description
	 * Subtract the specified number of hours from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of hours to be subtracted
	 * @returns {Date} the new date with the hours subtracted
	 *
	 * @example
	 * // Subtract 2 hours from 11 July 2014 01:00:00:
	 * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
	 * //=> Thu Jul 10 2014 23:00:00
	 */
	function subHours (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addHours(dirtyDate, -amount)
	}
	
	module.exports = subHours


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var addMilliseconds = __webpack_require__(13)
	
	/**
	 * @category Millisecond Helpers
	 * @summary Subtract the specified number of milliseconds from the given date.
	 *
	 * @description
	 * Subtract the specified number of milliseconds from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of milliseconds to be subtracted
	 * @returns {Date} the new date with the milliseconds subtracted
	 *
	 * @example
	 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
	 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
	 * //=> Thu Jul 10 2014 12:45:29.250
	 */
	function subMilliseconds (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMilliseconds(dirtyDate, -amount)
	}
	
	module.exports = subMilliseconds


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var addMinutes = __webpack_require__(22)
	
	/**
	 * @category Minute Helpers
	 * @summary Subtract the specified number of minutes from the given date.
	 *
	 * @description
	 * Subtract the specified number of minutes from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of minutes to be subtracted
	 * @returns {Date} the new date with the mintues subtracted
	 *
	 * @example
	 * // Subtract 30 minutes from 10 July 2014 12:00:00:
	 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
	 * //=> Thu Jul 10 2014 11:30:00
	 */
	function subMinutes (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMinutes(dirtyDate, -amount)
	}
	
	module.exports = subMinutes


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var addMonths = __webpack_require__(23)
	
	/**
	 * @category Month Helpers
	 * @summary Subtract the specified number of months from the given date.
	 *
	 * @description
	 * Subtract the specified number of months from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of months to be subtracted
	 * @returns {Date} the new date with the months subtracted
	 *
	 * @example
	 * // Subtract 5 months from 1 February 2015:
	 * var result = subMonths(new Date(2015, 1, 1), 5)
	 * //=> Mon Sep 01 2014 00:00:00
	 */
	function subMonths (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addMonths(dirtyDate, -amount)
	}
	
	module.exports = subMonths


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var addQuarters = __webpack_require__(25)
	
	/**
	 * @category Quarter Helpers
	 * @summary Subtract the specified number of year quarters from the given date.
	 *
	 * @description
	 * Subtract the specified number of year quarters from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of quarters to be subtracted
	 * @returns {Date} the new date with the quarters subtracted
	 *
	 * @example
	 * // Subtract 3 quarters from 1 September 2014:
	 * var result = subQuarters(new Date(2014, 8, 1), 3)
	 * //=> Sun Dec 01 2013 00:00:00
	 */
	function subQuarters (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addQuarters(dirtyDate, -amount)
	}
	
	module.exports = subQuarters


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var addSeconds = __webpack_require__(26)
	
	/**
	 * @category Second Helpers
	 * @summary Subtract the specified number of seconds from the given date.
	 *
	 * @description
	 * Subtract the specified number of seconds from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of seconds to be subtracted
	 * @returns {Date} the new date with the seconds subtracted
	 *
	 * @example
	 * // Subtract 30 seconds from 10 July 2014 12:45:00:
	 * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
	 * //=> Thu Jul 10 2014 12:44:30
	 */
	function subSeconds (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addSeconds(dirtyDate, -amount)
	}
	
	module.exports = subSeconds


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var addWeeks = __webpack_require__(27)
	
	/**
	 * @category Week Helpers
	 * @summary Subtract the specified number of weeks from the given date.
	 *
	 * @description
	 * Subtract the specified number of weeks from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of weeks to be subtracted
	 * @returns {Date} the new date with the weeks subtracted
	 *
	 * @example
	 * // Subtract 4 weeks from 1 September 2014:
	 * var result = subWeeks(new Date(2014, 8, 1), 4)
	 * //=> Mon Aug 04 2014 00:00:00
	 */
	function subWeeks (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addWeeks(dirtyDate, -amount)
	}
	
	module.exports = subWeeks


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var addYears = __webpack_require__(28)
	
	/**
	 * @category Year Helpers
	 * @summary Subtract the specified number of years from the given date.
	 *
	 * @description
	 * Subtract the specified number of years from the given date.
	 *
	 * @param {Date|String|Number} date - the date to be changed
	 * @param {Number} amount - the amount of years to be subtracted
	 * @returns {Date} the new date with the years subtracted
	 *
	 * @example
	 * // Subtract 5 years from 1 September 2014:
	 * var result = subYears(new Date(2014, 8, 1), 5)
	 * //=> Tue Sep 01 2009 00:00:00
	 */
	function subYears (dirtyDate, dirtyAmount) {
	  var amount = Number(dirtyAmount)
	  return addYears(dirtyDate, -amount)
	}
	
	module.exports = subYears


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(168),
	  /* template */
	  __webpack_require__(206),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/harald/Projekte/vue-fullcalendar/src/components/eventCard.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] eventCard.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-413afd8e", Component.options)
	  } else {
	    hotAPI.reload("data-v-413afd8e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _from = __webpack_require__(169);
	
	var _from2 = _interopRequireDefault(_from);
	
	var _dateFns = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    event: {
	      type: Object,
	      required: true
	    },
	    date: {
	      type: Object,
	      required: true
	    },
	    firstDay: {
	      type: Number,
	      required: true
	    }
	  },
	
	  computed: {
	    cssClasses: function cssClasses() {
	      var cssClasses = this.event.cssClass;
	
	      if (!Array.isArray(cssClasses)) {
	        cssClasses = [cssClasses];
	      } else {
	        cssClasses = (0, _from2.default)(cssClasses);
	      }
	
	      if ((0, _dateFns.isSameDay)(this.start, this.day)) {
	        cssClasses.push('is-start');
	      }
	
	      if ((0, _dateFns.isSameDay)(this.end, this.day)) {
	        cssClasses.push('is-end');
	      }
	
	      if (!this.event.isShow) {
	        cssClasses.push('is-opacity');
	      }
	
	      return cssClasses.join(' ');
	    },
	    showTitle: function showTitle() {
	      return (0, _dateFns.getDay)(this.date) === this.firstDay || (0, _dateFns.isSameDay)(this.start, this.day);
	    },
	    start: function start() {
	      return this.event.start;
	    },
	    end: function end() {
	      return this.event.end;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(170), __esModule: true };

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(171);
	__webpack_require__(195);
	module.exports = __webpack_require__(179).Array.from;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(172)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(175)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(173)
	  , defined   = __webpack_require__(174);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 173 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(176)
	  , $export        = __webpack_require__(177)
	  , redefine       = __webpack_require__(182)
	  , hide           = __webpack_require__(183)
	  , has            = __webpack_require__(188)
	  , Iterators      = __webpack_require__(189)
	  , $iterCreate    = __webpack_require__(190)
	  , setToStringTag = __webpack_require__(191)
	  , getProto       = __webpack_require__(184).getProto
	  , ITERATOR       = __webpack_require__(192)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(178)
	  , core      = __webpack_require__(179)
	  , ctx       = __webpack_require__(180)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 179 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(181);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(183);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(184)
	  , createDesc = __webpack_require__(185);
	module.exports = __webpack_require__(186) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 184 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 185 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(187)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(184)
	  , descriptor     = __webpack_require__(185)
	  , setToStringTag = __webpack_require__(191)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(183)(IteratorPrototype, __webpack_require__(192)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(184).setDesc
	  , has = __webpack_require__(188)
	  , TAG = __webpack_require__(192)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(193)('wks')
	  , uid    = __webpack_require__(194)
	  , Symbol = __webpack_require__(178).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(178)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(180)
	  , $export     = __webpack_require__(177)
	  , toObject    = __webpack_require__(196)
	  , call        = __webpack_require__(197)
	  , isArrayIter = __webpack_require__(200)
	  , toLength    = __webpack_require__(201)
	  , getIterFn   = __webpack_require__(202);
	$export($export.S + $export.F * !__webpack_require__(205)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(174);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(198);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(189)
	  , ITERATOR   = __webpack_require__(192)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(173)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(203)
	  , ITERATOR  = __webpack_require__(192)('iterator')
	  , Iterators = __webpack_require__(189);
	module.exports = __webpack_require__(179).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(204)
	  , TAG = __webpack_require__(192)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 204 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(192)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', {
	    staticClass: "event-item",
	    class: _vm.cssClasses,
	    on: {
	      "click": function($event) {
	        _vm.$emit('click', _vm.event, $event)
	      }
	    }
	  }, [(_vm.showTitle) ? _vm._t("default", [_vm._v("\n    Def: " + _vm._s(_vm.event.title) + "\n  ")], {
	    event: _vm.event
	  }) : _vm._e()], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-413afd8e", module.exports)
	  }
	}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(208)
	
	var Component = __webpack_require__(6)(
	  /* script */
	  __webpack_require__(210),
	  /* template */
	  __webpack_require__(211),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/harald/Projekte/vue-fullcalendar/src/components/header.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5b870f2e", Component.options)
	  } else {
	    hotAPI.reload("data-v-5b870f2e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(209);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b870f2e!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5b870f2e!../../node_modules/sass-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.full-calendar-header {\n  display: flex;\n  align-items: center;\n}\n.full-calendar-header .header-left,\n  .full-calendar-header .header-right {\n    flex: 1;\n}\n.full-calendar-header .header-center {\n    flex: 2;\n    text-align: center;\n}\n.full-calendar-header .header-center .title {\n      margin: 0 10px;\n}\n.full-calendar-header .header-center .prev-month,\n    .full-calendar-header .header-center .next-month {\n      cursor: pointer;\n}\n.full-calendar-header .header-right {\n    text-align: right;\n}\n", ""]);
	
	// exports


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dateFns = __webpack_require__(8);
	
	exports.default = {
	  props: {
	    currentMonth: {
	      type: Date,
	      default: undefined
	    },
	    titleFormat: {
	      type: String,
	      default: undefined
	    },
	    firstDay: {
	      type: Number,
	      default: undefined
	    },
	    monthNames: {
	      type: Array,
	      default: undefined
	    },
	    locale: {
	      type: String,
	      default: undefined
	    }
	  },
	
	  data: function data() {
	    return {
	      leftArrow: '<',
	      rightArrow: '>'
	    };
	  },
	
	
	  computed: {
	    title: function title() {
	      if (!this.currentMonth) return '';
	      return (0, _dateFns.format)(this.currentMonth, 'MMMM YYYY');
	    }
	  },
	
	  methods: {
	    goPrev: function goPrev() {
	      var newMonth = (0, _dateFns.subMonths)((0, _dateFns.startOfMonth)(this.currentMonth), 1);
	
	      this.$emit('change', newMonth);
	    },
	    goNext: function goNext() {
	      var newMonth = (0, _dateFns.addMonths)((0, _dateFns.startOfMonth)(this.currentMonth), 1);
	      this.$emit('change', newMonth);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "full-calendar-header"
	  }, [_c('div', {
	    staticClass: "header-left"
	  }, [_vm._t("header-left")], 2), _vm._v(" "), _c('div', {
	    staticClass: "header-center"
	  }, [_vm._t("header-center", null, {
	    title: _vm.title,
	    goPrev: _vm.goPrev,
	    goNext: _vm.goNext,
	    currentMonth: _vm.currentMonth,
	    rightArrow: _vm.rightArrow,
	    leftArrow: _vm.leftArrow
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "header-right"
	  }, [_vm._t("header-right")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5b870f2e", module.exports)
	  }
	}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "comp-full-calendar"
	  }, [_c('fc-header', {
	    attrs: {
	      "current-month": _vm.currentMonth,
	      "first-day": _vm.firstDay,
	      "locale": _vm.locale
	    },
	    on: {
	      "change": _vm.emitChangeMonth
	    },
	    scopedSlots: _vm._u([{
	      key: "header-center",
	      fn: function(ref) {
	        var title = ref.title;
	        var rightArrow = ref.rightArrow;
	        var leftArrow = ref.leftArrow;
	        var goPrev = ref.goPrev;
	        var goNext = ref.goNext;
	
	        return _c('div', {}, [_vm._t("fc-header-center", [_c('span', {
	          staticClass: "prev-month",
	          on: {
	            "click": function($event) {
	              $event.stopPropagation();
	              return goPrev($event)
	            }
	          }
	        }, [_vm._v(_vm._s(leftArrow))]), _vm._v(" "), _c('span', {
	          staticClass: "title"
	        }, [_vm._v(_vm._s(title))]), _vm._v(" "), _c('span', {
	          staticClass: "next-month",
	          on: {
	            "click": function($event) {
	              $event.stopPropagation();
	              return goNext($event)
	            }
	          }
	        }, [_vm._v(_vm._s(rightArrow))])], {
	          title: title,
	          goPrev: goPrev,
	          goNext: goNext,
	          currentMonth: _vm.currentMonth,
	          rightArrow: rightArrow,
	          leftArrow: leftArrow
	        })], 2)
	      }
	    }])
	  }, [_c('div', {
	    attrs: {
	      "slot": "header-left"
	    },
	    slot: "header-left"
	  }, [_vm._t("fc-header-left")], 2), _vm._v(" "), _c('div', {
	    attrs: {
	      "slot": "header-right"
	    },
	    slot: "header-right"
	  }, [_vm._t("fc-header-right")], 2)]), _vm._v(" "), _c('div', {
	    staticClass: "full-calendar-body"
	  }, [_c('div', {
	    staticClass: "weeks"
	  }, _vm._l((7), function(dayIndex) {
	    return _c('strong', {
	      key: dayIndex,
	      staticClass: "week"
	    }, [_vm._v(_vm._s(_vm._f("localeWeekDay")((dayIndex - 1), _vm.firstDay)))])
	  })), _vm._v(" "), _c('div', {
	    ref: "dates",
	    staticClass: "dates"
	  }, [_c('div', {
	    staticClass: "dates-bg"
	  }, _vm._l((_vm.currentDates), function(week) {
	    return _c('div', {
	      staticClass: "week-row"
	    }, _vm._l((week), function(day) {
	      return _c('div', {
	        staticClass: "day-cell",
	        class: {
	          'today': day.isToday, 'not-cur-month': !day.isCurMonth
	        }
	      }, [_c('p', {
	        staticClass: "day-number"
	      }, [_vm._v(_vm._s(_vm.dayNumber(day)))])])
	    }))
	  })), _vm._v(" "), _c('div', {
	    staticClass: "dates-events"
	  }, _vm._l((_vm.currentDates), function(week, key) {
	    return _c('div', {
	      staticClass: "events-week"
	    }, _vm._l((week), function(day) {
	      return _c('div', {
	        staticClass: "events-day",
	        class: {
	          'today': day.isToday,
	            'not-cur-month': !day.isCurMonth
	        },
	        attrs: {
	          "track-by": "$index"
	        },
	        on: {
	          "click": function($event) {
	            $event.stopPropagation();
	            _vm.dayClick(day.date, $event)
	          }
	        }
	      }, [_c('p', {
	        staticClass: "day-number"
	      }, [_vm._v(_vm._s(day.monthDay))]), _vm._v(" "), _c('div', {
	        staticClass: "event-box"
	      }, [_vm._l((day.events), function(event) {
	        return _c('event-card', {
	          directives: [{
	            name: "show",
	            rawName: "v-show",
	            value: (event.cellIndex <= _vm.eventLimit),
	            expression: "event.cellIndex <= eventLimit"
	          }],
	          class: {
	            'is-active': event.isActive
	          },
	          attrs: {
	            "event": event,
	            "date": day.date,
	            "first-day": _vm.firstDay
	          },
	          on: {
	            "click": _vm.eventClick
	          },
	          scopedSlots: _vm._u([{
	            key: "default",
	            fn: function(p) {
	              return [_vm._t("fc-event-card", null, {
	                event: p.event
	              })]
	            }
	          }])
	        })
	      }), _vm._v(" "), (day.events.length > _vm.eventLimit) ? _c('p', {
	        staticClass: "more-link",
	        on: {
	          "click": function($event) {
	            $event.stopPropagation();
	            _vm.selectThisDay(day, $event)
	          }
	        }
	      }, [_vm._v("\n                + " + _vm._s(day.events[day.events.length - 1].cellIndex - _vm.eventLimit) + " more\n              ")]) : _vm._e()], 2)])
	    }))
	  })), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showMore),
	      expression: "showMore"
	    }],
	    staticClass: "more-events",
	    style: ({
	      left: _vm.morePos.left + 'px',
	      top: _vm.morePos.top + 'px'
	    })
	  }, [_c('div', {
	    staticClass: "more-header"
	  }, [_c('span', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.moreTitle(_vm.selectDay.date)))]), _vm._v(" "), _c('span', {
	    staticClass: "close",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.showMore = false
	      }
	    }
	  }, [_vm._v("x")])]), _vm._v(" "), _c('div', {
	    staticClass: "more-body"
	  }, [_c('ul', {
	    staticClass: "body-list"
	  }, _vm._l((_vm.selectDay.events), function(event) {
	    return _c('li', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (event.isShow),
	        expression: "event.isShow"
	      }],
	      staticClass: "body-item",
	      on: {
	        "click": function($event) {
	          _vm.eventClick(event, $event)
	        }
	      }
	    }, [_vm._v("\n              " + _vm._s(event.title) + "\n            ")])
	  }))])]), _vm._v(" "), _vm._t("body-card")], 2)])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0de35d15", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-fullcalendar.js.map