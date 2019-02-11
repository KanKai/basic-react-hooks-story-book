import React, { Component } from "react";
import CounterHook from "../../components/Counter";
import { AppWrapper } from "./styled";

class AppContainer extends Component {
  render() {
    return (
      <>
        <AppWrapper>
          <CounterHook />
        </AppWrapper>
      </>
    );
  }
}

export default AppContainer;
