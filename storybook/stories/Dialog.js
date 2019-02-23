import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import {
  BreadProvider,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Button,
} from '../../src/index';
import { State, Store } from '@sambego/storybook-state';
import Header from '../components/Header';

const store = new Store({
  visibleOne: false,
  visibleTwo: false,
  visibleThree: false,
});

storiesOf('Dialog', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Simple', () => (
    <BreadProvider value={{}}>
      <Header>Dialog</Header>
      <State store={store} style={{ flex: 1 }}>
        {state => (
          <View>
            <Button
              onPress={() => store.set({ visibleOne: !state.visibleOne })}>
              Open
            </Button>
            <Dialog
              visible={state.visibleOne}
              onTouchOutside={() => store.set({ visibleOne: false })}>
              <DialogTitle>Use Googles location service?</DialogTitle>
              <DialogContentText>
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
              <DialogActions>
                <Button onPress={() => store.set({ visibleOne: false })}>
                  {'Cancel'}
                </Button>
                <Button onPress={() => store.set({ visibleOne: false })}>
                  {'OK'}
                </Button>
              </DialogActions>
            </Dialog>
          </View>
        )}
      </State>
    </BreadProvider>
  ));
