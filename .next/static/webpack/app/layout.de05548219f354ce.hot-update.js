"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/layout.js":
/*!***************************!*\
  !*** ./src/app/layout.js ***!
  \***************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var _components_footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/index */ \"(app-pages-browser)/./src/components/footer/index.jsx\");\n/* harmony import */ var _components_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/index */ \"(app-pages-browser)/./src/components/header/index.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var _assets_style_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/style/index.css */ \"(app-pages-browser)/./src/assets/style/index.css\");\n/* harmony import */ var _components_floatedLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/floatedLinks */ \"(app-pages-browser)/./src/components/floatedLinks/index.jsx\");\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/LanguageContext */ \"(app-pages-browser)/./src/context/LanguageContext.js\");\n/* harmony import */ var _components_mobileBottomMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/mobileBottomMenu */ \"(app-pages-browser)/./src/components/mobileBottomMenu/index.jsx\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader */ \"(app-pages-browser)/./src/components/loader/index.jsx\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api */ \"(app-pages-browser)/./src/lib/api.ts\");\n/* harmony import */ var _context_SelectedCategoryContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/SelectedCategoryContext */ \"(app-pages-browser)/./src/context/SelectedCategoryContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"RootLayout.useEffect\": ()=>{\n            const fetchData = {\n                \"RootLayout.useEffect.fetchData\": async ()=>{\n                    try {\n                        const [categoryResponse, settingsResponse] = await Promise.all([\n                            (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__.getCategories)(),\n                            (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__.getSettings)()\n                        ]);\n                        setCategories(categoryResponse.data || []);\n                        // Do something with settingsResponse, if needed\n                        console.log(\"Settings:\", settingsResponse);\n                    } catch (error) {\n                        console.error(\"Failed to fetch categories or settings\", error);\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"RootLayout.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"RootLayout.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__.LanguageProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SelectedCategoryContext__WEBPACK_IMPORTED_MODULE_11__.SelectedCategoryProvider, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_4__, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap\",\n                                rel: \"stylesheet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_floatedLinks__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mobileBottomMenu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this),\n                        loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 56,\n                            columnNumber: 24\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: children\n                        }, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"Ku/3fYTZ4p+HhLbl/Ex0fsiHh1U=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNIO0FBQ0E7QUFDbkI7QUFDTTtBQUNtQjtBQUNRO0FBQ0E7QUFDcEI7QUFDZTtBQUNxQjtBQUUvRCxTQUFTYSxXQUFXLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDakMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDZ0IsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQTtnQ0FBQztZQUNSLE1BQU1pQjtrREFBWTtvQkFDaEIsSUFBSTt3QkFDRixNQUFNLENBQUNDLGtCQUFrQkMsaUJBQWlCLEdBQUcsTUFBTUMsUUFBUUMsR0FBRyxDQUFDOzRCQUM3RGIsd0RBQWFBOzRCQUNiQyxzREFBV0E7eUJBQ1o7d0JBRURLLGNBQWNJLGlCQUFpQkksSUFBSSxJQUFJLEVBQUU7d0JBRXpDLGdEQUFnRDt3QkFDaERDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhTDtvQkFFM0IsRUFBRSxPQUFPTSxPQUFPO3dCQUNkRixRQUFRRSxLQUFLLENBQUMsMENBQTBDQTtvQkFDMUQsU0FBVTt3QkFDUlQsV0FBVztvQkFDYjtnQkFDRjs7WUFFQUM7UUFDRjsrQkFBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNTO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNDO3NCQUNDLDRFQUFDdkIsc0VBQWdCQTswQkFDZiw0RUFBQ0ssdUZBQXdCQTs7c0NBQ3ZCLDhEQUFDUCxzQ0FBSUE7c0NBQ0gsNEVBQUMwQjtnQ0FDQ0MsTUFBSztnQ0FDTEMsS0FBSTs7Ozs7Ozs7Ozs7c0NBR1IsOERBQUM3QixnRUFBTUE7Ozs7O3NDQUNQLDhEQUFDRSxnRUFBWUE7Ozs7O3NDQUNiLDhEQUFDRSxvRUFBZ0JBOzs7Ozt3QkFDaEJTLHdCQUFVLDhEQUFDUiwwREFBTUE7Ozs7aURBQU07c0NBQUdLOztzQ0FDM0IsOERBQUNYLGdFQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkI7R0FqRHdCVTtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL21hY2Jvb2twcm8yMDE5L0Rlc2t0b3AvbW9oZWVuLXdvcmsvc2VsbGVyc3RvcmUvc3JjL2FwcC9sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXIvaW5kZXhcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXCIuLi9hc3NldHMvc3R5bGUvaW5kZXguY3NzXCI7XG5pbXBvcnQgRmxvYXRlZExpbmtzIGZyb20gXCIuLi9jb21wb25lbnRzL2Zsb2F0ZWRMaW5rc1wiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0xhbmd1YWdlQ29udGV4dFwiO1xuaW1wb3J0IE1vYmlsZUJvdHRvbU1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9iaWxlQm90dG9tTWVudVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXJcIjtcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgICwgZ2V0U2V0dGluZ3N9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyBTZWxlY3RlZENhdGVnb3J5UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9TZWxlY3RlZENhdGVnb3J5Q29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW2NhdGVnb3J5UmVzcG9uc2UsIHNldHRpbmdzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIGdldENhdGVnb3JpZXMoKSxcbiAgICAgICAgICBnZXRTZXR0aW5ncygpXG4gICAgICAgIF0pO1xuICBcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeVJlc3BvbnNlLmRhdGEgfHwgW10pO1xuICAgICAgICBcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggc2V0dGluZ3NSZXNwb25zZSwgaWYgbmVlZGVkXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZ3M6XCIsIHNldHRpbmdzUmVzcG9uc2UpO1xuICBcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggY2F0ZWdvcmllcyBvciBzZXR0aW5nc1wiLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuICBcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxMYW5ndWFnZVByb3ZpZGVyPlxuICAgICAgICAgIDxTZWxlY3RlZENhdGVnb3J5UHJvdmlkZXI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxGbG9hdGVkTGlua3MgLz5cbiAgICAgICAgICAgIDxNb2JpbGVCb3R0b21NZW51IC8+XG4gICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkZXIgLz4gOiA8PntjaGlsZHJlbn08Lz59XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9TZWxlY3RlZENhdGVnb3J5UHJvdmlkZXI+XG4gICAgICAgIDwvTGFuZ3VhZ2VQcm92aWRlcj5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkhlYWRlciIsIkhlYWQiLCJGbG9hdGVkTGlua3MiLCJMYW5ndWFnZVByb3ZpZGVyIiwiTW9iaWxlQm90dG9tTWVudSIsIkxvYWRlciIsImdldENhdGVnb3JpZXMiLCJnZXRTZXR0aW5ncyIsIlNlbGVjdGVkQ2F0ZWdvcnlQcm92aWRlciIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaERhdGEiLCJjYXRlZ29yeVJlc3BvbnNlIiwic2V0dGluZ3NSZXNwb25zZSIsIlByb21pc2UiLCJhbGwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaHRtbCIsImxhbmciLCJib2R5IiwibGluayIsImhyZWYiLCJyZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/assets/style/index.css":
/*!************************************!*\
  !*** ./src/assets/style/index.css ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"2738b752ab2e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hc3NldHMvc3R5bGUvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsiL1VzZXJzL21hY2Jvb2twcm8yMDE5L0Rlc2t0b3AvbW9oZWVuLXdvcmsvc2VsbGVyc3RvcmUvc3JjL2Fzc2V0cy9zdHlsZS9pbmRleC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyNzM4Yjc1MmFiMmVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/assets/style/index.css\n"));

/***/ })

});