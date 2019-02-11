import React, { Component } from "react";
import CounterHook from "../../components/Counter";
import { AppWrapper } from "./styled";
import UserContainer from "../UserContainer";
import { Label } from "../../styles";

class AppContainer extends Component {
  render() {
    return (
      <>
        <AppWrapper>
          <Label>--- Basic React Hook Counter ---</Label>
          <CounterHook />
          <br />
          <Label>--- Basic React Hook CRUD ---</Label>
          <UserContainer />
        </AppWrapper>
      </>
    );
  }
}

export default AppContainer;
