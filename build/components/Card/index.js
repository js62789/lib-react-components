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

var styles = {
  'card': 'styles__card___1Qd8e',
  'cardBlock': 'styles__cardBlock___KQ1o8',
  'cardTitle': 'styles__cardTitle___3V0Bz',
  'cardSubtitle': 'styles__cardSubtitle___2Aq4Y',
  'cardText': 'styles__cardText___3mjvz',
  'cardLink': 'styles__cardLink___LK6fo',
  'listGroup': 'styles__listGroup___rmcth',
  'listGroupItem': 'styles__listGroupItem___1gcgr',
  'cardHeader': 'styles__cardHeader___2l7t-',
  'cardFooter': 'styles__cardFooter___2KLb_',
  'cardHeaderTabs': 'styles__cardHeaderTabs___11fs5',
  'cardHeaderPills': 'styles__cardHeaderPills___1Fmk7',
  'cardPrimary': 'styles__cardPrimary___3Mwrn',
  'cardSuccess': 'styles__cardSuccess___1_kpj',
  'cardInfo': 'styles__cardInfo___3Td8K',
  'cardWarning': 'styles__cardWarning___1ziQ_',
  'cardDanger': 'styles__cardDanger___1fEXn',
  'cardOutlinePrimary': 'styles__cardOutlinePrimary___1UYYT',
  'cardOutlineSecondary': 'styles__cardOutlineSecondary___3P25K',
  'cardOutlineInfo': 'styles__cardOutlineInfo___2gzLF',
  'cardOutlineSuccess': 'styles__cardOutlineSuccess___2hiV_',
  'cardOutlineWarning': 'styles__cardOutlineWarning___3yXx1',
  'cardOutlineDanger': 'styles__cardOutlineDanger___1gcnq',
  'cardInverse': 'styles__cardInverse___3FPO3',
  'cadTtitle': 'styles__cadTtitle___14QJj',
  'cardBlockquote': 'styles__cardBlockquote___d08x2',
  'blockquoteFooter': 'styles__blockquoteFooter___sQk2c',
  'cardImg': 'styles__cardImg___VT8lc',
  'cardImgOverlay': 'styles__cardImgOverlay___129vW',
  'cardImgTop': 'styles__cardImgTop___21Bik',
  'cardImgBottom': 'styles__cardImgBottom___3WqbR',
  'cardDeck': 'styles__cardDeck___3Q8nv',
  'cardGroup': 'styles__cardGroup___2qgsQ',
  'cardColumns': 'styles__cardColumns___5Jzq3',
  'textRight': 'styles__textRight___10rJT',
  'textCenter': 'styles__textCenter___kdQz-'
};

