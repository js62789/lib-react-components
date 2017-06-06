import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Input, InputGroup, Select } from '../src';

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

storiesOf('Input', module)
  .add('with text', () => (
    <Input value="text" />
  ));

storiesOf('InputGroup', module)
  .add('with text and a dropdown', () => (
    <InputGroup>
      <Input value="text" />
      <Select options={[{key: 1, value: 'dropdown'}]} />
    </InputGroup>
  ))
  .add('with text and a button', () => (
    <InputGroup>
      <Input value="text" />
      <Button color="primary">button</Button>
    </InputGroup>
  ))
  .add('with text, a dropdown, and a button', () => (
    <InputGroup>
      <Input value="text" />
      <Select options={[{key: 1, value: 'dropdown'}]} />
      <Button color="primary">button</Button>
    </InputGroup>
  ));
