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

var styles = {
  'navbar': 'styles__navbar___3w3-V',
  'navbarToggler': 'styles__navbarToggler___2hEw_',
  'navbarTogglerRight': 'styles__navbarTogglerRight___w9IHn',
  'navbarTogglerIcon': 'styles__navbarTogglerIcon___1OfS_',
  'navbarBrand': 'styles__navbarBrand___1Ic3h',
  'collapse': 'styles__collapse___1GQmw',
  'show': 'styles__show___3v_XG',
  'navbarNav': 'styles__navbarNav___ay18f',
  'navLink': 'styles__navLink___2Jiws',
  'navbarLight': 'styles__navbarLight___1Si4R',
  'disabled': 'styles__disabled___1p-3a',
  'open': 'styles__open___18Mki',
  'active': 'styles__active___3eTNn',
  'navbarText': 'styles__navbarText___3D82x',
  'navbarInverse': 'styles__navbarInverse___Rd2A9',
  'navbarToggleable': 'styles__navbarToggleable___2QEzO',
  'dropdownMenu': 'styles__dropdownMenu___iO-_q',
  'container': 'styles__container___2OEka',
  'navbarCollapse': 'styles__navbarCollapse___1yl-9',
  'navbarToggleableSmall': 'styles__navbarToggleableSmall___2s3f3',
  'navbarToggleableMedium': 'styles__navbarToggleableMedium___3FTC4',
  'navbarToggleableLarge': 'styles__navbarToggleableLarge___hC0C4',
  'fixedTop': 'styles__fixedTop___1eBeA'
};
var NavbarBrand = exports.NavbarBrand = function NavbarBrand(_ref) {
  var children = _ref.children,
      href = _ref.href;
  return _react2.default.createElement(
    'a',
    { className: styles.navbarBrand, href: href | '#' },
    children
  );
};

var NavbarNavLink = function NavbarNavLink(_ref2) {
  var active = _ref2.active,
      other = _objectWithoutProperties(_ref2, ['active']);

  return _react2.default.createElement(_.Nav.Link, _extends({ className: styles.navLink + ' ' + (active ? styles.active : '') }, other));
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
    { className: styles.navbarNav },
    children
  );
};

var NavbarMenu = exports.NavbarMenu = function NavbarMenu(_ref4) {
  var children = _ref4.children,
      open = _ref4.open;
  return _react2.default.createElement(
    'div',
    { className: styles.collapse + ' ' + styles.navbarCollapse + ' ' + (open ? styles.show : ''), id: 'navbarSupportedContent' },
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
      className: styles.navbarToggler + ' ' + (right ? styles.navbarTogglerRight : ''),
      type: 'button',
      'aria-controls': 'navbarSupportedContent',
      'aria-expanded': open,
      'aria-label': 'Toggle navigation'
    },
    _react2.default.createElement('span', { className: styles.navbarTogglerIcon })
  );
};

