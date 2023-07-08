/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _js_component_renderScreenStart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_component/renderScreenStart.js */ \"./js_component/renderScreenStart.js\");\n/* harmony import */ var _js_component_renderScreenGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_component/renderScreenGame.js */ \"./js_component/renderScreenGame.js\");\n/* harmony import */ var _js_component_renderScreenOver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_component/renderScreenOver.js */ \"./js_component/renderScreenOver.js\");\n/* harmony import */ var _js_component_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_component/functions.js */ \"./js_component/functions.js\");\nconst app = document.querySelector('.app')\r\nconst PAGE = ['Start', 'Game', 'Over'];\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction start() {\r\n      if (localStorage.getItem('unit')) {\r\n            let unit = localStorage.getItem('unit');\r\n            if(unit === PAGE[0]) {\r\n                return  (0,_js_component_renderScreenStart_js__WEBPACK_IMPORTED_MODULE_0__.renderStart)();\r\n            }\r\n            if(unit === PAGE[1]) {\r\n                return  (0,_js_component_renderScreenGame_js__WEBPACK_IMPORTED_MODULE_1__.renderGame)();\r\n            }\r\n            if(unit === PAGE[2]) {\r\n                return  (0,_js_component_renderScreenOver_js__WEBPACK_IMPORTED_MODULE_2__.renderOver)();\r\n            }\r\n      }\r\n      else {\r\n            return  (0,_js_component_functions_js__WEBPACK_IMPORTED_MODULE_3__.unitCheck)('unit','Start');\r\n        }\r\n}\r\n\r\n      start();\n\n//# sourceURL=webpack://kurs_3/./index.js?");

/***/ }),

/***/ "./js_component/functions.js":
/*!***********************************!*\
  !*** ./js_component/functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   unitCheck: () => (/* binding */ unitCheck)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\r\n\r\n\r\nfunction unitCheck(unit,param) {\r\n    localStorage.setItem(unit, param);\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.start)();\r\n}\n\n//# sourceURL=webpack://kurs_3/./js_component/functions.js?");

/***/ }),

/***/ "./js_component/renderScreenGame.js":
/*!******************************************!*\
  !*** ./js_component/renderScreenGame.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderGame: () => (/* binding */ renderGame)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\r\n\r\nfunction renderGame() {\r\n    const textStart = 'Вы в игре';\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.app.innerHTML = `\r\n                      <div class=\"screen\">  \r\n                            <p class=\"title\">${textStart}</p>\r\n                            \r\n                      </div>\r\n                `;\r\n \r\n}\n\n//# sourceURL=webpack://kurs_3/./js_component/renderScreenGame.js?");

/***/ }),

/***/ "./js_component/renderScreenOver.js":
/*!******************************************!*\
  !*** ./js_component/renderScreenOver.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderOver: () => (/* binding */ renderOver)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\r\n\r\nfunction renderOver() {\r\n    const textStart = 'Результат';\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.app.innerHTML = `\r\n                      <div class=\"screen\">  \r\n                            <p class=\"title\">${textStart}</p>\r\n                      </div>\r\n                `;\r\n\r\n}\n\n//# sourceURL=webpack://kurs_3/./js_component/renderScreenOver.js?");

/***/ }),

/***/ "./js_component/renderScreenStart.js":
/*!*******************************************!*\
  !*** ./js_component/renderScreenStart.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickAp: () => (/* binding */ clickAp),\n/* harmony export */   renderStart: () => (/* binding */ renderStart)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./js_component/functions.js\");\n\r\n\r\nfunction renderStart() {\r\n      const textStart = 'Выбери сложность';\r\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.app.innerHTML = `\r\n                      <div class=\"screen\">  \r\n                            <p class=\"title\">${textStart}</p>\r\n                            <div class=\"qual\">\r\n                            <div class=\"but one\">1</div>\r\n                            <div class=\"but two\">2</div>\r\n                            <div class=\"but free\">3</div>\r\n                            </div>\r\n                            <button class=\"start\" disabled=\"true\">Старт</button>\r\n                      </div>\r\n                `;\r\n      clickAp();\r\n}\r\n\r\nconst clickAp = () => {\r\n      let qual = '';\r\n      const buttons = document.querySelectorAll('.but');\r\n      for (let i = 0; i < buttons.length; i++) {\r\n            buttons[i].addEventListener('click', (e) => {\r\n                  for (let i = 0; i < buttons.length; i++) {\r\n                        buttons[i].classList.remove('active');\r\n                  }\r\n                  qual = e.target.textContent;\r\n                  e.target.classList.add('active');\r\n                  document.querySelector('.start').removeAttribute(\"disabled\");\r\n            });\r\n      }\r\n            document.querySelector('.start').addEventListener('click', (e) => {\r\n                  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.unitCheck)('qual', qual);\r\n                  (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.unitCheck)('unit', 'Game');\r\n            });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://kurs_3/./js_component/renderScreenStart.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;