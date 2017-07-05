import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from '../';

describe('<MainContainer />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <MainContainer>
        <div className="unique-class-name"></div>
      </MainContainer>
    );
    expect(renderedComponent.contains(<div className="unique-class-name"></div>)).toEqual(true);
  });
});
