import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '../src';

storiesOf('Image', module)
  .add('with 100x200 placeholder', () => (
    <Image width="100" height="200" />
  ))
  .add('with 200x100 placeholder', () => (
    <Image width="200" height="100" />
  ))
  .add('rounded', () => (
    <Image width="100" height="100" rounded />
  ))
  .add('bordered', () => (
    <Image width="100" height="100" bordered />
  ));
