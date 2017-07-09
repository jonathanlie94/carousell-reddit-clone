import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import ListItem from '../';

describe('<ListItem />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <ListItem>
        <div className="unique-class-name" />
      </ListItem>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });

  it('should match previous snapshot', () => {
    const renderedComponent = mount(<ListItem />);
    const tree = toJSON(renderedComponent);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
