'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeOut = exports.fadeIn = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  } \n'], ['\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  } \n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  } \n'], ['\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  } \n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fadeIn = (0, _styledComponents.keyframes)(_templateObject);

var fadeOut = (0, _styledComponents.keyframes)(_templateObject2);

exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;