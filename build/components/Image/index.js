'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'image': 'styles__image___3zp79',
  'imageRounded': 'styles__imageRounded___1ZiOm',
  'imageBordered': 'styles__imageBordered___23Qcx'
};

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
          alt = _props.alt;

      var classNames = [styles.image];
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
        classNames.push(styles.imageRounded);
      }

      if (bordered) {
        classNames.push(styles.imageBordered);
      }

      if (height) {
        inlineStyles.height = height;
      }

      if (width) {
        inlineStyles.width = width;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ltYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwibWF4IiwibWluIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJyZXBsYWNlIiwicHJvcHMiLCJyb3VuZGVkIiwiYm9yZGVyZWQiLCJjbGFzc05hbWUiLCJhbHQiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiaW1hZ2UiLCJpbmxpbmVTdHlsZXMiLCJzdHlsZSIsInNyYyIsImdlbmVyYXRlU3JjUGxhY2Vob2xkZXIiLCJjYWxjdWxhdGVTY2FsZWRGb250U2l6ZSIsInB1c2giLCJpbWFnZVJvdW5kZWQiLCJpbWFnZUJvcmRlcmVkIiwiam9pbiIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2FBLEssV0FBQUEsSzs7Ozs7Ozs7Ozs7NENBQ2FDLEssRUFBT0MsTSxFQUFRO0FBQ3JDLGFBQU9DLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsR0FBTCxDQUFTLEVBQVQsRUFBYUYsS0FBS0csR0FBTCxDQUFTSCxLQUFLRyxHQUFMLENBQVNMLEtBQVQsRUFBZ0JDLE1BQWhCLElBQTBCLElBQW5DLEVBQXlDLE9BQU9DLEtBQUtFLEdBQUwsQ0FBU0osS0FBVCxFQUFnQkMsTUFBaEIsQ0FBUCxHQUFpQyxFQUExRSxDQUFiLENBQVgsQ0FBUDtBQUNEOzs7aURBRStFO0FBQUEsVUFBdkRELEtBQXVELFFBQXZEQSxLQUF1RDtBQUFBLFVBQWhEQyxNQUFnRCxRQUFoREEsTUFBZ0Q7QUFBQSxVQUF4Q0ssZUFBd0MsUUFBeENBLGVBQXdDO0FBQUEsVUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLFVBQWJDLFNBQWEsUUFBYkEsU0FBYTs7QUFDOUUsYUFBTyxxRkFDb0VSLEtBRHBFLGtCQUNzRkMsTUFEdEYsdUJBQzhHRCxLQUQ5RyxTQUN1SEMsTUFEdkgsNERBRVlELEtBRlosa0JBRThCQyxNQUY5QixnQkFFK0NLLGVBRi9DLG1EQUc2Qk4sUUFBTSxDQUhuQyxhQUc0Q0MsU0FBTyxDQUhuRCxpQ0FJYU8sU0FKYixvQ0FJcURELFFBSnJELHlGQUtDUCxLQUxELFNBS1VDLE1BTFYsNENBUUxRLE9BUkssQ0FRRyxLQVJILEVBUVUsRUFSVixFQVFjQSxPQVJkLENBUXNCLE9BUnRCLEVBUStCLEVBUi9CLEVBUW1DQSxPQVJuQyxDQVEyQyxRQVIzQyxFQVFxRCxJQVJyRCxDQUFQO0FBU0Q7Ozs2QkFFUTtBQUFBLG1CQUNzRCxLQUFLQyxLQUQzRDtBQUFBLFVBQ0NWLEtBREQsVUFDQ0EsS0FERDtBQUFBLFVBQ1FDLE1BRFIsVUFDUUEsTUFEUjtBQUFBLFVBQ2dCVSxPQURoQixVQUNnQkEsT0FEaEI7QUFBQSxVQUN5QkMsUUFEekIsVUFDeUJBLFFBRHpCO0FBQUEsVUFDbUNDLFNBRG5DLFVBQ21DQSxTQURuQztBQUFBLFVBQzhDQyxHQUQ5QyxVQUM4Q0EsR0FEOUM7O0FBRVAsVUFBTUMsYUFBYSxDQUFFQyxPQUFPQyxLQUFULENBQW5CO0FBQ0EsVUFBTUMsZUFBZSxLQUFLUixLQUFMLENBQVdTLEtBQVgsSUFBb0IsRUFBekM7O0FBRUEsVUFBTUMsTUFBTSxLQUFLVixLQUFMLENBQVdVLEdBQVgsSUFBa0IsS0FBS0Msc0JBQUwsQ0FBNEI7QUFDeERyQixlQUFPQSxLQURpRDtBQUV4REMsZ0JBQVFBLE1BRmdEO0FBR3hESyx5QkFBaUIsTUFIdUM7QUFJeERFLG1CQUFXLE1BSjZDO0FBS3hERCxrQkFBVSxLQUFLZSx1QkFBTCxDQUE2QnRCLEtBQTdCLEVBQW9DQyxNQUFwQztBQUw4QyxPQUE1QixDQUE5Qjs7QUFRQSxVQUFJWSxTQUFKLEVBQWU7QUFDYkUsbUJBQVdRLElBQVgsQ0FBZ0JWLFNBQWhCO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBSixFQUFhO0FBQ1hJLG1CQUFXUSxJQUFYLENBQWdCUCxPQUFPUSxZQUF2QjtBQUNEOztBQUVELFVBQUlaLFFBQUosRUFBYztBQUNaRyxtQkFBV1EsSUFBWCxDQUFnQlAsT0FBT1MsYUFBdkI7QUFDRDs7QUFFRCxVQUFJeEIsTUFBSixFQUFZO0FBQ1ZpQixxQkFBYWpCLE1BQWIsR0FBc0JBLE1BQXRCO0FBQ0Q7O0FBRUQsVUFBSUQsS0FBSixFQUFXO0FBQ1RrQixxQkFBYWxCLEtBQWIsR0FBcUJBLEtBQXJCO0FBQ0Q7O0FBRUQsYUFDRSx1Q0FBSyxXQUFXZSxXQUFXVyxJQUFYLENBQWdCLEdBQWhCLENBQWhCLEVBQXNDLE9BQU9SLFlBQTdDLEVBQTJELEtBQUtFLEdBQWhFLEVBQXFFLEtBQUtOLEdBQTFFLEdBREY7QUFHRDs7OztFQXJEd0IsZ0JBQU1hLFM7O0FBd0RqQzVCLE1BQU02QixZQUFOLEdBQXFCO0FBQ25CNUIsU0FBTyxJQURZO0FBRW5CQyxVQUFRO0FBRlcsQ0FBckI7O2tCQUtlRixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY2FsY3VsYXRlU2NhbGVkRm9udFNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KDEyLCBNYXRoLm1pbihNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuNzUsIDAuNzUgKiBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KSAvIDEyKSkpO1xuICB9XG5cbiAgZ2VuZXJhdGVTcmNQbGFjZWhvbGRlcih7IHdpZHRoLCBoZWlnaHQsIGJhY2tncm91bmRDb2xvciwgZm9udFNpemUsIGZvbnRDb2xvciB9KSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB2aWV3Qm94PVwiMCAwICR7d2lkdGh9ICR7aGVpZ2h0fVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiBmaWxsPVwiJHtiYWNrZ3JvdW5kQ29sb3J9XCIvPlxuICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiIHg9XCIke3dpZHRoLzJ9XCIgeT1cIiR7aGVpZ2h0LzJ9XCJcbiAgICAgICAgICBzdHlsZT1cImZpbGw6JHtmb250Q29sb3J9O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOiR7Zm9udFNpemV9cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbFwiPlxuICAgICAgICAgICR7d2lkdGh9eCR7aGVpZ2h0fVxuICAgICAgICA8L3RleHQ+XG4gICAgICA8L3N2Zz5cbiAgICBgLnJlcGxhY2UoL1xcbi9nLCAnJykucmVwbGFjZSgvXlxccysvZywgJycpLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHJvdW5kZWQsIGJvcmRlcmVkLCBjbGFzc05hbWUsIGFsdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyBzdHlsZXMuaW1hZ2UgXTtcbiAgICBjb25zdCBpbmxpbmVTdHlsZXMgPSB0aGlzLnByb3BzLnN0eWxlIHx8IHt9O1xuXG4gICAgY29uc3Qgc3JjID0gdGhpcy5wcm9wcy5zcmMgfHwgdGhpcy5nZW5lcmF0ZVNyY1BsYWNlaG9sZGVyKHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2RkZCcsXG4gICAgICBmb250Q29sb3I6ICcjYmJiJyxcbiAgICAgIGZvbnRTaXplOiB0aGlzLmNhbGN1bGF0ZVNjYWxlZEZvbnRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgfSk7XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAocm91bmRlZCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5pbWFnZVJvdW5kZWQpO1xuICAgIH1cblxuICAgIGlmIChib3JkZXJlZCkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5pbWFnZUJvcmRlcmVkKTtcbiAgICB9XG5cbiAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICBpbmxpbmVTdHlsZXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh3aWR0aCkge1xuICAgICAgaW5saW5lU3R5bGVzLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gc3R5bGU9e2lubGluZVN0eWxlc30gc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxuICAgICk7XG4gIH1cbn1cblxuSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iXX0=