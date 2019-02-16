import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";
import { withReadme } from "storybook-readme";

import ButtonReadme from "./README.md";

import {
  ButtonSecondary,
  ButtonPrimary,
  ButtonSuccess,
  ButtonWarning,
  ButtonDanger,
  ButtonInfo,
  ButtonLink
} from "../../src/components/Button";

storiesOf("Button", module)
  .addDecorator(withNotes)
  .add(
    "secondary",
    withReadme(ButtonReadme, () => <ButtonSecondary>Secondary</ButtonSecondary>)
  )
  .add(
    "primary",
    withReadme(ButtonReadme, () => <ButtonPrimary>Primary</ButtonPrimary>)
  )
  .add(
    "success",
    withReadme(ButtonReadme, () => <ButtonSuccess>Success</ButtonSuccess>)
  )
  .add(
    "warning",
    withReadme(ButtonReadme, () => <ButtonWarning>Warning</ButtonWarning>)
  )
  .add(
    "danger",
    withReadme(ButtonReadme, () => <ButtonDanger>Danger</ButtonDanger>)
  )
  .add("info", withReadme(ButtonReadme, () => <ButtonInfo>Info</ButtonInfo>))
  .add(
    "link",
    withReadme(ButtonReadme, () => (
      <ButtonLink onClick={action("$event")}>Link</ButtonLink>
    ))
  )
  .add(
    "primaryOutline",
    withReadme(ButtonReadme, () => (
      <ButtonPrimary outline>PrimaryOutline</ButtonPrimary>
    ))
  );
