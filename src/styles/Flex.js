import styled from "styled-components";

const FlexRow = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FlexLarge = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  flex-basic: 100%;
  margin-bottom: 1rem;
  text-align: ${props => props.textAlign || "left"};

  @media (min-width: 1000px) {
    flex: 1 1 0;
    margin-bottom: 0;
  }
`;

export { FlexRow, FlexLarge };
