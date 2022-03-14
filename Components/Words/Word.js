import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Comments from "../../StyledComponents/blocks/Comment";
import { BlueHeader } from "../../StyledComponents/elements/Header";
import { Line } from "../../StyledComponents/elements/Hr";
import Flag from "../../StyledComponents/blocks/Flag";
import Definition from "../../StyledComponents/blocks/Definition";
import { UserIdContext, DispatchIdContext } from "../Contexts/userId.context";
import { useSession } from "next-auth/react";
import { useToggleSave } from "../Hooks/useToggleSave";

export default function Word({ data }) {
  const userId =
    useContext(UserIdContext) ||
    (typeof window !== "undefined" && localStorage.getItem("userId"));
  const dispatchId = useContext(DispatchIdContext);
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [save, toggleSave, setSave] = useToggleSave("/api/save", {
    wordId: data.id,
    userId,
  });

  const handleSave = async () => {
    if (session) {
      toggleSave();
    }
  };

  useEffect(() => {
    async function fetcher() {
      const comments = await axios.get(`/api/comments/${data.id}`);

      setComments(comments.data.data);
    }

    if (session) {
      dispatchId({
        type: "ADD",
        value: userId,
      });
    }

    fetcher();
    setSave(data.Save.find((save) => save.authorId === userId));
  }, []);

  return (
    <div>
      <Flag.WithHeader>
        <BlueHeader>{data.title}</BlueHeader>
        <Flag>
          <Flag.Box variant="like">
            <Flag.Text variant="like">+{data._count.WordLike}</Flag.Text>
          </Flag.Box>
          <Flag.Box variant="comment">
            <Flag.Text variant="comment">
              댓글 {data._count.Comment || 0}개
            </Flag.Text>
          </Flag.Box>
        </Flag>
      </Flag.WithHeader>
      <Line />
      <Definition>
        <Definition.Text>{data.meaning}</Definition.Text>
        <div>
          <Definition.Option>이 해석을 신고하기</Definition.Option>
          <Definition.Option>번역하기</Definition.Option>
          {!save ? (
            <Definition.Option onClick={handleSave}>저장하기</Definition.Option>
          ) : (
            <Definition.Option onClick={handleSave}>
              저장한 단어
            </Definition.Option>
          )}
        </div>
      </Definition>
      <Line />
      <div>
        <Comments.Count>댓글 {data._count.Comment || 0}개</Comments.Count>
        <Comments>
          {comments.map((comment) => (
            <Comment data={comment} key={comment.id} />
          ))}
        </Comments>
        <CommentForm wordId={data.id} />
      </div>
      <Line />
    </div>
  );
}
