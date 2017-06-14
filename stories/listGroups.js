import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListGroup, Header, Text, Flex } from '../src';

storiesOf('ListGroup', module)
  .add('basic list', () => (
    <ListGroup>
      <ListGroup.Item>List Item</ListGroup.Item>
      <ListGroup.Item>List Item</ListGroup.Item>
      <ListGroup.Item>List Item</ListGroup.Item>
    </ListGroup>
  ))
  .add('with actions', () => (
    <ListGroup as="div">
      <ListGroup.Item as="a" href="#" action>List Item</ListGroup.Item>
      <ListGroup.Item as="a" href="#" action>List Item</ListGroup.Item>
      <ListGroup.Item as="a" href="#" action>List Item</ListGroup.Item>
    </ListGroup>
  ))
  .add('with colors', () => (
    <ListGroup color="primary">
      <ListGroup.Item color="primary">List Item</ListGroup.Item>
      <ListGroup.Item color="info"> color="primary"List Item</ListGroup.Item>
      <ListGroup.Item color="success">List Item</ListGroup.Item>
      <ListGroup.Item color="warning">List Item</ListGroup.Item>
      <ListGroup.Item color="danger"> color="primary"List Item</ListGroup.Item>
    </ListGroup>
  ))
  .add('with various content', () => (
    <ListGroup as="div">
      <ListGroup.Item as="a" href="#" action>
        <Flex alignItems="start" direction="column">
          <Flex justifyContent="between">
            <Header as="h5">List group item heading</Header>
            <Text small>3 days ago</Text>
          </Flex>
          <Text>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</Text>
          <Text small muted>Donec id elit non mi porta.</Text>
        </Flex>
      </ListGroup.Item>
      <ListGroup.Item as="a" href="#" action>
        <Flex alignItems="start" direction="column">
          <Flex justifyContent="between">
            <Header as="h5">List group item heading</Header>
            <Text small>3 days ago</Text>
          </Flex>
          <Text>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</Text>
          <Text small muted>Donec id elit non mi porta.</Text>
        </Flex>
      </ListGroup.Item>
      <ListGroup.Item as="a" href="#" action>
        <Flex alignItems="start" direction="column">
          <Flex justifyContent="between">
            <Header as="h5">List group item heading</Header>
            <Text small>3 days ago</Text>
          </Flex>
          <Text>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</Text>
          <Text small muted>Donec id elit non mi porta.</Text>
        </Flex>
      </ListGroup.Item>
    </ListGroup>
  ));
