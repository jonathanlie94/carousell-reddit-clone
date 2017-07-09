import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
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

  it('should render a div', () => {
    const header = shallow(<Header />).dive();
    expect(header.type()).toEqual('div');
  });

  it('should match previous snapshot', () => {
    const header = shallow(<Header />).dive();
    const tree = toJSON(header);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
