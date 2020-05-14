import React from 'react';
import Guesses from './components/Guesses';

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baby Byrd will...</h1>
        <p>Be born on what day? Weigh how much? Be a girl or boy?</p>
        <p>See the guesses below!</p>
      </header>
      <Guesses />
    </div>
  );
}

export default App;
