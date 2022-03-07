import styled from 'styled-components';
import { DARK_GREY } from '../../constants';
import { SmallSpan } from '../../elements/Span';
import { CommentHeader, CommentHeaderDiv } from './Header';

export const Comments = styled.div`
  margin: 0 5px;
`

export const CommentBlock = styled.div`
  margin-bottom: 20px;
`

export const CommentsCount = styled(SmallSpan)`
  display: inline-block;
  margin: 20px 0;
  color: ${DARK_GREY};
`

Comments.Box = CommentBlock;
Comments.Header = CommentHeaderDiv;
Comments.HeaderText = CommentHeader;
Comments.Count = CommentsCount;

export default Comments;