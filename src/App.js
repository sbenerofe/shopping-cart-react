import React, { useState } from 'react';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';

import './App.css';

const App = () => {
  const [ cartItems, setCartItems ] = useState([]);

  const openCart = () => {
    document.getElementById( 'myCart' ).style.width = '250px';
  };

  const closeCart = () => {
    document.getElementById( 'myCart' ).style.width = '0';
  };

  return (
    <div className='App'>
      <Cart array={ cartItems } openFunc={ closeCart }/>
      <div className='upper-container'>
        <h1>PokéMART</h1>
        <div className='navbar-container'>
          <Navbar text={ 'HOME' }/>
          <Navbar text={ 'SHOP' }/>
          <Navbar text={ `CART(${ cartItems.length })` } func={ openCart } />
        </div>
      </div>
      <div className='lower-container'>
        {/*<Home/>*/}
        <Shop array={ cartItems } setArray={ setCartItems }/>
      </div>
    </div>
  );
};

export { App };