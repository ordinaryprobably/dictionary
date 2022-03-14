import styled from "styled-components";
import { DARK_GREY, LIGHT_GREY } from "../../constants";

export const Select = styled.select`
  height: 37px;
  border: none;
  border-radius: 4px;
  appearance: none;
  background: url("/images/down-triangle.svg") no-repeat center right 9px;
  background-color: ${LIGHT_GREY};
  padding: 11px 34px 9px 13px;
  color: ${DARK_GREY};
  font-size: 15px;
`;
