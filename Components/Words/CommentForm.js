import { useRef } from "react";
import { useSession } from 'next-auth/react';
import axios from "axios";

export default function CommentForm({ wordId }) {
  const { data: session, status } = useSession();
  const formRef = useRef();
  const commentRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    const enteredComment = commentRef.current.value;
    const postComment = await axios.post('/api/post-comment', {
      comment: enteredComment,
      userEmail: session.user.email,
      wordId: wordId
    });

    formRef.current.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input 
          type='text'
          name='comment'
          ref={commentRef}
          autoComplete='off'
          placeholder="댓글을 입력해 주세요."
        />
        <button>완료</button>
      </form>
    </div>
  )
}