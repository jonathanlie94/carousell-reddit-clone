import React from 'react';
import { shallow } from 'enzyme';
import Banner from '../';

describe('<Banner />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <Banner>
        <div className="unique-class-name"></div>
      </Banner>
    );
    expect(renderedComponent.contains(<div className="unique-class-name"></div>)).toEqual(true);
  });
});
