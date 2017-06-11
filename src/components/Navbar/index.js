import React from 'react';
import {
  Input,
  Button,
  Container,
} from '../';
import styles from './styles.css';

export const NavbarBrand = ({ children, href }) => (
  <a className={styles.navbarBrand} href={href | '#'}>{children}</a>
)

export const NavbarNavItem = ({ active, href, disabled, content, children }) => (
  <li className={`${styles.navItem} ${active ? styles.active : ''}`}>
    <a
      className={`${styles.navLink} ${disabled ? styles.disabled : ''}`}
      href={href || '#'}
    >
      {active ? <span className={styles.screenReader}>(current)</span> : null}{content || children}
    </a>
  </li>
)

export const NavbarNav = ({ children }) => (
  <ul className={styles.navbarNav}>
    {children}
  </ul>
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

    switch (this.props.mobile) {
      case 'small':
        classNames.push(styles.navbarToggleableSmall);
        break;
      case 'medium':
        classNames.push(styles.navbarToggleableMedium);
        break;
      case 'large':
        classNames.push(styles.navbarToggleableLarge);
        break;
      default:
        classNames.push(styles.navbarToggleable);
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
        <NavbarToggle onClick={this.toggleMenuVisibility} open={mobileMenuOpen} right />
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
