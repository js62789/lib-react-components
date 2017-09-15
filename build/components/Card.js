'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = exports.CardBlock = exports.CardButton = exports.CardText = exports.CardTitle = exports.CardFooter = exports.CardHeader = exports.CardImageOverlay = exports.CardImage = exports.CardDeck = exports.CardColumns = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardColumns = exports.CardColumns = function (_React$Component) {
  _inherits(CardColumns, _React$Component);

  function CardColumns() {
    _classCallCheck(this, CardColumns);

    return _possibleConstructorReturn(this, (CardColumns.__proto__ || Object.getPrototypeOf(CardColumns)).apply(this, arguments));
  }

  _createClass(CardColumns, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', _extends({ className: 'card-columns' }, this.props));
    }
  }]);

  return CardColumns;
}(_react2.default.Component);

var CardDeck = exports.CardDeck = function (_React$Component2) {
  _inherits(CardDeck, _React$Component2);

  function CardDeck() {
    _classCallCheck(this, CardDeck);

    return _possibleConstructorReturn(this, (CardDeck.__proto__ || Object.getPrototypeOf(CardDeck)).apply(this, arguments));
  }

  _createClass(CardDeck, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', _extends({ className: 'card-deck' }, this.props));
    }
  }]);

  return CardDeck;
}(_react2.default.Component);

var CardImage = exports.CardImage = function (_React$Component3) {
  _inherits(CardImage, _React$Component3);

  function CardImage() {
    _classCallCheck(this, CardImage);

    return _possibleConstructorReturn(this, (CardImage.__proto__ || Object.getPrototypeOf(CardImage)).apply(this, arguments));
  }

  _createClass(CardImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          position = _props.position,
          className = _props.className;

      var classNames = [];

      if (className) {
        classNames.push(className);
      }

      if (position === 'top') {
        classNames.push('card-img-top');
      } else if (position === 'bottom') {
        classNames.push('card-img-bottom');
      } else {
        classNames.push('card-img');
      }

      return _react2.default.createElement(_.Image, _extends({ className: classNames.join(' ') }, this.props));
    }
  }]);

  return CardImage;
}(_react2.default.Component);

var CardImageOverlay = exports.CardImageOverlay = function (_React$Component4) {
  _inherits(CardImageOverlay, _React$Component4);

  function CardImageOverlay() {
    _classCallCheck(this, CardImageOverlay);

    return _possibleConstructorReturn(this, (CardImageOverlay.__proto__ || Object.getPrototypeOf(CardImageOverlay)).apply(this, arguments));
  }

  _createClass(CardImageOverlay, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', _extends({ className: 'card-img-overlay' }, this.props));
    }
  }]);

  return CardImageOverlay;
}(_react2.default.Component);

var CardHeader = exports.CardHeader = function (_React$Component5) {
  _inherits(CardHeader, _React$Component5);

  function CardHeader() {
    _classCallCheck(this, CardHeader);

    return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
  }

  _createClass(CardHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(CardText, _extends({ className: 'card-header' }, this.props));
    }
  }]);

  return CardHeader;
}(_react2.default.Component);

var CardFooter = exports.CardFooter = function (_React$Component6) {
  _inherits(CardFooter, _React$Component6);

  function CardFooter() {
    _classCallCheck(this, CardFooter);

    return _possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
  }

  _createClass(CardFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(CardText, _extends({ className: 'card-footer' }, this.props));
    }
  }]);

  return CardFooter;
}(_react2.default.Component);

var CardTitle = exports.CardTitle = function (_React$Component7) {
  _inherits(CardTitle, _React$Component7);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_.Header, _extends({ as: 'h4', className: 'card-title' }, this.props));
    }
  }]);

  return CardTitle;
}(_react2.default.Component);

var CardText = exports.CardText = function (_React$Component8) {
  _inherits(CardText, _React$Component8);

  function CardText() {
    _classCallCheck(this, CardText);

    return _possibleConstructorReturn(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
  }

  _createClass(CardText, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          other = _objectWithoutProperties(_props2, ['className']);

      var classNames = ['card-text'];
      if (className) {
        classNames.push(className);
      }
      return _react2.default.createElement(_.Text, _extends({ className: classNames.join(' ') }, other));
    }
  }]);

  return CardText;
}(_react2.default.Component);

