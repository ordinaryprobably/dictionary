import styled from "styled-components";
import { DEFAULT_BLUE, LIGHT_GREY } from "../../constants";
import { CommentInput } from "../CommentForm/Input";

export const TitleInput = styled(CommentInput)`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${LIGHT_GREY};
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
`

export const DefineInput = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${LIGHT_GREY};
  border-radius: 4px;
  height: 200px;
  padding: 20px 20px;
  margin: 10px 0 20px 0;
  &:focus {
    outline: none;
  }
`