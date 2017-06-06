import React from 'react';
import styles from './styles.css';

export class Button extends React.Component {
  render() {
    return (
      <button className={styles.btn}>{this.props.children}</button>
    );
  }
}
