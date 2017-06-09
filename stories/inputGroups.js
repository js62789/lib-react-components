import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputGroup, Input, Select, Button } from '../src';

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
  ))
  .add('with buttons', () => (
    <InputGroup>
      <Button>button</Button>
      <Button>button</Button>
      <Button>button</Button>
    </InputGroup>
  ));
