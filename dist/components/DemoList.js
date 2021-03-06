'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoList = function (_React$Component) {
  _inherits(DemoList, _React$Component);

  function DemoList() {
    _classCallCheck(this, DemoList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DemoList).apply(this, arguments));
  }

  _createClass(DemoList, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$examples = _props.examples;
      var examples = _props$examples === undefined ? [] : _props$examples;
      var _props$component = _props.component;
      var component = _props$component === undefined ? null : _props$component;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          ' Examples '
        ),
        _react2.default.createElement(
          'ul',
          null,
          examples.map(function (f) {
            return _react2.default.createElement(
              'li',
              { key: f, style: { padding: '10px', fontSize: '16px' } },
              _react2.default.createElement(
                'a',
                { href: component ? '/examples?component=' + component + '&name=' + f : '/examples?name=' + f },
                f
              )
            );
          })
        )
      );
    }
  }]);

  return DemoList;
}(_react2.default.Component);

DemoList.propTypes = {
  examples: _react2.default.PropTypes.array
};

exports.default = DemoList;