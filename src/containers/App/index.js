import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from 'components/AsyncComponent';
import { Banner, Header } from 'components';
import styled from 'styled-components';
import Helmet from 'react-helmet';
const PageNotFound = asyncComponent(() => import('components/PageNotFound'));
const TopicsPage = asyncComponent(() => import('containers/TopicsPage'));
const HomePage = asyncComponent(() => import('containers/HomePage'));
const SubmitPage = asyncComponent(() => import('containers/SubmitPage'));

const Wrapper = styled.div`min-width: 768px;`;

const App = props =>
  <Wrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>Reddit Clone</title>
    </Helmet>

    <Header>
      <Banner />
    </Header>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics/submit" component={SubmitPage} />
      <Route path="/topics/:id" component={TopicsPage} />
      <Route component={PageNotFound} />
    </Switch>
  </Wrapper>;

export default App;
