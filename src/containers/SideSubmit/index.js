import React, { Component } from 'react';
import { ListItem, ListView, Button } from 'components';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { theme } from 'ui';

const StyledListItem = styled(ListItem)`
  text-align: center;
  color: ${theme.colors.blue};
`;

const Title = styled.div`
  font-family: Overwatch;
  font-style: italic;
  color: ${theme.colors.darkergrey};
  font-size: ${theme.fontSizes.large};
`;

const StyledButton = styled(Button)`
  margin-top: ${theme.margins.large};
`;

/**
  A side content Submit ListItem that renders new content submission buttons.
  Does not render itself specifically in '/topics/submit'.
  One can argue that this component should belong in the components folder, but in my opinion
  there's still a connection from this component to the router.
**/
class SideSubmit extends Component {
  render() {
    return (
      <Route
        exact
        path="/topics/submit"
        children={({ match }) =>
          match
            ? false
            : <ListView>
                <StyledListItem>
                  <Title>
                    <FormattedMessage {...messages.title} />
                  </Title>
                  <Link to="/topics/submit">
                    <StyledButton
                      color={theme.colors.white}
                      backgroundColor={theme.colors.blue}
                    >
                      <FormattedMessage {...messages.postButton} />
                    </StyledButton>
                  </Link>
                </StyledListItem>
              </ListView>}
      />
    );
  }
}

export default SideSubmit;
