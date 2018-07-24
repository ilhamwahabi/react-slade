"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  stroke: white;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n"], ["\n  stroke: white;\n  stroke-width: 5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Svg = _styledComponents2.default.svg(_templateObject);

exports.default = Svg;