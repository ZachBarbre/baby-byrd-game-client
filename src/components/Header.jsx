import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  color: var(--dark);
  
  h1 {
    font-family: 'Yellowtail', cursive;
    font-size: 3.5rem;
  }

  .subheader {
   width: 80%;
   background-color: var(--primary-light);
   margin-bottom: 5%;
   padding: 0 5%;
   border-radius: 5%;
   text-align: center;
  }
`;

const Header = () => {
  return(
    <StyledHeader>
      <h1>Baby Byrd will...</h1>
      <div className="subheader">
        <p>Be born on what day? Weigh how much? Be a girl or boy?</p>
        <p>See the guesses below!</p>
      </div>
    </StyledHeader>
  );
};

export default Header;