var NavbarContainer = exports.NavbarContainer = function NavbarContainer(_ref6) {
  var children = _ref6.children;
  return _react2.default.createElement(
    _.Container,
    { className: styles.container },
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
          toggleable = _props.toggleable,
          inverted = _props.inverted,
          fixed = _props.fixed,
          brand = _props.brand,
          navItems = _props.navItems,
          active = _props.active,
          children = _props.children;
      var mobileMenuOpen = this.state.mobileMenuOpen;

      var classNames = [styles.navbar];

      if (fixed) {
        classNames.push(styles.fixedTop);
      }

      switch (toggleable) {
        case 'small':
          classNames.push(styles.navbarToggleableSmall);
          break;
        case 'medium':
          classNames.push(styles.navbarToggleableMedium);
          break;
        case 'large':
          classNames.push(styles.navbarToggleableLarge);
          break;
        case true:
          classNames.push(styles.navbarToggleable);
          break;
      }

      if (inverted) {
        classNames.push(styles.navbarInverse);
      } else {
        classNames.push(styles.navbarLight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qc3giXSwibmFtZXMiOlsiTmF2YmFyQnJhbmQiLCJjaGlsZHJlbiIsImhyZWYiLCJzdHlsZXMiLCJuYXZiYXJCcmFuZCIsIk5hdmJhck5hdkxpbmsiLCJhY3RpdmUiLCJvdGhlciIsIm5hdkxpbmsiLCJOYXZiYXJOYXZJdGVtIiwiYXJncyIsIk5hdmJhck5hdiIsIm5hdmJhck5hdiIsIk5hdmJhck1lbnUiLCJvcGVuIiwiY29sbGFwc2UiLCJuYXZiYXJDb2xsYXBzZSIsInNob3ciLCJOYXZiYXJUb2dnbGUiLCJvbkNsaWNrIiwicmlnaHQiLCJuYXZiYXJUb2dnbGVyIiwibmF2YmFyVG9nZ2xlclJpZ2h0IiwibmF2YmFyVG9nZ2xlckljb24iLCJOYXZiYXJDb250YWluZXIiLCJjb250YWluZXIiLCJOYXZiYXIiLCJtb2JpbGVNZW51T3BlbiIsInNldFN0YXRlIiwic3RhdGUiLCJwcm9wcyIsInRvZ2dsZWFibGUiLCJpbnZlcnRlZCIsImZpeGVkIiwiYnJhbmQiLCJuYXZJdGVtcyIsImNsYXNzTmFtZXMiLCJuYXZiYXIiLCJwdXNoIiwiZml4ZWRUb3AiLCJuYXZiYXJUb2dnbGVhYmxlU21hbGwiLCJuYXZiYXJUb2dnbGVhYmxlTWVkaXVtIiwibmF2YmFyVG9nZ2xlYWJsZUxhcmdlIiwibmF2YmFyVG9nZ2xlYWJsZSIsIm5hdmJhckludmVyc2UiLCJuYXZiYXJMaWdodCIsImpvaW4iLCJ0b2dnbGVNZW51VmlzaWJpbGl0eSIsIm1hcCIsIml0ZW0iLCJrZXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFPLElBQU1BLG9DQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxJQUFiLFFBQWFBLElBQWI7QUFBQSxTQUN6QjtBQUFBO0FBQUEs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O1NBR0VmOztzQkFIRmUsTTs7O1NBSU1qQjs7c0JBSk5pQixNOzs7U0FLTXJCOztzQkFMTnFCLE07OztTQU1LUjs7c0JBTkxRLE07OztTQU9RRjs7c0JBUFJFLE07OztTQVNXLEVBQUVTLFVBQVUsRUFBWjs7a0JBZ0VUVCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIElucHV0LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgTmF2LFxufSBmcm9tICcuLi8nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuXG5leHBvcnQgY29uc3QgTmF2YmFyQnJhbmQgPSAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiAoXG4gIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhckJyYW5kfSBocmVmPXtocmVmIHwgJyMnfT57Y2hpbGRyZW59PC9hPlxuKVxuXG5leHBvcnQgY29uc3QgTmF2YmFyTmF2TGluayA9ICh7IGFjdGl2ZSwgLi4ub3RoZXIgfSkgPT4gKFxuICA8TmF2LkxpbmsgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2TGlua30gJHthY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogJyd9YH0gey4uLm90aGVyfSAvPlxuKVxuXG5leHBvcnQgY29uc3QgTmF2YmFyTmF2SXRlbSA9IChhcmdzKSA9PiAoXG4gIDxOYXYuSXRlbT5cbiAgICA8TmF2YmFyTmF2TGluayB7Li4uYXJnc30gLz5cbiAgPC9OYXYuSXRlbT5cbilcblxuZXhwb3J0IGNvbnN0IE5hdmJhck5hdiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPE5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJOYXZ9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9OYXY+XG4pXG5cbmV4cG9ydCBjb25zdCBOYXZiYXJNZW51ID0gKHsgY2hpbGRyZW4sIG9wZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbGxhcHNlfSAke3N0eWxlcy5uYXZiYXJDb2xsYXBzZX0gJHtvcGVuID8gc3R5bGVzLnNob3cgOiAnJ31gfSBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgY29uc3QgTmF2YmFyVG9nZ2xlID0gKHsgb25DbGljaywgb3BlbiwgcmlnaHQgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYXZiYXJUb2dnbGVyfSAke3JpZ2h0ID8gc3R5bGVzLm5hdmJhclRvZ2dsZXJSaWdodCA6ICcnfWB9XG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgIGFyaWEtZXhwYW5kZWQ9e29wZW59XG4gICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgPlxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhclRvZ2dsZXJJY29ufT48L3NwYW4+XG4gIDwvYnV0dG9uPlxuKVxuXG5leHBvcnQgY29uc3QgTmF2YmFyQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIEJyYW5kID0gTmF2YmFyQnJhbmRcbiAgc3RhdGljIE1lbnUgPSBOYXZiYXJNZW51XG4gIHN0YXRpYyBOYXYgPSBOYXZiYXJOYXZcbiAgc3RhdGljIE5hdkl0ZW0gPSBOYXZiYXJOYXZJdGVtXG4gIHN0YXRpYyBOYXZMaW5rID0gTmF2YmFyTmF2TGlua1xuICBzdGF0aWMgVG9nZ2xlID0gTmF2YmFyVG9nZ2xlXG4gIHN0YXRpYyBDb250YWluZXIgPSBOYXZiYXJDb250YWluZXJcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0geyBuYXZJdGVtczogW10gfVxuXG4gIHN0YXRlID0geyBtb2JpbGVNZW51T3BlbjogZmFsc2UgfVxuXG4gIHRvZ2dsZU1lbnVWaXNpYmlsaXR5ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vYmlsZU1lbnVPcGVuOiAhdGhpcy5zdGF0ZS5tb2JpbGVNZW51T3BlbiB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b2dnbGVhYmxlLFxuICAgICAgaW52ZXJ0ZWQsXG4gICAgICBmaXhlZCxcbiAgICAgIGJyYW5kLFxuICAgICAgbmF2SXRlbXMsXG4gICAgICBhY3RpdmUsXG4gICAgICBjaGlsZHJlblxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbW9iaWxlTWVudU9wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtcbiAgICAgIHN0eWxlcy5uYXZiYXIsXG4gICAgXTtcblxuICAgIGlmIChmaXhlZCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5maXhlZFRvcCk7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2dnbGVhYmxlKSB7XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMubmF2YmFyVG9nZ2xlYWJsZVNtYWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLm5hdmJhclRvZ2dsZWFibGVNZWRpdW0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5uYXZiYXJUb2dnbGVhYmxlTGFyZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5uYXZiYXJUb2dnbGVhYmxlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGludmVydGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLm5hdmJhckludmVyc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLm5hdmJhckxpZ2h0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW4gPyAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L25hdj5cbiAgICApIDogKFxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgICAgeyB0b2dnbGVhYmxlID8gPE5hdmJhclRvZ2dsZSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5fSBvcGVuPXttb2JpbGVNZW51T3Blbn0gcmlnaHQgLz4gOiBudWxsIH1cbiAgICAgICAgeyBicmFuZCA/IDxOYXZiYXJCcmFuZD57YnJhbmR9PC9OYXZiYXJCcmFuZD4gOiBudWxsIH1cbiAgICAgICAgPE5hdmJhck1lbnUgb3Blbj17bW9iaWxlTWVudU9wZW59PlxuICAgICAgICAgIDxOYXZiYXJOYXY+XG4gICAgICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT4gPE5hdmJhck5hdkl0ZW0gey4uLml0ZW19IGFjdGl2ZT17aXRlbS5rZXkgPT09IGFjdGl2ZX0gLz4pfVxuICAgICAgICAgIDwvTmF2YmFyTmF2PlxuICAgICAgICA8L05hdmJhck1lbnU+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ==