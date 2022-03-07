import styled from 'styled-components';
import { DARK_GREY, DEFAULT_BLUE, LIGHT_BLUE, LIGHT_GREY } from '../../constants';
import { SmallP } from '../../elements/Paragraph';

export const FlagDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
    if(props.variant === 'comment') {
      return LIGHT_GREY;
    } else if(props.variant === 'like') {
      return LIGHT_BLUE;
    }
  }};
  padding: ${props => {
    if(props.variant === 'comment') {
      return '3px 5px';
    } else if(props.variant === 'like') {
      return '3px 10px';
    }
  }}; 
  font-weight: ${props => props.variant === 'like' ? 'bold' : 'none'};
  margin: 0 5px;
  border-radius: 3px;
`

export const FlagSpan = styled(SmallP)`
  color: ${props => {
    if(props.variant === 'comment') {
      return DARK_GREY;
    } else if(props.variant === 'like') {
      return DEFAULT_BLUE;
    }
  }};
`