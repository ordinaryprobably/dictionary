import styled from "styled-components";

export const Line = styled.hr`
  background-color: #efefef;
  height: 1px;
  border: none;
  margin: 0;
`;

export const ThickLine = styled(Line)`
  ${(props) =>
    props.marginBot &&
    `
  margin-bottom: ${props.marginBot}px;
  `}
  ${(props) =>
    props.marginTop &&
    `
  margin-top: ${props.marginTop}px;
  `}
`;

export const HearderLine = styled.hr`
  background-color: #efefef;
  height: 1px;
  border: none;
  margin-top: 20px;
  margin-bottom: 15px;
`;
