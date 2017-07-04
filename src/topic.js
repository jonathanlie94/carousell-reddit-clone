import React from 'react';

const Topic = ({ match }) =>
  <div>
    <h3>
      {match.params.topicId}
    </h3>
  </div>;


Topic.propTypes = {
  b: React.PropTypes.string,
  a: React.PropTypes.string,
}
export default Topic;
