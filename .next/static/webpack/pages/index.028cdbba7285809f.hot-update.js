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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./pages/components/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./pages/components/footer.js\");\n/* harmony import */ var _modal_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-alert */ \"./pages/components/modal-alert.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // สถานะการแสดง Modal\n    const [productName, setProductsName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');\n    const openModalAndSaveNameProduct = ()=>{\n        setIsModalOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Products.useEffect\": ()=>{\n            // ใช้ axios เพื่อดึงข้อมูลจากไฟล์ JSON\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('/dummy-products-data.json').then({\n                \"Products.useEffect\": (response)=>{\n                    setProducts(response.data.products);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]).catch({\n                \"Products.useEffect\": (error)=>{\n                    console.error('Error fetching products:', error);\n                    console.log(error);\n                    setLoading(false);\n                }\n            }[\"Products.useEffect\"]);\n        }\n    }[\"Products.useEffect\"], []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading products...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n            lineNumber: 34,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-gray-100 py-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl text-blue-400 font-bold mb-6 text-center\",\n                            children: \"Our Products\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\",\n                            children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-72\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"md:flex md:flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"md:flex-shrink-0\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    class: \"h-48 w-full object-cover\",\n                                                    src: \"https://via.placeholder.com/300x200\",\n                                                    alt: \"Image\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                class: \"p-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"uppercase tracking-wide text-lg text-indigo-500 font-semibold\",\n                                                        children: product.name\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        class: \"block mt-1 text-sm leading-tight font-medium text-black hover:underline\",\n                                                        children: [\n                                                            product.price,\n                                                            \" Bath\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        class: \"mt-2 line-clamp-2 text-gray-500\",\n                                                        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ratione tenetur nesciunt ipsum odio doloribus nulla commodi non, distinctio aliquam nobis quam veniam soluta repudiandae corporis explicabo dolore placeat pariatur!.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 25\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        class: \"mt-4\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                onClick: openModalAndSaveNameProduct(),\n                                                                class: \"bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none\",\n                                                                children: \"Purchase\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 55,\n                                                                columnNumber: 29\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                onClick: openModalAndSaveNameProduct(),\n                                                                class: \"bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2\",\n                                                                children: \"Add Cart\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                                lineNumber: 56,\n                                                                columnNumber: 29\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, this)\n                                }, product.id, false, {\n                                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_alert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                closeModal: closeModal\n            }, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 67,\n                columnNumber: 10\n            }, this) // Components Modal Alert \n            ,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Interview-Test\\\\interview-3\\\\interview-3-react-next\\\\pages\\\\components\\\\products.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"lM2DFdyvb4cDtDX/jlFU1EGqfwQ=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0E7QUFDSTtBQUNpQjtBQUN6QjtBQUNYLFNBQVNPOztJQUNwQixNQUFNLENBQUNDLFVBQVNDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMxQyxNQUFNLENBQUNNLFNBQVFDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDLFFBQVMscUJBQXFCO0lBQzdFLE1BQU0sQ0FBQ1UsYUFBWUMsZ0JBQWdCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1ZLDhCQUE4QjtRQUNoQ0gsZUFBZTtJQUNuQjtJQUVBLE1BQU1JLGFBQWE7UUFDZkosZUFBZTtJQUNuQjtJQUVBUixnREFBU0E7OEJBQUM7WUFDTix1Q0FBdUM7WUFDdkNDLGlEQUFTLENBQUMsNkJBQ1BhLElBQUk7c0NBQUMsQ0FBQ0M7b0JBQ0xYLFlBQVlXLFNBQVNDLElBQUksQ0FBQ2IsUUFBUTtvQkFDbENHLFdBQVc7Z0JBQ2I7cUNBQ0NXLEtBQUs7c0NBQUMsQ0FBQ0M7b0JBQ05DLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO29CQUMxQ0MsUUFBUUMsR0FBRyxDQUFDRjtvQkFDWlosV0FBVztnQkFDYjs7UUFFSjs2QkFBRyxFQUFFO0lBQ1AsSUFBSUQsU0FBUztRQUNULHFCQUFPLDhEQUFDZ0I7c0JBQUU7Ozs7OztJQUNkO0lBQ0YscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQzNCLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUM0QjtnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ0Y7b0JBQUlFLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBb0Q7Ozs7OztzQ0FDbEUsOERBQUNGOzRCQUFJRSxXQUFVO3NDQUVackIsU0FBU3VCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDWCw4REFBQ0w7b0NBQXFCTSxPQUFNOzhDQUM1Qiw0RUFBQ047d0NBQUlNLE9BQU07OzBEQUNQLDhEQUFDTjtnREFBSU0sT0FBTTswREFDUCw0RUFBQ0M7b0RBQUlELE9BQU07b0RBQTJCRSxLQUFJO29EQUFzQ0MsS0FBSTs7Ozs7Ozs7Ozs7MERBRXhGLDhEQUFDVDtnREFBSU0sT0FBTTs7a0VBQ1AsOERBQUNOO3dEQUFJTSxPQUFNO2tFQUFpRUQsUUFBUUssSUFBSTs7Ozs7O2tFQUN4Riw4REFBQ0M7d0RBQUVDLE1BQUs7d0RBQUlOLE9BQU07OzREQUEyRUQsUUFBUVEsS0FBSzs0REFBQzs7Ozs7OztrRUFDM0csOERBQUNkO3dEQUFFTyxPQUFNO2tFQUFrQzs7Ozs7O2tFQUMzQyw4REFBQ047d0RBQUlNLE9BQU07OzBFQUNQLDhEQUFDUTtnRUFBT0MsU0FBUzFCO2dFQUErQmlCLE9BQU07MEVBQW9GOzs7Ozs7MEVBQzFJLDhEQUFDUTtnRUFBT0MsU0FBUzFCO2dFQUErQmlCLE9BQU07MEVBQXdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWGhKRCxRQUFRVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQjdCL0IsNkJBQ0UsOERBQUNWLG9EQUFLQTtnQkFBQ2UsWUFBWUE7Ozs7O3FCQUFjLDBCQUEwQjs7MEJBRTlELDhEQUFDaEIsK0NBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBbEV3Qk07S0FBQUEiLCJzb3VyY2VzIjpbIkU6XFxJbnRlcnZpZXctVGVzdFxcaW50ZXJ2aWV3LTNcXGludGVydmlldy0zLXJlYWN0LW5leHRcXHBhZ2VzXFxjb21wb25lbnRzXFxwcm9kdWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vbW9kYWwtYWxlcnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzKCkge1xyXG4gICAgY29uc3QgW3Byb2R1Y3RzLHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsgIC8vIOC4quC4luC4suC4meC4sOC4geC4suC4o+C5geC4quC4lOC4hyBNb2RhbFxyXG4gICAgY29uc3QgW3Byb2R1Y3ROYW1lLHNldFByb2R1Y3RzTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IG9wZW5Nb2RhbEFuZFNhdmVOYW1lUHJvZHVjdCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g4LmD4LiK4LmJIGF4aW9zIOC5gOC4nuC4t+C5iOC4reC4lOC4tuC4h+C4guC5ieC4reC4oeC4ueC4peC4iOC4suC4geC5hOC4n+C4peC5jCBKU09OXHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvZHVtbXktcHJvZHVjdHMtZGF0YS5qc29uJykgXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBpZiAobG9hZGluZykge1xyXG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nIHByb2R1Y3RzLi4uPC9wPjtcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBweS04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1ibHVlLTQwMCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlclwiPk91ciBQcm9kdWN0czwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cclxuICAgICAgICAgICAgey8qIOC5g+C4iuC5ieC5geC4quC4lOC4h+C4o+C4suC4ouC4geC4suC4o+C4quC4tOC4meC4hOC5ieC4suC5guC4lOC4ouC4geC4s+C4q+C4meC4lCBrZXkg4LmA4Lib4LmH4LiZIHByb2R1Y3RJZCAqL31cclxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzPVwibWF4LXctc20gbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gbWQ6bWF4LXctNzJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4IG1kOmZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1kOmZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImgtNDggdy1mdWxsIG9iamVjdC1jb3ZlclwiIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8zMDB4MjAwXCIgYWx0PVwiSW1hZ2VcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1sZyB0ZXh0LWluZGlnby01MDAgZm9udC1zZW1pYm9sZFwiPntwcm9kdWN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJibG9jayBtdC0xIHRleHQtc20gbGVhZGluZy10aWdodCBmb250LW1lZGl1bSB0ZXh0LWJsYWNrIGhvdmVyOnVuZGVybGluZVwiPntwcm9kdWN0LnByaWNlfSBCYXRoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm10LTIgbGluZS1jbGFtcC0yIHRleHQtZ3JheS01MDBcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXNzZSByYXRpb25lIHRlbmV0dXIgbmVzY2l1bnQgaXBzdW0gb2RpbyBkb2xvcmlidXMgbnVsbGEgY29tbW9kaSBub24sIGRpc3RpbmN0aW8gYWxpcXVhbSBub2JpcyBxdWFtIHZlbmlhbSBzb2x1dGEgcmVwdWRpYW5kYWUgY29ycG9yaXMgZXhwbGljYWJvIGRvbG9yZSBwbGFjZWF0IHBhcmlhdHVyIS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbEFuZFNhdmVOYW1lUHJvZHVjdCgpfSBjbGFzcz1cImJnLWluZGlnby01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZCBob3ZlcjpiZy1pbmRpZ28tNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiPlB1cmNoYXNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbEFuZFNhdmVOYW1lUHJvZHVjdCgpfSBjbGFzcz1cImJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctZ3JheS00MDAgZm9jdXM6b3V0bGluZS1ub25lIG1sLTJcIj5BZGQgQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIHsvKiBNb2RhbCAqL31cclxuICAgICAge2lzTW9kYWxPcGVuICYmIChcclxuICAgICAgICAgPE1vZGFsIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9Lz4gLy8gQ29tcG9uZW50cyBNb2RhbCBBbGVydCBcclxuICAgICAgKX1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiRm9vdGVyIiwiTW9kYWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3RzTmFtZSIsIm9wZW5Nb2RhbEFuZFNhdmVOYW1lUHJvZHVjdCIsImNsb3NlTW9kYWwiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwicHJvZHVjdCIsImNsYXNzIiwiaW1nIiwic3JjIiwiYWx0IiwibmFtZSIsImEiLCJocmVmIiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/products.js\n"));

/***/ })

});