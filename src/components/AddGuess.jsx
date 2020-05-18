import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StateContext from '../context';
import { post, API_URL } from '../utils/apiConn';

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
  align-self: center;
  margin: 2%;

  :hover {
    background-color: ${props => props.showForm ? 'var(--secondary)' : 'var(--primary-light)'};
    /* color: var(--dark); */
  }
`;

const FormDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  width: 80%;
  max-width: 380px;
  background-color: var(--primary-light);
  padding: 3%;
  border-radius: 25px 25px 25px 25px;

  p {
    color: var(--primary);
  }
`;

const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  width: 90%;
  margin: 0 auto;
`;

const Control = styled.div`
  margin: 1% 0;
  
  label {
    display: block;
  }

  input {
    margin: 5px 0 10px;
  }
`;

const Radio = styled.div`
  display: block;
  margin: 10px 0 5%;
`;

const AddGuess = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [babyWeight, setBabyWeight] = useState('');
  const [sex, setSex] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [value, dispach] = useContext(StateContext);
  const [formError, setFormError] = useState('');

  const validateData = () => {
    if (!name || !babyWeight || !birthDate || !sex) {
      setFormError('Please complete all items.');
      return false;
    }
    const nameArray = value.map(guess => guess.name.toLowerCase());
    if (nameArray.includes(name.toLowerCase())) {
      setFormError('You already have already guessed.');
      return false;
    }
    const formatBirthDate = moment(birthDate).format('MMM Do');
    const guessArray = value.map(guess => [guess.birthDate, guess.babyWeight, guess.sex])
    console.log(guessArray);
    if (guessArray.includes([formatBirthDate, babyWeight, sex])) {
      setFormError('Please make a unique guess.')
      return false;
    }

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataOK = validateData();
    console.log(dataOK);
    // if (!name || !babyWeight || !birthDate || !sex) {
    //   setFormError('Please complete all items');
    // } else {
    //   const guessData = {
    //     name, 
    //     birthDate,
    //     babyWeight,
    //     sex,
    //   }
    //   const addedGuess = await post(`${API_URL}/guesses`, guessData);

    //   console.log(addedGuess);

    //   dispach({
    //     type: 'ACTION_ADD_GUESS',
    //     data: {
    //       _id: addedGuess._id,
    //       name, 
    //       birthDate,
    //       babyWeight,
    //       sex
    //     }
    //   })
  
    //   setName('');
    //   setBirthDate('');
    //   setBabyWeight('');
    //   setSex('');
    //   setShowForm(false);
    //   setFormError('');
    // }

  }

  return(
    <Section>
      {showForm ? 
        <FormDiv>
          <Form onSubmit={e => handleSubmit(e)}>
            {formError ? <p>{formError}</p> : ''}
            <Control>
              <label htmlFor="name">
                Your Name:
              </label>
              <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Control>
            <Control>
              <label htmlFor="birthDate">
                Baby Byrd's Birthdate:
              </label>
              <input 
                type="date"
                name="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                />
            </Control>
            <Control>
              <label htmlFor="babyWeight">
                Baby Byrd's Weight (lbs): 
              </label>
              <input 
                type="number"
                name="babyWeight"
                value={babyWeight}
                onChange={(e) => setBabyWeight(e.target.value)}
                />
            </Control>
            <Radio>
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
            </Radio>
            <Button type="submit" showForm={showForm}>Add your Guess</Button>
          </Form>
        </FormDiv> 
      :
      <Button type="button" onClick={() => setShowForm(!showForm)}>Add your Guess!</Button>
      }
    </Section>
  )
}

export default AddGuess;