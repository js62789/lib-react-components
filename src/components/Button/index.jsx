import React from 'react';
import styles from './styles.css';

export class Button extends React.Component {
  render() {
    let className;

    switch (this.props.color) {
      case 'primary':
        className = styles.primaryBtn;
        break;
      case 'info':
        className = styles.infoBtn;
        break;
      case 'success':
        className = styles.successBtn;
        break;
      case 'warning':
        className = styles.warningBtn;
        break;
      case 'danger':
        className = styles.dangerBtn;
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
