import React from 'react';
import uniqid from 'uniqid';

import { CartItem } from './CartItem';

const Cart = ( props ) => {
  return (
    <div className='Cart' id='myCart'>
      <h1>YOUR SHOPPING CART</h1>
      <div className='cartItems-container'>
        { props.array.map((item) => {
          return item;
        })}
      </div>
      <p>TOTAL: 円</p>
      <button>BUY</button>
      <button onClick={ props.openFunc }>CLOSE</button>
    </div>
  );
};

export { Cart };