import styled from 'styled-components';
import { SmallSpan } from '../../elements/Span';
import { EXTRA_LIGHT_GREY } from '../../constants';

export const CommentHeaderDiv= styled.div`
  margin-bottom: 5px;
`;

export const CommentHeader = styled(SmallSpan)`
  font-weight: ${props => 
    props.variant === 'name' ? '500' : 'none'};
  color: ${props => 
    props.variant === 'date' ? EXTRA_LIGHT_GREY : 'black'};
  margin: 0 15px 5px 0;
`;