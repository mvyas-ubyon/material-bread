import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { Searchbar } from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';
import Container from '../components/Container';

const store = new Store({
  searchOne: '',
});

storiesOf('Searchbar', module).add('Simple', () => (
  <Container>
    <Header>Searchbar</Header>
    <State store={store} style={{ flex: 1 }}>
      {state => (
        <View>
          <Searchbar
            label={'Label'}
            value={state.searchOne}
            onChangeText={value => store.set({ searchOne: value })}
            onCloseIcon={() => store.set({ searchOne: '' })}
          />
        </View>
      )}
    </State>
  </Container>
));
