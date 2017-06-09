import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '../src';

storiesOf('Grid', module)
  .add('with equal columns', () => (
    <Grid>
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
  ))
  .add('with different columns', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column columns={['XLarge8', 'Large2', 'Medium6', 'Small3']} style={{ border: '1px solid #ddd' }}>
          <p>Small 3 Columns</p>
          <p>Medium 6 Columns</p>
          <p>Large 2 Columns</p>
          <p>XLarge 8 Columns</p>
        </Grid.Column>
        <Grid.Column columns={['XLarge2', 'Large4', 'Medium4', 'Small6']} style={{ border: '1px solid #ddd' }}>
          <p>Small 6 Columns</p>
          <p>Medium 4 Columns</p>
          <p>Large 4 Columns</p>
          <p>XLarge 2 Columns</p>
        </Grid.Column>
        <Grid.Column columns={['XLarge2', 'Large6', 'Medium2', 'Small3']} style={{ border: '1px solid #ddd' }}>
          <p>Small 3 Columns</p>
          <p>Medium 2 Columns</p>
          <p>Large 6 Columns</p>
          <p>XLarge 2 Columns</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ));
