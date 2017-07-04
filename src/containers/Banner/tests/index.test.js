import React from 'react';
import { mount } from 'enzyme';
import Banner from '../';

const renderComponent = (props = {}) => mount(<Banner {...props} />);

describe('<Banner />', () => {
  it('should render an img', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img').length).toEqual(1);
  });
});
