import React from 'react';
import './App.css';
//import './bg1.css';
import Bg from './Components/Bg'
import 'bootstrap/dist/css/bootstrap.min.css'
import OnScroll1 from './Components/OnScroll1';
import WavyCards from './Components/WavyCards';

function App() {
  return (
    <div className="">
          <OnScroll1 />
          <Bg />
    </div>
  );
}

// <h1 className="heading" style={{marginTop:"1em"}}>Welcome to the Site</h1>
//       <Bg />
//       <CardsGroup />


export default App;
