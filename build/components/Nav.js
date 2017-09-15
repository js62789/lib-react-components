'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = exports.NavItem = exports.NavLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavLink = exports.NavLink = function (_React$Component) {
  _inherits(NavLink, _React$Component);

  function NavLink() {
    _classCallCheck(this, NavLink);

    return _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).apply(this, arguments));
  }

  _createClass(NavLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          content = _props.content,
          active = _props.active,
          disabled = _props.disabled,
          href = _props.href,
          as = _props.as,
          other = _objectWithoutProperties(_props, ['className', 'children', 'content', 'active', 'disabled', 'href', 'as']);

      var Element = as || 'a';
      var classNames = ['nav-link'];

      if (active) {
        classNames.push('active');
      }

      if (disabled) {
        classNames.push('disabled');
      }

      if (className) {
        classNames.push(className);
      }

      return _react2.default.createElement(
        Element,
        _extends({
          className: classNames.join(' '),
          href: href || '#'
        }, other),
        active ? _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          '(current)'
        ) : null,
        content || children
      );
    }
  }]);

  return NavLink;
}(_react2.default.Component);

var NavItem = exports.NavItem = function (_React$Component2) {
  _inherits(NavItem, _React$Component2);

  function NavItem() {
    _classCallCheck(this, NavItem);

    return _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
  }

  _createClass(NavItem, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          other = _objectWithoutProperties(_props2, ['className']);

      var classNames = ['nav-item'];

      if (className) {
        classNames.push(className);
      }

      return _react2.default.createElement('li', _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return NavItem;
}(_react2.default.Component);

var Nav = exports.Nav = function (_React$Component3) {
  _inherits(Nav, _React$Component3);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          as = _props3.as,
          vertical = _props3.vertical,
          justified = _props3.justified,
          align = _props3.align,
          type = _props3.type,
          other = _objectWithoutProperties(_props3, ['as', 'vertical', 'justified', 'align', 'type']);

      var classNames = ['nav'];
      var Element = as || 'ul';
      var style = {};

      if (type === 'pills') {
        classNames.push('nav-pills');
      } else if (type === 'tabs') {
        classNames.push('nav-tabs');
      }

      if (vertical) {
        classNames.push('flex-column');
      }

      if (justified) {
        classNames.push('nav-justified');
      }

      if (align === 'center') {
        classNames.push('justify-content-center');
      } else if (align === 'right') {
        classNames.push('justify-content-end');
      }

      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Nav;
}(_react2.default.Component);

Object.defineProperty(Nav, 'Item', {
  enumerable: true,
  writable: true,
  value: NavItem
});
Object.defineProperty(Nav, 'Link', {
  enumerable: true,
  writable: true,
  value: NavLink
});
exports.default = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5qc3giXSwibmFtZXMiOlsiTmF2TGluayIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJocmVmIiwiYXMiLCJvdGhlciIsIkVsZW1lbnQiLCJjbGFzc05hbWVzIiwicHVzaCIsImpvaW4iLCJDb21wb25lbnQiLCJOYXZJdGVtIiwiTmF2IiwidmVydGljYWwiLCJqdXN0aWZpZWQiLCJhbGlnbiIsInR5cGUiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsTyxXQUFBQSxPOzs7Ozs7Ozs7Ozs2QkFDRjtBQUFBLG1CQVVILEtBQUtDLEtBVkY7QUFBQSxVQUVMQyxTQUZLLFVBRUxBLFNBRks7QUFBQSxVQUdMQyxRQUhLLFVBR0xBLFFBSEs7QUFBQSxVQUlMQyxPQUpLLFVBSUxBLE9BSks7QUFBQSxVQUtMQyxNQUxLLFVBS0xBLE1BTEs7QUFBQSxVQU1MQyxRQU5LLFVBTUxBLFFBTks7QUFBQSxVQU9MQyxJQVBLLFVBT0xBLElBUEs7QUFBQSxVQVFMQyxFQVJLLFVBUUxBLEVBUks7QUFBQSxVQVNGQyxLQVRFOztBQVdQLFVBQU1DLFVBQVVGLE1BQU0sR0FBdEI7QUFDQSxVQUFNRyxhQUFhLENBQUUsVUFBRixDQUFuQjs7QUFFQSxVQUFJTixNQUFKLEVBQVk7QUFDVk0sbUJBQVdDLElBQVgsQ0FBZ0IsUUFBaEI7QUFDRDs7QUFFRCxVQUFJTixRQUFKLEVBQWM7QUFDWkssbUJBQVdDLElBQVgsQ0FBZ0IsVUFBaEI7QUFDRDs7QUFFRCxVQUFJVixTQUFKLEVBQWU7QUFDYlMsbUJBQVdDLElBQVgsQ0FBZ0JWLFNBQWhCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLHFCQUFXUyxXQUFXRSxJQUFYLENBQWdCLEdBQWhCLENBRGI7QUFFRSxnQkFBTU4sUUFBUTtBQUZoQixXQUdNRSxLQUhOO0FBS0dKLGlCQUFTO0FBQUE7QUFBQSxZQUFNLFdBQVUsU0FBaEI7QUFBQTtBQUFBLFNBQVQsR0FBc0QsSUFMekQ7QUFNR0QsbUJBQVdEO0FBTmQsT0FERjtBQVVEOzs7O0VBckMwQixnQkFBTVcsUzs7SUF3Q3RCQyxPLFdBQUFBLE87Ozs7Ozs7Ozs7OzZCQUNGO0FBQUEsb0JBQ3lCLEtBQUtkLEtBRDlCO0FBQUEsVUFDQ0MsU0FERCxXQUNDQSxTQUREO0FBQUEsVUFDZU8sS0FEZjs7QUFFUCxVQUFNRSxhQUFhLENBQUUsVUFBRixDQUFuQjs7QUFFQSxVQUFJVCxTQUFKLEVBQWU7QUFDYlMsbUJBQVdDLElBQVgsQ0FBZ0JWLFNBQWhCO0FBQ0Q7O0FBRUQsYUFDRSwrQ0FBSSxXQUFXUyxXQUFXRSxJQUFYLENBQWdCLEdBQWhCLENBQWYsSUFBeUNKLEtBQXpDLEVBREY7QUFHRDs7OztFQVowQixnQkFBTUssUzs7SUFldEJFLEcsV0FBQUEsRzs7Ozs7Ozs7Ozs7NkJBR0Y7QUFBQSxvQkFRSCxLQUFLZixLQVJGO0FBQUEsVUFFTE8sRUFGSyxXQUVMQSxFQUZLO0FBQUEsVUFHTFMsUUFISyxXQUdMQSxRQUhLO0FBQUEsVUFJTEMsU0FKSyxXQUlMQSxTQUpLO0FBQUEsVUFLTEMsS0FMSyxXQUtMQSxLQUxLO0FBQUEsVUFNTEMsSUFOSyxXQU1MQSxJQU5LO0FBQUEsVUFPRlgsS0FQRTs7QUFTUCxVQUFNRSxhQUFhLENBQUUsS0FBRixDQUFuQjtBQUNBLFVBQU1ELFVBQVVGLE1BQU0sSUFBdEI7QUFDQSxVQUFNYSxRQUFRLEVBQWQ7O0FBRUEsVUFBSUQsU0FBUyxPQUFiLEVBQXNCO0FBQ3BCVCxtQkFBV0MsSUFBWCxDQUFnQixXQUFoQjtBQUNELE9BRkQsTUFFTyxJQUFJUSxTQUFTLE1BQWIsRUFBcUI7QUFDMUJULG1CQUFXQyxJQUFYLENBQWdCLFVBQWhCO0FBQ0Q7O0FBRUQsVUFBSUssUUFBSixFQUFjO0FBQ1pOLG1CQUFXQyxJQUFYLENBQWdCLGFBQWhCO0FBQ0Q7O0FBRUQsVUFBSU0sU0FBSixFQUFlO0FBQ2JQLG1CQUFXQyxJQUFYLENBQWdCLGVBQWhCO0FBQ0Q7O0FBRUQsVUFBSU8sVUFBVSxRQUFkLEVBQXdCO0FBQ3RCUixtQkFBV0MsSUFBWCxDQUFnQix3QkFBaEI7QUFDRCxPQUZELE1BRU8sSUFBSU8sVUFBVSxPQUFkLEVBQXVCO0FBQzVCUixtQkFBV0MsSUFBWCxDQUFnQixxQkFBaEI7QUFDRDs7QUFFRCxhQUNFLDhCQUFDLE9BQUQsYUFBUyxXQUFXRCxXQUFXRSxJQUFYLENBQWdCLEdBQWhCLENBQXBCLElBQThDSixLQUE5QyxFQURGO0FBR0Q7Ozs7RUF2Q3NCLGdCQUFNSyxTOztzQkFBbEJFLEc7OztTQUNHRDs7c0JBREhDLEc7OztTQUVHaEI7O2tCQXdDRGdCLEciLCJmaWxlIjoiTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjb250ZW50LFxuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBocmVmLFxuICAgICAgYXMsXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IEVsZW1lbnQgPSBhcyB8fCAnYSc7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgJ25hdi1saW5rJyBdO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVsZW1lbnRcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX1cbiAgICAgICAgaHJlZj17aHJlZiB8fCAnIyd9XG4gICAgICAgIHsuLi5vdGhlcn1cbiAgICAgID5cbiAgICAgICAge2FjdGl2ZSA/IDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj4oY3VycmVudCk8L3NwYW4+IDogbnVsbH1cbiAgICAgICAge2NvbnRlbnQgfHwgY2hpbGRyZW59XG4gICAgICA8L0VsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmF2SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgJ25hdi1pdGVtJyBdO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIEl0ZW0gPSBOYXZJdGVtXG4gIHN0YXRpYyBMaW5rID0gTmF2TGlua1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXMsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIGp1c3RpZmllZCxcbiAgICAgIGFsaWduLFxuICAgICAgdHlwZSxcbiAgICAgIC4uLm90aGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgJ25hdicgXTtcbiAgICBjb25zdCBFbGVtZW50ID0gYXMgfHwgJ3VsJztcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuXG4gICAgaWYgKHR5cGUgPT09ICdwaWxscycpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnbmF2LXBpbGxzJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndGFicycpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnbmF2LXRhYnMnKTtcbiAgICB9XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnZmxleC1jb2x1bW4nKTtcbiAgICB9XG5cbiAgICBpZiAoanVzdGlmaWVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ25hdi1qdXN0aWZpZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2p1c3RpZnktY29udGVudC1jZW50ZXInKTtcbiAgICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2p1c3RpZnktY29udGVudC1lbmQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVsZW1lbnQgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19