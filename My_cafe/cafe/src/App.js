import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >
      <Header />
      <div className="">
        <Switch>
          <Route  path="/home" component={Home} />
          <Route  exact path="/aboutus" component={About} />
          <Route  exact path="/menu" component={Menu} />
          <Route  exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
