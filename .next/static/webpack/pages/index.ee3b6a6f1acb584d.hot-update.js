"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/products.js":
/*!**************************************!*\
  !*** ./pages/components/products.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./pages/components/footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Products.useEffect\": ()=>{\n            // ใช้ axios เพื่อดึงข้อมูลจากไฟล์ JSON\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('/dummy-products-data.json').then({\n                \"Products.useEffect\": (response)=>{\n                    setProducts(response.data);\n                    console.log(products);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]).catch({\n                \"Products.useEffect\": (error)=>{\n                    console.error('Error fetching products:', error);\n                    console.log(error);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]);\n        }\n    }[\"Products.useEffect\"], []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading products...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n            lineNumber: 25,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-gray-100 py-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold mb-6 text-center\",\n                            children: \"Our Products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\",\n                            children: products.map()\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"znVCEnCwo06bT3biGoZcJq0sjlw=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDQTtBQUNxQjtBQUN6QjtBQUNYLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMxQyxNQUFNLENBQUNNLFNBQVFDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdENDLGdEQUFTQTs4QkFBQztZQUNOLHVDQUF1QztZQUN2Q0MsaURBQVMsQ0FBQyw2QkFDUE8sSUFBSTtzQ0FBQyxDQUFDQztvQkFDTEwsWUFBWUssU0FBU0MsSUFBSTtvQkFDekJDLFFBQVFDLEdBQUcsQ0FBQ1Q7b0JBQ1pHLFdBQVc7Z0JBQ2I7cUNBQ0NPLEtBQUs7c0NBQUMsQ0FBQ0M7b0JBQ05ILFFBQVFHLEtBQUssQ0FBQyw0QkFBNEJBO29CQUMxQ0gsUUFBUUMsR0FBRyxDQUFDRTtvQkFDWlIsV0FBVztnQkFDYjs7UUFFSjs2QkFBRyxFQUFFO0lBQ1AsSUFBSUQsU0FBUztRQUNULHFCQUFPLDhEQUFDVTtzQkFBRTs7Ozs7O0lBQ2Q7SUFDRixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDcEIsK0NBQU1BOzs7OzswQkFDUCw4REFBQ3FCO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFzQzs7Ozs7O3NDQUNwRCw4REFBQ0Y7NEJBQUlFLFdBQVU7c0NBQ1pmLFNBQVNpQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFVbkIsOERBQUN2QiwrQ0FBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0ExQ3dCSztLQUFBQSIsInNvdXJjZXMiOlsiRTpcXEludGVydmlldy1UZXN0XFxpbnRlcnZpZXctM1xcaW50ZXJ2aWV3LTMtcmVhY3QtbmV4dFxccGFnZXNcXGNvbXBvbmVudHNcXHByb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICAgIGNvbnN0IFtwcm9kdWN0cyxzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g4LmD4LiK4LmJIGF4aW9zIOC5gOC4nuC4t+C5iOC4reC4lOC4tuC4h+C4guC5ieC4reC4oeC4ueC4peC4iOC4suC4geC5hOC4n+C4peC5jCBKU09OXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZHVtbXktcHJvZHVjdHMtZGF0YS5qc29uJylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nIHByb2R1Y3RzLi4uPC9wPjtcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBweS04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXJcIj5PdXIgUHJvZHVjdHM8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKX1cclxuICAgICAgICAgICAgey8qIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJib3JkZXIgcC00IHJvdW5kZWQtbWQgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3Byb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlByaWNlOiAke3Byb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICApKX0gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInAiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/products.js\n"));

/***/ })

});