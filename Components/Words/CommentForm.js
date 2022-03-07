import { useRef } from "react";
import { useSession } from 'next-auth/react';
import axios from "axios";
import { CommentInput } from "../../StyledComponents/blocks/CommentForm/Input";
import { CommentFormDiv } from "../../StyledComponents/blocks/CommentForm";
import CommentFormBox from "../../StyledComponents/blocks/CommentForm";

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
    <CommentFormBox>
      <form onSubmit={handleSubmit} ref={formRef}>
        <CommentFormBox.Input 
          type='text'
          name='comment'
          ref={commentRef}
          autoComplete='off'
          placeholder="댓글을 입력해 주세요."
          required
        />
        <button>완료</button>
      </form>
    </CommentFormBox>
  )
}