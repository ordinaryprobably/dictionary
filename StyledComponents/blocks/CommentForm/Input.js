import styled from "styled-components";
import { LIGHT_GREY } from "../../constants";

export const CommentInput = styled.input`
  padding: 15px 0 15px 20px;
  width: 80%;
  font-size: 15px;
  border: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${LIGHT_GREY};
  }
`;

export const CommentBtn = styled.button`
  background-color: white;
  border: none;
`;
