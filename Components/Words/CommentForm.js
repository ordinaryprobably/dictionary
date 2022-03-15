import { useRef, useContext } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import CommentFormBox from "../../StyledComponents/blocks/CommentForm";
import { UserIdContext } from "../Contexts/userId.context";

export default function CommentForm({ wordId }) {
  const { data: session, status } = useSession();
  const userId =
    useContext(UserIdContext) ||
    (typeof window !== "undefined" && localStorage.getItem("userId"));
  const formRef = useRef();
  const commentRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredComment = commentRef.current.value;
    const postComment = await axios.post("/api/post-comment", {
      comment: enteredComment,
      userId: userId,
      wordId: wordId,
    });

    formRef.current.reset();
  };

  if (!session) {
    return (
      <CommentFormBox disabled={true}>
        <CommentFormBox.Input
          type="text"
          name="comment"
          ref={commentRef}
          autoComplete="off"
          placeholder="댓글을 입력해 주세요."
          disabled
        />
        <CommentFormBox.Btn disabled>
          <img src="/images/chevron-up.svg" />
        </CommentFormBox.Btn>
      </CommentFormBox>
    );
  } else {
    return (
      <CommentFormBox>
        <form onSubmit={handleSubmit} ref={formRef}>
          <CommentFormBox.Input
            type="text"
            name="comment"
            ref={commentRef}
            autoComplete="off"
            placeholder="댓글을 입력해 주세요."
            required
          />
          <CommentFormBox.Btn>
            <img src="/images/chevron-up.svg" />
          </CommentFormBox.Btn>
        </form>
      </CommentFormBox>
    );
  }
}
