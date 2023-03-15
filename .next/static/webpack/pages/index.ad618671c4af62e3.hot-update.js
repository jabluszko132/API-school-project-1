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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function onSubmit(event) {\n        setResult(chat.innerText + \"User: \" + messageInput);\n        chat.innerHTML += \"User: \" + messageInput;\n        // console.log(event);\n        setMessageInput(result + thePrompt.value);\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    message: messageInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(chat.innerText + \"Bot: \" + data.result);\n            chat.innerHTML += \"<br>Bot: \" + data.result;\n            setMessageInput(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create-a-friend\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().link)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().mid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().box),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://cdn.pixabay.com/photo/2023/03/06/21/16/artificial-intelligence-7834467_960_720.jpg\",\n                                alt: \"ai\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: onSubmit,\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().theForm),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        id: \"chat\",\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().chat)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"thePrompt\",\n                                        type: \"text\",\n                                        name: \"message\",\n                                        placeholder: \"Message the bot\",\n                                        value: messageInput,\n                                        onChange: (e)=>setMessageInput(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"submit\",\n                                        value: \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().about),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"About our project\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"So for our API project we have decided to make a site with an in-built chatbot. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 95\n                                    }, this),\n                                    \"The chatbot model is text-babbage-001 and is provided by OpenAI - the company that created the famous ChatGPT. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 126\n                                    }, this),\n                                    \"We have also decided we wanted to learn something new and challenge ourselves a bit, so the entire website is generated using ReactJS. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 150\n                                    }, this),\n                                    \"My job was mainly to create the structre of the website and to plug the babbage into it. Although the job wasn't easy (API key rotation was so annoying) I did manage to do it. I got the most useful information from youtube tutorials and OpenAI Api documentation as well as their opensource test website.  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 167\n                                    }, this),\n                                    \"The CSS (done mostly by Kamil) is a module - every selector inside it had to begin with class or id. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 116\n                                    }, this),\n                                    \"Because our project is made in React and our CSS is a module our code can be used not only as a website of its own but also as an element of a bigger one.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"Images and chat provided by OpenAI Api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OzT/5TGie+XogSo057pL6ArIA5Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlSW5wdXQsIHNldE1lc3NhZ2VJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgc2V0UmVzdWx0KGNoYXQuaW5uZXJUZXh0K1wiVXNlcjogXCIrbWVzc2FnZUlucHV0KTtcclxuICAgIGNoYXQuaW5uZXJIVE1MKz1cIlVzZXI6IFwiK21lc3NhZ2VJbnB1dDtcclxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHNldE1lc3NhZ2VJbnB1dChyZXN1bHQgKyB0aGVQcm9tcHQudmFsdWUpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBtZXNzYWdlSW5wdXQgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFJlc3VsdChjaGF0LmlubmVyVGV4dCtcIkJvdDogXCIgKyBkYXRhLnJlc3VsdCk7XHJcbiAgICAgIGNoYXQuaW5uZXJIVE1MICs9IFwiPGJyPkJvdDogXCIrZGF0YS5yZXN1bHQ7XHJcbiAgICAgIHNldE1lc3NhZ2VJbnB1dChcIlwiKTtcclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8aDE+Q3JlYXRlLWEtZnJpZW5kPC9oMT5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICB7LyogPGEgaHJlZj1cIiN1cFwiPlN0YXJ0PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI3RoZUZvcm1cIj5DaGF0PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCI+QWJvdXQ8L2E+ICovfVxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLm1pZH0+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMjMvMDMvMDYvMjEvMTYvYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UtNzgzNDQ2N185NjBfNzIwLmpwZ1wiIGFsdD1cImFpXCIvPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy50aGVGb3JtfT5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hhdFwiIGNsYXNzTmFtZT17c3R5bGVzLmNoYXR9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9IGlkPVwiY2hhdFwiPntyZXN1bHR9PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0aGVQcm9tcHRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlIHRoZSBib3RcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIvPlxyXG4gICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hYm91dH0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8aDI+QWJvdXQgb3VyIHByb2plY3Q8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTbyBmb3Igb3VyIEFQSSBwcm9qZWN0IHdlIGhhdmUgZGVjaWRlZCB0byBtYWtlIGEgc2l0ZSB3aXRoIGFuIGluLWJ1aWx0IGNoYXRib3QuIDxici8+XHJcbiAgICAgICAgICAgICAgVGhlIGNoYXRib3QgbW9kZWwgaXMgdGV4dC1iYWJiYWdlLTAwMSBhbmQgaXMgcHJvdmlkZWQgYnkgT3BlbkFJIC0gdGhlIGNvbXBhbnkgdGhhdCBjcmVhdGVkIHRoZSBmYW1vdXMgQ2hhdEdQVC4gPGJyLz5cclxuICAgICAgICAgICAgICBXZSBoYXZlIGFsc28gZGVjaWRlZCB3ZSB3YW50ZWQgdG8gbGVhcm4gc29tZXRoaW5nIG5ldyBhbmQgY2hhbGxlbmdlIG91cnNlbHZlcyBhIGJpdCwgc28gdGhlIGVudGlyZSB3ZWJzaXRlIGlzIGdlbmVyYXRlZCB1c2luZyBSZWFjdEpTLiA8YnIvPlxyXG4gICAgICAgICAgICAgIE15IGpvYiB3YXMgbWFpbmx5IHRvIGNyZWF0ZSB0aGUgc3RydWN0cmUgb2YgdGhlIHdlYnNpdGUgYW5kIHRvIHBsdWcgdGhlIGJhYmJhZ2UgaW50byBpdC4gQWx0aG91Z2ggdGhlIGpvYiB3YXNuJ3QgZWFzeSAoQVBJIGtleSByb3RhdGlvbiB3YXMgc28gYW5ub3lpbmcpICBcclxuICAgICAgICAgICAgICBJIGRpZCBtYW5hZ2UgdG8gZG8gaXQuIEkgZ290IHRoZSBtb3N0IHVzZWZ1bCBpbmZvcm1hdGlvbiBmcm9tIHlvdXR1YmUgdHV0b3JpYWxzIGFuZCBPcGVuQUkgQXBpIGRvY3VtZW50YXRpb24gYXMgd2VsbCBhcyB0aGVpciBvcGVuc291cmNlIHRlc3Qgd2Vic2l0ZS4gIDxici8+XHJcbiAgICAgICAgICAgICAgVGhlIENTUyAoZG9uZSBtb3N0bHkgYnkgS2FtaWwpIGlzIGEgbW9kdWxlIC0gZXZlcnkgc2VsZWN0b3IgaW5zaWRlIGl0IGhhZCB0byBiZWdpbiB3aXRoIGNsYXNzIG9yIGlkLiA8YnIvPlxyXG4gICAgICAgICAgICAgIEJlY2F1c2Ugb3VyIHByb2plY3QgaXMgbWFkZSBpbiBSZWFjdCBhbmQgb3VyIENTUyBpcyBhIG1vZHVsZSBvdXIgY29kZSBjYW4gYmUgdXNlZCBub3Qgb25seSBhcyBhIHdlYnNpdGUgb2YgaXRzIG93biBidXQgYWxzbyBhcyBhbiBlbGVtZW50IG9mIGEgYmlnZ2VyIG9uZS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICBJbWFnZXMgYW5kIGNoYXQgcHJvdmlkZWQgYnkgT3BlbkFJIEFwaSBcclxuICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZSIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsIm1lc3NhZ2VJbnB1dCIsInNldE1lc3NhZ2VJbnB1dCIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJjaGF0IiwiaW5uZXJUZXh0IiwiaW5uZXJIVE1MIiwidGhlUHJvbXB0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsIkVycm9yIiwiY29uc29sZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImhlYWRlciIsImgxIiwibmF2IiwibGluayIsInNlY3Rpb24iLCJtaWQiLCJhcnRpY2xlIiwiYm94IiwiYnIiLCJpbWciLCJzcmMiLCJhbHQiLCJmb3JtIiwidGhlRm9ybSIsImlkIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYWJvdXQiLCJoMiIsInAiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});