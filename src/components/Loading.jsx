import React from 'react';
import styled from 'styled-components';
import { Heart } from 'react-spinners-css';

const StyledLoad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 840px;
  background-color: var(--secondary);
  padding: 3% 3%;
  border-radius: 25px 25px 25px 25px;

  h2 {
    text-align: center;
    font-family: 'Yellowtail', cursive;
    font-size: 2.5rem;
  }
`;

const Loading = () => {
  return (
    <StyledLoad>
      <h2>Loading</h2>
      <Heart color="var(--dark)" />
    </StyledLoad>
  )
}

export default Loading;