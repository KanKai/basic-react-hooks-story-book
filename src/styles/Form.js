import styled from "styled-components";

const Label = styled.label`
  font-weight: 600;
  max-width: 100%;
  display: block;
  margin: 1rem 0 0.5rem;
  color: ${props => props.color || "#46577b"};
  font-size: ${props => props.size || "16px"};
  text-align: ${props => props.textAlign || "left"};
`;

const Input = styled.input`
  border-radius: 0;
  box-shadow: none;
  border: 1px solid #707070;
  background-color: #ffffff;
  color: #46577b;
  width: 100%;
  text-indent: 10px;
  line-height: normal;
  height: 30px;
  outline: none;
`;

export { Label, Input };
