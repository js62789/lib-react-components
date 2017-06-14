import React from 'react';
import styles from './styles.css';

export class Text extends React.Component {
  render() {
    const classNames = [ styles.text ];
    const {
      className,
      color,
      as,
      small,
      muted,
      justify,
      ...other
    } = this.props;
    const Element = as || (small ? 'small' : 'p');

    if (className) {
      classNames.push(className);
    }

    switch (color) {
      case 'primary':
        classNames.push(styles.textPrimary);
        break;
      case 'info':
        classNames.push(styles.textInfo);
        break;
      case 'success':
        classNames.push(styles.textSuccess);
        break;
      case 'warning':
        classNames.push(styles.textWarning);
        break;
      case 'danger':
        classNames.push(styles.textDanger);
        break;
    }

    if (small) {
      classNames.push(styles.textSmall);
    }

    if (muted) {
      classNames.push(styles.textMuted);
    }

    if (justify) {
      classNames.push(styles.dFlex);
      classNames.push(styles.w100);
      switch (justify) {
        case 'start':
          classNames.push(styles.justifyContentStart);
          break;
        case 'end':
          classNames.push(styles.justifyContentEnd);
          break;
        case 'center':
          classNames.push(styles.justifyContentCenter);
          break;
        case 'between':
          classNames.push(styles.justifyContentBetween);
          break;
        case 'around':
          classNames.push(styles.justifyContentAround);
          break;
      }
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Text;
