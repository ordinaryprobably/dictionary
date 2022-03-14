import styled from "styled-components";
import { keyframes } from "styled-components";
import {
  DARK_GREY,
  DEFAULT_BLUE,
  LIGHT_BLUE,
  LIGHT_GREY,
} from "../../constants";
import { SmallP } from "../../elements/Paragraph";

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const ShiningFlag = styled.div`
  background-color: ${(props) => {
    if (props.variant === "comment") {
      return LIGHT_GREY;
    } else if (props.variant === "like") {
      return LIGHT_BLUE;
    }
  }};
  padding: ${(props) => {
    if (props.variant === "comment") {
      return "3px 5px";
    } else if (props.variant === "like") {
      return "3px 10px";
    }
  }};
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #fcfcfc 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} cubic-bezier(0.86, 0.43, 0.75, 0.72) infinite;
  animation-delay: 1s;
`;

export const FlagDiv = styled.div`
  background-color: ${(props) => {
    if (props.variant === "comment") {
      return LIGHT_GREY;
    } else if (props.variant === "like") {
      return LIGHT_BLUE;
    }
  }};
  padding: ${(props) => {
    if (props.variant === "comment") {
      return "3px 5px";
    } else if (props.variant === "like") {
      return "3px 10px";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(props) => (props.variant === "like" ? "bold" : "none")};
  margin: 0 5px;
  border-radius: 3px;
`;

export const FlagSpan = styled(SmallP)`
  color: ${(props) => {
    if (props.variant === "comment") {
      return DARK_GREY;
    } else if (props.variant === "like") {
      return DEFAULT_BLUE;
    }
  }};
`;
