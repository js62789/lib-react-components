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

var styles = {
  'text': 'styles__text___153aR',
  'textPrimary': 'styles__textPrimary___3xoBi',
  'textInfo': 'styles__textInfo___3UITc',
  'textSuccess': 'styles__textSuccess___2noPC',
  'textWarning': 'styles__textWarning___12uk_',
  'textDanger': 'styles__textDanger___2eNoQ',
  'textSmall': 'styles__textSmall___119XP',
  'textMuted': 'styles__textMuted___waVqC'
};

var Text = exports.Text = function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var classNames = [styles.text];

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
          classNames.push(styles.textPrimary);
          break;
        case 'info':
          classNames.push(styles.textInfo);
          break;
        case 'success':
          classNames.push(styles.textSuccess);
          break;
        case 'warning':
          classNames.push(styles.textWarning);
          break;
        case 'danger':
          classNames.push(styles.textDanger);
          break;
      }

      if (small) {
        classNames.push(styles.textSmall);
      }

      if (muted) {
        classNames.push(styles.textMuted);
      }

      if (justify) {
        classNames.push(styles.dFlex);
        classNames.push(styles.w100);
        switch (justify) {
          case 'start':
            classNames.push(styles.justifyContentStart);
            break;
          case 'end':
            classNames.push(styles.justifyContentEnd);
            break;
          case 'center':
            classNames.push(styles.justifyContentCenter);
            break;
          case 'between':
            classNames.push(styles.justifyContentBetween);
            break;
          case 'around':
            classNames.push(styles.justifyContentAround);
            break;
        }
      }

      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Text;
}(_react2.default.Component);

