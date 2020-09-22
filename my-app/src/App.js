import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Cards from './Cards';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className="container mt-4">
          <Jumbotron/>
          <Cards/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
