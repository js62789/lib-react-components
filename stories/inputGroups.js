import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputGroup, Input, Dropdown, Button } from '../src';

storiesOf('InputGroup', module)
  .add('with text and a dropdown', () => (
    <InputGroup>
      <Input value="text" />
      <Dropdown options={[{key: 1, value: 'dropdown'}]} grouped right />
    </InputGroup>
  ))
  .add('with text and a button', () => (
    <InputGroup>
      <Input value="text" />
      <Button color="primary" grouped>button</Button>
    </InputGroup>
  ))
  .add('with text, a dropdown, and a button', () => (
    <InputGroup>
      <Input value="text" />
      <Dropdown options={[{key: 1, value: 'dropdown'}]} grouped />
      <Button color="primary" grouped>button</Button>
    </InputGroup>
  ))
  .add('with buttons', () => (
    <InputGroup>
      <Button grouped>button</Button>
      <Button grouped>button</Button>
      <Button grouped>button</Button>
    </InputGroup>
  ));
