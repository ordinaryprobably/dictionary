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
      <SubmittedBox>
        <BoldSpan>{post.title}</BoldSpan>
        <div>
          <SubmittedBox.Votes>+{post._count.WordLike}</SubmittedBox.Votes>
          <SmallLightSpan>
            {year}/{month}/{day}
          </SmallLightSpan>
        </div>
      </SubmittedBox>
      <ProfileBox.Line />
    </div>
  );
}
