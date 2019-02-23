import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, Icon, Badge } from '../../src/index';
import Header from '../components/Header';

storiesOf('Icons', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Installing', () => (
    <BreadProvider value={{}}>
      <Header>Installing</Header>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>
        Icons are provided by react-native-vector-icons, this package is
        required for many components.
      </Text>
      <Text style={{ fontSize: 14, textAlign: 'left' }}>
        Icons can be added by using the name prop that matches the material icon
        name from here https://material.io/tools/icons/?style=baseline. For
        example, arrow-back
      </Text>
    </BreadProvider>
  ))
  .add('Component', () => (
    <BreadProvider value={{}}>
      <Header>Icon Component</Header>
      <Icon name="alarm" size={32} />
      <Icon name="face" size={32} />
      <Icon name="arrow-back" size={32} />
      <Badge
        style={{ position: 'absolute', top: 0, right: 0 }}
        size={14}
        badgeContent={4}>
        <Icon name="favorite" size={32} />
      </Badge>
    </BreadProvider>
  ));
