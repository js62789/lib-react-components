import React from 'react';
import {
  Input,
  Button,
  Container,
  Nav,
} from '../';
import styles from './styles.css';

export const NavbarBrand = ({ children, href }) => (
  <a className={styles.navbarBrand} href={href | '#'}>{children}</a>
)

export const NavbarNavLink = ({ active, ...other }) => (
  <Nav.Link className={`${styles.navLink} ${active ? styles.active : ''}`} {...other} />
)

export const NavbarNavItem = (args) => (
  <Nav.Item>
    <NavbarNavLink {...args} />
  </Nav.Item>
)

export const NavbarNav = ({ children }) => (
  <Nav className={styles.navbarNav}>
    {children}
  </Nav>
)

export const NavbarMenu = ({ children, open }) => (
  <div className={`${styles.collapse} ${styles.navbarCollapse} ${open ? styles.show : ''}`} id="navbarSupportedContent">
    {children}
  </div>
)

export const NavbarToggle = ({ onClick, open, right }) => (
  <button
    onClick={onClick}
    className={`${styles.navbarToggler} ${right ? styles.navbarTogglerRight : ''}`}
    type="button"
    aria-controls="navbarSupportedContent"
    aria-expanded={open}
    aria-label="Toggle navigation"
  >
    <span className={styles.navbarTogglerIcon}></span>
  </button>
)

export const NavbarContainer = ({ children }) => (
  <Container className={styles.container}>{children}</Container>
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
    const { mobileMenuOpen } = this.state;
    const classNames = [
      styles.navbar,
    ];

    switch (this.props.toggleable) {
      case 'small':
        classNames.push(styles.navbarToggleableSmall);
        break;
      case 'medium':
        classNames.push(styles.navbarToggleableMedium);
        break;
      case 'large':
        classNames.push(styles.navbarToggleableLarge);
        break;
      case true:
        classNames.push(styles.navbarToggleable);
        break;
    }

    if (this.props.inverted) {
      classNames.push(styles.navbarInverse);
    } else {
      classNames.push(styles.navbarLight);
    }

    return this.props.children ? (
      <nav className={classNames.join(' ')}>
        {this.props.children}
      </nav>
    ) : (
      <nav className={classNames.join(' ')}>
        { this.props.toggleable ? <NavbarToggle onClick={this.toggleMenuVisibility} open={mobileMenuOpen} right /> : null }
        { this.props.brand ? <NavbarBrand>{this.props.brand}</NavbarBrand> : null }
        <NavbarMenu open={mobileMenuOpen}>
          <NavbarNav>
            {this.props.navItems.map(item => <NavbarNavItem {...item} active={item.key === this.props.active} />)}
          </NavbarNav>
        </NavbarMenu>
      </nav>
    );
  }
}

export default Navbar;
