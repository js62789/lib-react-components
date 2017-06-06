import React from 'react';
import styles from './styles.css';

/**
 * <InputGroup>
 *   <Input />
 *   <Select />
 *   <Button />
 * </InputGroup>
 */
export class InputGroup extends React.Component {
  render() {
    return (
      <div className={styles.inputGroup}>
        {this.props.children}
      </div>
    );
  }
}

export default InputGroup;
