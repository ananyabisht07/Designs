import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Components/Header';
import BusinessPg from './Components/BusinessPg';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="">
      <Header />
        <BusinessPg />
      <Footer />
    </div>
  );
}

export default App;