var CardColumns = exports.CardColumns = function (_React$Component) {
  _inherits(CardColumns, _React$Component);

  function CardColumns() {
    _classCallCheck(this, CardColumns);

    return _possibleConstructorReturn(this, (CardColumns.__proto__ || Object.getPrototypeOf(CardColumns)).apply(this, arguments));
  }

  _createClass(CardColumns, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', _extends({ className: styles.cardColumns }, this.props));
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
      return _react2.default.createElement('div', _extends({ className: styles.cardDeck }, this.props));
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
        classNames.push(styles.cardImgTop);
      } else if (position === 'bottom') {
        classNames.push(styles.cardImgBottom);
      } else {
        classNames.push(styles.cardImg);
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
      return _react2.default.createElement('div', _extends({ className: styles.cardImgOverlay }, this.props));
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
      return _react2.default.createElement(CardText, _extends({ className: styles.cardHeader }, this.props));
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
      return _react2.default.createElement(CardText, _extends({ className: styles.cardFooter }, this.props));
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
      return _react2.default.createElement(_.Header, _extends({ as: 'h4', className: styles.cardTitle }, this.props));
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

      var classNames = [styles.cardText];
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
        { className: styles.cardBlock },
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

      var classNames = [styles.card];
      var style = {};

      if (className) {
        classNames.push(className);
      }

      if (width) {
        style.width = width;
      }

      switch (this.props.color) {
        case 'primary':
          classNames.push(styles.cardPrimary);
          break;
        case 'info':
          classNames.push(styles.cardInfo);
          break;
        case 'success':
          classNames.push(styles.cardSuccess);
          break;
        case 'warning':
          classNames.push(styles.cardWarning);
          break;
        case 'danger':
          classNames.push(styles.cardDanger);
          break;
      }

      if (inverted) {
        classNames.push(styles.cardInverse);
      }

      if (textAlign === 'center') {
        classNames.push(styles.textCenter);
      } else if (textAlign === 'right') {
        classNames.push(styles.textRight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXguanN4Il0sIm5hbWVzIjpbIkNhcmRDb2x1bW5zIiwic3R5bGVzIiwiY2FyZENvbHVtbnMiLCJwcm9wcyIsIkNvbXBvbmVudCIsIkNhcmREZWNrIiwiY2FyZERlY2siLCJDYXJkSW1hZ2UiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJwdXNoIiwiY2FyZEltZ1RvcCIsImNhcmRJbWdCb3R0b20iLCJjYXJkSW1nIiwiam9pbiIsIkNhcmRJbWFnZU92ZXJsYXkiLCJjYXJkSW1nT3ZlcmxheSIsIkNhcmRIZWFkZXIiLCJjYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsImNhcmRGb290ZXIiLCJDYXJkVGl0bGUiLCJjYXJkVGl0bGUiLCJDYXJkVGV4dCIsIm90aGVyIiwiY2FyZFRleHQiLCJDYXJkQnV0dG9uIiwiQ2FyZEJsb2NrIiwiY2FyZEJsb2NrIiwiY2hpbGRyZW4iLCJDYXJkIiwid2lkdGgiLCJjb2xvciIsImludmVydGVkIiwidGV4dEFsaWduIiwiY2FyZCIsInN0eWxlIiwiY2FyZFByaW1hcnkiLCJjYXJkSW5mbyIsImNhcmRTdWNjZXNzIiwiY2FyZFdhcm5pbmciLCJjYXJkRGFuZ2VyIiwiY2FyZEludmVyc2UiLCJ0ZXh0Q2VudGVyIiwidGV4dFJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVFhQSxXLFdBQUFBLFc7Ozs7Ozs7Ozs7OzZCQUNGO0FBQ1AsYUFDRSxnREFBSyxXQUFXQyxPQUFPQyxXQUF2QixJQUF3QyxLQUFLQyxLQUE3QyxFQURGO0FBR0Q7Ozs7RUFMOEIsZ0JBQU1DLFM7O0lBUTFCQyxRLFdBQUFBLFE7Ozs7Ozs7Ozs7OzZCQUNGO0FBQ1AsYUFDRSxnREFBSyxXQUFXSixPQUFPSyxRQUF2QixJQUFxQyxLQUFLSCxLQUExQyxFQURG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S0tKOztzQkFMTEksSTs7O1NBTUlIOztzQkFOSkcsSTs7O1NBT0tiOztzQkFQTGEsSTs7O1NBUUtYOztzQkFSTFcsSTs7O1NBU0cxQjs7c0JBVEgwQixJOzs7U0FVTS9COztrQkF1REorQixJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgSW1hZ2UsXG4gIEhlYWRlcixcbiAgVGV4dCxcbn0gZnJvbSAnLi4vJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcblxuZXhwb3J0IGNsYXNzIENhcmRDb2x1bW5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb2x1bW5zfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkRGVjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkRGVja30gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcG9zaXRpb24sIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNhcmRJbWdUb3ApO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNhcmRJbWdCb3R0b20pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNhcmRJbWcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEltYWdlT3ZlcmxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkSW1nT3ZlcmxheX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRUZXh0IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRIZWFkZXJ9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkVGV4dCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkRm9vdGVyfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXIgYXM9XCJoNFwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUaXRsZX0gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZFRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbIHN0eWxlcy5jYXJkVGV4dCBdO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gey4uLm90aGVyfSAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b24gey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZEJsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRCbG9ja30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBJbWFnZSA9IENhcmRJbWFnZVxuICBzdGF0aWMgSW1hZ2VPdmVybGF5ID0gQ2FyZEltYWdlT3ZlcmxheVxuICBzdGF0aWMgVGl0bGUgPSBDYXJkVGl0bGVcbiAgc3RhdGljIFRleHQgPSBDYXJkVGV4dFxuICBzdGF0aWMgQnV0dG9uID0gQ2FyZEJ1dHRvblxuICBzdGF0aWMgQmxvY2sgPSBDYXJkQmxvY2tcbiAgc3RhdGljIEhlYWRlciA9IENhcmRIZWFkZXJcbiAgc3RhdGljIEZvb3RlciA9IENhcmRGb290ZXJcbiAgc3RhdGljIERlY2sgPSBDYXJkRGVja1xuICBzdGF0aWMgQ29sdW1ucyA9IENhcmRDb2x1bW5zXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aCxcbiAgICAgIGNvbG9yLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW52ZXJ0ZWQsXG4gICAgICB0ZXh0QWxpZ24sXG4gICAgICAuLi5vdGhlclxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbIHN0eWxlcy5jYXJkIF07XG4gICAgY29uc3Qgc3R5bGUgPSB7fTtcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmICh3aWR0aCkge1xuICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuY29sb3IpIHtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNhcmRQcmltYXJ5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5jYXJkSW5mbyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuY2FyZFN1Y2Nlc3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNhcmRXYXJuaW5nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYW5nZXInOlxuICAgICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmNhcmREYW5nZXIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoaW52ZXJ0ZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuY2FyZEludmVyc2UpO1xuICAgIH1cblxuICAgIGlmICh0ZXh0QWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLnRleHRDZW50ZXIpO1xuICAgIH0gZWxzZSBpZiAodGV4dEFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLnRleHRSaWdodCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gc3R5bGU9e3N0eWxlfSB7Li4ub3RoZXJ9IC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19