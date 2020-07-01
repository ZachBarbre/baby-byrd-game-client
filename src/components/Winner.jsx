import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import StateContext from '../context' ;
import { guesses } from '../utils/guesses';

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3vh 0;
color: var(--dark);

ul {
  width: 80%;
  max-width: 840px;
  list-style: none;
  background-color: var(--secondary);
  padding: 0 3%;
  border-radius: 25px 25px 25px 25px;
}

li {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

h3 {
  font-family: 'Yellowtail', cursive;
  font-size: 1.5rem;
  min-width: 320px;
  margin: 20px 0;
}

h3 span {
  font-size: 1.8rem;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  width: 33%;
  max-width: 120px;
  padding: 10px;
}

.middle {
  border-right: 1px solid var(--dark);
  border-left: 1px solid var(--dark);
}

@media screen and (max-width: 900px) {
  ul {
    width: 90%;
  }
  li {
    justify-content: space-evenly;
  }
  h3 {
    margin: 18px 0 0 0;
  }
}

@media screen and (max-width: 420px) {
  li {
    min-width: 280px;
  }
}
`;

const Winner = () => {
  const [value, dispach] = useContext(StateContext);
  // console.log(guesses);

  const calculateWinner = (guessList) => {
    
    const rightDateAndWeight = guessList.filter(guess => {
      // console.log(guess.birthDate === 'June 18th' && guess.babyWeight === 7.9)
      if (guess.birthDate === 'June 18th' && guess.babyWeight === 7.9) {
        return guess
      }
    })
    
    return rightDateAndWeight[0];
  }

  const winningPlayer = calculateWinner(value); 
  
  return(
    <Section>
      <h2>Congratulation to the Winner:</h2>
      <ul>
      <li>
        <h3><span>Baby Winnie Byrd</span>  ...</h3>
        <div>
          <p>Born on <strong>June 17th</strong>.</p>
          <p className="middle">Weighed <strong>7.5 lbs</strong>.</p>
          <p>Is a beautiful <strong>girl</strong>.</p>
        </div>
        
      </li>
      {winningPlayer ?
        <li>
          <h3><span>{winningPlayer.name}</span> thinks the baby...</h3>
          <div>
            <p>Will be born <strong>{winningPlayer.birthDate}</strong>.</p>
            <p className="middle">Will weigh <strong>{winningPlayer.babyWeight} lbs</strong>.</p>
            <p>Will be a <strong>{winningPlayer.sex}</strong>.</p>
          </div>
          
        </li> : ''}
      </ul>
    </Section>
  );
}

export default Winner;