import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Container,
  Grid,
  Jumbotron,
  Header,
  Card,
  Text,
  Button,
} from '../src';

storiesOf('Layouts', module)
  .add('home page', () => (
    <div>
      <Jumbotron>
        <Container>
          <Header as="h1">Welcome</Header>
          <Text>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</Text>
          <Button color="primary" size="large">Learn More »</Button>
        </Container>
      </Jumbotron>
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Body>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Body>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Body>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  ));
