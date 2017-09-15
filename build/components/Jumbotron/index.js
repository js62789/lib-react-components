'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jumbotron = undefined;

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
  'jumbotron': 'styles__jumbotron___3VhLq',
  'jumbotronInverse': 'styles__jumbotronInverse___RhZC2'
};

var Jumbotron = exports.Jumbotron = function (_React$Component) {
  _inherits(Jumbotron, _React$Component);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    return _possibleConstructorReturn(this, (Jumbotron.__proto__ || Object.getPrototypeOf(Jumbotron)).apply(this, arguments));
  }

  _createClass(Jumbotron, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inverted = _props.inverted,
          backgroundImage = _props.backgroundImage,
          other = _objectWithoutProperties(_props, ['inverted', 'backgroundImage']);

      var classNames = [styles.jumbotron];
      var style = {};

      if (inverted) {
        classNames.push(styles.jumbotronInverse);
      }

      if (backgroundImage) {
        style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(\'' + backgroundImage + '\')';
      }

      return _react2.default.createElement('div', _extends({ className: classNames.join(' '), style: style }, other));
    }
  }]);

  return Jumbotron;
}(_react2.default.Component);

exports.default = Jumbotron;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0p1bWJvdHJvbi9pbmRleC5qc3giXSwibmFtZXMiOlsiSnVtYm90cm9uIiwicHJvcHMiLCJpbnZlcnRlZCIsImJhY2tncm91bmRJbWFnZSIsIm90aGVyIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImp1bWJvdHJvbiIsInN0eWxlIiwicHVzaCIsImp1bWJvdHJvbkludmVyc2UiLCJqb2luIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLFMsV0FBQUEsUzs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFBQSxtQkFDeUMsS0FBS0MsS0FEOUM7QUFBQSxVQUNDQyxRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxlQURYLFVBQ1dBLGVBRFg7QUFBQSxVQUMrQkMsS0FEL0I7O0FBRVAsVUFBTUMsYUFBYSxDQUFFQyxPQUFPQyxTQUFULENBQW5CO0FBQ0EsVUFBTUMsUUFBUSxFQUFkOztBQUVBLFVBQUlOLFFBQUosRUFBYztBQUNaRyxtQkFBV0ksSUFBWCxDQUFnQkgsT0FBT0ksZ0JBQXZCO0FBQ0Q7O0FBRUQsVUFBSVAsZUFBSixFQUFxQjtBQUNuQkssY0FBTUwsZUFBTix5RUFBMkZBLGVBQTNGO0FBQ0Q7O0FBRUQsYUFDRSxnREFBSyxXQUFXRSxXQUFXTSxJQUFYLENBQWdCLEdBQWhCLENBQWhCLEVBQXNDLE9BQU9ILEtBQTdDLElBQXdESixLQUF4RCxFQURGO0FBR0Q7Ozs7RUFqQjRCLGdCQUFNUSxTOztrQkFvQnRCWixTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGNsYXNzIEp1bWJvdHJvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGludmVydGVkLCBiYWNrZ3JvdW5kSW1hZ2UsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbIHN0eWxlcy5qdW1ib3Ryb24gXTtcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuXG4gICAgaWYgKGludmVydGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmp1bWJvdHJvbkludmVyc2UpO1xuICAgIH1cblxuICAgIGlmIChiYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgIHN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQoIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpICksIHVybCgnJHtiYWNrZ3JvdW5kSW1hZ2V9JylgO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHN0eWxlPXtzdHlsZX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSnVtYm90cm9uO1xuIl19