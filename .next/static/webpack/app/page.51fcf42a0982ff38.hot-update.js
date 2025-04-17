"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var _components_homePage_heroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homePage/heroSlider */ \"(app-pages-browser)/./src/components/homePage/heroSlider/index.jsx\");\n/* harmony import */ var _components_homePage_hotSaleListing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/homePage/hotSaleListing */ \"(app-pages-browser)/./src/components/homePage/hotSaleListing/index.jsx\");\n/* harmony import */ var _components_homePage_newProductsListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/homePage/newProductsListing */ \"(app-pages-browser)/./src/components/homePage/newProductsListing/index.jsx\");\n/* harmony import */ var _components_homePage_smallBannerAd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/homePage/smallBannerAd */ \"(app-pages-browser)/./src/components/homePage/smallBannerAd/index.jsx\");\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/LanguageContext */ \"(app-pages-browser)/./src/context/LanguageContext.js\");\n/* harmony import */ var _lib_pixelEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/pixelEvents */ \"(app-pages-browser)/./src/lib/pixelEvents.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const { language } = (0,_context_LanguageContext__WEBPACK_IMPORTED_MODULE_6__.useLanguage)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            // Track home page view\n            (0,_lib_pixelEvents__WEBPACK_IMPORTED_MODULE_7__.trackBothEvents)('ViewContent', {\n                content_name: 'Home Page',\n                content_type: 'page_view'\n            });\n        }\n    }[\"Home.useEffect\"], []);\n    const handleProductClick = (product)=>{\n        (0,_lib_pixelEvents__WEBPACK_IMPORTED_MODULE_7__.trackBothEvents)('ViewContent', {\n            content_name: product.name,\n            content_ids: [\n                product.id\n            ],\n            content_type: 'product',\n            currency: 'AED',\n            value: product.price\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-4 lg:py-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homePage_heroSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homePage_hotSaleListing__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/page.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homePage_smallBannerAd__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/page.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homePage_newProductsListing__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/page.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, language, true, {\n            fileName: \"/Users/macbookpro2019/Desktop/moheen-work/sellerstore/src/app/page.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"bQmhoTNnUKBArwEgsVQiWN7+tZA=\", false, function() {\n    return [\n        _context_LanguageContext__WEBPACK_IMPORTED_MODULE_6__.useLanguage\n    ];\n});\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN5QztBQUNrQjtBQUNRO0FBQ1E7QUFDVjtBQUNSO0FBQ0o7QUFHckQsTUFBTVEsT0FBTzs7SUFDWCxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHSCxxRUFBV0E7SUFDaENMLGdEQUFTQTswQkFBQztZQUNSLHVCQUF1QjtZQUN2Qk0saUVBQWVBLENBQUMsZUFBZTtnQkFDN0JHLGNBQWM7Z0JBQ2RDLGNBQWM7WUFDaEI7UUFDRjt5QkFBRyxFQUFFO0lBRUwsTUFBTUMscUJBQXFCLENBQUNDO1FBQzFCTixpRUFBZUEsQ0FBQyxlQUFlO1lBQzdCRyxjQUFjRyxRQUFRQyxJQUFJO1lBQzFCQyxhQUFhO2dCQUFDRixRQUFRRyxFQUFFO2FBQUM7WUFDekJMLGNBQWM7WUFDZE0sVUFBVTtZQUNWQyxPQUFPTCxRQUFRTSxLQUFLO1FBQ3RCO0lBQ0Y7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNuQix1RUFBVUE7Ozs7OzhCQUNYLDhEQUFDQywyRUFBY0E7Ozs7OzhCQUNmLDhEQUFDRSwwRUFBYUE7Ozs7OzhCQUNkLDhEQUFDRCwrRUFBa0JBOzs7Ozs7V0FKZUs7Ozs7OztBQVExQztHQTdCTUQ7O1FBQ2lCRixpRUFBV0E7OztLQUQ1QkU7QUErQk4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rcHJvMjAxOS9EZXNrdG9wL21vaGVlbi13b3JrL3NlbGxlcnN0b3JlL3NyYy9hcHAvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlcm9TbGlkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZVBhZ2UvaGVyb1NsaWRlclwiO1xuaW1wb3J0IEhvdFNhbGVMaXN0aW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVQYWdlL2hvdFNhbGVMaXN0aW5nXCI7XG5pbXBvcnQgTmV3UHJvZHVjdHNMaXN0aW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVQYWdlL25ld1Byb2R1Y3RzTGlzdGluZ1wiO1xuaW1wb3J0IFNtYWxsQmFubmVyQWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc21hbGxCYW5uZXJBZFwiO1xuaW1wb3J0IHsgdXNlTGFuZ3VhZ2UgfSBmcm9tICcuLi9jb250ZXh0L0xhbmd1YWdlQ29udGV4dCc7XG5pbXBvcnQgeyB0cmFja0JvdGhFdmVudHMgfSBmcm9tICcuLi9saWIvcGl4ZWxFdmVudHMnO1xuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbGFuZ3VhZ2UgfSA9IHVzZUxhbmd1YWdlKCk7IFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRyYWNrIGhvbWUgcGFnZSB2aWV3XG4gICAgdHJhY2tCb3RoRXZlbnRzKCdWaWV3Q29udGVudCcsIHtcbiAgICAgIGNvbnRlbnRfbmFtZTogJ0hvbWUgUGFnZScsXG4gICAgICBjb250ZW50X3R5cGU6ICdwYWdlX3ZpZXcnXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVQcm9kdWN0Q2xpY2sgPSAocHJvZHVjdCkgPT4ge1xuICAgIHRyYWNrQm90aEV2ZW50cygnVmlld0NvbnRlbnQnLCB7XG4gICAgICBjb250ZW50X25hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgIGNvbnRlbnRfaWRzOiBbcHJvZHVjdC5pZF0sXG4gICAgICBjb250ZW50X3R5cGU6ICdwcm9kdWN0JyxcbiAgICAgIGN1cnJlbmN5OiAnQUVEJyxcbiAgICAgIHZhbHVlOiBwcm9kdWN0LnByaWNlXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBsZzpweS0xMlwiIGtleT17bGFuZ3VhZ2V9PlxuICAgICAgICA8SGVyb1NsaWRlci8+XG4gICAgICAgIDxIb3RTYWxlTGlzdGluZy8+XG4gICAgICAgIDxTbWFsbEJhbm5lckFkIC8+XG4gICAgICAgIDxOZXdQcm9kdWN0c0xpc3RpbmcgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkhlcm9TbGlkZXIiLCJIb3RTYWxlTGlzdGluZyIsIk5ld1Byb2R1Y3RzTGlzdGluZyIsIlNtYWxsQmFubmVyQWQiLCJ1c2VMYW5ndWFnZSIsInRyYWNrQm90aEV2ZW50cyIsIkhvbWUiLCJsYW5ndWFnZSIsImNvbnRlbnRfbmFtZSIsImNvbnRlbnRfdHlwZSIsImhhbmRsZVByb2R1Y3RDbGljayIsInByb2R1Y3QiLCJuYW1lIiwiY29udGVudF9pZHMiLCJpZCIsImN1cnJlbmN5IiwidmFsdWUiLCJwcmljZSIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});