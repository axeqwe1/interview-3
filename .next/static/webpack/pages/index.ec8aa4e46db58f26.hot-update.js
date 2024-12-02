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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./pages/components/footer.js\");\n/* harmony import */ var _modal_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-alert */ \"./pages/components/modal-alert.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // สถานะการแสดง Modal\n    const openModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Products.useEffect\": ()=>{\n            // ใช้ axios เพื่อดึงข้อมูลจากไฟล์ JSON\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('/dummy-products-data.json').then({\n                \"Products.useEffect\": (response)=>{\n                    setProducts(response.data.products);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]).catch({\n                \"Products.useEffect\": (error)=>{\n                    console.error('Error fetching products:', error);\n                    console.log(error);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]);\n        }\n    }[\"Products.useEffect\"], []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading products...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n            lineNumber: 34,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-gray-100 py-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-blue-400 font-bold mb-6 text-center\",\n                            children: \"Our Products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\",\n                            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-72\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"md:flex md:flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"md:flex-shrink-0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    class: \"h-48 w-full object-cover\",\n                                                    src: \"https://via.placeholder.com/300x200\",\n                                                    alt: \"Image\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"p-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"uppercase tracking-wide text-lg text-indigo-500 font-semibold\",\n                                                        children: product.name\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 50,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        class: \"block mt-1 text-sm leading-tight font-medium text-black hover:underline\",\n                                                        children: [\n                                                            product.price,\n                                                            \" Bath\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        class: \"mt-2 line-clamp-2 text-gray-500\",\n                                                        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ratione tenetur nesciunt ipsum odio doloribus nulla commodi non, distinctio aliquam nobis quam veniam soluta repudiandae corporis explicabo dolore placeat pariatur!.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"mt-4\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                onClick: openModal,\n                                                                class: \"bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none\",\n                                                                children: \"Purchase\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 54,\n                                                                columnNumber: 29\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                onClick: openModal,\n                                                                class: \"bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2\",\n                                                                children: \"Add Cart\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 55,\n                                                                columnNumber: 29\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 17\n                                    }, this)\n                                }, product.id, false, {\n                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                closeModal: closeModal,\n                openModal: openModal\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 66,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"qe999+kD4ZAsRQeRvP27OEmLKA4=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0E7QUFDSTtBQUNpQjtBQUN6QjtBQUNYLFNBQVNPOztJQUNwQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMxQyxNQUFNLENBQUNNLFNBQVFDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDLFFBQVMscUJBQXFCO0lBRTdFLE1BQU1VLFlBQVk7UUFDZEQsZUFBZTtJQUNuQjtJQUVBLE1BQU1FLGFBQWE7UUFDZkYsZUFBZTtJQUNuQjtJQUVBUixnREFBU0E7OEJBQUM7WUFDTix1Q0FBdUM7WUFDdkNDLGlEQUFTLENBQUMsNkJBQ1BXLElBQUk7c0NBQUMsQ0FBQ0M7b0JBQ0xULFlBQVlTLFNBQVNDLElBQUksQ0FBQ1gsUUFBUTtvQkFDbENHLFdBQVc7Z0JBQ2I7cUNBQ0NTLEtBQUs7c0NBQUMsQ0FBQ0M7b0JBQ05DLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO29CQUMxQ0MsUUFBUUMsR0FBRyxDQUFDRjtvQkFDWlYsV0FBVztnQkFDYjs7UUFFSjs2QkFBRyxFQUFFO0lBQ1AsSUFBSUQsU0FBUztRQUNULHFCQUFPLDhEQUFDYztzQkFBRTs7Ozs7O0lBQ2Q7SUFDRixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDekIsK0NBQU1BOzs7OzswQkFDUCw4REFBQzBCO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFvRDs7Ozs7O3NDQUNsRSw4REFBQ0Y7NEJBQUlFLFdBQVU7c0NBQ1puQixTQUFTcUIsR0FBRyxDQUFDLENBQUNDLHdCQUNYLDhEQUFDTDtvQ0FBcUJNLE9BQU07OENBQzVCLDRFQUFDTjt3Q0FBSU0sT0FBTTs7MERBQ1AsOERBQUNOO2dEQUFJTSxPQUFNOzBEQUNQLDRFQUFDQztvREFBSUQsT0FBTTtvREFBMkJFLEtBQUk7b0RBQXNDQyxLQUFJOzs7Ozs7Ozs7OzswREFFeEYsOERBQUNUO2dEQUFJTSxPQUFNOztrRUFDUCw4REFBQ047d0RBQUlNLE9BQU07a0VBQWlFRCxRQUFRSyxJQUFJOzs7Ozs7a0VBQ3hGLDhEQUFDQzt3REFBRUMsTUFBSzt3REFBSU4sT0FBTTs7NERBQTJFRCxRQUFRUSxLQUFLOzREQUFDOzs7Ozs7O2tFQUMzRyw4REFBQ2Q7d0RBQUVPLE9BQU07a0VBQWtDOzs7Ozs7a0VBQzNDLDhEQUFDTjt3REFBSU0sT0FBTTs7MEVBQ1AsOERBQUNRO2dFQUFPQyxTQUFTMUI7Z0VBQVdpQixPQUFNOzBFQUFvRjs7Ozs7OzBFQUN0SCw4REFBQ1E7Z0VBQU9DLFNBQVMxQjtnRUFBV2lCLE9BQU07MEVBQXdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWDVIRCxRQUFRVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQjdCN0IsNkJBQ0UsOERBQUNWLG9EQUFLQTtnQkFBQ2EsWUFBWUE7Z0JBQVlELFdBQVdBOzs7Ozs7MEJBRzdDLDhEQUFDYiwrQ0FBTUE7Ozs7Ozs7Ozs7O0FBR2I7R0FsRXdCTTtLQUFBQSIsInNvdXJjZXMiOlsiRTpcXEludGVydmlldy1UZXN0XFxpbnRlcnZpZXctM1xcaW50ZXJ2aWV3LTMtcmVhY3QtbmV4dFxccGFnZXNcXGNvbXBvbmVudHNcXHByb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9tb2RhbC1hbGVydFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgICBjb25zdCBbcHJvZHVjdHMsc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAgLy8g4Liq4LiW4Liy4LiZ4Liw4LiB4Liy4Lij4LmB4Liq4LiU4LiHIE1vZGFsXHJcblxyXG4gICAgY29uc3Qgb3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDguYPguIrguYkgYXhpb3Mg4LmA4Lie4Li34LmI4Lit4LiU4Li24LiH4LiC4LmJ4Lit4Lih4Li54Lil4LiI4Liy4LiB4LmE4Lif4Lil4LmMIEpTT05cclxuICAgICAgICBheGlvcy5nZXQoJy9kdW1teS1wcm9kdWN0cy1kYXRhLmpzb24nKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEucHJvZHVjdHMpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgfSwgW10pO1xyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPHA+TG9hZGluZyBwcm9kdWN0cy4uLjwvcD47XHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcHktOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtYmx1ZS00MDAgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXJcIj5PdXIgUHJvZHVjdHM8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzcz1cIm1heC13LXNtIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbWQgb3ZlcmZsb3ctaGlkZGVuIG1kOm1heC13LTcyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6ZmxleCBtZDpmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJoLTQ4IHctZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDIwMFwiIGFsdD1cIkltYWdlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtbGcgdGV4dC1pbmRpZ28tNTAwIGZvbnQtc2VtaWJvbGRcIj57cHJvZHVjdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYmxvY2sgbXQtMSB0ZXh0LXNtIGxlYWRpbmctdGlnaHQgZm9udC1tZWRpdW0gdGV4dC1ibGFjayBob3Zlcjp1bmRlcmxpbmVcIj57cHJvZHVjdC5wcmljZX0gQmF0aDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC0yIGxpbmUtY2xhbXAtMiB0ZXh0LWdyYXktNTAwXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVzc2UgcmF0aW9uZSB0ZW5ldHVyIG5lc2NpdW50IGlwc3VtIG9kaW8gZG9sb3JpYnVzIG51bGxhIGNvbW1vZGkgbm9uLCBkaXN0aW5jdGlvIGFsaXF1YW0gbm9iaXMgcXVhbSB2ZW5pYW0gc29sdXRhIHJlcHVkaWFuZGFlIGNvcnBvcmlzIGV4cGxpY2FibyBkb2xvcmUgcGxhY2VhdCBwYXJpYXR1ciEuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzPVwiYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWluZGlnby02MDAgZm9jdXM6b3V0bGluZS1ub25lXCI+UHVyY2hhc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3Blbk1vZGFsfSBjbGFzcz1cImJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIG1sLTJcIj5BZGQgQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIHsvKiBNb2RhbCAqL31cclxuICAgICAge2lzTW9kYWxPcGVuICYmIChcclxuICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IG9wZW5Nb2RhbD17b3Blbk1vZGFsfS8+XHJcbiAgICAgICl9XHJcbiAgICAgIFxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJGb290ZXIiLCJNb2RhbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNNb2RhbE9wZW4iLCJzZXRJc01vZGFsT3BlbiIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvZHVjdCIsImNsYXNzIiwiaW1nIiwic3JjIiwiYWx0IiwibmFtZSIsImEiLCJocmVmIiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/products.js\n"));

/***/ })

});