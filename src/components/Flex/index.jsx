import React from 'react';

export class FlexItem extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

export class Flex extends React.Component {
  render() {
    const {
      justifyContent,
      alignItems,
      alignContent,
      direction,
      ...other } = this.props;
    const classNames = [ 'd-flex', 'w-100' ];

    switch (justifyContent) {
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

    switch (alignItems) {
      case 'start':
        classNames.push('align-items-start');
        break;
      case 'end':
        classNames.push('align-items-end');
        break;
      case 'center':
        classNames.push('align-items-center');
        break;
      case 'baseline':
        classNames.push('align-items-baseline');
        break;
      case 'stretch':
        classNames.push('align-items-stretch');
        break;
    }

    switch (alignContent) {
      case 'start':
        classNames.push('align-content-start');
        break;
      case 'end':
        classNames.push('align-content-end');
        break;
      case 'center':
        classNames.push('align-content-center');
        break;
      case 'between':
        classNames.push('align-content-between');
        break;
      case 'around':
        classNames.push('align-content-around');
        break;
      case 'stretch':
        classNames.push('align-content-stretch');
        break;
    }

    if (direction === 'column') {
      classNames.push('flex-column');
    }

    return (
      <div className={classNames.join(' ')} {...other} />
    );
  }
}

export default Flex;
