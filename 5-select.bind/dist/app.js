/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../components/A/A.html.js":
/*!************************************!*\
  !*** ../../components/A/A.html.js ***!
  \************************************/
/***/ ((module) => {

eval("// auto generated based on components\\A\\A.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<a>${model.value}</a>`;\n}\n\n//# sourceURL=webpack:///../../components/A/A.html.js?");

/***/ }),

/***/ "../../components/A/A.js":
/*!*******************************!*\
  !*** ../../components/A/A.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = A();\r\n\r\nfunction A() {\r\n\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n    const userEvents = ['click'];\r\n\r\n    const api = {\r\n        userEvents,\r\n        create,\r\n        render\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, model, doc = document) {\r\n        model.value = component.encode(model.value, doc);\r\n        return __webpack_require__(/*! ./A.html.js */ \"../../components/A/A.html.js\")(e, view, model);\r\n    }\r\n\r\n    function render(e, view, model, doc = document) {\r\n        model.value = component.encode(model.value, doc);\r\n        const el = document.getElementById(view.id);\r\n        el.innerHTML = model.value;\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/A/A.js?");

/***/ }),

/***/ "../../components/Alert/Alert.html.js":
/*!********************************************!*\
  !*** ../../components/Alert/Alert.html.js ***!
  \********************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Alert\\Alert.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<div>\r\n    <div class=\"bg\"></div>\r\n    <div class=\"alert-box\">\r\n        <div class=\"alert-header\">\r\n            <h1>${model.value.title}</h1>\r\n        </div>\r\n        <div class=\"alert-body\">\r\n            <p>${model.value.content}</p>\r\n        </div>\r\n        <button data-key=\"ok-button\">OK</button>\r\n    </div>\r\n\r\n</div>`;\n}\n\n//# sourceURL=webpack:///../../components/Alert/Alert.html.js?");

/***/ }),

/***/ "../../components/Alert/Alert.js":
/*!***************************************!*\
  !*** ../../components/Alert/Alert.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = A();\r\n\r\nfunction A() {\r\n\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n    const userEvents = ['click'];\r\n\r\n    const api = {\r\n        userEvents,\r\n        create,\r\n        init,\r\n        render,\r\n        onUserEvent\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, model, doc = document) {\r\n        model.value.title = component.encode(model.value.title, doc);\r\n        model.value.content = component.encode(model.value.content, doc);\r\n        return __webpack_require__(/*! ./Alert.html.js */ \"../../components/Alert/Alert.html.js\")(e, view, model);\r\n    }\r\n\r\n\r\n    function init(e, view, model, doc = document) {\r\n\r\n    }\r\n\r\n    function render(e, view, model, doc = document) {\r\n\r\n    }\r\n\r\n    function onUserEvent(e, view, model) {\r\n        switch (e.target.dataset.key) {\r\n            case 'ok-button':\r\n                view.core.remove();\r\n\r\n                break;\r\n        }\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Alert/Alert.js?");

/***/ }),

/***/ "../../components/Button/Button.html.js":
/*!**********************************************!*\
  !*** ../../components/Button/Button.html.js ***!
  \**********************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Button\\Button.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<button>${model.value}</button>`;\n}\n\n//# sourceURL=webpack:///../../components/Button/Button.html.js?");

/***/ }),

/***/ "../../components/Button/Button.js":
/*!*****************************************!*\
  !*** ../../components/Button/Button.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = Button();\r\n\r\nfunction Button() {\r\n\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n    const userEvents = ['click'];\r\n\r\n    const api = {\r\n        userEvents,\r\n        create,\r\n        render,\r\n        onUserEvent\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, model, doc = document) {\r\n        model.value = component.encode(model.value, doc);\r\n        return __webpack_require__(/*! ./Button.html.js */ \"../../components/Button/Button.html.js\")(e, view, model);\r\n    }\r\n\r\n    function render(e, view, model, doc = document) {\r\n        switch (e.type) {\r\n            case 'click':\r\n                break;\r\n            default:\r\n                return;\r\n        }\r\n        model.value = component.encode(model.value, doc);\r\n        const el = document.getElementById(view.id);\r\n        el.innerHTML = model.value;\r\n    }\r\n\r\n    function onUserEvent(e, view, model, doc = document) {\r\n        view.dispatch\r\n            .filter(dis => dis.type === e.type)\r\n            .forEach(dis => view.notify(dis.name, dis.data))\r\n\r\n        return model.value;\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Button/Button.js?");

/***/ }),

/***/ "../../components/ClassNameSubscriber/ClassNameSubscriber.html.js":
/*!************************************************************************!*\
  !*** ../../components/ClassNameSubscriber/ClassNameSubscriber.html.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("// auto generated based on components\\ClassNameSubscriber\\ClassNameSubscriber.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<p class=\"${model.value}\">Listen to 'set-colour'</p>`;\n}\n\n//# sourceURL=webpack:///../../components/ClassNameSubscriber/ClassNameSubscriber.html.js?");

/***/ }),

/***/ "../../components/ClassNameSubscriber/ClassNameSubscriber.js":
/*!*******************************************************************!*\
  !*** ../../components/ClassNameSubscriber/ClassNameSubscriber.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = ClassNameSubscriber();\r\n\r\nfunction ClassNameSubscriber() {\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n\r\n    const api = {\r\n        create,\r\n        init,\r\n        render\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n\r\n    function create(e, view, model, doc = document) {\r\n\r\n        return __webpack_require__(/*! ./ClassNameSubscriber.html.js */ \"../../components/ClassNameSubscriber/ClassNameSubscriber.html.js\")(e, view, model);\r\n    }\r\n\r\n    function init(e, view, model) {\r\n        view.subscribe('set-colour', setColourFn);\r\n\r\n        function setColourFn(data) {\r\n            _setColour(data, view, model);\r\n        }\r\n    }\r\n\r\n    function render(e, view, model, doc = document) {\r\n        switch (e.type) {\r\n            case 'click':\r\n            case 'event':\r\n                break;\r\n            default:\r\n                return;\r\n        }\r\n        const el = document.getElementById(view.id);\r\n        el.innerHTML = model.value.name;\r\n        el.className = model.value.css;\r\n    }\r\n\r\n    function _setColour(data, view, model) {\r\n        model.value = data;\r\n        render({\r\n            type: 'event'\r\n        }, view, model)\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/ClassNameSubscriber/ClassNameSubscriber.js?");

