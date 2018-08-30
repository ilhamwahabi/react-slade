'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: ', ';\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n  ', ';\n'], ['\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: ', ';\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Backdrop = _styledComponents2.default.div(_templateObject, function (props) {
  return props.open ? 'block' : 'none';
}, function (props) {
  return props.backdrop.startsWith('http') ? 'background: url(' + props.backdrop + ') no-repeat center / cover' : 'background: ' + props.backdrop;
});

exports.default = Backdrop;