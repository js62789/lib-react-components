import React from 'react';
import styles from './styles.css';

/**
 * <Input.Group>
 *   <Input />
 *   <Select />
 *   <Button />
 * </Input.Group>
 */
export class InputGroup extends React.Component {
  render() {
    return (
      <div className={styles.inputGroup}>

      </div>
    );
  }
}

export class Input extends React.Component {
  render() {
    return (
      <input className={styles.textInput} type="text" />
    );
  }
}

export default Input;
