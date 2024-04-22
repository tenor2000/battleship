"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --gameboard-width: 480px;
    --gameboard-height: 480px;
    --gameboard-bgcolor: black;
    --gameboard-color: greenyellow;
    --accent-color: purple;
    --general-opacity: .8;
}

body, html {
    text-align: center;
    background-color: black;
    color: greenyellow;
}

#container {
    display: flex;
    padding: 30px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-image: url("https://backiee.com/static/wpdb/wallpapers/7680x4320/289646.jpg");
    background-size: cover;
    background-position: center center;
}

.opponent-board, .player-board {
    display: grid;
    background-color: black;
    border: 10px solid var(--accent-color);
    border-radius: 8px;
    opacity: var(--general-opacity);
    background-color: var(--gameboard-bgcolor);
    grid-template-columns: 1fr 10fr; 
    grid-template-rows: 1fr 10fr;
    width: var(--gameboard-width);
    height: var(--gameboard-height);
}

.play-area, .admin-area {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.top-admin-box, .bottom-admin-box {
    display: flex;
    flex-direction: column;
    border: 10px solid var(--accent-color);
    border-radius: 8px;
    opacity: var(--general-opacity);
    background-color: var(--gameboard-bgcolor);
    width: calc(var(--gameboard-width) / 2);
    height: var(--gameboard-height);
    overflow-y: scroll;
}

.control-buttons-container, .ship-container {
    opacity: .8;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    flex-direction: column;
}

.control-buttons {
    width: 80%;
}

.log {
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 5px;
}

#x-coord.coordinate-space {
    display: grid;
    grid-column: 2 / 2;
    grid-row: 1 / 2;
    grid-template-columns: repeat(10, 1fr);
}

#y-coord.coordinate-space {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.coordinate-space {
    justify-content: center;
    align-items: center;
    background-color: var(--gameboard-bgcolor);
    box-sizing: border-box;
}

.x-coord, .y-coord {
    background-color: var(--gameboard-bgcolor);
    box-sizing: border-box;
    font-size: 20px;
    color: var(--gameboard-color);
}

.grid-space{
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(10, 1fr);
}

button {
    background-color: var(--accent-color);
    color: lightblue;
    padding: 8px;
    min-width: 100px;
    border-radius: 8px;
}

.cell {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
}

.opponent-board > .grid-space >.empty:hover {
    cursor: pointer;
    background-color: rgba(180, 180, 180, 0.5);
}

.hit {
    background-color: rgba(255, 0, 0, 0.5);
}

.miss {
    background-color: rgba(0, 0, 255, 0.5);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,0BAA0B;IAC1B,8BAA8B;IAC9B,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,wFAAwF;IACxF,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,sCAAsC;IACtC,kBAAkB;IAClB,+BAA+B;IAC/B,0CAA0C;IAC1C,+BAA+B;IAC/B,4BAA4B;IAC5B,6BAA6B;IAC7B,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sCAAsC;IACtC,kBAAkB;IAClB,+BAA+B;IAC/B,0CAA0C;IAC1C,uCAAuC;IACvC,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,0CAA0C;IAC1C,sBAAsB;AAC1B;;AAEA;IACI,0CAA0C;IAC1C,sBAAsB;IACtB,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,sCAAsC;AAC1C;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;AAC1C","sourcesContent":[":root {\n    --gameboard-width: 480px;\n    --gameboard-height: 480px;\n    --gameboard-bgcolor: black;\n    --gameboard-color: greenyellow;\n    --accent-color: purple;\n    --general-opacity: .8;\n}\n\nbody, html {\n    text-align: center;\n    background-color: black;\n    color: greenyellow;\n}\n\n#container {\n    display: flex;\n    padding: 30px;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    background-image: url(\"https://backiee.com/static/wpdb/wallpapers/7680x4320/289646.jpg\");\n    background-size: cover;\n    background-position: center center;\n}\n\n.opponent-board, .player-board {\n    display: grid;\n    background-color: black;\n    border: 10px solid var(--accent-color);\n    border-radius: 8px;\n    opacity: var(--general-opacity);\n    background-color: var(--gameboard-bgcolor);\n    grid-template-columns: 1fr 10fr; \n    grid-template-rows: 1fr 10fr;\n    width: var(--gameboard-width);\n    height: var(--gameboard-height);\n}\n\n.play-area, .admin-area {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.top-admin-box, .bottom-admin-box {\n    display: flex;\n    flex-direction: column;\n    border: 10px solid var(--accent-color);\n    border-radius: 8px;\n    opacity: var(--general-opacity);\n    background-color: var(--gameboard-bgcolor);\n    width: calc(var(--gameboard-width) / 2);\n    height: var(--gameboard-height);\n    overflow-y: scroll;\n}\n\n.control-buttons-container, .ship-container {\n    opacity: .8;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    align-items: center;\n    flex-direction: column;\n}\n\n.control-buttons {\n    width: 80%;\n}\n\n.log {\n    display: flex;\n    justify-content: left;\n    align-items: left;\n    padding: 5px;\n}\n\n#x-coord.coordinate-space {\n    display: grid;\n    grid-column: 2 / 2;\n    grid-row: 1 / 2;\n    grid-template-columns: repeat(10, 1fr);\n}\n\n#y-coord.coordinate-space {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.coordinate-space {\n    justify-content: center;\n    align-items: center;\n    background-color: var(--gameboard-bgcolor);\n    box-sizing: border-box;\n}\n\n.x-coord, .y-coord {\n    background-color: var(--gameboard-bgcolor);\n    box-sizing: border-box;\n    font-size: 20px;\n    color: var(--gameboard-color);\n}\n\n.grid-space{\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\nbutton {\n    background-color: var(--accent-color);\n    color: lightblue;\n    padding: 8px;\n    min-width: 100px;\n    border-radius: 8px;\n}\n\n.cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid gray;\n}\n\n.opponent-board > .grid-space >.empty:hover {\n    cursor: pointer;\n    background-color: rgba(180, 180, 180, 0.5);\n}\n\n.hit {\n    background-color: rgba(255, 0, 0, 0.5);\n}\n\n.miss {\n    background-color: rgba(0, 0, 255, 0.5);\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/gamefunc.js":
/*!*************************!*\
  !*** ./src/gamefunc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   compAttack: () => (/* binding */ compAttack)
/* harmony export */ });
function Ship(shipType, length) {
    return {
        length,
        hits: 0,
        sunk: false,
        shipType,
        coordinates: [],
        hit() {
            this.hits += 1;
        },
        isSunk() {
            if (this.hits === this.length) {
                this.sunk = true;
            }
        },
        setShipCoordinates(coords) {
            if (coords.length === this.length) {
                this.coordinates = coords; 
            } else {
                return false
            }
            return true
        },
        genRandCoords(usedCoords) {
            // Function to generate random coordinates for each ship
            const coords = [];
            const axis = Math.random() < 0.5 ? 'row' : 'column';
        
            let startCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            if (axis === 'row' && startCoord[1] > 9 - this.length) {
                startCoord[1] = 9 - this.length;
            } else if (axis === 'column' && startCoord[0] > 9 - this.length) {
                startCoord[0] = 9 - this.length;
            }
        
            let currentCoord = [...startCoord];
        
            while (coords.length < this.length) {
                if (!usedCoords.some(coord => coord[0] === currentCoord[0] && coord[1] === currentCoord[1])) {
                    coords.push([...currentCoord]);
                    usedCoords.push([...currentCoord]);
                } else {
                    startCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
                    if (axis === 'row' && startCoord[1] > 9 - this.length) {
                        startCoord[1] = 9 - this.length;
                    } else if (axis === 'column' && startCoord[0] > 9 - this.length) {
                        startCoord[0] = 9 - this.length;
                    }
                    currentCoord = [...startCoord];
                    coords.length = 0;
                }
        
                if (axis === 'row') {
                    currentCoord[1] = (currentCoord[1] + 1) % 10;
                } else {
                    currentCoord[0] = (currentCoord[0] + 1) % 10;
                }
            }
        
            return coords;
        }
    }
}

