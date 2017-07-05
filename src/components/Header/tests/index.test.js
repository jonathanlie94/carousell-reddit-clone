import React from 'react';
import { shallow } from 'enzyme';
import Header from '../';

describe('<Header />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <Header>
        <div className="unique-class-name" />
      </Header>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });
});
