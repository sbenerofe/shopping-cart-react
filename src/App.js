import React from 'react';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';

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
        {/*<Home/>*/}
        <Shop/>
      </div>
    </div>
  );
};

export { App };