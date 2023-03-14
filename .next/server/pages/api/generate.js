"use strict";
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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const message = req.body.message || \"\";\n    if (message.trim().length === 0) {\n        console.log(message); //dont delete this line! it doesnt work without it for some reason!\n        res.status(400).json({\n            error: {\n                message: \"Cannot send an empty message\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"babbage\",\n            prompt: message,\n            temperature: 0.6\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN6Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQSxVQUFVTCxJQUFJTSxJQUFJLENBQUNELE9BQU8sSUFBSTtJQUNwQyxJQUFJQSxRQUFRRSxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQy9CQyxRQUFRQyxHQUFHLENBQUNMLFVBQVUsbUVBQW1FO1FBQ3pGSixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNTSxhQUFhLE1BQU1aLE9BQU9hLGdCQUFnQixDQUFDO1lBQy9DQyxPQUFPO1lBQ1BDLFFBQVFUO1lBQ1JVLGFBQWE7UUFDZjtRQUNBZCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVhLFFBQVFMLFdBQVdNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUFDO0lBQ2pFLEVBQUUsT0FBTWYsT0FBTztRQUNiLElBQUlBLE1BQU1nQixRQUFRLEVBQUU7WUFDbEJYLFFBQVFMLEtBQUssQ0FBQ0EsTUFBTWdCLFFBQVEsQ0FBQ2xCLE1BQU0sRUFBRUUsTUFBTWdCLFFBQVEsQ0FBQ0gsSUFBSTtZQUN4RGhCLElBQUlDLE1BQU0sQ0FBQ0UsTUFBTWdCLFFBQVEsQ0FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxNQUFNZ0IsUUFBUSxDQUFDSCxJQUFJO1FBQzVELE9BQU87WUFDTFIsUUFBUUwsS0FBSyxDQUFDLENBQUMsK0JBQStCLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1lBQy9ESixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsT0FBTztvQkFDTEMsU0FBUztnQkFDWDtZQUNGO1FBQ0YsQ0FBQztJQUNIO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXHJcbn0pO1xyXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgaWYgKCFjb25maWd1cmF0aW9uLmFwaUtleSkge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiT3BlbkFJIEFQSSBrZXkgbm90IGNvbmZpZ3VyZWQsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGluIFJFQURNRS5tZFwiLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2UgPSByZXEuYm9keS5tZXNzYWdlIHx8ICcnO1xyXG4gIGlmIChtZXNzYWdlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpOyAvL2RvbnQgZGVsZXRlIHRoaXMgbGluZSEgaXQgZG9lc250IHdvcmsgd2l0aG91dCBpdCBmb3Igc29tZSByZWFzb24hXHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJDYW5ub3Qgc2VuZCBhbiBlbXB0eSBtZXNzYWdlXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XHJcbiAgICAgIG1vZGVsOiBcImJhYmJhZ2VcIixcclxuICAgICAgcHJvbXB0OiBtZXNzYWdlLFxyXG4gICAgICB0ZW1wZXJhdHVyZTogMC42LFxyXG4gICAgfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcclxuICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdpdGggT3BlbkFJIEFQSSByZXF1ZXN0OiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIGR1cmluZyB5b3VyIHJlcXVlc3QuJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiYm9keSIsInRyaW0iLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwicmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();