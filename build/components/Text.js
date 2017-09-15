'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = exports.Text = function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var classNames = ['text'];

      var _props = this.props,
          className = _props.className,
          color = _props.color,
          as = _props.as,
          small = _props.small,
          muted = _props.muted,
          justify = _props.justify,
          other = _objectWithoutProperties(_props, ['className', 'color', 'as', 'small', 'muted', 'justify']);

      var Element = as || (small ? 'small' : 'p');

      if (className) {
        classNames.push(className);
      }

      switch (color) {
        case 'primary':
          classNames.push('text-primary');
          break;
        case 'info':
          classNames.push('text-info');
          break;
        case 'success':
          classNames.push('text-success');
          break;
        case 'warning':
          classNames.push('text-warning');
          break;
        case 'danger':
          classNames.push('text-danger');
          break;
      }

      if (small) {
        classNames.push('text-sm');
      }

      if (muted) {
        classNames.push('text-muted');
      }

      if (justify) {
        classNames.push('d-flex');
        classNames.push('w-100');
        switch (justify) {
          case 'start':
            classNames.push('justify-content-start');
            break;
          case 'end':
            classNames.push('justify-content-end');
            break;
          case 'center':
            classNames.push('justify-content-center');
            break;
          case 'between':
            classNames.push('justify-content-between');
            break;
          case 'around':
            classNames.push('justify-content-around');
            break;
        }
      }

      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Text;
}(_react2.default.Component);

exports.default = Text;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RleHQuanN4Il0sIm5hbWVzIjpbIlRleHQiLCJjbGFzc05hbWVzIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb2xvciIsImFzIiwic21hbGwiLCJtdXRlZCIsImp1c3RpZnkiLCJvdGhlciIsIkVsZW1lbnQiLCJwdXNoIiwiam9pbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFFYUEsSSxXQUFBQSxJOzs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLFVBQU1DLGFBQWEsQ0FBRSxNQUFGLENBQW5COztBQURPLG1CQVVILEtBQUtDLEtBVkY7QUFBQSxVQUdMQyxTQUhLLFVBR0xBLFNBSEs7QUFBQSxVQUlMQyxLQUpLLFVBSUxBLEtBSks7QUFBQSxVQUtMQyxFQUxLLFVBS0xBLEVBTEs7QUFBQSxVQU1MQyxLQU5LLFVBTUxBLEtBTks7QUFBQSxVQU9MQyxLQVBLLFVBT0xBLEtBUEs7QUFBQSxVQVFMQyxPQVJLLFVBUUxBLE9BUks7QUFBQSxVQVNGQyxLQVRFOztBQVdQLFVBQU1DLFVBQVVMLE9BQU9DLFFBQVEsT0FBUixHQUFrQixHQUF6QixDQUFoQjs7QUFFQSxVQUFJSCxTQUFKLEVBQWU7QUFDYkYsbUJBQVdVLElBQVgsQ0FBZ0JSLFNBQWhCO0FBQ0Q7O0FBRUQsY0FBUUMsS0FBUjtBQUNFLGFBQUssU0FBTDtBQUNFSCxxQkFBV1UsSUFBWCxDQUFnQixjQUFoQjtBQUNBO0FBQ0YsYUFBSyxNQUFMO0FBQ0VWLHFCQUFXVSxJQUFYLENBQWdCLFdBQWhCO0FBQ0E7QUFDRixhQUFLLFNBQUw7QUFDRVYscUJBQVdVLElBQVgsQ0FBZ0IsY0FBaEI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFVixxQkFBV1UsSUFBWCxDQUFnQixjQUFoQjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VWLHFCQUFXVSxJQUFYLENBQWdCLGFBQWhCO0FBQ0E7QUFmSjs7QUFrQkEsVUFBSUwsS0FBSixFQUFXO0FBQ1RMLG1CQUFXVSxJQUFYLENBQWdCLFNBQWhCO0FBQ0Q7O0FBRUQsVUFBSUosS0FBSixFQUFXO0FBQ1ROLG1CQUFXVSxJQUFYLENBQWdCLFlBQWhCO0FBQ0Q7O0FBRUQsVUFBSUgsT0FBSixFQUFhO0FBQ1hQLG1CQUFXVSxJQUFYLENBQWdCLFFBQWhCO0FBQ0FWLG1CQUFXVSxJQUFYLENBQWdCLE9BQWhCO0FBQ0EsZ0JBQVFILE9BQVI7QUFDRSxlQUFLLE9BQUw7QUFDRVAsdUJBQVdVLElBQVgsQ0FBZ0IsdUJBQWhCO0FBQ0E7QUFDRixlQUFLLEtBQUw7QUFDRVYsdUJBQVdVLElBQVgsQ0FBZ0IscUJBQWhCO0FBQ0E7QUFDRixlQUFLLFFBQUw7QUFDRVYsdUJBQVdVLElBQVgsQ0FBZ0Isd0JBQWhCO0FBQ0E7QUFDRixlQUFLLFNBQUw7QUFDRVYsdUJBQVdVLElBQVgsQ0FBZ0IseUJBQWhCO0FBQ0E7QUFDRixlQUFLLFFBQUw7QUFDRVYsdUJBQVdVLElBQVgsQ0FBZ0Isd0JBQWhCO0FBQ0E7QUFmSjtBQWlCRDs7QUFFRCxhQUNFLDhCQUFDLE9BQUQsYUFBUyxXQUFXVixXQUFXVyxJQUFYLENBQWdCLEdBQWhCLENBQXBCLElBQThDSCxLQUE5QyxFQURGO0FBR0Q7Ozs7RUFyRXVCLGdCQUFNSSxTOztrQkF3RWpCYixJIiwiZmlsZSI6IlRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyAndGV4dCcgXTtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjb2xvcixcbiAgICAgIGFzLFxuICAgICAgc21hbGwsXG4gICAgICBtdXRlZCxcbiAgICAgIGp1c3RpZnksXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IEVsZW1lbnQgPSBhcyB8fCAoc21hbGwgPyAnc21hbGwnIDogJ3AnKTtcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoY29sb3IpIHtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ3RleHQtcHJpbWFyeScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ3RleHQtaW5mbycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ3RleHQtc3VjY2VzcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ3RleHQtd2FybmluZycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgndGV4dC1kYW5nZXInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHNtYWxsKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ3RleHQtc20nKTtcbiAgICB9XG5cbiAgICBpZiAobXV0ZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgndGV4dC1tdXRlZCcpO1xuICAgIH1cblxuICAgIGlmIChqdXN0aWZ5KSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2QtZmxleCcpO1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCd3LTEwMCcpO1xuICAgICAgc3dpdGNoIChqdXN0aWZ5KSB7XG4gICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2p1c3RpZnktY29udGVudC1zdGFydCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCgnanVzdGlmeS1jb250ZW50LWVuZCcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCgnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdiZXR3ZWVuJzpcbiAgICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Fyb3VuZCc6XG4gICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFbGVtZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHsuLi5vdGhlcn0gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0=