/***/ }),

/***/ "../../components/Hx/Hx.html.js":
/*!**************************************!*\
  !*** ../../components/Hx/Hx.html.js ***!
  \**************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Hx\\Hx.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<H${value.type}>${value.html}</H${value.type}>`;\n}\n\n//# sourceURL=webpack:///../../components/Hx/Hx.html.js?");

/***/ }),

/***/ "../../components/Hx/Hx.js":
/*!*********************************!*\
  !*** ../../components/Hx/Hx.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = H1();\r\n\r\nfunction H1() {\r\n\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n\r\n    const api = {\r\n        create,\r\n        render\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, viewModel, model, doc = document) {\r\n        const content = {\r\n            html: component.encode(model.value, doc),\r\n            type: viewModel.value\r\n        }\r\n\r\n        return __webpack_require__(/*! ./Hx.html.js */ \"../../components/Hx/Hx.html.js\")(content);\r\n    }\r\n\r\n    function render(e, view, viewModel, model, doc = document) {\r\n        const html = component.encode(model.value, doc);\r\n        const el = document.getElementById(view.id);\r\n        el.innerHTML = html;\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Hx/Hx.js?");

/***/ }),

/***/ "../../components/Increment/Increment.html.js":
/*!****************************************************!*\
  !*** ../../components/Increment/Increment.html.js ***!
  \****************************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Increment\\Increment.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<p>${model.value}</p>`;\n}\n\n//# sourceURL=webpack:///../../components/Increment/Increment.html.js?");

/***/ }),

/***/ "../../components/Increment/Increment.js":
/*!***********************************************!*\
  !*** ../../components/Increment/Increment.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = Increment();\r\n\r\nfunction Increment() {\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n    const userEvents = ['click'];\r\n\r\n    const renderEvents = ['click'];\r\n    const api = {\r\n        userEvents,\r\n        create,\r\n        render,\r\n        onUserEvent,\r\n        renderEvents\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, model, doc = document) {\r\n        model.value = component.encode(model.value, doc);\r\n\r\n        return __webpack_require__(/*! ./Increment.html.js */ \"../../components/Increment/Increment.html.js\")(e, view, model);\r\n    }\r\n\r\n    function render(e, view, model, doc = document) {\r\n        model.value = component.encode(model.value, doc);\r\n        const el = document.getElementById(view.id);\r\n        el.innerHTML = model.value;\r\n    }\r\n\r\n    function onUserEvent(e, view, model, doc = document) {\r\n        switch (e.type) {\r\n            case 'click':\r\n                return model.value + 1;\r\n        }\r\n        return model.value;\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Increment/Increment.js?");

/***/ }),

/***/ "../../components/Paragraph/Paragraph.js":
/*!***********************************************!*\
  !*** ../../components/Paragraph/Paragraph.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = Paragraph();\r\n\r\nfunction Paragraph() {\r\n    const component = __webpack_require__(/*! ../../core/abstract/component */ \"../../core/abstract/component.js\");\r\n\r\n    const renderEvents = [];\r\n\r\n    const api = {\r\n        create,\r\n        render,\r\n        renderEvents\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, viewModel, model, doc = document) {\r\n        const html = component.encode(model.value, doc);\r\n\r\n        return __webpack_require__(/*! ./paragraph.html.js */ \"../../components/Paragraph/paragraph.html.js\")(html);\r\n    }\r\n\r\n    function render(e, view, viewModel, model, doc = document) {\r\n        const html = component.encode(model.value, doc);\r\n        const el = document.getElementById(view.id);\r\n        el.innerHTML = html;\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Paragraph/Paragraph.js?");

/***/ }),

/***/ "../../components/Paragraph/paragraph.html.js":
/*!****************************************************!*\
  !*** ../../components/Paragraph/paragraph.html.js ***!
  \****************************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Paragraph\\Paragraph.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<p>${value}</p>`;\n}\n\n//# sourceURL=webpack:///../../components/Paragraph/paragraph.html.js?");

/***/ }),

/***/ "../../components/Pointer/Pointer.html.js":
/*!************************************************!*\
  !*** ../../components/Pointer/Pointer.html.js ***!
  \************************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Pointer\\Pointer.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<p style=\"top:view.top, left:view.left\" class=\"pointer\"></p>`;\n}\n\n//# sourceURL=webpack:///../../components/Pointer/Pointer.html.js?");

/***/ }),

/***/ "../../components/Pointer/Pointer.js":
/*!*******************************************!*\
  !*** ../../components/Pointer/Pointer.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = Pointer();\r\n\r\nfunction Pointer() {\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n    const documentEvents = ['mousemove'];\r\n\r\n    const api = {\r\n        documentEvents,\r\n        create,\r\n        render,\r\n        onDocumentEvent\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, model, win = window, doc = document) {\r\n        view.top = `${parseInt(win.innerHeight/2)}px`;\r\n        view.left = `${parseInt(doc.innerWidth/2)}px`;\r\n\r\n        return __webpack_require__(/*! ./Pointer.html.js */ \"../../components/Pointer/Pointer.html.js\")(e, view, model);\r\n    }\r\n\r\n    function render(e, view, model, doc = document) {\r\n        const el = document.getElementById(view.id);\r\n        el.style.top = `${e.clientY}px`;\r\n        el.style.left = `${e.clientX}px`;\r\n    }\r\n\r\n    function onDocumentEvent(e, view, model, doc = document) {\r\n        switch (e.type) {\r\n            case 'mousemove':\r\n                render(e, view, model, doc)\r\n                break;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Pointer/Pointer.js?");

/***/ }),

/***/ "../../components/Resize/Resize.html.js":
/*!**********************************************!*\
  !*** ../../components/Resize/Resize.html.js ***!
  \**********************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Resize\\Resize.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<div class=\"wrapper\">\r\n    <div class=\"wrapper\">\r\n        <span>W:</span> <span data-key=\"width\"></span>\r\n    </div>\r\n    <div class=\"wrapper\">\r\n        <span>H:</span> <span data-key=\"height\"></span>\r\n    </div>\r\n</div>`;\n}\n\n//# sourceURL=webpack:///../../components/Resize/Resize.html.js?");

/***/ }),

