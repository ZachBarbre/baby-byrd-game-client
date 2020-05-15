import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  
  h1 {
    font-family: 'Yellowtail', cursive;
    font-size: 3.5rem;
    color: var(--white);
  }
`;

const Subheader = styled.div`
   width: 80%;
   max-width: 480px;
   background-color: var(--primary-light);
   margin-bottom: 5vh;
   padding: 0 5%;
   border-radius: 25px 25px 25px 25px;
   text-align: center;
   /* font-size: 1.2rem; */

  p {
    max-width: 340px;
  }
`;

const Header = () => {
  return(
    <StyledHeader>
      <h1>Baby Byrd will...</h1>
      <Subheader>
        <p>Be born on what day? Weigh how much? Be a girl or boy?</p>
        <p style={{fontSize:'1.5rem'}}>See the guesses below!</p>
      </Subheader>
    </StyledHeader>
  );
};

export default Header;