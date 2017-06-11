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
  .add('that stacks on a small screen', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column style={{ border: '1px solid #ddd' }} small>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }} small>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }} small>
          <p>Text</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('that stacks on a medium screen', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column style={{ border: '1px solid #ddd' }} medium>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }} medium>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }} medium>
          <p>Text</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('that stacks on a large screen', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column style={{ border: '1px solid #ddd' }} large>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }} large>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }} large>
          <p>Text</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('with variable columns', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column style={{ border: '1px solid #ddd' }}>
          <p>Text</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }} xsmall="12" medium="auto">
          <p>Variable Width</p>
        </Grid.Column>
        <Grid.Column style={{ border: '1px solid #ddd' }}>
          <p>Text</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('with dynamic screen-driven sizes', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column small="3" medium="6" large="2" style={{ border: '1px solid #ddd' }}>
          <p>Small 3 Columns</p>
          <p>Medium 6 Columns</p>
          <p>Large 2 Columns</p>
        </Grid.Column>
        <Grid.Column small="6" medium="4" large="4" style={{ border: '1px solid #ddd' }}>
          <p>Small 6 Columns</p>
          <p>Medium 4 Columns</p>
          <p>Large 4 Columns</p>
        </Grid.Column>
        <Grid.Column small="3" medium="2" large="6" style={{ border: '1px solid #ddd' }}>
          <p>Small 3 Columns</p>
          <p>Medium 2 Columns</p>
          <p>Large 6 Columns</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('with offset', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column xsmall="6" offset="3" style={{ border: '1px solid #ddd' }}>
          <p>6 columns with a 3 column offset</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('with offset on small screens', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column small="6" smallOffset="3" style={{ border: '1px solid #ddd' }}>
          <p>6 columns with a 3 column offset on small screen</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('with offset on medium screens', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column medium="6" mediumOffset="3" style={{ border: '1px solid #ddd' }}>
          <p>6 columns with a 3 column offset on medium screen</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('with offset on large screens', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column large="6" largeOffset="3" style={{ border: '1px solid #ddd' }}>
          <p>6 columns with a 3 column offset on large screen</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('reorders on small screens', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column xsmall="6" smallPush="6" style={{ border: '1px solid #ddd' }}>
          <p>First column</p>
        </Grid.Column>
        <Grid.Column xsmall="6" smallPull="6" style={{ border: '1px solid #ddd' }}>
          <p>Second column</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('reorders on medium screens', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column xsmall="6" mediumPush="6" style={{ border: '1px solid #ddd' }}>
          <p>First column</p>
        </Grid.Column>
        <Grid.Column xsmall="6" mediumPull="6" style={{ border: '1px solid #ddd' }}>
          <p>Second column</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('reorders on large screens', () => (
    <Grid>
      <Grid.Row>
        <Grid.Column xsmall="6" largePush="6" style={{ border: '1px solid #ddd' }}>
          <p>First column</p>
        </Grid.Column>
        <Grid.Column xsmall="6" largePull="6" style={{ border: '1px solid #ddd' }}>
          <p>Second column</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ));
