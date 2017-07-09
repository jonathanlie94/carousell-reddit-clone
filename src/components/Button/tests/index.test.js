import React from 'react';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import Button from '../';

describe('<Button />', () => {
  it('should render children when passed in', () => {
    const renderedComponent = shallow(
      <Button>
        <div className="unique-class-name" />
      </Button>
    );
    expect(
      renderedComponent.contains(<div className="unique-class-name" />)
    ).toEqual(true);
  });

  it('should render a button', () => {
    const button = shallow(<Button />).dive();
    expect(button.type()).toEqual('button');
  });

  it('should match previous snapshot', () => {
    const button = shallow(<Button />).dive();
    const tree = toJSON(button);
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  it('calls onClick props when clicked', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = mount(<Button onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
