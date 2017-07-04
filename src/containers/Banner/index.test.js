import React from 'react';
import { shallow } from 'enzyme';
import Banner from './';

it('renders div at its root', () => {
  expect(shallow(<Banner />).contains(<div>Banner</div>)).toBe(true);
});
