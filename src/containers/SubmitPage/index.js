import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setForm, requestCreateTopic } from './actions';
import { withRouter } from 'react-router-dom';
import {
  ListItem,
  ScrollToTopOnMount,
  ListView,
  RootContainer,
  MainContainer,
  SideContainer,
  InputText,
  Button,
} from 'components';

class SubmitPage extends Component {
  _createTopic() {
    this.props.createTopic().then(() => {
      console.log('asdfasfsadf');
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <RootContainer>
        <ScrollToTopOnMount />
        <MainContainer>
          <ListView>
            <ListItem>
              <InputText
                onChange={v => {
                  this.props.setForm({
                    title: v,
                  });
                }}
                value={this.props.title}
              />
              <InputText
                onChange={v =>
                  this.props.setForm({
                    description: v,
                  })}
                value={this.props.description}
              />
              <Button onClick={this.props.createTopic}>Submit</Button>
            </ListItem>
          </ListView>
        </MainContainer>

        <SideContainer />
      </RootContainer>
    );
  }
}

SubmitPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    title: state.get('submitPage').get('form').get('title'),
    description: state.get('submitPage').get('form').get('description'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setForm: form => dispatch(setForm(form)),
    createTopic: () => dispatch(requestCreateTopic()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SubmitPage)
);
