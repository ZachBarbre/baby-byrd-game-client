import React, { useReducer } from 'react';
import Reducer from './reducers';
import { StateProvider } from './context';
import GuessList from './components/GuessList';
import Header from './components/Header';
import AddGuess from './components/AddGuess';

const App = () => {
  const initalState = [
    {
      _id: "5eb9d1b50724d12367e7798e",
      name: "Zach",
      babyWeight: 8.5,
      birthDate: "July 6th",
      sex: "boy",
    },
    {
      _id: "5ebab1fe7bf5df0d6e4bdd04",
      name: "Jonathan Elliott",
      babyWeight: 6.66,
      birthDate: "June 26th",
      sex: "girl",
    }
  ];


  return (
    <div className="App">
      <StateProvider value={useReducer(Reducer, initalState)}>
        <Header />
        <GuessList />
        <AddGuess />
      </StateProvider>
    </div>
  );
}

export default App;
