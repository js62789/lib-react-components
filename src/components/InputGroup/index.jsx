import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';

/**
 * <InputGroup>
 *   <Input />
 *   <Select />
 *   <Button />
 * </InputGroup>
 */
export class InputGroup extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.instanceOf(Input),
      PropTypes.instanceOf(Button),
      PropTypes.instanceOf(Dropdown)
    ]))
  }
  render() {
    return (
      <div className="input-group">
        {this.props.children}
      </div>
    );
  }
}

export default InputGroup;
