import Link from "next/link";
import ProfileBox from "../../StyledComponents/blocks/Profile";
import SubmittedBox from "../../StyledComponents/blocks/Profile/Submitted";
import { BoldSpan, SmallLightSpan } from "../../StyledComponents/elements/Span";

export default function Submitted({ post }) {
  const date = new Date(post.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return (
    <div>
      <Link href={`/word/${post.title}/${post.id}`}>
        <SubmittedBox>
          <BoldSpan>{post.title}</BoldSpan>
          <div>
            {post._count.WordLike > 0 ? (
              <SubmittedBox.Votes upVoted={true}>
                +{post._count.WordLike}
              </SubmittedBox.Votes>
            ) : (
              <SubmittedBox.Votes>+{post._count.WordLike}</SubmittedBox.Votes>
            )}
            <SmallLightSpan>
              {year}/{month}/{day}
            </SmallLightSpan>
          </div>
        </SubmittedBox>
      </Link>
      <ProfileBox.Line />
    </div>
  );
}
