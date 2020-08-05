import React from 'react';
import './MobileCss.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap-social/bootstrap-social.css';


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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
