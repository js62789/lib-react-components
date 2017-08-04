import React from 'react';

export class Container extends React.Component {
  render() {
    const Element = this.props.as || 'div';
    const { className, fluid, ...other } = this.props;
    const classNames = [];

    if (className) {
      classNames.push(className);
    }

    if (fluid) {
      classNames.push('container-fluid');
    } else {
      classNames.push('container');
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Container;
