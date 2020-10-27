import React from 'react';
import { HomePage } from './index';
import { render } from '../../test-utils';

test('renders learn react link', () => {
  const { getByText } = render(<HomePage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
