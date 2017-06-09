import React from 'react';
import styles from './styles.css';

export class Text extends React.Component {
  render() {
    const classNames = [ styles.text ];
    const { className, ...other } = this.props;

    if (className) {
      classNames.push(className);
    }

    switch (this.props.color) {
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

    if (this.props.small) {
      classNames.push(styles.textSmall);
    }

    if (this.props.muted) {
      classNames.push(styles.textMuted);
    }

    return (
      <p className={classNames.join(' ')} {...other} />
    );
  }
}

export default Text;
