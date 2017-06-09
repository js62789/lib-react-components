import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../src';

storiesOf('Card', module)
  .add('with image, title, text, and button', () => (
    <Card width="300">
      <Card.Image/>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Button color="primary">Go somewhere</Card.Button>
      </Card.Body>
    </Card>
  ))
  .add('with image and text', () => (
    <Card width="600">
      <Card.Image width="600" height="100" />
      <Card.Body>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Body>
    </Card>
  ))
  .add('with text', () => (
    <Card width="600">
      <Card.Body>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Body>
    </Card>
  ))
  .add('with header and text', () => (
    <Card width="600">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Text small muted>Last updated 3 mins ago</Card.Text>
      </Card.Body>
    </Card>
  ))
  .add('with header, text, and footer', () => (
    <Card width="600">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Body>
      <Card.Footer small muted>2 days ago</Card.Footer>
    </Card>
  ))
  .add('with centered alignment', () => (
    <Card textAlign="center">
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Button color="primary">Go somewhere</Card.Button>
      </Card.Body>
    </Card>
  ))
  .add('with right alignment', () => (
    <Card textAlign="right">
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Card.Button color="primary">Go somewhere</Card.Button>
      </Card.Body>
    </Card>
  ))
  .add('with colors', () => (
    <div>
      <Card color="primary">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="info">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="success">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="warning">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="danger">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ))
  .add('inverted', () => (
    <div>
      <Card style={{ backgroundColor: '#333', borderColor: '#333' }} inverted>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="primary" inverted>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="info" inverted>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="success" inverted>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="warning" inverted>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
      <Card color="danger" inverted>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));
