/*
  A widget that displays the upvote button, vote count, and downvote button.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'ui';
import { noselect } from 'ui/helpers';

const Wrapper = styled.div`
  ${noselect()} display: inline-flex;
  flex-direction: column;
  text-align: center;
  min-width: 3.25rem;
`;

const ArrowIcon = styled.i`
  color: ${theme.colors.grey};
  /* We use pixel for the fontSize here so that the size does not change
    with the browser's font size. */
  font-size: 32px !important;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const ZeroCountIcon = styled.i`
  /* Margin to account for font size of normal text */
  font-size: 12px !important;
  margin: 3px 0;
  color: ${theme.colors.grey};
`;

class VoteWidget extends Component {
  render() {
    return (
      <Wrapper>
        <ArrowIcon
          className="material-icons"
          onClick={this.props.onUpvote}
          ref="upvote"
        >
          arrow_drop_up
        </ArrowIcon>
        {this.props.count !== 0
          ? <div>
              {this.props.count}
            </div>
          : <ZeroCountIcon className="material-icons">lens</ZeroCountIcon>}
        <ArrowIcon
          className="material-icons"
          onClick={this.props.onDownvote}
          ref="downvote"
        >
          arrow_drop_down
        </ArrowIcon>
      </Wrapper>
    );
  }
}

VoteWidget.propTypes = {
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
  count: PropTypes.number,
};

export default VoteWidget;
