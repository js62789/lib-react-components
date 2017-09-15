'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'inputGroup': 'styles__inputGroup___vQ45R'
};

/**
 * <InputGroup>
 *   <Input />
 *   <Select />
 *   <Button />
 * </InputGroup>
 */

var InputGroup = exports.InputGroup = function (_React$Component) {
  _inherits(InputGroup, _React$Component);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: styles.inputGroup },
        this.props.children
      );
    }
  }]);

  return InputGroup;
}(_react2.default.Component);

exports.default = InputGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0lucHV0R3JvdXAvaW5kZXguanN4Il0sIm5hbWVzIjpbIklucHV0R3JvdXAiLCJzdHlsZXMiLCJpbnB1dEdyb3VwIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7SUFPYUEsVSxXQUFBQSxVOzs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0MsT0FBT0MsVUFBdkI7QUFDRyxhQUFLQyxLQUFMLENBQVdDO0FBRGQsT0FERjtBQUtEOzs7O0VBUDZCLGdCQUFNQyxTOztrQkFVdkJMLFUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuXG4vKipcbiAqIDxJbnB1dEdyb3VwPlxuICogICA8SW5wdXQgLz5cbiAqICAgPFNlbGVjdCAvPlxuICogICA8QnV0dG9uIC8+XG4gKiA8L0lucHV0R3JvdXA+XG4gKi9cbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cDtcbiJdfQ==