function Gameboard(opponentName, display) {
    // Opponent name used for logging as the opponent is clicking on the player's board
    return {
        ships: [],
        misses: [],
        hits: [],
        opponentName,
        addShip(ship, coords) {
            if (ship.length !== coords.length) {
                return false
            }
            ship.setShipCoordinates(coords);
            this.ships.push(ship);
            return true
        },
        receiveAttack(coord) {
            const xLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            const yLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

            if (this.misses.includes(coord)) {
                return false
            }

            for (let i = 0; i < this.ships.length; i++) {
                if (this.ships[i].coordinates.some(x => x[0] === coord[0] && x[1] === coord[1])) {
                    this.hits.push(coord);
                    this.ships[i].hit();
                    this.ships[i].isSunk();
                    if (this.ships[i].sunk) {
                        display.addToLog(`${this.opponentName}: '${xLabels[coord[1]]}${yLabels[coord[0]]}' -- ${this.ships[i].shipType} sunk!`);
                        return true
                    }
                    
                    display.addToLog(`${this.opponentName}: '${xLabels[coord[1]]}${yLabels[coord[0]]}' -- HIT!`);
                    return true
                }
            }
            display.addToLog(`${this.opponentName}: '${xLabels[coord[1]]}${yLabels[coord[0]]}' -- miss!`)
            this.misses.push(coord);
            return false
        },
        checkForAllSunk() {
            for (let i = 0; i < this.ships.length; i++) {
                if (!this.ships[i].sunk) {
                    return false
                }
            }
            return true
        },
    }
}

function Player(name, opponentName, display) {
    return {
        name,
        gameboard: Gameboard(opponentName, display),
        renderGrid(container, info='hidden', disableClick=false) {
            container.innerHTML = '';

            for (let i = 0; i < 100; i++) {
                const coord = [Math.floor(i / 10), i % 10];
                const cell = document.createElement('div');
                cell.className = 'cell';

                if (this.gameboard.hits.some(hit => coord[0] === hit[0] && coord[1] === hit[1])) {
                    cell.classList.add('hit');
                    if (info === 'show') {
                        cell.innerHTML = '0';
                    }
                } else if (this.gameboard.misses.some(miss => coord[0] === miss[0] && coord[1] === miss[1])) {
                    cell.classList.add('miss');
                } else if (this.gameboard.ships.some(ship => ship.coordinates.some(x => x[0] === coord[0] && x[1] === coord[1])) && info === 'show') {
                    cell.innerHTML = '0';
                } else {
                    cell.classList.add('empty');
                    if (info === 'hidden') {
                        this.buildEvent(cell, i, disableClick);
                    } 
                }
                
                container.appendChild(cell);
            }

        },
        buildEvent(cell, index, disableClick) {
            const coord = [Math.floor(index / 10), index % 10];
            cell.addEventListener('click', () => {
                if (this.gameboard.receiveAttack(coord)) {
                    cell.classList.add('hit');
                    cell.classList.remove('empty');
                    this.gameboard.hits.push(coord);
                } else {
                    cell.classList.add('miss');
                    cell.classList.remove('empty');
                    this.gameboard.misses.push(coord);
                }
                if (!disableClick) {
                    const event = new Event('Turn Taken');
                    document.dispatchEvent(event);
                }
            })
        },
        setUpShips(random=true) {
            const battleship = Ship('battleship', 4);
            const destroyer = Ship('destroyer', 3);
            const carrier = Ship('carrier', 5);
            const submarine = Ship('submarine', 3);
            const patrolboat = Ship('patrol boat', 2);
        
            const shipArray = [battleship, destroyer, carrier, submarine, patrolboat];
        
            // WIP
            if (random) {
                const usedCoords = [];
                shipArray.forEach(ship => {
                const shipCoords = ship.genRandCoords(usedCoords);
                usedCoords.push(...shipCoords);
                this.gameboard.addShip(ship, shipCoords);
              })
            } else {
                display.setUpShipDisplay(shipArray);
                this.gameboard.addEventListener('drop', () => false)
                this.gameboard.addShip(destroyer, [[9,5], [9,6], [9,7]]);
                this.gameboard.addShip(carrier, [[2,2], [2,3], [2,4], [2,5], [2,6]]);
                this.gameboard.addShip(patrolboat, [[1,8], [2,8]]);
                this.gameboard.addShip(submarine, [[5,9], [5,8], [5,7]]);
                this.gameboard.addShip(battleship, [[7,4], [6,4], [5,4], [4,4]]);
            }
          }
    }
}



function compAttack(opponent, difficulty=0) {
    // Computer makes random attack
    const coordMatches = (coord1, coord2) => coord1[0] === coord2[0] && coord1[1] === coord2[1];
  
    const isCoordInArrays = (coord, misses, hits) => misses.some(c => coordMatches(c, coord)) || hits.some(c => coordMatches(c, coord));
    let randomCoord;
    if (difficulty === 0) {
        
        do {
            randomCoord = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        } while (isCoordInArrays(randomCoord, opponent.gameboard.misses, opponent.gameboard.hits));
    }
    opponent.gameboard.receiveAttack(randomCoord);
    const event = new Event('Turn Taken');
    document.dispatchEvent(event);
  }


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamefunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamefunc.js */ "./src/gamefunc.js");
/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ "./src/interface.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

// Driver code

const display = (0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.interfaceDisplay)(container);
display.homeDisplay();
const playerBoard = document.querySelector('.player-board');
const opponentBoard = document.querySelector('.opponent-board');
display.createGrid(playerBoard);
display.createGrid(opponentBoard);

const playerGridSpace = document.querySelector('.player-board .grid-space');
const opponentGridSpace = document.querySelector('.opponent-board .grid-space');


function playerTurn(current, opponent) {
  current.renderGrid(playerGridSpace, 'show');
  opponent.renderGrid(opponentGridSpace);
}

function computerTurn(computer, playerOne) {
  playerOne.renderGrid(playerGridSpace, 'show', true)
  computer.renderGrid(opponentGridSpace, true);
  setTimeout(() => {(0,_gamefunc_js__WEBPACK_IMPORTED_MODULE_0__.compAttack)(playerOne)}, 500)
}

