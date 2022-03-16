import styled from "styled-components";
import { LIGHT_BOX } from "../../../constants";

const SignInBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 30px 13px 30px;
  width: 70%;
  border: 1px solid #f0f0f0;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 3px 3px 0px #f0f0f0;
  cursor: pointer;
  &:active {
    background-color: ${LIGHT_BOX};
  }
`;

const StyledImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

SignInBox.Icon = StyledImage;

export default SignInBox;
