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

var styles = {
  'w100': 'styles__w100___27jCk',
  'dFlex': 'styles__dFlex___1XSkS',
  'justifyContentstart': 'styles__justifyContentstart___mYW8s',
  'justifyContentEnd': 'styles__justifyContentEnd___1gh_7',
  'justifyContentCenter': 'styles__justifyContentCenter___2R7I4',
  'justifyContentBetween': 'styles__justifyContentBetween___3TbvZ',
  'justifyContentAround': 'styles__justifyContentAround___1zCCK',
  'alignItemsStart': 'styles__alignItemsStart___3iKp9',
  'alignItemsEnd': 'styles__alignItemsEnd___3qPn0',
  'alignItemsCenter': 'styles__alignItemsCenter___1PDNQ',
  'alignItemsBaseline': 'styles__alignItemsBaseline___3178d',
  'alignItemsStretch': 'styles__alignItemsStretch___1pmy-',
  'alignContentStart': 'styles__alignContentStart___2WRm7',
  'alignContentEnd': 'styles__alignContentEnd___16R6E',
  'alignContentCenter': 'styles__alignContentCenter___fPNEx',
  'alignContentBetween': 'styles__alignContentBetween____Kvig',
  'alignContentAround': 'styles__alignContentAround___QUlJH',
  'alignContentStretch': 'styles__alignContentStretch___KScXO',
  'flexColumn': 'styles__flexColumn___241uO'
};

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

      var classNames = [styles.dFlex, styles.w100];

      switch (justifyContent) {
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

      switch (alignItems) {
        case 'start':
          classNames.push(styles.alignItemsStart);
          break;
        case 'end':
          classNames.push(styles.alignItemsEnd);
          break;
        case 'center':
          classNames.push(styles.alignItemsCenter);
          break;
        case 'baseline':
          classNames.push(styles.alignItemsBaseline);
          break;
        case 'stretch':
          classNames.push(styles.alignItemsStretch);
          break;
      }

      switch (alignContent) {
        case 'start':
          classNames.push(styles.alignContentStart);
          break;
        case 'end':
          classNames.push(styles.alignContentEnd);
          break;
        case 'center':
          classNames.push(styles.alignContentCenter);
          break;
        case 'between':
          classNames.push(styles.alignContentBetween);
          break;
        case 'around':
          classNames.push(styles.alignContentAround);
          break;
        case 'stretch':
          classNames.push(styles.alignContentAround);
          break;
      }

      if (direction === 'column') {
        classNames.push(styles.flexColumn);
      }

      return _react2.default.createElement('div', _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Flex;
}(_react2.default.Component);

exports.default = Flex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZsZXgvaW5kZXguanN4Il0sIm5hbWVzIjpbIkZsZXhJdGVtIiwiQ29tcG9uZW50IiwiRmxleCIsInByb3BzIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYWxpZ25Db250ZW50IiwiZGlyZWN0aW9uIiwib3RoZXIiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiZEZsZXgiLCJ3MTAwIiwicHVzaCIsImp1c3RpZnlDb250ZW50U3RhcnQiLCJqdXN0aWZ5Q29udGVudEVuZCIsImp1c3RpZnlDb250ZW50Q2VudGVyIiwianVzdGlmeUNvbnRlbnRCZXR3ZWVuIiwianVzdGlmeUNvbnRlbnRBcm91bmQiLCJhbGlnbkl0ZW1zU3RhcnQiLCJhbGlnbkl0ZW1zRW5kIiwiYWxpZ25JdGVtc0NlbnRlciIsImFsaWduSXRlbXNCYXNlbGluZSIsImFsaWduSXRlbXNTdHJldGNoIiwiYWxpZ25Db250ZW50U3RhcnQiLCJhbGlnbkNvbnRlbnRFbmQiLCJhbGlnbkNvbnRlbnRDZW50ZXIiLCJhbGlnbkNvbnRlbnRCZXR3ZWVuIiwiYWxpZ25Db250ZW50QXJvdW5kIiwiZmxleENvbHVtbiIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdhQSxRLFdBQUFBLFE7Ozs7Ozs7Ozs7OzZCQUNGO0FBQ1AsYUFDRSwwQ0FERjtBQUdEOzs7O0VBTDJCLGdCQUFNQyxTOztJQVF2QkMsSSxXQUFBQSxJOzs7Ozs7Ozs7Ozs2QkFDRjtBQUFBLG1CQU1RLEtBQUtDLEtBTmI7QUFBQSxVQUVMQyxjQUZLLFVBRUxBLGNBRks7QUFBQSxVQUdMQyxVQUhLLFVBR0xBLFVBSEs7QUFBQSxVQUlMQyxZQUpLLFVBSUxBLFlBSks7QUFBQSxVQUtMQyxTQUxLLFVBS0xBLFNBTEs7QUFBQSxVQU1GQyxLQU5FOztBQU9QLFVBQU1DLGFBQWEsQ0FBRUMsT0FBT0MsS0FBVCxFQUFnQkQsT0FBT0UsSUFBdkIsQ0FBbkI7O0FBRUEsY0FBUVIsY0FBUjtBQUNFLGFBQUssT0FBTDtBQUNFSyxxQkFBV0ksSUFBWCxDQUFnQkgsT0FBT0ksbUJBQXZCO0FBQ0E7QUFDRixhQUFLLEtBQUw7QUFDRUwscUJBQVdJLElBQVgsQ0FBZ0JILE9BQU9LLGlCQUF2QjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VOLHFCQUFXSSxJQUFYLENBQWdCSCxPQUFPTSxvQkFBdkI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFUCxxQkFBV0ksSUFBWCxDQUFnQkgsT0FBT08scUJBQXZCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRVIscUJBQVdJLElBQVgsQ0FBZ0JILE9BQU9RLG9CQUF2QjtBQUNBO0FBZko7O0FBa0JBLGNBQVFiLFVBQVI7QUFDRSxhQUFLLE9BQUw7QUFDRUkscUJBQVdJLElBQVgsQ0FBZ0JILE9BQU9TLGVBQXZCO0FBQ0E7QUFDRixhQUFLLEtBQUw7QUFDRVYscUJBQVdJLElBQVgsQ0FBZ0JILE9BQU9VLGFBQXZCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRVgscUJBQVdJLElBQVgsQ0FBZ0JILE9BQU9XLGdCQUF2QjtBQUNBO0FBQ0YsYUFBSyxVQUFMO0FBQ0VaLHFCQUFXSSxJQUFYLENBQWdCSCxPQUFPWSxrQkFBdkI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFYixxQkFBV0ksSUFBWCxDQUFnQkgsT0FBT2EsaUJBQXZCO0FBQ0E7QUFmSjs7QUFrQkEsY0FBUWpCLFlBQVI7QUFDRSxhQUFLLE9BQUw7QUFDRUcscUJBQVdJLElBQVgsQ0FBZ0JILE9BQU9jLGlCQUF2QjtBQUNBO0FBQ0YsYUFBSyxLQUFMO0FBQ0VmLHFCQUFXSSxJQUFYLENBQWdCSCxPQUFPZSxlQUF2QjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VoQixxQkFBV0ksSUFBWCxDQUFnQkgsT0FBT2dCLGtCQUF2QjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VqQixxQkFBV0ksSUFBWCxDQUFnQkgsT0FBT2lCLG1CQUF2QjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VsQixxQkFBV0ksSUFBWCxDQUFnQkgsT0FBT2tCLGtCQUF2QjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VuQixxQkFBV0ksSUFBWCxDQUFnQkgsT0FBT2tCLGtCQUF2QjtBQUNBO0FBbEJKOztBQXFCQSxVQUFJckIsY0FBYyxRQUFsQixFQUE0QjtBQUMxQkUsbUJBQVdJLElBQVgsQ0FBZ0JILE9BQU9tQixVQUF2QjtBQUNEOztBQUVELGFBQ0UsZ0RBQUssV0FBV3BCLFdBQVdxQixJQUFYLENBQWdCLEdBQWhCLENBQWhCLElBQTBDdEIsS0FBMUMsRUFERjtBQUdEOzs7O0VBMUV1QixnQkFBTVAsUzs7a0JBNkVqQkMsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG5cbmV4cG9ydCBjbGFzcyBGbGV4SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZsZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAganVzdGlmeUNvbnRlbnQsXG4gICAgICBhbGlnbkl0ZW1zLFxuICAgICAgYWxpZ25Db250ZW50LFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgLi4ub3RoZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsgc3R5bGVzLmRGbGV4LCBzdHlsZXMudzEwMCBdO1xuXG4gICAgc3dpdGNoIChqdXN0aWZ5Q29udGVudCkge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmp1c3RpZnlDb250ZW50U3RhcnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuanVzdGlmeUNvbnRlbnRFbmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuanVzdGlmeUNvbnRlbnRDZW50ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JldHdlZW4nOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmp1c3RpZnlDb250ZW50QmV0d2Vlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXJvdW5kJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5qdXN0aWZ5Q29udGVudEFyb3VuZCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ25JdGVtcykge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmFsaWduSXRlbXNTdGFydCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5hbGlnbkl0ZW1zRW5kKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmFsaWduSXRlbXNDZW50ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jhc2VsaW5lJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5hbGlnbkl0ZW1zQmFzZWxpbmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmV0Y2gnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmFsaWduSXRlbXNTdHJldGNoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbkNvbnRlbnQpIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5hbGlnbkNvbnRlbnRTdGFydCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5hbGlnbkNvbnRlbnRFbmQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYWxpZ25Db250ZW50Q2VudGVyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdiZXR3ZWVuJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5hbGlnbkNvbnRlbnRCZXR3ZWVuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhcm91bmQnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmFsaWduQ29udGVudEFyb3VuZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyZXRjaCc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYWxpZ25Db250ZW50QXJvdW5kKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuZmxleENvbHVtbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxleDtcbiJdfQ==