/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");
/* harmony import */ var _js_component_renderScreenStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_component/renderScreenStart */ "./js_component/renderScreenStart.ts");
/* harmony import */ var _js_component_renderScreenGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_component/renderScreenGame */ "./js_component/renderScreenGame.ts");
/* harmony import */ var _js_component_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_component/functions */ "./js_component/functions.ts");

var app = document.querySelector(".app");
var PAGE = ["Start", "Game", "Over"];



//let unit:string|null = localStorage.getItem('unit');
function start() {
    if (localStorage.getItem("unit")) {
        var unit = localStorage.getItem("unit");
        if (unit === PAGE[0]) {
            return (0,_js_component_renderScreenStart__WEBPACK_IMPORTED_MODULE_1__.renderStart)();
        }
        if (unit === PAGE[1]) {
            return (0,_js_component_renderScreenGame__WEBPACK_IMPORTED_MODULE_2__.renderGame)();
        }
    }
    else {
        return (0,_js_component_functions__WEBPACK_IMPORTED_MODULE_3__.unitCheck)("unit", "Start");
    }
}
start();
//module.exports = localStorage.getItem('unit');


/***/ }),

/***/ "./js_component/functions.ts":
/*!***********************************!*\
  !*** ./js_component/functions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearTime: () => (/* binding */ clearTime),
/* harmony export */   minutes: () => (/* binding */ minutes),
/* harmony export */   seconds: () => (/* binding */ seconds),
/* harmony export */   startTime: () => (/* binding */ startTime),
/* harmony export */   unitCheck: () => (/* binding */ unitCheck),
/* harmony export */   updateSeconds: () => (/* binding */ updateSeconds)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./index.ts");

var seconds = 0;
var minutes = 0;
var time = "";
var timer;
function unitCheck(unit, param) {
    localStorage.setItem(unit, param);
    return (0,_index__WEBPACK_IMPORTED_MODULE_0__.start)();
}
var clearTime = function () {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    time = "stop";
    return seconds || minutes;
};
var startTime = function () {
    timer = setInterval(updateSeconds, 1000);
    seconds = 0;
    minutes = 0;
    time = "start";
};
function updateSeconds() {
    if (time === "stop") {
        seconds = 0;
        minutes = 0;
    }
    if (document.querySelector(".time")) {
        var spendTime = document.querySelector(".time");
        seconds += 1;
        if (seconds > 59) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes > 59) {
            minutes = 0;
            //hours += 1
        }
        if (spendTime.textContent) {
            spendTime.textContent = "".concat(minutes
                .toString()
                .padStart(2, "0"), ".").concat(seconds.toString().padStart(2, "0"));
        }
    }
}


/***/ }),

/***/ "./js_component/renderScreenGame.ts":
/*!******************************************!*\
  !*** ./js_component/renderScreenGame.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genCardDiv: () => (/* binding */ genCardDiv),
