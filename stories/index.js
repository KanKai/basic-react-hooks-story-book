import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import CounterHook from "../src/components/Counter";
import UserContainer from "../src/containers/UserContainer";

storiesOf("Button", module).add("click button to alert", () => <Button />);
storiesOf("CounterHook", module).add("click button to counter number", () => (
  <CounterHook />
));
storiesOf("CRUD", module).add("basic CRUD with react hooks", () => (
  <UserContainer />
));
