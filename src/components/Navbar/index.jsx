import React from 'react';
import {
  Input,
  Button,
  Container,
  Nav,
} from '../';

export const NavbarBrand = ({ children, href }) => (
  <a className="navbar-brand" href={href | '#'}>{children}</a>
)

export const NavbarNavLink = ({ active, ...other }) => (
  <Nav.Link className={`nav-link ${active ? 'active' : ''}`} {...other} />
)

export const NavbarNavItem = (args) => (
  <Nav.Item>
    <NavbarNavLink {...args} />
  </Nav.Item>
)

export const NavbarNav = ({ children }) => (
  <Nav className="navbar-nav">
    {children}
  </Nav>
)

export const NavbarMenu = ({ children, open }) => (
  <div className={`${'collapse'} ${'navbar-collapse'} ${open ? 'show' : ''}`} id="navbarSupportedContent">
    {children}
  </div>
)

export const NavbarToggle = ({ onClick, open, right }) => (
  <button
    onClick={onClick}
    className={`${'navbar-toggler'} ${right ? 'navbar-toggler-right' : ''}`}
    type="button"
    aria-controls="navbarSupportedContent"
    aria-expanded={open}
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
)

export const NavbarContainer = ({ children }) => (
  <Container className="container">{children}</Container>
)

export class Navbar extends React.Component {
  static Brand = NavbarBrand
  static Menu = NavbarMenu
  static Nav = NavbarNav
  static NavItem = NavbarNavItem
  static NavLink = NavbarNavLink
  static Toggle = NavbarToggle
  static Container = NavbarContainer

  static defaultProps = { navItems: [] }

  state = { mobileMenuOpen: false }

  toggleMenuVisibility = () => this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })

  render() {
    const {
      className,
      toggleable,
      inverted,
      fixed,
      brand,
      navItems,
      active,
      children
    } = this.props;
    const { mobileMenuOpen } = this.state;
    const classNames = [
      'navbar',
    ];

    if (className) {
      classNames.push(className);
    }

    if (fixed) {
      classNames.push('fixed-top');
    }

    switch (toggleable) {
      case 'small':
        classNames.push('navbar-toggleable-sm');
        break;
      case 'medium':
        classNames.push('navbar-toggleable-md');
        break;
      case 'large':
        classNames.push('navbar-toggleable-lg');
        break;
      case true:
        classNames.push('navbar-toggleable');
        break;
    }

    if (inverted) {
      classNames.push('navbar-inverse');
    } else {
      classNames.push('navbar-light');
    }

    return children ? (
      <nav className={classNames.join(' ')}>
        {children}
      </nav>
    ) : (
      <nav className={classNames.join(' ')}>
        { toggleable ? <NavbarToggle onClick={this.toggleMenuVisibility} open={mobileMenuOpen} right /> : null }
        { brand ? <NavbarBrand>{brand}</NavbarBrand> : null }
        <NavbarMenu open={mobileMenuOpen}>
          <NavbarNav>
            {navItems.map(item => <NavbarNavItem {...item} active={item.key === active} />)}
          </NavbarNav>
        </NavbarMenu>
      </nav>
    );
  }
}

export default Navbar;
