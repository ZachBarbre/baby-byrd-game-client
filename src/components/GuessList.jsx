import React, { useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context' 

const Main = styled.main`
/* background-color: var(--primary-light); */
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
  padding: 0 2%;
  border-radius: 25px 25px 25px 25px;
}

li {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

h3 {
  font-family: 'Yellowtail', cursive;
  font-size: 1.65rem;
  min-width: 220px;
  margin: 18px 0;
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
    width: 95%;
  }
  li {
    justify-content: space-evenly;
  }
  h3 {
    margin: 18px 0 0 0;
  }
}

@media screen and (max-width: 420px) {
  ul {
    width: 95%;
  }
}
`;

const GuessList = () => {
  const [value, dispach] = useContext(StateContext);
  console.log(value);
  return(
    <Main>  
      <ul>
        {value.map((guess) => (
          <li key={guess._id}>
            <h3>{guess.name} thinks the baby...</h3>
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