import styled from "styled-components";

const Title = styled.h1`
  font-size: ${props => props.size || "1.5em"};
  text-align: ${props => props.textAlign || "left"}
  color: ${props => props.color || "#46577b"}
`;

export { Title };
