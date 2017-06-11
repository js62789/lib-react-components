import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Grid, Text } from '../src';

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
  ))
  .add('with text', () => (
    <Container>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </Container>
  ))
  .add('fluid', () => (
    <Container fluid>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </Container>
  ));
