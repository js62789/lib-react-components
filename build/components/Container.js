'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = exports.Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var Element = this.props.as || 'div';

      var _props = this.props,
          className = _props.className,
          fluid = _props.fluid,
          other = _objectWithoutProperties(_props, ['className', 'fluid']);

      var classNames = [];

      if (className) {
        classNames.push(className);
      }

      if (fluid) {
        classNames.push('container-fluid');
      } else {
        classNames.push('container');
      }

      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci5qc3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiRWxlbWVudCIsInByb3BzIiwiYXMiLCJjbGFzc05hbWUiLCJmbHVpZCIsIm90aGVyIiwiY2xhc3NOYW1lcyIsInB1c2giLCJqb2luIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQUVhQSxTLFdBQUFBLFM7Ozs7Ozs7Ozs7OzZCQUNGO0FBQ1AsVUFBTUMsVUFBVSxLQUFLQyxLQUFMLENBQVdDLEVBQVgsSUFBaUIsS0FBakM7O0FBRE8sbUJBRWdDLEtBQUtELEtBRnJDO0FBQUEsVUFFQ0UsU0FGRCxVQUVDQSxTQUZEO0FBQUEsVUFFWUMsS0FGWixVQUVZQSxLQUZaO0FBQUEsVUFFc0JDLEtBRnRCOztBQUdQLFVBQU1DLGFBQWEsRUFBbkI7O0FBRUEsVUFBSUgsU0FBSixFQUFlO0FBQ2JHLG1CQUFXQyxJQUFYLENBQWdCSixTQUFoQjtBQUNEOztBQUVELFVBQUlDLEtBQUosRUFBVztBQUNURSxtQkFBV0MsSUFBWCxDQUFnQixpQkFBaEI7QUFDRCxPQUZELE1BRU87QUFDTEQsbUJBQVdDLElBQVgsQ0FBZ0IsV0FBaEI7QUFDRDs7QUFFRCxhQUNFLDhCQUFDLE9BQUQsYUFBUyxXQUFXRCxXQUFXRSxJQUFYLENBQWdCLEdBQWhCLENBQXBCLElBQThDSCxLQUE5QyxFQURGO0FBR0Q7Ozs7RUFuQjRCLGdCQUFNSSxTOztrQkFzQnRCVixTIiwiZmlsZSI6IkNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgRWxlbWVudCA9IHRoaXMucHJvcHMuYXMgfHwgJ2Rpdic7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGZsdWlkLCAuLi5vdGhlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoZmx1aWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnY29udGFpbmVyLWZsdWlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnY29udGFpbmVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFbGVtZW50IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHsuLi5vdGhlcn0gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ==