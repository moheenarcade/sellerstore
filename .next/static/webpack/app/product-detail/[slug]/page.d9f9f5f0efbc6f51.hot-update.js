"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product-detail/[slug]/page",{

/***/ "(app-pages-browser)/./src/lib/api.ts":
/*!************************!*\
  !*** ./src/lib/api.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCategories: () => (/* binding */ getCategories),\n/* harmony export */   getCityState: () => (/* binding */ getCityState),\n/* harmony export */   getProductBySlug: () => (/* binding */ getProductBySlug),\n/* harmony export */   getProducts: () => (/* binding */ getProducts),\n/* harmony export */   getProductsByCategorySlug: () => (/* binding */ getProductsByCategorySlug),\n/* harmony export */   getSettings: () => (/* binding */ getSettings)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst baseUrl = \"https://dxb.reselluae.com/api/rest\";\nconst getCategories = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(baseUrl, \"/categories\"));\n        return response.data;\n    } catch (error) {\n        console.error('Error fetching categories:', error);\n        throw error;\n    }\n};\nconst getProducts = async function() {\n    let slugs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\";\n    try {\n        const url = slugs ? \"\".concat(baseUrl, \"/store/products/\").concat(slugs) : \"\".concat(baseUrl, \"/store/products\");\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n        return response.data;\n    } catch (error) {\n        console.error(\"Error fetching products:\", error);\n        throw error;\n    }\n};\nconst getProductsByCategorySlug = async (slug)=>{\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(baseUrl, \"/categories/\").concat(slug, \"/products\"));\n    return response.data;\n};\nconst getProductBySlug = async (slug)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(baseUrl, \"/store/product/\").concat(slug));\n        return response.data;\n    } catch (error) {\n        console.error('Error fetching product by slug:', error);\n        throw error;\n    }\n};\n// export const getSettings = async () => {\n//   try {\n//     const response = await axios.get(`${baseUrl}/store/setting`);\n//     const settings = response.data;\n//     // Save to localStorage (only runs on client-side)\n//     if (typeof window !== 'undefined') {\n//       localStorage.setItem('storeSettings', JSON.stringify(settings.data[0]));\n//     }\n//     return settings;\n//   } catch (error) {\n//     console.error('Error fetching setting:', error);\n//     throw error;\n//   } \n// };\nconst getSettings = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(baseUrl, \"/store/setting\"));\n        const settings = response.data;\n        // Save to localStorage (only runs on client-side)\n        if (true) {\n            // Correctly accessing the settings object (no need to index into an array)\n            localStorage.setItem('storeSettings', JSON.stringify(settings.data));\n        }\n        return settings;\n    } catch (error) {\n        console.error('Error fetching setting:', error);\n        throw error;\n    }\n};\nconst getCityState = async ()=>{\n    const savedSettings = JSON.parse(localStorage.getItem('storeSettings') || '{}');\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(baseUrl, \"/store/cities/\").concat(savedSettings.country_id));\n        return response.data;\n    } catch (error) {\n        console.error('Error fetching setting:', error);\n        throw error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsVUFBVUMsb0NBQW9DO0FBRTdDLE1BQU1HLGdCQUFnQjtJQUMzQixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLEdBQVcsT0FBUk4sU0FBUTtRQUM1QyxPQUFPSyxTQUFTRSxJQUFJO0lBQ3RCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtRQUM1QyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1FLGNBQWM7UUFBT0MseUVBQVE7SUFDeEMsSUFBSTtRQUNGLE1BQU1DLE1BQU1ELFFBQ1IsR0FBNkJBLE9BQTFCWCxTQUFRLG9CQUF3QixPQUFOVyxTQUM3QixHQUFXLE9BQVJYLFNBQVE7UUFDZixNQUFNSyxXQUFXLE1BQU1OLDZDQUFLQSxDQUFDTyxHQUFHLENBQUNNO1FBQ2pDLE9BQU9QLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTUssNEJBQTRCLE9BQU9DO0lBQzlDLE1BQU1ULFdBQVcsTUFBTU4sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQyxHQUF5QlEsT0FBdEJkLFNBQVEsZ0JBQW1CLE9BQUxjLE1BQUs7SUFDL0QsT0FBT1QsU0FBU0UsSUFBSTtBQUN0QixFQUFFO0FBRUssTUFBTVEsbUJBQW1CLE9BQU9EO0lBQ3JDLElBQUk7UUFDRixNQUFNVCxXQUFXLE1BQU1OLDZDQUFLQSxDQUFDTyxHQUFHLENBQUMsR0FBNEJRLE9BQXpCZCxTQUFRLG1CQUFzQixPQUFMYztRQUM3RCxPQUFPVCxTQUFTRSxJQUFJO0lBQ3RCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtRQUNqRCxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVGLDJDQUEyQztBQUMzQyxVQUFVO0FBQ1Ysb0VBQW9FO0FBQ3BFLHNDQUFzQztBQUV0Qyx5REFBeUQ7QUFDekQsMkNBQTJDO0FBQzNDLGlGQUFpRjtBQUNqRixRQUFRO0FBRVIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0Qix1REFBdUQ7QUFDdkQsbUJBQW1CO0FBQ25CLE9BQU87QUFDUCxLQUFLO0FBSUUsTUFBTVEsY0FBYztJQUN6QixJQUFJO1FBQ0YsTUFBTVgsV0FBVyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLEdBQVcsT0FBUk4sU0FBUTtRQUM1QyxNQUFNaUIsV0FBV1osU0FBU0UsSUFBSTtRQUU5QixrREFBa0Q7UUFDbEQsSUFBSSxJQUE2QixFQUFFO1lBQ2pDLDJFQUEyRTtZQUMzRVcsYUFBYUMsT0FBTyxDQUFDLGlCQUFpQkMsS0FBS0MsU0FBUyxDQUFDSixTQUFTVixJQUFJO1FBQ3BFO1FBRUEsT0FBT1U7SUFDVCxFQUFFLE9BQU9ULE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDekMsTUFBTUE7SUFDUjtBQUNGLEVBQUU7QUFJSyxNQUFNYyxlQUFlO0lBQzFCLE1BQU1DLGdCQUFnQkgsS0FBS0ksS0FBSyxDQUFDTixhQUFhTyxPQUFPLENBQUMsb0JBQW9CO0lBQzFFLElBQUk7UUFDRixNQUFNcEIsV0FBVyxNQUFNTiw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLEdBQTJCaUIsT0FBeEJ2QixTQUFRLGtCQUF5QyxPQUF6QnVCLGNBQWNHLFVBQVU7UUFDcEYsT0FBT3JCLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE1BQU1BO0lBQ1I7QUFDRixFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvbWFjYm9va3BybzIwMTkvRGVza3RvcC9tb2hlZW4td29yay9zZWxsZXJzdG9yZS9zcmMvbGliL2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9jYXRlZ29yaWVzYCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChzbHVncyA9IFwiXCIpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBzbHVnc1xuICAgICAgPyBgJHtiYXNlVXJsfS9zdG9yZS9wcm9kdWN0cy8ke3NsdWdzfWBcbiAgICAgIDogYCR7YmFzZVVybH0vc3RvcmUvcHJvZHVjdHNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2R1Y3RzOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnlTbHVnID0gYXN5bmMgKHNsdWc6IHN0cmluZykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9jYXRlZ29yaWVzLyR7c2x1Z30vcHJvZHVjdHNgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5U2x1ZyA9IGFzeW5jIChzbHVnOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9zdG9yZS9wcm9kdWN0LyR7c2x1Z31gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0IGJ5IHNsdWc6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59OyAgXG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXR0aW5ncyA9IGFzeW5jICgpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9zdG9yZS9zZXR0aW5nYCk7XG4vLyAgICAgY29uc3Qgc2V0dGluZ3MgPSByZXNwb25zZS5kYXRhO1xuXG4vLyAgICAgLy8gU2F2ZSB0byBsb2NhbFN0b3JhZ2UgKG9ubHkgcnVucyBvbiBjbGllbnQtc2lkZSlcbi8vICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZVNldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MuZGF0YVswXSkpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBzZXR0aW5ncztcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXR0aW5nOicsIGVycm9yKTtcbi8vICAgICB0aHJvdyBlcnJvcjtcbi8vICAgfSBcbi8vIH07XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0U2V0dGluZ3MgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vc3RvcmUvc2V0dGluZ2ApO1xuICAgIGNvbnN0IHNldHRpbmdzID0gcmVzcG9uc2UuZGF0YTtcblxuICAgIC8vIFNhdmUgdG8gbG9jYWxTdG9yYWdlIChvbmx5IHJ1bnMgb24gY2xpZW50LXNpZGUpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBDb3JyZWN0bHkgYWNjZXNzaW5nIHRoZSBzZXR0aW5ncyBvYmplY3QgKG5vIG5lZWQgdG8gaW5kZXggaW50byBhbiBhcnJheSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZVNldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MuZGF0YSkpO1xuICAgIH1cblxuICAgIHJldHVybiBzZXR0aW5ncztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXR0aW5nOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRDaXR5U3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHNhdmVkU2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZVNldHRpbmdzJykgfHwgJ3t9Jyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vc3RvcmUvY2l0aWVzLyR7c2F2ZWRTZXR0aW5ncy5jb3VudHJ5X2lkfWApO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHNldHRpbmc6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9IFxufTtcblxuXG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJnZXRDYXRlZ29yaWVzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0UHJvZHVjdHMiLCJzbHVncyIsInVybCIsImdldFByb2R1Y3RzQnlDYXRlZ29yeVNsdWciLCJzbHVnIiwiZ2V0UHJvZHVjdEJ5U2x1ZyIsImdldFNldHRpbmdzIiwic2V0dGluZ3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldENpdHlTdGF0ZSIsInNhdmVkU2V0dGluZ3MiLCJwYXJzZSIsImdldEl0ZW0iLCJjb3VudHJ5X2lkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/api.ts\n"));

/***/ })

});