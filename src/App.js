import React from 'react';

import { Navbar } from './components/Navbar';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='upper-container'>
        <h1>PokéMART</h1>
        <div className='navbar-container'>
          <Navbar text={ 'HOME' }/>
          <Navbar text={ 'SHOP' }/>
          <Navbar text={ 'CART' }/>
        </div>
      </div>
      <div className='lower-container'>
        <p>Welcome to the Poké Mart!</p>
        <p>May I help you?</p>
        <button>BUY</button>
      </div>
    </div>
  );
};

export { App };