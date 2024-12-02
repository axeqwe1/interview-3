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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./pages/components/footer.js\");\n/* harmony import */ var _modal_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-alert */ \"./pages/components/modal-alert.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // สถานะการแสดง Modal\n    const [productName, setProductsName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');\n    const openModalAndSaveNameProduct = (str)=>{\n        setIsModalOpen(true);\n        setProductsName(str);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Products.useEffect\": ()=>{\n            // ใช้ axios เพื่อดึงข้อมูลจากไฟล์ JSON\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('/dummy-products-data.json').then({\n                \"Products.useEffect\": (response)=>{\n                    setProducts(response.data.products);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]).catch({\n                \"Products.useEffect\": (error)=>{\n                    console.error('Error fetching products:', error);\n                    console.log(error);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]);\n        }\n    }[\"Products.useEffect\"], []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading products...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n            lineNumber: 35,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-gray-100 py-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-blue-400 font-bold mb-6 text-center\",\n                            children: \"Our Products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\",\n                            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-72\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"md:flex md:flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"md:flex-shrink-0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    class: \"h-48 w-full object-cover\",\n                                                    src: \"https://via.placeholder.com/300x200\",\n                                                    alt: \"Image\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"p-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"uppercase tracking-wide text-lg text-indigo-500 font-semibold\",\n                                                        children: product.name\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        class: \"block mt-1 text-sm leading-tight font-medium text-black hover:underline\",\n                                                        children: [\n                                                            product.price,\n                                                            \" Bath\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        class: \"mt-2 line-clamp-2 text-gray-500\",\n                                                        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ratione tenetur nesciunt ipsum odio doloribus nulla commodi non, distinctio aliquam nobis quam veniam soluta repudiandae corporis explicabo dolore placeat pariatur!.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"mt-4\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                onClick: openModalAndSaveNameProduct,\n                                                                class: \"bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none\",\n                                                                children: \"Purchase\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 56,\n                                                                columnNumber: 29\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                onClick: openModalAndSaveNameProduct,\n                                                                class: \"bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2\",\n                                                                children: \"Add Cart\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 57,\n                                                                columnNumber: 29\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this)\n                                }, product.id, false, {\n                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                closeModal: closeModal\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 68,\n                columnNumber: 10\n            }, this) // Components Modal Alert \n            ,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"lM2DFdyvb4cDtDX/jlFU1EGqfwQ=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0E7QUFDSTtBQUNpQjtBQUN6QjtBQUNYLFNBQVNPOztJQUNwQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMxQyxNQUFNLENBQUNNLFNBQVFDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDLFFBQVMscUJBQXFCO0lBQzdFLE1BQU0sQ0FBQ1UsYUFBWUMsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1ZLDhCQUE4QixDQUFDQztRQUNqQ0osZUFBZTtRQUNmRSxnQkFBZ0JFO0lBQ3BCO0lBRUEsTUFBTUMsYUFBYTtRQUNmTCxlQUFlO0lBQ25CO0lBRUFSLGdEQUFTQTs4QkFBQztZQUNOLHVDQUF1QztZQUN2Q0MsaURBQVMsQ0FBQyw2QkFDUGMsSUFBSTtzQ0FBQyxDQUFDQztvQkFDTFosWUFBWVksU0FBU0MsSUFBSSxDQUFDZCxRQUFRO29CQUNsQ0csV0FBVztnQkFDYjtxQ0FDQ1ksS0FBSztzQ0FBQyxDQUFDQztvQkFDTkMsUUFBUUQsS0FBSyxDQUFDLDRCQUE0QkE7b0JBQzFDQyxRQUFRQyxHQUFHLENBQUNGO29CQUNaYixXQUFXO2dCQUNiOztRQUVKOzZCQUFHLEVBQUU7SUFDUCxJQUFJRCxTQUFTO1FBQ1QscUJBQU8sOERBQUNpQjtzQkFBRTs7Ozs7O0lBQ2Q7SUFDRixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDNUIsK0NBQU1BOzs7OzswQkFDUCw4REFBQzZCO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDRjtvQkFBSUUsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFvRDs7Ozs7O3NDQUNsRSw4REFBQ0Y7NEJBQUlFLFdBQVU7c0NBRVp0QixTQUFTd0IsR0FBRyxDQUFDLENBQUNDLHdCQUNYLDhEQUFDTDtvQ0FBcUJNLE9BQU07OENBQzVCLDRFQUFDTjt3Q0FBSU0sT0FBTTs7MERBQ1AsOERBQUNOO2dEQUFJTSxPQUFNOzBEQUNQLDRFQUFDQztvREFBSUQsT0FBTTtvREFBMkJFLEtBQUk7b0RBQXNDQyxLQUFJOzs7Ozs7Ozs7OzswREFFeEYsOERBQUNUO2dEQUFJTSxPQUFNOztrRUFDUCw4REFBQ047d0RBQUlNLE9BQU07a0VBQWlFRCxRQUFRSyxJQUFJOzs7Ozs7a0VBQ3hGLDhEQUFDQzt3REFBRUMsTUFBSzt3REFBSU4sT0FBTTs7NERBQTJFRCxRQUFRUSxLQUFLOzREQUFDOzs7Ozs7O2tFQUMzRyw4REFBQ2Q7d0RBQUVPLE9BQU07a0VBQWtDOzs7Ozs7a0VBQzNDLDhEQUFDTjt3REFBSU0sT0FBTTs7MEVBQ1AsOERBQUNRO2dFQUFPQyxTQUFTM0I7Z0VBQTZCa0IsT0FBTTswRUFBb0Y7Ozs7OzswRUFDeEksOERBQUNRO2dFQUFPQyxTQUFTM0I7Z0VBQTZCa0IsT0FBTTswRUFBd0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FYOUlELFFBQVFXLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCN0JoQyw2QkFDRSw4REFBQ1Ysb0RBQUtBO2dCQUFDZ0IsWUFBWUE7Ozs7O3FCQUFjLDBCQUEwQjs7MEJBRTlELDhEQUFDakIsK0NBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBbkV3Qk07S0FBQUEiLCJzb3VyY2VzIjpbIkU6XFxJbnRlcnZpZXctVGVzdFxcaW50ZXJ2aWV3LTNcXGludGVydmlldy0zLXJlYWN0LW5leHRcXHBhZ2VzXFxjb21wb25lbnRzXFxwcm9kdWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vbW9kYWwtYWxlcnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzLHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgIC8vIOC4quC4luC4suC4meC4sOC4geC4suC4o+C5geC4quC4lOC4hyBNb2RhbFxyXG4gICAgY29uc3QgW3Byb2R1Y3ROYW1lLHNldFByb2R1Y3RzTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IG9wZW5Nb2RhbEFuZFNhdmVOYW1lUHJvZHVjdCA9IChzdHIpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgICAgICBzZXRQcm9kdWN0c05hbWUoc3RyKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyDguYPguIrguYkgYXhpb3Mg4LmA4Lie4Li34LmI4Lit4LiU4Li24LiH4LiC4LmJ4Lit4Lih4Li54Lil4LiI4Liy4LiB4LmE4Lif4Lil4LmMIEpTT05cclxuICAgICAgICBheGlvcy5nZXQoJy9kdW1teS1wcm9kdWN0cy1kYXRhLmpzb24nKSBcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhLnByb2R1Y3RzKTtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH0sIFtdKTtcclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPkxvYWRpbmcgcHJvZHVjdHMuLi48L3A+O1xyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHB5LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCB0ZXh0LWJsdWUtNDAwIGZvbnQtYm9sZCBtYi02IHRleHQtY2VudGVyXCI+T3VyIFByb2R1Y3RzPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxyXG4gICAgICAgICAgICB7Lyog4LmD4LiK4LmJ4LmB4Liq4LiU4LiH4Lij4Liy4Lii4LiB4Liy4Lij4Liq4Li04LiZ4LiE4LmJ4Liy4LmC4LiU4Lii4LiB4Liz4Lir4LiZ4LiUIGtleSDguYDguJvguYfguJkgcHJvZHVjdElkICovfVxyXG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3M9XCJtYXgtdy1zbSBteC1hdXRvIGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBtZDptYXgtdy03MlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kOmZsZXggbWQ6ZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWQ6ZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaC00OCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCIgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHgyMDBcIiBhbHQ9XCJJbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWxnIHRleHQtaW5kaWdvLTUwMCBmb250LXNlbWlib2xkXCI+e3Byb2R1Y3QubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJsb2NrIG10LTEgdGV4dC1zbSBsZWFkaW5nLXRpZ2h0IGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgaG92ZXI6dW5kZXJsaW5lXCI+e3Byb2R1Y3QucHJpY2V9IEJhdGg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibXQtMiBsaW5lLWNsYW1wLTIgdGV4dC1ncmF5LTUwMFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFc3NlIHJhdGlvbmUgdGVuZXR1ciBuZXNjaXVudCBpcHN1bSBvZGlvIGRvbG9yaWJ1cyBudWxsYSBjb21tb2RpIG5vbiwgZGlzdGluY3RpbyBhbGlxdWFtIG5vYmlzIHF1YW0gdmVuaWFtIHNvbHV0YSByZXB1ZGlhbmRhZSBjb3Jwb3JpcyBleHBsaWNhYm8gZG9sb3JlIHBsYWNlYXQgcGFyaWF0dXIhLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3Blbk1vZGFsQW5kU2F2ZU5hbWVQcm9kdWN0fSBjbGFzcz1cImJnLWluZGlnby01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBob3ZlcjpiZy1pbmRpZ28tNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlB1cmNoYXNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbEFuZFNhdmVOYW1lUHJvZHVjdH0gY2xhc3M9XCJiZy1ncmF5LTMwMCB0ZXh0LWdyYXktNzAwIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBtbC0yXCI+QWRkIENhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7LyogTW9kYWwgKi99XHJcbiAgICAgIHtpc01vZGFsT3BlbiAmJiAoXHJcbiAgICAgICAgIDxNb2RhbCBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfS8+IC8vIENvbXBvbmVudHMgTW9kYWwgQWxlcnQgXHJcbiAgICAgICl9XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkZvb3RlciIsIk1vZGFsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUHJvZHVjdHMiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwicHJvZHVjdE5hbWUiLCJzZXRQcm9kdWN0c05hbWUiLCJvcGVuTW9kYWxBbmRTYXZlTmFtZVByb2R1Y3QiLCJzdHIiLCJjbG9zZU1vZGFsIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicCIsImRpdiIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsInByb2R1Y3QiLCJjbGFzcyIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJhIiwiaHJlZiIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/products.js\n"));

/***/ })

});