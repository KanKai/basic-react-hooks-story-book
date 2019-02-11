import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #46577b;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #46577b;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`;

const ButtonPrimary = styled(ButtonStyled)`
  background-color: #46577b !important;
  color: white !important;
  ${props =>
    props.sm &&
    `
      padding:5px 10px !important;
      font-size:12px !important;
      line-height:1.5 !important;
      border-radius:3px !important;
  `}
`;

const ButtonPrimaryOutline = styled(ButtonStyled)`
  background-color: white !important;
  color: #46577b !important;
  ${props =>
    props.sm &&
    `
      padding:5px 10px !important;
      font-size:12px !important;
      line-height:1.5 !important;
      border-radius:3px !important;
  `}
`;

const ButtonDanger = styled(ButtonStyled)`
  color: #fff !important;
  background-color: #d9534f !important;
  border-color: #d43f3a !important;
  ${props =>
    props.sm &&
    `
      padding:5px 10px !important;
      font-size:12px !important;
      line-height:1.5 !important;
      border-radius:3px !important;
  `}
`;

const ButtonDangerOutline = styled(ButtonStyled)`
  color: #d9534f !important;
  background-color: #fff !important;
  border-color: #d43f3a !important;
  ${props =>
    props.sm &&
    `
      padding:5px 10px !important;
      font-size:12px !important;
      line-height:1.5 !important;
      border-radius:3px !important;
  `}
`;

export {
  ButtonStyled,
  ButtonPrimary,
  ButtonPrimaryOutline,
  ButtonDanger,
  ButtonDangerOutline
};
