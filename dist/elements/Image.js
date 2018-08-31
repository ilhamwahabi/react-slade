'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  max-height: 60px;\n  display: block;\n  visibility: ', ';\n  cursor: pointer;\n  margin: 15px;\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n'], ['\n  max-height: 60px;\n  display: block;\n  visibility: ', ';\n  cursor: pointer;\n  margin: 15px;\n  transform: ', ';\n\n  @media (max-width: 481px) {\n    transform: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = _styledComponents2.default.img(_templateObject, function (_ref) {
  var isEdge = _ref.isEdge;
  return isEdge ? 'hidden' : 'visible';
}, function (_ref2) {
  var start = _ref2.start;
  return start ? 'rotate(180deg)' : 'rotate(0)';
}, function (_ref3) {
  var start = _ref3.start;
  return start ? 'rotate(-90deg)' : 'rotate(90deg)';
});

exports.default = Image;