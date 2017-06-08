import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../src';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('primary', () => (
    <Button onClick={action('clicked')} color="primary">Hello Button</Button>
  ))
  .add('info', () => (
    <Button onClick={action('clicked')} color="info">Hello Button</Button>
  ))
  .add('success', () => (
    <Button onClick={action('clicked')} color="success">Hello Button</Button>
  ))
  .add('warning', () => (
    <Button onClick={action('clicked')} color="warning">Hello Button</Button>
  ))
  .add('danger', () => (
    <Button onClick={action('clicked')} color="danger">Hello Button</Button>
  ));
