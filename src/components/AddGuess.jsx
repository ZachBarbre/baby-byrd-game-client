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
    margin: 10px 0 5px;
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
        <FormDiv>

          <Form onSubmit={e => handleSubmit(e)}>
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