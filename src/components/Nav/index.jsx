import React from 'react';

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
    const classNames = [ 'nav-link' ];

    if (active) {
      classNames.push('active');
    }

    if (disabled) {
      classNames.push('disabled');
    }

    if (className) {
      classNames.push(className);
    }

    return (
      <Element
        className={classNames.join(' ')}
        href={href || '#'}
        {...other}
      >
        {active ? <span className="sr-only">(current)</span> : null}
        {content || children}
      </Element>
    );
  }
}

export class NavItem extends React.Component {
  render() {
    const { className, ...other } = this.props;
    const classNames = [ 'nav-item' ];

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
    const classNames = [ 'nav' ];
    const Element = as || 'ul';
    const style = {};

    if (type === 'pills') {
      classNames.push('nav-pills');
    } else if (type === 'tabs') {
      classNames.push('nav-tabs');
    }

    if (vertical) {
      classNames.push('flex-column');
    }

    if (justified) {
      classNames.push('nav-justified');
    }

    if (align === 'center') {
      classNames.push('justify-content-center');
    } else if (align === 'right') {
      classNames.push('justify-content-end');
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Nav;
