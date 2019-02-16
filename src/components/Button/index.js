import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  outline: none;
`;

const ButtonSecondary = styled(Button)`
  color: #fff;
  background-color: #95a5a6;
  border-color: #95a5a6;
  &:hover {
    color: #fff;
    background-color: #809395;
    border-color: #798d8f;
  }
`;

const ButtonPrimary = styled(Button)`
  color: #fff;
  background-color: #2c3e50;
  border-color: #2c3e50;
  &:hover {
    color: #fff;
    background-color: #1e2b37;
    border-color: #1a252f;
  }
  ${props =>
    props.outline &&
    `
    color: #2C3E50 !important;
    border-color: #2C3E50  !important;
    background-color: #fff;
    &:hover {
      color: #fff !important;
      background-color: #2C3E50 !important;
      border-color: #2C3E50 !important;
    }
  `}
`;

const ButtonSuccess = styled(Button)`
  color: #fff;
  background-color: #18bc9c;
  border-color: #18bc9c;
  &:hover {
    color: #fff;
    background-color: #149a80;
    border-color: #128f76;
  }
`;

const ButtonInfo = styled(Button)`
  color: #fff;
  background-color: #3498db;
  border-color: #3498db;
  &:hover {
    color: #fff;
    background-color: #2384c6;
    border-color: #217dbb;
  }
`;

const ButtonWarning = styled(Button)`
  color: #fff;
  background-color: #f39c12;
  border-color: #f39c12;
  &:hover {
    color: #fff;
    background-color: #d4860b;
    border-color: #c87f0a;
  }
`;

const ButtonDanger = styled(Button)`
  color: #fff;
  background-color: #e74c3c;
  border-color: #e74c3c;
  &:hover {
    color: #fff;
    background-color: #e12e1c;
    border-color: #d62c1a;
  }
`;

const ButtonLink = styled(Button)`
  font-weight: 400;
  color: #18bc9c;
  text-decoration: none;
  &:hover {
    color: #0f7864;
    text-decoration: underline;
  }
`;

export {
  Button,
  ButtonSecondary,
  ButtonPrimary,
  ButtonSuccess,
  ButtonWarning,
  ButtonDanger,
  ButtonInfo,
  ButtonLink
};
