import { useSession } from "next-auth/react";
import Link from "next/link";
import { Line } from "../../StyledComponents/elements/Hr";
import Vote from "../../StyledComponents/blocks/Vote";
import WordCard from "../../StyledComponents/blocks/WordCard";
import Flag from "../../StyledComponents/blocks/Flag";
import Definition from "../../StyledComponents/blocks/Definition";
import { useState, useContext, useEffect } from "react";
import { UserIdContext } from "../Contexts/userId.context";
import { useToggleLike } from "../Hooks/useToggleLike";

export default function WordSummary({ word }) {
  const { data: session } = useSession();
  const userId =
    useContext(UserIdContext) ||
    (typeof window !== "undefined" && localStorage.getItem("userId"));
  const [liked, setLiked] = useState(false);
  const [like, toggleLike, setLike] = useToggleLike(
    `/api/like/${word.id}`,
    {
      wordId: word.id,
      userId,
    },
    liked
  );

  const handleLike = () => {
    if (session) {
      toggleLike();
      !like ? (word._count.WordLike += 1) : (word._count.WordLike -= 1);
    }
  };

  useEffect(() => {
    if (word.WordLike.length !== 0) {
      setLiked(word.WordLike.find((like) => like.authorId == userId));
      setLike(word.WordLike.find((like) => like.authorId == userId));
    }
  }, []);

  return (
    <>
      <WordCard>
        <Vote>
          <img
            src={like ? "../images/blue-arrow.svg" : "../images/arrow-up.svg"}
            onClick={handleLike}
          />
          <Vote.Count>{word._count.WordLike}</Vote.Count>
          <img src="../images/arrow-down.svg" />
        </Vote>
        <WordCard.Word>
          <WordCard.Header>
            <Link href={`/word/${word.title}/${word.id}`}>
              <WordCard.Title>{word.title}</WordCard.Title>
            </Link>
            {word._count.Comment > 0 ? (
              <Flag.Shining variant="comment">
                <Flag.Text variant="comment">
                  댓글 {word._count.Comment}개
                </Flag.Text>
              </Flag.Shining>
            ) : (
              <Flag.Box variant="comment">
                <Flag.Text variant="comment">
                  댓글 {word._count.Comment}개
                </Flag.Text>
              </Flag.Box>
            )}
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
      <Line />
    </>
  );
}
