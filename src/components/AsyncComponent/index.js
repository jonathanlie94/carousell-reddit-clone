/*
  A function used to import component only when needed, used for code splitting,
  resulting in less chunk loaded initially.
*/

import React, { Component } from 'react';
import RootContainer from '../RootContainer';
import MainContainer from '../MainContainer';

export default function asyncComponent(importComponent, fallbackComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component,
      });
    }

    render() {
      const C = this.state.component;

      /*
        Use case of asyncComponent is mostly on containers, therefore
        RootContainer and MainContainer is rendered to prevent layout from breaking
        when the component is loading asynchronously.
      */
      const fallbackC = fallbackComponent || (
        <RootContainer>
          <MainContainer />
        </RootContainer>
      )

      return C ? <C {...this.props} /> : fallbackC;
    }
  }

  return AsyncComponent;
}
