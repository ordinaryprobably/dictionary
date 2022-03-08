import styled from "styled-components";
import { DARK_GREY, DEFAULT_BLUE } from "../../constants";

export const SubmitBtn = styled.button`
  width: 100%;
  height: 45px;
  background-color: ${props => props.disabled ? DARK_GREY : DEFAULT_BLUE};
  border: none;
  color: white;
  font-size: 15px;
  letter-spacing: 0.1rem;
  border-radius: 4px;
  cursor: pointer;
  ${props => !props.disabled && (`
    &:hover {
      background-color: #1A96FF;
    };
    &:active {
      background-color: ${DEFAULT_BLUE};
    }
  `)}
`