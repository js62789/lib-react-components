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
  Nav,
  Navbar,
  ListGroup,
  Flex
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
              <Card.Block>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Block>
            </Card>
          </Grid.Column>
          <Grid.Column medium="4">
            <Card>
              <Card.Block>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Block>
            </Card>
          </Grid.Column>
          <Grid.Column medium="4">
            <Card>
              <Card.Block>
                <Card.Title>Heading</Card.Title>
                <Card.Text>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</Card.Text>
                <Card.Button>View Details »</Card.Button>
              </Card.Block>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  ))
  .add('latest news', () => (
    <Container>
      <Navbar toggleable="medium" inverted>
        <Navbar.Toggle right />
        <Navbar.Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Nav>
              <Navbar.NavItem href="#" active>Home</Navbar.NavItem>
              <Navbar.NavItem href="#">Top Stories</Navbar.NavItem>
            </Navbar.Nav>
          </Navbar.Menu>
        </Navbar.Container>
      </Navbar>
      <Header>Top Stories</Header>
      <ListGroup as="div">
        <ListGroup.Item as="a" href="#" action>
          <Flex justifyContent="between">
            <Header as="h2">News Story Title</Header>
            <Text muted small>3 hours ago</Text>
          </Flex>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </ListGroup.Item>
        <ListGroup.Item as="a" href="#" action>
          <Flex justifyContent="between">
            <Header as="h2">News Story Title</Header>
            <Text muted small>3 hours ago</Text>
          </Flex>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  ))
  .add('dashboard', () => (
    <div>
    <Navbar
      toggleable="medium"
      brand="Navbar"
    />
      <Grid container>
        <Grid.Row>
          <Grid.Column medium="3" style={{ backgroundColor: '#ddd', position: 'fixed', top: 54, bottom: 0, paddingLeft: 0, paddingRight: 0 }}>
            <Nav type="pills" vertical>
              <Nav.Item>
                <Nav.Link style={{ borderRadius: 0 }} active>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ borderRadius: 0 }}>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ borderRadius: 0 }}>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{ borderRadius: 0 }}>Link</Nav.Link>
              </Nav.Item>
            </Nav>
          </Grid.Column>
          <Grid.Column mediumOffset="3">
            Main Content
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  ));
