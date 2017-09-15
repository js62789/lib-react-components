'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = exports.NavbarContainer = exports.NavbarToggle = exports.NavbarMenu = exports.NavbarNav = exports.NavbarNavItem = exports.NavbarNavLink = exports.NavbarBrand = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavbarBrand = exports.NavbarBrand = function NavbarBrand(_ref) {
  var children = _ref.children,
      href = _ref.href;
  return _react2.default.createElement(
    'a',
    { className: 'navbar-brand', href: href | '#' },
    children
  );
};

var NavbarNavLink = function NavbarNavLink(_ref2) {
  var active = _ref2.active,
      other = _objectWithoutProperties(_ref2, ['active']);

  return _react2.default.createElement(_.Nav.Link, _extends({ className: 'nav-link ' + (active ? 'active' : '') }, other));
};

exports.NavbarNavLink = NavbarNavLink;
var NavbarNavItem = exports.NavbarNavItem = function NavbarNavItem(args) {
  return _react2.default.createElement(
    _.Nav.Item,
    null,
    _react2.default.createElement(NavbarNavLink, args)
  );
};

var NavbarNav = exports.NavbarNav = function NavbarNav(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    _.Nav,
    { className: 'navbar-nav' },
    children
  );
};

var NavbarMenu = exports.NavbarMenu = function NavbarMenu(_ref4) {
  var children = _ref4.children,
      open = _ref4.open;
  return _react2.default.createElement(
    'div',
    { className: 'collapse' + ' ' + 'navbar-collapse' + ' ' + (open ? 'show' : ''), id: 'navbarSupportedContent' },
    children
  );
};

var NavbarToggle = exports.NavbarToggle = function NavbarToggle(_ref5) {
  var onClick = _ref5.onClick,
      open = _ref5.open,
      right = _ref5.right;
  return _react2.default.createElement(
    'button',
    {
      onClick: onClick,
      className: 'navbar-toggler' + ' ' + (right ? 'navbar-toggler-right' : ''),
      type: 'button',
      'aria-controls': 'navbarSupportedContent',
      'aria-expanded': open,
      'aria-label': 'Toggle navigation'
    },
    _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
  );
};

var NavbarContainer = exports.NavbarContainer = function NavbarContainer(_ref6) {
  var children = _ref6.children;
  return _react2.default.createElement(
    _.Container,
    { className: 'container' },
    children
  );
};

