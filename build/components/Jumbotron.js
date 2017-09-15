'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jumbotron = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jumbotron = exports.Jumbotron = function (_React$Component) {
  _inherits(Jumbotron, _React$Component);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    return _possibleConstructorReturn(this, (Jumbotron.__proto__ || Object.getPrototypeOf(Jumbotron)).apply(this, arguments));
  }

  _createClass(Jumbotron, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inverted = _props.inverted,
          backgroundImage = _props.backgroundImage,
          other = _objectWithoutProperties(_props, ['inverted', 'backgroundImage']);

      var classNames = ['jumbotron'];
      var style = {};

      if (inverted) {
        classNames.push('jumbotron-inverse');
      }

      if (backgroundImage) {
        style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(\'' + backgroundImage + '\')';
      }

      return _react2.default.createElement('div', _extends({ className: classNames.join(' '), style: style }, other));
    }
  }]);

  return Jumbotron;
}(_react2.default.Component);

exports.default = Jumbotron;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0p1bWJvdHJvbi5qc3giXSwibmFtZXMiOlsiSnVtYm90cm9uIiwicHJvcHMiLCJpbnZlcnRlZCIsImJhY2tncm91bmRJbWFnZSIsIm90aGVyIiwiY2xhc3NOYW1lcyIsInN0eWxlIiwicHVzaCIsImpvaW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFMsV0FBQUEsUzs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSxtQkFDeUMsS0FBS0MsS0FEOUM7QUFBQSxVQUNDQyxRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxlQURYLFVBQ1dBLGVBRFg7QUFBQSxVQUMrQkMsS0FEL0I7O0FBRVAsVUFBTUMsYUFBYSxDQUFFLFdBQUYsQ0FBbkI7QUFDQSxVQUFNQyxRQUFRLEVBQWQ7O0FBRUEsVUFBSUosUUFBSixFQUFjO0FBQ1pHLG1CQUFXRSxJQUFYLENBQWdCLG1CQUFoQjtBQUNEOztBQUVELFVBQUlKLGVBQUosRUFBcUI7QUFDbkJHLGNBQU1ILGVBQU4seUVBQTJGQSxlQUEzRjtBQUNEOztBQUVELGFBQ0UsZ0RBQUssV0FBV0UsV0FBV0csSUFBWCxDQUFnQixHQUFoQixDQUFoQixFQUFzQyxPQUFPRixLQUE3QyxJQUF3REYsS0FBeEQsRUFERjtBQUdEOzs7O0VBakI0QixnQkFBTUssUzs7a0JBb0J0QlQsUyIsImZpbGUiOiJKdW1ib3Ryb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgSnVtYm90cm9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW52ZXJ0ZWQsIGJhY2tncm91bmRJbWFnZSwgLi4ub3RoZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgJ2p1bWJvdHJvbicgXTtcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuXG4gICAgaWYgKGludmVydGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2p1bWJvdHJvbi1pbnZlcnNlJyk7XG4gICAgfVxuXG4gICAgaWYgKGJhY2tncm91bmRJbWFnZSkge1xuICAgICAgc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCggcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkgKSwgdXJsKCcke2JhY2tncm91bmRJbWFnZX0nKWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKdW1ib3Ryb247XG4iXX0=