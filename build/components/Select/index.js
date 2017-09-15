'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'dropdown': 'styles__dropdown___K5NG1 forms__formControl___1cH4l'
};

var Select = exports.Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        { className: styles.dropdown, type: 'text' },
        this.props.options.map(function (opt) {
          return _react2.default.createElement(
            'option',
            { value: opt.key },
            opt.value
          );
        })
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlbGVjdC9pbmRleC5qc3giXSwibmFtZXMiOlsiU2VsZWN0Iiwic3R5bGVzIiwiZHJvcGRvd24iLCJwcm9wcyIsIm9wdGlvbnMiLCJtYXAiLCJvcHQiLCJrZXkiLCJ2YWx1ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHYUEsTSxXQUFBQSxNOzs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQVEsV0FBV0MsT0FBT0MsUUFBMUIsRUFBb0MsTUFBSyxNQUF6QztBQUVJLGFBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUI7QUFBQSxpQkFDckI7QUFBQTtBQUFBLGNBQVEsT0FBT0MsSUFBSUMsR0FBbkI7QUFBeUJELGdCQUFJRTtBQUE3QixXQURxQjtBQUFBLFNBQXZCO0FBRkosT0FERjtBQVNEOzs7O0VBWHlCLGdCQUFNQyxTOztrQkFjbkJULE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufSB0eXBlPVwidGV4dFwiPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHQgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17b3B0LmtleX0+e29wdC52YWx1ZX08L29wdGlvbj5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L3NlbGVjdD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiJdfQ==