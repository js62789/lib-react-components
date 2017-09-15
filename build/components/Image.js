'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = exports.Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'calculateScaledFontSize',
    value: function calculateScaledFontSize(width, height) {
      return Math.round(Math.max(12, Math.min(Math.min(width, height) * 0.75, 0.75 * Math.max(width, height) / 12)));
    }
  }, {
    key: 'generateSrcPlaceholder',
    value: function generateSrcPlaceholder(_ref) {
      var width = _ref.width,
          height = _ref.height,
          backgroundColor = _ref.backgroundColor,
          fontSize = _ref.fontSize,
          fontColor = _ref.fontColor;

      return ('\n      data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none">\n        <rect width="' + width + '" height="' + height + '" fill="' + backgroundColor + '"/>\n        <text text-anchor="middle" x="' + width / 2 + '" y="' + height / 2 + '"\n          style="fill:' + fontColor + ';font-weight:bold;font-size:' + fontSize + 'px;font-family:Arial,Helvetica,sans-serif;dominant-baseline:central">\n          ' + width + 'x' + height + '\n        </text>\n      </svg>\n    ').replace(/\n/g, '').replace(/^\s+/g, '').replace(/>\s+</g, '><');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          rounded = _props.rounded,
          bordered = _props.bordered,
          className = _props.className,
          alt = _props.alt,
          fluid = _props.fluid,
          thumbnail = _props.thumbnail;

      var classNames = [];
      var inlineStyles = this.props.style || {};

      var src = this.props.src || this.generateSrcPlaceholder({
        width: width,
        height: height,
        backgroundColor: '#ddd',
        fontColor: '#bbb',
        fontSize: this.calculateScaledFontSize(width, height)
      });

      if (className) {
        classNames.push(className);
      }

      if (rounded) {
        classNames.push('rounded');
      }

      if (bordered) {
        classNames.push('img-thumbnail');
      }

      if (height) {
        inlineStyles.height = height;
      }

      if (width) {
        inlineStyles.width = width;
      }

      if (fluid) {
        classNames.push('img-fluid');
      }

      if (thumbnail) {
        classNames.push('img-thumbnail');
      }

      return _react2.default.createElement('img', { className: classNames.join(' '), style: inlineStyles, src: src, alt: alt });
    }
  }]);

  return Image;
}(_react2.default.Component);

Image.defaultProps = {
  width: null,
  height: null
};

exports.default = Image;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlLmpzeCJdLCJuYW1lcyI6WyJJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwibWF4IiwibWluIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJyZXBsYWNlIiwicHJvcHMiLCJyb3VuZGVkIiwiYm9yZGVyZWQiLCJjbGFzc05hbWUiLCJhbHQiLCJmbHVpZCIsInRodW1ibmFpbCIsImNsYXNzTmFtZXMiLCJpbmxpbmVTdHlsZXMiLCJzdHlsZSIsInNyYyIsImdlbmVyYXRlU3JjUGxhY2Vob2xkZXIiLCJjYWxjdWxhdGVTY2FsZWRGb250U2l6ZSIsInB1c2giLCJqb2luIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYUEsSyxXQUFBQSxLOzs7Ozs7Ozs7Ozs0Q0FDYUMsSyxFQUFPQyxNLEVBQVE7QUFDckMsYUFBT0MsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxHQUFMLENBQVMsRUFBVCxFQUFhRixLQUFLRyxHQUFMLENBQVNILEtBQUtHLEdBQUwsQ0FBU0wsS0FBVCxFQUFnQkMsTUFBaEIsSUFBMEIsSUFBbkMsRUFBeUMsT0FBT0MsS0FBS0UsR0FBTCxDQUFTSixLQUFULEVBQWdCQyxNQUFoQixDQUFQLEdBQWlDLEVBQTFFLENBQWIsQ0FBWCxDQUFQO0FBQ0Q7OztpREFFK0U7QUFBQSxVQUF2REQsS0FBdUQsUUFBdkRBLEtBQXVEO0FBQUEsVUFBaERDLE1BQWdELFFBQWhEQSxNQUFnRDtBQUFBLFVBQXhDSyxlQUF3QyxRQUF4Q0EsZUFBd0M7QUFBQSxVQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsVUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUM5RSxhQUFPLHFGQUNvRVIsS0FEcEUsa0JBQ3NGQyxNQUR0Rix1QkFDOEdELEtBRDlHLFNBQ3VIQyxNQUR2SCw0REFFWUQsS0FGWixrQkFFOEJDLE1BRjlCLGdCQUUrQ0ssZUFGL0MsbURBRzZCTixRQUFNLENBSG5DLGFBRzRDQyxTQUFPLENBSG5ELGlDQUlhTyxTQUpiLG9DQUlxREQsUUFKckQseUZBS0NQLEtBTEQsU0FLVUMsTUFMViw0Q0FRTFEsT0FSSyxDQVFHLEtBUkgsRUFRVSxFQVJWLEVBUWNBLE9BUmQsQ0FRc0IsT0FSdEIsRUFRK0IsRUFSL0IsRUFRbUNBLE9BUm5DLENBUTJDLFFBUjNDLEVBUXFELElBUnJELENBQVA7QUFTRDs7OzZCQUVRO0FBQUEsbUJBVUgsS0FBS0MsS0FWRjtBQUFBLFVBRUxWLEtBRkssVUFFTEEsS0FGSztBQUFBLFVBR0xDLE1BSEssVUFHTEEsTUFISztBQUFBLFVBSUxVLE9BSkssVUFJTEEsT0FKSztBQUFBLFVBS0xDLFFBTEssVUFLTEEsUUFMSztBQUFBLFVBTUxDLFNBTkssVUFNTEEsU0FOSztBQUFBLFVBT0xDLEdBUEssVUFPTEEsR0FQSztBQUFBLFVBUUxDLEtBUkssVUFRTEEsS0FSSztBQUFBLFVBU0xDLFNBVEssVUFTTEEsU0FUSzs7QUFXUCxVQUFNQyxhQUFhLEVBQW5CO0FBQ0EsVUFBTUMsZUFBZSxLQUFLUixLQUFMLENBQVdTLEtBQVgsSUFBb0IsRUFBekM7O0FBRUEsVUFBTUMsTUFBTSxLQUFLVixLQUFMLENBQVdVLEdBQVgsSUFBa0IsS0FBS0Msc0JBQUwsQ0FBNEI7QUFDeERyQixlQUFPQSxLQURpRDtBQUV4REMsZ0JBQVFBLE1BRmdEO0FBR3hESyx5QkFBaUIsTUFIdUM7QUFJeERFLG1CQUFXLE1BSjZDO0FBS3hERCxrQkFBVSxLQUFLZSx1QkFBTCxDQUE2QnRCLEtBQTdCLEVBQW9DQyxNQUFwQztBQUw4QyxPQUE1QixDQUE5Qjs7QUFRQSxVQUFJWSxTQUFKLEVBQWU7QUFDYkksbUJBQVdNLElBQVgsQ0FBZ0JWLFNBQWhCO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBSixFQUFhO0FBQ1hNLG1CQUFXTSxJQUFYLENBQWdCLFNBQWhCO0FBQ0Q7O0FBRUQsVUFBSVgsUUFBSixFQUFjO0FBQ1pLLG1CQUFXTSxJQUFYLENBQWdCLGVBQWhCO0FBQ0Q7O0FBRUQsVUFBSXRCLE1BQUosRUFBWTtBQUNWaUIscUJBQWFqQixNQUFiLEdBQXNCQSxNQUF0QjtBQUNEOztBQUVELFVBQUlELEtBQUosRUFBVztBQUNUa0IscUJBQWFsQixLQUFiLEdBQXFCQSxLQUFyQjtBQUNEOztBQUVELFVBQUllLEtBQUosRUFBVztBQUNURSxtQkFBV00sSUFBWCxDQUFnQixXQUFoQjtBQUNEOztBQUVELFVBQUlQLFNBQUosRUFBZTtBQUNiQyxtQkFBV00sSUFBWCxDQUFnQixlQUFoQjtBQUNEOztBQUVELGFBQ0UsdUNBQUssV0FBV04sV0FBV08sSUFBWCxDQUFnQixHQUFoQixDQUFoQixFQUFzQyxPQUFPTixZQUE3QyxFQUEyRCxLQUFLRSxHQUFoRSxFQUFxRSxLQUFLTixHQUExRSxHQURGO0FBR0Q7Ozs7RUF0RXdCLGdCQUFNVyxTOztBQXlFakMxQixNQUFNMkIsWUFBTixHQUFxQjtBQUNuQjFCLFNBQU8sSUFEWTtBQUVuQkMsVUFBUTtBQUZXLENBQXJCOztrQkFLZUYsSyIsImZpbGUiOiJJbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY2FsY3VsYXRlU2NhbGVkRm9udFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KDEyLCBNYXRoLm1pbihNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuNzUsIDAuNzUgKiBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDEyKSkpO1xuICB9XG5cbiAgZ2VuZXJhdGVTcmNQbGFjZWhvbGRlcih7IHdpZHRoLCBoZWlnaHQsIGJhY2tncm91bmRDb2xvciwgZm9udFNpemUsIGZvbnRDb2xvciB9KSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB2aWV3Qm94PVwiMCAwICR7d2lkdGh9ICR7aGVpZ2h0fVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiBmaWxsPVwiJHtiYWNrZ3JvdW5kQ29sb3J9XCIvPlxuICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIHg9XCIke3dpZHRoLzJ9XCIgeT1cIiR7aGVpZ2h0LzJ9XCJcbiAgICAgICAgICBzdHlsZT1cImZpbGw6JHtmb250Q29sb3J9O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOiR7Zm9udFNpemV9cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbFwiPlxuICAgICAgICAgICR7d2lkdGh9eCR7aGVpZ2h0fVxuICAgICAgICA8L3RleHQ+XG4gICAgICA8L3N2Zz5cbiAgICBgLnJlcGxhY2UoL1xcbi9nLCAnJykucmVwbGFjZSgvXlxccysvZywgJycpLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJvdW5kZWQsXG4gICAgICBib3JkZXJlZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGFsdCxcbiAgICAgIGZsdWlkLFxuICAgICAgdGh1bWJuYWlsLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcbiAgICBjb25zdCBpbmxpbmVTdHlsZXMgPSB0aGlzLnByb3BzLnN0eWxlIHx8IHt9O1xuXG4gICAgY29uc3Qgc3JjID0gdGhpcy5wcm9wcy5zcmMgfHwgdGhpcy5nZW5lcmF0ZVNyY1BsYWNlaG9sZGVyKHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2RkZCcsXG4gICAgICBmb250Q29sb3I6ICcjYmJiJyxcbiAgICAgIGZvbnRTaXplOiB0aGlzLmNhbGN1bGF0ZVNjYWxlZEZvbnRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgfSk7XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAocm91bmRlZCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdyb3VuZGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKGJvcmRlcmVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2ltZy10aHVtYm5haWwnKTtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICBpbmxpbmVTdHlsZXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh3aWR0aCkge1xuICAgICAgaW5saW5lU3R5bGVzLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKGZsdWlkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2ltZy1mbHVpZCcpO1xuICAgIH1cblxuICAgIGlmICh0aHVtYm5haWwpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnaW1nLXRodW1ibmFpbCcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHN0eWxlPXtpbmxpbmVTdHlsZXN9IHNyYz17c3JjfSBhbHQ9e2FsdH0gLz5cbiAgICApO1xuICB9XG59XG5cbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlO1xuIl19