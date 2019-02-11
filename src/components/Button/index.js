import React from "react";
import { ButtonStyled } from "../../styles";

function Button() {
  return (
    <div>
      <ButtonStyled primary onClick={() => alert("Hello React Hooks")}>
        Click me to please!
      </ButtonStyled>
    </div>
  );
}

export default Button;
