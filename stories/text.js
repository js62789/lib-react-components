import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../src';

storiesOf('Text', module)
  .add('default', () => (
    <Text>Something something blah blah blah</Text>
  ))
  .add('with colors', () => (
    <div>
      <Text color="primary">Something something blah blah blah</Text>
      <Text color="info">Something something blah blah blah</Text>
      <Text color="success">Something something blah blah blah</Text>
      <Text color="warning">Something something blah blah blah</Text>
      <Text color="danger">Something something blah blah blah</Text>
    </div>
  ))
  .add('muted', () => (
    <Text muted>Something something blah blah blah</Text>
  ))
  .add('small', () => (
    <Text small>Something something blah blah blah</Text>
  ));
