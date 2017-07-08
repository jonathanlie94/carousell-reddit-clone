/*
  Rendered when the route matches nothing in our router.
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'ui';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  font-size: ${theme.fontSizes.largeXX};
  color: ${theme.colors.darkergrey};
`;

class PageNotFound extends Component {
  render() {
    return (
      <Wrapper>
        <FormattedMessage {...messages.text} />
      </Wrapper>
    );
  }
}

export default PageNotFound;