/***/ "../../components/Resize/Resize.js":
/*!*****************************************!*\
  !*** ../../components/Resize/Resize.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = Resize();\r\n\r\nfunction Resize() {\r\n    const component = __webpack_require__(/*! ../../core/abstract/Component */ \"../../core/abstract/Component.js\");\r\n    const windowEvents = ['resize'];\r\n\r\n    const api = {\r\n        windowEvents,\r\n        create,\r\n        render,\r\n        onDocumentEvent\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, model, win = window, doc = document) {\r\n        return __webpack_require__(/*! ./Resize.html.js */ \"../../components/Resize/Resize.html.js\")(e, view, model);\r\n    }\r\n\r\n    function render(e, view, model, win = window, doc = document) {\r\n        const el = document.getElementById(view.id);\r\n        const wEl = el.querySelector('[data-key=\"width\"]');\r\n        const hEl = el.querySelector('[data-key=\"height\"]');\r\n\r\n        wEl.textContent = win.innerWidth;\r\n        hEl.textContent = win.innerHeight;\r\n\r\n        el.style.left = `${win.innerWidth/2 - wEl.clientHeight}px`;\r\n        el.style.top = `${win.innerHeight/2 - Math.max(wEl.clientWidth, hEl.clientWidth)/2}px`;\r\n\r\n    }\r\n\r\n    function onDocumentEvent(e, view, model, doc = document) {\r\n        switch (e.type) {\r\n            case 'mousemove':\r\n                render(e, view, model, doc)\r\n                break;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Resize/Resize.js?");

/***/ }),

/***/ "../../components/Select/Option.html.js":
/*!**********************************************!*\
  !*** ../../components/Select/Option.html.js ***!
  \**********************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Select\\option.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<option value=\"${value.value}\">${value.text}</option>`;\n}\n\n//# sourceURL=webpack:///../../components/Select/Option.html.js?");

/***/ }),

/***/ "../../components/Select/Select.html.js":
/*!**********************************************!*\
  !*** ../../components/Select/Select.html.js ***!
  \**********************************************/
/***/ ((module) => {

eval("// auto generated based on components\\Select\\Select.html\n\nmodule.exports =  create;\n\nfunction create(value) {\n\n   return `<select>${value}</select>`;\n}\n\n//# sourceURL=webpack:///../../components/Select/Select.html.js?");

/***/ }),

/***/ "../../components/Select/Select.js":
/*!*****************************************!*\
  !*** ../../components/Select/Select.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = Select();\r\n\r\nfunction Select() {\r\n    const component = __webpack_require__(/*! ../../core/abstract/component */ \"../../core/abstract/component.js\");\r\n    const userEvents = ['change'];\r\n\r\n    const api = {\r\n        userEvents,\r\n        create,\r\n        init,\r\n        render,\r\n        onUserEvent\r\n    }\r\n\r\n    return {\r\n        ...component,\r\n        ...api\r\n    }\r\n\r\n    function create(e, view, viewModel, model, doc = document) {\r\n        const value = _getOptions(viewModel.value);\r\n\r\n        return __webpack_require__(/*! ./Select.html.js */ \"../../components/Select/Select.html.js\")(value);\r\n    }\r\n\r\n    function init(e, view, viewModel, model, doc = document) {\r\n        const el = doc.getElementById(view.id);\r\n        el.value = model.value;\r\n    }\r\n\r\n    function render(e, view, viewModel, model, doc = document) {\r\n        const el = document.getElementById(view.id);\r\n        el.value = model.value;\r\n    }\r\n\r\n    function onUserEvent(e, view, viewModel, model, doc = document) {\r\n        const el = document.getElementById(view.id);\r\n\r\n        switch (e.type) {\r\n            case 'change':\r\n                return el.value;\r\n        }\r\n\r\n        return model.value;\r\n    }\r\n\r\n    function _getOptions(options) {\r\n        return options\r\n            .map(option => __webpack_require__(/*! ./Option.html.js */ \"../../components/Select/Option.html.js\")(option))\r\n            .join('');\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../components/Select/Select.js?");

/***/ }),

/***/ "../../components/factory.js":
/*!***********************************!*\
  !*** ../../components/factory.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// auto generated list of available components\n\nconst components = {\n    'A': __webpack_require__(/*! ./A/A.js */ \"../../components/A/A.js\"),\n'Alert': __webpack_require__(/*! ./Alert/Alert.js */ \"../../components/Alert/Alert.js\"),\n'Button': __webpack_require__(/*! ./Button/Button.js */ \"../../components/Button/Button.js\"),\n'ClassNameSubscriber': __webpack_require__(/*! ./ClassNameSubscriber/ClassNameSubscriber.js */ \"../../components/ClassNameSubscriber/ClassNameSubscriber.js\"),\n'Hx': __webpack_require__(/*! ./Hx/Hx.js */ \"../../components/Hx/Hx.js\"),\n'Increment': __webpack_require__(/*! ./Increment/Increment.js */ \"../../components/Increment/Increment.js\"),\n'Paragraph': __webpack_require__(/*! ./Paragraph/Paragraph.js */ \"../../components/Paragraph/Paragraph.js\"),\n'Pointer': __webpack_require__(/*! ./Pointer/Pointer.js */ \"../../components/Pointer/Pointer.js\"),\n'Resize': __webpack_require__(/*! ./Resize/Resize.js */ \"../../components/Resize/Resize.js\"),\n'Select': __webpack_require__(/*! ./Select/Select.js */ \"../../components/Select/Select.js\")\n};\n\nfunction get(key) {\n   if (components[key] == null) {\n     console.log('Component ' +key + ' not found')\n      return new components['Component']()\n   }\n\n   return components[key]\n}\n\nmodule.exports = {\n   get\n};\n\n\n//# sourceURL=webpack:///../../components/factory.js?");

/***/ }),

/***/ "../../core/abstract/Component.js":
/*!****************************************!*\
  !*** ../../core/abstract/Component.js ***!
  \****************************************/
