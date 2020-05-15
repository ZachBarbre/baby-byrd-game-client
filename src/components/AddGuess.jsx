import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import StateContext from '../context';

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
    <section>
      {showForm ?  
        <form onSubmit={e => handleSubmit(e)}>
          <label>
            Your Name:
            <input 
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </label>
          <label>
            Baby Byrd's Birthdate:
            <input 
              type="date"
              name="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              />
          </label>
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
          <button type="submit">Add your Guess</button>
        </form>
      :
      <button type="button" onClick={() => setShowForm(!showForm)}>Add your Guess!</button>
      }
    </section>
  )
}

export default AddGuess;