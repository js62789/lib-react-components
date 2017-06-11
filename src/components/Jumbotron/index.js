import React from 'react';
import styles from './styles.css';

export class Jumbotron extends React.Component {
  render() {
    const { inverted, backgroundImage, ...other } = this.props;
    const classNames = [ styles.jumbotron ];
    const style = {};

    if (inverted) {
      classNames.push(styles.jumbotronInverse);
    }

    if (backgroundImage) {
      style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${backgroundImage}')`;
    }

    return (
      <div className={classNames.join(' ')} style={style} {...other} />
    );
  }
}

export default Jumbotron;