var CardButton = exports.CardButton = function (_React$Component9) {
  _inherits(CardButton, _React$Component9);

  function CardButton() {
    _classCallCheck(this, CardButton);

    return _possibleConstructorReturn(this, (CardButton.__proto__ || Object.getPrototypeOf(CardButton)).apply(this, arguments));
  }

  _createClass(CardButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_.Button, this.props);
    }
  }]);

  return CardButton;
}(_react2.default.Component);

var CardBlock = exports.CardBlock = function (_React$Component10) {
  _inherits(CardBlock, _React$Component10);

  function CardBlock() {
    _classCallCheck(this, CardBlock);

    return _possibleConstructorReturn(this, (CardBlock.__proto__ || Object.getPrototypeOf(CardBlock)).apply(this, arguments));
  }

  _createClass(CardBlock, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-block' },
        this.props.children
      );
    }
  }]);

  return CardBlock;
}(_react2.default.Component);

var Card = exports.Card = function (_React$Component11) {
  _inherits(Card, _React$Component11);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          width = _props3.width,
          color = _props3.color,
          className = _props3.className,
          inverted = _props3.inverted,
          textAlign = _props3.textAlign,
          other = _objectWithoutProperties(_props3, ['width', 'color', 'className', 'inverted', 'textAlign']);

      var classNames = ['card'];
      var style = {};

      if (className) {
        classNames.push(className);
      }

      if (width) {
        style.width = width;
      }

      if (color) {
        classNames.push('card-' + color);
      }

      if (inverted) {
        classNames.push('card-inverse');
      }

      if (textAlign === 'center') {
        classNames.push('text-center');
      } else if (textAlign === 'right') {
        classNames.push('text-right');
      }

      return _react2.default.createElement('div', _extends({ className: classNames.join(' '), style: style }, other));
    }
  }]);

  return Card;
}(_react2.default.Component);

