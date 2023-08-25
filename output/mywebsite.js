/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlertService: () => (/* binding */ AlertService)\n/* harmony export */ });\n/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cekInputValid.js */ \"./src/app/utils/cekInputValid.js\");\n\r\nclass AlertService {\r\n  constructor() {\r\n    this.error = document.querySelector('#error');\r\n  }\r\n\r\n  tampilkanErrorPenjumlahan = (input, angka) => {\r\n    const hasil = input.reduce((pesan, nilai, index) => {\r\n      if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__.cekInputValid)(angka[index])) {\r\n        return pesan + '';\r\n      } else {\r\n        return pesan + `${nilai} itu bukan angka! `;\r\n      }\r\n    }, 'Silahkan masukkan angka yang benar: ');\r\n\r\n    this.error.classList.remove('d-none');\r\n    this.error.innerText = hasil;\r\n  };\r\n\r\n  sembunyikanError = () => this.error.classList.add('d-none');\r\n}\r\n\n\n//# sourceURL=webpack://belajar-webpack-code/./src/app/alert.service.js?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   run: () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/parseInput.js */ \"./src/app/utils/parseInput.js\");\n/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/cekInputValid.js */ \"./src/app/utils/cekInputValid.js\");\n\r\n\r\n\r\nconst run = (alertService, calculatorService, jokesService) => {\r\n  alertService.sembunyikanError();\r\n\r\n\r\n  calculatorService.onClick(() => {\r\n    alertService.sembunyikanError();\r\n    const input = calculatorService.getInput();\r\n    const angka = (0,_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_0__.parseInput)(...input);\r\n    if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_1__.cekInputValid)(...angka)) {\r\n      const [angka1, angka2] = angka;\r\n      calculatorService.setResult(angka1, angka2);\r\n    } else {\r\n      calculatorService.setResult('');\r\n      alertService.tampilkanErrorPenjumlahan(input, angka);\r\n    }\r\n  });\r\n\r\n  jokesService.onClick(() => {\r\n    fetch('https://candaan-api.vercel.app/api/text/random')\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        jokesService.setModal(data.data);\r\n      });\r\n  });\r\n};\n\n//# sourceURL=webpack://belajar-webpack-code/./src/app/app.js?");

/***/ }),

/***/ "./src/app/calculator.service.js":
/*!***************************************!*\
  !*** ./src/app/calculator.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CalculatorService: () => (/* binding */ CalculatorService)\n/* harmony export */ });\nclass CalculatorService {\r\n  constructor() {\r\n    this.operand1 = document.querySelector('#operand1');\r\n    this.operand2 = document.querySelector('#operand2');\r\n    this.tombolTambah = document.querySelector('#tombol-tambah');\r\n    this.hasil = document.querySelector('#hasil');\r\n  }\r\n\r\n  getInput() {\r\n    return [this.operand1.value, this.operand2.value];\r\n  }\r\n\r\n  setResult(angka1, angka2) {\r\n    this.hasil.innerText = angka1 + angka2;\r\n  }\r\n\r\n  onClick(cb) {\r\n    this.tombolTambah.addEventListener('click', cb);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://belajar-webpack-code/./src/app/calculator.service.js?");

/***/ }),

/***/ "./src/app/jokes.service.js":
/*!**********************************!*\
  !*** ./src/app/jokes.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   JokesService: () => (/* binding */ JokesService)\n/* harmony export */ });\nclass JokesService {\r\n  constructor() {\r\n    this.tombolJokes = document.querySelector('#jokes-receh');\r\n    this.modalBody = document.querySelector('.modal-body');\r\n  }\r\n\r\n  setModal(str) {\r\n    this.modalBody.innerHTML = str;\r\n  }\r\n\r\n  onClick(cb) {\r\n    this.tombolJokes.addEventListener('click', cb);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://belajar-webpack-code/./src/app/jokes.service.js?");

/***/ }),

/***/ "./src/app/utils/cekInputValid.js":
/*!****************************************!*\
  !*** ./src/app/utils/cekInputValid.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cekInputValid: () => (/* binding */ cekInputValid)\n/* harmony export */ });\nconst cekInputValid = (...angka) => {\r\n  return angka.every((num) => typeof num === 'number' && !isNaN(num));\r\n};\n\n//# sourceURL=webpack://belajar-webpack-code/./src/app/utils/cekInputValid.js?");

/***/ }),

/***/ "./src/app/utils/parseInput.js":
/*!*************************************!*\
  !*** ./src/app/utils/parseInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseInput: () => (/* binding */ parseInput)\n/* harmony export */ });\nconst parseInput = (...input) => {\r\n  return input.map((str) => parseInt(str));\r\n};\r\n\n\n//# sourceURL=webpack://belajar-webpack-code/./src/app/utils/parseInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.js */ \"./src/app/app.js\");\n/* harmony import */ var _app_alert_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/alert.service.js */ \"./src/app/alert.service.js\");\n/* harmony import */ var _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/calculator.service.js */ \"./src/app/calculator.service.js\");\n/* harmony import */ var _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/jokes.service.js */ \"./src/app/jokes.service.js\");\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\r\n\r\n\r\n\r\n\r\n\r\nconst alertService = new _app_alert_service_js__WEBPACK_IMPORTED_MODULE_1__.AlertService();\r\nconst calculatorService = new _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__.CalculatorService();\r\nconst jokesService = new _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__.JokesService();\r\n\r\n\r\n(0,_app_app_js__WEBPACK_IMPORTED_MODULE_0__.run)(alertService, calculatorService, jokesService);\r\n\n\n//# sourceURL=webpack://belajar-webpack-code/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .body {\\n|   background: lightblue;\\n| }\");\n\n//# sourceURL=webpack://belajar-webpack-code/./src/style.css?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;