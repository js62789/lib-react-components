'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = exports.Row = exports.Column = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Column = exports.Column = function (_React$Component) {
  _inherits(Column, _React$Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      var Element = this.props.as || 'div';

      var _props = this.props,
          xsmall = _props.xsmall,
          small = _props.small,
          medium = _props.medium,
          large = _props.large,
          className = _props.className,
          offset = _props.offset,
          smallOffset = _props.smallOffset,
          mediumOffset = _props.mediumOffset,
          largeOffset = _props.largeOffset,
          push = _props.push,
          smallPush = _props.smallPush,
          mediumPush = _props.mediumPush,
          largePush = _props.largePush,
          pull = _props.pull,
          smallPull = _props.smallPull,
          mediumPull = _props.mediumPull,
          largePull = _props.largePull,
          other = _objectWithoutProperties(_props, ['xsmall', 'small', 'medium', 'large', 'className', 'offset', 'smallOffset', 'mediumOffset', 'largeOffset', 'push', 'smallPush', 'mediumPush', 'largePush', 'pull', 'smallPull', 'mediumPull', 'largePull']);

      var classNames = [];

      if (xsmall) {
        classNames.push('col' + (xsmall === true ? '' : '-' + xsmall));
      }

      if (small) {
        classNames.push('col-sm' + (small === true ? '' : '-' + small));
      }

      if (medium) {
        classNames.push('col-md' + (medium === true ? '' : '-' + medium));
      }

      if (large) {
        classNames.push('col-lg' + (large === true ? '' : '-' + large));
      }

      if (offset) {
        classNames.push('offset-' + offset);
      }

      if (smallOffset) {
        classNames.push('offset-sm-' + smallOffset);
      }

      if (mediumOffset) {
        classNames.push('offset-md-' + mediumOffset);
      }

      if (largeOffset) {
        classNames.push('offset-lg-' + largeOffset);
      }

      if (push) {
        classNames.push('push-' + push);
      }

      if (smallPush) {
        classNames.push('push-sm-' + smallPush);
      }

      if (mediumPush) {
        classNames.push('push-md-' + mediumPush);
      }

      if (largePush) {
        classNames.push('push-lg-' + largePush);
      }

      if (pull) {
        classNames.push('pull-' + pull);
      }

      if (smallPull) {
        classNames.push('pull-sm-' + smallPull);
      }

      if (mediumPull) {
        classNames.push('pull-md-' + mediumPull);
      }

      if (largePull) {
        classNames.push('pull-lg-' + largePull);
      }

      if (!xsmall && !small && !medium && !large) {
        classNames.push('col');
      }

      if (className) {
        classNames.push(className);
      }

      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Column;
}(_react2.default.Component);

var Row = exports.Row = function (_React$Component2) {
  _inherits(Row, _React$Component2);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var Element = this.props.as || 'div';

      var _props2 = this.props,
          className = _props2.className,
          other = _objectWithoutProperties(_props2, ['className']);

      var classNames = ['row'];
      if (className) {
        classNames.push(className);
      }
      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Row;
}(_react2.default.Component);

var Grid = exports.Grid = function (_React$Component3) {
  _inherits(Grid, _React$Component3);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          className = _props3.className,
          as = _props3.as,
          other = _objectWithoutProperties(_props3, ['className', 'as']);

      var Element = as || 'div';
      var classNames = ['grid'];
      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Grid;
}(_react2.default.Component);

