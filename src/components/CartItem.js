import React, { useState } from 'react';

const CartItem = ( props ) => {

  const incrementItem = () => {
    props.setItemCount( props.itemCount + 1 );
  };

  const decrementItem =() => {
    props.setItemCount( props.itemCount - 1 );
  };

  return (
    <div className='CartItem'>
      <img src={ props.icon } alt={ props.name } />
      <div className='item-details'>
        <p>{ props.name }</p>
        <p>円 {( props.price * props.itemCount )}</p>
        <div className='quantity-container'>
          <button onClick={ decrementItem }>-</button>
          <div>{ props.itemCount }</div>
          <button onClick={ incrementItem } >+</button>
        </div>
      </div>
    </div>
  );
};

export { CartItem };