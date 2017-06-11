import React from 'react';
import { storiesOf } from '@storybook/react';
import { Nav } from '../src';

storiesOf('Nav', module)
  .add('basic', () => (
    <Nav>
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  ))
  .add('as nav', () => (
    <Nav as="nav">
      <Nav.Link href="#" active>Active</Nav.Link>
      <Nav.Link href="#">Link</Nav.Link>
      <Nav.Link href="#">Link</Nav.Link>
      <Nav.Link href="#" disabled>Disabled</Nav.Link>
    </Nav>
  ))
  .add('as tabs', () => (
    <Nav type="tabs">
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  ))
  .add('as pills', () => (
    <Nav type="pills">
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  ))
  .add('vertical', () => (
    <Nav vertical>
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  ))
  .add('justified', () => (
    <Nav type="pills" justified>
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  ))
  .add('centered', () => (
    <Nav align="center">
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  ))
  .add('right', () => (
    <Nav align="right">
      <Nav.Item>
        <Nav.Link active>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>Disabled</Nav.Link>
      </Nav.Item>
    </Nav>
  ));
