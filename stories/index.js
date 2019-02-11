import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import CounterHook from "../src/components/Counter";
import UserContainer from "../src/containers/UserContainer";
import {
  ButtonPrimary,
  ButtonDanger,
  ButtonDangerOutline,
  ButtonPrimaryOutline
} from "../src/styles";

const storiesButton = storiesOf("Button", module);

storiesButton
  .add("Primary", () => <ButtonPrimary>ButtonPrimary</ButtonPrimary>)
  .add("PrimaryOutline", () => (
    <ButtonPrimaryOutline>ButtonPrimary Outline</ButtonPrimaryOutline>
  ))
  .add("Danger", () => <ButtonDanger>ButtonDanger</ButtonDanger>)
  .add("DangerOutline", () => (
    <ButtonDangerOutline>ButtonDanger Outline</ButtonDangerOutline>
  ))
  .add("Primary Small", () => <ButtonPrimary sm>ButtonDanger</ButtonPrimary>)
  .add("Danger Small", () => <ButtonDanger sm>ButtonDanger</ButtonDanger>);

storiesOf("Button Action", module).add("click button to alert", () => (
  <Button />
));

storiesOf("CounterHook", module).add("click button to counter number", () => (
  <CounterHook />
));

storiesOf("CRUD", module).add("basic CRUD with react hooks", () => (
  <UserContainer />
));
