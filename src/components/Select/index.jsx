import React from 'react';
import styles from './styles.css';

export class Select extends React.Component {
  render() {
    return (
      <select className={styles.dropdown} type="text">
        {
          this.props.options.map(opt => (
            <option value={opt.key}>{opt.value}</option>
          ))
        }
      </select>
    );
  }
}

export default Select;