/***/ ((module) => {

eval("let userEvents = [];\r\nlet documentEvents = [];\r\nlet windowEvents = [];\r\n\r\nlet renderEvents = [];\r\n\r\nfunction create(e, view, viewModel, value, doc = document) {\r\n    return '';\r\n}\r\n\r\nfunction init(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction render(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction destroy(view, doc, viewModel, value) {}\r\n\r\nfunction onUserEvent(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction onDocumentEvent(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction onWindowEvent(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction encode(value, doc = document) {\r\n    const el = doc.createElement('div');\r\n    el.textContent = value;\r\n\r\n    return el.innerHTML;\r\n}\r\n\r\nfunction decode(value, doc) {\r\n    const el = doc.createElement('div');\r\n    el.innerHTML = value;\r\n\r\n    return el.textContent;\r\n}\r\n\r\nmodule.exports = {\r\n    userEvents,\r\n    documentEvents,\r\n    windowEvents,\r\n    renderEvents,\r\n    create,\r\n    init,\r\n    render,\r\n    destroy,\r\n    onUserEvent,\r\n    onDocumentEvent,\r\n    onWindowEvent,\r\n    encode,\r\n    decode\r\n}\n\n//# sourceURL=webpack:///../../core/abstract/Component.js?");

/***/ }),

/***/ "../../core/abstract/component.js":
/*!****************************************!*\
  !*** ../../core/abstract/component.js ***!
  \****************************************/
/***/ ((module) => {

eval("let userEvents = [];\r\nlet documentEvents = [];\r\nlet windowEvents = [];\r\n\r\nlet renderEvents = [];\r\n\r\nfunction create(e, view, viewModel, value, doc = document) {\r\n    return '';\r\n}\r\n\r\nfunction init(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction render(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction destroy(view, doc, viewModel, value) {}\r\n\r\nfunction onUserEvent(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction onDocumentEvent(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction onWindowEvent(e, view, viewModel, value, doc = document) {}\r\n\r\nfunction encode(value, doc = document) {\r\n    const el = doc.createElement('div');\r\n    el.textContent = value;\r\n\r\n    return el.innerHTML;\r\n}\r\n\r\nfunction decode(value, doc) {\r\n    const el = doc.createElement('div');\r\n    el.innerHTML = value;\r\n\r\n    return el.textContent;\r\n}\r\n\r\nmodule.exports = {\r\n    userEvents,\r\n    documentEvents,\r\n    windowEvents,\r\n    renderEvents,\r\n    create,\r\n    init,\r\n    render,\r\n    destroy,\r\n    onUserEvent,\r\n    onDocumentEvent,\r\n    onWindowEvent,\r\n    encode,\r\n    decode\r\n}\n\n//# sourceURL=webpack:///../../core/abstract/component.js?");

/***/ }),

/***/ "../../core/beeline.js":
/*!*****************************!*\
  !*** ../../core/beeline.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const util = __webpack_require__(/*! core.util */ \"../../core/util.js\");\r\nconst types = __webpack_require__(/*! core.types */ \"../../core/types.js\");\r\nconst mock = {\r\n    components: {\r\n        get() {}\r\n    },\r\n    layouts: {\r\n        get() {}\r\n    },\r\n    request: {\r\n        create() {\r\n            return {\r\n                request() {}\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    create,\r\n    types,\r\n    util,\r\n    mock\r\n}\r\n\r\nfunction create(boot) {\r\n    const log = boot.log || util.log;\r\n\r\n    if (!validate(boot, ['components', 'layouts', 'request'])) {\r\n        log('Beeline cannot run without components, layouts and request')\r\n        return;\r\n    }\r\n\r\n    const components = boot.components;\r\n    const layouts = boot.layouts;\r\n    const request = boot.request.create(onLoad).request;\r\n\r\n    const doc = boot.doc || document;\r\n    const win = boot.win || window;\r\n\r\n    const _repository = (__webpack_require__(/*! ./repository/repository */ \"../../core/repository/repository.js\").create)(components, layouts, request, doc);\r\n    const _renderer = (__webpack_require__(/*! ./renderer */ \"../../core/renderer.js\").create)(_repository, doc);\r\n    const _events = (__webpack_require__(/*! ./events/events */ \"../../core/events/events.js\").create)(_repository, _renderer, boot.events, win, doc);\r\n\r\n    return {\r\n        onLoad,\r\n        destroy\r\n    }\r\n\r\n    function onLoad(data) {\r\n        data = {\r\n            models: data.models || [],\r\n            viewModels: data.viewModels || [],\r\n            views: data.views || [],\r\n            layouts: data.layouts || [],\r\n            events: data.events || []\r\n        }\r\n\r\n        util.pipe(\r\n            _repository.load,\r\n            _renderer.update\r\n        )(data);\r\n\r\n        _repository.sanitize()\r\n    }\r\n\r\n    function validate(boot, values) {\r\n        values.forEach(value => {\r\n            if (boot[value] == null) {\r\n                log(`${value} is missing`);\r\n\r\n            }\r\n        });\r\n\r\n        return !values.some(value => boot[value] == null);\r\n    }\r\n\r\n    function destroy() {\r\n        observer.destroy();\r\n        _repository.destroy();\r\n        _events.destroy();\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/beeline.js?");

/***/ }),

