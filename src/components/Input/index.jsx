import React from 'react';

export class Input extends React.Component {
  render() {
    return (
      <input className="form-control" defaultValue={this.props.value} type="text" />
    );
  }
}

export default Input;
