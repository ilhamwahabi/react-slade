'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inherit;\n  stroke: white;\n  stroke-width: 7;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  cursor: pointer;\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n'], ['\n  display: inherit;\n  stroke: white;\n  stroke-width: 7;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  cursor: pointer;\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Svg = _styledComponents2.default.svg(_templateObject, function (props) {
  return props.start ? 'scaleX(-1)' : 'scaleX(1)';
}, function (props) {
  return props.start ? 'rotate(-90deg)' : 'rotate(90deg)';
});

exports.default = Svg;