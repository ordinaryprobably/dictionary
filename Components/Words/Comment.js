import Comments from "../../StyledComponents/blocks/Comment";
import { SmallP } from "../../StyledComponents/elements/Paragraph";


export default function Comment({ data }) {
  const date = new Date(data.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  return (
    <Comments.Box>
      <Comments.Header>
        <Comments.HeaderText variant='name'>{data.author.name}</Comments.HeaderText>
        <Comments.HeaderText variant='date'>{year}/{month}/{day}</Comments.HeaderText>
      </Comments.Header>
      <SmallP>{data.content}</SmallP>
    </Comments.Box>
  )
}