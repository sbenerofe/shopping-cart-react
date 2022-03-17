import React from 'react';

//a button can have a value
const Item = ( props ) => {
  return (
    <div className='item'>
      <img src={ props.icon } alt={ props.name }/>
      <p>{ props.name }</p>
      <p>円 { props.price }</p>
      <div className='input-container'>
        <input type='number' id={ props.itemID } defaultValue={ 1 }/>
        <button onClick={ props.func }>ADD TO CART</button>
      </div>
    </div>
  );
};

export { Item };