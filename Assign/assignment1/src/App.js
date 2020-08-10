import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import MainComponent from './Components/MainComponent';
import { BrowserRouter, } from 'react-router-dom';


class App extends Component {

  render(){
        return (
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
);
  }
  }

export default App;
