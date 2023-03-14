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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function onSubmit(event) {\n        setResult(chat.innerText + \"User: \" + messageInput);\n        chat.innerHTML += \"User: \" + messageInput;\n        // console.log(event);\n        setMessageInput(result + thePrompt.value);\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    message: messageInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(chat.innerText + \"Bot: \" + data.result);\n            chat.innerHTML += \"<br>Bot: \" + data.result;\n            setMessageInput(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create-a-friend\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"link\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#up\",\n                                children: \"Start\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#theForm\",\n                                children: \"Chat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"about\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"About our project\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"So for our API project we have decided to make a site with an in-built chatbot. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 91\n                            }, this),\n                            \"The chatbot model is text-babbage-001 and is provided by OpenAI - the company that created the famous ChatGPT. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 122\n                            }, this),\n                            \"We have also decided we wanted to learn something new and challenge ourselves a bit, so the entire website is generated using ReactJS. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 146\n                            }, this),\n                            \"My job was mainly to create the structre of the website and to plug the babbage into it. Although the job wasn't easy (API key rotation was so annoying) I did manage to do it. I got the most useful informations from youtube tutorials and OpenAI Api documentation as well as their opensource test website.  \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 164\n                            }, this),\n                            \"The CSS (done mostly by Kamil) is a module - every selector inside it had to begin with class or id. \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 112\n                            }, this),\n                            \"Because our project is made in React and our CSS is a module our code can be used not only as a website of its own but also as an element of a bigger one.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://cdn.pixabay.com/photo/2023/03/06/21/16/artificial-intelligence-7834467_960_720.jpg\",\n                        alt: \"ai\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        className: \"theForm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 64,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"chat\",\n                                children: [\n                                    \"User: testowa konwersacja weź to p\\xf3źniej usuń\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    \"Bot: Ok, ale słuchaj: Ea ad cillum adipisicing aliquip ullamco veniam. Cillum et enim occaecat adipisicing et ad mollit pariatur. Dolore nulla aliqua Lorem ex et commodo. Sint pariatur velit irure Lorem velit mollit esse incididunt laboris fugiat aliquip enim officia. Aliqua in nisi dolore exercitation amet Lorem enim ullamco. Proident voluptate proident excepteur consequat aliquip.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"thePrompt\",\n                                type: \"text\",\n                                name: \"message\",\n                                placeholder: \"Message the bot\",\n                                value: messageInput,\n                                onChange: (e)=>setMessageInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"Images and chat provided by OpenAI Api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OzT/5TGie+XogSo057pL6ArIA5Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDUztBQUNFO0FBRXpCLFNBQVNJLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUdyQyxlQUFlTyxTQUFTQyxLQUFLLEVBQUU7UUFDN0JGLFVBQVVHLEtBQUtDLFNBQVMsR0FBQyxXQUFTUDtRQUNsQ00sS0FBS0UsU0FBUyxJQUFFLFdBQVNSO1FBQ3pCLHNCQUFzQjtRQUN0QkMsZ0JBQWdCQyxTQUFTTyxVQUFVQyxLQUFLO1FBQ3hDTCxNQUFNTSxjQUFjO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO2dCQUM1Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLFNBQVNuQjtnQkFBYTtZQUMvQztZQUVBLE1BQU1vQixPQUFPLE1BQU1SLFNBQVNTLElBQUk7WUFDaEMsSUFBSVQsU0FBU1UsTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLE1BQU1GLEtBQUtHLEtBQUssSUFBSSxJQUFJQyxNQUFNLDhCQUE4QyxPQUFoQlosU0FBU1UsTUFBTSxHQUFJO1lBQ2pGLENBQUM7WUFDRG5CLFVBQVVHLEtBQUtDLFNBQVMsR0FBQyxVQUFVYSxLQUFLbEIsTUFBTTtZQUM5Q0ksS0FBS0UsU0FBUyxJQUFJLGNBQVlZLEtBQUtsQixNQUFNO1lBQ3pDRCxnQkFBZ0I7UUFDbEIsRUFBRSxPQUFNc0IsT0FBTztZQUNiRSxRQUFRRixLQUFLLENBQUNBO1lBQ2RHLE1BQU1ILE1BQU1KLE9BQU87UUFDckI7SUFDRjtJQUNBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFXOUIsK0RBQVc7OzBCQUN6Qiw4REFBQ2dDOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUlKLFdBQVU7OzBDQUNYLDhEQUFDSztnQ0FBRUMsTUFBSzswQ0FBTTs7Ozs7OzBDQUNkLDhEQUFDRDtnQ0FBRUMsTUFBSzswQ0FBVzs7Ozs7OzBDQUNuQiw4REFBQ0Q7Z0NBQUVDLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHekIsOERBQUNDO2dCQUFRUCxXQUFVOztrQ0FDZiw4REFBQ1E7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7OzRCQUFFOzBDQUMrRSw4REFBQ0M7Ozs7OzRCQUFJOzBDQUMwQiw4REFBQ0E7Ozs7OzRCQUFJOzBDQUNtQiw4REFBQ0E7Ozs7OzRCQUFJOzBDQUVhLDhEQUFDQTs7Ozs7NEJBQUk7MENBQ3pELDhEQUFDQTs7Ozs7NEJBQUk7Ozs7Ozs7Ozs7Ozs7MEJBSWhILDhEQUFDSDs7a0NBQ0csOERBQUNJO3dCQUFJQyxLQUFJO3dCQUE2RkMsS0FBSTs7Ozs7O2tDQUMxRyw4REFBQ0g7Ozs7O2tDQUNELDhEQUFDSTt3QkFBS3RDLFVBQVVBO3dCQUFVd0IsV0FBVTs7MENBRWpDLDhEQUFDVTs7Ozs7MENBQ0QsOERBQUNYO2dDQUFJZ0IsSUFBRzs7b0NBQU87a0RBRWQsOERBQUNMOzs7OztvQ0FBSTs7Ozs7OzswQ0FHTiw4REFBQ0E7Ozs7OzBDQUVELDhEQUFDTTtnQ0FDQ0QsSUFBRztnQ0FDSEUsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWnJDLE9BQU9WO2dDQUNQZ0QsVUFBVSxDQUFDQyxJQUFNaEQsZ0JBQWdCZ0QsRUFBRUMsTUFBTSxDQUFDeEMsS0FBSzs7Ozs7OzBDQUVqRCw4REFBQ2tDO2dDQUFNQyxNQUFLO2dDQUFTbkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsQyw4REFBQ3lDOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFPWixDQUFDO0dBckZ1QnBEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2UsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbWVzc2FnZUlucHV0LCBzZXRNZXNzYWdlSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgIHNldFJlc3VsdChjaGF0LmlubmVyVGV4dCtcIlVzZXI6IFwiK21lc3NhZ2VJbnB1dCk7XHJcbiAgICBjaGF0LmlubmVySFRNTCs9XCJVc2VyOiBcIittZXNzYWdlSW5wdXQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBzZXRNZXNzYWdlSW5wdXQocmVzdWx0ICsgdGhlUHJvbXB0LnZhbHVlKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogbWVzc2FnZUlucHV0IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRSZXN1bHQoY2hhdC5pbm5lclRleHQrXCJCb3Q6IFwiICsgZGF0YS5yZXN1bHQpO1xyXG4gICAgICBjaGF0LmlubmVySFRNTCArPSBcIjxicj5Cb3Q6IFwiK2RhdGEucmVzdWx0O1xyXG4gICAgICBzZXRNZXNzYWdlSW5wdXQoXCJcIik7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPkNyZWF0ZS1hLWZyaWVuZDwvaDE+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJsaW5rXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjdXBcIj5TdGFydDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiN0aGVGb3JtXCI+Q2hhdDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICAgIDxoMj5BYm91dCBvdXIgcHJvamVjdDwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBTbyBmb3Igb3VyIEFQSSBwcm9qZWN0IHdlIGhhdmUgZGVjaWRlZCB0byBtYWtlIGEgc2l0ZSB3aXRoIGFuIGluLWJ1aWx0IGNoYXRib3QuIDxici8+XHJcbiAgICAgICAgICBUaGUgY2hhdGJvdCBtb2RlbCBpcyB0ZXh0LWJhYmJhZ2UtMDAxIGFuZCBpcyBwcm92aWRlZCBieSBPcGVuQUkgLSB0aGUgY29tcGFueSB0aGF0IGNyZWF0ZWQgdGhlIGZhbW91cyBDaGF0R1BULiA8YnIvPlxyXG4gICAgICAgICAgV2UgaGF2ZSBhbHNvIGRlY2lkZWQgd2Ugd2FudGVkIHRvIGxlYXJuIHNvbWV0aGluZyBuZXcgYW5kIGNoYWxsZW5nZSBvdXJzZWx2ZXMgYSBiaXQsIHNvIHRoZSBlbnRpcmUgd2Vic2l0ZSBpcyBnZW5lcmF0ZWQgdXNpbmcgUmVhY3RKUy4gPGJyLz5cclxuICAgICAgICAgIE15IGpvYiB3YXMgbWFpbmx5IHRvIGNyZWF0ZSB0aGUgc3RydWN0cmUgb2YgdGhlIHdlYnNpdGUgYW5kIHRvIHBsdWcgdGhlIGJhYmJhZ2UgaW50byBpdC4gQWx0aG91Z2ggdGhlIGpvYiB3YXNuJ3QgZWFzeSAoQVBJIGtleSByb3RhdGlvbiB3YXMgc28gYW5ub3lpbmcpICBcclxuICAgICAgICAgIEkgZGlkIG1hbmFnZSB0byBkbyBpdC4gSSBnb3QgdGhlIG1vc3QgdXNlZnVsIGluZm9ybWF0aW9ucyBmcm9tIHlvdXR1YmUgdHV0b3JpYWxzIGFuZCBPcGVuQUkgQXBpIGRvY3VtZW50YXRpb24gYXMgd2VsbCBhcyB0aGVpciBvcGVuc291cmNlIHRlc3Qgd2Vic2l0ZS4gIDxici8+XHJcbiAgICAgICAgICBUaGUgQ1NTIChkb25lIG1vc3RseSBieSBLYW1pbCkgaXMgYSBtb2R1bGUgLSBldmVyeSBzZWxlY3RvciBpbnNpZGUgaXQgaGFkIHRvIGJlZ2luIHdpdGggY2xhc3Mgb3IgaWQuIDxici8+XHJcbiAgICAgICAgICBCZWNhdXNlIG91ciBwcm9qZWN0IGlzIG1hZGUgaW4gUmVhY3QgYW5kIG91ciBDU1MgaXMgYSBtb2R1bGUgb3VyIGNvZGUgY2FuIGJlIHVzZWQgbm90IG9ubHkgYXMgYSB3ZWJzaXRlIG9mIGl0cyBvd24gYnV0IGFsc28gYXMgYW4gZWxlbWVudCBvZiBhIGJpZ2dlciBvbmUuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgPGFydGljbGU+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIzLzAzLzA2LzIxLzE2L2FydGlmaWNpYWwtaW50ZWxsaWdlbmNlLTc4MzQ0NjdfOTYwXzcyMC5qcGdcIiBhbHQ9XCJhaVwiLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cInRoZUZvcm1cIj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgIDxkaXYgaWQ9XCJjaGF0XCI+XHJcbiAgICAgICAgICAgIFVzZXI6IHRlc3Rvd2Ega29ud2Vyc2FjamEgd2XFuiB0byBww7PFum5pZWogdXN1xYRcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgQm90OiBPaywgYWxlIHPFgnVjaGFqOiBFYSBhZCBjaWxsdW0gYWRpcGlzaWNpbmcgYWxpcXVpcCB1bGxhbWNvIHZlbmlhbS4gQ2lsbHVtIGV0IGVuaW0gb2NjYWVjYXQgYWRpcGlzaWNpbmcgZXQgYWQgbW9sbGl0IHBhcmlhdHVyLiBEb2xvcmUgbnVsbGEgYWxpcXVhIExvcmVtIGV4IGV0IGNvbW1vZG8uIFNpbnQgcGFyaWF0dXIgdmVsaXQgaXJ1cmUgTG9yZW0gdmVsaXQgbW9sbGl0IGVzc2UgaW5jaWRpZHVudCBsYWJvcmlzIGZ1Z2lhdCBhbGlxdWlwIGVuaW0gb2ZmaWNpYS4gQWxpcXVhIGluIG5pc2kgZG9sb3JlIGV4ZXJjaXRhdGlvbiBhbWV0IExvcmVtIGVuaW0gdWxsYW1jby4gUHJvaWRlbnQgdm9sdXB0YXRlIHByb2lkZW50IGV4Y2VwdGV1ciBjb25zZXF1YXQgYWxpcXVpcC5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0gaWQ9XCJjaGF0XCI+e3Jlc3VsdH08L2Rpdj4gKi99XHJcbiAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICBpZD1cInRoZVByb21wdFwiXHJcbiAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgdGhlIGJvdFwiXHJcbiAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZUlucHV0fVxyXG4gICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIi8+XHJcbiAgICAgICAgIDwvZm9ybT4gXHJcbiAgICA8L2FydGljbGU+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgIEltYWdlcyBhbmQgY2hhdCBwcm92aWRlZCBieSBPcGVuQUkgQXBpIFxyXG4gICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwibWVzc2FnZUlucHV0Iiwic2V0TWVzc2FnZUlucHV0IiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsImNoYXQiLCJpbm5lclRleHQiLCJpbm5lckhUTUwiLCJ0aGVQcm9tcHQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJjb25zb2xlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaGVhZGVyIiwiaDEiLCJuYXYiLCJhIiwiaHJlZiIsImFydGljbGUiLCJoMiIsInAiLCJiciIsImltZyIsInNyYyIsImFsdCIsImZvcm0iLCJpZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});