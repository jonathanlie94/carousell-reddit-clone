import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import ListView from '../';

describe('<ListView />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <ListView>
        <div className="unique-class-name" />
      </ListView>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });

  it('should match previous snapshot', () => {
    const renderedComponent = mount(<ListView />);
    const tree = toJSON(renderedComponent);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