/***/ "../../core/events/document.js":
/*!*************************************!*\
  !*** ../../core/events/document.js ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = {\r\n    create\r\n}\r\n\r\nconst defaultEvents = ['mousemove'];\r\n\r\n\r\nfunction create(renderer, events = defaultEvents, doc = document) {\r\n\r\n    let _animationFrameRequested = false;\r\n    events.forEach(name => doc.addEventListener(name, onDocumentEvent));\r\n\r\n    return {\r\n        add,\r\n        remove,\r\n        destroy\r\n    }\r\n\r\n    function onDocumentEvent(e) {\r\n        switch (e.type) {\r\n            case 'mousemove':\r\n                renderAnimationFrame();\r\n                return;\r\n        }\r\n        renderer.refresh();\r\n    }\r\n\r\n    function add(value) {\r\n        remove(value);\r\n        if (typeof value === 'string') {\r\n            doc.addEventListener(value, onDocumentEvent);\r\n            return;\r\n        }\r\n        if (Array.isArray(value)) {\r\n            value.array.forEach(name => {\r\n                doc.addEventListener(name, onDocumentEvent);\r\n            });\r\n        }\r\n    }\r\n\r\n    function remove(value) {\r\n        if (typeof value === 'string') {\r\n            doc.removeEventListener(value, onDocumentEvent);\r\n            return;\r\n        }\r\n        if (Array.isArray(value)) {\r\n            value.array.forEach(name => {\r\n                doc.removeEventListener(name, onDocumentEvent);\r\n            });\r\n            return;\r\n        }\r\n    }\r\n\r\n    function renderAnimationFrame() {\r\n        if (!_animationFrameRequested) {\r\n            _animationFrameRequested = true;\r\n            requestAnimationFrame(function () {\r\n                renderer.refresh();\r\n                _animationFrameRequested = false;\r\n            });\r\n        }\r\n    }\r\n\r\n    function destroy() {\r\n        events.forEach(name => doc.removeListener(name, onDocumentEvent));\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/events/document.js?");

/***/ }),

/***/ "../../core/events/events.js":
/*!***********************************!*\
  !*** ../../core/events/events.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n    create\r\n}\r\n\r\n\r\nfunction create(repository, renderer, events = {}, win = window, doc = document) {\r\n    const _user = (__webpack_require__(/*! ./user */ \"../../core/events/user.js\").create)(repository, renderer, events.user, doc);\r\n    const _document = (__webpack_require__(/*! ./document */ \"../../core/events/document.js\").create)(renderer, events.document, doc);\r\n    const _window = (__webpack_require__(/*! ./window */ \"../../core/events/window.js\").create)(renderer, events.window, win);\r\n\r\n    return {\r\n        user: _user,\r\n        document: _document,\r\n        window: _window,\r\n        destroy\r\n    }\r\n\r\n    function destroy() {\r\n        _user.destroy();\r\n        _document.destroy();\r\n        _window.destroy();\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/events/events.js?");

/***/ }),

/***/ "../../core/events/user.js":
/*!*********************************!*\
  !*** ../../core/events/user.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n    create\r\n}\r\n\r\nconst {\r\n    getId,\r\n    compare\r\n} = __webpack_require__(/*! core.util */ \"../../core/util.js\");\r\n\r\nconst defaultEvents = ['click', 'change', 'input'];\r\n\r\nfunction create(repository, renderer, events = defaultEvents, doc = document) {\r\n    events.forEach(name => doc.addEventListener(name, onUserEventFn));\r\n\r\n    return {\r\n        add,\r\n        remove,\r\n        destroy\r\n    }\r\n\r\n    function onUserEventFn(e) {\r\n        const id = getId(e);\r\n        if (id == null) {\r\n            return;\r\n        }\r\n        onUserEvent(e, id, doc);\r\n        e.preventDefault();\r\n        e.stopImmediatePropagation();\r\n    }\r\n\r\n\r\n\r\n    function onUserEvent(e, id) {\r\n\r\n        const {\r\n            views,\r\n            models,\r\n            components\r\n        } = repository;\r\n\r\n        const view = views.get(id);\r\n        let component = components.get(view.component);\r\n        if (!component.userEvents.includes(e.type)) {\r\n            return;\r\n        }\r\n\r\n        let model = models.get(view.mKey);\r\n\r\n        const value = component.onUserEvent(e, view, model);\r\n        if (!compare(model.value, value) && value !== undefined) {\r\n            model = models.set(model.key, value);\r\n        }\r\n\r\n        if (view.request) {\r\n            view.core.request(view.request);\r\n        }\r\n\r\n        renderer.refresh({\r\n            models: [model]\r\n        });\r\n    }\r\n\r\n    function add(value) {\r\n        remove(value);\r\n        if (typeof value === 'string') {\r\n            doc.addEventListener(value, onUserEventFn);\r\n            return;\r\n        }\r\n        if (Array.isArray(value)) {\r\n            value.array.forEach(name => {\r\n                doc.addEventListener(name, onUserEventFn);\r\n            });\r\n        }\r\n    }\r\n\r\n    function remove(value) {\r\n        if (typeof value === 'string') {\r\n            doc.removeEventListener(value, onUserEventFn);\r\n            return;\r\n        }\r\n        if (Array.isArray(value)) {\r\n            value.array.forEach(name => {\r\n                doc.removeEventListener(name, onUserEventFn);\r\n            });\r\n        }\r\n    }\r\n\r\n    function destroy() {\r\n        events.forEach(name => doc.removeListener(name, onUserEventFn));\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/events/user.js?");

/***/ }),

/***/ "../../core/events/window.js":
/*!***********************************!*\
  !*** ../../core/events/window.js ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = {\r\n    create\r\n}\r\nconst defaultEvents = ['resize'];\r\n\r\nfunction create(renderer, events = defaultEvents, win = window) {\r\n\r\n    events.forEach(name => win.addEventListener(name, onWindowEvent));\r\n\r\n    return {\r\n        add,\r\n        remove,\r\n        destroy\r\n    }\r\n\r\n    function onWindowEvent(e) {\r\n        renderer.refresh();\r\n    }\r\n\r\n    function add(value) {\r\n        remove(value);\r\n        if (typeof value === 'string') {\r\n            win.addEventListener(value, onDocumentEvent);\r\n            return;\r\n        }\r\n        if (Array.isArray(value)) {\r\n            value.array.forEach(name => {\r\n                win.addEventListener(name, onDocumentEvent);\r\n            });\r\n        }\r\n    }\r\n\r\n    function remove(value) {\r\n        if (typeof value === 'string') {\r\n            win.removeEventListener(value, onWindowEvent);\r\n            return;\r\n        }\r\n        if (Array.isArray(value)) {\r\n            value.array.forEach(name => {\r\n                win.removeEventListener(name, onWindowEvent);\r\n            });\r\n            return;\r\n        }\r\n    }\r\n\r\n    function destroy() {\r\n        events.forEach(name => win.removeListener(name, onWindowEvent));\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/events/window.js?");

/***/ }),

