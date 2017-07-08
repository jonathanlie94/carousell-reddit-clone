import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { appLocales, appLocalesName } from 'language/i18n';
import { theme } from 'ui';
import { changeLocale } from 'language/LanguageProvider/actions';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  padding: ${theme.margins.large};
  background-color: ${theme.colors.darkergrey};
  color: ${theme.colors.white};
  text-align: center;
  font-size: ${theme.fontSizes.small};
`;

const LanguageOption = styled.span`
  text-decoration: ${props => (props.current ? 'underline' : 'initial')};
  &:hover {
    text-decoration: underline;
    color: ${theme.colors.grey};
  }
  cursor: pointer;
  margin-left: ${theme.margins.regular};
`;

const MessageWrapper = styled.span`margin-right: ${theme.margins.small};`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <MessageWrapper>
          <FormattedMessage {...messages.languageInstructions} />:
        </MessageWrapper>

        {appLocales.map((locale, i) =>
          <LanguageOption
            current={`${this.props.locale}` === `${locale}`}
            key={`${locale}-${i}`}
            onClick={() => this.props.changeLocale(locale)}
          >
            {appLocalesName[i]}
          </LanguageOption>
        )}
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  locale: PropTypes.string,
  changeLocale: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    locale: state.get('language').get('locale'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLocale: locale => dispatch(changeLocale(locale)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
