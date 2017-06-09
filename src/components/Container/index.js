import React from 'react';
import styles from './styles.css';

export class Container extends React.Component {
  render() {
    const Element = this.props.as || 'div';
    const { className, ...other } = this.props;
    const classNames = [ styles.container ];

    if (className) {
      classNames.push(className);
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Container;
