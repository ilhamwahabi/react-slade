'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: black;\n  font-size: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: ', ';\n  opacity: ', ';\n  animation-name: ', ';\n  animation-duration: .3s;\n  animation-timing-function: ease-out;\n  animation-iteration-count: 1;\n\n  @media (max-width: 481px) {\n    flex-direction: column;\n  }\n'], ['\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: black;\n  font-size: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: ', ';\n  opacity: ', ';\n  animation-name: ', ';\n  animation-duration: .3s;\n  animation-timing-function: ease-out;\n  animation-iteration-count: 1;\n\n  @media (max-width: 481px) {\n    flex-direction: column;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _fade = require('../animations/fade');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSlade = _styledComponents2.default.main(_templateObject, function (_ref) {
  var open = _ref.open;
  return open ? 200 : -1;
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 1 : 0;
}, function (_ref3) {
  var open = _ref3.open;
  return open ? _fade.fadeIn : _fade.fadeOut;
});

exports.default = StyledSlade;