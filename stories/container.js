import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid } from '../src';

storiesOf('Container', module)
  .add('with a grid', () => (
    <Grid as={Container}>
      <Grid.Row>
        <Grid.Column style={{ border: '1px solid #ddd' }}>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }}>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }}>
          <p>Text</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ));
