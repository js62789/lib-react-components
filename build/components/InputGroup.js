'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        { className: 'input-group' },
        this.props.children
      );
    }
  }]);

  return InputGroup;
}(_react2.default.Component);

Object.defineProperty(InputGroup, 'propTypes', {
  enumerable: true,
  writable: true,
  value: {
    children: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_Input2.default), _propTypes2.default.instanceOf(_Button2.default), _propTypes2.default.instanceOf(_Dropdown2.default)]))
  }
});
exports.default = InputGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0lucHV0R3JvdXAuanN4Il0sIm5hbWVzIjpbIklucHV0R3JvdXAiLCJwcm9wcyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiYXJyYXlPZiIsIm9uZU9mVHlwZSIsImluc3RhbmNlT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBT2FBLFUsV0FBQUEsVTs7Ozs7Ozs7Ozs7NkJBUUY7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNHLGFBQUtDLEtBQUwsQ0FBV0M7QUFEZCxPQURGO0FBS0Q7Ozs7RUFkNkIsZ0JBQU1DLFM7O3NCQUF6QkgsVTs7O1NBQ1E7QUFDakJFLGNBQVUsb0JBQVVFLE9BQVYsQ0FBa0Isb0JBQVVDLFNBQVYsQ0FBb0IsQ0FDOUMsb0JBQVVDLFVBQVYsaUJBRDhDLEVBRTlDLG9CQUFVQSxVQUFWLGtCQUY4QyxFQUc5QyxvQkFBVUEsVUFBVixvQkFIOEMsQ0FBcEIsQ0FBbEI7QUFETzs7a0JBZ0JOTixVIiwiZmlsZSI6IklucHV0R3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuXG4vKipcbiAqIDxJbnB1dEdyb3VwPlxuICogICA8SW5wdXQgLz5cbiAqICAgPFNlbGVjdCAvPlxuICogICA8QnV0dG9uIC8+XG4gKiA8L0lucHV0R3JvdXA+XG4gKi9cbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihJbnB1dCksXG4gICAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihCdXR0b24pLFxuICAgICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRHJvcGRvd24pXG4gICAgXSkpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEdyb3VwO1xuIl19