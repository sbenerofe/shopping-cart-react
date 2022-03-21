import React from 'react';

import { CartItem } from './CartItem';

const Cart = ( props ) => {
  const { cartItems, addItem, removeItem, buyBye, closeCart } = props;

  return (
    <div className='Cart' id='myCart'>
      <h1>YOUR SHOPPING CART</h1>
      <div className='cartItems-container'>
        { cartItems.map((item) => {
          return <CartItem item={ item } addItem={ addItem } removeItem={ removeItem } />;
        })}
      </div>
      <button onClick={ buyBye }>BUY</button>
      <button onClick={ closeCart }>CLOSE</button>
    </div>
  );
};

export { Cart };