/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"index_main__3wZvj\",\n\t\"icon\": \"index_icon__CgRrC\",\n\t\"result\": \"index_result__66e57\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzPzQ4MzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImluZGV4X21haW5fXzN3WnZqXCIsXG5cdFwiaWNvblwiOiBcImluZGV4X2ljb25fX0NnUnJDXCIsXG5cdFwicmVzdWx0XCI6IFwiaW5kZXhfcmVzdWx0X182NmU1N1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const [animalInput, setAnimalInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        console.log(event);\n        setAnimalInput(chat.innerText + \"\\n\" + thePrompt.value);\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    animal: animalInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(`Request failed with status ${response.status}`);\n            }\n            setResult(data.result);\n            setAnimalInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    //test\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create-a-friend\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"b\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"c\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/320px-A_black_image.jpg\",\n                        alt: \"ai generated art\",\n                        id: \"generatedImg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"thePrompt\",\n                                type: \"text\",\n                                name: \"animal\",\n                                placeholder: \"Message the bot\",\n                                value: animalInput,\n                                onChange: (e)=>setAnimalInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 53,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate names\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 12\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),\n                                id: \"chat\",\n                                children: result\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 12\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                children: \"Images and chat provided by OpenAI Api\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\OneDrive\\\\Pulpit\\\\API-school-project-1\\\\pages\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNJO0FBQ087QUFFekIsU0FBU0csT0FBTztJQUM3QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQTtJQUVwQyxlQUFlTyxTQUFTQyxLQUFLLEVBQUU7UUFDN0JDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWkosZUFBZU8sS0FBS0MsU0FBUyxHQUFFLE9BQU1DLFVBQVVDLEtBQUs7UUFDcEROLE1BQU1PLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxpQkFBaUI7Z0JBQzVDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsUUFBUXBCO2dCQUFZO1lBQzdDO1lBRUEsTUFBTXFCLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQyxJQUFJVCxTQUFTVSxNQUFNLEtBQUssS0FBSztnQkFDM0IsTUFBTUYsS0FBS0csS0FBSyxJQUFJLElBQUlDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRVosU0FBU1UsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNqRixDQUFDO1lBRURwQixVQUFVa0IsS0FBS25CLE1BQU07WUFDckJELGVBQWU7UUFDakIsRUFBRSxPQUFNdUIsT0FBTztZQUNiLDJEQUEyRDtZQUMzRGxCLFFBQVFrQixLQUFLLENBQUNBO1lBQ2RFLE1BQU1GLE1BQU1HLE9BQU87UUFDckI7SUFDRjtJQUNGLE1BQU07SUFDSixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDOzswQ0FDRyw4REFBQ0M7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHWCw4REFBQ0M7Ozs7OzBCQUdELDhEQUFDQTs7a0NBQ0csOERBQUNDO3dCQUFJQyxLQUFJO3dCQUFzR0MsS0FBSTt3QkFBbUJDLElBQUc7Ozs7OztrQ0FFekksOERBQUNDO3dCQUFLbEMsVUFBVUE7OzBDQUNiLDhEQUFDbUM7Z0NBQ0NGLElBQUc7Z0NBQ0hHLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1ovQixPQUFPWDtnQ0FDUDJDLFVBQVUsQ0FBQ0MsSUFBTTNDLGVBQWUyQyxFQUFFQyxNQUFNLENBQUNsQyxLQUFLOzs7Ozs7MENBRWhELDhEQUFDNEI7Z0NBQU1DLE1BQUs7Z0NBQVM3QixPQUFNOzs7Ozs7MENBQzNCLDhEQUFDaUI7Z0NBQUlrQixXQUFXaEQsaUVBQWE7Z0NBQUV1QyxJQUFHOzBDQUFRbkM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHakQsOERBQUM2QzswQkFBTzs7Ozs7Ozs7Ozs7O0FBZ0NaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbYW5pbWFsSW5wdXQsIHNldEFuaW1hbElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgc2V0QW5pbWFsSW5wdXQoY2hhdC5pbm5lclRleHQgK1wiXFxuXCIrIHRoZVByb21wdC52YWx1ZSk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFuaW1hbDogYW5pbWFsSW5wdXQgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xyXG4gICAgICBzZXRBbmltYWxJbnB1dChcIlwiKTtcclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgLy8gQ29uc2lkZXIgaW1wbGVtZW50aW5nIHlvdXIgb3duIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGhlcmVcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuLy90ZXN0XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPkNyZWF0ZS1hLWZyaWVuZDwvaDE+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPGE+YTwvYT5cclxuICAgICAgICAgICAgPGE+YjwvYT5cclxuICAgICAgICAgICAgPGE+YzwvYT5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGFydGljbGU+XHJcbiAgICAgICAgXHJcbiAgICA8L2FydGljbGU+XHJcbiAgICA8YXJ0aWNsZT5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNC80OS9BX2JsYWNrX2ltYWdlLmpwZy8zMjBweC1BX2JsYWNrX2ltYWdlLmpwZ1wiIGFsdD1cImFpIGdlbmVyYXRlZCBhcnRcIiBpZD1cImdlbmVyYXRlZEltZ1wiLz5cclxuICAgICAgICBcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgaWQ9XCJ0aGVQcm9tcHRcIlxyXG4gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgbmFtZT1cImFuaW1hbFwiXHJcbiAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2UgdGhlIGJvdFwiXHJcbiAgICAgICAgICAgICB2YWx1ZT17YW5pbWFsSW5wdXR9XHJcbiAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1hbElucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAvPlxyXG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBuYW1lc1wiLz5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0gaWQ9XCJjaGF0XCI+e3Jlc3VsdH08L2Rpdj5cclxuICAgICAgICAgPC9mb3JtPiBcclxuICAgIDwvYXJ0aWNsZT5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgSW1hZ2VzIGFuZCBjaGF0IHByb3ZpZGVkIGJ5IE9wZW5BSSBBcGkgXHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gPGRpdj5cclxuICAgIC8vICAgPEhlYWQ+XHJcbiAgICAvLyAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cclxuICAgIC8vICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9kb2cucG5nXCIgLz5cclxuICAgIC8vICAgPC9IZWFkPlxyXG5cclxuICAgIC8vICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAvLyAgICAgPGltZyBzcmM9XCIvZG9nLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAvLyAgICAgPGgzPk5hbWUgbXkgcGV0PC9oMz5cclxuICAgIC8vICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgLy8gICAgICAgPGlucHV0XHJcbiAgICAvLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICAgICAgbmFtZT1cImFuaW1hbFwiXHJcbiAgICAvLyAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW4gYW5pbWFsXCJcclxuICAgIC8vICAgICAgICAgdmFsdWU9e2FuaW1hbElucHV0fVxyXG4gICAgLy8gICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1hbElucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgIC8vICAgICAgIC8+XHJcbiAgICAvLyAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgbmFtZXNcIiAvPlxyXG4gICAgLy8gICAgIDwvZm9ybT5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+e3Jlc3VsdH08L2Rpdj5cclxuICAgIC8vICAgPC9tYWluPlxyXG4gICAgLy8gPC9kaXY+fVxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJhbmltYWxJbnB1dCIsInNldEFuaW1hbElucHV0IiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjaGF0IiwiaW5uZXJUZXh0IiwidGhlUHJvbXB0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbmltYWwiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJkaXYiLCJoZWFkZXIiLCJoMSIsIm5hdiIsImEiLCJhcnRpY2xlIiwiaW1nIiwic3JjIiwiYWx0IiwiaWQiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();