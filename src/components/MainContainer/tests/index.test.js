import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import MainContainer from '../';

describe('<MainContainer />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <MainContainer>
        <div className="unique-class-name" />
      </MainContainer>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });

  it('should match previous snapshot', () => {
    const renderedComponent = shallow(<MainContainer  />);
    const tree = toJSON(renderedComponent);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
