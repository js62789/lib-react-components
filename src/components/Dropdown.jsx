import React, { Component } from 'react';

export const DropdownItem = ({ key, value }) => (
  <a className="dropdown-item" href="#">{value}</a>
)

export class Dropdown extends Component {

  state = {
    show: false
  }

  toggle = (e) => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { className, options, grouped, right } = this.props;
    const { show } = this.state;
    const classNames = [];
    const menuClassNames = [
      'dropdown-menu'
    ];

    if (className) {
      classNames.push(className);
    }

    if (show) {
      classNames.push('show');
    }

    if (grouped) {
      classNames.push('input-group-btn');
    }

    if (right) {
      menuClassNames.push('dropdown-menu-right');
    }

    return (
      <div className={classNames.join(' ')}>
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={show}
          onClick={this.toggle}
        >Action</button>
        <div className={menuClassNames.join(' ')} type="text">
          {
            options.map(opt => (
              <DropdownItem {...opt} />
            ))
          }
        </div>
      </div>
    );
  }

}

export default Dropdown;
