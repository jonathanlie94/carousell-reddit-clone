/*
  Used for pagination within screens that render list of items.
  Pass in meta and callbacks on navigating to next or previous page.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { theme } from 'ui';
import { Map } from 'immutable';
import { Button } from 'components';

const PageNumber = styled.span`
  font-family: Overwatch;
  font-size: ${theme.fontSizes.regularL};
  color: ${theme.colors.white};
  margin: 0 ${theme.margins.regular};
`;

class Paginator extends Component {
  _canRenderNextPage() {
    return (
      this.props.meta.get('page') * this.props.meta.get('per_page') <
      this.props.meta.get('total')
    );
  }

  _canRenderPreviousPage() {
    return this.props.meta.get('page') !== 1;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this._canRenderPreviousPage()
          ? <Button onClick={this.props.onPreviousPage}>
              <FormattedMessage {...messages.previousPage} />
            </Button>
          : false}
        <PageNumber>
          <FormattedMessage
            {...messages.pageNumber}
            values={{
              page: this.props.meta.get('page'),
            }}
          />
        </PageNumber>
        {this._canRenderNextPage()
          ? <Button onClick={this.props.onNextPage}>
              <FormattedMessage {...messages.nextPage} />
            </Button>
          : false}
      </div>
    );
  }
}

Paginator.propTypes = {
  className: PropTypes.string,
  onNextPage: PropTypes.func,
  onPreviousPage: PropTypes.func,
  meta: PropTypes.instanceOf(Map), // page, per_page, total
};

export default Paginator;
