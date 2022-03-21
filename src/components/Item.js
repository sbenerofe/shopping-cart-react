import React from 'react';

const Item = ( props ) => {
  const { item, addItem } = props;

  return (
    <div className='item'>
      <img src={ item.icon } alt={ item.name }/>
      <p>{ item.name }</p>
      <p>円 { item.price }</p>
      <button onClick={ () => { addItem( item ) } } >ADD TO CART</button>
    </div>
  );
};

export { Item };