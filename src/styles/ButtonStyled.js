import styled from "styled-components";

const ButtonStyled = styled.button`
  background: ${props => (props.primary ? "#46577b" : "white")};
  color: ${props => (props.primary ? "white" : "#46577b")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #46577b;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;

export { ButtonStyled };
