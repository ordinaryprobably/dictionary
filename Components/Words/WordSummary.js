import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import { GreyHr } from '../../StyledComponents/elements/Hr';
import Vote from '../../StyledComponents/blocks/Vote';
import WordCard from '../../StyledComponents/blocks/WordCard';
import Flag from '../../StyledComponents/blocks/Flag';
import Definition from '../../StyledComponents/blocks/Definition';

export default function WordSummary({ word }) {
  const [comments, setComments] = useState(0);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    async function fetchCommentNums() {
      const numOfComments = await axios.post('/api/count_comments', {
        id: word.id
      });
      const numOfLikes = await axios.post('/api/count_likes', {
        id: word.id
      });

      setComments(numOfComments.data.count);
      setLikes(numOfLikes.data.count);
    }

    fetchCommentNums();
  }, []);

  return (
    <>
      <WordCard>
        <Vote>
          <img src='../images/arrow-up.svg' />
          <Vote.Count>{likes}</Vote.Count>
          <img src='../images/arrow-down.svg' />
        </Vote>
        <WordCard.Word>
          <WordCard.Header>
            <Link href={`/word/${word.title}/${word.id}`}>
              <WordCard.Title>{word.title}</WordCard.Title>
            </Link>
            <Flag.Box variant='comment'>
              <Flag.Text variant='comment'>댓글 {comments}개</Flag.Text>
            </Flag.Box>
          </WordCard.Header>
          <WordCard.Meaning>
            <Definition.Text>{word.meaning}</Definition.Text>
            <div>
              <Definition.Option>이 해석을 신고하기</Definition.Option>
              <Definition.Option>번역하기</Definition.Option>
              <Definition.Option>저장하기</Definition.Option>
            </div>
          </WordCard.Meaning>
        </WordCard.Word>
      </WordCard>
      <GreyHr/>
    </>
  )
}