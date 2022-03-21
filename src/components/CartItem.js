import React from 'react';

const CartItem = ( props ) => {
  const { item, addItem, removeItem } = props;

  return (
    <div className='CartItem'>
      <div className='img-container'>
        <img src={ item.icon } alt={ item.name } />
      </div>
      <div className='item-details'>
        <p>{ item.name }</p>
        <p>円 { (item.price * item.quantity ) }</p>
        <div className='quantity-container'>
          <button onClick={ () => { removeItem( item ) } } >-</button>
          <div>{ item.quantity }</div>
          <button onClick={ () => { addItem( item ) } }>+</button>
        </div>
      </div>
    </div>
  );
};

export { CartItem };