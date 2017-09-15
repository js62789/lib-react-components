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

var styles = {
  'btn': 'styles__btn___1iykd forms__formControl___1cH4l',
  'btnSmall': 'styles__btnSmall___rXSZX',
  'btnLarge': 'styles__btnLarge___wrKK2',
  'btnPrimary': 'styles__btnPrimary___gDhsb',
  'btnInfo': 'styles__btnInfo___1W2OV',
  'btnSuccess': 'styles__btnSuccess___GS8T8',
  'btnWarning': 'styles__btnWarning___3Rnzz',
  'btnDanger': 'styles__btnDanger___1vb2E'
};

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
          other = _objectWithoutProperties(_props, ['className', 'color', 'size']);

      var classNames = [styles.btn];

      switch (color) {
        case 'primary':
          classNames.push(styles.btnPrimary);
          break;
        case 'info':
          classNames.push(styles.btnInfo);
          break;
        case 'success':
          classNames.push(styles.btnSuccess);
          break;
        case 'warning':
          classNames.push(styles.btnWarning);
          break;
        case 'danger':
          classNames.push(styles.btnDanger);
          break;
      }

      switch (size) {
        case 'small':
          classNames.push(styles.btnSmall);
          break;
        case 'large':
          classNames.push(styles.btnLarge);
          break;
      }

      if (className) {
        classNames.push(className);
      }

      return _react2.default.createElement('button', _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJjb2xvciIsInNpemUiLCJvdGhlciIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJidG4iLCJwdXNoIiwiYnRuUHJpbWFyeSIsImJ0bkluZm8iLCJidG5TdWNjZXNzIiwiYnRuV2FybmluZyIsImJ0bkRhbmdlciIsImJ0blNtYWxsIiwiYnRuTGFyZ2UiLCJqb2luIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLE0sV0FBQUEsTTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSxtQkFDc0MsS0FBS0MsS0FEM0M7QUFBQSxVQUNDQyxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxLQURaLFVBQ1lBLEtBRFo7QUFBQSxVQUNtQkMsSUFEbkIsVUFDbUJBLElBRG5CO0FBQUEsVUFDNEJDLEtBRDVCOztBQUVQLFVBQU1DLGFBQWEsQ0FBRUMsT0FBT0MsR0FBVCxDQUFuQjs7QUFFQSxjQUFRTCxLQUFSO0FBQ0UsYUFBSyxTQUFMO0FBQ0VHLHFCQUFXRyxJQUFYLENBQWdCRixPQUFPRyxVQUF2QjtBQUNBO0FBQ0YsYUFBSyxNQUFMO0FBQ0VKLHFCQUFXRyxJQUFYLENBQWdCRixPQUFPSSxPQUF2QjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VMLHFCQUFXRyxJQUFYLENBQWdCRixPQUFPSyxVQUF2QjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VOLHFCQUFXRyxJQUFYLENBQWdCRixPQUFPTSxVQUF2QjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VQLHFCQUFXRyxJQUFYLENBQWdCRixPQUFPTyxTQUF2QjtBQUNBO0FBZko7O0FBa0JBLGNBQVFWLElBQVI7QUFDRSxhQUFLLE9BQUw7QUFDRUUscUJBQVdHLElBQVgsQ0FBZ0JGLE9BQU9RLFFBQXZCO0FBQ0E7QUFDRixhQUFLLE9BQUw7QUFDRVQscUJBQVdHLElBQVgsQ0FBZ0JGLE9BQU9TLFFBQXZCO0FBQ0E7QUFOSjs7QUFTQSxVQUFJZCxTQUFKLEVBQWU7QUFDYkksbUJBQVdHLElBQVgsQ0FBZ0JQLFNBQWhCO0FBQ0Q7O0FBRUQsYUFDRSxtREFBUSxXQUFXSSxXQUFXVyxJQUFYLENBQWdCLEdBQWhCLENBQW5CLElBQTZDWixLQUE3QyxFQURGO0FBR0Q7Ozs7RUF2Q3lCLGdCQUFNYSxTOztrQkEwQ25CbEIsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNvbG9yLCBzaXplLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyBzdHlsZXMuYnRuIF07XG5cbiAgICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5idG5QcmltYXJ5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5idG5JbmZvKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5idG5TdWNjZXNzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5idG5XYXJuaW5nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJ0bkRhbmdlcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJ0blNtYWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYnRuTGFyZ2UpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=