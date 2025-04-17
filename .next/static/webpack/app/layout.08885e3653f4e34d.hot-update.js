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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var _components_footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/index */ \"(app-pages-browser)/./src/components/footer/index.jsx\");\n/* harmony import */ var _components_header_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/index */ \"(app-pages-browser)/./src/components/header/index.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var _assets_style_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/style/index.css */ \"(app-pages-browser)/./src/assets/style/index.css\");\n/* harmony import */ var _components_floatedLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/floatedLinks */ \"(app-pages-browser)/./src/components/floatedLinks/index.jsx\");\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/LanguageContext */ \"(app-pages-browser)/./src/context/LanguageContext.js\");\n/* harmony import */ var _components_mobileBottomMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/mobileBottomMenu */ \"(app-pages-browser)/./src/components/mobileBottomMenu/index.jsx\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader */ \"(app-pages-browser)/./src/components/loader/index.jsx\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api */ \"(app-pages-browser)/./src/lib/api.ts\");\n/* harmony import */ var _context_SelectedCategoryContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/SelectedCategoryContext */ \"(app-pages-browser)/./src/context/SelectedCategoryContext.js\");\n/* harmony import */ var _components_PixelTracker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PixelTracker */ \"(app-pages-browser)/./src/components/PixelTracker/index.jsx\");\n// \"use client\";\n// import React, { useState, useEffect } from \"react\";\n// import Footer from \"../components/footer/index\";\n// import Header from \"../components/header/index\";\n// import Head from \"next/head\";\n// import \"../assets/style/index.css\";\n// import FloatedLinks from \"../components/floatedLinks\";\n// import { LanguageProvider } from \"../context/LanguageContext\";\n// import MobileBottomMenu from \"../components/mobileBottomMenu\";\n// import Loader from \"../components/loader\";\n// import { getCategories  , getSettings} from \"../lib/api\";\n// import { SelectedCategoryProvider } from \"../context/SelectedCategoryContext\";\n// export default function RootLayout({ children }) {\n//   const [categories, setCategories] = useState([]);\n//   const [loading, setLoading] = useState(true);\n//   useEffect(() => {\n//     const fetchData = async () => {\n//       try {\n//         const [categoryResponse, settingsResponse] = await Promise.all([\n//           getCategories(),\n//           getSettings()\n//         ]);\n//         setCategories(categoryResponse.data || []);\n//         // Do something with settingsResponse, if needed\n//         console.log(\"Settings:\", settingsResponse);\n//       } catch (error) {\n//         console.error(\"Failed to fetch categories or settings\", error);\n//       } finally {\n//         setLoading(false);\n//       }\n//     };\n//     fetchData();\n//   }, []);\n//   return (\n//     <html lang=\"en\">\n//       <body>\n//         <LanguageProvider>\n//           <SelectedCategoryProvider>\n//             <Head>\n//               <link\n//                 href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap\"\n//                 rel=\"stylesheet\"\n//               />\n//             </Head>\n//             <Header />\n//             <FloatedLinks />\n//             <MobileBottomMenu />\n//             {loading ? <Loader /> : <>{children}</>}\n//             <Footer />\n//           </SelectedCategoryProvider>\n//         </LanguageProvider>\n//       </body>\n//     </html>\n//   );\n// }\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n // Add this import\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [settings, setSettings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"RootLayout.useEffect\": ()=>{\n            const fetchData = {\n                \"RootLayout.useEffect.fetchData\": async ()=>{\n                    try {\n                        const [categoryResponse, settingsResponse] = await Promise.all([\n                            (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__.getCategories)(),\n                            (0,_lib_api__WEBPACK_IMPORTED_MODULE_10__.getSettings)()\n                        ]);\n                        setCategories(categoryResponse.data || []);\n                        setSettings(settingsResponse.data || null);\n                        // Store pixel data in localStorage\n                        if (settingsResponse.data) {\n                            localStorage.setItem('pixelData', JSON.stringify({\n                                facebook_pixel: settingsResponse.data.facebook_pixel,\n                                tiktok_pixel: settingsResponse.data.tiktok_pixel\n                            }));\n                        }\n                    } catch (error) {\n                        console.error(\"Failed to fetch categories or settings\", error);\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"RootLayout.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"RootLayout.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_7__.LanguageProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_SelectedCategoryContext__WEBPACK_IMPORTED_MODULE_11__.SelectedCategoryProvider, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_4__, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                    href: \"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap\",\n                                    rel: \"stylesheet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PixelTracker__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_floatedLinks__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mobileBottomMenu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, this),\n                        loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 130,\n                            columnNumber: 24\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: children\n                        }, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PixelTracker__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/layout.js\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"poEZ2YhCxFkMMs0kShPY++KI7oA=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Usb0VBQWdCQTs7Ozs7d0JBQ2hCVSx3QkFBVSw4REFBQ1QsMERBQU1BOzs7O2lEQUFNO3NDQUFHTTs7c0NBQzNCLDhEQUFDWixnRUFBTUE7Ozs7O3NDQUNQLDhEQUFDVSxpRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCO0dBMUR3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvMjAxOS9EZXNrdG9wL21vaGVlbi13b3JrL3NlbGxlcnN0b3JlL3NyYy9hcHAvbGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiO1xuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4XCI7XG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9pbmRleFwiO1xuLy8gaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuLy8gaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL2luZGV4LmNzc1wiO1xuLy8gaW1wb3J0IEZsb2F0ZWRMaW5rcyBmcm9tIFwiLi4vY29tcG9uZW50cy9mbG9hdGVkTGlua3NcIjtcbi8vIGltcG9ydCB7IExhbmd1YWdlUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9MYW5ndWFnZUNvbnRleHRcIjtcbi8vIGltcG9ydCBNb2JpbGVCb3R0b21NZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21vYmlsZUJvdHRvbU1lbnVcIjtcbi8vIGltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCI7XG4vLyBpbXBvcnQgeyBnZXRDYXRlZ29yaWVzICAsIGdldFNldHRpbmdzfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuLy8gaW1wb3J0IHsgU2VsZWN0ZWRDYXRlZ29yeVByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvU2VsZWN0ZWRDYXRlZ29yeUNvbnRleHRcIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH0pIHtcbi8vICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuLy8gICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbi8vICAgICAgIHRyeSB7XG4vLyAgICAgICAgIGNvbnN0IFtjYXRlZ29yeVJlc3BvbnNlLCBzZXR0aW5nc1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbi8vICAgICAgICAgICBnZXRDYXRlZ29yaWVzKCksXG4vLyAgICAgICAgICAgZ2V0U2V0dGluZ3MoKVxuLy8gICAgICAgICBdKTtcbiAgXG4vLyAgICAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlSZXNwb25zZS5kYXRhIHx8IFtdKTtcbiAgICAgICAgXG4vLyAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHNldHRpbmdzUmVzcG9uc2UsIGlmIG5lZWRlZFxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmdzOlwiLCBzZXR0aW5nc1Jlc3BvbnNlKTtcbiAgXG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGNhdGVnb3JpZXMgb3Igc2V0dGluZ3NcIiwgZXJyb3IpO1xuLy8gICAgICAgfSBmaW5hbGx5IHtcbi8vICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4vLyAgICAgICB9XG4vLyAgICAgfTtcbiAgXG4vLyAgICAgZmV0Y2hEYXRhKCk7XG4vLyAgIH0sIFtdKTtcbiAgXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbi8vICAgICAgIDxib2R5PlxuLy8gICAgICAgICA8TGFuZ3VhZ2VQcm92aWRlcj5cbi8vICAgICAgICAgICA8U2VsZWN0ZWRDYXRlZ29yeVByb3ZpZGVyPlxuLy8gICAgICAgICAgICAgPEhlYWQ+XG4vLyAgICAgICAgICAgICAgIDxsaW5rXG4vLyAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG4vLyAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4vLyAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICA8L0hlYWQ+XG4vLyAgICAgICAgICAgICA8SGVhZGVyIC8+XG4vLyAgICAgICAgICAgICA8RmxvYXRlZExpbmtzIC8+XG4vLyAgICAgICAgICAgICA8TW9iaWxlQm90dG9tTWVudSAvPlxuLy8gICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIC8+IDogPD57Y2hpbGRyZW59PC8+fVxuLy8gICAgICAgICAgICAgPEZvb3RlciAvPlxuLy8gICAgICAgICAgIDwvU2VsZWN0ZWRDYXRlZ29yeVByb3ZpZGVyPlxuLy8gICAgICAgICA8L0xhbmd1YWdlUHJvdmlkZXI+XG4vLyAgICAgICA8L2JvZHk+XG4vLyAgICAgPC9odG1sPlxuLy8gICApO1xuLy8gfVxuXG5cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9pbmRleFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL3N0eWxlL2luZGV4LmNzc1wiO1xuaW1wb3J0IEZsb2F0ZWRMaW5rcyBmcm9tIFwiLi4vY29tcG9uZW50cy9mbG9hdGVkTGlua3NcIjtcbmltcG9ydCB7IExhbmd1YWdlUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9MYW5ndWFnZUNvbnRleHRcIjtcbmltcG9ydCBNb2JpbGVCb3R0b21NZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21vYmlsZUJvdHRvbU1lbnVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyXCI7XG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzLCBnZXRTZXR0aW5ncyB9IGZyb20gXCIuLi9saWIvYXBpXCI7XG5pbXBvcnQgeyBTZWxlY3RlZENhdGVnb3J5UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9TZWxlY3RlZENhdGVnb3J5Q29udGV4dFwiO1xuaW1wb3J0IFBpeGVsVHJhY2tlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QaXhlbFRyYWNrZXJcIjsgLy8gQWRkIHRoaXMgaW1wb3J0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBbY2F0ZWdvcnlSZXNwb25zZSwgc2V0dGluZ3NSZXNwb25zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgZ2V0Q2F0ZWdvcmllcygpLFxuICAgICAgICAgIGdldFNldHRpbmdzKClcbiAgICAgICAgXSk7XG4gIFxuICAgICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5UmVzcG9uc2UuZGF0YSB8fCBbXSk7XG4gICAgICAgIHNldFNldHRpbmdzKHNldHRpbmdzUmVzcG9uc2UuZGF0YSB8fCBudWxsKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFN0b3JlIHBpeGVsIGRhdGEgaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIGlmIChzZXR0aW5nc1Jlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGl4ZWxEYXRhJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgZmFjZWJvb2tfcGl4ZWw6IHNldHRpbmdzUmVzcG9uc2UuZGF0YS5mYWNlYm9va19waXhlbCxcbiAgICAgICAgICAgIHRpa3Rva19waXhlbDogc2V0dGluZ3NSZXNwb25zZS5kYXRhLnRpa3Rva19waXhlbFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICBcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggY2F0ZWdvcmllcyBvciBzZXR0aW5nc1wiLCBlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuICBcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxMYW5ndWFnZVByb3ZpZGVyPlxuICAgICAgICAgIDxTZWxlY3RlZENhdGVnb3J5UHJvdmlkZXI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFBpeGVsVHJhY2tlciAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPEZsb2F0ZWRMaW5rcyAvPlxuICAgICAgICAgICAgPE1vYmlsZUJvdHRvbU1lbnUgLz5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRlciAvPiA6IDw+e2NoaWxkcmVufTwvPn1cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDxQaXhlbFRyYWNrZXIgLz5cbiAgICAgICAgICA8L1NlbGVjdGVkQ2F0ZWdvcnlQcm92aWRlcj5cbiAgICAgICAgPC9MYW5ndWFnZVByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIkhlYWRlciIsIkhlYWQiLCJGbG9hdGVkTGlua3MiLCJMYW5ndWFnZVByb3ZpZGVyIiwiTW9iaWxlQm90dG9tTWVudSIsIkxvYWRlciIsImdldENhdGVnb3JpZXMiLCJnZXRTZXR0aW5ncyIsIlNlbGVjdGVkQ2F0ZWdvcnlQcm92aWRlciIsIlBpeGVsVHJhY2tlciIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXR0aW5ncyIsInNldFNldHRpbmdzIiwiZmV0Y2hEYXRhIiwiY2F0ZWdvcnlSZXNwb25zZSIsInNldHRpbmdzUmVzcG9uc2UiLCJQcm9taXNlIiwiYWxsIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZmFjZWJvb2tfcGl4ZWwiLCJ0aWt0b2tfcGl4ZWwiLCJlcnJvciIsImNvbnNvbGUiLCJodG1sIiwibGFuZyIsImJvZHkiLCJsaW5rIiwiaHJlZiIsInJlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/assets/style/index.css":
/*!************************************!*\
  !*** ./src/assets/style/index.css ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"3f7f749430da\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hc3NldHMvc3R5bGUvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsiL1VzZXJzL21hY2Jvb2twcm8yMDE5L0Rlc2t0b3AvbW9oZWVuLXdvcmsvc2VsbGVyc3RvcmUvc3JjL2Fzc2V0cy9zdHlsZS9pbmRleC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzZjdmNzQ5NDMwZGFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/assets/style/index.css\n"));

/***/ })

});