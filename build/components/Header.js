'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = exports.Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var Element = this.props.as || 'h1';

      var _props = this.props,
          className = _props.className,
          other = _objectWithoutProperties(_props, ['className']);

      var classNames = [Element];
      if (className) {
        classNames.push(className);
      }
      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwiRWxlbWVudCIsInByb3BzIiwiYXMiLCJjbGFzc05hbWUiLCJvdGhlciIsImNsYXNzTmFtZXMiLCJwdXNoIiwiam9pbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxVQUFNQyxVQUFVLEtBQUtDLEtBQUwsQ0FBV0MsRUFBWCxJQUFpQixJQUFqQzs7QUFETyxtQkFFeUIsS0FBS0QsS0FGOUI7QUFBQSxVQUVDRSxTQUZELFVBRUNBLFNBRkQ7QUFBQSxVQUVlQyxLQUZmOztBQUdQLFVBQU1DLGFBQWEsQ0FBRUwsT0FBRixDQUFuQjtBQUNBLFVBQUlHLFNBQUosRUFBZTtBQUNiRSxtQkFBV0MsSUFBWCxDQUFnQkgsU0FBaEI7QUFDRDtBQUNELGFBQ0UsOEJBQUMsT0FBRCxhQUFTLFdBQVdFLFdBQVdFLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBcEIsSUFBOENILEtBQTlDLEVBREY7QUFHRDs7OztFQVh5QixnQkFBTUksUzs7a0JBY25CVCxNIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcblxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBFbGVtZW50ID0gdGhpcy5wcm9wcy5hcyB8fCAnaDEnO1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyBFbGVtZW50IF07XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8RWxlbWVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0=