/***/ "../../core/renderer.js":
/*!******************************!*\
  !*** ../../core/renderer.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n    create\r\n}\r\n\r\nfunction create(repository, doc = document) {\r\n    const {\r\n        Create,\r\n        Init,\r\n        Refresh\r\n    } = (__webpack_require__(/*! core.types */ \"../../core/types.js\").event.application);\r\n\r\n    const {\r\n        htmlToElement,\r\n        areIntersected,\r\n        distinct\r\n    } = __webpack_require__(/*! core.util */ \"../../core/util.js\");\r\n\r\n    return {\r\n        update,\r\n        refresh\r\n    }\r\n\r\n    function update(data) {\r\n        data = insertLayouts(data);\r\n        data = insertViews(data);\r\n        refresh(data);\r\n\r\n        return data;\r\n    }\r\n\r\n    function insertViews(data) {\r\n        data.views.forEach(view => {\r\n            const component = repository.components.get(view.component);\r\n            const viewModel = repository.viewModels.get(view.vmKey);\r\n            const model = repository.models.get(view.mKey);\r\n            const e = {\r\n                type: Create\r\n            };\r\n            const html = component.create(e, view, viewModel, model, doc);\r\n            const element = htmlToElement(html, doc);\r\n            element.id = view.id;\r\n            element.classList.add(view.component);\r\n\r\n            //TODO: use fragments and insert once at the end of the loop \r\n            const parentElement = doc.querySelector(view.parentPath);\r\n            parentElement.appendChild(element);\r\n\r\n            component.init({\r\n                type: Init\r\n            }, view, viewModel, model, doc);\r\n        })\r\n\r\n        return data;\r\n    }\r\n\r\n    function insertLayouts(data) {\r\n        data.layouts.forEach(layout => {\r\n            const layoutHtml = repository.layouts.get(layout.name);\r\n            const element = htmlToElement(layoutHtml);\r\n            const parentElement = doc.querySelector(layout.parentPath);\r\n            parentElement.appendChild(element);\r\n        })\r\n\r\n        return data;\r\n    }\r\n\r\n    function refresh(data) {\r\n\r\n        const modelKeys = data == null ?\r\n            repository.models.list().map(i => i.key) :\r\n            data.models == null ? [] :\r\n            data\r\n            .models\r\n            .map(m => m.key)\r\n            .filter(k => k != null);\r\n\r\n        const viewModelKeys = data == null || data.viewModels == null ? [] :\r\n            data\r\n            .viewModels\r\n            .map(m => m.key)\r\n            .filter(k => k != null);\r\n\r\n        const e = {\r\n            type: Refresh\r\n        }\r\n\r\n        const views = repository.views.list();\r\n        const modelViews = views.filter(view => modelKeys.includes(view.mKey));\r\n        const viewModelViews = views.filter(view => viewModelKeys.includes(view.vmKey));\r\n\r\n        const modelBindings = views.filter(view => areIntersected(modelKeys, view.bindings));\r\n\r\n        const viewList = distinct([...viewModelViews, ...modelBindings, ...modelViews]);\r\n\r\n        viewList.forEach(view => {\r\n            const component = repository.components.get(view.component);\r\n            const includeEvents = component.renderEvents == null ||\r\n                component.renderEvents.length === 0 ||\r\n                component.renderEvents.includes(e.type);\r\n\r\n            if (includeEvents) {\r\n                const viewModel = repository.viewModels.get(view.vmKey);\r\n                const model = repository.models.get(view.mKey);\r\n                component.render(e, view, viewModel, model);\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/renderer.js?");

/***/ }),

/***/ "../../core/repository/models.js":
/*!***************************************!*\
  !*** ../../core/repository/models.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n    load,\r\n    get,\r\n    set,\r\n    list,\r\n    sanitize\r\n}\r\n\r\nconst {\r\n    clone,\r\n    areEqual\r\n} = __webpack_require__(/*! core.util */ \"../../core/util.js\");\r\n\r\nconst _models = {};\r\n\r\nfunction get(key) {\r\n    return clone(_models[key])\r\n}\r\n\r\nfunction set(key, value) {\r\n    var model = _models[key];\r\n    model.value = value\r\n    model.isDirty = model.value != model.dbValue;\r\n\r\n    return clone(_models[key]);\r\n}\r\n\r\n\r\nfunction list() {\r\n    return clone(Object.values(_models))\r\n}\r\n\r\nfunction load(data) {\r\n    data.models.forEach(m => {\r\n        var model = _models[m.key];\r\n        if (model == null) {\r\n            _models[m.key] = _create(m)\r\n            return;\r\n        }\r\n        model.value = m.value;\r\n        model.isDirty = !areEqual(model.value, m.value);\r\n    })\r\n\r\n    return data;\r\n}\r\n\r\nfunction _create(model) {\r\n    const m = clone(model);\r\n    return {\r\n        value: m.value,\r\n        dbValue: m.value,\r\n        group: m.group || null,\r\n        key: m.key,\r\n        isDirty: false\r\n    }\r\n}\r\n\r\nfunction sanitize(keys) {\r\n    const unusedModelKeys = list()\r\n        .filter(m => !keys.includes(m.key))\r\n        .map(m => m.key);\r\n\r\n    unusedModelKeys.forEach(key => delete _models[key]);\r\n}\n\n//# sourceURL=webpack:///../../core/repository/models.js?");

/***/ }),

/***/ "../../core/repository/observer.js":
/*!*****************************************!*\
  !*** ../../core/repository/observer.js ***!
  \*****************************************/
