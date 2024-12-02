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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./pages/components/footer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Products.useEffect\": ()=>{\n            // ใช้ axios เพื่อดึงข้อมูลจากไฟล์ JSON\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('/dummy-products-data.json').then({\n                \"Products.useEffect\": (response)=>{\n                    setProducts(response.data.products);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]).catch({\n                \"Products.useEffect\": (error)=>{\n                    console.error('Error fetching products:', error);\n                    console.log(error);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]);\n        }\n    }[\"Products.useEffect\"], []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading products...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n            lineNumber: 24,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-gray-100 py-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-blue-400 font-bold mb-6 text-center\",\n                            children: \"Our Products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\",\n                            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"md:flex\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"md:flex-shrink-0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    class: \"h-48 w-full object-cover md:w-48\",\n                                                    src: \"https://via.placeholder.com/300x200\",\n                                                    alt: \"Image\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"p-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"uppercase tracking-wide text-sm text-indigo-500 font-semibold\",\n                                                        children: \"Case Study\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        class: \"block mt-1 text-lg leading-tight font-medium text-black hover:underline\",\n                                                        children: product.name\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        class: \"mt-2 text-gray-500\",\n                                                        children: \"Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"mt-4\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                class: \"bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none\",\n                                                                children: \"Purchase\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 25\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                class: \"bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2\",\n                                                                children: \"Share\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 45,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                }, product.id, false, {\n                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"znVCEnCwo06bT3biGoZcJq0sjlw=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDQTtBQUNxQjtBQUN6QjtBQUNYLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMxQyxNQUFNLENBQUNNLFNBQVFDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFFdENDLGdEQUFTQTs4QkFBQztZQUNOLHVDQUF1QztZQUN2Q0MsaURBQVMsQ0FBQyw2QkFDUE8sSUFBSTtzQ0FBQyxDQUFDQztvQkFDTEwsWUFBWUssU0FBU0MsSUFBSSxDQUFDUCxRQUFRO29CQUNsQ0csV0FBVztnQkFDYjtxQ0FDQ0ssS0FBSztzQ0FBQyxDQUFDQztvQkFDTkMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7b0JBQzFDQyxRQUFRQyxHQUFHLENBQUNGO29CQUNaTixXQUFXO2dCQUNiOztRQUVKOzZCQUFHLEVBQUU7SUFDUCxJQUFJRCxTQUFTO1FBQ1QscUJBQU8sOERBQUNVO3NCQUFFOzs7Ozs7SUFDZDtJQUNGLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNwQiwrQ0FBTUE7Ozs7OzBCQUNQLDhEQUFDcUI7Z0JBQUtDLFdBQVU7MEJBQ2QsNEVBQUNGO29CQUFJRSxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQW9EOzs7Ozs7c0NBQ2xFLDhEQUFDRjs0QkFBSUUsV0FBVTtzQ0FDWmYsU0FBU2lCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDWCw4REFBQ0w7b0NBQXFCTSxPQUFNOzhDQUM1Qiw0RUFBQ047d0NBQUlNLE9BQU07OzBEQUNQLDhEQUFDTjtnREFBSU0sT0FBTTswREFDWCw0RUFBQ0M7b0RBQUlELE9BQU07b0RBQW1DRSxLQUFJO29EQUFzQ0MsS0FBSTs7Ozs7Ozs7Ozs7MERBRTVGLDhEQUFDVDtnREFBSU0sT0FBTTs7a0VBQ1gsOERBQUNOO3dEQUFJTSxPQUFNO2tFQUFnRTs7Ozs7O2tFQUMzRSw4REFBQ0k7d0RBQUVDLE1BQUs7d0RBQUlMLE9BQU07a0VBQTJFRCxRQUFRTyxJQUFJOzs7Ozs7a0VBQ3pHLDhEQUFDYjt3REFBRU8sT0FBTTtrRUFBcUI7Ozs7OztrRUFDOUIsOERBQUNOO3dEQUFJTSxPQUFNOzswRUFDUCw4REFBQ087Z0VBQU9QLE9BQU07MEVBQW9GOzs7Ozs7MEVBQ2xHLDhEQUFDTztnRUFBT1AsT0FBTTswRUFBd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FYcEdELFFBQVFTLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFvQjlCLDhEQUFDakMsK0NBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBcER3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIkU6XFxJbnRlcnZpZXctVGVzdFxcaW50ZXJ2aWV3LTNcXGludGVydmlldy0zLXJlYWN0LW5leHRcXHBhZ2VzXFxjb21wb25lbnRzXFxwcm9kdWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgICBjb25zdCBbcHJvZHVjdHMsc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIOC5g+C4iuC5iSBheGlvcyDguYDguJ7guLfguYjguK3guJTguLbguIfguILguYnguK3guKHguLnguKXguIjguLLguIHguYTguJ/guKXguYwgSlNPTlxyXG4gICAgICAgIGF4aW9zLmdldCgnL2R1bW15LXByb2R1Y3RzLWRhdGEuanNvbicpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nIHByb2R1Y3RzLi4uPC9wPjtcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBweS04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ibHVlLTQwMCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlclwiPk91ciBQcm9kdWN0czwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzPVwibWF4LXctc20gbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bWF4LXctMnhsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImgtNDggdy1mdWxsIG9iamVjdC1jb3ZlciBtZDp3LTQ4XCIgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgyMDBcIiBhbHQ9XCJJbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtc20gdGV4dC1pbmRpZ28tNTAwIGZvbnQtc2VtaWJvbGRcIj5DYXNlIFN0dWR5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJsb2NrIG10LTEgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0IGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgaG92ZXI6dW5kZXJsaW5lXCI+e3Byb2R1Y3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0yIHRleHQtZ3JheS01MDBcIj5HZXR0aW5nIGEgbmV3IGJ1c2luZXNzIG9mZiB0aGUgZ3JvdW5kIGlzIGEgbG90IG9mIGhhcmQgd29yay4gSGVyZSBhcmUgZml2ZSBpZGVhcyB5b3UgY2FuIHVzZSB0byBmaW5kIHlvdXIgZmlyc3QgY3VzdG9tZXJzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWluZGlnby02MDAgZm9jdXM6b3V0bGluZS1ub25lXCI+UHVyY2hhc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIG1sLTJcIj5TaGFyZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiRm9vdGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvZHVjdCIsImNsYXNzIiwiaW1nIiwic3JjIiwiYWx0IiwiYSIsImhyZWYiLCJuYW1lIiwiYnV0dG9uIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/products.js\n"));

/***/ })

});