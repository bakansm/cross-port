"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Header/ConnectButton/AuthenticatedButton.tsx":
/*!************************************************************************!*\
  !*** ./components/layout/Header/ConnectButton/AuthenticatedButton.tsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthenticatedButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction AuthenticatedButton() {\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center space-x-4\",\n        children: [\n            address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                children: address\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-40 truncate rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n                onClick: handleConnectWalletButtonClick,\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800\",\n                        id: \"menu-button\",\n                        \"aria-expanded\": \"true\",\n                        \"aria-haspopup\": \"true\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                            className: \"h-full w-full rounded-full object-cover\",\n                            src: avatar,\n                            fill: true,\n                            sizes: \"large\",\n                            alt: \"Your avatar\",\n                            onClick: handleAvtClick\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, this),\n                    showAvt && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-58 absolute right-0 z-10 mt-2 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5\",\n                        role: \"menu\",\n                        \"aria-orientation\": \"vertical\",\n                        \"aria-labelledby\": \"menu-button\",\n                        tabIndex: -1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"block px-4 py-2 text-lg  text-gray-700 hover:bg-gray-50\",\n                                role: \"menuitem\",\n                                tabIndex: -1,\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"block px-4 py-2 text-lg text-gray-700 hover:bg-gray-50\",\n                                role: \"menuitem\",\n                                tabIndex: -1,\n                                children: \"Setting\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>signOut(),\n                                className: \"block w-full px-4 py-2 text-left text-lg  text-gray-700 hover:bg-red-400\",\n                                role: \"menuitem\",\n                                tabIndex: -1,\n                                children: \"Sign out\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\AuthenticatedButton.tsx\",\n        lineNumber: 2,\n        columnNumber: 4\n    }, this);\n}\n_c = AuthenticatedButton;\nvar _c;\n$RefreshReg$(_c, \"AuthenticatedButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi9BdXRoZW50aWNhdGVkQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0E7a0JBQ3JCLDhEQUFDQztRQUFJQyxXQUFVOztZQUNiQyx3QkFDQyw4REFBQ0M7Z0JBQU9GLFdBQVU7MEJBQ2ZDOzs7OztxQ0FHSCw4REFBQ0M7Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLFNBQVNDOzBCQUNWOzs7Ozs7MEJBSUgsOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NGLFdBQVU7d0JBQ1ZLLElBQUc7d0JBQ0hDLGlCQUFjO3dCQUNkQyxpQkFBYztrQ0FFZCw0RUFBQ0M7NEJBQ0NSLFdBQVU7NEJBQ1ZTLEtBQUtDOzRCQUNMQyxJQUFJOzRCQUNKQyxPQUFNOzRCQUNOQyxLQUFJOzRCQUNKVixTQUFTVzs7Ozs7Ozs7Ozs7b0JBR1pDLHlCQUNDLDhEQUFDaEI7d0JBQ0NDLFdBQVU7d0JBQ1ZnQixNQUFLO3dCQUNMQyxvQkFBaUI7d0JBQ2pCQyxtQkFBZ0I7d0JBQ2hCQyxVQUFVLENBQUM7OzBDQUVYLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTHJCLFdBQVU7Z0NBQ1ZnQixNQUFLO2dDQUNMRyxVQUFVLENBQUM7MENBQ1o7Ozs7OzswQ0FHRCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xyQixXQUFVO2dDQUNWZ0IsTUFBSztnQ0FDTEcsVUFBVSxDQUFDOzBDQUNaOzs7Ozs7MENBR0QsOERBQUNqQjtnQ0FDQ0MsU0FBUyxJQUFNbUI7Z0NBQ2Z0QixXQUFVO2dDQUNWZ0IsTUFBSztnQ0FDTEcsVUFBVSxDQUFDOzBDQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtLQWxFd0JyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi9BdXRoZW50aWNhdGVkQnV0dG9uLnRzeD8yNjA5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhlbnRpY2F0ZWRCdXR0b24oKSB7XHJcbiAgOzxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICB7YWRkcmVzcyA/IChcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTQwIHRydW5jYXRlIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIj5cclxuICAgICAgICB7YWRkcmVzc31cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApIDogKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy00MCB0cnVuY2F0ZSByb3VuZGVkLWZ1bGwgcHgtNiBweS0xIHRleHQtc2xhdGUtNDAwIG91dGxpbmUgb3V0bGluZS0xIG91dGxpbmUtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0QnV0dG9uQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICBDb25uZWN0IFdhbGxldFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICl9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTggdy04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgaWQ9XCJtZW51LWJ1dHRvblwiXHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgIHNyYz17YXZhdGFyfVxyXG4gICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgc2l6ZXM9XCJsYXJnZVwiXHJcbiAgICAgICAgICBhbHQ9XCJZb3VyIGF2YXRhclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBdnRDbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge3Nob3dBdnQgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctNTggYWJzb2x1dGUgcmlnaHQtMCB6LTEwIG10LTIgb3JpZ2luLXRvcC1yaWdodCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBiZy13aGl0ZSBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTVcIlxyXG4gICAgICAgICAgcm9sZT1cIm1lbnVcIlxyXG4gICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1lbnUtYnV0dG9uXCJcclxuICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWxnICB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNTBcIlxyXG4gICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxyXG4gICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtbGcgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwXCJcclxuICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTZXR0aW5nXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHB4LTQgcHktMiB0ZXh0LWxlZnQgdGV4dC1sZyAgdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1yZWQtNDAwXCJcclxuICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aGVudGljYXRlZEJ1dHRvbiIsImRpdiIsImNsYXNzTmFtZSIsImFkZHJlc3MiLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlQ29ubmVjdFdhbGxldEJ1dHRvbkNsaWNrIiwiaWQiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1oYXNwb3B1cCIsIkltYWdlIiwic3JjIiwiYXZhdGFyIiwiZmlsbCIsInNpemVzIiwiYWx0IiwiaGFuZGxlQXZ0Q2xpY2siLCJzaG93QXZ0Iiwicm9sZSIsImFyaWEtb3JpZW50YXRpb24iLCJhcmlhLWxhYmVsbGVkYnkiLCJ0YWJJbmRleCIsImEiLCJocmVmIiwic2lnbk91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton/AuthenticatedButton.tsx\n"));

/***/ }),

