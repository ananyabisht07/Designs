import React from 'react';
import './App.css';
import Bg from './Components/Bg'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardsGroup from './Components/CardsGroup';

function App() {
  return (
    <div className="App">
      <h1 className="heading" style={{marginTop:"1em"}}>Welcome to the Site</h1>
      <Bg />
      <CardsGroup />
    </div>
  );
}

export default App;