Object.defineProperty(Grid, 'Column', {
  enumerable: true,
  writable: true,
  value: Column
});
Object.defineProperty(Grid, 'Row', {
  enumerable: true,
  writable: true,
  value: Row
});
exports.default = Grid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQuanN4Il0sIm5hbWVzIjpbIkNvbHVtbiIsIkVsZW1lbnQiLCJwcm9wcyIsImFzIiwieHNtYWxsIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsImNsYXNzTmFtZSIsIm9mZnNldCIsInNtYWxsT2Zmc2V0IiwibWVkaXVtT2Zmc2V0IiwibGFyZ2VPZmZzZXQiLCJwdXNoIiwic21hbGxQdXNoIiwibWVkaXVtUHVzaCIsImxhcmdlUHVzaCIsInB1bGwiLCJzbWFsbFB1bGwiLCJtZWRpdW1QdWxsIiwibGFyZ2VQdWxsIiwib3RoZXIiLCJjbGFzc05hbWVzIiwiam9pbiIsIkNvbXBvbmVudCIsIlJvdyIsIkdyaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxVQUFNQyxVQUFVLEtBQUtDLEtBQUwsQ0FBV0MsRUFBWCxJQUFpQixLQUFqQzs7QUFETyxtQkFxQkgsS0FBS0QsS0FyQkY7QUFBQSxVQUdMRSxNQUhLLFVBR0xBLE1BSEs7QUFBQSxVQUlMQyxLQUpLLFVBSUxBLEtBSks7QUFBQSxVQUtMQyxNQUxLLFVBS0xBLE1BTEs7QUFBQSxVQU1MQyxLQU5LLFVBTUxBLEtBTks7QUFBQSxVQU9MQyxTQVBLLFVBT0xBLFNBUEs7QUFBQSxVQVFMQyxNQVJLLFVBUUxBLE1BUks7QUFBQSxVQVNMQyxXQVRLLFVBU0xBLFdBVEs7QUFBQSxVQVVMQyxZQVZLLFVBVUxBLFlBVks7QUFBQSxVQVdMQyxXQVhLLFVBV0xBLFdBWEs7QUFBQSxVQVlMQyxJQVpLLFVBWUxBLElBWks7QUFBQSxVQWFMQyxTQWJLLFVBYUxBLFNBYks7QUFBQSxVQWNMQyxVQWRLLFVBY0xBLFVBZEs7QUFBQSxVQWVMQyxTQWZLLFVBZUxBLFNBZks7QUFBQSxVQWdCTEMsSUFoQkssVUFnQkxBLElBaEJLO0FBQUEsVUFpQkxDLFNBakJLLFVBaUJMQSxTQWpCSztB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LEk7Ozs7Ozs7Ozs7OzZCQUdGO0FBQUEsb0JBQzZCLEtBQUt4QixLQURsQztBQUFBLFVBQ0NNLFNBREQsV0FDQ0EsU0FERDtBQUFBLFVBQ1lMLEVBRFosV0FDWUEsRUFEWjtBQUFBLFVBQ21Ca0IsS0FEbkI7O0FBRVAsVUFBTXBCLFVBQVVFLE1BQU0sS0FBdEI7QUFDQSxVQUFNbUIsYUFBYSxDQUFFLE1BQUYsQ0FBbkI7QUFDQSxhQUNFLDhCQUFDLE9BQUQsYUFBUyxXQUFXQSxXQUFXQyxJQUFYLENBQWdCLEdBQWhCLENBQXBCLElBQThDRixLQUE5QyxFQURGO0FBR0Q7Ozs7RUFWdUIsZ0JBQU1HLFM7O3NCQUFuQkUsSTs7O1NBQ0sxQjs7c0JBREwwQixJOzs7U0FFRUQ7O2tCQVdBQyxJIiwiZmlsZSI6IkdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uICBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBFbGVtZW50ID0gdGhpcy5wcm9wcy5hcyB8fCAnZGl2JztcbiAgICBjb25zdCB7XG4gICAgICB4c21hbGwsXG4gICAgICBzbWFsbCxcbiAgICAgIG1lZGl1bSxcbiAgICAgIGxhcmdlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgb2Zmc2V0LFxuICAgICAgc21hbGxPZmZzZXQsXG4gICAgICBtZWRpdW1PZmZzZXQsXG4gICAgICBsYXJnZU9mZnNldCxcbiAgICAgIHB1c2gsXG4gICAgICBzbWFsbFB1c2gsXG4gICAgICBtZWRpdW1QdXNoLFxuICAgICAgbGFyZ2VQdXNoLFxuICAgICAgcHVsbCxcbiAgICAgIHNtYWxsUHVsbCxcbiAgICAgIG1lZGl1bVB1bGwsXG4gICAgICBsYXJnZVB1bGwsXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcblxuICAgIGlmICh4c21hbGwpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChgY29sJHt4c21hbGwgPT09IHRydWUgPyAnJyA6IGAtJHt4c21hbGx9YH1gKTtcbiAgICB9XG5cbiAgICBpZiAoc21hbGwpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChgY29sLXNtJHtzbWFsbCA9PT0gdHJ1ZSA/ICcnIDogYC0ke3NtYWxsfWB9YCk7XG4gICAgfVxuXG4gICAgaWYgKG1lZGl1bSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGBjb2wtbWQke21lZGl1bSA9PT0gdHJ1ZSA/ICcnIDogYC0ke21lZGl1bX1gfWApO1xuICAgIH1cblxuICAgIGlmIChsYXJnZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGBjb2wtbGcke2xhcmdlID09PSB0cnVlID8gJycgOiBgLSR7bGFyZ2V9YH1gKTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0KSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goYG9mZnNldC0ke29mZnNldH1gKTtcbiAgICB9XG5cbiAgICBpZiAoc21hbGxPZmZzZXQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChgb2Zmc2V0LXNtLSR7c21hbGxPZmZzZXR9YCk7XG4gICAgfVxuXG4gICAgaWYgKG1lZGl1bU9mZnNldCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGBvZmZzZXQtbWQtJHttZWRpdW1PZmZzZXR9YCk7XG4gICAgfVxuXG4gICAgaWYgKGxhcmdlT2Zmc2V0KSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goYG9mZnNldC1sZy0ke2xhcmdlT2Zmc2V0fWApO1xuICAgIH1cblxuICAgIGlmIChwdXNoKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goYHB1c2gtJHtwdXNofWApO1xuICAgIH1cblxuICAgIGlmIChzbWFsbFB1c2gpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChgcHVzaC1zbS0ke3NtYWxsUHVzaH1gKTtcbiAgICB9XG5cbiAgICBpZiAobWVkaXVtUHVzaCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGBwdXNoLW1kLSR7bWVkaXVtUHVzaH1gKTtcbiAgICB9XG5cbiAgICBpZiAobGFyZ2VQdXNoKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goYHB1c2gtbGctJHtsYXJnZVB1c2h9YCk7XG4gICAgfVxuXG4gICAgaWYgKHB1bGwpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChgcHVsbC0ke3B1bGx9YCk7XG4gICAgfVxuXG4gICAgaWYgKHNtYWxsUHVsbCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGBwdWxsLXNtLSR7c21hbGxQdWxsfWApO1xuICAgIH1cblxuICAgIGlmIChtZWRpdW1QdWxsKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goYHB1bGwtbWQtJHttZWRpdW1QdWxsfWApO1xuICAgIH1cblxuICAgIGlmIChsYXJnZVB1bGwpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChgcHVsbC1sZy0ke2xhcmdlUHVsbH1gKTtcbiAgICB9XG5cbiAgICBpZiAoIXhzbWFsbCAmJiAhc21hbGwgJiYgIW1lZGl1bSAmJiAhbGFyZ2UpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnY29sJyk7XG4gICAgfVxuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFbGVtZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHsuLi5vdGhlcn0gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgRWxlbWVudCA9IHRoaXMucHJvcHMuYXMgfHwgJ2Rpdic7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbICdyb3cnIF07XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8RWxlbWVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBDb2x1bW4gPSBDb2x1bW5cbiAgc3RhdGljIFJvdyA9IFJvd1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGFzLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBFbGVtZW50ID0gYXMgfHwgJ2Rpdic7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgJ2dyaWQnIF07XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbGVtZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHsuLi5vdGhlcn0gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0=