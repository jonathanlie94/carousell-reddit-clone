import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import { theme } from 'ui';
import Banner from '../';

describe('<Banner />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <Banner>
        <div className="unique-class-name" />
      </Banner>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });

  it('should match previous snapshot', () => {
    const wrapper = mount(<Banner />).find('div');
    const tree = toJSON(wrapper);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
