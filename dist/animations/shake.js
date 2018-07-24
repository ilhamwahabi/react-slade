'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shakeRight = exports.shakeLeft = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n'], ['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(-15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n'], ['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(-15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shakeLeft = (0, _styledComponents.keyframes)(_templateObject);

var shakeRight = (0, _styledComponents.keyframes)(_templateObject2);

exports.shakeLeft = shakeLeft;
exports.shakeRight = shakeRight;