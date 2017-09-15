'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flex = exports.FlexItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexItem = exports.FlexItem = function (_React$Component) {
  _inherits(FlexItem, _React$Component);

  function FlexItem() {
    _classCallCheck(this, FlexItem);

    return _possibleConstructorReturn(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
  }

  _createClass(FlexItem, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return FlexItem;
}(_react2.default.Component);

var Flex = exports.Flex = function (_React$Component2) {
  _inherits(Flex, _React$Component2);

  function Flex() {
    _classCallCheck(this, Flex);

    return _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
  }

  _createClass(Flex, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          justifyContent = _props.justifyContent,
          alignItems = _props.alignItems,
          alignContent = _props.alignContent,
          direction = _props.direction,
          other = _objectWithoutProperties(_props, ['justifyContent', 'alignItems', 'alignContent', 'direction']);

      var classNames = ['d-flex', 'w-100'];

      switch (justifyContent) {
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

      switch (alignItems) {
        case 'start':
          classNames.push('align-items-start');
          break;
        case 'end':
          classNames.push('align-items-end');
          break;
        case 'center':
          classNames.push('align-items-center');
          break;
        case 'baseline':
          classNames.push('align-items-baseline');
          break;
        case 'stretch':
          classNames.push('align-items-stretch');
          break;
      }

      switch (alignContent) {
        case 'start':
          classNames.push('align-content-start');
          break;
        case 'end':
          classNames.push('align-content-end');
          break;
        case 'center':
          classNames.push('align-content-center');
          break;
        case 'between':
          classNames.push('align-content-between');
          break;
        case 'around':
          classNames.push('align-content-around');
          break;
        case 'stretch':
          classNames.push('align-content-stretch');
          break;
      }

      if (direction === 'column') {
        classNames.push('flex-column');
      }

      return _react2.default.createElement('div', _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Flex;
}(_react2.default.Component);

exports.default = Flex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZsZXguanN4Il0sIm5hbWVzIjpbIkZsZXhJdGVtIiwiQ29tcG9uZW50IiwiRmxleCIsInByb3BzIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwiZGlyZWN0aW9uIiwib3RoZXIiLCJjbGFzc05hbWVzIiwicHVzaCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRWFBLFEsV0FBQUEsUTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxhQUNFLDBDQURGO0FBR0Q7Ozs7RUFMMkIsZ0JBQU1DLFM7O0lBUXZCQyxJLFdBQUFBLEk7Ozs7Ozs7Ozs7OzZCQUNGO0FBQUEsbUJBTVEsS0FBS0MsS0FOYjtBQUFBLFVBRUxDLGNBRkssVUFFTEEsY0FGSztBQUFBLFVBR0xDLFVBSEssVUFHTEEsVUFISztBQUFBLFVBSUxDLFlBSkssVUFJTEEsWUFKSztBQUFBLFVBS0xDLFNBTEssVUFLTEEsU0FMSztBQUFBLFVBTUZDLEtBTkU7O0FBT1AsVUFBTUMsYUFBYSxDQUFFLFFBQUYsRUFBWSxPQUFaLENBQW5COztBQUVBLGNBQVFMLGNBQVI7QUFDRSxhQUFLLE9BQUw7QUFDRUsscUJBQVdDLElBQVgsQ0FBZ0IsdUJBQWhCO0FBQ0E7QUFDRixhQUFLLEtBQUw7QUFDRUQscUJBQVdDLElBQVgsQ0FBZ0IscUJBQWhCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRUQscUJBQVdDLElBQVgsQ0FBZ0Isd0JBQWhCO0FBQ0E7QUFDRixhQUFLLFNBQUw7QUFDRUQscUJBQVdDLElBQVgsQ0FBZ0IseUJBQWhCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRUQscUJBQVdDLElBQVgsQ0FBZ0Isd0JBQWhCO0FBQ0E7QUFmSjs7QUFrQkEsY0FBUUwsVUFBUjtBQUNFLGFBQUssT0FBTDtBQUNFSSxxQkFBV0MsSUFBWCxDQUFnQixtQkFBaEI7QUFDQTtBQUNGLGFBQUssS0FBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQixpQkFBaEI7QUFDQTtBQUNGLGFBQUssUUFBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQixvQkFBaEI7QUFDQTtBQUNGLGFBQUssVUFBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQixzQkFBaEI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFRCxxQkFBV0MsSUFBWCxDQUFnQixxQkFBaEI7QUFDQTtBQWZKOztBQWtCQSxjQUFRSixZQUFSO0FBQ0UsYUFBSyxPQUFMO0FBQ0VHLHFCQUFXQyxJQUFYLENBQWdCLHFCQUFoQjtBQUNBO0FBQ0YsYUFBSyxLQUFMO0FBQ0VELHFCQUFXQyxJQUFYLENBQWdCLG1CQUFoQjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VELHFCQUFXQyxJQUFYLENBQWdCLHNCQUFoQjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VELHFCQUFXQyxJQUFYLENBQWdCLHVCQUFoQjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VELHFCQUFXQyxJQUFYLENBQWdCLHNCQUFoQjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VELHFCQUFXQyxJQUFYLENBQWdCLHVCQUFoQjtBQUNBO0FBbEJKOztBQXFCQSxVQUFJSCxjQUFjLFFBQWxCLEVBQTRCO0FBQzFCRSxtQkFBV0MsSUFBWCxDQUFnQixhQUFoQjtBQUNEOztBQUVELGFBQ0UsZ0RBQUssV0FBV0QsV0FBV0UsSUFBWCxDQUFnQixHQUFoQixDQUFoQixJQUEwQ0gsS0FBMUMsRUFERjtBQUdEOzs7O0VBMUV1QixnQkFBTVAsUzs7a0JBNkVqQkMsSSIsImZpbGUiOiJGbGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIEZsZXhJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmxleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBqdXN0aWZ5Q29udGVudCxcbiAgICAgIGFsaWduSXRlbXMsXG4gICAgICBhbGlnbkNvbnRlbnQsXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyAnZC1mbGV4JywgJ3ctMTAwJyBdO1xuXG4gICAgc3dpdGNoIChqdXN0aWZ5Q29udGVudCkge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2p1c3RpZnktY29udGVudC1zdGFydCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnanVzdGlmeS1jb250ZW50LWVuZCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JldHdlZW4nOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2p1c3RpZnktY29udGVudC1iZXR3ZWVuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXJvdW5kJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ25JdGVtcykge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2FsaWduLWl0ZW1zLXN0YXJ0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhbGlnbi1pdGVtcy1lbmQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2FsaWduLWl0ZW1zLWNlbnRlcicpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jhc2VsaW5lJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhbGlnbi1pdGVtcy1iYXNlbGluZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmV0Y2gnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2FsaWduLWl0ZW1zLXN0cmV0Y2gnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbkNvbnRlbnQpIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhbGlnbi1jb250ZW50LXN0YXJ0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhbGlnbi1jb250ZW50LWVuZCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWxpZ24tY29udGVudC1jZW50ZXInKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiZXR3ZWVuJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdhbGlnbi1jb250ZW50LWJldHdlZW4nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcm91bmQnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goJ2FsaWduLWNvbnRlbnQtYXJvdW5kJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyZXRjaCc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaCgnYWxpZ24tY29udGVudC1zdHJldGNoJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2ZsZXgtY29sdW1uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxleDtcbiJdfQ==