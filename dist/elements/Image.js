'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 60px;\n  display: block;\n  visibility: ', ';\n  cursor: pointer;\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n'], ['\n  height: 60px;\n  display: block;\n  visibility: ', ';\n  cursor: pointer;\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents2.default.img(_templateObject, function (props) {
  return props.isStartItem || props.isEndItem ? 'hidden' : 'visible';
}, function (props) {
  return props.start ? 'rotate(180deg)' : 'rotate(0)';
}, function (props) {
  return props.start ? 'rotate(-90deg)' : 'rotate(90deg)';
});

exports.default = Image;