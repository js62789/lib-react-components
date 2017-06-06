import React from 'react';
import styles from './styles.css';

export class Input extends React.Component {
  render() {
    return (
      <input className={styles.textInput} defaultValue={this.props.value} type="text" />
    );
  }
}

export default Input;
