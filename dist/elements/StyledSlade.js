'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  display: ', ';\n  height: 100%;\n  width: 100%;\n  z-index: 200;\n  color: black;\n  font-size: 15px;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n'], ['\n  position: fixed;\n  display: ', ';\n  height: 100%;\n  width: 100%;\n  z-index: 200;\n  color: black;\n  font-size: 15px;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSlade = _styledComponents2.default.main(_templateObject, function (props) {
  return props.open ? 'flex' : 'none';
});

exports.default = StyledSlade;