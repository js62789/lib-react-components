import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Navbar,
} from '../src';

const navItems = [{key: 'home', href: '#', content: 'Home'}, {key: 'link', href: '#', content: 'Link'}];

storiesOf('Navbar', module)
  .add('with closed mobile menu', () => (
    <Navbar toggleable="large">
      <Navbar.Toggle />
      <Navbar.Menu>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.NavItem href="#" active>Home</Navbar.NavItem>
          <Navbar.NavItem href="#">Link</Navbar.NavItem>
          <Navbar.NavItem href="#" disabled>Disabled</Navbar.NavItem>
        </Navbar.Nav>
      </Navbar.Menu>
    </Navbar>
  ))
  .add('with open mobile menu', () => (
    <Navbar toggleable="large">
      <Navbar.Toggle open />
      <Navbar.Menu open>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.NavItem href="#" active>Home</Navbar.NavItem>
          <Navbar.NavItem href="#">Link</Navbar.NavItem>
          <Navbar.NavItem href="#" disabled>Disabled</Navbar.NavItem>
        </Navbar.Nav>
      </Navbar.Menu>
    </Navbar>
  ))
  .add('with right aligned toggle button', () => (
    <Navbar toggleable="large">
      <Navbar.Toggle right />
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Nav>
          <Navbar.NavItem href="#" active>Home</Navbar.NavItem>
          <Navbar.NavItem href="#">Link</Navbar.NavItem>
          <Navbar.NavItem href="#" disabled>Disabled</Navbar.NavItem>
        </Navbar.Nav>
      </Navbar.Menu>
    </Navbar>
  ))
  .add('fixed to the top', () => (
    <Navbar
      toggleable="small"
      brand="Navbar"
      navItems={navItems}
      active="home"
      fixed
    />
  ))
  .add('toggle at small', () => (
    <Navbar
      toggleable="small"
      brand="Navbar"
      navItems={navItems}
      active="home"
    />
  ))
  .add('toggle at medium', () => (
    <Navbar
      toggleable="medium"
      brand="Navbar"
      navItems={navItems}
      active="home"
    />
  ))
  .add('toggle at large', () => (
    <Navbar
      toggleable="large"
      brand="Navbar"
      navItems={navItems}
      active="home"
    />
  ))
  .add('inverted', () => (
    <Navbar
      brand="Navbar"
      navItems={navItems}
      active="home"
      inverted
      toggleable
    />
  ));
