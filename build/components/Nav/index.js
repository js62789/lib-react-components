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

var styles = {
  'nav': 'styles__nav___1sxqh',
  'navLink': 'styles__navLink___3q5M5',
  'disabled': 'styles__disabled___ySaZe',
  'navTabs': 'styles__navTabs___3D_W9',
  'navItem': 'styles__navItem___3dSzz',
  'active': 'styles__active___3z6OV',
  'show': 'styles__show___11_QE',
  'dropdownMenu': 'styles__dropdownMenu___1DnIO',
  'navPills': 'styles__navPills___3N0Bz',
  'navFill': 'styles__navFill___sUZOz',
  'navJustified': 'styles__navJustified___32CDU',
  'tabContent': 'styles__tabContent___zdTvl',
  'tabPane': 'styles__tabPane___WQlTr',
  'flexColumn': 'styles__flexColumn___1czk9',
  'justifyContentEnd': 'styles__justifyContentEnd___29R1p',
  'justifyContentCenter': 'styles__justifyContentCenter___3XQIB',
  'screenReader': 'styles__screenReader___3ooAY'
};

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
      var classNames = [styles.navLink];

      if (active) {
        classNames.push(styles.active);
      }

      if (disabled) {
        classNames.push(styles.disabled);
      }

      if (className) {
        classNames.push(className);
      }

      return _react2.default.createElement(
        Element,
        _extends({
          className: classNames.join(' '),
          href: href
        }, other),
        active ? _react2.default.createElement(
          'span',
          { className: styles.screenReader },
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

      var classNames = [styles.navItem];

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

      var classNames = [styles.nav];
      var Element = as || 'ul';
      var style = {};

      if (type === 'pills') {
        classNames.push(styles.navPills);
      } else if (type === 'tabs') {
        classNames.push(styles.navTabs);
      }

      if (vertical) {
        classNames.push(styles.flexColumn);
      }

      if (justified) {
        classNames.push(styles.navJustified);
      }

      if (align === 'center') {
        classNames.push(styles.justifyContentCenter);
      } else if (align === 'right') {
        classNames.push(styles.justifyContentEnd);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi9pbmRleC5qc3giXSwibmFtZXMiOlsiTmF2TGluayIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJocmVmIiwiYXMiLCJvdGhlciIsIkVsZW1lbnQiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwibmF2TGluayIsInB1c2giLCJqb2luIiwic2NyZWVuUmVhZGVyIiwiQ29tcG9uZW50IiwiTmF2SXRlbSIsIm5hdkl0ZW0iLCJOYXYiLCJ2ZXJ0aWNhbCIsImp1c3RpZmllZCIsImFsaWduIiwidHlwZSIsIm5hdiIsInN0eWxlIiwibmF2UGlsbHMiLCJuYXZUYWJzIiwiZmxleENvbHVtbiIsIm5hdkp1c3RpZmllZCIsImp1c3RpZnlDb250ZW50Q2VudGVyIiwianVzdGlmeUNvbnRlbnRFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHYUEsTyxXQUFBQSxPOzs7Ozs7Ozs7Ozs2QkFDRjtBQUFBLG1CQVVILEtBQUtDLEtBVkY7QUFBQSxVQUVMQyxTQUZLLFVBRUxBLFNBRks7QUFBQSxVQUdMQyxRQUhLLFVBR0xBLFFBSEs7QUFBQSxVQUlMQyxPQUpLLFVBSUxBLE9BSks7QUFBQSxVQUtMQyxNQUxLLFVBS0xBLE1BTEs7QUFBQSxVQU1MQyxRQU5LLFVBTUxBLFFBTks7QUFBQSxVQU9MQyxJQVBLLFVBT0xBLElBUEs7QUFBQSxVQVFMQyxFQVJLLFVBUUxBLEVBUks7QUFBQSxVQVNGQyxLQVRFOztBQVdQLFVBQU1DLFVBQVVGLE1BQU0sR0FBdEI7QUFDQSxVQUFNRyxhQUFhLENBQUVDLE9BQU9DLE9BQVQsQ0FBbkI7O0FBRUEsVUFBSVIsTUFBSixFQUFZO0FBQ1ZNLG1CQUFXRyxJQUFYLENBQWdCRixPQUFPUCxNQUF2QjtBQUNEOztBQUVELFVBQUlDLFFBQUosRUFBYztBQUNaSyxtQkFBV0csSUFBWCxDQUFnQkYsT0FBT04sUUFBdkI7QUFDRDs7QUFFRCxVQUFJSixTQUFKLEVBQWU7QUFDYlMsbUJBQVdHLElBQVgsQ0FBZ0JaLFNBQWhCO0FBQ0Q7O0FBRUQsYUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLHFCQUFXUyxXQUFXSSxJQUFYLENBQWdCLEdBQWhCLENBRGI7QUFFRSxnQkFBTVI7QUFGUixXQUdNRSxLQUhOO0FBS0dKLGlCQUFTO0FBQUE7QUFBQSxZQUFNLFdBQVdPLE9BQU9JLFlBQXhCO0FBQUE7QUFBQSxTQUFULEdBQWtFLElBTHJFO0FBTUdaLG1CQUFXRDtBQU5kLE9BREY7QUFVRDs7OztFQXJDMEIsZ0JBQU1jLFM7O0lBd0N0QkMsTyxXQUFBQSxPOzs7Ozs7Ozs7Ozs2QkFDRjtBQUFBLG9CQUN5QixLQUFLakIsS0FEOUI7QUFBQSxVQUNDQyxTQURELFdBQ0NBLFNBREQ7QUFBQSxVQUNlTyxLQURmOztBQUVQLFVBQU1FLGFBQWEsQ0FBRUMsT0FBT08sT0FBVCxDQUFuQjs7QUFFQSxVQUFJakIsU0FBSixFQUFlO0FBQ2JTLG1CQUFXRyxJQUFYLENBQWdCWixTQUFoQjtBQUNEOztBQUVELGFBQ0UsK0NBQUksV0FBV1MsV0FBV0ksSUFBWCxDQUFnQixHQUFoQixDQUFmLElBQXlDTixLQUF6QyxFQURGO0FBR0Q7Ozs7RUFaMEIsZ0JBQU1RLFM7O0lBZXRCRyxHLFdBQUFBLEc7Ozs7Ozs7Ozs7OzZCQUdGO0FBQUEsb0JBUUgsS0FBS25CLEtBUkY7QUFBQSxVQUVMTyxFQUZLLFdBRUxBLEVBRks7QUFBQSxVQUdMYSxRQUhLLFdBR0xBLFFBSEs7QUFBQSxVQUlMQyxTQUpLLFdBSUxBLFNBSks7QUFBQSxVQUtMQyxLQUxLLFdBS0xBLEtBTEs7QUFBQSxVQU1MQyxJQU5LLFdBTUxBLElBTks7QUFBQSxVQU9GZixLQVBFOztBQVNQLFVBQU1FLGFBQWEsQ0FBRUMsT0FBT2EsR0FBVCxDQUFuQjtBQUNBLFVBQU1mLFVBQVVGLE1BQU0sSUFBdEI7QUFDQSxVQUFNa0IsUUFBUSxFQUFkOztBQUVBLFVBQUlGLFNBQVMsT0FBYixFQUFzQjtBQUNwQmIsbUJBQVdHLElBQVgsQ0FBZ0JGLE9BQU9lLFFBQXZCO0FBQ0QsT0FGRCxNQUVPLElBQUlILFNBQVMsTUFBYixFQUFxQjtBQUMxQmIsbUJBQVdHLElBQVgsQ0FBZ0JGLE9BQU9nQixPQUF2QjtBQUNEOztBQUVELFVBQUlQLFFBQUosRUFBYztBQUNaVixtQkFBV0csSUFBWCxDQUFnQkYsT0FBT2lCLFVBQXZCO0FBQ0Q7O0FBRUQsVUFBSVAsU0FBSixFQUFlO0FBQ2JYLG1CQUFXRyxJQUFYLENBQWdCRixPQUFPa0IsWUFBdkI7QUFDRDs7QUFFRCxVQUFJUCxVQUFVLFFBQWQsRUFBd0I7QUFDdEJaLG1CQUFXRyxJQUFYLENBQWdCRixPQUFPbUIsb0JBQXZCO0FBQ0QsT0FGRCxNQUVPLElBQUlSLFVBQVUsT0FBZCxFQUF1QjtBQUM1QlosbUJBQVdHLElBQVgsQ0FBZ0JGLE9BQU9vQixpQkFBdkI7QUFDRDs7QUFFRCxhQUNFLDhCQUFDLE9BQUQsYUFBUyxXQUFXckIsV0FBV0ksSUFBWCxDQUFnQixHQUFoQixDQUFwQixJQUE4Q04sS0FBOUMsRUFERjtBQUdEOzs7O0VBdkNzQixnQkFBTVEsUzs7c0JBQWxCRyxHOzs7U0FDR0Y7O3NCQURIRSxHOzs7U0FFR3BCOztrQkF3Q0RvQixHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGNsYXNzIE5hdkxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjb250ZW50LFxuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBocmVmLFxuICAgICAgYXMsXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IEVsZW1lbnQgPSBhcyB8fCAnYSc7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgc3R5bGVzLm5hdkxpbmsgXTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuZGlzYWJsZWQpO1xuICAgIH1cblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RWxlbWVudFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfVxuICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICB7Li4ub3RoZXJ9XG4gICAgICA+XG4gICAgICAgIHthY3RpdmUgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zY3JlZW5SZWFkZXJ9PihjdXJyZW50KTwvc3Bhbj4gOiBudWxsfVxuICAgICAgICB7Y29udGVudCB8fCBjaGlsZHJlbn1cbiAgICAgIDwvRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXZJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyBzdHlsZXMubmF2SXRlbSBdO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIEl0ZW0gPSBOYXZJdGVtXG4gIHN0YXRpYyBMaW5rID0gTmF2TGlua1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXMsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIGp1c3RpZmllZCxcbiAgICAgIGFsaWduLFxuICAgICAgdHlwZSxcbiAgICAgIC4uLm90aGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgc3R5bGVzLm5hdiBdO1xuICAgIGNvbnN0IEVsZW1lbnQgPSBhcyB8fCAndWwnO1xuICAgIGNvbnN0IHN0eWxlID0ge307XG5cbiAgICBpZiAodHlwZSA9PT0gJ3BpbGxzJykge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5uYXZQaWxscyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndGFicycpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMubmF2VGFicyk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmZsZXhDb2x1bW4pO1xuICAgIH1cblxuICAgIGlmIChqdXN0aWZpZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMubmF2SnVzdGlmaWVkKTtcbiAgICB9XG5cbiAgICBpZiAoYWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmp1c3RpZnlDb250ZW50Q2VudGVyKTtcbiAgICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmp1c3RpZnlDb250ZW50RW5kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVsZW1lbnQgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19