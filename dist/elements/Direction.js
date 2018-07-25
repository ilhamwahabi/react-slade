'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inherit;\n  max-width: 20%;\n  max-height: 20%;\n  animation: ', ' 1s ease-out infinite;\n\n  @media (max-width: 481px) {\n    animation: ', ' 1s ease-out infinite;\n  }\n'], ['\n  display: inherit;\n  max-width: 20%;\n  max-height: 20%;\n  animation: ', ' 1s ease-out infinite;\n\n  @media (max-width: 481px) {\n    animation: ', ' 1s ease-out infinite;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _shake = require('../animations/shake');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Direction = _styledComponents2.default.div(_templateObject, function (props) {
  return props.start ? _shake.shakeLeft : _shake.shakeRight;
}, function (props) {
  return props.start ? _shake.shakeUp : _shake.shakeDown;
});

exports.default = Direction;