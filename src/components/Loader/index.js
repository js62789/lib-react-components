import React from 'react';
import styles from './styles.css';

export class Loader extends React.Component {
  render() {
    return (
      <div className={styles.loader} />
    );
  }
}

export default Loader;
