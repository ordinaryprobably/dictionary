import styled from "styled-components";
import { FlagDiv, FlagSpan, ShiningFlag } from "./Box";

const Flag = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderWithFlag = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px 0;
`;

Flag.Box = FlagDiv;
Flag.Shining = ShiningFlag;
Flag.Text = FlagSpan;
Flag.WithHeader = HeaderWithFlag;

export default Flag;
