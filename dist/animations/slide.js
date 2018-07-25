'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideUp = exports.slideDown = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    transform: translateY(-10px);\n  }\n\n  to {\n    transform: translateY(0px);\n  }\n'], ['\n  from {\n    transform: translateY(-10px);\n  }\n\n  to {\n    transform: translateY(0px);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    transform: translateY(10px);\n  }\n\n  to {\n    transform: translateY(0px);\n  }\n'], ['\n  from {\n    transform: translateY(10px);\n  }\n\n  to {\n    transform: translateY(0px);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var slideDown = (0, _styledComponents.keyframes)(_templateObject);

var slideUp = (0, _styledComponents.keyframes)(_templateObject2);

exports.slideDown = slideDown;
exports.slideUp = slideUp;