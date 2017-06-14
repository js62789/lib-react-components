import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex, Text } from '../src';

storiesOf('Flex', module)
  .add('justify between', () => (
    <Flex justifyContent="between">
      <Text>The Left Text</Text>
      <Text>The Right Text</Text>
    </Flex>
  ))
  .add('justify around', () => (
    <Flex justifyContent="around">
      <Text>The Left Text</Text>
      <Text>The Right Text</Text>
    </Flex>
  ))
  .add('justify center', () => (
    <Flex justifyContent="center">
      <Text>The Left Text</Text>
      <Text>The Right Text</Text>
    </Flex>
  ))
  .add('justify start', () => (
    <Flex justifyContent="start">
      <Text>The Left Text</Text>
      <Text>The Right Text</Text>
    </Flex>
  ))
  .add('justify end', () => (
    <Flex justifyContent="end">
      <Text>The Left Text</Text>
      <Text>The Right Text</Text>
    </Flex>
  ))