/* harmony export */   renderGame: () => (/* binding */ renderGame)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./js_component/functions.ts");
/* harmony import */ var _renderScreenOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderScreenOver */ "./js_component/renderScreenOver.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var pause = 5 * 1000;
var CARDDECK = [6, 7, 8, 9, 10, "j", "q", "k", "a"];
var mast = ["pic", "kres", "bub", "her"];
function renderGame() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.clearTime)();
    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.startTime)();
    _index__WEBPACK_IMPORTED_MODULE_0__.app.innerHTML = "\n             <div class=\"header\">\n                  <div class=\"timer\"><div class=\"timer_header\"><span class=\"min\">min</span><span class=\"sek\">sek</span></div><span class=\"time\">00.00</span></div>\n                  <button class=\"restart\"> \u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n            </div>\n            <div class=\"card_table\">\n            </div>\n                ";
    var cards = document.querySelector(".card_table");
    if (cards) {
        var array = getListContent();
        cards.append(genCardDiv(array.sort(function () { return Math.random() - 0.5; })));
        //	cards.append(getListContent());
    }
    if (cards) {
        cards.style.pointerEvents = "none";
    }
    var elements = Array.from(document.querySelectorAll(".card_card"));
    var cardInDom = Array.from(document.querySelectorAll(".card"));
    // вызываем функцию по клику на .card
    var temp;
    var _loop_1 = function (card) {
        card.onclick = function () {
            if (card.classList.contains("open"))
                return;
            var cardValue = card.getAttribute("data-number");
            card.children[0].classList.remove("close");
            if (temp && temp != card) {
                if (temp.getAttribute("data-number") === cardValue) {
                    temp.classList.remove("close");
                    card.classList.remove("close");
                    var mov = JSON.parse(localStorage.getItem("moves"));
                    mov++;
                    localStorage.setItem("moves", JSON.stringify(mov));
                    if (document.querySelectorAll(".close").length <= 0) {
                        (0,_renderScreenOver__WEBPACK_IMPORTED_MODULE_2__.renderOver)("Вы выиграли", "victory", _functions__WEBPACK_IMPORTED_MODULE_1__.minutes, _functions__WEBPACK_IMPORTED_MODULE_1__.seconds);
                        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.clearTime)();
                    }
                    temp = "";
                }
                else {
                    (0,_renderScreenOver__WEBPACK_IMPORTED_MODULE_2__.renderOver)("Вы проиграли", "over", _functions__WEBPACK_IMPORTED_MODULE_1__.minutes, _functions__WEBPACK_IMPORTED_MODULE_1__.seconds);
                    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.clearTime)();
                    return (cards.style.pointerEvents =
                        "none");
                }
            }
            else
                temp = card;
        };
    };
    for (var _i = 0, cardInDom_1 = cardInDom; _i < cardInDom_1.length; _i++) {
        var card = cardInDom_1[_i];
        _loop_1(card);
    }
    var _loop_2 = function (elem) {
        setTimeout(function () {
            elem.classList.add("close");
            cards.style.pointerEvents = "unset";
        }, pause);
    };
    for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
        var elem = elements_1[_a];
        _loop_2(elem);
    }
    var restart = document.querySelector(".restart");
    restart.addEventListener("click", function (e) {
        // clearTime();
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.unitCheck)("unit", "Game");
        renderGame();
    });
}
var genCardDiv = function (newArr) {
    var fragment = new DocumentFragment();
    newArr.sort(function () { return Math.random() - 0.5; });
    for (var i = 0; i < newArr.length; i++) {
        var carda = document.createElement("div");
        var fon = document.createElement("img");
        carda.classList.add("card");
        carda.dataset.number = newArr[i];
        fon.setAttribute("src", newArr[i] + ".svg");
        fon.classList.add("card_card");
        carda.appendChild(fon);
        fragment.append(carda);
    }
    return fragment;
};
var getListContent = function () {
    var newArr = new Array();
    var qual = localStorage.getItem("qual");
    var result = 6 * Number(qual);
    for (var i = 0; i < result / 2; i++) {
        var y = Math.floor(Math.random() * CARDDECK.length);
        var z = Math.floor(Math.random() * mast.length);
        newArr.push(CARDDECK[y] + mast[z], CARDDECK[y] + mast[z]);
        //	newArr.push(CARDDECK[y] + mast[z])
    }
    //	newArr.sort(() => Math.random() - 0.5);
    //return genCardDiv(newArr);
    return newArr;
};
module.exports = getListContent;


/***/ }),

/***/ "./js_component/renderScreenOver.ts":
/*!******************************************!*\
  !*** ./js_component/renderScreenOver.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderOver: () => (/* binding */ renderOver)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./js_component/functions.ts");


