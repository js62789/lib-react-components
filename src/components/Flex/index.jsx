import React from 'react';
import styles from './styles.css';

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
    const classNames = [ styles.dFlex, styles.w100 ];

    switch (justifyContent) {
      case 'start':
        classNames.push(styles.justifyContentStart);
        break;
      case 'end':
        classNames.push(styles.justifyContentEnd);
        break;
      case 'center':
        classNames.push(styles.justifyContentCenter);
        break;
      case 'between':
        classNames.push(styles.justifyContentBetween);
        break;
      case 'around':
        classNames.push(styles.justifyContentAround);
        break;
    }

    switch (alignItems) {
      case 'start':
        classNames.push(styles.alignItemsStart);
        break;
      case 'end':
        classNames.push(styles.alignItemsEnd);
        break;
      case 'center':
        classNames.push(styles.alignItemsCenter);
        break;
      case 'baseline':
        classNames.push(styles.alignItemsBaseline);
        break;
      case 'stretch':
        classNames.push(styles.alignItemsStretch);
        break;
    }

    switch (alignContent) {
      case 'start':
        classNames.push(styles.alignContentStart);
        break;
      case 'end':
        classNames.push(styles.alignContentEnd);
        break;
      case 'center':
        classNames.push(styles.alignContentCenter);
        break;
      case 'between':
        classNames.push(styles.alignContentBetween);
        break;
      case 'around':
        classNames.push(styles.alignContentAround);
        break;
      case 'stretch':
        classNames.push(styles.alignContentAround);
        break;
    }

    if (direction === 'column') {
      classNames.push(styles.flexColumn);
    }

    return (
      <div className={classNames.join(' ')} {...other} />
    );
  }
}

export default Flex;
