import styled from 'styled-components';

import { VoteCount } from './Count';

const Vote = styled.div`
  width: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

Vote.Count = VoteCount;

export default Vote;