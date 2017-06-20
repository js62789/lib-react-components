import React from 'react';
import styles from './styles.css';
import Loader from '../Loader';

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
    const classNames = [ styles.listGroupItem ];

    if (active) {
      classNames.push(styles.active);
    }

    if (disabled) {
      classNames.push(styles.disabled);
    }

    if (action) {
      classNames.push(styles.listGroupItemAction);
    }

    switch (color) {
      case 'primary':
        classNames.push(styles.listGroupItemPrimary);
        break;
      case 'info':
        classNames.push(styles.listGroupItemInfo);
        break;
      case 'success':
        classNames.push(styles.listGroupItemSuccess);
        break;
      case 'warning':
        classNames.push(styles.listGroupItemWarning);
        break;
      case 'danger':
        classNames.push(styles.listGroupItemDanger);
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
      <Element className={styles.listGroup} {...other}>
        { loading ? <Loader /> : children }
      </Element>
    );
  }
}

export default ListGroup;
