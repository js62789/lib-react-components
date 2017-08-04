import React from 'react';

export class ListGroupItem extends React.Component {
  render() {
    const {
      active,
      disabled,
      as,
      action,
      color,
      ...other
    } = this.props;
    const Element = as || 'li';
    const classNames = [ 'list-group-item' ];

    if (active) {
      classNames.push('active');
    }

    if (disabled) {
      classNames.push('disabled');
    }

    if (action) {
      classNames.push('list-group-item-action');
    }

    switch (color) {
      case 'primary':
        classNames.push('list-group-item-primary');
        break;
      case 'info':
        classNames.push('list-group-item-info');
        break;
      case 'success':
        classNames.push('list-group-item-success');
        break;
      case 'warning':
        classNames.push('list-group-item-warning');
        break;
      case 'danger':
        classNames.push('list-group-item-danger');
        break;
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export class ListGroup extends React.Component {
  static Item = ListGroupItem
  render() {
    const { as, loading, children, ...other } = this.props;
    const Element = as || 'ul';

    return (
      <Element className="list-group" {...other}>
        { children }
      </Element>
    );
  }
}

export default ListGroup;
