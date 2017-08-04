import React from 'react';
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
      classNames.push(`col${xsmall === true ? '' : `-${xsmall}`}`);
    }

    if (small) {
      classNames.push(`col-sm${small === true ? '' : `-${small}`}`);
    }

    if (medium) {
      classNames.push(`col-md${medium === true ? '' : `-${medium}`}`);
    }

    if (large) {
      classNames.push(`col-lg${large === true ? '' : `-${large}`}`);
    }

    if (offset) {
      classNames.push(`offset-${offset}`);
    }

    if (smallOffset) {
      classNames.push(`offset-sm-${smallOffset}`);
    }

    if (mediumOffset) {
      classNames.push(`offset-md-${mediumOffset}`);
    }

    if (largeOffset) {
      classNames.push(`offset-lg-${largeOffset}`);
    }

    if (push) {
      classNames.push(`push-${push}`);
    }

    if (smallPush) {
      classNames.push(`push-sm-${smallPush}`);
    }

    if (mediumPush) {
      classNames.push(`push-md-${mediumPush}`);
    }

    if (largePush) {
      classNames.push(`push-lg-${largePush}`);
    }

    if (pull) {
      classNames.push(`pull-${pull}`);
    }

    if (smallPull) {
      classNames.push(`pull-sm-${smallPull}`);
    }

    if (mediumPull) {
      classNames.push(`pull-md-${mediumPull}`);
    }

    if (largePull) {
      classNames.push(`pull-lg-${largePull}`);
    }

    if (!xsmall && !small && !medium && !large) {
      classNames.push('col');
    }

    if (className) {
      classNames.push(className);
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
    const classNames = [ 'row' ];
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
    const classNames = [ 'grid' ];
    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Grid;
