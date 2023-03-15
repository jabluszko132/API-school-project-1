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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [messageInput, setMessageInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function onSubmit(event) {\n        setResult(chat.innerText + \"User: \" + messageInput);\n        chat.innerHTML += \"User: \" + messageInput;\n        // console.log(event);\n        setMessageInput(result + thePrompt.value);\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    message: messageInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(chat.innerText + \"Bot: \" + data.result);\n            chat.innerHTML += \"<br>Bot: \" + data.result;\n            setMessageInput(\"\");\n        } catch (error) {\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create-a-friend\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().link)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().mid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().box),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"https://cdn.pixabay.com/photo/2023/03/06/21/16/artificial-intelligence-7834467_960_720.jpg\",\n                                alt: \"ai\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: onSubmit,\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().theForm),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().chat)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"thePrompt\",\n                                        type: \"text\",\n                                        name: \"message\",\n                                        placeholder: \"Message the bot\",\n                                        value: messageInput,\n                                        onChange: (e)=>setMessageInput(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"submit\",\n                                        value: \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().about),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"About our project\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"So for our API project we have decided to make a site with an in-built chatbot. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 95\n                                    }, this),\n                                    \"The chatbot model is text-babbage-001 and is provided by OpenAI - the company that created the famous ChatGPT. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 126\n                                    }, this),\n                                    \"We have also decided we wanted to learn something new and challenge ourselves a bit, so the entire website is generated using ReactJS. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 150\n                                    }, this),\n                                    \"My job was mainly to create the structre of the website and to plug the babbage into it. Although the job wasn't easy (API key rotation was so annoying) I did manage to do it. I got the most useful information from youtube tutorials and OpenAI Api documentation as well as their opensource test website.  \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 167\n                                    }, this),\n                                    \"The CSS (done mostly by Kamil) is a module - every selector inside it had to begin with class or id. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 116\n                                    }, this),\n                                    \"Because our project is made in React and our CSS is a module our code can be used not only as a website of its own but also as an element of a bigger one.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"Images and chat provided by OpenAI Api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\swiec\\\\OneDrive\\\\Pulpit\\\\github\\\\API-school-project-1\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OzT/5TGie+XogSo057pL6ArIA5Y=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDUztBQUNFO0FBRXpCLFNBQVNJLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUdyQyxlQUFlTyxTQUFTQyxLQUFLLEVBQUU7UUFDN0JGLFVBQVVHLEtBQUtDLFNBQVMsR0FBQyxXQUFTUDtRQUNsQ00sS0FBS0UsU0FBUyxJQUFFLFdBQVNSO1FBQ3pCLHNCQUFzQjtRQUN0QkMsZ0JBQWdCQyxTQUFTTyxVQUFVQyxLQUFLO1FBQ3hDTCxNQUFNTSxjQUFjO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO2dCQUM1Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLFNBQVNuQjtnQkFBYTtZQUMvQztZQUVBLE1BQU1vQixPQUFPLE1BQU1SLFNBQVNTLElBQUk7WUFDaEMsSUFBSVQsU0FBU1UsTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLE1BQU1GLEtBQUtHLEtBQUssSUFBSSxJQUFJQyxNQUFNLDhCQUE4QyxPQUFoQlosU0FBU1UsTUFBTSxHQUFJO1lBQ2pGLENBQUM7WUFDRG5CLFVBQVVHLEtBQUtDLFNBQVMsR0FBQyxVQUFVYSxLQUFLbEIsTUFBTTtZQUM5Q0ksS0FBS0UsU0FBUyxJQUFJLGNBQVlZLEtBQUtsQixNQUFNO1lBQ3pDRCxnQkFBZ0I7UUFDbEIsRUFBRSxPQUFNc0IsT0FBTztZQUNiRSxRQUFRRixLQUFLLENBQUNBO1lBQ2RHLE1BQU1ILE1BQU1KLE9BQU87UUFDckI7SUFDRjtJQUNBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFXOUIsK0RBQVc7OzBCQUN6Qiw4REFBQ2dDOztrQ0FDQyw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUlKLFdBQVc5QiwrREFBVzs7Ozs7Ozs7Ozs7OzBCQU03Qiw4REFBQ29DO2dCQUFRTixXQUFXOUIsOERBQVU7O2tDQUM1Qiw4REFBQ3NDO3dCQUFRUixXQUFXOUIsOERBQVU7OzBDQUMxQiw4REFBQ3dDOzs7OzswQ0FDRCw4REFBQ0E7Ozs7OzBDQUNELDhEQUFDQztnQ0FBSUMsS0FBSTtnQ0FBNkZDLEtBQUk7Ozs7OzswQ0FDMUcsOERBQUNIOzs7OzswQ0FDRCw4REFBQ0k7Z0NBQUt0QyxVQUFVQTtnQ0FBVXdCLFdBQVc5QixrRUFBYzs7a0RBQ2pELDhEQUFDNkI7d0NBQUlDLFdBQVc5QiwrREFBVzs7Ozs7O2tEQUUzQiw4REFBQ3dDOzs7OztrREFFRCw4REFBQ007d0NBQ0NDLElBQUc7d0NBQ0hDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLGFBQVk7d0NBQ1p0QyxPQUFPVjt3Q0FDUGlELFVBQVUsQ0FBQ0MsSUFBTWpELGdCQUFnQmlELEVBQUVDLE1BQU0sQ0FBQ3pDLEtBQUs7Ozs7OztrREFFakQsOERBQUNrQzt3Q0FBTUUsTUFBSzt3Q0FBU3BDLE9BQU07Ozs7OztrREFDM0IsOERBQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1AsOERBQUNGO3dCQUFRUixXQUFXOUIsZ0VBQVk7OzBDQUM1Qiw4REFBQ3dDOzs7OzswQ0FDRCw4REFBQ2U7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7O29DQUFFO2tEQUMrRSw4REFBQ2hCOzs7OztvQ0FBSTtrREFDMEIsOERBQUNBOzs7OztvQ0FBSTtrREFDbUIsOERBQUNBOzs7OztvQ0FBSTtrREFFWSw4REFBQ0E7Ozs7O29DQUFJO2tEQUN4RCw4REFBQ0E7Ozs7O29DQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwSCw4REFBQ2lCOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFPWixDQUFDO0dBdEZ1QnhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2UsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbWVzc2FnZUlucHV0LCBzZXRNZXNzYWdlSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgIHNldFJlc3VsdChjaGF0LmlubmVyVGV4dCtcIlVzZXI6IFwiK21lc3NhZ2VJbnB1dCk7XHJcbiAgICBjaGF0LmlubmVySFRNTCs9XCJVc2VyOiBcIittZXNzYWdlSW5wdXQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBzZXRNZXNzYWdlSW5wdXQocmVzdWx0ICsgdGhlUHJvbXB0LnZhbHVlKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogbWVzc2FnZUlucHV0IH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRSZXN1bHQoY2hhdC5pbm5lclRleHQrXCJCb3Q6IFwiICsgZGF0YS5yZXN1bHQpO1xyXG4gICAgICBjaGF0LmlubmVySFRNTCArPSBcIjxicj5Cb3Q6IFwiK2RhdGEucmVzdWx0O1xyXG4gICAgICBzZXRNZXNzYWdlSW5wdXQoXCJcIik7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPkNyZWF0ZS1hLWZyaWVuZDwvaDE+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIjdXBcIj5TdGFydDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiN0aGVGb3JtXCI+Q2hhdDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPiAqL31cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5taWR9PlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIzLzAzLzA2LzIxLzE2L2FydGlmaWNpYWwtaW50ZWxsaWdlbmNlLTc4MzQ0NjdfOTYwXzcyMC5qcGdcIiBhbHQ9XCJhaVwiLz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMudGhlRm9ybX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0fT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fSBpZD1cImNoYXRcIj57cmVzdWx0fTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGlkPVwidGhlUHJvbXB0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZSB0aGUgYm90XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2VJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiLz5cclxuICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPC9mb3JtPiBcclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXR9PlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGgyPkFib3V0IG91ciBwcm9qZWN0PC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgU28gZm9yIG91ciBBUEkgcHJvamVjdCB3ZSBoYXZlIGRlY2lkZWQgdG8gbWFrZSBhIHNpdGUgd2l0aCBhbiBpbi1idWlsdCBjaGF0Ym90LiA8YnIvPlxyXG4gICAgICAgICAgICAgIFRoZSBjaGF0Ym90IG1vZGVsIGlzIHRleHQtYmFiYmFnZS0wMDEgYW5kIGlzIHByb3ZpZGVkIGJ5IE9wZW5BSSAtIHRoZSBjb21wYW55IHRoYXQgY3JlYXRlZCB0aGUgZmFtb3VzIENoYXRHUFQuIDxici8+XHJcbiAgICAgICAgICAgICAgV2UgaGF2ZSBhbHNvIGRlY2lkZWQgd2Ugd2FudGVkIHRvIGxlYXJuIHNvbWV0aGluZyBuZXcgYW5kIGNoYWxsZW5nZSBvdXJzZWx2ZXMgYSBiaXQsIHNvIHRoZSBlbnRpcmUgd2Vic2l0ZSBpcyBnZW5lcmF0ZWQgdXNpbmcgUmVhY3RKUy4gPGJyLz5cclxuICAgICAgICAgICAgICBNeSBqb2Igd2FzIG1haW5seSB0byBjcmVhdGUgdGhlIHN0cnVjdHJlIG9mIHRoZSB3ZWJzaXRlIGFuZCB0byBwbHVnIHRoZSBiYWJiYWdlIGludG8gaXQuIEFsdGhvdWdoIHRoZSBqb2Igd2Fzbid0IGVhc3kgKEFQSSBrZXkgcm90YXRpb24gd2FzIHNvIGFubm95aW5nKSAgXHJcbiAgICAgICAgICAgICAgSSBkaWQgbWFuYWdlIHRvIGRvIGl0LiBJIGdvdCB0aGUgbW9zdCB1c2VmdWwgaW5mb3JtYXRpb24gZnJvbSB5b3V0dWJlIHR1dG9yaWFscyBhbmQgT3BlbkFJIEFwaSBkb2N1bWVudGF0aW9uIGFzIHdlbGwgYXMgdGhlaXIgb3BlbnNvdXJjZSB0ZXN0IHdlYnNpdGUuICA8YnIvPlxyXG4gICAgICAgICAgICAgIFRoZSBDU1MgKGRvbmUgbW9zdGx5IGJ5IEthbWlsKSBpcyBhIG1vZHVsZSAtIGV2ZXJ5IHNlbGVjdG9yIGluc2lkZSBpdCBoYWQgdG8gYmVnaW4gd2l0aCBjbGFzcyBvciBpZC4gPGJyLz5cclxuICAgICAgICAgICAgICBCZWNhdXNlIG91ciBwcm9qZWN0IGlzIG1hZGUgaW4gUmVhY3QgYW5kIG91ciBDU1MgaXMgYSBtb2R1bGUgb3VyIGNvZGUgY2FuIGJlIHVzZWQgbm90IG9ubHkgYXMgYSB3ZWJzaXRlIG9mIGl0cyBvd24gYnV0IGFsc28gYXMgYW4gZWxlbWVudCBvZiBhIGJpZ2dlciBvbmUuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgSW1hZ2VzIGFuZCBjaGF0IHByb3ZpZGVkIGJ5IE9wZW5BSSBBcGkgXHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2UiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJtZXNzYWdlSW5wdXQiLCJzZXRNZXNzYWdlSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwiY2hhdCIsImlubmVyVGV4dCIsImlubmVySFRNTCIsInRoZVByb21wdCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJFcnJvciIsImNvbnNvbGUiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoZWFkZXIiLCJoMSIsIm5hdiIsImxpbmsiLCJzZWN0aW9uIiwibWlkIiwiYXJ0aWNsZSIsImJveCIsImJyIiwiaW1nIiwic3JjIiwiYWx0IiwiZm9ybSIsInRoZUZvcm0iLCJpbnB1dCIsImlkIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImFib3V0IiwiaDIiLCJwIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});