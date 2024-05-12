/**
 * @format
 */

import 'react-native';
import { it } from '@jest/globals'; // Note: import explicitly to use the types shipped with jest.
import React from 'react';
import renderer from 'react-test-renderer'; // Note: test renderer must be required after react-native.

import App from '../src/App';

it('renders correctly', () => {
  renderer.create(<App />);
});
