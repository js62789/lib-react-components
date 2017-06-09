import React from 'react';
import styles from './styles.css';

export class Jumbotron extends React.Component {
  render() {
    return (
      <div className={styles.jumbotron} {...this.props} />
    );
  }
}

export default Jumbotron;
