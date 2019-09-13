import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import NameList from './Components/NameList';
import LifeCycleA from './Components/LifeCycleA';

function App() {
  return (
    <div className="App">
      <LifeCycleA/>
      {/* <NameList/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <Greet/>
      <Welcome/> */}
    </div>
  );
}

export default App;