var Navbar = exports.Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _ref7;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref7 = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref7, [this].concat(args))), _this), Object.defineProperty(_this, 'state', {
      enumerable: true,
      writable: true,
      value: { mobileMenuOpen: false }
    }), Object.defineProperty(_this, 'toggleMenuVisibility', {
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({ mobileMenuOpen: !_this.state.mobileMenuOpen });
      }
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          toggleable = _props.toggleable,
          inverted = _props.inverted,
          fixed = _props.fixed,
          brand = _props.brand,
          navItems = _props.navItems,
          active = _props.active,
          children = _props.children;
      var mobileMenuOpen = this.state.mobileMenuOpen;

      var classNames = ['navbar'];

      if (className) {
        classNames.push(className);
      }

      if (fixed) {
        classNames.push('fixed-top');
      }

      switch (toggleable) {
        case 'small':
          classNames.push('navbar-toggleable-sm');
          break;
        case 'medium':
          classNames.push('navbar-toggleable-md');
          break;
        case 'large':
          classNames.push('navbar-toggleable-lg');
          break;
        case true:
          classNames.push('navbar-toggleable');
          break;
      }

      if (inverted) {
        classNames.push('navbar-inverse');
      } else {
        classNames.push('navbar-light');
      }

      return children ? _react2.default.createElement(
        'nav',
        { className: classNames.join(' ') },
        children
      ) : _react2.default.createElement(
        'nav',
        { className: classNames.join(' ') },
        toggleable ? _react2.default.createElement(NavbarToggle, { onClick: this.toggleMenuVisibility, open: mobileMenuOpen, right: true }) : null,
        brand ? _react2.default.createElement(
          NavbarBrand,
          null,
          brand
        ) : null,
        _react2.default.createElement(
          NavbarMenu,
          { open: mobileMenuOpen },
          _react2.default.createElement(
            NavbarNav,
            null,
            navItems.map(function (item) {
              return _react2.default.createElement(NavbarNavItem, _extends({}, item, { active: item.key === active }));
            })
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

Object.defineProperty(Navbar, 'Brand', {
  enumerable: true,
  writable: true,
  value: NavbarBrand
});
Object.defineProperty(Navbar, 'Menu', {
  enumerable: true,
  writable: true,
  value: NavbarMenu
});
Object.defineProperty(Navbar, 'Nav', {
  enumerable: true,
  writable: true,
  value: NavbarNav
});
Object.defineProperty(Navbar, 'NavItem', {
  enumerable: true,
  writable: true,
  value: NavbarNavItem
});
Object.defineProperty(Navbar, 'NavLink', {
  enumerable: true,
  writable: true,
  value: NavbarNavLink
});
Object.defineProperty(Navbar, 'Toggle', {
  enumerable: true,
  writable: true,
  value: NavbarToggle
});
Object.defineProperty(Navbar, 'Container', {
  enumerable: true,
  writable: true,
  value: NavbarContainer
});
Object.defineProperty(Navbar, 'defaultProps', {
  enumerable: true,
  writable: true,
  value: { navItems: [] }
});
exports.default = Navbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giXSwibmFtZXMiOlsiTmF2YmFyQnJhbmQiLCJjaGlsZHJlbiIsImhyZWYiLCJOYXZiYXJOYXZMaW5rIiwiYWN0aXZlIiwib3RoZXIiLCJOYXZiYXJOYXZJdGVtIiwiYXJncyIsIk5hdmJhck5hdiIsIk5hdmJhck1lbnUiLCJvcGVuIiwiTmF2YmFyVG9nZ2xlIiwib25DbGljayIsInJpZ2h0IiwiTmF2YmFyQ29udGFpbmVyIiwiTmF2YmFyIiwibW9iaWxlTWVudU9wZW4iLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0b2dnbGVhYmxlIiwiaW52ZXJ0ZWQiLCJmaXhlZCIsImJyYW5kIiwibmF2SXRlbXMiLCJjbGFzc05hbWVzIiwicHVzaCIsImpvaW4iLCJ0b2dnbGVNZW51VmlzaWJpbGl0eSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBT08sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLElBQWIsUUFBYUEsSUFBYjtBQUFBLFNBQ3pCO0FBQUE7QUFBQSxNQUFHLFdBQVUsY0FBYixFQUE0QixNQUFNQSxPQUFPLEdBQXpDO0FBQStDRDtBQUEvQyxHQUR5QjtBQUFBLENBQXBCOztBQUlBLElBQU1FLGdCQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxNQUFHQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxNQUFjQyxLQUFkOztBQUFBLFNBQzNCLG9DQUFLLElBQUwsYUFBVSwwQkFBdUJELFNBQVMsUUFBVCxHQUFvQixFQUEzQyxDQUFWLElBQStEQyxLQUEvRCxFQUQyQjtBQUFBLENBQXRCOzs7QUFJQSxJQUFNQyx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQ7QUFBQSxTQUMzQjtBQUFBLFVBQUssSUFBTDtBQUFBO0FBQ0Usa0NBQUMsYUFBRCxFQUFtQkEsSUFBbkI7QUFERixHQUQyQjtBQUFBLENBQXRCOztBQU1BLElBQU1DLGdDQUFZLFNBQVpBLFNBQVk7QUFBQSxNQUFHUCxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUN2QjtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDR0E7QUFESCxHQUR1QjtBQUFBLENBQWxCOztBQU1BLElBQU1RLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUFHUixRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhUyxJQUFiLFNBQWFBLElBQWI7QUFBQSxTQUN4QjtBQUFBO0FBQUEsTUFBSyxXQUFjLFVBQWQsU0FBNEIsaUJBQTVCLFVBQWlEQSxPQUFPLE1BQVAsR0FBZ0IsRUFBakUsQ0FBTCxFQUE0RSxJQUFHLHdCQUEvRTtBQUNHVDtBQURILEdBRHdCO0FBQUEsQ0FBbkI7O0FBTUEsSUFBTVUsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlGLElBQVosU0FBWUEsSUFBWjtBQUFBLE1BQWtCRyxLQUFsQixTQUFrQkEsS0FBbEI7QUFBQSxTQUMxQjtBQUFBO0FBQUE7QUFDRSxlQUFTRCxPQURYO0FBRUUsaUJBQWMsZ0JBQWQsVUFBa0NDLFFBQVEsc0JBQVIsR0FBaUMsRUFBbkUsQ0FGRjtBQUdFLFlBQUssUUFIUDtBQUlFLHVCQUFjLHdCQUpoQjtBQUtFLHVCQUFlSCxJQUxqQjtBQU1FLG9CQUFXO0FBTmI7QUFRRSw0Q0FBTSxXQUFVLHFCQUFoQjtBQVJGLEdBRDBCO0FBQUEsQ0FBckI7O0FBYUEsSUFBTUksNENBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLE1BQUdiLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQzdCO0FBQUE7QUFBQSxNQUFXLFdBQVUsV0FBckI7QUFBa0NBO0FBQWxDLEdBRDZCO0FBQUEsQ0FBeEI7O0lBSU1jLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFXSCxFQUFFQyxnQkFBZ0IsS0FBbEI7Ozs7YUFFZTtBQUFBLGVBQU0sTUFBS0MsUUFBTCxDQUFjLEVBQUVELGdCQUFnQixDQUFDLE1BQUtFLEtBQUwsQ0FBV0YsY0FBOUIsRUFBZCxDQUFOO0FBQUE7Ozs7Ozs2QkFFZDtBQUFBLG1CQVVILEtBQUtHLEtBVkY7QUFBQSxVQUVMQyxTQUZLLFVBRUxBLFNBRks7QUFBQSxVQUdMQyxVQUhLLFVBR0xBLFVBSEs7QUFBQSxVQUlMQyxRQUpLLFVBSUxBLFFBSks7QUFBQSxVQUtMQyxLQUxLLFVBS0xBLEtBTEs7QUFBQSxVQU1MQyxLQU5LLFVBTUxBLEtBTks7QUFBQSxVQU9MQyxRQVBLLFVBT0xBLFFBUEs7QUFBQSxVQVFMckIsTUFSSyxVQVFMQSxNQVJLO0FBQUEsVUFTTEgsUUFUSyxVQVNMQSxRQVRLO0FBQUEsVUFXQ2UsY0FYRCxHQVdvQixLQUFLRSxLQVh6QixDQVdDRixjQVhEOztBQVlQLFVBQU1VLGFBQWEsQ0FDakIsUUFEaUIsQ0FBbkI7O0FBSUEsVUFBSU4sU0FBSixFQUFlO0FBQ2JNLG1CQUFXQyxJQUFYLENBQWdCUCxTQUFoQjtBQUNEOztBQUVELFVBQUlHLEtBQUosRUFBVztBQUNURyxtQkFBV0MsSUFBWCxDQUFnQixXQUFoQjtBQUNEOztBQUVELGNBQVFOLFVBQVI7QUFDRSxhQUFLLE9BQUw7QUFDRUsscUJBQVdDLElBQVgsQ0FBZ0Isc0JBQWhCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRUQscUJBQVdDLElBQVgsQ0FBZ0Isc0JBQWhCO0FBQ0E7QUFDRixhQUFLLE9BQUw7QUFDRUQscUJBQVdDLElBQVgsQ0FBZ0Isc0JBQWhCO0FBQ0E7QUFDRixhQUFLLElBQUw7QUFDRUQscUJBQVdDLElBQVgsQ0FBZ0IsbUJBQWhCO0FBQ0E7QUFaSjs7QUFlQSxVQUFJTCxRQUFKLEVBQWM7QUFDWkksbUJBQVdDLElBQVgsQ0FBZ0IsZ0JBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xELG1CQUFXQyxJQUFYLENBQWdCLGNBQWhCO0FBQ0Q7O0FBRUQsYUFBTzFCLFdBQ0w7QUFBQTtBQUFBLFVBQUssV0FBV3lCLFdBQVdFLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBaEI7QUFDRzNCO0FBREgsT0FESyxHQUtMO0FBQUE7QUFBQSxVQUFLLFdBQVd5QixXQUFXRSxJQUFYLENBQWdCLEdBQWhCLENBQWhCO0FBQ0lQLHFCQUFhLDhCQUFDLFlBQUQsSUFBYyxTQUFTLEtBQUtRLG9CQUE1QixFQUFrRCxNQUFNYixjQUF4RCxFQUF3RSxXQUF4RSxHQUFiLEdBQWdHLElBRHBHO0FBRUlRLGdCQUFRO0FBQUMscUJBQUQ7QUFBQTtBQUFjQTtBQUFkLFNBQVIsR0FBNkMsSUFGakQ7QUFHRTtBQUFDLG9CQUFEO0FBQUEsWUFBWSxNQUFNUixjQUFsQjtBQUNFO0FBQUMscUJBQUQ7QUFBQTtBQUNHUyxxQkFBU0ssR0FBVCxDQUFhO0FBQUEscUJBQVEsOEJBQUMsYUFBRCxlQUFtQkMsSUFBbkIsSUFBeUIsUUFBUUEsS0FBS0MsR0FBTCxLQUFhNUIsTUFBOUMsSUFBUjtBQUFBLGFBQWI7QUFESDtBQURGO0FBSEYsT0FMRjtBQWVEOzs7O0VBM0V5QixnQkFBTTZCLFM7O3NCQUFyQmxCLE07OztTQUNJZjs7c0JBREplLE07OztTQUVHTjs7c0JBRkhNLE07OztTQUdFUDs7c0JBSEZPLE07OztTQUlNVDs7c0JBSk5TLE07OztTQUtNWjs7c0JBTE5ZLE07OztTQU1LSjs7c0JBTkxJLE07OztTQU9RRDs7c0JBUFJDLE07OztTQVNXLEVBQUVVLFVBQVUsRUFBWjs7a0JBcUVUVixNIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBDb250YWluZXIsXG4gIE5hdixcbn0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGNvbnN0IE5hdmJhckJyYW5kID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPXtocmVmIHwgJyMnfT57Y2hpbGRyZW59PC9hPlxuKVxuXG5leHBvcnQgY29uc3QgTmF2YmFyTmF2TGluayA9ICh7IGFjdGl2ZSwgLi4ub3RoZXIgfSkgPT4gKFxuICA8TmF2LkxpbmsgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHthY3RpdmUgPyAnYWN0aXZlJyA6ICcnfWB9IHsuLi5vdGhlcn0gLz5cbilcblxuZXhwb3J0IGNvbnN0IE5hdmJhck5hdkl0ZW0gPSAoYXJncykgPT4gKFxuICA8TmF2Lkl0ZW0+XG4gICAgPE5hdmJhck5hdkxpbmsgey4uLmFyZ3N9IC8+XG4gIDwvTmF2Lkl0ZW0+XG4pXG5cbmV4cG9ydCBjb25zdCBOYXZiYXJOYXYgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9OYXY+XG4pXG5cbmV4cG9ydCBjb25zdCBOYXZiYXJNZW51ID0gKHsgY2hpbGRyZW4sIG9wZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YCR7J2NvbGxhcHNlJ30gJHsnbmF2YmFyLWNvbGxhcHNlJ30gJHtvcGVuID8gJ3Nob3cnIDogJyd9YH0gaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGNvbnN0IE5hdmJhclRvZ2dsZSA9ICh7IG9uQ2xpY2ssIG9wZW4sIHJpZ2h0IH0pID0+IChcbiAgPGJ1dHRvblxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY2xhc3NOYW1lPXtgJHsnbmF2YmFyLXRvZ2dsZXInfSAke3JpZ2h0ID8gJ25hdmJhci10b2dnbGVyLXJpZ2h0JyA6ICcnfWB9XG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgIGFyaWEtZXhwYW5kZWQ9e29wZW59XG4gICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gIDwvYnV0dG9uPlxuKVxuXG5leHBvcnQgY29uc3QgTmF2YmFyQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBCcmFuZCA9IE5hdmJhckJyYW5kXG4gIHN0YXRpYyBNZW51ID0gTmF2YmFyTWVudVxuICBzdGF0aWMgTmF2ID0gTmF2YmFyTmF2XG4gIHN0YXRpYyBOYXZJdGVtID0gTmF2YmFyTmF2SXRlbVxuICBzdGF0aWMgTmF2TGluayA9IE5hdmJhck5hdkxpbmtcbiAgc3RhdGljIFRvZ2dsZSA9IE5hdmJhclRvZ2dsZVxuICBzdGF0aWMgQ29udGFpbmVyID0gTmF2YmFyQ29udGFpbmVyXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHsgbmF2SXRlbXM6IFtdIH1cblxuICBzdGF0ZSA9IHsgbW9iaWxlTWVudU9wZW46IGZhbHNlIH1cblxuICB0b2dnbGVNZW51VmlzaWJpbGl0eSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2JpbGVNZW51T3BlbjogIXRoaXMuc3RhdGUubW9iaWxlTWVudU9wZW4gfSlcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgdG9nZ2xlYWJsZSxcbiAgICAgIGludmVydGVkLFxuICAgICAgZml4ZWQsXG4gICAgICBicmFuZCxcbiAgICAgIG5hdkl0ZW1zLFxuICAgICAgYWN0aXZlLFxuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1vYmlsZU1lbnVPcGVuIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXG4gICAgICAnbmF2YmFyJyxcbiAgICBdO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2ZpeGVkLXRvcCcpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9nZ2xlYWJsZSkge1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ25hdmJhci10b2dnbGVhYmxlLXNtJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCduYXZiYXItdG9nZ2xlYWJsZS1tZCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCduYXZiYXItdG9nZ2xlYWJsZS1sZycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCduYXZiYXItdG9nZ2xlYWJsZScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW52ZXJ0ZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnbmF2YmFyLWludmVyc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCduYXZiYXItbGlnaHQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW4gPyAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L25hdj5cbiAgICApIDogKFxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgICAgeyB0b2dnbGVhYmxlID8gPE5hdmJhclRvZ2dsZSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5fSBvcGVuPXttb2JpbGVNZW51T3Blbn0gcmlnaHQgLz4gOiBudWxsIH1cbiAgICAgICAgeyBicmFuZCA/IDxOYXZiYXJCcmFuZD57YnJhbmR9PC9OYXZiYXJCcmFuZD4gOiBudWxsIH1cbiAgICAgICAgPE5hdmJhck1lbnUgb3Blbj17bW9iaWxlTWVudU9wZW59PlxuICAgICAgICAgIDxOYXZiYXJOYXY+XG4gICAgICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT4gPE5hdmJhck5hdkl0ZW0gey4uLml0ZW19IGFjdGl2ZT17aXRlbS5rZXkgPT09IGFjdGl2ZX0gLz4pfVxuICAgICAgICAgIDwvTmF2YmFyTmF2PlxuICAgICAgICA8L05hdmJhck1lbnU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ==