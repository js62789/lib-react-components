import React from 'react';

export class Button extends React.Component {
  render() {
    const { className, color, size, grouped, ...other } = this.props;
    const classNames = [ 'btn' ];

    if (color) {
      classNames.push(`btn-${color}`);
    }

    switch (size) {
      case 'small':
        classNames.push('btn-sm');
        break;
      case 'large':
        classNames.push('btn-lg');
        break;
    }

    if (className) {
      classNames.push(className);
    }

    const button = (
      <button className={classNames.join(' ')} {...other} />
    );

    if (grouped) {
      return (
        <span className="input-group-btn">
          {button}
        </span>
      )
    }

    return button;
  }
}

export default Button;
