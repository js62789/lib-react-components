import React from 'react';
import styles from './styles.css';

export class Container extends React.Component {
  render() {
    const Element = this.props.as || 'div';
    const { className, fluid, ...other } = this.props;
    const classNames = [];

    if (className) {
      classNames.push(className);
    }

    if (fluid) {
      classNames.push(styles.containerFluid);
    } else {
      classNames.push(styles.container);
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Container;