/***/ ((module) => {

eval("module.exports = {\r\n    create\r\n};\r\n\r\nfunction create() {\r\n    const _subscriptions = {};\r\n    const _viewSubscriptions = {};\r\n    const _subscriptionsById = {};\r\n    let _id = 1;\r\n\r\n    return {\r\n        notify,\r\n        subscribeFn,\r\n        unsubscribeFn,\r\n        destroy\r\n    };\r\n\r\n    function unsubscribeFn(viewId) {\r\n\r\n        return function unsubscribe(id) {\r\n            if (viewId) {\r\n                _viewSubscriptions[viewId].array.forEach(id => {\r\n                    _clear(id)\r\n                });\r\n                return;\r\n            }\r\n\r\n            _clear(id);\r\n        }\r\n    }\r\n\r\n    function _clear(id) {\r\n        var item = _subscriptionsById[id];\r\n        if (item == null) {\r\n            return;\r\n        }\r\n\r\n        delete _subscriptions[item.event][item.id];\r\n    }\r\n\r\n    function notify(event, data) {\r\n\r\n        if (_subscriptions[event] == null) {\r\n            return;\r\n        }\r\n\r\n        for (var id in _subscriptions[event]) {\r\n            _subscriptions[event][id](data);\r\n        };\r\n    }\r\n\r\n    function subscribeFn(viewId) {\r\n\r\n        return function subscribe(event, callback) {\r\n            if (_subscriptions[event] == null) {\r\n                _subscriptions[event] = {};\r\n            }\r\n\r\n            _subscriptions[event][_id] = callback;\r\n            _subscriptionsById[_id] = {\r\n                event: event,\r\n                id: _id,\r\n                viewId: viewId\r\n            };\r\n\r\n            if (_viewSubscriptions[viewId] == null) {\r\n                _viewSubscriptions[viewId] = [];\r\n            }\r\n\r\n            _viewSubscriptions[viewId].push(_id);\r\n\r\n            return _id++;\r\n        }\r\n    }\r\n\r\n    function destroy() {\r\n        util.sanitize(_subscriptions);\r\n        util.sanitize(_viewSubscriptions);\r\n        util.sanitize(_subscriptionsById);\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/repository/observer.js?");

/***/ }),

/***/ "../../core/repository/repository.js":
/*!*******************************************!*\
  !*** ../../core/repository/repository.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n    create\r\n}\r\n\r\nfunction create(components, layouts, request, win = window, doc = document) {\r\n    const viewModels = __webpack_require__(/*! ./viewModels */ \"../../core/repository/viewModels.js\");\r\n    const models = __webpack_require__(/*! ./models */ \"../../core/repository/models.js\");\r\n    const views = (__webpack_require__(/*! ./views */ \"../../core/repository/views.js\").create)(request, viewModels.get, doc = document);\r\n\r\n    return {\r\n        load,\r\n        sanitize,\r\n        components,\r\n        viewModels,\r\n        models,\r\n        views,\r\n        layouts,\r\n        destroy\r\n    }\r\n\r\n    function load(data) {\r\n        data = viewModels.load(data);\r\n        data = models.load(data);\r\n        data = views.load(data);\r\n\r\n        return data;\r\n    }\r\n\r\n    function sanitize() {\r\n        views.sanitize();\r\n\r\n        const modelKeys = views\r\n            .list()\r\n            .map(v => v.mKey);\r\n\r\n        models.sanitize(modelKeys);\r\n\r\n        const viewModelKeys = views\r\n            .list()\r\n            .map(v => v.vmKey);\r\n\r\n        viewModels.sanitize(viewModelKeys);\r\n    }\r\n\r\n    function destroy() {\r\n        models.destroy();\r\n        viewModels.destroy();\r\n        views.destroy();\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/repository/repository.js?");

/***/ }),

/***/ "../../core/repository/viewModels.js":
/*!*******************************************!*\
  !*** ../../core/repository/viewModels.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n    load,\r\n    get,\r\n    list,\r\n    sanitize\r\n}\r\n\r\n\r\nconst {\r\n    clone\r\n} = __webpack_require__(/*! core.util */ \"../../core/util.js\");\r\n\r\nconst _viewModels = {};\r\n\r\nfunction get(key) {\r\n    return clone(_viewModels[key])\r\n}\r\n\r\nfunction load(data) {\r\n    data.viewModels.forEach(m => {\r\n        _viewModels[m.key] = m;\r\n    })\r\n\r\n    return data;\r\n}\r\n\r\nfunction list() {\r\n    return clone(Object.values(_viewModels))\r\n}\r\n\r\nfunction sanitize(keys) {\r\n    const unusedModelKeys = Object.values(_viewModels)\r\n        .filter(m => !keys.includes(m.key))\r\n        .map(m => m.key);\r\n\r\n    unusedModelKeys.forEach(key => delete _viewModels[key]);\r\n}\n\n//# sourceURL=webpack:///../../core/repository/viewModels.js?");

/***/ }),

/***/ "../../core/repository/views.js":
/*!**************************************!*\
  !*** ../../core/repository/views.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n    create\r\n}\r\n\r\nconst _util = __webpack_require__(/*! core.util */ \"../../core/util.js\");\r\nconst _observer = (__webpack_require__(/*! ./observer */ \"../../core/repository/observer.js\").create)();\r\n\r\nfunction create(request, valueForKey, doc = document) {\r\n    const _views = {};\r\n    let _uid = 1;\r\n\r\n    return {\r\n        load,\r\n        list,\r\n        get,\r\n        forKey,\r\n        forBoundKey,\r\n        sanitize,\r\n        _: {\r\n            build\r\n        }\r\n    }\r\n\r\n    function build(data) {\r\n        const cData = _util.clone(data);\r\n\r\n        cData.views = cData.views.map(vw => {\r\n            const id = _hexId(_uid++);\r\n            const core = {\r\n                subscribe: _observer.subscribeFn(id),\r\n                notify: _observer.notify,\r\n                valueForKey,\r\n                request: request,\r\n                remove: removeFn(id)\r\n            }\r\n\r\n            const view = {\r\n                id,\r\n                bindings: vw.bindings || [],\r\n                dispatch: vw.dispatch || [],\r\n                requestEvents: vw.requestEvents || [],\r\n                model: vw.model || null,\r\n                core\r\n            }\r\n\r\n            const newView = {\r\n                ...vw,\r\n                ...view\r\n            };\r\n\r\n            Object.freeze(newView);\r\n\r\n            return newView;\r\n        })\r\n\r\n        return cData;\r\n    }\r\n\r\n    function load(data) {\r\n        data = build(data);\r\n        data.views.forEach(vw => {\r\n            _views[vw.id] = vw;\r\n        })\r\n\r\n        return data;\r\n    }\r\n\r\n    function list() {\r\n        return Object.values(_views)\r\n    }\r\n\r\n    function get(id) {\r\n        return _views[id]\r\n    }\r\n\r\n    function forKey(key) {\r\n        return Object.values(_views)\r\n            .filter(view => view.key === key);\r\n    }\r\n\r\n    function forBoundKey(key) {\r\n        return Object.values(_views)\r\n            .filter(view => view.bindings.length > 0)\r\n            .filter(view => view.bindings.includes(key));\r\n    }\r\n\r\n    function _hexId(id) {\r\n        return 'H' + Number(id).toString(16).toUpperCase();\r\n    }\r\n\r\n    function removeFn(id) {\r\n        return function remove() {\r\n            const el = document.getElementById(id);\r\n            el.remove();\r\n        }\r\n    }\r\n\r\n    function sanitize() {\r\n\r\n        const unusedIds = list()\r\n            .filter(v => doc.getElementById(v.id) == null)\r\n            .map(v => v.id);\r\n\r\n        unusedIds.forEach(id => delete _views[id]);\r\n    }\r\n}\n\n//# sourceURL=webpack:///../../core/repository/views.js?");

