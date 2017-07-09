import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import InputTextarea from '../';

describe('<InputTextarea />', () => {
  it('should handle keydown correctly', () => {
    let val = 'B';
    const onChange = v => {
      val = v;
    };
    const renderedComponent = mount(
      <InputTextarea onChange={onChange} value={val} />
    );
    renderedComponent
      .ref('input')
      .simulate('change', { target: { value: 'BA' } });

    expect(val).toEqual('BA');
  });

  it('should match previous snapshot', () => {
    const renderedComponent = mount(<InputTextarea />);
    const tree = toJSON(renderedComponent);
    expect(tree).toMatchStyledComponentsSnapshot();
  });
});
