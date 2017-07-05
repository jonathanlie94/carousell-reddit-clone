import React from 'react';
import { shallow } from 'enzyme';
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
});
