import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import asyncComponent from 'components/AsyncComponent';
import Banner from 'components/Banner';
import LanguageProvider from 'language/LanguageProvider';
import Topics from 'containers/Topics';

const HomePage = asyncComponent(() => import('containers/HomePage'));

const App = props =>
  <LanguageProvider messages={props.messages}>
    <Router>
      <div>
        <Banner />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  </LanguageProvider>;

export default App;
