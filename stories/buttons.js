import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';

storiesOf('Button', module)
  .add('default', () => (
    <Button>Hello Button</Button>
  ))
  .add('small', () => (
    <Button size="small">Small Button</Button>
  ))
  .add('large', () => (
    <Button size="large">Large Button</Button>
  ))
  .add('primary', () => (
    <Button color="primary">Hello Button</Button>
  ))
  .add('info', () => (
    <Button color="info">Hello Button</Button>
  ))
  .add('success', () => (
    <Button color="success">Hello Button</Button>
  ))
  .add('warning', () => (
    <Button color="warning">Hello Button</Button>
  ))
  .add('danger', () => (
    <Button color="danger">Hello Button</Button>
  ));
