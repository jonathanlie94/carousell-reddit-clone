import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setForm, resetForm, requestCreateTopic } from './actions';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  ListItem,
  ScrollToTopOnMount,
  ListView,
  RootContainer,
  MainContainer,
  SideContainer,
  InputTextarea,
  Button,
} from 'components';
import { Map } from 'immutable';
import { theme } from 'ui';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import messages from './messages';

const StyledInputTextarea = styled(InputTextarea)`
  margin-bottom: ${theme.margins.regular}
`;

const Required = styled.span`
  color: ${theme.colors.yellow};
  font-size: ${theme.fontSizes.regularL};
`;

const InputLabel = styled.div`
  font-size: ${theme.fontSizes.regular};
  margin-bottom: ${theme.margins.smallX};
`;

const MAX_TITLE_CHARACTERS = 255;

class SubmitPage extends Component {
  state = {
    error: Map({}),
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.title.length > 0 &&
      nextProps.title.length < MAX_TITLE_CHARACTERS
    ) {
      this.setState({
        error: Map({}),
      });
    }
    if (nextProps.title.length > MAX_TITLE_CHARACTERS) {
      this.setState({
        error: this.state.error.merge(
          Map({
            title: this.props.intl.formatMessage(messages.titleTooLong),
          })
        ),
      });
    }
  }

  componentWillUnmount() {
    this.props.dispatch(resetForm());
  }

  _validateOnBlur() {
    if (this.props.title.length === 0) {
      this.setState({
        error: this.state.error.merge(
          Map({
            title: this.props.intl.formatMessage(messages.titleRequired),
          })
        ),
      });
    }
  }

  _validate() {
    return (
      this.props.title.length > 0 &&
      this.props.title.length < MAX_TITLE_CHARACTERS
    );
  }

  _createTopic() {
    // Client-side validation for our form

    this.props
      .createTopic()
      .then(() => {
        this.props.history.push('/');
      })
      .catch(() => {});
  }

  render() {
    return (
      <RootContainer>
        <ScrollToTopOnMount />

        <MainContainer>
          <ListView>
            <ListItem>
              <InputLabel>
                <Required>*</Required>
                <FormattedMessage {...messages.title} />
              </InputLabel>

              {/* We still prioritize server validation here, even though it is not internationalized */}
              <StyledInputTextarea
                error={
                  this.props.error.get('title') || this.state.error.get('title')
                }
                rows={5}
                onBlur={() => this._validateOnBlur()}
                onChange={v => {
                  this.props.setForm({
                    title: v,
                  });
                }}
                value={this.props.title}
              />

              <InputLabel>
                <FormattedMessage {...messages.description} />
              </InputLabel>

              <StyledInputTextarea
                onChange={v =>
                  this.props.setForm({
                    description: v,
                  })}
                value={this.props.description}
              />

              <Button
                disabled={
                  this.props.error.size !== 0 ||
                  !this._validate() ||
                  this.state.loading
                }
                onClick={() => this._createTopic()}
              >
                <FormattedMessage {...messages.submit} />
              </Button>
            </ListItem>
          </ListView>
        </MainContainer>

        <SideContainer />
      </RootContainer>
    );
  }
}

SubmitPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.instanceOf(Map),
  intl: intlShape.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    loading: state.get('submitPage').get('loading'),
    error: state.get('submitPage').get('error'),
    title: state.get('submitPage').get('form').get('title'),
    description: state.get('submitPage').get('form').get('description'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm: form => dispatch(setForm(form)),
    resetForm: () => dispatch(resetForm()),
    createTopic: () => dispatch(requestCreateTopic()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(injectIntl(SubmitPage))
);
