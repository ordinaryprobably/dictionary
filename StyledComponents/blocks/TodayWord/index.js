import styled from "styled-components";
import { LIGHT_BOX } from "../../constants";
import { Span } from "../../elements/Span";

const TodayBox = styled.div`
  margin-bottom: 20px;
`;

const WordBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${LIGHT_BOX};
  padding: 20px 30px 20px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const Text = styled(Span)`
  font-weight: 600;
  ${(props) =>
    props.marginBot &&
    `
      display: inline-block;
      margin-bottom: ${props.marginBot}px;
    `}
`;

TodayBox.Word = WordBox;
TodayBox.Text = Text;

export default TodayBox;
