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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const animal = req.body.animal || \"\";\n    if (animal.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Cannot send an empty message\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: animal,\n            temperature: 0.6\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(animal) {\n    return `You are a chatbot. Generate only your response to the given prompt. Here is the entire conversation:\r\n\r\nUser: \"Hi\"\r\nYou: \"Good morning\"\r\nUser: ${animal}\r\nYou:`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN6Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQyxTQUFTTixJQUFJTyxJQUFJLENBQUNELE1BQU0sSUFBSTtJQUNsQyxJQUFJQSxPQUFPRSxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQzlCUixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNSyxhQUFhLE1BQU1YLE9BQU9ZLGdCQUFnQixDQUFDO1lBQy9DQyxPQUFPO1lBQ1BDLFFBQVFQO1lBQ1JRLGFBQWE7UUFDZjtRQUNBYixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVZLFFBQVFMLFdBQVdNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUFDO0lBQ2pFLEVBQUUsT0FBTWQsT0FBTztRQUNiLGdFQUFnRTtRQUNoRSxJQUFJQSxNQUFNZSxRQUFRLEVBQUU7WUFDbEJDLFFBQVFoQixLQUFLLENBQUNBLE1BQU1lLFFBQVEsQ0FBQ2pCLE1BQU0sRUFBRUUsTUFBTWUsUUFBUSxDQUFDSCxJQUFJO1lBQ3hEZixJQUFJQyxNQUFNLENBQUNFLE1BQU1lLFFBQVEsQ0FBQ2pCLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxNQUFNZSxRQUFRLENBQUNILElBQUk7UUFDNUQsT0FBTztZQUNMSSxRQUFRaEIsS0FBSyxDQUFDLENBQUMsK0JBQStCLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1lBQy9ESixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsT0FBTztvQkFDTEMsU0FBUztnQkFDWDtZQUNGO1FBQ0YsQ0FBQztJQUNIO0FBQ0YsQ0FBQztBQUVELFNBQVNnQixlQUFlZixNQUFNLEVBQUU7SUFDOUIsT0FBTyxDQUFDO0FBTVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xyXG5cclxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxyXG59KTtcclxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBtZXNzYWdlOiBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBhbmltYWwgPSByZXEuYm9keS5hbmltYWwgfHwgJyc7XHJcbiAgaWYgKGFuaW1hbC50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJDYW5ub3Qgc2VuZCBhbiBlbXB0eSBtZXNzYWdlXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XHJcbiAgICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcclxuICAgICAgcHJvbXB0OiBhbmltYWwsXHJcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjYsXHJcbiAgICB9KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xyXG4gIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIC8vIENvbnNpZGVyIGFkanVzdGluZyB0aGUgZXJyb3IgaGFuZGxpbmcgbG9naWMgZm9yIHlvdXIgdXNlIGNhc2VcclxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2l0aCBPcGVuQUkgQVBJIHJlcXVlc3Q6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC4nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChhbmltYWwpIHtcclxuICByZXR1cm4gYFlvdSBhcmUgYSBjaGF0Ym90LiBHZW5lcmF0ZSBvbmx5IHlvdXIgcmVzcG9uc2UgdG8gdGhlIGdpdmVuIHByb21wdC4gSGVyZSBpcyB0aGUgZW50aXJlIGNvbnZlcnNhdGlvbjpcclxuXHJcblVzZXI6IFwiSGlcIlxyXG5Zb3U6IFwiR29vZCBtb3JuaW5nXCJcclxuVXNlcjogJHthbmltYWx9XHJcbllvdTpgO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJhbmltYWwiLCJib2R5IiwidHJpbSIsImxlbmd0aCIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInJlc3BvbnNlIiwiY29uc29sZSIsImdlbmVyYXRlUHJvbXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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