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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function onSubmit(event) {\n        setResult(chat.innerText + \"User: \" + messageInput + \"\\n\");\n        // console.log(event);\n        setMessageInput(result + \"\\n\" + thePrompt.value);\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    message: messageInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(chat.innerHTML + \"\\n <br> Bot: \" + data.result);\n            // chat.value+=\"\\n\"+result+\"\\n\";\n            setMessageInput(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create-a-friend\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"b\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"c\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg\",\n                        alt: \"ai generated art\",\n                        id: \"generatedImg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"thePrompt\",\n                                type: \"text\",\n                                name: \"message\",\n                                placeholder: \"Message the bot\",\n                                value: messageInput,\n                                onChange: (e)=>setMessageInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate names\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"chat\",\n                                children: result\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"Images and chat provided by OpenAI Api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OzT/5TGie+XogSo057pL6ArIA5Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDUztBQUNFO0FBRXpCLFNBQVNJLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUdyQyxlQUFlTyxTQUFTQyxLQUFLLEVBQUU7UUFDN0JGLFVBQVVHLEtBQUtDLFNBQVMsR0FBQyxXQUFTUCxlQUFhO1FBQy9DLHNCQUFzQjtRQUN0QkMsZ0JBQWdCQyxTQUFRLE9BQU1NLFVBQVVDLEtBQUs7UUFDN0NKLE1BQU1LLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxpQkFBaUI7Z0JBQzVDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsU0FBU2xCO2dCQUFhO1lBQy9DO1lBRUEsTUFBTW1CLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQyxJQUFJVCxTQUFTVSxNQUFNLEtBQUssS0FBSztnQkFDM0IsTUFBTUYsS0FBS0csS0FBSyxJQUFJLElBQUlDLE1BQU0sOEJBQThDLE9BQWhCWixTQUFTVSxNQUFNLEdBQUk7WUFDakYsQ0FBQztZQUVEbEIsVUFBVUcsS0FBS2tCLFNBQVMsR0FBQyxrQkFBa0JMLEtBQUtqQixNQUFNO1lBQ3RELGdDQUFnQztZQUNoQ0QsZ0JBQWdCO1FBQ2xCLEVBQUUsT0FBTXFCLE9BQU87WUFDYkcsUUFBUUgsS0FBSyxDQUFDQTtZQUNkSSxNQUFNSixNQUFNSixPQUFPO1FBQ3JCO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVzlCLCtEQUFXOzswQkFDekIsOERBQUNnQzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDOzswQ0FDRyw4REFBQ0M7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHWCw4REFBQ0M7Ozs7OzBCQUdELDhEQUFDQTs7a0NBQ0csOERBQUNDO3dCQUFJQyxLQUFJO3dCQUFzR0MsS0FBSTt3QkFBbUJDLElBQUc7Ozs7OztrQ0FFekksOERBQUNDO3dCQUFLbkMsVUFBVUE7OzBDQUNiLDhEQUFDb0M7Z0NBQ0NGLElBQUc7Z0NBQ0hHLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1psQyxPQUFPVDtnQ0FDUDRDLFVBQVUsQ0FBQ0MsSUFBTTVDLGdCQUFnQjRDLEVBQUVDLE1BQU0sQ0FBQ3JDLEtBQUs7Ozs7OzswQ0FFakQsOERBQUMrQjtnQ0FBTUMsTUFBSztnQ0FBU2hDLE9BQU07Ozs7OzswQ0FDM0IsOERBQUNzQzs7Ozs7MENBQ0QsOERBQUNwQjtnQ0FBSVcsSUFBRzswQ0FBUXBDOzs7Ozs7MENBQ2hCLDhEQUFDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlSLDhEQUFDQzswQkFBTzs7Ozs7Ozs7Ozs7O0FBZ0NaLENBQUM7R0FoR3VCakQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlSW5wdXQsIHNldE1lc3NhZ2VJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgc2V0UmVzdWx0KGNoYXQuaW5uZXJUZXh0K1wiVXNlcjogXCIrbWVzc2FnZUlucHV0K1wiXFxuXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgc2V0TWVzc2FnZUlucHV0KHJlc3VsdCArXCJcXG5cIisgdGhlUHJvbXB0LnZhbHVlKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogbWVzc2FnZUlucHV0IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0UmVzdWx0KGNoYXQuaW5uZXJIVE1MK1wiXFxuIDxicj4gQm90OiBcIiArIGRhdGEucmVzdWx0KTtcclxuICAgICAgLy8gY2hhdC52YWx1ZSs9XCJcXG5cIityZXN1bHQrXCJcXG5cIjtcclxuICAgICAgc2V0TWVzc2FnZUlucHV0KFwiXCIpO1xyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT5DcmVhdGUtYS1mcmllbmQ8L2gxPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDxhPmE8L2E+XHJcbiAgICAgICAgICAgIDxhPmI8L2E+XHJcbiAgICAgICAgICAgIDxhPmM8L2E+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICAgIFxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzQvNDkvQV9ibGFja19pbWFnZS5qcGcvMzIwcHgtQV9ibGFja19pbWFnZS5qcGdcIiBhbHQ9XCJhaSBnZW5lcmF0ZWQgYXJ0XCIgaWQ9XCJnZW5lcmF0ZWRJbWdcIi8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgIGlkPVwidGhlUHJvbXB0XCJcclxuICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0aGUgYm90XCJcclxuICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlSW5wdXR9XHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2VJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgLz5cclxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgbmFtZXNcIi8+XHJcbiAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICA8ZGl2IGlkPVwiY2hhdFwiPntyZXN1bHR9PC9kaXY+XHJcbiAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9IGlkPVwiY2hhdFwiPntyZXN1bHR9PC9kaXY+ICovfVxyXG4gICAgICAgICA8L2Zvcm0+IFxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICBJbWFnZXMgYW5kIGNoYXQgcHJvdmlkZWQgYnkgT3BlbkFJIEFwaSBcclxuICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAvLyA8ZGl2PlxyXG4gICAgLy8gICA8SGVhZD5cclxuICAgIC8vICAgICA8dGl0bGU+T3BlbkFJIFF1aWNrc3RhcnQ8L3RpdGxlPlxyXG4gICAgLy8gICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2RvZy5wbmdcIiAvPlxyXG4gICAgLy8gICA8L0hlYWQ+XHJcblxyXG4gICAgLy8gICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgIC8vICAgICA8aW1nIHNyYz1cIi9kb2cucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cclxuICAgIC8vICAgICA8aDM+TmFtZSBteSBwZXQ8L2gzPlxyXG4gICAgLy8gICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAvLyAgICAgICA8aW5wdXRcclxuICAgIC8vICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgICAgICBuYW1lPVwiYW5pbWFsXCJcclxuICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhbiBhbmltYWxcIlxyXG4gICAgLy8gICAgICAgICB2YWx1ZT17YW5pbWFsSW5wdXR9XHJcbiAgICAvLyAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5pbWFsSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgLy8gICAgICAgLz5cclxuICAgIC8vICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBuYW1lc1wiIC8+XHJcbiAgICAvLyAgICAgPC9mb3JtPlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fT57cmVzdWx0fTwvZGl2PlxyXG4gICAgLy8gICA8L21haW4+XHJcbiAgICAvLyA8L2Rpdj59XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2UiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJtZXNzYWdlSW5wdXQiLCJzZXRNZXNzYWdlSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwiY2hhdCIsImlubmVyVGV4dCIsInRoZVByb21wdCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJFcnJvciIsImlubmVySFRNTCIsImNvbnNvbGUiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoZWFkZXIiLCJoMSIsIm5hdiIsImEiLCJhcnRpY2xlIiwiaW1nIiwic3JjIiwiYWx0IiwiaWQiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnIiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});