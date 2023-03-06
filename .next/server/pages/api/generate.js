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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const message = req.body.message || \"\";\n    if (message.trim().length === 0) {\n        console.log(message); //dont delete this line! it doesnt work without it for some reason!\n        res.status(400).json({\n            error: {\n                message: \"Cannot send an empty message\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: message,\n            temperature: 0.6\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n} // function generatePrompt(message) {\n //   return `You are a friendly and talkative chatbot. Here is the entire conversation:\n // ${message}\n // `;\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN6Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQSxVQUFVTCxJQUFJTSxJQUFJLENBQUNELE9BQU8sSUFBSTtJQUNwQyxJQUFJQSxRQUFRRSxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQy9CQyxRQUFRQyxHQUFHLENBQUNMLFVBQVUsbUVBQW1FO1FBQ3pGSixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNTSxhQUFhLE1BQU1aLE9BQU9hLGdCQUFnQixDQUFDO1lBQy9DQyxPQUFPO1lBQ1BDLFFBQVFUO1lBQ1JVLGFBQWE7UUFDZjtRQUNBZCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVhLFFBQVFMLFdBQVdNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUFDO0lBQ2pFLEVBQUUsT0FBTWYsT0FBTztRQUNiLElBQUlBLE1BQU1nQixRQUFRLEVBQUU7WUFDbEJYLFFBQVFMLEtBQUssQ0FBQ0EsTUFBTWdCLFFBQVEsQ0FBQ2xCLE1BQU0sRUFBRUUsTUFBTWdCLFFBQVEsQ0FBQ0gsSUFBSTtZQUN4RGhCLElBQUlDLE1BQU0sQ0FBQ0UsTUFBTWdCLFFBQVEsQ0FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxNQUFNZ0IsUUFBUSxDQUFDSCxJQUFJO1FBQzVELE9BQU87WUFDTFIsUUFBUUwsS0FBSyxDQUFDLENBQUMsK0JBQStCLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1lBQy9ESixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsT0FBTztvQkFDTEMsU0FBUztnQkFDWDtZQUNGO1FBQ0YsQ0FBQztJQUNIO0FBQ0YsQ0FBQyxDQUVELHFDQUFxQztDQUNyQyx1RkFBdUY7Q0FDdkYsYUFBYTtDQUNiLEtBQUs7Q0FDTCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcz82MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcclxufSk7XHJcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XHJcbiAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJPcGVuQUkgQVBJIGtleSBub3QgY29uZmlndXJlZCwgcGxlYXNlIGZvbGxvdyBpbnN0cnVjdGlvbnMgaW4gUkVBRE1FLm1kXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWVzc2FnZSA9IHJlcS5ib2R5Lm1lc3NhZ2UgfHwgJyc7XHJcbiAgaWYgKG1lc3NhZ2UudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7IC8vZG9udCBkZWxldGUgdGhpcyBsaW5lISBpdCBkb2VzbnQgd29yayB3aXRob3V0IGl0IGZvciBzb21lIHJlYXNvbiFcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBtZXNzYWdlOiBcIkNhbm5vdCBzZW5kIGFuIGVtcHR5IG1lc3NhZ2VcIixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcclxuICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxyXG4gICAgICBwcm9tcHQ6IG1lc3NhZ2UsXHJcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjYsXHJcbiAgICB9KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xyXG4gIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2l0aCBPcGVuQUkgQVBJIHJlcXVlc3Q6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC4nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBnZW5lcmF0ZVByb21wdChtZXNzYWdlKSB7XHJcbi8vICAgcmV0dXJuIGBZb3UgYXJlIGEgZnJpZW5kbHkgYW5kIHRhbGthdGl2ZSBjaGF0Ym90LiBIZXJlIGlzIHRoZSBlbnRpcmUgY29udmVyc2F0aW9uOlxyXG4vLyAke21lc3NhZ2V9XHJcbi8vIGA7XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImJvZHkiLCJ0cmltIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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