/***/ }),

/***/ "../../core/types.js":
/*!***************************!*\
  !*** ../../core/types.js ***!
  \***************************/
/***/ ((module) => {

eval("  const event = {\r\n      application: {\r\n          Create: 'create',\r\n          Init: 'init',\r\n          Refresh: 'refresh',\r\n          Update: 'update'\r\n      },\r\n\r\n  }\r\n  Object.freeze(event);\r\n\r\n  const request = {\r\n      types: {\r\n          Json: 'json',\r\n          Page: 'page',\r\n          File: 'file'\r\n      },\r\n      method: {\r\n          Post: 'post',\r\n          Get: 'get'\r\n      }\r\n  }\r\n  Object.freeze(request);\r\n\r\n\r\n  module.exports = {\r\n      event,\r\n      request\r\n  }\n\n//# sourceURL=webpack:///../../core/types.js?");

/***/ }),

/***/ "../../core/util.js":
/*!**************************!*\
  !*** ../../core/util.js ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = {\r\n    clone,\r\n    compare,\r\n    areEqual,\r\n    htmlToElement,\r\n    pipe,\r\n    toArray,\r\n    distinct,\r\n    log,\r\n    intersection,\r\n    areIntersected,\r\n    getId\r\n}\r\n\r\nfunction clone(obj) {\r\n    if (obj == null) {\r\n        return null;\r\n    }\r\n    return JSON.parse(JSON.stringify(obj));\r\n}\r\n\r\nfunction compare(a, b) {\r\n    if (a == null && b == null) {\r\n        return true;\r\n    }\r\n\r\n    if (a == null || b == null) {\r\n        return false;\r\n    }\r\n\r\n    return JSON.stringify(a) === JSON.stringify(b);\r\n}\r\n\r\nfunction areEqual(a, b) {\r\n    switch (true) {\r\n        case a !== Object(a) || a != Object(a):\r\n            return a === b;\r\n        case a === b:\r\n            return true;\r\n        case aKeys.length !== bKeys.length:\r\n            return false;\r\n    }\r\n\r\n    const aKeys = Object.keys(a);\r\n    const bKeys = Object.keys(b);\r\n\r\n    aKeys.forEach(key => {\r\n        if (a[key] !== b[key]) {\r\n            if (typeof a[key] === 'object' && typeof b[key] === 'object') {\r\n                return !areEqual(a[key], b[key]);\r\n            }\r\n            return false;\r\n        }\r\n    })\r\n\r\n    return true;\r\n}\r\n\r\nfunction htmlToElement(html, doc = document) {\r\n    const div = doc.createElement('div');\r\n    div.innerHTML = html;\r\n\r\n    return div.firstChild;\r\n}\r\n\r\nfunction pipe(...fns) {\r\n    return function (value) {\r\n        fns.reduce((v, f) => {\r\n            return f(v)\r\n        }, value);\r\n    }\r\n}\r\n\r\nfunction log() {\r\n    if (console && console.log) {\r\n        [...arguments].forEach(value => {\r\n            console.log(value);\r\n        });\r\n    }\r\n}\r\n\r\nfunction toArray(obj) {\r\n    var copy = clone(obj)\r\n    return Object.values(copy);\r\n}\r\n\r\nfunction areIntersected(a, b) {\r\n    return intersection(a, b).length > 0;\r\n}\r\n\r\nfunction intersection(a, b) {\r\n    const setA = new Set(a);\r\n    return b.filter(value => setA.has(value));\r\n}\r\n\r\nfunction distinct(arr) {\r\n    return arr.filter((x, i, a) => a.indexOf(x) == i)\r\n}\r\n\r\nfunction getId(e) {\r\n    var el = e.srcElement || e.target;\r\n    while (el != null && (el.id == null || el.id.indexOf('H') < 0)) {\r\n        el = el.parentElement;\r\n    }\r\n    if (el == null) {\r\n        return null;\r\n    }\r\n    return el.id;\r\n}\n\n//# sourceURL=webpack:///../../core/util.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\nconst components = __webpack_require__(/*! components */ \"../../components/factory.js\");\r\nconst data = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\r\nconst BeelineJS = __webpack_require__(/*! beeline */ \"../../core/beeline.js\");\r\n\r\nBeelineJS\r\n    .create({\r\n        components,\r\n        layouts: BeelineJS.mock.layouts,\r\n        request: BeelineJS.mock.request,\r\n    })\r\n    .onLoad(data);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"style.css\");\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"models\":[{\"key\":\"select\",\"value\":4}],\"viewModels\":[{\"key\":\"options\",\"value\":[{\"value\":1,\"text\":\"One\"},{\"value\":2,\"text\":\"Two\"},{\"value\":3,\"text\":\"Three\"},{\"value\":4,\"text\":\"Four\"},{\"value\":5,\"text\":\"Five\"},{\"value\":6,\"text\":\"Six\"}]}],\"views\":[{\"mKey\":\"select\",\"vmKey\":\"options\",\"component\":\"Select\",\"parentPath\":\"body\",\"model\":{}},{\"mKey\":\"select\",\"component\":\"Paragraph\",\"parentPath\":\"body\",\"renderEvents\":[\"change\"]}]}');\n\n//# sourceURL=webpack:///./src/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;