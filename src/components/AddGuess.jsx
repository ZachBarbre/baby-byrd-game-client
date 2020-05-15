import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 5% 0;
`;

const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  transition: 0.2s ease-in;
  font-family: 'Yellowtail', cursive; 
  width: 60%;
  max-width: 250px;
  font-size: 1.6rem;
  padding: 10px 0;
  border-radius: 5px;
  border-style: none;

  :hover {
    background-color: var(--primary-light);
    /* color: var(--dark); */
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  max-width: 760px;
  background-color: var(--primary-light);
  padding: 5%;
  border-radius: 25px 25px 25px 25px;

  /* label {
    display: block;
  }

  input {
    width: 300px;
  } */
`;

const AddGuess = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [babyWeight, setBabyWeight] = useState('');
  const [sex, setSex] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [value, dispach] = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispach({
      type: 'ACTION_ADD_GUESS',
      _id: Math.floor(Math.random()*100) + Math.floor(Math.random()*100),
      name, 
      birthDate,
      babyWeight,
      sex
    })

    setName('');
    setBirthDate('');
    setBabyWeight('');
    setSex('');
    setShowForm(false);
  }

  return(
    <Section>
      {showForm ?  
        <Form onSubmit={e => handleSubmit(e)}>
          <label htmlFor="name">
            Your Name:
          </label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          
          <label htmlFor="birthDate">
            Baby Byrd's Birthdate:
          </label>
          <input 
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            />
          
          <label>
            Baby Byrd's Weight: 
            <input 
              type="number"
              name="babyWeight"
              value={babyWeight}
              onChange={(e) => setBabyWeight(e.target.value)}
              />
          </label>
          <label>
            <input 
              type="radio"
              name="sex"
              value="boy"
              onChange={(e) => setSex(e.target.value)}
              checked={sex === 'boy'}
              />
            Boy
          </label>
          <label>
            <input 
              type="radio"
              name="sex"
              value="girl"
              onChange={(e) => setSex(e.target.value)}
              checked={sex === 'girl'}
              />
            Girl
          </label>
          <Button type="submit">Add your Guess</Button>
        </Form>
      :
      <Button type="button" onClick={() => setShowForm(!showForm)}>Add your Guess!</Button>
      }
    </Section>
  )
}

export default AddGuess;