import styled from "styled-components";
import { LIGHT_GREY } from "../../constants";
import { CommentInput } from "./Input";

export const CommentFormBox = styled.div`
  border: 1px solid ${LIGHT_GREY};
  margin-bottom: 30px;
  border-radius: 4px;
  ${props => props.disabled && `
    background-color: ${LIGHT_GREY}
  `};
`

CommentFormBox.Input = CommentInput;

export default CommentFormBox;