import React from 'react';
import styles from './styles.css';

export class Button extends React.Component {
  render() {
    let className;

    switch (this.props.color) {
      case 'primary':
        className = styles.btnPrimary;
        break;
      case 'info':
        className = styles.btnInfo;
        break;
      case 'success':
        className = styles.btnSuccess;
        break;
      case 'warning':
        className = styles.btnWarning;
        break;
      case 'danger':
        className = styles.btnDanger;
        break;
      default:
        className = styles.btn;
    }

    return (
      <button className={className}>{this.props.children}</button>
    );
  }
}

export default Button;
