import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import CounterHook from "../src/components/Counter";

storiesOf("Button", module).add("click button to alert", () => <Button />);
storiesOf("CounterHook", module).add("click button to counter number", () => (
  <CounterHook />
));
