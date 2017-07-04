import React from 'react';
import { Route, Link } from 'react-router-dom';
import asyncComponent from 'components/AsyncComponent';
const TopicItem = asyncComponent(() => import('containers/TopicItem'));

const Topics = ({ match }) =>
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/sampleTopic`}>Sample Topic</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={TopicItem} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>;

export default Topics;
