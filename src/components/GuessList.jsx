import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context' 


const GuessList = () => {
  const [value, dispach] = useContext(StateContext);
  console.log(value);
  return(
    <main>  
      <ul>
        {value.map((guess) => (
          <li key={guess._id}>
            <h3>{guess.name} thinks...</h3>
            <div>
              Be born {guess.birthDate} 
              Will weigh {guess.babyWeight} 
              Will be a {guess.sex} 
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default GuessList;