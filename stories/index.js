import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Input } from '../src';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Input', module)
  .add('with text', () => (
    <Input value="text" />
  ))
  .add('with some emoji', () => (
    <Input value="😀 😎 👍 💯" />
  ));
