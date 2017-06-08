import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../src';

storiesOf('Header', module)
  .add('with text', () => (
    <Header>H1 Header</Header>
  ))
  .add('with "as" parameter', () => (
    <div>
      <Header as="h2">H2 Header</Header>
      <Header as="h3">H3 Header</Header>
      <Header as="h4">H4 Header</Header>
      <Header as="h5">H5 Header</Header>
    </div>
  ));
