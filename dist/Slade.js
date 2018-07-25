'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyledSlade = require('./elements/StyledSlade');

var _StyledSlade2 = _interopRequireDefault(_StyledSlade);

var _Backdrop = require('./elements/Backdrop');

var _Backdrop2 = _interopRequireDefault(_Backdrop);

var _Svg = require('./elements/Svg');

var _Svg2 = _interopRequireDefault(_Svg);

var _Direction = require('./elements/Direction');

var _Direction2 = _interopRequireDefault(_Direction);

var _Dialog = require('./elements/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slade = function Slade(_ref) {
  var open = _ref.open,
      items = _ref.items,
      index = _ref.index,
      closeSlade = _ref.closeSlade,
      nextSlade = _ref.nextSlade,
      previousSlade = _ref.previousSlade;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Backdrop2.default, { open: open }),
    _react2.default.createElement(
      _StyledSlade2.default,
      { onClick: closeSlade, open: open },
      _react2.default.createElement(
        _Direction2.default,
        { start: 1, onClick: function onClick(e) {
            e.stopPropagation();previousSlade();
          } },
        _react2.default.createElement(
          _Svg2.default,
          { start: 1, width: '100', height: '60' },
          _react2.default.createElement('polyline', { points: '20 5, 50 30, 20 55' })
        )
      ),
      _react2.default.createElement(
        _Dialog2.default,
        { onClick: function onClick(e) {
            return e.stopPropagation();
          } },
        items[index]
      ),
      _react2.default.createElement(
        _Direction2.default,
        { end: 1, onClick: function onClick(e) {
            e.stopPropagation();nextSlade();
          } },
        _react2.default.createElement(
          _Svg2.default,
          { end: 1, width: '100', height: '60' },
          _react2.default.createElement('polyline', { points: '20 5, 50 30, 20 55' })
        )
      )
    )
  );
};

// Internal Import
// Eksternal Import


Slade.propTypes = {
  open: _propTypes2.default.bool.isRequired,
  items: _propTypes2.default.array.isRequired,
  index: _propTypes2.default.number.isRequired,

  closeSlade: _propTypes2.default.func.isRequired,
  nextSlade: _propTypes2.default.func.isRequired,
  previousSlade: _propTypes2.default.func.isRequired
};

exports.default = Slade;