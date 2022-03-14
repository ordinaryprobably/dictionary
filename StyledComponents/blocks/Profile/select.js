import styled from "styled-components";
import { DARK_GREY, LIGHT_GREY } from "../../constants";

export const Select = styled.select`
  width: 70px;
  height: 37px;
  border: none;
  border-radius: 4px;
  background-color: ${LIGHT_GREY};
  padding: 11px 10px 9px 10px;
  appearance: none;
  color: ${DARK_GREY};
  font-size: 15px;
`;
