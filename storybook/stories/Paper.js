import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Paper } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Components|Paper', module)
  .add('Elevation', () => (
    <Container>
      <Header title={'Paper'} />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={2}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={4}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={8}
      />
    </Container>
  ))
  .add('Roundness', () => (
    <Container>
      <Header title={'Roudness'} />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          alignItems: 'center',
        }}
        elevation={4}
        radius={2}
      />
      <Paper
        style={{
          padding: 8,
          height: 100,
          width: 100,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        elevation={4}
        radius={8}
      />
    </Container>
  ));