//import { timer } from './renderScreenGame'
function gameOver(text, imgs, minutes, seconds) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.clearTime)();
    var fragment = new DocumentFragment();
    var screen = document.createElement("div");
    screen.classList.add("screen");
    var p = document.createElement("p");
    p.classList.add("title_" + imgs);
    p.textContent = text;
    var img = document.createElement("p");
    img.classList.add(imgs);
    //img.setAttribute("src", imgs + ".svg");
    var titleTime = document.createElement("p");
    titleTime.textContent = "Затраченное время:";
    titleTime.classList.add("title_time");
    var time = document.createElement("span");
    time.textContent = "".concat(minutes.toString().padStart(2, "0"), ".").concat(seconds
        .toString()
        .padStart(2, "0"));
    time.classList.add("time_over");
    var button = document.createElement("button");
    button.textContent = "Играть снова";
    button.classList.add("start");
    screen.appendChild(img);
    screen.appendChild(p);
    screen.appendChild(titleTime);
    screen.appendChild(time);
    screen.appendChild(button);
    fragment.append(screen);
    return fragment;
}
function renderOver(text, imgs, minutes, seconds) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.clearTime)();
    var div = document.createElement("div");
    div.classList.add("layout");
    _index__WEBPACK_IMPORTED_MODULE_0__.app === null || _index__WEBPACK_IMPORTED_MODULE_0__.app === void 0 ? void 0 : _index__WEBPACK_IMPORTED_MODULE_0__.app.append(div);
    _index__WEBPACK_IMPORTED_MODULE_0__.app === null || _index__WEBPACK_IMPORTED_MODULE_0__.app === void 0 ? void 0 : _index__WEBPACK_IMPORTED_MODULE_0__.app.append(gameOver(text, imgs, minutes, seconds));
    var start = document.querySelector(".start");
    start === null || start === void 0 ? void 0 : start.addEventListener("click", function (e) {
        localStorage.clear();
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.unitCheck)("unit", "Start");
    });
}


/***/ }),

/***/ "./js_component/renderScreenStart.ts":
/*!*******************************************!*\
  !*** ./js_component/renderScreenStart.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickAp: () => (/* binding */ clickAp),
/* harmony export */   renderStart: () => (/* binding */ renderStart)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./js_component/functions.ts");


function renderStart() {
    var textStart = "Выбери сложность";
    if (_index__WEBPACK_IMPORTED_MODULE_0__.app) {
        _index__WEBPACK_IMPORTED_MODULE_0__.app.innerHTML = "\n                      <div class=\"screen\">  \n                            <p class=\"title\">".concat(textStart, "</p>\n                            <div class=\"qual\">\n                                <input type=\"radio\" id=\"radio1\" name=\"radios\" value=\"1\">\n                                <label class=\"but one\" for=\"radio1\">1</label>\n                                <input type=\"radio\" id=\"radio2\" name=\"radios\" value=\"2\">\n                                <label class=\"but two\" for=\"radio2\">2</label>                  \n                                <input type=\"radio\" id=\"radio3\" name=\"radios\" value=\"3\">\n                                <label class=\"but free\" for=\"radio3\">3</label>\n                            </div>\n                            <button class=\"start\" disabled=\"true\">\u0421\u0442\u0430\u0440\u0442</button>\n                      </div>\n                ");
    }
    clickAp();
}
var clickAp = function () {
    var qual = "0";
    var buttons = document.querySelectorAll(".but");
    var start = document.querySelector(".start");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (e) {
            var target = e.target;
            for (var i_1 = 0; i_1 < buttons.length; i_1++) {
                buttons[i_1].classList.remove("active");
            }
            qual = target.textContent;
            target.classList.add("active");
            start === null || start === void 0 ? void 0 : start.removeAttribute("disabled");
        });
    }
    start === null || start === void 0 ? void 0 : start.addEventListener("click", function (e) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.unitCheck)("qual", qual);
        (0,_functions__WEBPACK_IMPORTED_MODULE_1__.unitCheck)("unit", "Game");
    });
};


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map