import React from 'react';
import styles from './styles.css';
import { capitalize } from '../../utils';

export class Column  extends React.Component {
  render() {
    const Element = this.props.as || 'div';
    const {
      xsmall,
      small,
      medium,
      large,
      className,
      offset,
      smallOffset,
      mediumOffset,
      largeOffset,
      push,
      smallPush,
      mediumPush,
      largePush,
      pull,
      smallPull,
      mediumPull,
      largePull,
      ...other
    } = this.props;
    const classNames = [];

    if (xsmall) {
      classNames.push(styles[`column${xsmall === true ? '' : capitalize(xsmall)}`]);
    }

    if (small) {
      classNames.push(styles[`columnSmall${small === true ? '' : capitalize(small)}`]);
    }

    if (medium) {
      classNames.push(styles[`columnMedium${medium === true ? '' : capitalize(medium)}`]);
    }

    if (large) {
      classNames.push(styles[`columnLarge${large === true ? '' : capitalize(large)}`]);
    }

    if (offset) {
      classNames.push(styles[`offset${offset}`]);
    }

    if (smallOffset) {
      classNames.push(styles[`offsetSmall${smallOffset}`]);
    }

    if (mediumOffset) {
      classNames.push(styles[`offsetMedium${mediumOffset}`]);
    }

    if (largeOffset) {
      classNames.push(styles[`offsetLarge${largeOffset}`]);
    }

    if (push) {
      classNames.push(styles[`push${push}`]);
    }

    if (smallPush) {
      classNames.push(styles[`pushSmall${smallPush}`]);
    }

    if (mediumPush) {
      classNames.push(styles[`pushMedium${mediumPush}`]);
    }

    if (largePush) {
      classNames.push(styles[`pushLarge${largePush}`]);
    }

    if (pull) {
      classNames.push(styles[`pull${pull}`]);
    }

    if (smallPull) {
      classNames.push(styles[`pullSmall${smallPull}`]);
    }

    if (mediumPull) {
      classNames.push(styles[`pullMedium${mediumPull}`]);
    }

    if (largePull) {
      classNames.push(styles[`pullLarge${largePull}`]);
    }

    if (!xsmall && !small && !medium && !large) {
      classNames.push(styles.column);
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
