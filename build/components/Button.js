'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          size = _props.size,
          grouped = _props.grouped,
          other = _objectWithoutProperties(_props, ['className', 'color', 'size', 'grouped']);

      var classNames = ['btn'];

      if (color) {
        classNames.push('btn-' + color);
      }

      switch (size) {
        case 'small':
          classNames.push('btn-sm');
          break;
        case 'large':
          classNames.push('btn-lg');
          break;
      }

      if (className) {
        classNames.push(className);
      }

      var button = _react2.default.createElement('button', _extends({ className: classNames.join(' ') }, other));

      if (grouped) {
        return _react2.default.createElement(
          'span',
          { className: 'input-group-btn' },
          button
        );
      }

      return button;
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qc3giXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb2xvciIsInNpemUiLCJncm91cGVkIiwib3RoZXIiLCJjbGFzc05hbWVzIiwicHVzaCIsImJ1dHRvbiIsImpvaW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSxtQkFDK0MsS0FBS0MsS0FEcEQ7QUFBQSxVQUNDQyxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxLQURaLFVBQ1lBLEtBRFo7QUFBQSxVQUNtQkMsSUFEbkIsVUFDbUJBLElBRG5CO0FBQUEsVUFDeUJDLE9BRHpCLFVBQ3lCQSxPQUR6QjtBQUFBLFVBQ3FDQyxLQURyQzs7QUFFUCxVQUFNQyxhQUFhLENBQUUsS0FBRixDQUFuQjs7QUFFQSxVQUFJSixLQUFKLEVBQVc7QUFDVEksbUJBQVdDLElBQVgsVUFBdUJMLEtBQXZCO0FBQ0Q7O0FBRUQsY0FBUUMsSUFBUjtBQUNFLGFBQUssT0FBTDtBQUNFRyxxQkFBV0MsSUFBWCxDQUFnQixRQUFoQjtBQUNBO0FBQ0YsYUFBSyxPQUFMO0FBQ0VELHFCQUFXQyxJQUFYLENBQWdCLFFBQWhCO0FBQ0E7QUFOSjs7QUFTQSxVQUFJTixTQUFKLEVBQWU7QUFDYkssbUJBQVdDLElBQVgsQ0FBZ0JOLFNBQWhCO0FBQ0Q7O0FBRUQsVUFBTU8sU0FDSixtREFBUSxXQUFXRixXQUFXRyxJQUFYLENBQWdCLEdBQWhCLENBQW5CLElBQTZDSixLQUE3QyxFQURGOztBQUlBLFVBQUlELE9BQUosRUFBYTtBQUNYLGVBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxpQkFBaEI7QUFDR0k7QUFESCxTQURGO0FBS0Q7O0FBRUQsYUFBT0EsTUFBUDtBQUNEOzs7O0VBbkN5QixnQkFBTUUsUzs7a0JBc0NuQlgsTSIsImZpbGUiOiJCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjb2xvciwgc2l6ZSwgZ3JvdXBlZCwgLi4ub3RoZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgJ2J0bicgXTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGBidG4tJHtjb2xvcn1gKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdidG4tc20nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnYnRuLWxnJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLm90aGVyfSAvPlxuICAgICk7XG5cbiAgICBpZiAoZ3JvdXBlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAge2J1dHRvbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19