import React, { useReducer } from 'react';
import Reducer from './reducers';
import { StateProvider } from './context';
import GuessList from './components/GuessList';
import Header from './components/Header';
import AddGuess from './components/AddGuess';

const App = () => {
  const initalState = [];

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
