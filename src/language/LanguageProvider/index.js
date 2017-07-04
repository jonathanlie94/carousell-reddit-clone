import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

class LanguageProvider extends PureComponent {
  static propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object,
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <IntlProvider locale={this.props.locale} key={this.props.locale} messages={this.props.messages[this.props.locale]}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    )
  }
}

const mapStateToProps = state => ({ locale: state.get('language').get('locale') })

export default connect(mapStateToProps)(LanguageProvider);
