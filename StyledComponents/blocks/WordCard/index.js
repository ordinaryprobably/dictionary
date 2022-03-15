import styled from "styled-components";
import { WordCardHeader } from "./Header";
import { WordCardMeaning } from "./Meaning";
import { WordTitle } from "./Title";
import { WordDiv } from "./WordWrap";

const WordCard = styled.div`
  display: flex;
  padding: 20px 0;
`;

WordCard.Word = WordDiv;
WordCard.Header = WordCardHeader;
WordCard.Title = WordTitle;
WordCard.Meaning = WordCardMeaning;

export default WordCard;
