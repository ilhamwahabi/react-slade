'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shakeDown = exports.shakeUp = exports.shakeRight = exports.shakeLeft = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(-15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n'], ['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(-15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n'], ['\n  0% {\n    transform: translateX(0);\n  }\n\n  50% {\n    transform: translateX(15px);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-15px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n'], ['\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(-15px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(15px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n'], ['\n  0% {\n    transform: translateY(0);\n  }\n\n  50% {\n    transform: translateY(15px);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shakeLeft = (0, _styledComponents.keyframes)(_templateObject);

var shakeRight = (0, _styledComponents.keyframes)(_templateObject2);

var shakeUp = (0, _styledComponents.keyframes)(_templateObject3);

var shakeDown = (0, _styledComponents.keyframes)(_templateObject4);

exports.shakeLeft = shakeLeft;
exports.shakeRight = shakeRight;
exports.shakeUp = shakeUp;
exports.shakeDown = shakeDown;