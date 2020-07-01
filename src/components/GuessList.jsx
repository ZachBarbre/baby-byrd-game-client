import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import StateContext from '../context' 
import { get, API_URL } from '../utils/apiConn';
import Loading from './Loading';
import { guesses } from '../utils/guesses';

const Main = styled.main`
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

const GuessList = () => {
  const [value, dispach] = useContext(StateContext);
  // console.log(guesses);
  useEffect(() => {
    const fetchData = () => {
      // const guessData = await get(`${API_URL}/guesses`);
      const guessData = guesses;
      dispach({type: 'ACTION_GET_DATA', data: guessData});
    }
    fetchData();
  },[dispach]);

  return(
    <Main>
      {value.length === 0 ? <Loading /> : ''}  
      <ul>
        {value.map((guess) => (
          <li key={guess._id}>
            <h3><span>{guess.name}</span> thinks the baby...</h3>
            <div>
              <p>Will be born <strong>{guess.birthDate}</strong>.</p>
              <p className="middle">Will weigh <strong>{guess.babyWeight} lbs</strong>.</p>
              <p>Will be a <strong>{guess.sex}</strong>.</p>
            </div>
            
          </li>
        ))}
      </ul>
    </Main>
  );
}

export default GuessList;