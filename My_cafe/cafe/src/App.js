import React from 'react';
import './MobileCss.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import MainComponent from './components/MainComponent';


function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
