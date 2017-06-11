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
  Navbar
} from '../src';

storiesOf('Layouts', module)
  .add('home page', () => (
    <div>
      <Navbar toggleable="medium" inverted>
        <Navbar.Toggle right />
        <Navbar.Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Nav>
              <Navbar.NavItem href="#" active>Home</Navbar.NavItem>
              <Navbar.NavItem href="#">Link</Navbar.NavItem>
              <Navbar.NavItem href="#" disabled>Disabled</Navbar.NavItem>
            </Navbar.Nav>
          </Navbar.Menu>
        </Navbar.Container>
      </Navbar>
      <Jumbotron backgroundImage="https://i.redd.it/fwnspszr9w2z.jpg" inverted>
        <Container>
          <Header as="h1">Welcome</Header>
          <Text>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</Text>
          <Button color="primary" size="large">Learn More »</Button>
        </Container>
      </Jumbotron>
      <Grid as={Container}>
        <Grid.Row>
          <Grid.Column medium="4">
            <Card>
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Body>
            </Card>
          </Grid.Column>
          <Grid.Column medium="4">
            <Card>
              <Card.Body>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Body>
            </Card>
          </Grid.Column>
          <Grid.Column medium="4">
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
