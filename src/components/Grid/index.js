import React from 'react';
import styles from './styles.css';

export class Column  extends React.Component {
  render() {
    const Element = this.props.as || 'div';
    const { className, ...other } = this.props;
    const classNames = [ styles.column ];

    if (this.props.columns) {
      classNames.push.apply(classNames, this.props.columns.map(size => styles[`column${size}`]));
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export class Row extends React.Component {
  render() {
    const Element = this.props.as || 'div';
    const { className, ...other } = this.props;
    const classNames = [ styles.row ];
    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export class Grid extends React.Component {
  static Column = Column
  static Row = Row
  render() {
    const { className, as, ...other } = this.props;
    const Element = as || 'div';
    const classNames = [ styles.grid ];
    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Grid;