exports.default = Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RleHQvaW5kZXguanN4Il0sIm5hbWVzIjpbIlRleHQiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwidGV4dCIsInByb3BzIiwiY2xhc3NOYW1lIiwiY29sb3IiLCJhcyIsInNtYWxsIiwibXV0ZWQiLCJqdXN0aWZ5Iiwib3RoZXIiLCJFbGVtZW50IiwicHVzaCIsInRleHRQcmltYXJ5IiwidGV4dEluZm8iLCJ0ZXh0U3VjY2VzcyIsInRleHRXYXJuaW5nIiwidGV4dERhbmdlciIsInRleHRTbWFsbCIsInRleHRNdXRlZCIsImRGbGV4IiwidzEwMCIsImp1c3RpZnlDb250ZW50U3RhcnQiLCJqdXN0aWZ5Q29udGVudEVuZCIsImp1c3RpZnlDb250ZW50Q2VudGVyIiwianVzdGlmeUNvbnRlbnRCZXR3ZWVuIiwianVzdGlmeUNvbnRlbnRBcm91bmQiLCJqb2luIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLEksV0FBQUEsSTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxVQUFNQyxhQUFhLENBQUVDLE9BQU9DLElBQVQsQ0FBbkI7O0FBRE8sbUJBVUgsS0FBS0MsS0FWRjtBQUFBLFVBR0xDLFNBSEssVUFHTEEsU0FISztBQUFBLFVBSUxDLEtBSkssVUFJTEEsS0FKSztBQUFBLFVBS0xDLEVBTEssVUFLTEEsRUFMSztBQUFBLFVBTUxDLEtBTkssVUFNTEEsS0FOSztBQUFBLFVBT0xDLEtBUEssVUFPTEEsS0FQSztBQUFBLFVBUUxDLE9BUkssVUFRTEEsT0FSSztBQUFBLFVBU0ZDLEtBVEU7O0FBV1AsVUFBTUMsVUFBVUwsT0FBT0MsUUFBUSxPQUFSLEdBQWtCLEdBQXpCLENBQWhCOztBQUVBLFVBQUlILFNBQUosRUFBZTtBQUNiSixtQkFBV1ksSUFBWCxDQUFnQlIsU0FBaEI7QUFDRDs7QUFFRCxjQUFRQyxLQUFSO0FBQ0UsYUFBSyxTQUFMO0FBQ0VMLHFCQUFXWSxJQUFYLENBQWdCWCxPQUFPWSxXQUF2QjtBQUNBO0FBQ0YsYUFBSyxNQUFMO0FBQ0ViLHFCQUFXWSxJQUFYLENBQWdCWCxPQUFPYSxRQUF2QjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VkLHFCQUFXWSxJQUFYLENBQWdCWCxPQUFPYyxXQUF2QjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VmLHFCQUFXWSxJQUFYLENBQWdCWCxPQUFPZSxXQUF2QjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VoQixxQkFBV1ksSUFBWCxDQUFnQlgsT0FBT2dCLFVBQXZCO0FBQ0E7QUFmSjs7QUFrQkEsVUFBSVYsS0FBSixFQUFXO0FBQ1RQLG1CQUFXWSxJQUFYLENBQWdCWCxPQUFPaUIsU0FBdkI7QUFDRDs7QUFFRCxVQUFJVixLQUFKLEVBQVc7QUFDVFIsbUJBQVdZLElBQVgsQ0FBZ0JYLE9BQU9rQixTQUF2QjtBQUNEOztBQUVELFVBQUlWLE9BQUosRUFBYTtBQUNYVCxtQkFBV1ksSUFBWCxDQUFnQlgsT0FBT21CLEtBQXZCO0FBQ0FwQixtQkFBV1ksSUFBWCxDQUFnQlgsT0FBT29CLElBQXZCO0FBQ0EsZ0JBQVFaLE9BQVI7QUFDRSxlQUFLLE9BQUw7QUFDRVQsdUJBQVdZLElBQVgsQ0FBZ0JYLE9BQU9xQixtQkFBdkI7QUFDQTtBQUNGLGVBQUssS0FBTDtBQUNFdEIsdUJBQVdZLElBQVgsQ0FBZ0JYLE9BQU9zQixpQkFBdkI7QUFDQTtBQUNGLGVBQUssUUFBTDtBQUNFdkIsdUJBQVdZLElBQVgsQ0FBZ0JYLE9BQU91QixvQkFBdkI7QUFDQTtBQUNGLGVBQUssU0FBTDtBQUNFeEIsdUJBQVdZLElBQVgsQ0FBZ0JYLE9BQU93QixxQkFBdkI7QUFDQTtBQUNGLGVBQUssUUFBTDtBQUNFekIsdUJBQVdZLElBQVgsQ0FBZ0JYLE9BQU95QixvQkFBdkI7QUFDQTtBQWZKO0FBaUJEOztBQUVELGFBQ0UsOEJBQUMsT0FBRCxhQUFTLFdBQVcxQixXQUFXMkIsSUFBWCxDQUFnQixHQUFoQixDQUFwQixJQUE4Q2pCLEtBQTlDLEVBREY7QUFHRDs7OztFQXJFdUIsZ0JBQU1rQixTOztrQkF3RWpCN0IsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbIHN0eWxlcy50ZXh0IF07XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29sb3IsXG4gICAgICBhcyxcbiAgICAgIHNtYWxsLFxuICAgICAgbXV0ZWQsXG4gICAgICBqdXN0aWZ5LFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBFbGVtZW50ID0gYXMgfHwgKHNtYWxsID8gJ3NtYWxsJyA6ICdwJyk7XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgICBjYXNlICdwcmltYXJ5JzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy50ZXh0UHJpbWFyeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMudGV4dEluZm8pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLnRleHRTdWNjZXNzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy50ZXh0V2FybmluZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy50ZXh0RGFuZ2VyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHNtYWxsKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLnRleHRTbWFsbCk7XG4gICAgfVxuXG4gICAgaWYgKG11dGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLnRleHRNdXRlZCk7XG4gICAgfVxuXG4gICAgaWYgKGp1c3RpZnkpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuZEZsZXgpO1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy53MTAwKTtcbiAgICAgIHN3aXRjaCAoanVzdGlmeSkge1xuICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5qdXN0aWZ5Q29udGVudFN0YXJ0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmp1c3RpZnlDb250ZW50RW5kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmp1c3RpZnlDb250ZW50Q2VudGVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYmV0d2Vlbic6XG4gICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5qdXN0aWZ5Q29udGVudEJldHdlZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcm91bmQnOlxuICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuanVzdGlmeUNvbnRlbnRBcm91bmQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RWxlbWVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIl19