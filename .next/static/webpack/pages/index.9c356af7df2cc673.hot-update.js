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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function onSubmit(event) {\n        let newP = document.createElement(\"p\");\n        setResult(chat.innerText + \"User: \" + messageInput + \"\\n\");\n        // console.log(event);\n        setMessageInput(result + thePrompt.value);\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    message: messageInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(chat.innerText + \"Bot: \" + data.result);\n            chat.innerHTML = \"<br>\" + data.result;\n            setMessageInput(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create-a-friend\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"b\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"c\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg\",\n                        alt: \"ai generated art\",\n                        id: \"generatedImg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"thePrompt\",\n                                type: \"text\",\n                                name: \"message\",\n                                placeholder: \"Message the bot\",\n                                value: messageInput,\n                                onChange: (e)=>setMessageInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"chat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"Images and chat provided by OpenAI Api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OzT/5TGie+XogSo057pL6ArIA5Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDUztBQUNFO0FBRXpCLFNBQVNJLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUdyQyxlQUFlTyxTQUFTQyxLQUFLLEVBQUU7UUFDN0IsSUFBSUMsT0FBT0MsU0FBU0MsYUFBYSxDQUFDO1FBQ2xDTCxVQUFVTSxLQUFLQyxTQUFTLEdBQUMsV0FBU1YsZUFBYTtRQUMvQyxzQkFBc0I7UUFDdEJDLGdCQUFnQkMsU0FBU1MsVUFBVUMsS0FBSztRQUN4Q1AsTUFBTVEsY0FBYztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtnQkFDNUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFQyxTQUFTckI7Z0JBQWE7WUFDL0M7WUFFQSxNQUFNc0IsT0FBTyxNQUFNUixTQUFTUyxJQUFJO1lBQ2hDLElBQUlULFNBQVNVLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixNQUFNRixLQUFLRyxLQUFLLElBQUksSUFBSUMsTUFBTSw4QkFBOEMsT0FBaEJaLFNBQVNVLE1BQU0sR0FBSTtZQUNqRixDQUFDO1lBQ0RyQixVQUFVTSxLQUFLQyxTQUFTLEdBQUMsVUFBVVksS0FBS3BCLE1BQU07WUFDOUNPLEtBQUtrQixTQUFTLEdBQUcsU0FBT0wsS0FBS3BCLE1BQU07WUFDbkNELGdCQUFnQjtRQUNsQixFQUFFLE9BQU13QixPQUFPO1lBQ2JHLFFBQVFILEtBQUssQ0FBQ0E7WUFDZEksTUFBTUosTUFBTUosT0FBTztRQUNyQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVdqQywrREFBVzs7MEJBQ3pCLDhEQUFDbUM7O2tDQUNDLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7MENBQ0csOERBQUNDOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFFOzs7Ozs7MENBQ0gsOERBQUNBOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1gsOERBQUNDOzs7OzswQkFHRCw4REFBQ0E7O2tDQUNHLDhEQUFDQzt3QkFBSUMsS0FBSTt3QkFBc0dDLEtBQUk7d0JBQW1CQyxJQUFHOzs7Ozs7a0NBRXpJLDhEQUFDQzt3QkFBS3RDLFVBQVVBOzswQ0FDYiw4REFBQ3VDO2dDQUNDRixJQUFHO2dDQUNIRyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNabEMsT0FBT1o7Z0NBQ1ArQyxVQUFVLENBQUNDLElBQU0vQyxnQkFBZ0IrQyxFQUFFQyxNQUFNLENBQUNyQyxLQUFLOzs7Ozs7MENBRWpELDhEQUFDK0I7Z0NBQU1DLE1BQUs7Z0NBQVNoQyxPQUFNOzs7Ozs7MENBQzNCLDhEQUFDc0M7Ozs7OzBDQUNELDhEQUFDcEI7Z0NBQUlXLElBQUc7Ozs7OzswQ0FDUiw4REFBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlSLDhEQUFDQzswQkFBTzs7Ozs7Ozs7Ozs7O0FBT1osQ0FBQztHQXZFdUJwRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW21lc3NhZ2VJbnB1dCwgc2V0TWVzc2FnZUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XHJcbiAgICBsZXQgbmV3UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNldFJlc3VsdChjaGF0LmlubmVyVGV4dCtcIlVzZXI6IFwiK21lc3NhZ2VJbnB1dCtcIlxcblwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHNldE1lc3NhZ2VJbnB1dChyZXN1bHQgKyB0aGVQcm9tcHQudmFsdWUpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBtZXNzYWdlSW5wdXQgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFJlc3VsdChjaGF0LmlubmVyVGV4dCtcIkJvdDogXCIgKyBkYXRhLnJlc3VsdCk7XHJcbiAgICAgIGNoYXQuaW5uZXJIVE1MID0gXCI8YnI+XCIrZGF0YS5yZXN1bHQ7XHJcbiAgICAgIHNldE1lc3NhZ2VJbnB1dChcIlwiKTtcclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+Q3JlYXRlLWEtZnJpZW5kPC9oMT5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8YT5hPC9hPlxyXG4gICAgICAgICAgICA8YT5iPC9hPlxyXG4gICAgICAgICAgICA8YT5jPC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8YXJ0aWNsZT5cclxuICAgICAgICBcclxuICAgIDwvYXJ0aWNsZT5cclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi80LzQ5L0FfYmxhY2tfaW1hZ2UuanBnLzMyMHB4LUFfYmxhY2tfaW1hZ2UuanBnXCIgYWx0PVwiYWkgZ2VuZXJhdGVkIGFydFwiIGlkPVwiZ2VuZXJhdGVkSW1nXCIvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICBpZD1cInRoZVByb21wdFwiXHJcbiAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgdGhlIGJvdFwiXHJcbiAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZUlucHV0fVxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIi8+XHJcbiAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICA8ZGl2IGlkPVwiY2hhdFwiPjwvZGl2PlxyXG4gICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fSBpZD1cImNoYXRcIj57cmVzdWx0fTwvZGl2PiAqL31cclxuICAgICAgICAgPC9mb3JtPiBcclxuICAgIDwvYXJ0aWNsZT5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgSW1hZ2VzIGFuZCBjaGF0IHByb3ZpZGVkIGJ5IE9wZW5BSSBBcGkgXHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2UiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJtZXNzYWdlSW5wdXQiLCJzZXRNZXNzYWdlSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwibmV3UCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNoYXQiLCJpbm5lclRleHQiLCJ0aGVQcm9tcHQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJpbm5lckhUTUwiLCJjb25zb2xlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaGVhZGVyIiwiaDEiLCJuYXYiLCJhIiwiYXJ0aWNsZSIsImltZyIsInNyYyIsImFsdCIsImlkIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});