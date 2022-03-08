import styled from 'styled-components';
import { DEFAULT_BLUE, LIGHT_BLUE } from '../constants';

export const BlueHeader = styled.h1`
  margin: 0 0 ${props => props.marginBot ? props.marginBot : 0} 0;
  color: ${DEFAULT_BLUE};
  font-size: 25px;
`

export const LightBlueHeader = styled.h1`
  margin: 0;
  color: ${LIGHT_BLUE};
  font-size: 25px;
`