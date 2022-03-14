import styled from "styled-components";
import { EXTRA_LIGHT_GREY, GREEN_TEXT } from "../../../constants";
import { SmallLightSpan } from "../../../elements/Span";

const SubmittedBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;

const Votes = styled(SmallLightSpan)`
  margin-right: 10px;
  ${(props) =>
    props.upVoted &&
    `
    color: ${GREEN_TEXT};
    font-weight: 500;
  `}
`;

SubmittedBox.Votes = Votes;

export default SubmittedBox;
