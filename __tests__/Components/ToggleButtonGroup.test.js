import React from 'react';
import { ToggleButtonGroup } from '../../src';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

test('ToggleButtonGroup Renders', () => {
  const tree = renderer.render(<ToggleButtonGroup />);
  expect(tree).toMatchSnapshot();
});
