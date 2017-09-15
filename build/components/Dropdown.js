"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.DropdownItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownItem = exports.DropdownItem = function DropdownItem(_ref) {
  var key = _ref.key,
      value = _ref.value;
  return _react2.default.createElement(
    "a",
    { className: "dropdown-item", href: "#" },
    value
  );
};

var Dropdown = exports.Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref2, [this].concat(args))), _this), Object.defineProperty(_this, "state", {
      enumerable: true,
      writable: true,
      value: {
        show: false
      }
    }), Object.defineProperty(_this, "toggle", {
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({ show: !_this.state.show });
      }
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          options = _props.options,
          grouped = _props.grouped,
          right = _props.right;
      var show = this.state.show;

      var classNames = [];
      var menuClassNames = ['dropdown-menu'];

      if (className) {
        classNames.push(className);
      }

      if (show) {
        classNames.push('show');
      }

      if (grouped) {
        classNames.push('input-group-btn');
      }

      if (right) {
        menuClassNames.push('dropdown-menu-right');
      }

      return _react2.default.createElement(
        "div",
        { className: classNames.join(' ') },
        _react2.default.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-secondary dropdown-toggle",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": show,
            onClick: this.toggle
          },
          "Action"
        ),
        _react2.default.createElement(
          "div",
          { className: menuClassNames.join(' '), type: "text" },
          options.map(function (opt) {
            return _react2.default.createElement(DropdownItem, opt);
          })
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duLmpzeCJdLCJuYW1lcyI6WyJEcm9wZG93bkl0ZW0iLCJrZXkiLCJ2YWx1ZSIsIkRyb3Bkb3duIiwic2hvdyIsImUiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJvcHRpb25zIiwiZ3JvdXBlZCIsInJpZ2h0IiwiY2xhc3NOYW1lcyIsIm1lbnVDbGFzc05hbWVzIiwicHVzaCIsImpvaW4iLCJ0b2dnbGUiLCJtYXAiLCJvcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxzQ0FBZSxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsTUFBUUMsS0FBUixRQUFRQSxLQUFSO0FBQUEsU0FDMUI7QUFBQTtBQUFBLE1BQUcsV0FBVSxlQUFiLEVBQTZCLE1BQUssR0FBbEM7QUFBdUNBO0FBQXZDLEdBRDBCO0FBQUEsQ0FBckI7O0lBSU1DLFEsV0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFFSDtBQUNOQyxjQUFNO0FBREE7Ozs7YUFJQyxlQUFDQyxDQUFELEVBQU87QUFDZCxjQUFLQyxRQUFMLENBQWMsRUFBRUYsTUFBTSxDQUFDLE1BQUtHLEtBQUwsQ0FBV0gsSUFBcEIsRUFBZDtBQUNEOzs7Ozs7NkJBRVE7QUFBQSxtQkFDd0MsS0FBS0ksS0FEN0M7QUFBQSxVQUNDQyxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxPQURaLFVBQ1lBLE9BRFo7QUFBQSxVQUNxQkMsT0FEckIsVUFDcUJBLE9BRHJCO0FBQUEsVUFDOEJDLEtBRDlCLFVBQzhCQSxLQUQ5QjtBQUFBLFVBRUNSLElBRkQsR0FFVSxLQUFLRyxLQUZmLENBRUNILElBRkQ7O0FBR1AsVUFBTVMsYUFBYSxFQUFuQjtBQUNBLFVBQU1DLGlCQUFpQixDQUNyQixlQURxQixDQUF2Qjs7QUFJQSxVQUFJTCxTQUFKLEVBQWU7QUFDYkksbUJBQVdFLElBQVgsQ0FBZ0JOLFNBQWhCO0FBQ0Q7O0FBRUQsVUFBSUwsSUFBSixFQUFVO0FBQ1JTLG1CQUFXRSxJQUFYLENBQWdCLE1BQWhCO0FBQ0Q7O0FBRUQsVUFBSUosT0FBSixFQUFhO0FBQ1hFLG1CQUFXRSxJQUFYLENBQWdCLGlCQUFoQjtBQUNEOztBQUVELFVBQUlILEtBQUosRUFBVztBQUNURSx1QkFBZUMsSUFBZixDQUFvQixxQkFBcEI7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdGLFdBQVdHLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFDRSxrQkFBSyxRQURQO0FBRUUsdUJBQVUsbUNBRlo7QUFHRSwyQkFBWSxVQUhkO0FBSUUsNkJBQWMsTUFKaEI7QUFLRSw2QkFBZVosSUFMakI7QUFNRSxxQkFBUyxLQUFLYTtBQU5oQjtBQUFBO0FBQUEsU0FERjtBQVNFO0FBQUE7QUFBQSxZQUFLLFdBQVdILGVBQWVFLElBQWYsQ0FBb0IsR0FBcEIsQ0FBaEIsRUFBMEMsTUFBSyxNQUEvQztBQUVJTixrQkFBUVEsR0FBUixDQUFZO0FBQUEsbUJBQ1YsOEJBQUMsWUFBRCxFQUFrQkMsR0FBbEIsQ0FEVTtBQUFBLFdBQVo7QUFGSjtBQVRGLE9BREY7QUFtQkQ7Ozs7OztrQkFJWWhCLFEiLCJmaWxlIjoiRHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRHJvcGRvd25JdGVtID0gKHsga2V5LCB2YWx1ZSB9KSA9PiAoXG4gIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPnt2YWx1ZX08L2E+XG4pXG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93biBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvdzogZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6ICF0aGlzLnN0YXRlLnNob3cgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIG9wdGlvbnMsIGdyb3VwZWQsIHJpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG4gICAgY29uc3QgbWVudUNsYXNzTmFtZXMgPSBbXG4gICAgICAnZHJvcGRvd24tbWVudSdcbiAgICBdO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHNob3cpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnc2hvdycpO1xuICAgIH1cblxuICAgIGlmIChncm91cGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2lucHV0LWdyb3VwLWJ0bicpO1xuICAgIH1cblxuICAgIGlmIChyaWdodCkge1xuICAgICAgbWVudUNsYXNzTmFtZXMucHVzaCgnZHJvcGRvd24tbWVudS1yaWdodCcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD17c2hvd31cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZX1cbiAgICAgICAgPkFjdGlvbjwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVudUNsYXNzTmFtZXMuam9pbignICcpfSB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wdGlvbnMubWFwKG9wdCA9PiAoXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gey4uLm9wdH0gLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiJdfQ==