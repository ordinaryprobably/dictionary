import styled from "styled-components";
import { SmallSpan } from "../../elements/Span";
import { SubmitBtn } from "./button";
import { DefineInput, SubmitInput, TitleInput } from "./input";

const SubmitBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SubmitGuide = styled(SmallSpan)`
  font-weight: 600;
  margin: 30px 0 0 10px;
  display: inline-block;
`

SubmitBox.Title = TitleInput;
SubmitBox.Define = DefineInput;
SubmitBox.Guide = SubmitGuide;
SubmitBox.Btn = SubmitBtn;

export default SubmitBox;