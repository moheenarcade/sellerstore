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

/***/ "(app-pages-browser)/./src/lib/pixelEvents.js":
/*!********************************!*\
  !*** ./src/lib/pixelEvents.js ***!
  \********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trackBothEvents: () => (/* binding */ trackBothEvents),\n/* harmony export */   trackFacebookEvent: () => (/* binding */ trackFacebookEvent),\n/* harmony export */   trackTikTokEvent: () => (/* binding */ trackTikTokEvent)\n/* harmony export */ });\n// lib/pixelEvents.js\nconst trackFacebookEvent = function(eventName) {\n    let eventData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    if ( true && typeof window.fbq !== 'undefined') {\n        window.fbq('track', eventName, eventData);\n    }\n};\nconst trackTikTokEvent = function(eventName) {\n    let eventData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    if ( true && typeof window.ttq !== 'undefined') {\n        // For TikTok, some events have special methods\n        if (eventName === 'PageView') {\n            window.ttq.track('PageView');\n        } else {\n            window.ttq.track(eventName, eventData);\n        }\n    }\n};\nconst trackBothEvents = function(eventName) {\n    let eventData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    trackFacebookEvent(eventName, eventData);\n    trackTikTokEvent(eventName, eventData);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvcGl4ZWxFdmVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUJBQXFCO0FBQ2QsTUFBTUEscUJBQXFCLFNBQUNDO1FBQVdDLDZFQUFZLENBQUM7SUFDekQsSUFBSSxLQUE2QixJQUFJLE9BQU9DLE9BQU9DLEdBQUcsS0FBSyxhQUFhO1FBQ3RFRCxPQUFPQyxHQUFHLENBQUMsU0FBU0gsV0FBV0M7SUFDakM7QUFDRixFQUFFO0FBRUssTUFBTUcsbUJBQW1CLFNBQUNKO1FBQVdDLDZFQUFZLENBQUM7SUFDdkQsSUFBSSxLQUE2QixJQUFJLE9BQU9DLE9BQU9HLEdBQUcsS0FBSyxhQUFhO1FBQ3RFLCtDQUErQztRQUMvQyxJQUFJTCxjQUFjLFlBQVk7WUFDNUJFLE9BQU9HLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDO1FBQ25CLE9BQU87WUFDTEosT0FBT0csR0FBRyxDQUFDQyxLQUFLLENBQUNOLFdBQVdDO1FBQzlCO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTU0sa0JBQWtCLFNBQUNQO1FBQVdDLDZFQUFZLENBQUM7SUFDdERGLG1CQUFtQkMsV0FBV0M7SUFDOUJHLGlCQUFpQkosV0FBV0M7QUFDOUIsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL21hY2Jvb2twcm8yMDE5L0Rlc2t0b3AvbW9oZWVuLXdvcmsvc2VsbGVyc3RvcmUvc3JjL2xpYi9waXhlbEV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvcGl4ZWxFdmVudHMuanNcbmV4cG9ydCBjb25zdCB0cmFja0ZhY2Vib29rRXZlbnQgPSAoZXZlbnROYW1lLCBldmVudERhdGEgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5mYnEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LmZicSgndHJhY2snLCBldmVudE5hbWUsIGV2ZW50RGF0YSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0cmFja1Rpa1Rva0V2ZW50ID0gKGV2ZW50TmFtZSwgZXZlbnREYXRhID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cudHRxICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBUaWtUb2ssIHNvbWUgZXZlbnRzIGhhdmUgc3BlY2lhbCBtZXRob2RzXG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gJ1BhZ2VWaWV3Jykge1xuICAgICAgd2luZG93LnR0cS50cmFjaygnUGFnZVZpZXcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LnR0cS50cmFjayhldmVudE5hbWUsIGV2ZW50RGF0YSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdHJhY2tCb3RoRXZlbnRzID0gKGV2ZW50TmFtZSwgZXZlbnREYXRhID0ge30pID0+IHtcbiAgdHJhY2tGYWNlYm9va0V2ZW50KGV2ZW50TmFtZSwgZXZlbnREYXRhKTtcbiAgdHJhY2tUaWtUb2tFdmVudChldmVudE5hbWUsIGV2ZW50RGF0YSk7XG59OyJdLCJuYW1lcyI6WyJ0cmFja0ZhY2Vib29rRXZlbnQiLCJldmVudE5hbWUiLCJldmVudERhdGEiLCJ3aW5kb3ciLCJmYnEiLCJ0cmFja1Rpa1Rva0V2ZW50IiwidHRxIiwidHJhY2siLCJ0cmFja0JvdGhFdmVudHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/pixelEvents.js\n"));

/***/ })

});