import styled from 'styled-components';
import { DARK_GREY, DEFAULT_BLUE, LIGHT_BLUE } from '../constants';

export const Span = styled.span`
  font-size: 15px;
`

export const SmallSpan = styled.span`
  font-size: 13px;
`;

export const LightBlueHeader = styled.span`
  color: ${LIGHT_BLUE};
`

export const WarningText = styled.span`
  font-size: 15px;
  color: ${DARK_GREY};
  margin: 10px 0 0 10px;
  display: inline-block;
`

export const SuccessText = styled.span`
  font-size: 15px;
  color: ${DEFAULT_BLUE};
  margin: 10px 0 0 10px;
  display: inline-block;
`