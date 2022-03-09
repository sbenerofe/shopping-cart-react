import React from 'react';

//a button can have a value
const Item = ( props ) => {
  return (
    <div className='item'>
      <img src={ props.icon } alt={ props.name }/>
      <p>{ props.name }</p>
      <p>円 { props.price }</p>
      <div className='input-container'>
        <input type='number' value='1' onChange={ props.quantityChg }/>
        <button onClick={ props.func }>ADD TO CART</button>
      </div>
    </div>
  );
};

export { Item };