import styled from "styled-components";
import { LIGHT_GREY } from "../../constants";
import { CommentBtn, CommentInput } from "./Input";

export const CommentFormBox = styled.div`
  border: 1px solid ${LIGHT_GREY};
  margin-bottom: 30px;
  border-radius: 4px;
  ${(props) =>
    props.disabled &&
    `
    background-color: ${LIGHT_GREY}
  `};
`;

CommentFormBox.Input = CommentInput;
CommentFormBox.Btn = CommentBtn;

export default CommentFormBox;
