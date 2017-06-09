import React from 'react';
import styles from './styles.css';

export class Button extends React.Component {
  render() {
    const { className, color, size, ...other } = this.props;
    const classNames = [ styles.btn ];

    switch (color) {
      case 'primary':
        classNames.push(styles.btnPrimary);
        break;
      case 'info':
        classNames.push(styles.btnInfo);
        break;
      case 'success':
        classNames.push(styles.btnSuccess);
        break;
      case 'warning':
        classNames.push(styles.btnWarning);
        break;
      case 'danger':
        classNames.push(styles.btnDanger);
        break;
    }

    switch (size) {
      case 'small':
        classNames.push(styles.btnSmall);
        break;
      case 'large':
        classNames.push(styles.btnLarge);
        break;
    }

    if (className) {
      classNames.push(className);
    }

    return (
      <button className={classNames.join(' ')} {...other} />
    );
  }
}

export default Button;
