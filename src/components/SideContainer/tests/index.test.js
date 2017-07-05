import React from 'react';
import { shallow } from 'enzyme';
import SideContainer from '../';

describe('<SideContainer />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <SideContainer>
        <div className="unique-class-name"></div>
      </SideContainer>
    );
    expect(renderedComponent.contains(<div className="unique-class-name"></div>)).toEqual(true);
  });
});
