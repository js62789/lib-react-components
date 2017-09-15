'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'header': 'styles__header___1c59U',
  'h1': 'styles__h1___1uoAC styles__header___1c59U',
  'h2': 'styles__h2___yYXlX styles__header___1c59U',
  'h3': 'styles__h3___33_QQ styles__header___1c59U',
  'h4': 'styles__h4___14wIS styles__header___1c59U',
  'h5': 'styles__h5___2aa75 styles__header___1c59U'
};

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

      var classNames = [styles[Element]];
      if (className) {
        classNames.push(className);
      }
      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwiRWxlbWVudCIsInByb3BzIiwiYXMiLCJjbGFzc05hbWUiLCJvdGhlciIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJwdXNoIiwiam9pbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxVQUFNQyxVQUFVLEtBQUtDLEtBQUwsQ0FBV0MsRUFBWCxJQUFpQixJQUFqQzs7QUFETyxtQkFFeUIsS0FBS0QsS0FGOUI7QUFBQSxVQUVDRSxTQUZELFVBRUNBLFNBRkQ7QUFBQSxVQUVlQyxLQUZmOztBQUdQLFVBQU1DLGFBQWEsQ0FBRUMsT0FBT04sT0FBUCxDQUFGLENBQW5CO0FBQ0EsVUFBSUcsU0FBSixFQUFlO0FBQ2JFLG1CQUFXRSxJQUFYLENBQWdCSixTQUFoQjtBQUNEO0FBQ0QsYUFDRSw4QkFBQyxPQUFELGFBQVMsV0FBV0UsV0FBV0csSUFBWCxDQUFnQixHQUFoQixDQUFwQixJQUE4Q0osS0FBOUMsRUFERjtBQUdEOzs7O0VBWHlCLGdCQUFNSyxTOztrQkFjbkJWLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL0ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBFbGVtZW50ID0gdGhpcy5wcm9wcy5hcyB8fCAnaDEnO1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyBzdHlsZXNbRWxlbWVudF0gXTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbGVtZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHsuLi5vdGhlcn0gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ==