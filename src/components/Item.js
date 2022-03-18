import React from 'react';
import uniqid from 'uniqid';

import { CartItem } from './CartItem';

//a button can have a value
const Item = ( props ) => {
  /*const addItem = () => {
    if( props.item === 0 ) {
      props.setItem( props.item + 1 );

      const newArray = [<CartItem icon={props.icon}  />]
    } else {
      props.setItem( props.item + 1 );
    }
  };*/

  return (
    <div className='item'>
      <img src={ props.item.icon } alt={ props.item.name }/>
      <p>{ props.item.name }</p>
      <p>円 { props.item.price }</p>
      <button id={ props.item.itemID }>ADD TO CART</button>
    </div>
  );
};

export { Item };