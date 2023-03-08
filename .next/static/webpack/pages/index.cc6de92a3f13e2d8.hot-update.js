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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let pom = true;\n    async function onSubmit(event) {\n        if (pom) {\n            setResult(\"[start of the conversation] \\n\");\n            pom = false;\n        }\n        setResult(result + \"User: \" + messageInput + \"\\n\");\n        console.log(event);\n        setMessageInput(chat.innerText + \"\\n\" + thePrompt.value);\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    message: messageInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(result + \"\" + data.result);\n            setMessageInput(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create-a-friend\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"b\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"c\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg\",\n                        alt: \"ai generated art\",\n                        id: \"generatedImg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"thePrompt\",\n                                type: \"text\",\n                                name: \"message\",\n                                placeholder: \"Message the bot\",\n                                value: messageInput,\n                                onChange: (e)=>setMessageInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 57,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate names\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"chat\",\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),\n                                readOnly: true,\n                                value: result\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 67,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 68,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"Images and chat provided by OpenAI Api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"gIXzHR71N8j5+ISnkRxJ3xo5/qA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDUztBQUNFO0FBRXpCLFNBQVNJLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUE7SUFDcEMsSUFBSU8sTUFBTSxJQUFJO0lBQ2QsZUFBZUMsU0FBU0MsS0FBSyxFQUFFO1FBQzdCLElBQUlGLEtBQ0o7WUFDRUQsVUFBVTtZQUNWQyxNQUFNLEtBQUs7UUFDYixDQUFDO1FBQ0RELFVBQVVELFNBQU8sV0FBU0YsZUFBYTtRQUN2Q08sUUFBUUMsR0FBRyxDQUFDRjtRQUNaTCxnQkFBZ0JRLEtBQUtDLFNBQVMsR0FBRSxPQUFNQyxVQUFVQyxLQUFLO1FBQ3JETixNQUFNTyxjQUFjO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO2dCQUM1Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLFNBQVNyQjtnQkFBYTtZQUMvQztZQUVBLE1BQU1zQixPQUFPLE1BQU1SLFNBQVNTLElBQUk7WUFDaEMsSUFBSVQsU0FBU1UsTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLE1BQU1GLEtBQUtHLEtBQUssSUFBSSxJQUFJQyxNQUFNLDhCQUE4QyxPQUFoQlosU0FBU1UsTUFBTSxHQUFJO1lBQ2pGLENBQUM7WUFFRHJCLFVBQVVELFNBQU8sS0FBS29CLEtBQUtwQixNQUFNO1lBQ2pDRCxnQkFBZ0I7UUFDbEIsRUFBRSxPQUFNd0IsT0FBTztZQUNibEIsUUFBUWtCLEtBQUssQ0FBQ0E7WUFDZEUsTUFBTUYsTUFBTUosT0FBTztRQUNyQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVcvQiwrREFBVzs7MEJBQ3pCLDhEQUFDaUM7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7MENBQ0csOERBQUNDOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNDOzs7OzswQkFHRCw4REFBQ0E7O2tDQUNHLDhEQUFDQzt3QkFBSUMsS0FBSTt3QkFBc0dDLEtBQUk7d0JBQW1CQyxJQUFHOzs7Ozs7a0NBRXpJLDhEQUFDQzt3QkFBS25DLFVBQVVBOzswQ0FDYiw4REFBQ29DO2dDQUNDRixJQUFHO2dDQUNIRyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaaEMsT0FBT1o7Z0NBQ1A2QyxVQUFVLENBQUNDLElBQU03QyxnQkFBZ0I2QyxFQUFFQyxNQUFNLENBQUNuQyxLQUFLOzs7Ozs7MENBRWpELDhEQUFDNkI7Z0NBQU1DLE1BQUs7Z0NBQVM5QixPQUFNOzs7Ozs7MENBQzNCLDhEQUFDb0M7Ozs7OzBDQUNELDhEQUFDQztnQ0FBU1YsSUFBRztnQ0FBT1YsV0FBVy9CLGlFQUFhO2dDQUFFb0QsUUFBUTtnQ0FBQ3RDLE9BQU9WOzs7Ozs7MENBQzlELDhEQUFDOEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlSLDhEQUFDRzswQkFBTzs7Ozs7Ozs7Ozs7O0FBZ0NaLENBQUM7R0FuR3VCcEQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlSW5wdXQsIHNldE1lc3NhZ2VJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcclxuICBsZXQgcG9tID0gdHJ1ZTtcclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgaWYgKHBvbSkgXHJcbiAgICB7XHJcbiAgICAgIHNldFJlc3VsdChcIltzdGFydCBvZiB0aGUgY29udmVyc2F0aW9uXSBcXG5cIik7XHJcbiAgICAgIHBvbSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0UmVzdWx0KHJlc3VsdCtcIlVzZXI6IFwiK21lc3NhZ2VJbnB1dCtcIlxcblwiKTtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHNldE1lc3NhZ2VJbnB1dChjaGF0LmlubmVyVGV4dCArXCJcXG5cIisgdGhlUHJvbXB0LnZhbHVlKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogbWVzc2FnZUlucHV0IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0UmVzdWx0KHJlc3VsdCtcIlwiICsgZGF0YS5yZXN1bHQpO1xyXG4gICAgICBzZXRNZXNzYWdlSW5wdXQoXCJcIik7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPkNyZWF0ZS1hLWZyaWVuZDwvaDE+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGE+YTwvYT5cclxuICAgICAgICAgICAgPGE+YjwvYT5cclxuICAgICAgICAgICAgPGE+YzwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGFydGljbGU+XHJcbiAgICAgICAgXHJcbiAgICA8L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNC80OS9BX2JsYWNrX2ltYWdlLmpwZy8zMjBweC1BX2JsYWNrX2ltYWdlLmpwZ1wiIGFsdD1cImFpIGdlbmVyYXRlZCBhcnRcIiBpZD1cImdlbmVyYXRlZEltZ1wiLz5cclxuICAgICAgICBcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgaWQ9XCJ0aGVQcm9tcHRcIlxyXG4gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlIHRoZSBib3RcIlxyXG4gICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2VJbnB1dH1cclxuICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBuYW1lc1wiLz5cclxuICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImNoYXRcIiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9IHJlYWRPbmx5IHZhbHVlPXtyZXN1bHR9Lz5cclxuICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0gaWQ9XCJjaGF0XCI+e3Jlc3VsdH08L2Rpdj4gKi99XHJcbiAgICAgICAgIDwvZm9ybT4gXHJcbiAgICA8L2FydGljbGU+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgIEltYWdlcyBhbmQgY2hhdCBwcm92aWRlZCBieSBPcGVuQUkgQXBpIFxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIDxkaXY+XHJcbiAgICAvLyAgIDxIZWFkPlxyXG4gICAgLy8gICAgIDx0aXRsZT5PcGVuQUkgUXVpY2tzdGFydDwvdGl0bGU+XHJcbiAgICAvLyAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZG9nLnBuZ1wiIC8+XHJcbiAgICAvLyAgIDwvSGVhZD5cclxuXHJcbiAgICAvLyAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgLy8gICAgIDxpbWcgc3JjPVwiL2RvZy5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgLy8gICAgIDxoMz5OYW1lIG15IHBldDwvaDM+XHJcbiAgICAvLyAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgIC8vICAgICAgIDxpbnB1dFxyXG4gICAgLy8gICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgICAgIG5hbWU9XCJhbmltYWxcIlxyXG4gICAgLy8gICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGFuIGFuaW1hbFwiXHJcbiAgICAvLyAgICAgICAgIHZhbHVlPXthbmltYWxJbnB1dH1cclxuICAgIC8vICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmltYWxJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAvLyAgICAgICAvPlxyXG4gICAgLy8gICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIG5hbWVzXCIgLz5cclxuICAgIC8vICAgICA8L2Zvcm0+XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PntyZXN1bHR9PC9kaXY+XHJcbiAgICAvLyAgIDwvbWFpbj5cclxuICAgIC8vIDwvZGl2Pn1cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZSIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsIm1lc3NhZ2VJbnB1dCIsInNldE1lc3NhZ2VJbnB1dCIsInJlc3VsdCIsInNldFJlc3VsdCIsInBvbSIsIm9uU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY2hhdCIsImlubmVyVGV4dCIsInRoZVByb21wdCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJFcnJvciIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImhlYWRlciIsImgxIiwibmF2IiwiYSIsImFydGljbGUiLCJpbWciLCJzcmMiLCJhbHQiLCJpZCIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJiciIsInRleHRhcmVhIiwicmVhZE9ubHkiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});