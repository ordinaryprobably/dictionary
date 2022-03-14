import styled from "styled-components";
import { SmallLightSpan } from "../../../elements/Span";

const SubmittedBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

const Votes = styled(SmallLightSpan)`
  margin-right: 10px;
`;

SubmittedBox.Votes = Votes;

export default SubmittedBox;
