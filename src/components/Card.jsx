import React from 'react';
import {
  Button,
  Image,
  Header,
  Text,
} from '../';

export class CardColumns extends React.Component {
  render() {
    return (
      <div className="card-columns" {...this.props} />
    );
  }
}

export class CardDeck extends React.Component {
  render() {
    return (
      <div className="card-deck" {...this.props} />
    );
  }
}

export class CardImage extends React.Component {
  render() {
    const { position, className } = this.props;
    const classNames = [];

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

    return (
      <Image className={classNames.join(' ')} {...this.props} />
    );
  }
}

export class CardImageOverlay extends React.Component {
  render() {
    return (
      <div className="card-img-overlay" {...this.props} />
    );
  }
}

export class CardHeader extends React.Component {
  render() {
    return (
      <CardText className="card-header" {...this.props} />
    );
  }
}

export class CardFooter extends React.Component {
  render() {
    return (
      <CardText className="card-footer" {...this.props} />
    );
  }
}

export class CardTitle extends React.Component {
  render() {
    return (
      <Header as="h4" className="card-title" {...this.props} />
    );
  }
}

export class CardText extends React.Component {
  render() {
    const { className, ...other } = this.props;
    const classNames = [ 'card-text' ];
    if (className) {
      classNames.push(className);
    }
    return (
      <Text className={classNames.join(' ')} {...other} />
    );
  }
}

export class CardButton extends React.Component {
  render() {
    return (
      <Button {...this.props} />
    );
  }
}

export class CardBlock extends React.Component {
  render() {
    return (
      <div className="card-block">{this.props.children}</div>
    );
  }
}

export class Card extends React.Component {
  static Image = CardImage
  static ImageOverlay = CardImageOverlay
  static Title = CardTitle
  static Text = CardText
  static Button = CardButton
  static Block = CardBlock
  static Header = CardHeader
  static Footer = CardFooter
  static Deck = CardDeck
  static Columns = CardColumns
  render() {
    const {
      width,
      color,
      className,
      inverted,
      textAlign,
      ...other
    } = this.props;
    const classNames = [ 'card' ];
    const style = {};

    if (className) {
      classNames.push(className);
    }

    if (width) {
      style.width = width;
    }

    if (color) {
      classNames.push(`card-${color}`);
    }

    if (inverted) {
      classNames.push('card-inverse');
    }

    if (textAlign === 'center') {
      classNames.push('text-center');
    } else if (textAlign === 'right') {
      classNames.push('text-right');
    }

    return (
      <div className={classNames.join(' ')} style={style} {...other} />
    );
  }
}

export default Card;
