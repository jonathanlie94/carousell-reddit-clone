import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import SideContainer from '../';

describe('<SideContainer />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <SideContainer>
        <div className="unique-class-name" />
      </SideContainer>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });

  it('should match previous snapshot', () => {
    const renderedComponent = shallow(<SideContainer />);
    const tree = toJSON(renderedComponent);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
