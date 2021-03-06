import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../src';

storiesOf('Card', module)
  .add('with no width constraints', () => (
    <Card>
      <Card.Block>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Block>
    </Card>
  ))
  .add('with an image overlay', () => (
    <Card width={300}>
      <Card.Image width={300} height={200} position="top" />
      <Card.ImageOverlay>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.ImageOverlay>
    </Card>
  ))
  .add('with image, title, text, and button', () => (
    <Card width="300">
      <Card.Image width={300} height={100} position="top" />
      <Card.Block>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Button color="primary">Go somewhere</Card.Button>
      </Card.Block>
    </Card>
  ))
  .add('with image and text', () => (
    <Card width="600">
      <Card.Image width="600" height="100" position="top" />
      <Card.Block>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Block>
    </Card>
  ))
  .add('with image on the bottom', () => (
    <Card width="600">
      <Card.Block>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Block>
      <Card.Image width="600" height="100" position="bottom" />
    </Card>
  ))
  .add('with just an image', () => (
    <Card width="600">
      <Card.Image width="600" height="100" />
    </Card>
  ))
  .add('with text', () => (
    <Card width="600">
      <Card.Block>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Block>
    </Card>
  ))
  .add('with header and text', () => (
    <Card width="600">
      <Card.Header>Featured</Card.Header>
      <Card.Block>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Text small muted>Last updated 3 mins ago</Card.Text>
      </Card.Block>
    </Card>
  ))
  .add('with header, text, and footer', () => (
    <Card width="600">
      <Card.Header>Featured</Card.Header>
      <Card.Block>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Block>
      <Card.Footer small muted>2 days ago</Card.Footer>
    </Card>
  ))
  .add('with centered alignment', () => (
    <Card textAlign="center">
      <Card.Block>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Button color="primary">Go somewhere</Card.Button>
      </Card.Block>
    </Card>
  ))
  .add('with right alignment', () => (
    <Card textAlign="right">
      <Card.Block>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Button color="primary">Go somewhere</Card.Button>
      </Card.Block>
    </Card>
  ))
  .add('with colors', () => (
    <div>
      <Card color="primary">
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="info">
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="success">
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="warning">
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="danger">
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
    </div>
  ))
  .add('inverted', () => (
    <div>
      <Card style={{ backgroundColor: '#333', borderColor: '#333' }} inverted>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="primary" inverted>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="info" inverted>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="success" inverted>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="warning" inverted>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card color="danger" inverted>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
    </div>
  ))
  .add('in a deck', () => (
    <Card.Deck>
      <Card>
        <Card.Block>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card>
        <Card.Block>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card>
        <Card.Block>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
    </Card.Deck>
  ))
  .add('in columns', () => (
    <Card.Columns>
      <Card>
        <Card.Block>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card>
        <Card.Block>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card>
        <Card.Block>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card>
        <Card.Block>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
      <Card>
        <Card.Block>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Block>
      </Card>
    </Card.Columns>
  ));
