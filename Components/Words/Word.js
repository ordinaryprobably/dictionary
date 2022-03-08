import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Comments from "../../StyledComponents/blocks/Comment";
import { BlueHeader } from "../../StyledComponents/elements/Header";
import { Line } from "../../StyledComponents/elements/Hr";
import Flag from "../../StyledComponents/blocks/Flag";
import Definition from "../../StyledComponents/blocks/Definition";
import { WordContext } from "../Contexts/word.context";

export default function Word({ data }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetcher() {
      const likes = await axios.post('/api/count_likes', { id: data.id });
      const comments = await axios.get(`/api/comments/${data.id}`);

      setLikes(likes.data.count);
      setComments(comments.data.count);
    }

    fetcher();
  }, [likes, comments]);
  
  return (
    <div>
      <Flag.WithHeader>
        <BlueHeader>{data.title}</BlueHeader>
        <Flag>
          <Flag.Box variant='like'>
            <Flag.Text variant='like'>+{likes}</Flag.Text>
          </Flag.Box>
          <Flag.Box variant='comment'>
            <Flag.Text variant='comment'>댓글 {comments.length || 0}개</Flag.Text>
          </Flag.Box>
        </Flag>
      </Flag.WithHeader>
      <Line/>
      <Definition>
        <Definition.Text>{data.meaning}</Definition.Text>
        <div>
          <Definition.Option>이 해석을 신고하기</Definition.Option>
          <Definition.Option>번역하기</Definition.Option>
          <Definition.Option>저장하기</Definition.Option>
        </div>
      </Definition>
      <Line/>
      <div>
        <Comments.Count>댓글 {comments.length || 0}개</Comments.Count>
        <Comments>
          {comments.map(comment => (
            <Comment data={comment} />
          ))}
        </Comments>
        <CommentForm wordId={data.id}/>
      </div>
      <Line />
    </div>
  );
}