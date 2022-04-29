import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';

import './App.css';
import { data } from './components/data';

const App = () => {
  const navigate = useNavigate();

  const { catalog } = data;

  const [cartItems, setCartItems] = useState([]);

  //this function add an item into the cart
  const addItem = (item) => {
    //checks if the item is already inside the cart or not
    const added = cartItems.find((val) => val.id === item.id);

    if (added) {
      //this line maps out the array and searching the item by id by comparing to value and if true invoke the function
      setCartItems(
        cartItems.map((val) =>
          val.id === item.id ? { ...added, quantity: added.quantity + 1 } : val
        )
      );
    } else {
      setCartItems(cartItems.concat({ ...item, quantity: item.quantity + 1 }));
    }
  };

  //this function removes an item or decrease item count by 1
  const removeItem = (item) => {
    const added = cartItems.find((val) => val.id === item.id);

    if (added.quantity === 1) {
      setCartItems(cartItems.filter((val) => val.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((val) =>
          val.id === item.id ? { ...added, quantity: added.quantity - 1 } : val
        )
      );
    }
  };

  const openCart = () => {
    document.getElementById('myCart').style.width = '40%';
  };

  const closeCart = () => {
    document.getElementById('myCart').style.width = '0';
  };

  const buyBye = () => {
    if (cartItems.length === 0) {
      return;
    } else {
      setCartItems([]);
      alert('THANK YOU FOR YOUR PURCHASE');
    }
  };

  return (
    <div className='App'>
      <Cart
        addItem={addItem}
        removeItem={removeItem}
        buyBye={buyBye}
        cartItems={cartItems}
        closeCart={closeCart}
      />
      <div className='upper-container'>
        <h1>Town_Values_Store</h1>
        <div className='navbar-container'>
          <Navbar
            text={'HOME'}
            func={() => {
              navigate('/pokemart-react');
            }}
          />
          <Navbar
            text={'SHOP'}
            func={() => {
              navigate('pokemart-react/shop');
            }}
          />
          <Navbar text={`CART(${cartItems.length})`} func={openCart} />
        </div>
      </div>
      <div className='lower-container'>
        <Routes>
          <Route path='/pokemart-react' element={<Home />}></Route>
          <Route
            path='/pokemart-react/shop'
            element={<Shop addItem={addItem} catalog={catalog} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export { App };