/***/ "./components/layout/Header/ConnectButton/index.tsx":
/*!**********************************************************!*\
  !*** ./components/layout/Header/ConnectButton/index.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contract_connectMetamask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contract/connectMetamask */ \"./contract/connectMetamask.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _AuthenticatedButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthenticatedButton */ \"./components/layout/Header/ConnectButton/AuthenticatedButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ConnectButton() {\n    _s();\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);\n    const [showAvt, setShowAvt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSignInButtonClick = (path)=>{\n        router.push(path);\n    };\n    const handleConnectWalletButtonClick = async ()=>{\n        await (0,_contract_connectMetamask__WEBPACK_IMPORTED_MODULE_3__.connectMetamask)().then((value)=>setAddress(value)).catch((err)=>console.log(err));\n    };\n    const handleAvtClick = async ()=>{\n        setShowAvt(!showAvt);\n    };\n    if (status === \"unauthenticated\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" rounded-full px-6 py-1 text-slate-400 outline outline-1 outline-slate-400 hover:bg-slate-900 hover:text-white\",\n        onClick: ()=>handleSignInButtonClick(\"/login\"),\n        children: \"Sign in\"\n    }, void 0, false, {\n        fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 7\n    }, this);\n    else if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthenticatedButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"D:\\\\CODE\\\\soundbound-client\\\\components\\\\layout\\\\Header\\\\ConnectButton\\\\index.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n}\n_s(ConnectButton, \"9JWVm44iQqpNk46CTOJgAKmrsaE=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvQ29ubmVjdEJ1dHRvbi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUVQO0FBQzRCO0FBQ1A7QUFDRTtBQUV4QyxTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0gsMkRBQVVBO0lBRTdCLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FDcENRO0lBRUYsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFVO0lBRWhELE1BQU1XLFNBQVNaLHNEQUFTQTtJQUV4QixNQUFNYSwwQkFBMEIsQ0FBQ0M7UUFDL0JGLE9BQU9HLElBQUksQ0FBQ0Q7SUFDZDtJQUVBLE1BQU1FLGlDQUFpQztRQUNyQyxNQUFNZCwwRUFBZUEsR0FDbEJlLElBQUksQ0FBQyxDQUFDQyxRQUFVVixXQUFXVSxRQUMzQkMsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEM7SUFFQSxNQUFNRyxpQkFBaUI7UUFDckJaLFdBQVcsQ0FBQ0Q7SUFDZDtJQUVBLElBQUlKLFdBQVcsbUJBQ2IscUJBQ0UsOERBQUNrQjtRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTWIsd0JBQXdCO2tCQUN4Qzs7Ozs7O1NBSUEsSUFBSVAsV0FBVyxpQkFBaUI7UUFDbkMscUJBQU8sOERBQUNGLDREQUFtQkE7Ozs7O0lBQzdCO0FBQ0Y7R0FwQ3dCQzs7UUFDSEYsdURBQVVBO1FBT2RILGtEQUFTQTs7O0tBUkZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9Db25uZWN0QnV0dG9uL2luZGV4LnRzeD8xZDk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF2YXRhciBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQuanBnJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0TWV0YW1hc2sgfSBmcm9tICdAL2NvbnRyYWN0L2Nvbm5lY3RNZXRhbWFzaydcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IEF1dGhlbnRpY2F0ZWRCdXR0b24gZnJvbSAnLi9BdXRoZW50aWNhdGVkQnV0dG9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdEJ1dHRvbigpIHtcclxuICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpXHJcblxyXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgICB1bmRlZmluZWRcclxuICApXHJcbiAgY29uc3QgW3Nob3dBdnQsIHNldFNob3dBdnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrID0gKHBhdGg6IHN0cmluZykgPT4ge1xyXG4gICAgcm91dGVyLnB1c2gocGF0aClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNvbm5lY3RNZXRhbWFzaygpXHJcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4gc2V0QWRkcmVzcyh2YWx1ZSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQXZ0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRTaG93QXZ0KCFzaG93QXZ0KVxyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gJ3VuYXV0aGVudGljYXRlZCcpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbCBweC02IHB5LTEgdGV4dC1zbGF0ZS00MDAgb3V0bGluZSBvdXRsaW5lLTEgb3V0bGluZS1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNpZ25JbkJ1dHRvbkNsaWNrKCcvbG9naW4nKX1cclxuICAgICAgPlxyXG4gICAgICAgIFNpZ24gaW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbiAgZWxzZSBpZiAoc3RhdHVzID09PSAnYXV0aGVudGljYXRlZCcpIHtcclxuICAgIHJldHVybiA8QXV0aGVudGljYXRlZEJ1dHRvbiAvPlxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJjb25uZWN0TWV0YW1hc2siLCJ1c2VTZXNzaW9uIiwiQXV0aGVudGljYXRlZEJ1dHRvbiIsIkNvbm5lY3RCdXR0b24iLCJzdGF0dXMiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInVuZGVmaW5lZCIsInNob3dBdnQiLCJzZXRTaG93QXZ0Iiwicm91dGVyIiwiaGFuZGxlU2lnbkluQnV0dG9uQ2xpY2siLCJwYXRoIiwicHVzaCIsImhhbmRsZUNvbm5lY3RXYWxsZXRCdXR0b25DbGljayIsInRoZW4iLCJ2YWx1ZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUF2dENsaWNrIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Header/ConnectButton/index.tsx\n"));

/***/ })

});