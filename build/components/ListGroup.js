'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListGroup = exports.ListGroupItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListGroupItem = exports.ListGroupItem = function (_React$Component) {
  _inherits(ListGroupItem, _React$Component);

  function ListGroupItem() {
    _classCallCheck(this, ListGroupItem);

    return _possibleConstructorReturn(this, (ListGroupItem.__proto__ || Object.getPrototypeOf(ListGroupItem)).apply(this, arguments));
  }

  _createClass(ListGroupItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          disabled = _props.disabled,
          as = _props.as,
          action = _props.action,
          color = _props.color,
          other = _objectWithoutProperties(_props, ['active', 'disabled', 'as', 'action', 'color']);

      var Element = as || 'li';
      var classNames = ['list-group-item'];

      if (active) {
        classNames.push('active');
      }

      if (disabled) {
        classNames.push('disabled');
      }

      if (action) {
        classNames.push('list-group-item-action');
      }

      switch (color) {
        case 'primary':
          classNames.push('list-group-item-primary');
          break;
        case 'info':
          classNames.push('list-group-item-info');
          break;
        case 'success':
          classNames.push('list-group-item-success');
          break;
        case 'warning':
          classNames.push('list-group-item-warning');
          break;
        case 'danger':
          classNames.push('list-group-item-danger');
          break;
      }

      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return ListGroupItem;
}(_react2.default.Component);

var ListGroup = exports.ListGroup = function (_React$Component2) {
  _inherits(ListGroup, _React$Component2);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    return _possibleConstructorReturn(this, (ListGroup.__proto__ || Object.getPrototypeOf(ListGroup)).apply(this, arguments));
  }

  _createClass(ListGroup, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          as = _props2.as,
          loading = _props2.loading,
          children = _props2.children,
          other = _objectWithoutProperties(_props2, ['as', 'loading', 'children']);

      var Element = as || 'ul';

      return _react2.default.createElement(
        Element,
        _extends({ className: 'list-group' }, other),
        children
      );
    }
  }]);

  return ListGroup;
}(_react2.default.Component);

Object.defineProperty(ListGroup, 'Item', {
  enumerable: true,
  writable: true,
  value: ListGroupItem
});
exports.default = ListGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3RHcm91cC5qc3giXSwibmFtZXMiOlsiTGlzdEdyb3VwSXRlbSIsInByb3BzIiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJhcyIsImFjdGlvbiIsImNvbG9yIiwib3RoZXIiLCJFbGVtZW50IiwiY2xhc3NOYW1lcyIsInB1c2giLCJqb2luIiwiQ29tcG9uZW50IiwiTGlzdEdyb3VwIiwibG9hZGluZyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQUVhQSxhLFdBQUFBLGE7Ozs7Ozs7Ozs7OzZCQUNGO0FBQUEsbUJBUUgsS0FBS0MsS0FSRjtBQUFBLFVBRUxDLE1BRkssVUFFTEEsTUFGSztBQUFBLFVBR0xDLFFBSEssVUFHTEEsUUFISztBQUFBLFVBSUxDLEVBSkssVUFJTEEsRUFKSztBQUFBLFVBS0xDLE1BTEssVUFLTEEsTUFMSztBQUFBLFVBTUxDLEtBTkssVUFNTEEsS0FOSztBQUFBLFVBT0ZDLEtBUEU7O0FBU1AsVUFBTUMsVUFBVUosTUFBTSxJQUF0QjtBQUNBLFVBQU1LLGFBQWEsQ0FBRSxpQkFBRixDQUFuQjs7QUFFQSxVQUFJUCxNQUFKLEVBQVk7QUFDVk8sbUJBQVdDLElBQVgsQ0FBZ0IsUUFBaEI7QUFDRDs7QUFFRCxVQUFJUCxRQUFKLEVBQWM7QUFDWk0sbUJBQVdDLElBQVgsQ0FBZ0IsVUFBaEI7QUFDRDs7QUFFRCxVQUFJTCxNQUFKLEVBQVk7QUFDVkksbUJBQVdDLElBQVgsQ0FBZ0Isd0JBQWhCO0FBQ0Q7O0FBRUQsY0FBUUosS0FBUjtBQUNFLGFBQUssU0FBTDtBQUNFRyxxQkFBV0MsSUFBWCxDQUFnQix5QkFBaEI7QUFDQTtBQUNGLGFBQUssTUFBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQixzQkFBaEI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQix5QkFBaEI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQix5QkFBaEI7QUFDQTtBQUNGLGFBQUssUUFBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQix3QkFBaEI7QUFDQTtBQWZKOztBQWtCQSxhQUNFLDhCQUFDLE9BQUQsYUFBUyxXQUFXRCxXQUFXRSxJQUFYLENBQWdCLEdBQWhCLENBQXBCLElBQThDSixLQUE5QyxFQURGO0FBR0Q7Ozs7RUE5Q2dDLGdCQUFNSyxTOztJQWlENUJDLFMsV0FBQUEsUzs7Ozs7Ozs7Ozs7NkJBRUY7QUFBQSxvQkFDcUMsS0FBS1osS0FEMUM7QUFBQSxVQUNDRyxFQURELFdBQ0NBLEVBREQ7QUFBQSxVQUNLVSxPQURMLFdBQ0tBLE9BREw7QUFBQSxVQUNjQyxRQURkLFdBQ2NBLFFBRGQ7QUFBQSxVQUMyQlIsS0FEM0I7O0FBRVAsVUFBTUMsVUFBVUosTUFBTSxJQUF0Qjs7QUFFQSxhQUNFO0FBQUMsZUFBRDtBQUFBLG1CQUFTLFdBQVUsWUFBbkIsSUFBb0NHLEtBQXBDO0FBQ0lRO0FBREosT0FERjtBQUtEOzs7O0VBWDRCLGdCQUFNSCxTOztzQkFBeEJDLFM7OztTQUNHYjs7a0JBYURhLFMiLCJmaWxlIjoiTGlzdEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIExpc3RHcm91cEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBhcyxcbiAgICAgIGFjdGlvbixcbiAgICAgIGNvbG9yLFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBFbGVtZW50ID0gYXMgfHwgJ2xpJztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyAnbGlzdC1ncm91cC1pdGVtJyBdO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2xpc3QtZ3JvdXAtaXRlbS1hY3Rpb24nKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdsaXN0LWdyb3VwLWl0ZW0tcHJpbWFyeScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2xpc3QtZ3JvdXAtaXRlbS1pbmZvJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnbGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdsaXN0LWdyb3VwLWl0ZW0td2FybmluZycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnbGlzdC1ncm91cC1pdGVtLWRhbmdlcicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVsZW1lbnQgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpc3RHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBJdGVtID0gTGlzdEdyb3VwSXRlbVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhcywgbG9hZGluZywgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IEVsZW1lbnQgPSBhcyB8fCAndWwnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFbGVtZW50IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIiB7Li4ub3RoZXJ9PlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RHcm91cDtcbiJdfQ==