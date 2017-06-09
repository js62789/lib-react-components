import React from 'react';
import {
  Button,
  Image,
  Header,
  Text,
} from '../';
import styles from './styles.css';

export class CardImage extends React.Component {
  render() {
    return (
      <Image className={styles.cardImage} {...this.props} />
    );
  }
}

export class CardHeader extends React.Component {
  render() {
    return (
      <CardText className={styles.cardHeader} {...this.props} />
    );
  }
}

export class CardFooter extends React.Component {
  render() {
    return (
      <CardText className={styles.cardFooter} {...this.props} />
    );
  }
}

export class CardTitle extends React.Component {
  render() {
    return (
      <Header as="h4" className={styles.cardTitle} {...this.props} />
    );
  }
}

export class CardText extends React.Component {
  render() {
    const { className, ...other } = this.props;
    const classNames = [ styles.cardText ];
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

export class CardBody extends React.Component {
  render() {
    return (
      <div className={styles.cardBody}>{this.props.children}</div>
    );
  }
}

export class Card extends React.Component {
  static Image = CardImage
  static Title = CardTitle
  static Text = CardText
  static Button = CardButton
  static Body = CardBody
  static Header = CardHeader
  static Footer = CardFooter
  render() {
    const {
      width,
      color,
      className,
      inverted,
      textAlign,
      ...other
    } = this.props;
    const classNames = [ styles.card ];
    const style = {};

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
      classNames.push(styles.cardInverted);
    }

    if (textAlign === 'center') {
      classNames.push(styles.cardCenterAligned);
    } else if (textAlign === 'right') {
      classNames.push(styles.cardRightAligned);
    }

    return (
      <div className={classNames.join(' ')} style={style} {...other} />
    );
  }
}

export default Card;
