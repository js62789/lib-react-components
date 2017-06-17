import React from 'react';
import styles from './styles.css';

export class NavLink extends React.Component {
  render() {
    const {
      className,
      children,
      content,
      active,
      disabled,
      href,
      as,
      ...other
    } = this.props;
    const Element = as || 'a';
    const classNames = [ styles.navLink ];

    if (active) {
      classNames.push(styles.active);
    }

    if (disabled) {
      classNames.push(styles.disabled);
    }

    if (className) {
      classNames.push(className);
    }

    return (
      <Element
        className={classNames.join(' ')}
        href={href}
      >
        {active ? <span className={styles.screenReader}>(current)</span> : null}
        {content || children}
      </Element>
    );
  }
}

export class NavItem extends React.Component {
  render() {
    const { className, ...other } = this.props;
    const classNames = [ styles.navItem ];

    if (className) {
      classNames.push(className);
    }

    return (
      <li className={classNames.join(' ')} {...other} />
    );
  }
}

export class Nav extends React.Component {
  static Item = NavItem
  static Link = NavLink
  render() {
    const {
      as,
      vertical,
      justified,
      align,
      type,
      ...other
    } = this.props;
    const classNames = [ styles.nav ];
    const Element = as || 'ul';
    const style = {};

    if (type === 'pills') {
      classNames.push(styles.navPills);
    } else if (type === 'tabs') {
      classNames.push(styles.navTabs);
    }

    if (vertical) {
      classNames.push(styles.flexColumn);
    }

    if (justified) {
      classNames.push(styles.navJustified);
    }

    if (align === 'center') {
      classNames.push(styles.justifyContentCenter);
    } else if (align === 'right') {
      classNames.push(styles.justifyContentEnd);
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Nav;
