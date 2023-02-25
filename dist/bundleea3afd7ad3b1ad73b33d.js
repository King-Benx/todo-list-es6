/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/ToDo.js":
/*!*****************************!*\
  !*** ./src/modules/ToDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ToDo = /*#__PURE__*/function () {
  function ToDo() {
    _classCallCheck(this, ToDo);
    _defineProperty(this, "sortList", function (items) {
      var sortedList = [];
      for (var i = 0; i < items.length; i += 1) {
        sortedList.push(_objectSpread(_objectSpread({}, items[i]), {}, {
          index: i + 1
        }));
      }
      return sortedList;
    });
    var storedData = JSON.parse(localStorage.getItem('todo-es6'));
    this.listOfToDos = storedData || [];
  }
  _createClass(ToDo, [{
    key: "updateList",
    value: function updateList() {
      this.listOfToDos = JSON.parse(localStorage.getItem('todo-es6'));
    }
  }, {
    key: "updateStorage",
    value: function updateStorage(items) {
      localStorage.setItem('todo-es6', JSON.stringify(this.sortList(items)));
      this.updateList();
    }
  }, {
    key: "setItemChecked",
    value: function setItemChecked(identifier, flag) {
      var data = this.getListOfToDos();
      var updatedData = data.map(function (it) {
        if (it.index.toString() === identifier.toString()) {
          return _objectSpread(_objectSpread({}, it), {}, {
            completed: flag
          });
        }
        return it;
      });
      this.updateStorage(updatedData);
    }
  }, {
    key: "editTask",
    value: function editTask(identifier, update) {
      var data = this.getListOfToDos();
      var updatedData = data.map(function (it) {
        if (it.index.toString() === identifier.toString()) {
          return _objectSpread(_objectSpread({}, it), {}, {
            description: update
          });
        }
        return it;
      });
      this.updateStorage(updatedData);
    }
  }, {
    key: "addToDo",
    value: function addToDo(description, completed) {
      var allToDos = this.getListOfToDos();
      var updatedData = [].concat(_toConsumableArray(allToDos), [{
        index: (allToDos === null || allToDos === void 0 ? void 0 : allToDos.length) + 1,
        description: description,
        completed: completed
      }]);
      this.updateStorage(updatedData);
    }
  }, {
    key: "removeToDo",
    value: function removeToDo(index) {
      var allToDos = this.getListOfToDos();
      var updatedData = allToDos.filter(function (it) {
        return it.index.toString() !== index;
      });
      this.updateStorage(this.sortList(updatedData));
    }
  }, {
    key: "getListOfToDos",
    value: function getListOfToDos() {
      return this.listOfToDos;
    }
  }]);
  return ToDo;
}();
var todo = new ToDo();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);

/***/ }),

/***/ "./src/modules/UserInteraction.js":
/*!****************************************!*\
  !*** ./src/modules/UserInteraction.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ "./src/modules/ToDo.js");

var change = function change(id, status) {
  _ToDo_js__WEBPACK_IMPORTED_MODULE_0__["default"].setItemChecked(id, status);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (change);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  max-width: 441px;\n  min-width: 320px;\n  margin: auto;\n  margin-block: 15%;\n  border: 1.4px solid gray;\n}\n\nform {\n  background-color: #fff;\n}\nform .todo-form-input {\n  width: 80%;\n  border: none;\n}\nform legend div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid gray;\n}\nform legend div span {\n  color: #616060;\n}\nform legend div span:last-child {\n  cursor: pointer;\n}\nform #todo {\n  width: 100%;\n  padding: 1rem;\n  border: none;\n  border-bottom: 1px solid gray;\n}\nform #todo:focus {\n  outline: none;\n}\n\n.container-section {\n  width: 100%;\n  text-align: center;\n}\n.container-section .todo-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 1rem;\n  border-bottom: 1px solid gray;\n  padding-block: 0.9rem;\n}\n.container-section .todo-form-input {\n  border: none;\n}\n.container-section .todo-form-input:focus {\n  outline: none;\n}\n.container-section button {\n  margin-block-end: 1rem;\n  border: none;\n  background: transparent;\n  color: gray;\n  cursor: pointer;\n}\n.container-section button :hover {\n  color: black;\n}\n\n.container-footer {\n  text-align: center;\n}\n.container-footer button {\n  margin-block-end: 1rem;\n  border: none;\n  background: transparent;\n  color: gray;\n  cursor: pointer;\n}\n.container-footer button :hover {\n  color: black;\n}\n\nol {\n  list-style: none;\n  padding: 0;\n}\nol li {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\nol li .trash-delete {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;AACF;;AAEA;EACE,YAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,wBAAA;AACF;;AAEA;EACE,sBAAA;AACF;AACE;EACE,UAAA;EACA,YAAA;AACJ;AAGI;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,6BAAA;AADN;AAGM;EACE,cAAA;AADR;AAIM;EACE,eAAA;AAFR;AAOE;EACE,WAAA;EACA,aAAA;EACA,YAAA;EACA,6BAAA;AALJ;AAQE;EACE,aAAA;AANJ;;AAUA;EACE,WAAA;EACA,kBAAA;AAPF;AASE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;EACA,6BAAA;EACA,qBAAA;AAPJ;AAUE;EACE,YAAA;AARJ;AAWE;EACE,aAAA;AATJ;AAYE;EACE,sBAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,eAAA;AAVJ;AAYI;EACE,YAAA;AAVN;;AAeA;EACE,kBAAA;AAZF;AAcE;EACE,sBAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,eAAA;AAZJ;AAcI;EACE,YAAA;AAZN;;AAiBA;EACE,gBAAA;EACA,UAAA;AAdF;AAgBE;EACE,YAAA;EACA,SAAA;EACA,UAAA;AAdJ;AAgBI;EACE,eAAA;AAdN","sourcesContent":["*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n.container {\n  max-width: 441px;\n  min-width: 320px;\n  margin: auto;\n  margin-block: 15%;\n  border: 1.4px solid gray;\n}\n\nform {\n  background-color: #fff;\n\n  .todo-form-input {\n    width: 80%;\n    border: none;\n  }\n\n  legend {\n    div {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 1rem;\n      border-bottom: 1px solid gray;\n\n      span {\n        color: #616060;\n      }\n\n      span:last-child {\n        cursor: pointer;\n      }\n    }\n  }\n\n  #todo {\n    width: 100%;\n    padding: 1rem;\n    border: none;\n    border-bottom: 1px solid gray;\n  }\n\n  #todo:focus {\n    outline: none;\n  }\n}\n\n.container-section {\n  width: 100%;\n  text-align: center;\n\n  .todo-item {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-inline: 1rem;\n    border-bottom: 1px solid gray;\n    padding-block: 0.9rem;\n  }\n\n  .todo-form-input {\n    border: none;\n  }\n\n  .todo-form-input:focus {\n    outline: none;\n  }\n\n  button {\n    margin-block-end: 1rem;\n    border: none;\n    background: transparent;\n    color: gray;\n    cursor: pointer;\n\n    :hover {\n      color: black;\n    }\n  }\n}\n\n.container-footer {\n  text-align: center;\n\n  button {\n    margin-block-end: 1rem;\n    border: none;\n    background: transparent;\n    color: gray;\n    cursor: pointer;\n\n    :hover {\n      color: black;\n    }\n  }\n}\n\nol {\n  list-style: none;\n  padding: 0;\n\n  li {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n\n    .trash-delete {\n      cursor: pointer;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInteraction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInteraction.js */ "./src/modules/UserInteraction.js");
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToDo.js */ "./src/modules/ToDo.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");



