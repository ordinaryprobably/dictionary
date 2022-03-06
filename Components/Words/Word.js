import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./Comment";

export default function Word({ word }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetcher() {
      const likes = await axios.post('/api/count_likes', { id: word.id });
      const comments = await axios.get(`/api/comments/${word.id}`);
      
      setLikes(likes.data.likeNums);
      setComments(comments.data.comments);
    }

    fetcher();
  }, []);
  
  return (
    <div>
      <div>
        <span>{word.title}</span>
        <div>
          <div>+{likes}</div>
          <div>댓글 {comments.length || 0}개</div>
        </div>
      </div>
      <hr/>
      <div>
        <p>{word.meaning}</p>
        <div>
          <span>이 해석을 신고하기</span>
          <span>번역하기</span>
          <span>저장하기</span>
        </div>
      </div>
      <hr/>
      <div>
        <span>댓글 4개</span>
        {comments.map(comment => (
          <Comment data={comment} />
        ))}
      </div>
    </div>
  );
}