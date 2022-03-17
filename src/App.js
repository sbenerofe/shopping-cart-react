import React, { useState } from 'react';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';

import './App.css';

const App = () => {
  const [ cartItems, setCartItems ] = useState([]);

  return (
    <div className='App'>
      <div className='upper-container'>
        <h1>PokéMART</h1>
        <div className='navbar-container'>
          <Navbar text={ 'HOME' }/>
          <Navbar text={ 'SHOP' }/>
          <Navbar text={ `CART(${ cartItems.length })` }/>
        </div>
      </div>
      <div className='lower-container'>
        {/*<Home/>*/}
        <Shop array={ cartItems } setArray={ setCartItems } />
      </div>
    </div>
  );
};

export { App };