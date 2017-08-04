import React from 'react';

export class Jumbotron extends React.Component {
  render() {
    const { inverted, backgroundImage, ...other } = this.props;
    const classNames = [ 'jumbotron' ];
    const style = {};

    if (inverted) {
      classNames.push('jumbotron-inverse');
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