// Turn Functions
function runHotSeatGame(screen) {
  // Opponent names used for logging
  const playerOne = (0,_gamefunc_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Player 1', 'Player 2', screen);
  const playerTwo = (0,_gamefunc_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Player 2', 'Player 1', screen);

  playerOne.setUpShips();
  playerTwo.setUpShips();

  let turn = 0;
  document.addEventListener('Turn Taken', () => {
    turn = (turn+1) % 2;
    if (playerOne.gameboard.checkForAllSunk()) {
      return screen.victoryDisplay(playerTwo, playerOne);
    }
    if (playerTwo.gameboard.checkForAllSunk()) {
      return screen.victoryDisplay(playerOne, playerTwo)
    }
    if (turn === 0) {
      playerTurn(playerOne, playerTwo);
    } else {
      playerTurn(playerTwo, playerOne);
    }
    return true
  })

  playerTurn(playerOne, playerTwo)
}

function runVsCompGame(screen) {
    // Opponent name used for logging as the player is clicking on the opponent's board
    const playerOne = (0,_gamefunc_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Player 1', 'Computer', screen);
    const computerAI = (0,_gamefunc_js__WEBPACK_IMPORTED_MODULE_0__.Player)('Computer', 'Player 1', screen);

    playerOne.setUpShips();
    computerAI.setUpShips();

    let turn = 0;
    document.addEventListener('Turn Taken', () => {
      turn = (turn+1) % 2;
      if (playerOne.gameboard.checkForAllSunk()) {
        return screen.victoryDisplay(computerAI, playerOne);
      }
      if (computerAI.gameboard.checkForAllSunk()) {
        return screen.victoryDisplay(playerOne, computerAI)
      }

      if (turn === 0) {
        playerTurn(playerOne, computerAI);
      } else {
        computerTurn(computerAI, playerOne);
      }
      return true
    })

  playerTurn(playerOne, computerAI)
}

document.addEventListener('New Game', (event) => {
  const gametype = event.detail;

  display.gameDisplay(display);
  if (gametype === 'hotseat') {
    runHotSeatGame(display);
  } else {
    runVsCompGame(display);
  }
})

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   interfaceDisplay: () => (/* binding */ interfaceDisplay)
/* harmony export */ });
// Interface set up
function interfaceDisplay(container) {
    const playArea = document.createElement('div');
    playArea.className = 'play-area';
    const playerBoard = document.createElement('div');
    playerBoard.className = 'player-board';
    const opponentBoard = document.createElement('div');
    opponentBoard.className = 'opponent-board';
    playArea.appendChild(opponentBoard);
    playArea.appendChild(playerBoard);
    container.appendChild(playArea);

    const adminArea = document.createElement('div');
    adminArea.className = 'admin-area';
    container.appendChild(adminArea);
    
    const topAdminBox = document.createElement('div');
    topAdminBox.className = 'top-admin-box';

    const bottomAdminBox = document.createElement('div');
    bottomAdminBox.className = 'bottom-admin-box';

    adminArea.appendChild(topAdminBox);
    adminArea.appendChild(bottomAdminBox);

    return {
        createGrid(boardspace) {
            const xLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            const yLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            const xCoordSpace = document.createElement('div');
            xCoordSpace.className = 'coordinate-space';
        
            xCoordSpace.id = 'x-coord';
            const yCoordSpace = document.createElement('div');
            yCoordSpace.className = 'coordinate-space';
            yCoordSpace.id = 'y-coord';
        
            for (let i = 0; i < 10; i++) {
                const xCoord = document.createElement('div');
                xCoord.className = 'x-coord';
                xCoord.innerHTML = xLabels[i];
                xCoordSpace.appendChild(xCoord);
                const yCoord = document.createElement('div');
                yCoord.className = 'y-coord';
                yCoord.innerHTML = yLabels[i];
                yCoordSpace.appendChild(yCoord);
            }
            const zeroSpace = document.createElement('div');
            zeroSpace.className = 'zero-space';
            const gridSpace = document.createElement('div');
            gridSpace.className = 'grid-space';
        
            boardspace.appendChild(zeroSpace);
            boardspace.appendChild(xCoordSpace);
            boardspace.appendChild(yCoordSpace);
            boardspace.appendChild(gridSpace);
        
            for (let i = 0; i < 100; i++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                gridSpace.appendChild(cell);
            }
        },
        homeDisplay() {
            topAdminBox.innerHTML = '';
            const title = document.createElement('h1');
            title.textContent = 'Welcome to Battleship';

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';
   
            const newGameButton = document.createElement('button');
            newGameButton.className = 'control-buttons';
            newGameButton.textContent = 'New Game';
            
            newGameButton.addEventListener('click', () => {
                this.newGameOptDisplay()
            })

            const optButton = document.createElement('button');
            optButton.className = 'control-buttons';
            optButton.textContent = 'Options';

            optButton.addEventListener('click', () => {
                this.optionsDisplay()
            })
            topAdminBox.appendChild(title);
            topAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(newGameButton);
            buttonDiv.appendChild(optButton);
        },
        gameDisplay() {
            topAdminBox.innerHTML = '';
            this.addToLog('BEGIN GAME: Battleship!')

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';

            const concedeButton = document.createElement('button');
            concedeButton.className = 'control-buttons';
            concedeButton.textContent = 'Concede';

            bottomAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(concedeButton);
            concedeButton.addEventListener('click', () => {
                window.location.reload()
            })
        },
        setUpShipDisplay(shipArray) {
            // not been implemented yet
            topAdminBox.innerHTML = '';
            const title = document.createElement('h1');
            title.textContent = 'Set Up Your Ships!';
            topAdminBox.appendChild(title);

            bottomAdminBox.innerHTML = '';
            const title2 = document.createElement('h2');
            title2.textContent = 'Drag and Drop Your Ships!';

            const shipDiv = document.createElement('div');
            shipDiv.className = 'ship-container';

            shipArray.forEach(element => {
                const ship = document.createElement('div');
                ship.className = 'ship';
                ship.textContent = element.shipType;
                ship.appendChild(ship);
            });
        },
        newGameOptDisplay() {
            topAdminBox.innerHTML = '';
            const title = document.createElement('h2');
            title.textContent = 'New Game: Select Gametype';
            
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';

            const vscompButton = document.createElement('button');
            vscompButton.className = 'control-buttons';
            vscompButton.textContent = 'Human vs. Computer';
            vscompButton.addEventListener('click', () => {
                const gametype = 'vscomp';
                document.dispatchEvent(new CustomEvent('New Game', { detail: gametype}));
            })

            const hotseatButton = document.createElement('button');
            hotseatButton.className = 'control-buttons';
            hotseatButton.textContent = 'Hot Seat';
            hotseatButton.addEventListener('click', () => {
                const gametype = 'hotseat';
                document.dispatchEvent(new CustomEvent('New Game', { detail: gametype}));
            })

            const backButton = document.createElement('button');
            backButton.className = 'control-buttons';
            backButton.textContent = 'Back';
            backButton.addEventListener('click', () => {
                this.homeDisplay()
            })
            topAdminBox.appendChild(title);
            topAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(vscompButton);
            buttonDiv.appendChild(hotseatButton);
            buttonDiv.appendChild(backButton);
        },
        optionsDisplay() {
            topAdminBox.innerHTML = '';
            const title = document.createElement('h2');
            title.textContent = 'Options: Ship Placement';

            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'control-buttons-container';
            
            const randButton = document.createElement('button');
            randButton.className = 'control-buttons';
            randButton.textContent = 'Randomly Assign';

            const customButton = document.createElement('button');
            customButton.className = 'control-buttons';
            customButton.textContent = 'Custom Placement';

            const backButton = document.createElement('button');
            backButton.className = 'control-buttons';
            backButton.textContent = 'Back';
            backButton.addEventListener('click', () => {
                this.homeDisplay()
            })

            topAdminBox.appendChild(title);
            topAdminBox.appendChild(buttonDiv);
            buttonDiv.appendChild(randButton);
            buttonDiv.appendChild(customButton);
            buttonDiv.appendChild(backButton);
        },
        addToLog(text) {
            const logEntry = document.createElement('text');
            const logBox = document.querySelector('.top-admin-box');
            logEntry.className = 'log';
            logEntry.innerHTML = text;
            logBox.appendChild(logEntry);
        
            logBox.scrollTop = logBox.scrollHeight;
        },
        victoryDisplay(victor, loser) {
            this.addToLog(`GAME OVER: ${victor.name} Victory!`)
            const playerGridSpace = document.querySelector('.player-board .grid-space');
            const opponentGridSpace = document.querySelector('.opponent-board .grid-space');
            loser.renderGrid(opponentGridSpace, 'show', true);
            victor.renderGrid(playerGridSpace, 'show', true);
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interfaceDisplay);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0NBQXdDLGFBQWE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWZ1bmMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tZ2FtZWJvYXJkLXdpZHRoOiA0ODBweDtcbiAgICAtLWdhbWVib2FyZC1oZWlnaHQ6IDQ4MHB4O1xuICAgIC0tZ2FtZWJvYXJkLWJnY29sb3I6IGJsYWNrO1xuICAgIC0tZ2FtZWJvYXJkLWNvbG9yOiBncmVlbnllbGxvdztcbiAgICAtLWFjY2VudC1jb2xvcjogcHVycGxlO1xuICAgIC0tZ2VuZXJhbC1vcGFjaXR5OiAuODtcbn1cblxuYm9keSwgaHRtbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vYmFja2llZS5jb20vc3RhdGljL3dwZGIvd2FsbHBhcGVycy83NjgweDQzMjAvMjg5NjQ2LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5vcHBvbmVudC1ib2FyZCwgLnBsYXllci1ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgb3BhY2l0eTogdmFyKC0tZ2VuZXJhbC1vcGFjaXR5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmdjb2xvcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmcjsgXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLWdhbWVib2FyZC1oZWlnaHQpO1xufVxuXG4ucGxheS1hcmVhLCAuYWRtaW4tYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnRvcC1hZG1pbi1ib3gsIC5ib3R0b20tYWRtaW4tYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG9wYWNpdHk6IHZhcigtLWdlbmVyYWwtb3BhY2l0eSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2FtZWJvYXJkLWJnY29sb3IpO1xuICAgIHdpZHRoOiBjYWxjKHZhcigtLWdhbWVib2FyZC13aWR0aCkgLyAyKTtcbiAgICBoZWlnaHQ6IHZhcigtLWdhbWVib2FyZC1oZWlnaHQpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNvbnRyb2wtYnV0dG9ucy1jb250YWluZXIsIC5zaGlwLWNvbnRhaW5lciB7XG4gICAgb3BhY2l0eTogLjg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udHJvbC1idXR0b25zIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4ubG9nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbiN4LWNvb3JkLmNvb3JkaW5hdGUtc3BhY2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuI3ktY29vcmQuY29vcmRpbmF0ZS1zcGFjZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4uY29vcmRpbmF0ZS1zcGFjZSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmdjb2xvcik7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLngtY29vcmQsIC55LWNvb3JkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmdjb2xvcik7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHZhcigtLWdhbWVib2FyZC1jb2xvcik7XG59XG5cbi5ncmlkLXNwYWNle1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICBjb2xvcjogbGlnaHRibHVlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmNlbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4ub3Bwb25lbnQtYm9hcmQgPiAuZ3JpZC1zcGFjZSA+LmVtcHR5OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODAsIDE4MCwgMTgwLCAwLjUpO1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3RkFBd0Y7SUFDeEYsc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsMENBQTBDO0lBQzFDLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQiwwQ0FBMEM7SUFDMUMsdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWdhbWVib2FyZC13aWR0aDogNDgwcHg7XFxuICAgIC0tZ2FtZWJvYXJkLWhlaWdodDogNDgwcHg7XFxuICAgIC0tZ2FtZWJvYXJkLWJnY29sb3I6IGJsYWNrO1xcbiAgICAtLWdhbWVib2FyZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIC0tYWNjZW50LWNvbG9yOiBwdXJwbGU7XFxuICAgIC0tZ2VuZXJhbC1vcGFjaXR5OiAuODtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9iYWNraWVlLmNvbS9zdGF0aWMvd3BkYi93YWxscGFwZXJzLzc2ODB4NDMyMC8yODk2NDYuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5vcHBvbmVudC1ib2FyZCwgLnBsYXllci1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBvcGFjaXR5OiB2YXIoLS1nZW5lcmFsLW9wYWNpdHkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmdjb2xvcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnI7IFxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1nYW1lYm9hcmQtaGVpZ2h0KTtcXG59XFxuXFxuLnBsYXktYXJlYSwgLmFkbWluLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi50b3AtYWRtaW4tYm94LCAuYm90dG9tLWFkbWluLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG9wYWNpdHk6IHZhcigtLWdlbmVyYWwtb3BhY2l0eSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdhbWVib2FyZC1iZ2NvbG9yKTtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0tZ2FtZWJvYXJkLXdpZHRoKSAvIDIpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWdhbWVib2FyZC1oZWlnaHQpO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb250cm9sLWJ1dHRvbnMtY29udGFpbmVyLCAuc2hpcC1jb250YWluZXIge1xcbiAgICBvcGFjaXR5OiAuODtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250cm9sLWJ1dHRvbnMge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubG9nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogbGVmdDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jeC1jb29yZC5jb29yZGluYXRlLXNwYWNlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4jeS1jb29yZC5jb29yZGluYXRlLXNwYWNlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY29vcmRpbmF0ZS1zcGFjZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nYW1lYm9hcmQtYmdjb2xvcik7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi54LWNvb3JkLCAueS1jb29yZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdhbWVib2FyZC1iZ2NvbG9yKTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZ2FtZWJvYXJkLWNvbG9yKTtcXG59XFxuXFxuLmdyaWQtc3BhY2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5vcHBvbmVudC1ib2FyZCA+IC5ncmlkLXNwYWNlID4uZW1wdHk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC41KTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBTaGlwKHNoaXBUeXBlLCBsZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICBzaGlwVHlwZSxcbiAgICAgICAgY29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRTaGlwQ29vcmRpbmF0ZXMoY29vcmRzKSB7XG4gICAgICAgICAgICBpZiAoY29vcmRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRzOyBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBnZW5SYW5kQ29vcmRzKHVzZWRDb29yZHMpIHtcbiAgICAgICAgICAgIC8vIEZ1bmN0aW9uIHRvIGdlbmVyYXRlIHJhbmRvbSBjb29yZGluYXRlcyBmb3IgZWFjaCBzaGlwXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gJ3JvdycgOiAnY29sdW1uJztcbiAgICAgICAgXG4gICAgICAgICAgICBsZXQgc3RhcnRDb29yZCA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3JvdycgJiYgc3RhcnRDb29yZFsxXSA+IDkgLSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRbMV0gPSA5IC0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF4aXMgPT09ICdjb2x1bW4nICYmIHN0YXJ0Q29vcmRbMF0gPiA5IC0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdGFydENvb3JkWzBdID0gOSAtIHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29vcmQgPSBbLi4uc3RhcnRDb29yZF07XG4gICAgICAgIFxuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkcy5sZW5ndGggPCB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghdXNlZENvb3Jkcy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09PSBjdXJyZW50Q29vcmRbMF0gJiYgY29vcmRbMV0gPT09IGN1cnJlbnRDb29yZFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzLnB1c2goWy4uLmN1cnJlbnRDb29yZF0pO1xuICAgICAgICAgICAgICAgICAgICB1c2VkQ29vcmRzLnB1c2goWy4uLmN1cnJlbnRDb29yZF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3JvdycgJiYgc3RhcnRDb29yZFsxXSA+IDkgLSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZFsxXSA9IDkgLSB0aGlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSAnY29sdW1uJyAmJiBzdGFydENvb3JkWzBdID4gOSAtIHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkWzBdID0gOSAtIHRoaXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb29yZCA9IFsuLi5zdGFydENvb3JkXTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3JvdycpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvb3JkWzFdID0gKGN1cnJlbnRDb29yZFsxXSArIDEpICUgMTA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvb3JkWzBdID0gKGN1cnJlbnRDb29yZFswXSArIDEpICUgMTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjb29yZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQob3Bwb25lbnROYW1lLCBkaXNwbGF5KSB7XG4gICAgLy8gT3Bwb25lbnQgbmFtZSB1c2VkIGZvciBsb2dnaW5nIGFzIHRoZSBvcHBvbmVudCBpcyBjbGlja2luZyBvbiB0aGUgcGxheWVyJ3MgYm9hcmRcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGlwczogW10sXG4gICAgICAgIG1pc3NlczogW10sXG4gICAgICAgIGhpdHM6IFtdLFxuICAgICAgICBvcHBvbmVudE5hbWUsXG4gICAgICAgIGFkZFNoaXAoc2hpcCwgY29vcmRzKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5sZW5ndGggIT09IGNvb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXAuc2V0U2hpcENvb3JkaW5hdGVzKGNvb3Jkcyk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgICAgICBjb25zdCB4TGFiZWxzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgICAgICAgICBjb25zdCB5TGFiZWxzID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCddO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5taXNzZXMuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzW2ldLmNvb3JkaW5hdGVzLnNvbWUoeCA9PiB4WzBdID09PSBjb29yZFswXSAmJiB4WzFdID09PSBjb29yZFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2goY29vcmQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBzW2ldLmlzU3VuaygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tpXS5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LmFkZFRvTG9nKGAke3RoaXMub3Bwb25lbnROYW1lfTogJyR7eExhYmVsc1tjb29yZFsxXV19JHt5TGFiZWxzW2Nvb3JkWzBdXX0nIC0tICR7dGhpcy5zaGlwc1tpXS5zaGlwVHlwZX0gc3VuayFgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkuYWRkVG9Mb2coYCR7dGhpcy5vcHBvbmVudE5hbWV9OiAnJHt4TGFiZWxzW2Nvb3JkWzFdXX0ke3lMYWJlbHNbY29vcmRbMF1dfScgLS0gSElUIWApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXkuYWRkVG9Mb2coYCR7dGhpcy5vcHBvbmVudE5hbWV9OiAnJHt4TGFiZWxzW2Nvb3JkWzFdXX0ke3lMYWJlbHNbY29vcmRbMF1dfScgLS0gbWlzcyFgKVxuICAgICAgICAgICAgdGhpcy5taXNzZXMucHVzaChjb29yZCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tGb3JBbGxTdW5rKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNoaXBzW2ldLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIobmFtZSwgb3Bwb25lbnROYW1lLCBkaXNwbGF5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQob3Bwb25lbnROYW1lLCBkaXNwbGF5KSxcbiAgICAgICAgcmVuZGVyR3JpZChjb250YWluZXIsIGluZm89J2hpZGRlbicsIGRpc2FibGVDbGljaz1mYWxzZSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmQgPSBbTWF0aC5mbG9vcihpIC8gMTApLCBpICUgMTBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5oaXRzLnNvbWUoaGl0ID0+IGNvb3JkWzBdID09PSBoaXRbMF0gJiYgY29vcmRbMV0gPT09IGhpdFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8gPT09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZWJvYXJkLm1pc3Nlcy5zb21lKG1pc3MgPT4gY29vcmRbMF0gPT09IG1pc3NbMF0gJiYgY29vcmRbMV0gPT09IG1pc3NbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lYm9hcmQuc2hpcHMuc29tZShzaGlwID0+IHNoaXAuY29vcmRpbmF0ZXMuc29tZSh4ID0+IHhbMF0gPT09IGNvb3JkWzBdICYmIHhbMV0gPT09IGNvb3JkWzFdKSkgJiYgaW5mbyA9PT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJzAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8gPT09ICdoaWRkZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRXZlbnQoY2VsbCwgaSwgZGlzYWJsZUNsaWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGJ1aWxkRXZlbnQoY2VsbCwgaW5kZXgsIGRpc2FibGVDbGljaykge1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBbTWF0aC5mbG9vcihpbmRleCAvIDEwKSwgaW5kZXggJSAxMF07XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkLmhpdHMucHVzaChjb29yZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQubWlzc2VzLnB1c2goY29vcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWRpc2FibGVDbGljaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnVHVybiBUYWtlbicpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzZXRVcFNoaXBzKHJhbmRvbT10cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcCgnYmF0dGxlc2hpcCcsIDQpO1xuICAgICAgICAgICAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgnZGVzdHJveWVyJywgMyk7XG4gICAgICAgICAgICBjb25zdCBjYXJyaWVyID0gU2hpcCgnY2FycmllcicsIDUpO1xuICAgICAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgnc3VibWFyaW5lJywgMyk7XG4gICAgICAgICAgICBjb25zdCBwYXRyb2xib2F0ID0gU2hpcCgncGF0cm9sIGJvYXQnLCAyKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzaGlwQXJyYXkgPSBbYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBjYXJyaWVyLCBzdWJtYXJpbmUsIHBhdHJvbGJvYXRdO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIFdJUFxuICAgICAgICAgICAgaWYgKHJhbmRvbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZWRDb29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBzaGlwQXJyYXkuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwQ29vcmRzID0gc2hpcC5nZW5SYW5kQ29vcmRzKHVzZWRDb29yZHMpO1xuICAgICAgICAgICAgICAgIHVzZWRDb29yZHMucHVzaCguLi5zaGlwQ29vcmRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5hZGRTaGlwKHNoaXAsIHNoaXBDb29yZHMpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnNldFVwU2hpcERpc3BsYXkoc2hpcEFycmF5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKCkgPT4gZmFsc2UpXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQuYWRkU2hpcChkZXN0cm95ZXIsIFtbOSw1XSwgWzksNl0sIFs5LDddXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQuYWRkU2hpcChjYXJyaWVyLCBbWzIsMl0sIFsyLDNdLCBbMiw0XSwgWzIsNV0sIFsyLDZdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQuYWRkU2hpcChwYXRyb2xib2F0LCBbWzEsOF0sIFsyLDhdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQuYWRkU2hpcChzdWJtYXJpbmUsIFtbNSw5XSwgWzUsOF0sIFs1LDddXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQuYWRkU2hpcChiYXR0bGVzaGlwLCBbWzcsNF0sIFs2LDRdLCBbNSw0XSwgWzQsNF1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBBdHRhY2sob3Bwb25lbnQsIGRpZmZpY3VsdHk9MCkge1xuICAgIC8vIENvbXB1dGVyIG1ha2VzIHJhbmRvbSBhdHRhY2tcbiAgICBjb25zdCBjb29yZE1hdGNoZXMgPSAoY29vcmQxLCBjb29yZDIpID0+IGNvb3JkMVswXSA9PT0gY29vcmQyWzBdICYmIGNvb3JkMVsxXSA9PT0gY29vcmQyWzFdO1xuICBcbiAgICBjb25zdCBpc0Nvb3JkSW5BcnJheXMgPSAoY29vcmQsIG1pc3NlcywgaGl0cykgPT4gbWlzc2VzLnNvbWUoYyA9PiBjb29yZE1hdGNoZXMoYywgY29vcmQpKSB8fCBoaXRzLnNvbWUoYyA9PiBjb29yZE1hdGNoZXMoYywgY29vcmQpKTtcbiAgICBsZXQgcmFuZG9tQ29vcmQ7XG4gICAgaWYgKGRpZmZpY3VsdHkgPT09IDApIHtcbiAgICAgICAgXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHJhbmRvbUNvb3JkID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcbiAgICAgICAgfSB3aGlsZSAoaXNDb29yZEluQXJyYXlzKHJhbmRvbUNvb3JkLCBvcHBvbmVudC5nYW1lYm9hcmQubWlzc2VzLCBvcHBvbmVudC5nYW1lYm9hcmQuaGl0cykpO1xuICAgIH1cbiAgICBvcHBvbmVudC5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21Db29yZCk7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ1R1cm4gVGFrZW4nKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuIiwiaW1wb3J0IHsgUGxheWVyLCBjb21wQXR0YWNrIH0gZnJvbSAnLi9nYW1lZnVuYy5qcyc7XG5pbXBvcnQgeyBpbnRlcmZhY2VEaXNwbGF5IH0gZnJvbSAnLi9pbnRlcmZhY2UuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuaWQgPSAnY29udGFpbmVyJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuLy8gRHJpdmVyIGNvZGVcblxuY29uc3QgZGlzcGxheSA9IGludGVyZmFjZURpc3BsYXkoY29udGFpbmVyKTtcbmRpc3BsYXkuaG9tZURpc3BsYXkoKTtcbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvbmVudC1ib2FyZCcpO1xuZGlzcGxheS5jcmVhdGVHcmlkKHBsYXllckJvYXJkKTtcbmRpc3BsYXkuY3JlYXRlR3JpZChvcHBvbmVudEJvYXJkKTtcblxuY29uc3QgcGxheWVyR3JpZFNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCAuZ3JpZC1zcGFjZScpO1xuY29uc3Qgb3Bwb25lbnRHcmlkU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Bwb25lbnQtYm9hcmQgLmdyaWQtc3BhY2UnKTtcblxuXG5mdW5jdGlvbiBwbGF5ZXJUdXJuKGN1cnJlbnQsIG9wcG9uZW50KSB7XG4gIGN1cnJlbnQucmVuZGVyR3JpZChwbGF5ZXJHcmlkU3BhY2UsICdzaG93Jyk7XG4gIG9wcG9uZW50LnJlbmRlckdyaWQob3Bwb25lbnRHcmlkU3BhY2UpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclR1cm4oY29tcHV0ZXIsIHBsYXllck9uZSkge1xuICBwbGF5ZXJPbmUucmVuZGVyR3JpZChwbGF5ZXJHcmlkU3BhY2UsICdzaG93JywgdHJ1ZSlcbiAgY29tcHV0ZXIucmVuZGVyR3JpZChvcHBvbmVudEdyaWRTcGFjZSwgdHJ1ZSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge2NvbXBBdHRhY2socGxheWVyT25lKX0sIDUwMClcbn1cblxuLy8gVHVybiBGdW5jdGlvbnNcbmZ1bmN0aW9uIHJ1bkhvdFNlYXRHYW1lKHNjcmVlbikge1xuICAvLyBPcHBvbmVudCBuYW1lcyB1c2VkIGZvciBsb2dnaW5nXG4gIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcignUGxheWVyIDEnLCAnUGxheWVyIDInLCBzY3JlZW4pO1xuICBjb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoJ1BsYXllciAyJywgJ1BsYXllciAxJywgc2NyZWVuKTtcblxuICBwbGF5ZXJPbmUuc2V0VXBTaGlwcygpO1xuICBwbGF5ZXJUd28uc2V0VXBTaGlwcygpO1xuXG4gIGxldCB0dXJuID0gMDtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignVHVybiBUYWtlbicsICgpID0+IHtcbiAgICB0dXJuID0gKHR1cm4rMSkgJSAyO1xuICAgIGlmIChwbGF5ZXJPbmUuZ2FtZWJvYXJkLmNoZWNrRm9yQWxsU3VuaygpKSB7XG4gICAgICByZXR1cm4gc2NyZWVuLnZpY3RvcnlEaXNwbGF5KHBsYXllclR3bywgcGxheWVyT25lKTtcbiAgICB9XG4gICAgaWYgKHBsYXllclR3by5nYW1lYm9hcmQuY2hlY2tGb3JBbGxTdW5rKCkpIHtcbiAgICAgIHJldHVybiBzY3JlZW4udmljdG9yeURpc3BsYXkocGxheWVyT25lLCBwbGF5ZXJUd28pXG4gICAgfVxuICAgIGlmICh0dXJuID09PSAwKSB7XG4gICAgICBwbGF5ZXJUdXJuKHBsYXllck9uZSwgcGxheWVyVHdvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyVHVybihwbGF5ZXJUd28sIHBsYXllck9uZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH0pXG5cbiAgcGxheWVyVHVybihwbGF5ZXJPbmUsIHBsYXllclR3bylcbn1cblxuZnVuY3Rpb24gcnVuVnNDb21wR2FtZShzY3JlZW4pIHtcbiAgICAvLyBPcHBvbmVudCBuYW1lIHVzZWQgZm9yIGxvZ2dpbmcgYXMgdGhlIHBsYXllciBpcyBjbGlja2luZyBvbiB0aGUgb3Bwb25lbnQncyBib2FyZFxuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcignUGxheWVyIDEnLCAnQ29tcHV0ZXInLCBzY3JlZW4pO1xuICAgIGNvbnN0IGNvbXB1dGVyQUkgPSBQbGF5ZXIoJ0NvbXB1dGVyJywgJ1BsYXllciAxJywgc2NyZWVuKTtcblxuICAgIHBsYXllck9uZS5zZXRVcFNoaXBzKCk7XG4gICAgY29tcHV0ZXJBSS5zZXRVcFNoaXBzKCk7XG5cbiAgICBsZXQgdHVybiA9IDA7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignVHVybiBUYWtlbicsICgpID0+IHtcbiAgICAgIHR1cm4gPSAodHVybisxKSAlIDI7XG4gICAgICBpZiAocGxheWVyT25lLmdhbWVib2FyZC5jaGVja0ZvckFsbFN1bmsoKSkge1xuICAgICAgICByZXR1cm4gc2NyZWVuLnZpY3RvcnlEaXNwbGF5KGNvbXB1dGVyQUksIHBsYXllck9uZSk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcHV0ZXJBSS5nYW1lYm9hcmQuY2hlY2tGb3JBbGxTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIHNjcmVlbi52aWN0b3J5RGlzcGxheShwbGF5ZXJPbmUsIGNvbXB1dGVyQUkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0dXJuID09PSAwKSB7XG4gICAgICAgIHBsYXllclR1cm4ocGxheWVyT25lLCBjb21wdXRlckFJKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXB1dGVyVHVybihjb21wdXRlckFJLCBwbGF5ZXJPbmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG4gIHBsYXllclR1cm4ocGxheWVyT25lLCBjb21wdXRlckFJKVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdOZXcgR2FtZScsIChldmVudCkgPT4ge1xuICBjb25zdCBnYW1ldHlwZSA9IGV2ZW50LmRldGFpbDtcblxuICBkaXNwbGF5LmdhbWVEaXNwbGF5KGRpc3BsYXkpO1xuICBpZiAoZ2FtZXR5cGUgPT09ICdob3RzZWF0Jykge1xuICAgIHJ1bkhvdFNlYXRHYW1lKGRpc3BsYXkpO1xuICB9IGVsc2Uge1xuICAgIHJ1blZzQ29tcEdhbWUoZGlzcGxheSk7XG4gIH1cbn0pIiwiLy8gSW50ZXJmYWNlIHNldCB1cFxuZXhwb3J0IGZ1bmN0aW9uIGludGVyZmFjZURpc3BsYXkoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcGxheUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5QXJlYS5jbGFzc05hbWUgPSAncGxheS1hcmVhJztcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckJvYXJkLmNsYXNzTmFtZSA9ICdwbGF5ZXItYm9hcmQnO1xuICAgIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcHBvbmVudEJvYXJkLmNsYXNzTmFtZSA9ICdvcHBvbmVudC1ib2FyZCc7XG4gICAgcGxheUFyZWEuYXBwZW5kQ2hpbGQob3Bwb25lbnRCb2FyZCk7XG4gICAgcGxheUFyZWEuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QXJlYSk7XG5cbiAgICBjb25zdCBhZG1pbkFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZG1pbkFyZWEuY2xhc3NOYW1lID0gJ2FkbWluLWFyZWEnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZG1pbkFyZWEpO1xuICAgIFxuICAgIGNvbnN0IHRvcEFkbWluQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wQWRtaW5Cb3guY2xhc3NOYW1lID0gJ3RvcC1hZG1pbi1ib3gnO1xuXG4gICAgY29uc3QgYm90dG9tQWRtaW5Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b21BZG1pbkJveC5jbGFzc05hbWUgPSAnYm90dG9tLWFkbWluLWJveCc7XG5cbiAgICBhZG1pbkFyZWEuYXBwZW5kQ2hpbGQodG9wQWRtaW5Cb3gpO1xuICAgIGFkbWluQXJlYS5hcHBlbmRDaGlsZChib3R0b21BZG1pbkJveCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVHcmlkKGJvYXJkc3BhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHhMYWJlbHMgPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXTtcbiAgICAgICAgICAgIGNvbnN0IHlMYWJlbHMgPSBbJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzEwJ107XG4gICAgICAgICAgICBjb25zdCB4Q29vcmRTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgeENvb3JkU3BhY2UuY2xhc3NOYW1lID0gJ2Nvb3JkaW5hdGUtc3BhY2UnO1xuICAgICAgICBcbiAgICAgICAgICAgIHhDb29yZFNwYWNlLmlkID0gJ3gtY29vcmQnO1xuICAgICAgICAgICAgY29uc3QgeUNvb3JkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHlDb29yZFNwYWNlLmNsYXNzTmFtZSA9ICdjb29yZGluYXRlLXNwYWNlJztcbiAgICAgICAgICAgIHlDb29yZFNwYWNlLmlkID0gJ3ktY29vcmQnO1xuICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHhDb29yZC5jbGFzc05hbWUgPSAneC1jb29yZCc7XG4gICAgICAgICAgICAgICAgeENvb3JkLmlubmVySFRNTCA9IHhMYWJlbHNbaV07XG4gICAgICAgICAgICAgICAgeENvb3JkU3BhY2UuYXBwZW5kQ2hpbGQoeENvb3JkKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB5Q29vcmQuY2xhc3NOYW1lID0gJ3ktY29vcmQnO1xuICAgICAgICAgICAgICAgIHlDb29yZC5pbm5lckhUTUwgPSB5TGFiZWxzW2ldO1xuICAgICAgICAgICAgICAgIHlDb29yZFNwYWNlLmFwcGVuZENoaWxkKHlDb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB6ZXJvU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHplcm9TcGFjZS5jbGFzc05hbWUgPSAnemVyby1zcGFjZSc7XG4gICAgICAgICAgICBjb25zdCBncmlkU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGdyaWRTcGFjZS5jbGFzc05hbWUgPSAnZ3JpZC1zcGFjZSc7XG4gICAgICAgIFxuICAgICAgICAgICAgYm9hcmRzcGFjZS5hcHBlbmRDaGlsZCh6ZXJvU3BhY2UpO1xuICAgICAgICAgICAgYm9hcmRzcGFjZS5hcHBlbmRDaGlsZCh4Q29vcmRTcGFjZSk7XG4gICAgICAgICAgICBib2FyZHNwYWNlLmFwcGVuZENoaWxkKHlDb29yZFNwYWNlKTtcbiAgICAgICAgICAgIGJvYXJkc3BhY2UuYXBwZW5kQ2hpbGQoZ3JpZFNwYWNlKTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgIGdyaWRTcGFjZS5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaG9tZURpc3BsYXkoKSB7XG4gICAgICAgICAgICB0b3BBZG1pbkJveC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gQmF0dGxlc2hpcCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdjb250cm9sLWJ1dHRvbnMtY29udGFpbmVyJztcbiAgIFxuICAgICAgICAgICAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmV3R2FtZUJ1dHRvbi5jbGFzc05hbWUgPSAnY29udHJvbC1idXR0b25zJztcbiAgICAgICAgICAgIG5ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3R2FtZU9wdERpc3BsYXkoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3Qgb3B0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBvcHRCdXR0b24uY2xhc3NOYW1lID0gJ2NvbnRyb2wtYnV0dG9ucyc7XG4gICAgICAgICAgICBvcHRCdXR0b24udGV4dENvbnRlbnQgPSAnT3B0aW9ucyc7XG5cbiAgICAgICAgICAgIG9wdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNEaXNwbGF5KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b3BBZG1pbkJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB0b3BBZG1pbkJveC5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgICAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG5ld0dhbWVCdXR0b24pO1xuICAgICAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG9wdEJ1dHRvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGdhbWVEaXNwbGF5KCkge1xuICAgICAgICAgICAgdG9wQWRtaW5Cb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFkZFRvTG9nKCdCRUdJTiBHQU1FOiBCYXR0bGVzaGlwIScpXG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdjb250cm9sLWJ1dHRvbnMtY29udGFpbmVyJztcblxuICAgICAgICAgICAgY29uc3QgY29uY2VkZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uY2VkZUJ1dHRvbi5jbGFzc05hbWUgPSAnY29udHJvbC1idXR0b25zJztcbiAgICAgICAgICAgIGNvbmNlZGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ29uY2VkZSc7XG5cbiAgICAgICAgICAgIGJvdHRvbUFkbWluQm94LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gICAgICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY29uY2VkZUJ1dHRvbik7XG4gICAgICAgICAgICBjb25jZWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VXBTaGlwRGlzcGxheShzaGlwQXJyYXkpIHtcbiAgICAgICAgICAgIC8vIG5vdCBiZWVuIGltcGxlbWVudGVkIHlldFxuICAgICAgICAgICAgdG9wQWRtaW5Cb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdTZXQgVXAgWW91ciBTaGlwcyEnO1xuICAgICAgICAgICAgdG9wQWRtaW5Cb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICBib3R0b21BZG1pbkJveC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICB0aXRsZTIudGV4dENvbnRlbnQgPSAnRHJhZyBhbmQgRHJvcCBZb3VyIFNoaXBzISc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NOYW1lID0gJ3NoaXAtY29udGFpbmVyJztcblxuICAgICAgICAgICAgc2hpcEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNoaXAuY2xhc3NOYW1lID0gJ3NoaXAnO1xuICAgICAgICAgICAgICAgIHNoaXAudGV4dENvbnRlbnQgPSBlbGVtZW50LnNoaXBUeXBlO1xuICAgICAgICAgICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV3R2FtZU9wdERpc3BsYXkoKSB7XG4gICAgICAgICAgICB0b3BBZG1pbkJveC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBHYW1lOiBTZWxlY3QgR2FtZXR5cGUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5jbGFzc05hbWUgPSAnY29udHJvbC1idXR0b25zLWNvbnRhaW5lcic7XG5cbiAgICAgICAgICAgIGNvbnN0IHZzY29tcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdnNjb21wQnV0dG9uLmNsYXNzTmFtZSA9ICdjb250cm9sLWJ1dHRvbnMnO1xuICAgICAgICAgICAgdnNjb21wQnV0dG9uLnRleHRDb250ZW50ID0gJ0h1bWFuIHZzLiBDb21wdXRlcic7XG4gICAgICAgICAgICB2c2NvbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FtZXR5cGUgPSAndnNjb21wJztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnTmV3IEdhbWUnLCB7IGRldGFpbDogZ2FtZXR5cGV9KSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBob3RzZWF0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBob3RzZWF0QnV0dG9uLmNsYXNzTmFtZSA9ICdjb250cm9sLWJ1dHRvbnMnO1xuICAgICAgICAgICAgaG90c2VhdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3QgU2VhdCc7XG4gICAgICAgICAgICBob3RzZWF0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdhbWV0eXBlID0gJ2hvdHNlYXQnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdOZXcgR2FtZScsIHsgZGV0YWlsOiBnYW1ldHlwZX0pKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NOYW1lID0gJ2NvbnRyb2wtYnV0dG9ucyc7XG4gICAgICAgICAgICBiYWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0JhY2snO1xuICAgICAgICAgICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVEaXNwbGF5KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b3BBZG1pbkJveC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB0b3BBZG1pbkJveC5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgICAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHZzY29tcEJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoaG90c2VhdEJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoYmFja0J1dHRvbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnNEaXNwbGF5KCkge1xuICAgICAgICAgICAgdG9wQWRtaW5Cb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdPcHRpb25zOiBTaGlwIFBsYWNlbWVudCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdjb250cm9sLWJ1dHRvbnMtY29udGFpbmVyJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmFuZEJ1dHRvbi5jbGFzc05hbWUgPSAnY29udHJvbC1idXR0b25zJztcbiAgICAgICAgICAgIHJhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnUmFuZG9tbHkgQXNzaWduJztcblxuICAgICAgICAgICAgY29uc3QgY3VzdG9tQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjdXN0b21CdXR0b24uY2xhc3NOYW1lID0gJ2NvbnRyb2wtYnV0dG9ucyc7XG4gICAgICAgICAgICBjdXN0b21CdXR0b24udGV4dENvbnRlbnQgPSAnQ3VzdG9tIFBsYWNlbWVudCc7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJhY2tCdXR0b24uY2xhc3NOYW1lID0gJ2NvbnRyb2wtYnV0dG9ucyc7XG4gICAgICAgICAgICBiYWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0JhY2snO1xuICAgICAgICAgICAgYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVEaXNwbGF5KClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRvcEFkbWluQm94LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIHRvcEFkbWluQm94LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG4gICAgICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQocmFuZEJ1dHRvbik7XG4gICAgICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY3VzdG9tQnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkVG9Mb2codGV4dCkge1xuICAgICAgICAgICAgY29uc3QgbG9nRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0Jyk7XG4gICAgICAgICAgICBjb25zdCBsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLWFkbWluLWJveCcpO1xuICAgICAgICAgICAgbG9nRW50cnkuY2xhc3NOYW1lID0gJ2xvZyc7XG4gICAgICAgICAgICBsb2dFbnRyeS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgbG9nQm94LmFwcGVuZENoaWxkKGxvZ0VudHJ5KTtcbiAgICAgICAgXG4gICAgICAgICAgICBsb2dCb3guc2Nyb2xsVG9wID0gbG9nQm94LnNjcm9sbEhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgdmljdG9yeURpc3BsYXkodmljdG9yLCBsb3Nlcikge1xuICAgICAgICAgICAgdGhpcy5hZGRUb0xvZyhgR0FNRSBPVkVSOiAke3ZpY3Rvci5uYW1lfSBWaWN0b3J5IWApXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJHcmlkU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkIC5ncmlkLXNwYWNlJyk7XG4gICAgICAgICAgICBjb25zdCBvcHBvbmVudEdyaWRTcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvbmVudC1ib2FyZCAuZ3JpZC1zcGFjZScpO1xuICAgICAgICAgICAgbG9zZXIucmVuZGVyR3JpZChvcHBvbmVudEdyaWRTcGFjZSwgJ3Nob3cnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpY3Rvci5yZW5kZXJHcmlkKHBsYXllckdyaWRTcGFjZSwgJ3Nob3cnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlRGlzcGxheSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==