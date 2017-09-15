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

var styles = {
  'container': 'styles__container___2TQ_H',
  'containerFluid': 'styles__containerFluid___2iX53'
};

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
        classNames.push(styles.containerFluid);
      } else {
        classNames.push(styles.container);
      }

      return _react2.default.createElement(Element, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci9pbmRleC5qc3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiRWxlbWVudCIsInByb3BzIiwiYXMiLCJjbGFzc05hbWUiLCJmbHVpZCIsIm90aGVyIiwiY2xhc3NOYW1lcyIsInB1c2giLCJzdHlsZXMiLCJjb250YWluZXJGbHVpZCIsImNvbnRhaW5lciIsImpvaW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHYUEsUyxXQUFBQSxTOzs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLFVBQU1DLFVBQVUsS0FBS0MsS0FBTCxDQUFXQyxFQUFYLElBQWlCLEtBQWpDOztBQURPLG1CQUVnQyxLQUFLRCxLQUZyQztBQUFBLFVBRUNFLFNBRkQsVUFFQ0EsU0FGRDtBQUFBLFVBRVlDLEtBRlosVUFFWUEsS0FGWjtBQUFBLFVBRXNCQyxLQUZ0Qjs7QUFHUCxVQUFNQyxhQUFhLEVBQW5COztBQUVBLFVBQUlILFNBQUosRUFBZTtBQUNiRyxtQkFBV0MsSUFBWCxDQUFnQkosU0FBaEI7QUFDRDs7QUFFRCxVQUFJQyxLQUFKLEVBQVc7QUFDVEUsbUJBQVdDLElBQVgsQ0FBZ0JDLE9BQU9DLGNBQXZCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xILG1CQUFXQyxJQUFYLENBQWdCQyxPQUFPRSxTQUF2QjtBQUNEOztBQUVELGFBQ0UsOEJBQUMsT0FBRCxhQUFTLFdBQVdKLFdBQVdLLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBcEIsSUFBOENOLEtBQTlDLEVBREY7QUFHRDs7OztFQW5CNEIsZ0JBQU1PLFM7O2tCQXNCdEJiLFMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IEVsZW1lbnQgPSB0aGlzLnByb3BzLmFzIHx8ICdkaXYnO1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBmbHVpZCwgLi4ub3RoZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKGZsdWlkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNvbnRhaW5lckZsdWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RWxlbWVudCBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iXX0=