Object.defineProperty(Card, 'Image', {
  enumerable: true,
  writable: true,
  value: CardImage
});
Object.defineProperty(Card, 'ImageOverlay', {
  enumerable: true,
  writable: true,
  value: CardImageOverlay
});
Object.defineProperty(Card, 'Title', {
  enumerable: true,
  writable: true,
  value: CardTitle
});
Object.defineProperty(Card, 'Text', {
  enumerable: true,
  writable: true,
  value: CardText
});
Object.defineProperty(Card, 'Button', {
  enumerable: true,
  writable: true,
  value: CardButton
});
Object.defineProperty(Card, 'Block', {
  enumerable: true,
  writable: true,
  value: CardBlock
});
Object.defineProperty(Card, 'Header', {
  enumerable: true,
  writable: true,
  value: CardHeader
});
Object.defineProperty(Card, 'Footer', {
  enumerable: true,
  writable: true,
  value: CardFooter
});
Object.defineProperty(Card, 'Deck', {
  enumerable: true,
  writable: true,
  value: CardDeck
});
Object.defineProperty(Card, 'Columns', {
  enumerable: true,
  writable: true,
  value: CardColumns
});
exports.default = Card;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4Il0sIm5hbWVzIjpbIkNhcmRDb2x1bW5zIiwicHJvcHMiLCJDb21wb25lbnQiLCJDYXJkRGVjayIsIkNhcmRJbWFnZSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsInB1c2giLCJqb2luIiwiQ2FyZEltYWdlT3ZlcmxheSIsIkNhcmRIZWFkZXIiLCJDYXJkRm9vdGVyIiwiQ2FyZFRpdGxlIiwiQ2FyZFRleHQiLCJvdGhlciIsIkNhcmRCdXR0b24iLCJDYXJkQmxvY2siLCJjaGlsZHJlbiIsIkNhcmQiLCJ3aWR0aCIsImNvbG9yIiwiaW52ZXJ0ZWQiLCJ0ZXh0QWxpZ24iLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFPYUEsVyxXQUFBQSxXOzs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLGFBQ0UsZ0RBQUssV0FBVSxjQUFmLElBQWtDLEtBQUtDLEtBQXZDLEVBREY7QUFHRDs7OztFQUw4QixnQkFBTUMsUzs7SUFRMUJDLFEsV0FBQUEsUTs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxhQUNFLGdEQUFLLFdBQVUsV0FBZixJQUErQixLQUFLRixLQUFwQyxFQURGO0FBR0Q7Ozs7RUFMMkIsZ0JBQU1DLFM7O0lBUXZCRSxTLFdBQUFBLFM7Ozs7Ozs7Ozs7OzZCQUNGO0FBQUEsbUJBQ3lCLEtBQUtILEtBRDlCO0FBQUEsVUFDQ0ksUUFERCxVQUNDQSxRQUREO0FBQUEsVUFDV0MsU0FEWCxVQUNXQSxTQURYOztBQUVQLFVBQU1DLGFBQWEsRUFBbkI7O0FBRUEsVUFBSUQsU0FBSixFQUFlO0FBQ2JDLG1CQUFXQyxJQUFYLENBQWdCRixTQUFoQjtBQUNEOztBQUVELFVBQUlELGFBQWEsS0FBakIsRUFBd0I7QUFDdEJFLG1CQUFXQyxJQUFYLENBQWdCLGNBQWhCO0FBQ0QsT0FGRCxNQUVPLElBQUlILGFBQWEsUUFBakIsRUFBMkI7QUFDaENFLG1CQUFX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QVgsQ0FBZ0IsR0FBaEIsQ0FBaEIsRUFBc0MsT0FBT2UsS0FBN0MsSUFBd0RULEtBQXhELEVBREY7QUFHRDs7OztFQWhEdUIsZ0JBQU1iLFM7O3NCQUFuQmlCLEk7OztTQUNJZjs7c0JBREplLEk7OztTQUVXVDs7c0JBRlhTLEk7OztTQUdJTjs7c0JBSEpNLEk7OztTQUlHTDs7c0JBSkhLLEk7OztTQUtLSDs7c0JBTExHLEk7OztTQU1JRjs7c0JBTkpFLEk7OztTQU9LUjs7c0JBUExRLEk7OztTQVFLUDs7c0JBUkxPLEk7OztTQVNHaEI7O3NCQVRIZ0IsSTs7O1NBVU1uQjs7a0JBeUNKbUIsSSIsImZpbGUiOiJDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW1hZ2UsXG4gIEhlYWRlcixcbiAgVGV4dCxcbn0gZnJvbSAnLi4vJztcblxuZXhwb3J0IGNsYXNzIENhcmRDb2x1bW5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29sdW1uc1wiIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmREZWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdjYXJkLWltZy10b3AnKTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdjYXJkLWltZy1ib3R0b20nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdjYXJkLWltZycpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEltYWdlT3ZlcmxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltZy1vdmVybGF5XCIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRUZXh0IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRUZXh0IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZFRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZFRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbICdjYXJkLXRleHQnIF07XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dCBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvbiB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkQmxvY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgSW1hZ2UgPSBDYXJkSW1hZ2VcbiAgc3RhdGljIEltYWdlT3ZlcmxheSA9IENhcmRJbWFnZU92ZXJsYXlcbiAgc3RhdGljIFRpdGxlID0gQ2FyZFRpdGxlXG4gIHN0YXRpYyBUZXh0ID0gQ2FyZFRleHRcbiAgc3RhdGljIEJ1dHRvbiA9IENhcmRCdXR0b25cbiAgc3RhdGljIEJsb2NrID0gQ2FyZEJsb2NrXG4gIHN0YXRpYyBIZWFkZXIgPSBDYXJkSGVhZGVyXG4gIHN0YXRpYyBGb290ZXIgPSBDYXJkRm9vdGVyXG4gIHN0YXRpYyBEZWNrID0gQ2FyZERlY2tcbiAgc3RhdGljIENvbHVtbnMgPSBDYXJkQ29sdW1uc1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGgsXG4gICAgICBjb2xvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGludmVydGVkLFxuICAgICAgdGV4dEFsaWduLFxuICAgICAgLi4ub3RoZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWyAnY2FyZCcgXTtcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHdpZHRoKSB7XG4gICAgICBzdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGlmIChjb2xvcikge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKGBjYXJkLSR7Y29sb3J9YCk7XG4gICAgfVxuXG4gICAgaWYgKGludmVydGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2NhcmQtaW52ZXJzZScpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0QWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ3RleHQtY2VudGVyJyk7XG4gICAgfSBlbHNlIGlmICh0ZXh0QWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgndGV4dC1yaWdodCcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHN0eWxlPXtzdHlsZX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ==