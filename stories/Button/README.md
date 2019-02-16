# Button
### 😄 Usage

```js
import {
  ButtonSecondary,
  ButtonPrimary,
  ButtonSuccess,
  ButtonWarning,
  ButtonDanger,
  ButtonInfo,
  ButtonLink
} from "../../src/components/Button";
```

### Properties
- `onClick` - click callback

| propName | propType | defaultValue | isRequired |
| ------ | ------ | ------ | ------ |
| onClick | func | - | false |
| outline | props | - | false |

For example:
```js
<ButtonSecondary>Secondary</ButtonSecondary>
<ButtonPrimary>Primary</ButtonPrimary>
<ButtonSuccess>Success</ButtonSuccess>
<ButtonWarning>Warning</ButtonWarning>
<ButtonDanger>Danger</ButtonDanger>
<ButtonInfo>Info</ButtonInfo>
```
```js
<ButtonPrimary outline>PrimaryOutline</ButtonPrimary>
```
```js
import Button from 'components/button';

render() {
  return (
    <ButtonSecondary onClick={handleClick}>Secondary</ButtonSecondary>
  );
}
```
