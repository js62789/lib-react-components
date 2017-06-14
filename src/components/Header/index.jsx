import React from 'react';
import Button from '../Button';
import Image from '../Image';
import styles from './styles.css';

export class Header extends React.Component {
  render() {
    const Element = this.props.as || 'h1';
    const { className, ...other } = this.props;
    const classNames = [ styles[Element] ];
    if (className) {
      classNames.push(className);
    }
    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Header;