var list = document.getElementById('list');
var form = document.getElementById('form');
var todoInput = document.getElementById('todo');
var clearList = document.getElementById('clear-list');
var createToDo = function createToDo(index, description, completed) {
  var listItem = document.createElement('li');
  var listItemContainer = document.createElement('div');
  listItemContainer.className = 'todo-item';
  var inputContainer = document.createElement('div');
  var input = document.createElement('input');
  input.type = 'checkbox';
  input.name = index;
  input.id = index;
  input.value = description;
  input.className = 'to-do-item';
  input.checked = completed;
  var todoInput = document.createElement('input');
  todoInput.id = index;
  todoInput.value = description;
  todoInput.className = 'todo-form-input';
  var spanContainer = document.createElement('button');
  spanContainer.classList.add('button-delete');
  spanContainer.id = index;
  var iconContainer = document.createElement('i');
  iconContainer.className = 'fas';
  iconContainer.classList.add('trash-delete');
  iconContainer.innerHTML = '';
  spanContainer.append(iconContainer);
  inputContainer.append(input);
  inputContainer.append(todoInput);
  listItemContainer.append(inputContainer);
  listItemContainer.append(spanContainer);
  listItem.append(listItemContainer);
  list.append(listItem);
};
var showList = function showList() {
  var listOfToDos = _ToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"].getListOfToDos() || [];
  if (listOfToDos.length) {
    for (var i = 0; i < listOfToDos.length; i += 1) {
      var _listOfToDos$i = listOfToDos[i],
        index = _listOfToDos$i.index,
        description = _listOfToDos$i.description,
        completed = _listOfToDos$i.completed;
      createToDo(index, description, completed);
    }
  }
};
var populateView = function populateView() {
  form.reset();
  list.innerHTML = '';
  showList();
};
populateView();
todoInput.addEventListener('keypress', function (e) {
  e.stopPropagation();
  if (e.key === 'Enter') {
    if (e.target.value.length) {
      _ToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"].addToDo(e.target.value, false);
      populateView();
    }
  }
});
clearList.addEventListener('click', function (e) {
  e.preventDefault();
  var allToDos = _ToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"].getListOfToDos();
  var updatedData = allToDos.filter(function (it) {
    return it.completed !== true;
  });
  _ToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateStorage(updatedData);
  populateView();
});
list.addEventListener('keypress', function (e) {
  e.stopPropagation();
  var target = e.target.closest('.todo-form-input');
  if (target) {
    if (e.key === 'Enter') {
      _ToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(target.id, target.value);
      populateView();
    }
  }
});
list.addEventListener('click', function (e) {
  var target = e.target.closest('.to-do-item');
  var deleteTarget = e.target.closest('.button-delete');
  if (target) {
    (0,_UserInteraction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target.id, target.checked);
    populateView();
  }
  if (deleteTarget) {
    _ToDo_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeToDo(deleteTarget.id);
    populateView();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundleea3afd7ad3b1ad73b33d.js.map