import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import 'jest-styled-components';
import VoteWidget from '../';

describe('<VoteWidget />', () => {
  it('should handle upvote correctly', () => {
    let count = 2;
    const onUpvote = v => {
      count++;
    };
    const renderedComponent = mount(
      <VoteWidget onUpvote={onUpvote} count={count} />
    );
    renderedComponent.ref('upvote').simulate('click');

    expect(count).toEqual(3);
  });

  it('should handle downvote correctly', () => {
    let count = 2;
    const onDownvote = v => {
      count--;
    };
    const renderedComponent = mount(
      <VoteWidget onDownvote={onDownvote} count={count} />
    );
    renderedComponent.ref('downvote').simulate('click');

    expect(count).toEqual(1);
  });

  it('should match previous snapshot', () => {
    const zeroComponent = mount(<VoteWidget count={0} />);
    const zero = toJSON(zeroComponent);
    expect(zero).toMatchStyledComponentsSnapshot();

    const positiveComponent = mount(<VoteWidget count={1} />);
    const positive = toJSON(positiveComponent);
    expect(positive).toMatchStyledComponentsSnapshot();

    const negativeComponent = mount(<VoteWidget count={-1} />);
    const negative = toJSON(negativeComponent);
    expect(negative).toMatchStyledComponentsSnapshot();
  });
});
