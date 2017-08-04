import React from 'react';

export class Text extends React.Component {
  render() {
    const classNames = [ 'text' ];
    const {
      className,
      color,
      as,
      small,
      muted,
      justify,
      ...other
    } = this.props;
    const Element = as || (small ? 'small' : 'p');

    if (className) {
      classNames.push(className);
    }

    switch (color) {
      case 'primary':
        classNames.push('text-primary');
        break;
      case 'info':
        classNames.push('text-info');
        break;
      case 'success':
        classNames.push('text-success');
        break;
      case 'warning':
        classNames.push('text-warning');
        break;
      case 'danger':
        classNames.push('text-danger');
        break;
    }

    if (small) {
      classNames.push('text-sm');
    }

    if (muted) {
      classNames.push('text-muted');
    }

    if (justify) {
      classNames.push('d-flex');
      classNames.push('w-100');
      switch (justify) {
        case 'start':
          classNames.push('justify-content-start');
          break;
        case 'end':
          classNames.push('justify-content-end');
          break;
        case 'center':
          classNames.push('justify-content-center');
          break;
        case 'between':
          classNames.push('justify-content-between');
          break;
        case 'around':
          classNames.push('justify-content-around');
          break;
      }
    }

    return (
      <Element className={classNames.join(' ')} {...other} />
    );
  }
}

export default Text;
