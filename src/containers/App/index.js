import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from 'components/AsyncComponent';
import { Banner, Header, MainContainer, SideContainer } from 'components';
import styled from 'styled-components';
const TopicsPage = asyncComponent(() => import('containers/TopicsPage'));
const HomePage = asyncComponent(() => import('containers/HomePage'));
const SubmitPage = asyncComponent(() => import('containers/SubmitPage'));

const Wrapper = styled.div`min-width: 768px;`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = props =>
  <Wrapper>
    <Header>
      <Banner />
    </Header>

    <ContentWrapper>
      <MainContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={TopicsPage} />
          <Route path="/new" component={SubmitPage} />
        </Switch>
      </MainContainer>

      <SideContainer />
    </ContentWrapper>
  </Wrapper>;

export default App;
