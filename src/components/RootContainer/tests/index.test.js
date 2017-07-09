import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import RootContainer from '../';

describe('<RootContainer />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <RootContainer>
        <div className="unique-class-name" />
      </RootContainer>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });

  it('should match previous snapshot', () => {
    const renderedComponent = shallow(<RootContainer />);
    const tree = toJSON(renderedComponent);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
