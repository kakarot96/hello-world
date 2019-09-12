import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      <Counter/>
      {/* <Greet/>
      <Welcome/> */}
    </div>
  );
}

export default App;
